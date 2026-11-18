import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

interface ServerEntryModule {
  render: (url: string) => { html: string; headTags: string };
  buildSitemapXml: (baseUrl?: string) => string;
}

async function createAppServer() {
  const app = express();

  let vite: import('vite').ViteDevServer | null = null;
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  } else {
    const clientDistDir = path.resolve(__dirname, 'dist');
    app.use(express.static(clientDistDir, { index: false }));
  }

  async function loadServerEntry(): Promise<ServerEntryModule> {
    if (!isProduction && vite) {
      return (await vite.ssrLoadModule('/src/entry-server.tsx')) as ServerEntryModule;
    }
    const prodEntryUrl = pathToFileURL(
      path.resolve(__dirname, 'dist-ssr/entry-server.js')
    ).href;
    return (await import(prodEntryUrl)) as ServerEntryModule;
  }

  app.get('/sitemap.xml', async (_req, res, next) => {
    try {
      const { buildSitemapXml } = await loadServerEntry();
      const xml = buildSitemapXml();
      res.status(200).set({ 'Content-Type': 'application/xml; charset=utf-8' }).send(xml);
    } catch (error) {
      next(error);
    }
  });

  app.get('/robots.txt', (_req, res) => {
    const robotsPath = isProduction
      ? path.resolve(__dirname, 'dist/robots.txt')
      : path.resolve(__dirname, 'public/robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.status(200).set({ 'Content-Type': 'text/plain; charset=utf-8' }).sendFile(robotsPath);
      return;
    }
    res
      .status(200)
      .set({ 'Content-Type': 'text/plain; charset=utf-8' })
      .send('User-agent: *\nAllow: /\nSitemap: https://acharyaganesh.com/sitemap.xml\n');
  });

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl || '/';
    try {
      let template = '';
      if (!isProduction && vite) {
        const rawTemplate = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, rawTemplate);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist-ssr/template.html'), 'utf-8');
      }

      const { render } = await loadServerEntry();
      const { html: appHtml, headTags } = render(url);

      const withSeoHead = template.replace(
        /<!--SEO_HEAD_START-->[\s\S]*?<!--SEO_HEAD_END-->/,
        headTags
      );
      const finalHtml = withSeoHead.replace('<!--APP_HTML-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html; charset=utf-8' }).end(finalHtml);
    } catch (error) {
      if (!isProduction && vite && error instanceof Error) {
        vite.ssrFixStacktrace(error);
      }
      next(error);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Acharya Ganesh SSR server listening on http://0.0.0.0:${PORT}`);
  });
}

createAppServer().catch((err) => {
  console.error('Failed to start Acharya Ganesh SSR server:', err);
  process.exit(1);
});
