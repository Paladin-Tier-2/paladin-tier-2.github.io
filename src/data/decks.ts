export type DeckMedia = {
  file: string;
  label: string;
};

export type Deck = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  summary: string;
  contribution: string;
  methods: string[];
  slideCount: number;
  slideRoot: string;
  pdf: string;
  thumbnail: string;
  mediaRoot: string;
  media: DeckMedia[];
};

export const decks: Deck[] = [
  {
    slug: "charge-density-waves",
    title: "Charge Density Waves: From Transport Anomalies to Ultrafast Switching",
    shortTitle: "Charge Density Waves",
    category: "Condensed matter | Individual presentation",
    summary:
      "A three-paper story connecting field-sensitive transport, collective CDW sliding, and a light-written hidden conducting state.",
    contribution:
      "Built the visual explanation around mechanisms rather than definitions: when the transport changes, what physical state changed with it?",
    methods: ["literature synthesis", "mechanism-first animation", "transport interpretation"],
    slideCount: 24,
    slideRoot: "/assets/decks/solid-state/slides",
    pdf: "/assets/documents/solid-state-presentation.pdf",
    thumbnail: "/assets/decks/solid-state/slides/slide-01.png",
    mediaRoot: "/assets/decks/solid-state/media",
    media: [
      { file: "07_peierls_cdw_formation.mp4", label: "Peierls distortion and CDW formation" },
      { file: "04_nbse3_structure_3d.mp4", label: "Three-dimensional view of the NbSe3 structure" },
      { file: "03_zener_tunneling.mp4", label: "Field-assisted tunneling picture" },
      { file: "05_cdw_pinning_sliding.mp4", label: "Pinned and sliding CDW phase" },
      {
        file: "07_stojchevska_hidden_state_schematic.mp4",
        label: "Ultrafast switching into the hidden state",
      },
    ],
  },
  {
    slug: "reactor-steels-pas",
    title: "Reactor Pressure Vessel Steels Studied by Positron Annihilation Spectroscopy",
    shortTitle: "Reactor Steels and PAS",
    category: "Radiation damage | Individual presentation",
    summary:
      "A review of whether hydrogen-ion implantation can reproduce neutron damage, and how depth-resolved PAS reveals where the shortcut breaks down.",
    contribution:
      "Focused the deck on the engineering question: which defect signal is real enough to stand in for reactor damage?",
    methods: [
      "positron lifetime spectroscopy",
      "radiation damage interpretation",
      "defect evidence mapping",
    ],
    slideCount: 22,
    slideRoot: "/assets/decks/rpv/slides",
    pdf: "/assets/documents/rpv-pas-presentation.pdf",
    thumbnail: "/assets/decks/rpv/slides/slide-01.png",
    mediaRoot: "/assets/decks/rpv/media",
    media: [
      { file: "elastic_plastic_deformation.mp4", label: "Elastic and plastic deformation" },
      { file: "dislocation_glide.mp4", label: "Dislocation glide through the lattice" },
      { file: "dislocation_pinning_fracture.mp4", label: "Defect pinning and fracture risk" },
    ],
  },
  {
    slug: "in-situ-tem-hea",
    title: "In-situ TEM of W-Ta-Cr-V High-Entropy Alloys under Irradiation",
    shortTitle: "In-situ TEM HEA",
    category: "Microscopy and fusion materials | Individual presentation",
    summary:
      "An in-situ TEM study of irradiation damage, the absence of visible loop accumulation, and the chemistry and thin-foil limits behind that observation.",
    contribution:
      "Separated the exciting claim from the evidence limits: strong TEM evidence, but not a blanket-proof material conclusion.",
    methods: [
      "in-situ TEM",
      "ion irradiation",
      "diffraction condition checks",
      "fusion-materials reasoning",
    ],
    slideCount: 21,
    slideRoot: "/assets/decks/tem/slides",
    pdf: "/assets/documents/tem-presentation.pdf",
    thumbnail: "/assets/decks/tem/slides/slide-01.png",
    mediaRoot: "/assets/decks/tem/media",
    media: [
      { file: "displacement_cascade.mp4", label: "Displacement cascade and surviving defects" },
      { file: "defects_to_visible_loops.mp4", label: "How surviving defects become visible loops" },
      { file: "chemical_rough_lattice.mp4", label: "Chemical disorder changes defect motion" },
      {
        file: "bf_tem_not_chemistry.mp4",
        label: "Why bright-field TEM does not identify chemistry",
      },
      { file: "tilt_211_calculation.mp4", label: "Calculating the g = 211 diffraction condition" },
      {
        file: "tilt_211_loop_test.mp4",
        label: "Testing whether a black spot is a dislocation loop",
      },
      { file: "cr_v_phase_separation.mp4", label: "Cr/V-rich phase separation" },
      { file: "thin_foil_vs_bulk.mp4", label: "Thin-foil escape compared with bulk trapping" },
    ],
  },
  {
    slug: "muon-catalyzed-fusion",
    title: "Muon-Catalyzed Fusion Kinetics with Kinetic Monte Carlo",
    shortTitle: "Muon-Catalyzed Fusion",
    category: "Computational physics | Group project",
    summary:
      "A KMC model of the muon-catalyzed fusion cycle, validated against a reduced rate model and used to test sticking, reactivation, yield, and computational scaling.",
    contribution:
      "Turned a physical reaction network into a simulation workflow where yield, losses, and runtime tradeoffs can be tested directly.",
    methods: ["Python", "Kinetic Monte Carlo", "rate-model comparison", "fusion kinetics"],
    slideCount: 26,
    slideRoot: "/assets/decks/computational/slides",
    pdf: "/assets/documents/computational-physics-presentation.pdf",
    thumbnail: "/assets/decks/computational/slides/slide-01.png",
    mediaRoot: "/assets/decks/computational/media",
    media: [
      { file: "media1.mp4", label: "Muon-catalyzed fusion cycle animation" },
      { file: "image26.gif", label: "Animated simulation result from the deck" },
    ],
  },
];

export function getDeck(slug: string) {
  return decks.find((deck) => deck.slug === slug);
}

export function slideImage(deck: Deck, slideNumber: number) {
  return `${deck.slideRoot}/slide-${String(slideNumber).padStart(2, "0")}.png`;
}
