/**
 * Rasterises the Open Graph card.
 *
 * Social platforms (X, Facebook, LinkedIn, WhatsApp) do not render SVG in
 * `og:image`, so the vector source is exported as a 1200x630 PNG.
 *
 * Run with: npm run og
 */
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const src = new URL('../public/og-image.svg', import.meta.url);
const out = new URL('../public/og-image.png', import.meta.url);

const svg = await readFile(src);

const png = await sharp(svg, { density: 384 }).resize(1200, 630).png({ compressionLevel: 9 }).toBuffer();

await writeFile(out, png);

console.log(`og-image.png written (${(png.length / 1024).toFixed(1)} KB)`);
