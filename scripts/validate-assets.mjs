import { access } from "node:fs/promises";

const decks = [
  [
    "charge-density-waves",
    24,
    "solid-state",
    [
      "07_peierls_cdw_formation.mp4",
      "04_nbse3_structure_3d.mp4",
      "03_zener_tunneling.mp4",
      "05_cdw_pinning_sliding.mp4",
      "07_stojchevska_hidden_state_schematic.mp4",
    ],
    "solid-state-presentation.pdf",
  ],
  [
    "reactor-steels-pas",
    22,
    "rpv",
    [
      "elastic_plastic_deformation.mp4",
      "dislocation_glide.mp4",
      "dislocation_pinning_fracture.mp4",
    ],
    "rpv-pas-presentation.pdf",
  ],
  [
    "in-situ-tem-hea",
    21,
    "tem",
    [
      "displacement_cascade.mp4",
      "defects_to_visible_loops.mp4",
      "chemical_rough_lattice.mp4",
      "bf_tem_not_chemistry.mp4",
      "tilt_211_calculation.mp4",
      "tilt_211_loop_test.mp4",
      "cr_v_phase_separation.mp4",
      "thin_foil_vs_bulk.mp4",
    ],
    "tem-presentation.pdf",
  ],
  [
    "muon-catalyzed-fusion",
    26,
    "computational",
    ["media1.mp4", "image26.gif"],
    "computational-physics-presentation.pdf",
  ],
];

async function exists(path) {
  try {
    await access(path);
  } catch {
    throw new Error(`Missing portfolio asset: ${path}`);
  }
}

for (const [slug, slideCount, folder, media, pdf] of decks) {
  for (let slide = 1; slide <= slideCount; slide += 1) {
    await exists(
      `public/assets/decks/${folder}/slides/slide-${String(slide).padStart(2, "0")}.svg`,
    );
  }

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
