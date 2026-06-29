# Updating Slide SVGs

LibreOffice SVG export is cursed. Don't fucking even try.

It adds JavaScript in it? The slide can look fine when opened directly, then show up blank on the site.

Use the script:

```bash
scripts/export-deck-svg.sh tem_presentation.odp tem 23
scripts/export-deck-svg.sh rpv_embedded.odp rpv 22
```

Then:

```bash
npm run build
```

## One Slide

```bash
libreoffice --headless --convert-to pdf --outdir /tmp tem_presentation.odp
pdfseparate -f 2 -l 2 /tmp/tem_presentation.pdf /tmp/page-%02d.pdf
pdftocairo -svg /tmp/page-02.pdf public/assets/decks/tem/slides/slide-02.svg
npm run build
```

`-f` first page. `-l` last page. Bam.

If the slide count changed:

```text
src/data/decks.ts
scripts/validate-assets.mjs
```
