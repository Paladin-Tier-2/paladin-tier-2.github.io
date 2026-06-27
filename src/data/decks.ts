export type DeckMedia = {
  file: string;
  label: string;
  slide: number;
  placement: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
};

export type Deck = {
  slug: string;
  shortTitle: string;
  category: string;
  summary: string;
  slideCount: number;
  slides?: number[];
  slideRoot: string;
  thumbnail: string;
  mediaRoot: string;
  media: DeckMedia[];
};

export const decks: Deck[] = [
  {
    slug: "charge-density-waves",
    shortTitle: "Charge Density Waves",
    category: "Condensed matter",
    summary:
      "A three-paper story connecting field-sensitive transport, collective CDW sliding, and a light-written hidden conducting state.",
    slideCount: 24,
    slideRoot: "/assets/decks/solid-state/slides",
    thumbnail: "/assets/decks/solid-state/slides/slide-01.svg",
    mediaRoot: "/assets/decks/solid-state/media",
    media: [
      {
        file: "07_peierls_cdw_formation.mp4",
        label: "Peierls distortion and CDW formation",
        slide: 3,
        placement: { left: 22.52, top: 20.74, width: 74.18, height: 74.18 },
      },
      {
        file: "04_nbse3_structure_3d.mp4",
        label: "Three-dimensional view of the NbSe3 structure",
        slide: 5,
        placement: { left: 30.84, top: 30.67, width: 65.74, height: 65.73 },
      },
      {
        file: "03_zener_tunneling.mp4",
        label: "Field-assisted tunneling picture",
        slide: 8,
        placement: { left: 26.19, top: 22.1, width: 70.84, height: 70.84 },
      },
      {
        file: "05_cdw_pinning_sliding.mp4",
        label: "Pinned and sliding CDW phase",
        slide: 16,
        placement: { left: 9.72, top: 17.85, width: 76.42, height: 76.42 },
      },
      {
        file: "07_stojchevska_hidden_state_schematic.mp4",
        label: "Ultrafast switching into the hidden state",
        slide: 23,
        placement: { left: 37.89, top: 22.46, width: 58.86, height: 58.86 },
      },
    ],
  },
  {
    slug: "reactor-steels-pas",
    shortTitle: "Reactor Steels and PAS",
    category: "Radiation damage",
    summary:
      "A review of whether hydrogen-ion implantation can reproduce neutron damage, and how depth-resolved PAS reveals where the shortcut breaks down.",
    slideCount: 22,
    slideRoot: "/assets/decks/rpv/slides",
    thumbnail: "/assets/decks/rpv/slides/slide-01.svg",
    mediaRoot: "/assets/decks/rpv/media",
    media: [
      {
        file: "elastic_plastic_deformation.mp4",
        label: "Elastic and plastic deformation",
        slide: 4,
        placement: { left: 23.79, top: 12.77, width: 72.18, height: 85.55 },
      },
      {
        file: "dislocation_glide.mp4",
        label: "Dislocation glide through the lattice",
        slide: 5,
        placement: { left: 21, top: 17.69, width: 78.7, height: 78.7 },
      },
      {
        file: "dislocation_pinning_fracture.mp4",
        label: "Defect pinning and fracture risk",
        slide: 6,
        placement: { left: 5.26, top: 16.63, width: 87.31, height: 87.31 },
      },
    ],
  },
  {
    slug: "in-situ-tem-hea",
    shortTitle: "In-situ TEM HEA",
    category: "Microscopy and fusion materials",
    summary:
      "An in-situ TEM study of irradiation damage, the absence of visible loop accumulation, and the chemistry and thin-foil limits behind that observation.",
    slideCount: 21,
    slideRoot: "/assets/decks/tem/slides",
    thumbnail: "/assets/decks/tem/slides/slide-01.svg",
    mediaRoot: "/assets/decks/tem/media",
    media: [
      {
        file: "displacement_cascade.mp4",
        label: "Displacement cascade and surviving defects",
        slide: 4,
        placement: { left: 8.67, top: 20.72, width: 77.67, height: 77.68 },
      },
      {
        file: "defects_to_visible_loops.mp4",
        label: "How surviving defects become visible loops",
        slide: 5,
        placement: { left: 10.63, top: 22.05, width: 77.95, height: 77.95 },
      },
      {
        file: "chemical_rough_lattice.mp4",
        label: "Chemical disorder changes defect motion",
        slide: 19,
        placement: { left: 33.21, top: 26.92, width: 62.7, height: 62.7 },
      },
      {
        file: "bf_tem_not_chemistry.mp4",
        label: "Why bright-field TEM does not identify chemistry",
        slide: 13,
        placement: { left: 37.29, top: 23.24, width: 57.68, height: 57.68 },
      },
      {
        file: "tilt_211_calculation.mp4",
        label: "Calculating the g = 211 diffraction condition",
        slide: 16,
        placement: { left: 8.79, top: 20.75, width: 79.25, height: 79.25 },
      },
      {
        file: "tilt_211_loop_test.mp4",
        label: "Testing whether a black spot is a dislocation loop",
        slide: 15,
        placement: { left: 29.46, top: 21.92, width: 69.5, height: 69.5 },
      },
      {
        file: "cr_v_phase_separation.mp4",
        label: "Cr/V-rich phase separation",
        slide: 18,
        placement: { left: 1.09, top: 26.3, width: 52.99, height: 52.99 },
      },
      {
        file: "thin_foil_vs_bulk.mp4",
        label: "Thin-foil escape compared with bulk trapping",
        slide: 20,
        placement: { left: 31.27, top: 24.62, width: 66.8, height: 66.8 },
      },
    ],
  },
  {
    slug: "fib-grown-microcapillaries",
    shortTitle: "FIB-Grown Microcapillaries",
    category: "Nanotechnology",
    summary:
      "A nanofabrication story about how Ga+ FIB damage, XeF2 chemistry, and gallium diffusion turn an etching process into self-organized pillar growth.",
    slideCount: 16,
    slideRoot: "/assets/decks/nano/slides",
    thumbnail: "/assets/decks/nano/slides/slide-01.svg",
    mediaRoot: "/assets/decks/nano/media",
    media: [
      {
        file: "supplemental-video-1.mp4",
        label: "Live SEM video of droplets rising into pillars",
        slide: 5,
        placement: { left: 5.4, top: 7.5, width: 55.79, height: 81.71 },
      },
      {
        file: "supplemental-video-2.mp4",
        label: "Droplet nucleation and self-limiting pillar growth",
        slide: 6,
        placement: { left: 2.53, top: 18.46, width: 49.21, height: 72.01 },
      },
    ],
  },
  {
    slug: "muon-catalyzed-fusion",
    shortTitle: "Muon-Catalyzed Fusion",
    category: "Computational physics | Group project",
    summary:
      "A group KMC project on muon-catalyzed fusion kinetics. This excerpt focuses on my presentation section: validation against a reduced rate model, yield behavior, and computational scaling.",
    slideCount: 26,
    slides: [7, 8, 9, 10, 11, 12, 13],
    slideRoot: "/assets/decks/computational/slides",
    thumbnail: "/assets/decks/computational/slides/slide-01.svg",
    mediaRoot: "/assets/decks/computational/media",
    media: [
      {
        file: "media1.mp4",
        label: "Muon-catalyzed fusion cycle animation",
        slide: 10,
        placement: { left: 44.02, top: 10.26, width: 48.23, height: 86.51 },
      },
    ],
  },
];

export function getDeck(slug: string) {
  return decks.find((deck) => deck.slug === slug);
}

export function slideImage(deck: Deck, slideNumber: number) {
  return `${deck.slideRoot}/slide-${String(slideNumber).padStart(2, "0")}.svg`;
}
