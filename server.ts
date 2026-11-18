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

  // Auto-updating Monthly & Yearly Horoscope YouTube video feed (15 min cache)
  let cachedVideos: { expiresAt: number; payload: unknown } | null = null;
  app.get('/api/horoscope-videos', async (_req, res) => {
    const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCD4Qey1AT7L_znog__F8Ulg';
    const channelUrl = 'https://www.youtube.com/@acharyaganeshchannel';
    const fallbackPayload = {
      channelUrl,
      source: 'fallback',
      monthly: {
        id: 'uWVB3_2B_FI',
        kind: 'monthly',
        title:
          'Monthly Transit & Rashi Impact: Stock Market, Gold, Silver & Career | All 12 Zodiacs',
        publishedAt: '2026-11-12T13:16:18+00:00',
        thumbnail: 'https://i.ytimg.com/vi/uWVB3_2B_FI/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=uWVB3_2B_FI'
      },
      yearly: {
        id: 'Pg9lREY2YNQ',
        kind: 'yearly',
        title: 'Yearly Horoscope 2026–2027: Ketu, Mars & Jupiter Major Transit | Hanish Bagga',
        publishedAt: '2026-11-17T12:30:34+00:00',
        thumbnail: 'https://i.ytimg.com/vi/Pg9lREY2YNQ/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=Pg9lREY2YNQ'
      }
    };

    if (cachedVideos && Date.now() < cachedVideos.expiresAt) {
      res.status(200).json(cachedVideos.payload);
      return;
    }

    const decodeXml = (input: string) =>
      input
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'");

    const parseAtom = (xml: string) => {
      const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
      return entries
        .map((block) => {
          const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
          const rawTitle = block.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
          if (!id || !rawTitle) return null;
          const publishedAt =
            block.match(/<published>([^<]+)<\/published>/)?.[1]?.trim() ||
            block.match(/<updated>([^<]+)<\/updated>/)?.[1]?.trim() ||
            '';
          const rawDesc =
            block.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1]?.trim() || '';
          const thumbnail =
            block.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1]?.trim() ||
            `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          return {
            id,
            title: decodeXml(rawTitle),
            publishedAt,
            description: decodeXml(rawDesc),
            thumbnail,
            url: `https://www.youtube.com/watch?v=${id}`
          };
        })
        .filter((x): x is NonNullable<typeof x> => x !== null);
    };

    const fetchFeed = async (feedUrl: string) => {
      const resp = await fetch(feedUrl, {
        headers: { 'user-agent': 'AcharyaGaneshSite/1.0' },
        signal: AbortSignal.timeout(4500)
      });
      if (!resp.ok) return [];
      return parseAtom(await resp.text());
    };

    try {
      const monthlyPlaylist = process.env.YOUTUBE_MONTHLY_PLAYLIST_ID?.trim();
      const yearlyPlaylist = process.env.YOUTUBE_YEARLY_PLAYLIST_ID?.trim();

      const [channelEntries, monthlyEntries, yearlyEntries] = await Promise.all([
        fetchFeed(`https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`),
        monthlyPlaylist
          ? fetchFeed(
              `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(monthlyPlaylist)}`
            )
          : Promise.resolve([]),
        yearlyPlaylist
          ? fetchFeed(
              `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(yearlyPlaylist)}`
            )
          : Promise.resolve([])
      ]);

      const sorted = [...channelEntries].sort((a, b) =>
        (b.publishedAt || '').localeCompare(a.publishedAt || '')
      );
      const yearlyRe =
        /yearly|annual|varshik|वार्षिक|202\d\s+(?:horoscope|rashifal|predictions?|राशिफल)|राशि\s*202\d|zodiac.*202\d/i;
      const monthlyRe =
        /monthly|masik|मासिक|rashifal\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)|(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+(?:\d{4}\s+)?(?:horoscope|rashifal|rashi)|transit|राशिफल/i;

      const yearlyPick =
        yearlyEntries[0] ||
        sorted.find((e) => yearlyRe.test(`${e.title} ${e.description}`)) ||
        sorted[0];
      const monthlyPick =
        monthlyEntries[0] ||
        sorted.find((e) => e.id !== yearlyPick?.id && monthlyRe.test(`${e.title} ${e.description}`)) ||
        sorted.find((e) => e.id !== yearlyPick?.id) ||
        sorted[0];

      const payload = {
        channelUrl,
        source:
          monthlyEntries[0] || yearlyEntries[0]
            ? 'playlist-rss'
            : sorted.length > 0
            ? 'live-rss'
            : 'fallback',
        monthly: monthlyPick
          ? { ...monthlyPick, kind: 'monthly' }
          : fallbackPayload.monthly,
        yearly: yearlyPick
          ? { ...yearlyPick, kind: 'yearly' }
          : fallbackPayload.yearly
      };

      cachedVideos = {
        expiresAt: Date.now() + 15 * 60 * 1000,
        payload
      };
      res.status(200).set({ 'Cache-Control': 'public, max-age=300' }).json(payload);
    } catch {
      res.status(200).json(fallbackPayload);
    }
  });

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
