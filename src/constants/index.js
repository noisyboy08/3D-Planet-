import { earthVd, fm, im, jm, lm, mm, ndm, sm } from "../utils";
import BlazeonView from "../PlanetsComponents/BlazeonView";
import AuroraView from "../PlanetsComponents/AuroraView";
import ZephyrionView from "../PlanetsComponents/ZephyrionView";
import NebulonView from "../PlanetsComponents/NebulonView";
import VerdantiaView from "../PlanetsComponents/VerdantiaView";
import SpectraView from "../PlanetsComponents/SpectraView";
import IgnisMajorView from "../PlanetsComponents/IgnisMajorView";

export const earthInfo = [
  {
    id: 1,
    title: "Diameters",
    number: "12,742 km",
  },
  {
    id: 2,
    title: "Gravity",
    number: "1.0 g",
  },
  {
    id: 3,
    title: "Surface Area",
    number: "510.1M Sm",
  },
  {
    id: 4,
    title: "Orbit Period",
    number: "365 days",
  },
  {
    id: 5,
    title: "Mean Radius",
    number: "6,371 Km",
  },
  {
    id: 6,
    title: "Rotation Period",
    number: "24 hrs",
  },
];

export const fictionalPlanetCardLists = [
  {
    id: 1,
    title: "Blazeon",
    subtitle: "The 1st Planet",
    km: "8,945 km",
    g: "0.376 g",
    map: fm,
  },
  {
    id: 2,
    title: "Aurora",
    subtitle: "The 3rd Planet",
    km: "3,390 km",
    g: "0.546 g",
    map: mm,
  },
  {
    id: 3,
    title: "Zephyrion",
    subtitle: "The 4th Planet",
    km: "4,540 km",
    g: "0.386 g",
    map: jm,
  },
  {
    id: 4,
    title: "Ignis Major",
    subtitle: "The 5th Planet",
    km: "6,540 km",
    g: "0.546 g",
    map: im,
  },
  {
    id: 5,
    title: "Verdantia",
    subtitle: "The 2nd Planet",
    km: "3,540 km",
    g: "0.345 g",
    map: lm,
  },
  {
    id: 6,
    title: "Spectra",
    subtitle: "The 7th Planet",
    km: "4,765 km",
    g: "0.987 g",
    map: sm,
  },
  {
    id: 7,
    title: "Nebulon",
    subtitle: "The 6th Planet",
    km: "4,540 km",
    g: "0.386 g",
    map: ndm,
  },
];

