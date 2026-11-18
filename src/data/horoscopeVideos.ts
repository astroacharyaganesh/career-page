export interface HoroscopeVideoItem {
  id: string;
  kind: 'monthly' | 'yearly';
  title: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
}

export interface HoroscopeVideosPayload {
  channelUrl: string;
  source: 'live-rss' | 'playlist-rss' | 'fallback';
  monthly: HoroscopeVideoItem;
  yearly: HoroscopeVideoItem;
}

export const ACHARYA_GANESH_YOUTUBE_CHANNEL_ID = 'UCD4Qey1AT7L_znog__F8Ulg';
export const ACHARYA_GANESH_YOUTUBE_URL = 'https://www.youtube.com/@acharyaganeshchannel';
export const ACHARYA_GANESH_YOUTUBE_VIDEOS_URL =
  'https://www.youtube.com/@acharyaganeshchannel/videos';

export const INITIAL_HOROSCOPE_VIDEOS: HoroscopeVideosPayload = {
  channelUrl: ACHARYA_GANESH_YOUTUBE_URL,
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

const UTC_MONTH_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export function formatVideoDateUtc(isoDate: string): string {
  const parsed = Date.parse(isoDate);
  if (Number.isNaN(parsed)) return '';
  const d = new Date(parsed);
  const day = d.getUTCDate();
  const mon = UTC_MONTH_SHORT[d.getUTCMonth()] || 'Nov';
  const year = d.getUTCFullYear();
  return `${day} ${mon} ${year}`;
}

export interface ParsedFeedEntry {
  id: string;
  title: string;
  publishedAt: string;
  description: string;
  thumbnail: string;
  url: string;
}

function decodeXmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

export function parseYouTubeAtomFeed(xml: string): ParsedFeedEntry[] {
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  const parsed: ParsedFeedEntry[] = [];

  for (const block of entries) {
    const id = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
    const rawTitle = block.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
    if (!id || !rawTitle) continue;

    const publishedAt =
      block.match(/<published>([^<]+)<\/published>/)?.[1]?.trim() ||
      block.match(/<updated>([^<]+)<\/updated>/)?.[1]?.trim() ||
      '';
    const rawDesc =
      block.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1]?.trim() || '';
    const thumb =
      block.match(/<media:thumbnail[^>]*url="([^"]+)"/)?.[1]?.trim() ||
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    parsed.push({
      id,
      title: decodeXmlEntities(rawTitle),
      publishedAt,
      description: decodeXmlEntities(rawDesc),
      thumbnail: thumb,
      url: `https://www.youtube.com/watch?v=${id}`
    });
  }

  return parsed;
}

const MONTHLY_PATTERN =
  /monthly|masik|मासिक|rashifal\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)|(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+(?:\d{4}\s+)?(?:horoscope|rashifal|rashi)|transit|राशिफल/i;

const YEARLY_PATTERN =
  /yearly|annual|varshik|वार्षिक|202\d\s+(?:horoscope|rashifal|predictions?|राशिफल)|राशि\s*202\d|zodiac.*202\d/i;

function toHoroscopeVideo(
  entry: ParsedFeedEntry,
  kind: 'monthly' | 'yearly'
): HoroscopeVideoItem {
  return {
    id: entry.id,
    kind,
    title: entry.title,
    publishedAt: entry.publishedAt,
    thumbnail: entry.thumbnail,
    url: entry.url
  };
}

export function pickLatestHoroscopeVideos(
  channelEntries: ParsedFeedEntry[],
  monthlyPlaylistEntries?: ParsedFeedEntry[],
  yearlyPlaylistEntries?: ParsedFeedEntry[]
): HoroscopeVideosPayload {
  const monthlyFromPlaylist = monthlyPlaylistEntries?.[0];
  const yearlyFromPlaylist = yearlyPlaylistEntries?.[0];

  const sortedChannel = [...channelEntries].sort((a, b) =>
    (b.publishedAt || '').localeCompare(a.publishedAt || '')
  );

  const yearlyMatch =
    yearlyFromPlaylist ||
    sortedChannel.find((e) => YEARLY_PATTERN.test(`${e.title} ${e.description}`)) ||
    sortedChannel[0];

  const monthlyMatch =
    monthlyFromPlaylist ||
    sortedChannel.find(
      (e) =>
        e.id !== yearlyMatch?.id &&
        MONTHLY_PATTERN.test(`${e.title} ${e.description}`)
    ) ||
    sortedChannel.find((e) => e.id !== yearlyMatch?.id) ||
    sortedChannel[0];

  return {
    channelUrl: ACHARYA_GANESH_YOUTUBE_URL,
    source:
      monthlyFromPlaylist || yearlyFromPlaylist
        ? 'playlist-rss'
        : sortedChannel.length > 0
        ? 'live-rss'
        : 'fallback',
    monthly: monthlyMatch
      ? toHoroscopeVideo(monthlyMatch, 'monthly')
      : INITIAL_HOROSCOPE_VIDEOS.monthly,
    yearly: yearlyMatch
      ? toHoroscopeVideo(yearlyMatch, 'yearly')
      : INITIAL_HOROSCOPE_VIDEOS.yearly
  };
}
