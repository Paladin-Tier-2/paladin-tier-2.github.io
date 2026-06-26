# Ekvin Saleh Physics Portfolio

This was built as my portfolio site for selected physics presentations and one published paper.

The goal was simple: people should be able to open the work in a browser instead of downloading large slide files. The presentation pages were set up with rendered slides, playable animations, and PDF decks.

## Run It

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run check
npm run build
```

`npm run check` was set up to run Astro checks, ESLint, Prettier, and an asset check for the slides, videos, PDFs, and thumbnails.

## Pages

- `/presentations/charge-density-waves/`
- `/presentations/reactor-steels-pas/`
- `/presentations/in-situ-tem-hea/`
- `/presentations/muon-catalyzed-fusion/`
- `/publication/`

## Where Things Live

- `src/data/decks.ts` kept the presentation metadata.
- `src/pages/presentations/[slug].astro` built each presentation page.
- `src/components/DeckViewer.astro` handled the slide viewer.
- `public/assets/` held the rendered slides, videos, PDFs, CV, and paper thumbnail.

## Deploy

Build the static site:

```bash
npm run build
```

Deploy `dist/`.

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
