# Physics Portfolio

Astro site for selected physics presentations, handmade animation work, my CV, and one published paper.

The presentations open like slide decks in the browser. Embedded media stays inside the slide instead of being split out as separate video clips.

## Stack

- Astro for the static site.
- Reveal.js for PowerPoint-style slide navigation.
- TypeScript for deck metadata in `src/data/decks.ts`.
- ESLint, Prettier, Astro checks, and an asset validator for basic repo hygiene.

## Run

```bash
npm install
npm run dev
```

The dev server usually opens at:

```text
http://localhost:4321/
```

## Checks

```bash
npm run check
npm run build
```

`npm run check` runs Astro diagnostics, ESLint, Prettier check, and the asset validator.

## Project Notes

The practical file map lives in [`docs/maintenance.md`](docs/maintenance.md).

## Publish

The clean GitHub Pages route is a user site:

```text
https://paladin-tier-2.github.io/
```

That means publishing from a repository named:

```text
Paladin-Tier-2.github.io
```

This avoids a project subpath like `/ekvin-physics-portfolio/` and keeps the site links simple.
