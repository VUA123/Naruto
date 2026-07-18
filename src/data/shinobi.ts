export interface Shinobi {
  id: string;
  name: string;
  clan: string;
  village: string;
  rank: string;
  description: string;
  specialty: string;
  color: string;
  stats: {
    ninjutsu: number;
    taijutsu: number;
    genjutsu: number;
    intelligence: number;
    stamina: number;
  };
}

export const SHINOBI_ROSTER: Shinobi[] = [
  // Team 7
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    clan: "Uzumaki",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Genin / Seventh Hokage",
    description: "The Nine-Tails Jinchuriki who overcame isolation to become the Leaf Village's hero and eventually the Seventh Hokage.",
    specialty: "Shadow Clone Jutsu, Rasengan, Sage Mode",
    color: "#ff7a18",
    stats: { ninjutsu: 95, taijutsu: 90, genjutsu: 30, intelligence: 70, stamina: 100 }
  },
  {
    id: "sasuke",
    name: "Sasuke Uchiha",
    clan: "Uchiha",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Rogue Ninja / Supporting Kage",
    description: "Last survivor of the Uchiha clan, dedicated to avenging his clan, later protector of the village from the shadows.",
    specialty: "Sharingan, Chidori, Susano'o, Amaterasu",
    color: "#6d28d9",
    stats: { ninjutsu: 98, taijutsu: 92, genjutsu: 95, intelligence: 95, stamina: 85 }
  },
  {
    id: "sakura",
    name: "Sakura Haruno",
    clan: "Haruno",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Head Medical Ninja",
    description: "One of the world's greatest medical ninjas, possessing monstrous strength and perfect chakra control trained by Tsunade.",
    specialty: "Chakra Enhanced Strength, Medical Ninjutsu, Mitotic Regeneration",
    color: "#ffb347",
    stats: { ninjutsu: 80, taijutsu: 85, genjutsu: 65, intelligence: 98, stamina: 80 }
  },
  {
    id: "kakashi",
    name: "Kakashi Hatake",
    clan: "Hatake",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Sixth Hokage",
    description: "Known worldwide as the Copy Ninja Kakashi, leader of Team 7, who copied over a thousand jutsu using his Sharingan.",
    specialty: "Chidori, Kamui, Lightning Blade, Thousand Jutsu Copy",
    color: "#ffb347",
    stats: { ninjutsu: 90, taijutsu: 88, genjutsu: 85, intelligence: 96, stamina: 75 }
  },
  // Legendary Shinobi
  {
    id: "jiraiya",
    name: "Jiraiya",
    clan: "Unknown",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Legendary Sannin",
    description: "The Toad Sage, a legendary warrior and author who trained several of the world's most powerful shinobi, including Minato and Naruto.",
    specialty: "Toad Summoning, Sage Mode, Rasengan, Hair Needle Senbon",
    color: "#d62828",
    stats: { ninjutsu: 94, taijutsu: 90, genjutsu: 60, intelligence: 90, stamina: 92 }
  },
  {
    id: "tsunade",
    name: "Tsunade",
    clan: "Senju",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Legendary Sannin / Fifth Hokage",
    description: "Famed as the world's strongest kunoichi and its greatest medical ninja. Renowned for her creation of the medical-nin system.",
    specialty: "Monster Strength, Creation Rebirth, Slug Summoning (Katsuyu)",
    color: "#ffb347",
    stats: { ninjutsu: 85, taijutsu: 95, genjutsu: 50, intelligence: 92, stamina: 95 }
  },
  {
    id: "orochimaru",
    name: "Orochimaru",
    clan: "Unknown",
    village: "Hidden Sound (Otogakure) / Leaf",
    rank: "Legendary Sannin / Rogue",
    description: "An obsessed researcher seeking immortality and mastery of all world jutsu. Creator of the Hidden Sound Village.",
    specialty: "Snake Summoning, Impure World Reincarnation, Curse Mark",
    color: "#6d28d9",
    stats: { ninjutsu: 96, taijutsu: 85, genjutsu: 90, intelligence: 98, stamina: 90 }
  },
  {
    id: "itachi",
    name: "Itachi Uchiha",
    clan: "Uchiha",
    village: "Hidden Leaf (Konohagakure) / Akatsuki",
    rank: "Rogue Ninja / S-Class",
    description: "A prodigy of the Uchiha Clan who sacrificed his honor and massacred his clan to protect the Hidden Leaf and Sasuke.",
    specialty: "Mangekyo Sharingan, Tsukuyomi, Amaterasu, Susano'o",
    color: "#d62828",
    stats: { ninjutsu: 95, taijutsu: 90, genjutsu: 100, intelligence: 99, stamina: 60 }
  },
  {
    id: "madara",
    name: "Madara Uchiha",
    clan: "Uchiha",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Legendary Clan Leader",
    description: "The legendary co-founder of the Hidden Leaf Village. A warrior of unrivaled power who sought to end conflict via the Infinite Tsukuyomi.",
    specialty: "Perfect Susano'o, Rinnegan, Wood Style, Shattered Heaven (Meteorite)",
    color: "#d62828",
    stats: { ninjutsu: 100, taijutsu: 98, genjutsu: 98, intelligence: 96, stamina: 98 }
  },
  {
    id: "obito",
    name: "Obito Uchiha",
    clan: "Uchiha",
    village: "Hidden Leaf (Konohagakure) / Rogue",
    rank: "Rogue Ninja / Ten-Tails Jinchuriki",
    description: "Believed to have died in the third war, he operated in the shadows as Tobi, manipulating the Akatsuki to realize Madara's plan.",
    specialty: "Kamui (Intangibility), Sharingan, Wood Style, Izanagi",
    color: "#ff7a18",
    stats: { ninjutsu: 94, taijutsu: 88, genjutsu: 90, intelligence: 85, stamina: 95 }
  },
  {
    id: "pain",
    name: "Pain (Nagato)",
    clan: "Uzumaki",
    village: "Hidden Rain (Amegakure) / Akatsuki",
    rank: "Akatsuki Leader / God",
    description: "The recognized leader of the Akatsuki. Possessor of the Rinnegan, operating six corpses known as the Six Paths of Pain.",
    specialty: "Almighty Push (Shinra Tensei), Universal Pull, Chibaku Tensei",
    color: "#ff7a18",
    stats: { ninjutsu: 99, taijutsu: 80, genjutsu: 85, intelligence: 90, stamina: 90 }
  },
  // Kages
  {
    id: "hashirama",
    name: "Hashirama Senju",
    clan: "Senju",
    village: "Hidden Leaf (Konohagakure)",
    rank: "First Hokage",
    description: "Co-founder of the Leaf Village, known as the 'God of Shinobi' for his unmatched power and unique Wood Release.",
    specialty: "Wood Style: Deep Forest Emergence, Sage Art: Wood Golem, True Several Thousand Hands",
    color: "#d62828",
    stats: { ninjutsu: 100, taijutsu: 96, genjutsu: 75, intelligence: 90, stamina: 100 }
  },
  {
    id: "tobirama",
    name: "Tobirama Senju",
    clan: "Senju",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Second Hokage",
    description: "An incredibly pragmatic leader and genius creator of legendary jutsu, including Shadow Clones, Flying Raijin, and Reanimation.",
    specialty: "Water Style, Flying Raijin, Edo Tensei, Shadow Clones",
    color: "#6d28d9",
    stats: { ninjutsu: 96, taijutsu: 92, genjutsu: 70, intelligence: 98, stamina: 85 }
  },
  {
    id: "hiruzen",
    name: "Hiruzen Sarutobi",
    clan: "Sarutobi",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Third Hokage",
    description: "The 'Professor' who mastered all basic nature transformations and all jutsu native to the Hidden Leaf Village.",
    specialty: "Five Elements Combo, Reaper Death Seal, Monkey King Enma",
    color: "#ffb347",
    stats: { ninjutsu: 94, taijutsu: 86, genjutsu: 85, intelligence: 97, stamina: 70 }
  },
  {
    id: "minato",
    name: "Minato Namikaze",
    clan: "Namikaze",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Fourth Hokage",
    description: "The 'Yellow Flash of the Leaf', known for his extreme speed, creator of the Rasengan, and savior of the village from Nine-Tails.",
    specialty: "Flying Raijin (Teleportation), Rasengan, Reaper Death Seal",
    color: "#ff7a18",
    stats: { ninjutsu: 95, taijutsu: 90, genjutsu: 75, intelligence: 98, stamina: 80 }
  },
  {
    id: "gaara",
    name: "Gaara",
    clan: "Kazekage Clan",
    village: "Hidden Sand (Sunagakure)",
    rank: "Fifth Kazekage",
    description: "The former One-Tail Jinchuriki who transitioned from a ruthless weapon into a beloved leader protecting the Sand Village.",
    specialty: "Sand Tsunami, Shield of Shukaku, Sand Coffin, Imperial Desert Funeral",
    color: "#ffb347",
    stats: { ninjutsu: 92, taijutsu: 75, genjutsu: 60, intelligence: 90, stamina: 92 }
  },
  {
    id: "raikage-a",
    name: "A (Fourth Raikage)",
    clan: "Yotsuki",
    village: "Hidden Cloud (Kumogakure)",
    rank: "Fourth Raikage",
    description: "A leader of unparalleled physical power, speed, and durability, utilizing lightning-infused armor to destroy foes.",
    specialty: "Lightning Chakra Mode, Lariat, Lightning Bomb, Extreme Speed",
    color: "#ff7a18",
    stats: { ninjutsu: 88, taijutsu: 96, genjutsu: 40, intelligence: 82, stamina: 96 }
  },
  {
    id: "mei",
    name: "Mei Terumi",
    clan: "Unknown",
    village: "Hidden Mist (Kirigakure)",
    rank: "Fifth Mizukage",
    description: "The reformist leader of the Mist who ended the 'Bloody Mist' era. Possessor of two unique Kekkei Genkai.",
    specialty: "Lava Style, Boil Style: Acid Mist, Water Style Dragon",
    color: "#6d28d9",
    stats: { ninjutsu: 91, taijutsu: 78, genjutsu: 70, intelligence: 88, stamina: 85 }
  },
  {
    id: "onoki",
    name: "Ōnoki",
    clan: "Kamizuru",
    village: "Hidden Stone (Iwagakure)",
    rank: "Third Tsuchikage",
    description: "An elderly but proud leader who possesses the incredibly rare Dust Release (Kekkei Tota), allowing him to atomize targets.",
    specialty: "Dust Style: Particle Dismantling, Weighted Boulder Jutsu, Flight",
    color: "#ffb347",
    stats: { ninjutsu: 95, taijutsu: 65, genjutsu: 70, intelligence: 94, stamina: 65 }
  }
];
