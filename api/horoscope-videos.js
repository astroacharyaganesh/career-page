const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UCD4Qey1AT7L_znog__F8Ulg';
const CHANNEL_URL = 'https://www.youtube.com/@acharyaganeshchannel';

const FALLBACK = {
  channelUrl: CHANNEL_URL,
  source: 'fallback',
  monthly: {
    id: 'uWVB3_2B_FI',
    kind: 'monthly',
    title: 'Monthly Transit & Rashi Impact: Stock Market, Gold, Silver & Career | All 12 Zodiacs',
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

function decodeXml(input) {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function parseAtom(xml) {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  const list = [];
  for (const block of entries) {
    const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
    const rawTitle = block.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
    if (!id || !rawTitle) continue;
    const publishedAt = block.match(/<published>([^<]+)<\/published>/)?.[1]?.trim() || '';
    const rawDesc = block.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1]?.trim() || '';
    const thumb =
      block.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1]?.trim() ||
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    list.push({
      id,
      title: decodeXml(rawTitle),
      publishedAt,
      description: decodeXml(rawDesc),
      thumbnail: thumb,
      url: `https://www.youtube.com/watch?v=${id}`
    });
  }
  return list;
}

const MONTHLY_RE =
  /monthly|masik|मासिक|rashifal\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)|(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+(?:\d{4}\s+)?(?:horoscope|rashifal|rashi)|transit|राशिफल/i;
const YEARLY_RE =
  /yearly|annual|varshik|वार्षिक|202\d\s+(?:horoscope|rashifal|predictions?|राशिफल)|राशि\s*202\d|zodiac.*202\d/i;

export default async function handler(_req, res) {
  const fetchFeed = async (url) => {
    const resp = await fetch(url, {
      headers: { 'user-agent': 'AcharyaGaneshSite/1.0' },
      signal: AbortSignal.timeout(4500)
    });
    if (!resp.ok) return [];
    return parseAtom(await resp.text());
  };

  try {
    const monthlyPl = process.env.YOUTUBE_MONTHLY_PLAYLIST_ID?.trim();
    const yearlyPl = process.env.YOUTUBE_YEARLY_PLAYLIST_ID?.trim();
    const [channelEntries, monthlyEntries, yearlyEntries] = await Promise.all([
      fetchFeed(`https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(CHANNEL_ID)}`),
      monthlyPl
        ? fetchFeed(`https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(monthlyPl)}`)
        : Promise.resolve(undefined),
      yearlyPl
        ? fetchFeed(`https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(yearlyPl)}`)
        : Promise.resolve(undefined)
    ]);

    const sorted = [...channelEntries].sort((a, b) =>
      (b.publishedAt || '').localeCompare(a.publishedAt || '')
    );
    const yearly =
      yearlyEntries?.[0] ||
      sorted.find((e) => YEARLY_RE.test(`${e.title} ${e.description}`)) ||
      sorted[0];
    const monthly =
      monthlyEntries?.[0] ||
      sorted.find((e) => e.id !== yearly?.id && MONTHLY_RE.test(`${e.title} ${e.description}`)) ||
      sorted.find((e) => e.id !== yearly?.id) ||
      sorted[0];

    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    res.status(200).json({
      channelUrl: CHANNEL_URL,
      source: monthlyEntries?.[0] || yearlyEntries?.[0] ? 'playlist-rss' : sorted.length ? 'live-rss' : 'fallback',
      monthly: monthly ? { ...monthly, kind: 'monthly' } : FALLBACK.monthly,
      yearly: yearly ? { ...yearly, kind: 'yearly' } : FALLBACK.yearly
    });
  } catch {
    res.status(200).json(FALLBACK);
  }
}
