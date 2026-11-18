import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { buildSitemapXml, getRouteSeoMetadata, parseAppRoute } from './data/seoRoutes';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function render(url: string): { html: string; headTags: string } {
  const route = parseAppRoute(url);
  const meta = getRouteSeoMetadata(route);

  const html = renderToString(
    <StrictMode>
      <App initialPath={route.pathname} />
    </StrictMode>
  );

  const titleSafe = escapeHtmlText(meta.title);
  const attrTitle = escapeHtmlAttr(meta.title);
  const attrDesc = escapeHtmlAttr(meta.description);
  const attrUrl = escapeHtmlAttr(meta.canonicalUrl);
  const jsonLdString = JSON.stringify(meta.jsonLd).replace(/<\/script/gi, '<\\/script');

  const headTags = [
    `<title>${titleSafe}</title>`,
    `<meta name="description" content="${attrDesc}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${attrUrl}" />`,
    `<meta property="og:title" content="${attrTitle}" />`,
    `<meta property="og:description" content="${attrDesc}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${attrUrl}" />`,
    `<meta property="og:site_name" content="Acharya Ganesh" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attrTitle}" />`,
    `<meta name="twitter:description" content="${attrDesc}" />`,
    `<script id="route-structured-data" type="application/ld+json">${jsonLdString}</script>`
  ].join('\n    ');

  return { html, headTags };
}

export { buildSitemapXml };
