#!/usr/bin/env bash
set -euo pipefail

# Example:
#   scripts/export-deck-svg.sh tem_presentation.odp tem 23

odp="${1:?odp file}"
deck="${2:?deck folder}"
count="${3:?slide count}"

for tool in libreoffice pdfseparate pdftocairo; do
  command -v "$tool" >/dev/null || {
    echo "Missing: $tool" >&2
    exit 1
  }
done

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

slides="public/assets/decks/$deck/slides"
mkdir -p "$slides" "$tmp/pages"

libreoffice --headless --convert-to pdf --outdir "$tmp" "$odp"
pdf="$tmp/$(basename "$odp" .odp).pdf"

pdfseparate -f 1 -l "$count" "$pdf" "$tmp/pages/page-%02d.pdf"

for page in "$tmp"/pages/page-*.pdf; do
  n="$(basename "$page" .pdf | sed 's/page-//')"
  pdftocairo -svg "$page" "$slides/slide-$n.svg"
  echo "slide-$n.svg"
done

echo "run: npm run build"
