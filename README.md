# F. C. Sondhi Charitable Trust

A rebuilt website for the [F. C. Sondhi Charitable Trust](https://www.fcsondhitrust.com/), Jalandhar.

Static site built with [Astro](https://astro.build). Deployed to GitHub Pages at
**<https://deepbat.github.io/fcsct/>** via GitHub Actions — push to `main` and the site
redeploys automatically.

## Design

Multi-page layout (one route per page, no single-page scrolling) with a neo-brutalist
design language: navy `#052B42` + lime `#F0FB29`, Inter for body text, JetBrains Mono for
labels/metadata, hard offset shadows, bordered cards, a sticky pill nav, a marquee band,
and a light/dark theme toggle (`fcsct-theme` in localStorage, defaults to system).
Photographs and the logo are served from `public/images/` (extracted from the Trust's
one-page site copy).

## Commands

| Command           | Action                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run build`   | Build the static site into `dist/`              |
| `npm run preview` | Serve the built site locally                    |
| `npm run check`   | Run TypeScript / Astro diagnostics              |

## Project structure

```
src/
  components/    Header, Footer, PageHead
  data/site.ts   All site content — contact details, sponsorship tiers,
                 magazine issues, quarterly updates, navigation
  layouts/       Base HTML shell (SEO, Open Graph, JSON-LD)
  lib/urls.ts    Base-path helper for GitHub Pages sub-path hosting
  pages/         One file per route
  styles/        Design tokens and global styles
public/          favicon.svg, og-image.svg, robots.txt
```

### Editing content

Almost everything lives in `src/data/site.ts` — the Trust's address, phone number, bank
details, sponsorship amounts, magazine issues and quarterly updates. Change the numbers there
and every page updates automatically.

### Base path

The site is served from `/fcsct` rather than the domain root. Astro rewrites its own bundled
assets automatically, but it does **not** rewrite `href` attributes or `public/` files, so
internal links must go through the `url()` helper:

```astro
---
import { url } from '../lib/urls';
---
<a href={url('/about-us/')}>About Us</a>
```

Forgetting this produces links that 404 once deployed.

## Deployment

`.github/workflows/deploy.yml` builds with Node 22 and publishes `dist/` to GitHub Pages.
Repository settings must have **Settings → Pages → Source** set to **GitHub Actions**.
