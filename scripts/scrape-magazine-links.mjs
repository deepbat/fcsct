/**
 * One-off scraper: reads the issue names and document links from the original
 * Wix site so they can be carried over to the Astro rebuild.
 */
import { chromium } from 'playwright';

const URL = 'https://www.fcsondhitrust.com/e-magazine';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(6000);

// Scroll to force any lazy-loaded sections to render.
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2000);

const rows = await page.evaluate(() => {
  const out = [];
  for (const a of document.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href') ?? '';
    if (!/drive\.google\.com|docs\.google\.com/.test(href)) continue;
    out.push({
      href,
      linkText: (a.innerText || a.textContent || '').trim().replace(/\s+/g, ' '),
      // nearest heading-ish ancestor or sibling text
      context: (a.closest('li,div,section,article')?.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 160),
    });
  }
  return out;
});

await browser.close();

console.log(`found ${rows.length} document links\n`);
for (const r of rows) {
  console.log('CTX :', r.context);
  console.log('TXT :', r.linkText);
  console.log('URL :', r.href);
  console.log('---');
}
