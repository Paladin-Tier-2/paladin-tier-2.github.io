# Ekvin Saleh Physics Portfolio

Astro site for selected presentation decks, playable extracted animations, and one
published paper.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

`npm run check` runs:

- `astro check`
- ESLint
- Prettier format check
- static asset validation for slides, videos, PDFs, and thumbnails

## Structure

- `src/data/decks.ts` is the source of truth for presentation metadata.
- `src/pages/presentations/[slug].astro` renders each presentation page.
- `src/components/DeckViewer.astro` embeds Reveal.js and appends playable media slides.
- `public/assets/` contains the rendered slides, extracted videos, PDFs, and paper thumbnail.

## Direct Presentation Links

- `/presentations/charge-density-waves/`
- `/presentations/reactor-steels-pas/`
- `/presentations/in-situ-tem-hea/`
- `/presentations/muon-catalyzed-fusion/`
- `/publication/`

## Deployment

The site is static. Deploy the `dist/` output from:

```bash
npm run build
```

Netlify build settings:

- Build command: `npm run build`
- Publish directory: `dist`

GitHub Pages can use the same `dist/` artifact through a Pages workflow.
