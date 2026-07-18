export interface Bijuu {
  id: string;
  name: string;
  tails: number;
  jinchuriki: string;
  description: string;
  abilities: string[];
  color: string;
  stats: {
    power: number;
    chakra: number;
    defense: number;
  };
}

export const BIJUU_CODEX: Bijuu[] = [
  {
    id: "shukaku",
    name: "Shukaku (One-Tail)",
    tails: 1,
    jinchuriki: "Gaara",
    description: "A wild-tempered and sand-manipulating beast that resembles a tanuki. Infamously known for causing insomnia in its hosts.",
    abilities: ["Sand Manipulation", "Wind Style", "Magnet Style", "Sealing Jutsu"],
    color: "#ffb347",
    stats: { power: 82, chakra: 85, defense: 95 }
  },
  {
    id: "matatabi",
    name: "Matatabi (Two-Tails)",
    tails: 2,
    jinchuriki: "Yugito Nii",
    description: "A polite and well-mannered beast made of blue, blazing fire, resembling a bakeneko (monster cat).",
    abilities: ["Blue Fire Release", "Extreme Speed", "Raw Taijutsu Combat"],
    color: "#6d28d9",
    stats: { power: 84, chakra: 88, defense: 75 }
  },
  {
    id: "isobu",
    name: "Isobu (Three-Tails)",
    tails: 3,
    jinchuriki: "Yagura Karatachi",
    description: "A giant turtle-like beast with a spiked shell, capable of creating illusory mists and colossal tidal waves.",
    abilities: ["Water Style", "Spiked Shell Armor", "Coral Ripples", "Illusion Mists"],
    color: "#ffb347",
    stats: { power: 85, chakra: 87, defense: 98 }
  },
  {
    id: "songoku",
    name: "Son Gokū (Four-Tails)",
    tails: 4,
    jinchuriki: "Rōshi",
    description: "An ape-like beast boasting proud martial art skills and the destructive power of Lava Release.",
    abilities: ["Lava Style", "Super Strength", "Fire Style", "Earth Style"],
    color: "#d62828",
    stats: { power: 90, chakra: 89, defense: 85 }
  },
  {
    id: "kokuo",
    name: "Kokuō (Five-Tails)",
    tails: 5,
    jinchuriki: "Han",
    description: "A quiet, elegant beast resembling a hybrid of a horse and a dolphin, utilizing steam-based physical power.",
    abilities: ["Steam Style (Boil Release)", "Charging Horn Attack", "Unmatched Physical Thrust"],
    color: "#ffffff",
    stats: { power: 88, chakra: 90, defense: 88 }
  },
  {
    id: "saiken",
    name: "Saiken (Six-Tails)",
    tails: 6,
    jinchuriki: "Utakata",
    description: "A slimy, six-tailed slug-like beast capable of emitting corrosive liquids and explosive bubbles.",
    abilities: ["Corrosive Acids", "Bubble Ninjutsu", "Gas Release", "Sticky Slime"],
    color: "#6d28d9",
    stats: { power: 85, chakra: 91, defense: 92 }
  },
  {
    id: "chomei",
    name: "Chōmei (Seven-Tails)",
    tails: 7,
    jinchuriki: "Fū",
    description: "An insect-like beast resembling a blue armored rhinoceros beetle, and the only beast capable of natural flight.",
    abilities: ["Flight", "Blinding Scale Powder", "Cocoon Armor", "Chakra Threads"],
    color: "#ffb347",
    stats: { power: 86, chakra: 92, defense: 84 }
  },
  {
    id: "gyuki",
    name: "Gyūki (Eight-Tails)",
    tails: 8,
    jinchuriki: "Killer B",
    description: "A highly intelligent, massive bull-octopus hybrid. Known for having a highly cooperative relationship with Killer B.",
    abilities: ["Ink Spitting", "Tailing Twister (Tornadoes)", "Superb Combat Tactics", "Chakra Arms"],
    color: "#6d28d9",
    stats: { power: 94, chakra: 95, defense: 90 }
  },
  {
    id: "kurama",
    name: "Kurama (Nine-Tails)",
    tails: 9,
    jinchuriki: "Naruto Uzumaki",
    description: "The strongest of the nine Tailed Beasts. Possesses an immense reservoir of pure, blazing chakra and a cynical yet fiercely loyal spirit.",
    abilities: ["Colossal Chakra Clones", "Tailed Beast Bomb", "Negative Emotions Sensing", "Sage Chakra Synergizing"],
    color: "#ff7a18",
    stats: { power: 99, chakra: 100, defense: 94 }
  },
  {
    id: "jubi",
    name: "Ten-Tails (Jūbi)",
    tails: 10,
    jinchuriki: "Obito Uchiha, Madara Uchiha",
    description: "The primoridial progenitor of chakra. The physical incarnation of the God Tree itself, with power capable of ending worlds.",
    abilities: ["Cataclysmic Weather Storms", "Wood Style Flower Buds", "Infinite Tailed Beast Bombs", "Truth-Seeking Orbs"],
    color: "#d62828",
    stats: { power: 100, chakra: 100, defense: 100 }
  }
];
