import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  AppRoute,
  getRouteSeoMetadata,
  normalizePathname,
  parseAppRoute
} from '../data/seoRoutes';

interface RouterContextValue {
  pathname: string;
  route: AppRoute;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  route: { kind: 'home', pathname: '/' },
  navigate: () => {}
});

interface RouterProviderProps {
  initialPath?: string;
  children: React.ReactNode;
}

function updateClientSeoHead(route: AppRoute) {
  if (typeof document === 'undefined') return;
  const meta = getRouteSeoMetadata(route);

  document.title = meta.title;

  const upsertMeta = (attrName: 'name' | 'property', key: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  upsertMeta('name', 'description', meta.description);
  upsertMeta('property', 'og:title', meta.title);
  upsertMeta('property', 'og:description', meta.description);
  upsertMeta('property', 'og:url', meta.canonicalUrl);
  upsertMeta('name', 'twitter:title', meta.title);
  upsertMeta('name', 'twitter:description', meta.description);

  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', meta.canonicalUrl);

  let schemaScript = document.getElementById('route-structured-data') as HTMLScriptElement | null;
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = 'route-structured-data';
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }
  schemaScript.textContent = JSON.stringify(meta.jsonLd);
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ initialPath, children }) => {
  const [rawPath, setRawPath] = useState<string>(() => {
    if (initialPath) return initialPath;
    if (typeof window !== 'undefined') {
      return `${window.location.pathname}${window.location.hash}`;
    }
    return '/';
  });

  const route = parseAppRoute(rawPath);
  const pathname = route.pathname;

  useEffect(() => {
    updateClientSeoHead(route);
  }, [route]);

  useEffect(() => {
    const handlePopState = () => {
      const next = `${window.location.pathname}${window.location.hash}`;
      setRawPath(next);
      if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') return;

    const [pathPart, hashPart] = to.split('#');
    const targetPath = normalizePathname(pathPart || '/');
    const fullTarget = hashPart ? `${targetPath}#${hashPart}` : targetPath;

    const currentNormalized = normalizePathname(window.location.pathname);
    window.history.pushState({}, '', fullTarget);
    setRawPath(fullTarget);

    if (hashPart) {
      window.setTimeout(
        () => {
          document.getElementById(hashPart)?.scrollIntoView({ behavior: 'smooth' });
        },
        currentNormalized === targetPath ? 0 : 80
      );
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ pathname, route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useAppRouter(): RouterContextValue {
  return useContext(RouterContext);
}
