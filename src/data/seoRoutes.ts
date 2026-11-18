import {
  HOROSCOPE_PERIODS,
  HoroscopePeriodSlug,
  PERIOD_TO_SLUG,
  SLUG_TO_PERIOD,
  ZODIAC_HOROSCOPES,
  ZodiacId,
  getZodiacProfile
} from './horoscopeData';
import { getIndiaCalendarInfo } from './panchangData';

export const SITE_ORIGIN = 'https://acharyaganesh.com';

export type AppRoute =
  | { kind: 'home'; pathname: '/' }
  | { kind: 'horoscope-hub'; pathname: '/horoscope/' }
  | {
      kind: 'horoscope-detail';
      pathname: `/horoscope/${HoroscopePeriodSlug}/${ZodiacId}/`;
      periodSlug: HoroscopePeriodSlug;
      signId: ZodiacId;
    }
  | { kind: 'panchang-hub'; pathname: '/panchang/' }
  | { kind: 'panchang-today'; pathname: '/panchang/today/' };

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface RouteSeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  breadcrumbs: BreadcrumbItem[];
  jsonLd: Record<string, unknown>[];
}

export function normalizePathname(rawPath: string): string {
  const pathOnly = (rawPath || '/').split('?')[0].split('#')[0] || '/';
  if (pathOnly === '/') return '/';
  const cleaned = pathOnly.replace(/\/+/g, '/').toLowerCase();
  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

export function parseAppRoute(rawPath: string): AppRoute {
  const normalized = normalizePathname(rawPath);

  if (normalized === '/') {
    return { kind: 'home', pathname: '/' };
  }

  if (normalized === '/horoscope/') {
    return { kind: 'horoscope-hub', pathname: '/horoscope/' };
  }

  if (normalized === '/panchang/') {
    return { kind: 'panchang-hub', pathname: '/panchang/' };
  }

  if (normalized === '/panchang/today/') {
    return { kind: 'panchang-today', pathname: '/panchang/today/' };
  }

  const horoscopeDetailMatch = normalized.match(
    /^\/horoscope\/(daily|weekly|monthly|yearly)\/([a-z]+)\/$/
  );
  if (horoscopeDetailMatch) {
    const periodSlug = horoscopeDetailMatch[1] as HoroscopePeriodSlug;
    const rawSign = horoscopeDetailMatch[2];
    const matchedSign = ZODIAC_HOROSCOPES.find((z) => z.id === rawSign);
    if (matchedSign) {
      return {
        kind: 'horoscope-detail',
        pathname: `/horoscope/${periodSlug}/${matchedSign.id}/`,
        periodSlug,
        signId: matchedSign.id
      };
    }
  }

  return { kind: 'home', pathname: '/' };
}

export function getRouteSeoMetadata(route: AppRoute): RouteSeoMetadata {
  const cal = getIndiaCalendarInfo();

  if (route.kind === 'horoscope-hub') {
    const canonicalUrl = `${SITE_ORIGIN}/horoscope/`;
    const title = 'Horoscope & Daily Rashifal for All 12 Signs | Acharya Ganesh';
    const description =
      'Explore accurate Daily, Weekly, Monthly and Yearly Vedic Horoscopes for all 12 Rashis by Hanish Bagga at Acharya Ganesh.';
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Horoscope', href: '/horoscope/' }
    ];

    return {
      title,
      description,
      canonicalUrl,
      breadcrumbs,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Vedic Horoscope & Rashifal Hub',
          description,
          url: canonicalUrl,
          publisher: {
            '@type': 'Organization',
            name: 'Acharya Ganesh'
          }
        },
        buildBreadcrumbSchema(breadcrumbs)
      ]
    };
  }

  if (route.kind === 'horoscope-detail') {
    const profile = getZodiacProfile(route.signId);
    const period = SLUG_TO_PERIOD[route.periodSlug];
    const canonicalUrl = `${SITE_ORIGIN}${route.pathname}`;
    const periodTag =
      period === 'Daily'
        ? `(${cal.formattedDate})`
        : period === 'Weekly'
        ? '– Weekly Forecast'
        : period === 'Monthly'
        ? '– Monthly Forecast'
        : '2026 Forecast';
    const title = `${profile.name} ${period} Horoscope ${periodTag} | Acharya Ganesh`.slice(0, 72);
    const description = `Read today’s ${profile.name} (${profile.vedicName}) ${period.toLowerCase()} horoscope for career, love, finance, health, lucky colour and focus by Hanish Bagga.`;
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Horoscope', href: '/horoscope/' },
      { label: period, href: `/horoscope/${route.periodSlug}/${profile.id}/` },
      { label: profile.name, href: route.pathname }
    ];

    return {
      title,
      description,
      canonicalUrl,
      breadcrumbs,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${profile.name} ${period} Horoscope`,
          description,
          mainEntityOfPage: canonicalUrl,
          author: {
            '@type': 'Person',
            name: 'Hanish Bagga'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Acharya Ganesh'
          }
        },
        buildBreadcrumbSchema(breadcrumbs)
      ]
    };
  }

  if (route.kind === 'panchang-hub') {
    const canonicalUrl = `${SITE_ORIGIN}/panchang/`;
    const title = `Vedic Panchang & Daily Muhurat Guide | Acharya Ganesh`;
    const description = `Check Vedic Panchang, auspicious Abhijit & Brahma Muhurat timings, Rahu Kaal, Tithi, Nakshatra, Yoga and Karana curated by Hanish Bagga.`;
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Panchang', href: '/panchang/' }
    ];

    return {
      title,
      description,
      canonicalUrl,
      breadcrumbs,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Vedic Panchang & Daily Muhurat Guide',
          description,
          url: canonicalUrl
        },
        buildBreadcrumbSchema(breadcrumbs)
      ]
    };
  }

  if (route.kind === 'panchang-today') {
    const canonicalUrl = `${SITE_ORIGIN}/panchang/today/`;
    const title = `Today's Panchang (${cal.formattedDate}) – Tithi, Nakshatra, Rahu Kaal | Acharya Ganesh`;
    const description = `View Today's Panchang for ${cal.fullHeading} including Tithi, Nakshatra, Yoga, Karana, Sunrise, Sunset, Abhijit Muhurat and Rahu Kaal by city.`;
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
      { label: 'Panchang', href: '/panchang/' },
      { label: "Today's Panchang", href: '/panchang/today/' }
    ];

    return {
      title,
      description,
      canonicalUrl,
      breadcrumbs,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Today's Panchang – ${cal.fullHeading}`,
          description,
          url: canonicalUrl,
          author: {
            '@type': 'Person',
            name: 'Hanish Bagga'
          }
        },
        buildBreadcrumbSchema(breadcrumbs)
      ]
    };
  }

  // Homepage
  const title = 'Best Astrologer Online Consultation India | Acharya Ganesh';
  const description =
    'Get the best astrologer online consultation in India with Acharya Ganesh (Hanish Bagga). Daily Horoscope, Today’s Panchang, career, love and Kundli guidance.';
  return {
    title,
    description,
    canonicalUrl: `${SITE_ORIGIN}/`,
    breadcrumbs: [{ label: 'Home', href: '/' }],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Acharya Ganesh',
        url: `${SITE_ORIGIN}/`,
        founder: {
          '@type': 'Person',
          name: 'Hanish Bagga'
        },
        description
      }
    ]
  };
}

function buildBreadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: `${SITE_ORIGIN}${item.href}`
    }))
  };
}

export function getAllSitemapPaths(): string[] {
  const paths = ['/', '/horoscope/', '/panchang/', '/panchang/today/'];
  for (const period of HOROSCOPE_PERIODS) {
    const periodSlug = PERIOD_TO_SLUG[period];
    for (const sign of ZODIAC_HOROSCOPES) {
      paths.push(`/horoscope/${periodSlug}/${sign.id}/`);
    }
  }
  return paths;
}

export function buildSitemapXml(baseUrl: string = SITE_ORIGIN): string {
  const todayIso = new Date().toISOString().split('T')[0];
  const entries = getAllSitemapPaths()
    .map((path) => {
      const priority =
        path === '/'
          ? '1.0'
          : path === '/horoscope/' || path === '/panchang/' || path === '/panchang/today/'
          ? '0.9'
          : path.startsWith('/horoscope/daily/')
          ? '0.85'
          : '0.75';
      const changefreq = path.startsWith('/horoscope/daily/') || path.startsWith('/panchang') ? 'daily' : 'weekly';
      return `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${todayIso}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}
