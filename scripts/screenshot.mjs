/**
 * Renders every page of the built site at desktop and mobile widths and reports
 * any console errors, page errors or failed requests.
 *
 * Run with: npm run screenshots  (after npm run build)
 */
import { createServer } from 'node:http';
import { readFile, mkdir, rm } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const DIST = fileURLToPath(new URL('../dist', import.meta.url));
const OUT = fileURLToPath(new URL('../.screenshots', import.meta.url));
const PORT = 4321;

const BASE = '/fcsct';
const ORIGIN = `http://localhost:${PORT}`;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

const pages = [
  ['home', '/'],
  ['about', '/about-us/'],
  ['scholarships', '/grants-scholarships/'],
  ['donate', '/how-to-donate/'],
  ['updates', '/trust-activities-updates/'],
  ['magazine', '/e-magazine/'],
  ['ideas', '/ideas-exchange/'],
  ['reports', '/annual-reports/'],
  ['contact', '/contact/'],
];

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

function resolveFile(pathname) {
  let p = decodeURIComponent(pathname);

  // Strip the GitHub Pages base path, then guard against traversal.
  if (p === BASE) p = '/';
  else if (p.startsWith(`${BASE}/`)) p = p.slice(BASE.length);

  const clean = normalize(p).replace(/^([/\\])+/, '');
  const abs = join(DIST, clean);

  if (!abs.startsWith(DIST)) return null;
  if (existsSync(abs) && statSync(abs).isFile()) return abs;

  const indexed = join(abs, 'index.html');
  if (existsSync(indexed)) return indexed;

  return null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, ORIGIN);
  const file = resolveFile(url.pathname);

  if (!file) {
    const notFound = join(DIST, '404.html');
    if (existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': MIME['.html'] });
      res.end(await readFile(notFound));
      return;
    }
    res.writeHead(404).end('Not found');
    return;
  }

  res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
  res.end(await readFile(file));
});

await new Promise((r) => server.listen(PORT, r));

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const errors = [];

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();

  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`[${vp.name}] console: ${m.text()}`);
  });
  page.on('pageerror', (e) => errors.push(`[${vp.name}] pageerror: ${e.message}`));
  page.on('requestfailed', (r) => errors.push(`[${vp.name}] failed: ${r.url()} — ${r.failure()?.errorText}`));

  for (const [slug, path] of pages) {
    const res = await page.goto(`${ORIGIN}${BASE}${path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(250);
    await page.screenshot({ path: `${OUT}/${slug}-${vp.name}.png`, fullPage: vp.name === 'desktop' });
    console.log(`${vp.name.padEnd(7)} ${slug.padEnd(14)} ${res?.status()}`);
  }

  // mobile menu open
  if (vp.name === 'mobile') {
    await page.goto(`${ORIGIN}${BASE}/`, { waitUntil: 'networkidle' });
    await page.click('[data-menu-toggle]');
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${OUT}/menu-mobile.png` });
    console.log('mobile  menu open');
  }

  await ctx.close();
}

await browser.close();
server.close();

if (errors.length) {
  console.log('\nISSUES FOUND:');
  for (const e of [...new Set(errors)]) console.log(' -', e);
  process.exitCode = 1;
} else {
  console.log('\nNo console errors, page errors, or failed requests.');
}
