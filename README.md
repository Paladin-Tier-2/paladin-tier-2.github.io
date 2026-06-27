# Ekvin Saleh Physics Portfolio

Small Astro site for selected physics presentations, project work, one CV, and one published paper.

The site is mostly data-driven. Astro builds the pages, Reveal.js gives the presentation-style slide navigation, and `src/data/decks.ts` tells the site which decks, slides, PDFs, and videos exist.

## Run

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually:

```text
http://localhost:4321/
```

Useful checks:

```bash
npm run check
npm run build
```

`npm run check` runs Astro diagnostics, ESLint, Prettier check, and the asset validator.

## What To Edit

Most normal changes happen in three places:

- `src/pages/index.astro` - homepage text and layout.
- `src/data/decks.ts` - deck titles, summaries, slide counts, PDF paths, and embedded video positions.
- `public/assets/` - files served directly by the site: slides, videos, PDFs, CV, and the paper thumbnail.

The presentation page itself is shared:

- `src/pages/presentations/[slug].astro` builds one page per deck from `src/data/decks.ts`.
- `src/components/DeckViewer.astro` renders the Reveal.js slide viewer.
- `src/components/ProjectCard.astro` renders the homepage cards.
- `src/styles/global.css` holds the visual styling.

## Asset Map

Slides and videos live under:

```text
public/assets/decks/<deck-folder>/slides/
public/assets/decks/<deck-folder>/media/
```

Documents live under:

```text
public/assets/documents/
```

The paper preview image lives under:

```text
public/assets/images/eis-paper-cover.png
```

That paper preview is a small raster thumbnail of the first PDF page. The actual paper remains the PDF in `public/assets/documents/`.

## Adding Or Changing A Deck

1. Put rendered slide SVGs in `public/assets/decks/<deck-folder>/slides/`.
2. Put embedded videos or GIFs in `public/assets/decks/<deck-folder>/media/`.
3. Put the full PDF in `public/assets/documents/`.
4. Add or update the deck entry in `src/data/decks.ts`.
5. Run:

```bash
npm run check
```

If a slide, video, or PDF is missing, `scripts/validate-assets.mjs` should catch it.

## Deploy

Build the static site:

```bash
npm run build
```

Deploy `dist/`.

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

For GitHub Pages, use the generated `dist/` folder or a GitHub Actions workflow that runs `npm run build`.
