/**
 * GitHub Pages project sites are served from a sub-path (e.g. `/fcsct`).
 * Astro prefixes its own bundled assets, but it does NOT rewrite plain `href`
 * attributes or `public/` files, so internal links must be built explicitly.
 */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export function url(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${normalized}`;
}
