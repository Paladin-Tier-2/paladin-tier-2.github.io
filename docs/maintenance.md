# Maintenance Notes

Map reminder for updating the portfolio.

## Main Files

- `src/pages/index.astro` - homepage copy and layout.
- `src/pages/publication.astro` - published-paper page.
- `src/pages/presentations/[slug].astro` - shared presentation page.
- `src/data/decks.ts` - deck titles, summaries, slide counts, PDF paths, and embedded media positions.
- `src/components/DeckViewer.astro` - Reveal.js slide viewer.
- `src/components/ProjectCard.astro` - homepage deck cards.
- `src/styles/global.css` - global styling.

## Assets

Slides and media:

```text
public/assets/decks/<deck-folder>/slides/
public/assets/decks/<deck-folder>/media/
```

Documents:

```text
public/assets/documents/
```

actual
Images:

```text
public/assets/images/
```

The paper thumbnail is `public/assets/images/eis-paper-cover.png`. The paper is the PDF in `public/assets/documents/`.

## Add Or Change A Deck

1. Export slide SVGs into `public/assets/decks/<deck-folder>/slides/`.
2. Put embedded videos or GIFs in `public/assets/decks/<deck-folder>/media/`.
3. Put the full PDF in `public/assets/documents/`.
4. Add or update the deck entry in `src/data/decks.ts`.
5. Run `npm run check`.

`scripts/validate-assets.mjs` checks that configured slides, media, PDFs, and thumbnails exist.

## Build Output

```bash
npm run build
```

Astro writes the static site to:

```text
dist/
```

Do not edit `dist/` by hand. It is generated from `src/` and `public/`.
