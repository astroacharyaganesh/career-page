import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

const rawTemplatePath = path.resolve(distDir, 'index.html');
const rawTemplate = fs.readFileSync(rawTemplatePath, 'utf-8');

// Preserve unpopulated Vite template for Express Node production server
fs.writeFileSync(path.resolve(distSsrDir, 'template.html'), rawTemplate, 'utf-8');

const serverEntryUrl = pathToFileURL(path.resolve(distSsrDir, 'entry-server.js')).href;
const { render, buildSitemapXml, getAllSitemapPaths } = await import(serverEntryUrl);

const routes = getAllSitemapPaths();
for (const routePath of routes) {
  const { html: appHtml, headTags } = render(routePath);
  const withSeoHead = rawTemplate.replace(
    /<!--SEO_HEAD_START-->[\s\S]*?<!--SEO_HEAD_END-->/,
    headTags
  );
  const finalHtml = withSeoHead.replace('<!--APP_HTML-->', appHtml);

  const relativeDir = routePath.replace(/^\/+/, '').replace(/\/+$/, '');
  const outFile = relativeDir
    ? path.resolve(distDir, relativeDir, 'index.html')
    : path.resolve(distDir, 'index.html');

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, finalHtml, 'utf-8');
}

fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), buildSitemapXml(), 'utf-8');
console.log(`Prerendered ${routes.length} routes and sitemap.xml into dist/`);
