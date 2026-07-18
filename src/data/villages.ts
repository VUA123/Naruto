export interface Village {
  id: string;
  name: string;
  leaderTitle: string;
  currentLeader: string;
  symbol: string;
  description: string;
  specialty: string;
  color: string;
  stats: {
    militaryPower: number;
    economicStrength: number;
    ninjaPopulation: number;
  };
}

export const VILLAGE_DATA: Village[] = [
  {
    id: "konoha",
    name: "Hidden Leaf (Konohagakure)",
    leaderTitle: "Hokage",
    currentLeader: "Naruto Uzumaki",
    symbol: "🍃 Leaf Spiral",
    description: "Located in the Land of Fire, co-founded by Hashirama Senju and Madara Uchiha. It is the largest, most famous, and influential of the hidden villages.",
    specialty: "Fire Style, Shurikenjutsu, Strong Clan Alliances",
    color: "#ff7a18",
    stats: { militaryPower: 96, economicStrength: 98, ninjaPopulation: 95 }
  },
  {
    id: "suna",
    name: "Hidden Sand (Sunagakure)",
    leaderTitle: "Kazekage",
    currentLeader: "Gaara",
    symbol: "⏳ Hourglass Sandglass",
    description: "Located in the Land of Wind, surrounded by harsh, vast deserts. Its ninja rely on sand manipulation, puppets, and wind jutsu.",
    specialty: "Puppet Master Jutsu, Sand Control, Wind Style",
    color: "#ffb347",
    stats: { militaryPower: 88, economicStrength: 85, ninjaPopulation: 80 }
  },
  {
    id: "kiri",
    name: "Hidden Mist (Kirigakure)",
    leaderTitle: "Mizukage",
    currentLeader: "Chōjūrō / Mei Terumī (Retired)",
    symbol: "🌫️ Mist Waves",
    description: "Located in the Land of Water, originally famed as the 'Bloody Mist' due to brutal Academy exam trials. Home to the Seven Ninja Swordsmen.",
    specialty: "Water Style, Silent Killing Technique, Swordsmanship",
    color: "#6d28d9",
    stats: { militaryPower: 85, economicStrength: 88, ninjaPopulation: 82 }
  },
  {
    id: "kumo",
    name: "Hidden Cloud (Kumogakure)",
    leaderTitle: "Raikage",
    currentLeader: "Darui / A (Retired)",
    symbol: "☁️ Twin Clouds",
    description: "Located in the Land of Lightning, built high among mountain peaks constantly shrouded in clouds. Known for military discipline and lightning power.",
    specialty: "Lightning Style, Kenjutsu (Sword Combat), Nintaijutsu",
    color: "#ffb347",
    stats: { militaryPower: 94, economicStrength: 92, ninjaPopulation: 90 }
  },
  {
    id: "iwa",
    name: "Hidden Stone (Iwagakure)",
    leaderTitle: "Tsuchikage",
    currentLeader: "Kurotsuchi / Ōnoki (Retired)",
    symbol: "🪨 Twin Rocks",
    description: "Located in the Land of Earth, protected by giant natural rocky mountain ranges. Famous for unshakeable stubbornness and defensive walls.",
    specialty: "Earth Style, Dust Style (Kekkei Tota), Golem Summoning",
    color: "#d62828",
    stats: { militaryPower: 90, economicStrength: 90, ninjaPopulation: 88 }
  }
];