export const fictionalPlanetDetailsLists = [
  {
    id: 1,
    title: "Blazeon",
    des: "Blazeon Prime orbits closest to its star within the Enigma Galaxy, boasting the highest surface temperature among all known planets. It's categorized as a scorched terrestrial planet with a diameter of 8,945 kilometers.",
    longDes: [
      "Blazeon Prime's surface is a hellscape of molten rock and superheated plasma storms, with temperatures exceeding 900C at the equator. Its thin atmosphere, composed mostly of sulfur dioxide and carbon monoxide, offers no protection from its star's relentless radiation.",
      "Despite its hostile environment, Blazeon holds immense scientific value. Rare heavy elements forged in its volcanic crucibles have made it a prime target for automated mining expeditions from neighboring star systems.",
      "Its year lasts only 42 standard days, making it one of the fastest-orbiting planets in the Enigma Galaxy. Tidal forces from its star have locked Blazeon into synchronous rotation, leaving one hemisphere in eternal scorching daylight and the other in frozen darkness.",
    ],
    diameter: "8,945",
    gravity: "0.370",
    area: "251.5M",
    vd: earthVd,
    model: BlazeonView,
    color: "#4c110d",
  },
  {
    id: 2,
    title: "Aurora",
    des: "Aurora Nexus, nestled in the heart of the Celestial Cluster, is renowned for its mesmerizing auroras that dance across its sky. This gas giant is the largest in its planetary system, with an intricate ring system encircling it.",
    longDes: [
      "Aurora Nexus generates the most spectacular light shows in the known galaxy. Its powerful magnetic field interacts with charged particles from its twin stars, producing auroras that span thousands of kilometers and shift through every color of the spectrum.",
      "The planet's ring system, composed of ice crystals and metalite dust, reflects its auroras back into space — making Aurora Nexus visible to the naked eye from neighboring star systems on clear nights.",
      "Beneath its swirling atmosphere of hydrogen and helium lies a vast ocean of liquid metallic hydrogen. Scientists believe this ocean is responsible for generating Aurora's extraordinary magnetic field, which is 40 times stronger than any other known planet.",
    ],
    diameter: "12,742",
    gravity: "0.376",
    area: "510.1M",
    vd: earthVd,
    model: AuroraView,
    color: "#051923",
  },
  {
    id: 3,
    title: "Zephyrion",
    des: "Zephyrion is a serene, oceanic world located in the Tranquil Nebula, with its surface almost entirely covered by vast, undulating oceans. It's categorized as an aquatic planet with minimal landmasses, offering unique habitats for diverse marine life forms.",
    longDes: [
      "Zephyrion's oceans stretch to an average depth of 40 kilometers, harboring ecosystems of extraordinary complexity. Bioluminescent organisms illuminate the deep trenches, creating an ethereal underwater aurora visible from orbit during the planet's long nights.",
      "The few landmasses that break Zephyrion's surface are low-lying archipelagos constantly reshaped by powerful tidal forces. These islands are home to amphibious life forms that have evolved to thrive in both the ocean depths and the storm-swept shores.",
      "Zephyrion's atmosphere is rich in water vapor, producing near-constant rainfall across most of the planet. Its gentle winds and warm currents make it one of the most climatically stable worlds in the Tranquil Nebula — a paradise for explorers seeking calm.",
    ],
    diameter: "12,742",
    gravity: "0.371",
    area: "510.1M",
    vd: earthVd,
    model: ZephyrionView,
    color: "#142d19",
  },
  {
    id: 4,
    title: "Ignis Major",
    des: "Ignis Major Delta, shrouded in perpetual mist, is a gas giant known for its enigmatic floating islands suspended within its thick atmosphere. It's located in the midst of the Mysterium Nebula, captivating explorers with its mysterious allure.",
    longDes: [
      "The floating islands of Ignis Major are composed of ultra-light silicate foam, buoyed by the planet's dense lower atmosphere. Some islands span hundreds of kilometers and have developed their own micro-ecosystems, with flora adapted to harvest nutrients directly from the surrounding clouds.",
      "Ignis Major's atmosphere is layered like a vast ocean. The upper layers are calm and breathable, while the lower regions churn with hypersonic winds and electrical storms powerful enough to vaporize steel. The boundary between these zones is known as the Veil.",
      "The Mysterium Nebula surrounding Ignis Major bathes it in a constant haze of ionized gas, making navigation treacherous. Early explorers who ventured too deep into the atmosphere were never seen again — earning the planet its ominous reputation.",
    ],
    diameter: "49,876",
    gravity: "0.435",
    area: "987.1M",
    vd: earthVd,
    model: IgnisMajorView,
    color: "#000000",
  },
  {
    id: 5,
    title: "Verdantia",
    des: "Verdantia, nestled in the Lushia System, is an exquisitely lush terrestrial planet adorned with vibrant flora and fauna. Its atmosphere is rich in oxygen, making it a haven for biodiversity and exploration.",
    longDes: [
      "Verdantia's surface is blanketed by continent-spanning forests of towering bioluminescent trees that glow gold and amber at night. The planet's high oxygen content and warm, humid climate have driven an explosion of biodiversity unmatched anywhere in the Lushia System.",
      "The planet's megafauna are equally remarkable. Creatures the size of buildings roam Verdantia's ancient forests, having evolved in an environment where there are no natural predators large enough to threaten them. Explorers are advised to observe from a safe distance.",
      "Verdantia's soil is extraordinarily fertile, enriched by millennia of decomposed organic matter. Agricultural surveys have found that virtually any crop from any known world can be grown here, making Verdantia a critical food source for nearby colonies.",
    ],
    diameter: "15,669",
    gravity: "0.919",
    area: "510.1M",
    vd: earthVd,
    model: VerdantiaView,
    color: "#241508",
  },
  {
    id: 6,
    title: "Spectra",
    des: "Spectra Prime, located in the Chromatic Expanse, is a planet renowned for its mesmerizing light displays caused by unique mineral formations that refract light in a myriad of colors across its surface. It's a popular destination for astronomers and artists alike.",
    longDes: [
      "Spectra Prime's surface is encrusted with vast fields of prismatic crystals — some standing hundreds of meters tall — that refract its star's light into cascading rainbows that sweep across the landscape as the planet rotates. No two sunrises look the same.",
      "The crystals are composed of a mineral unique to Spectra, dubbed Spectraite. When struck by specific wavelengths of light, Spectraite emits harmonic resonance tones, meaning that Spectra Prime is not only visually stunning but also produces a constant, haunting music.",
      "Spectra's popularity as a tourist destination has led to strict conservation laws. Large sections of the crystal fields are protected reserves, and visitors must follow designated paths to avoid damaging the formations that took millions of years to grow.",
    ],
    diameter: "24,801",
    gravity: "1.057",
    area: "432.1M",
    vd: earthVd,
    model: SpectraView,
    color: "#481213",
  },
  {
    id: 7,
    title: "Nebulon",
    des: "Nebulon, situated closest to its star in the Ember System, is a fiery inferno of molten lava and volcanic activity. Its extreme conditions make it uninhabitable, yet it remains a subject of fascination for scientists studying planetary formation and geology.",
    longDes: [
      "Nebulon's surface is in a constant state of violent renewal. Hundreds of active supervolcanoes erupt simultaneously at any given moment, reshaping the landscape daily. The planet's crust is so thin in places that lava lakes stretch to the horizon, glowing a deep, hellish orange.",
      "Despite its hostility, Nebulon is scientifically invaluable. Its ongoing geological activity provides a real-time window into the processes that shaped rocky planets billions of years ago. Remote probes have survived on its surface for only minutes before being destroyed.",
      "Nebulon's volcanic outgassing has created a thick atmosphere of sulfur compounds and carbon dioxide that traps heat in a runaway greenhouse effect. Surface temperatures average 1,200C — hot enough to melt most metals. It is the most geologically active world ever discovered.",
    ],
    diameter: "10,583",
    gravity: "0.371",
    area: "235.1M",
    vd: earthVd,
    model: NebulonView,
    color: "#081c15",
  },
];
