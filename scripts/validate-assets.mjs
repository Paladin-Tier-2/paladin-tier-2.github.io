import { access } from "node:fs/promises";

const decks = [
  {
    slug: "charge-density-waves",
    slides: Array.from({ length: 24 }, (_, index) => index + 1),
    folder: "solid-state",
    media: [
      "07_peierls_cdw_formation.mp4",
      "04_nbse3_structure_3d.mp4",
      "03_zener_tunneling.mp4",
      "05_cdw_pinning_sliding.mp4",
      "07_stojchevska_hidden_state_schematic.mp4",
    ],
    pdf: "solid-state-presentation.pdf",
    thumbnail: "slide-01.svg",
  },
  {
    slug: "reactor-steels-pas",
    slides: Array.from({ length: 22 }, (_, index) => index + 1),
    folder: "rpv",
    media: [
      "elastic_plastic_deformation.mp4",
      "dislocation_glide.mp4",
      "dislocation_pinning_fracture.mp4",
    ],
    pdf: "rpv-pas-presentation.pdf",
    thumbnail: "slide-01.svg",
  },
  {
    slug: "in-situ-tem-hea",
    slides: Array.from({ length: 21 }, (_, index) => index + 1),
    folder: "tem",
    media: [
      "displacement_cascade.mp4",
      "defects_to_visible_loops.mp4",
      "chemical_rough_lattice.mp4",
      "bf_tem_not_chemistry.mp4",
      "tilt_211_calculation.mp4",
      "tilt_211_loop_test.mp4",
      "cr_v_phase_separation.mp4",
      "thin_foil_vs_bulk.mp4",
    ],
    pdf: "tem-presentation.pdf",
    thumbnail: "slide-01.svg",
  },
  {
    slug: "muon-catalyzed-fusion",
    slides: [7, 8, 9, 10, 11, 12, 13],
    folder: "computational",
    media: ["media1.mp4"],
    pdf: "computational-physics-presentation.pdf",
    thumbnail: "slide-01.svg",
  },
];

async function exists(path) {
  try {
    await access(path);
  } catch {
    throw new Error(`Missing portfolio asset: ${path}`);
  }
}

for (const { slug, slides, folder, media, pdf, thumbnail } of decks) {
  for (const slide of slides) {
    await exists(
      `public/assets/decks/${folder}/slides/slide-${String(slide).padStart(2, "0")}.svg`,
    );
  }

  await exists(`public/assets/decks/${folder}/slides/${thumbnail}`);

  for (const file of media) {
    await exists(`public/assets/decks/${folder}/media/${file}`);
  }

  await exists(`public/assets/documents/${pdf}`);
  console.log(`validated ${slug}`);
}

await exists("public/assets/documents/eis-edlc-ieee-2025.pdf").catch(() =>
  exists("public/assets/documents/eis-edlc-ieee-ecce-2025.pdf"),
);
await exists("public/assets/documents/ekvin-saleh-cv.pdf");
await exists("public/assets/images/eis-paper-cover.png");
