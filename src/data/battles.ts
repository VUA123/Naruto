export interface Fighter {
  name: string;
  avatarId: string; // Resolves to public/Shinobi/${avatarId}.jpg
  color: string;
  form: string; // The specific power-up form during this fight (e.g. "Susoano'o", "Kurama Link")
  stats: {
    ninjutsu: number;
    taijutsu: number;
    genjutsu: number;
    intelligence: number;
    stamina: number;
  };
}

export interface Battle {
  id: string;
  title: string;
  conflict: string;
  era: string; // Classic, Shippuden, Boruto
  location: string;
  description: string;
  victor: string; // Name of victor or "Draw"
  fighters: [Fighter, Fighter];
}

export const EPIC_BATTLES: Battle[] = [
  {
    id: "founding_clash",
    title: "The Battle of Founding Gods",
    conflict: "Hashirama Senju vs. Madara Uchiha",
    era: "Classic (Pre-Village Era)",
    location: "The Valley of the End",
    description: "The historical apex showdown between the co-founders of the Leaf. Madara brought the Nine-Tails clad in Susano'o armor, while Hashirama countered with his legendary Wood Release Sage Art: True Several Thousand Hands. Their clash carved the very canyon that would define the destiny of generations.",
    victor: "Hashirama Senju",
    fighters: [
      {
        name: "Hashirama Senju",
        avatarId: "hashirama",
        color: "#d62828",
        form: "Sage Mode: Wood Golem & Thousand Hands",
        stats: { ninjutsu: 100, taijutsu: 96, genjutsu: 75, intelligence: 90, stamina: 100 }
      },
      {
        name: "Madara Uchiha",
        avatarId: "madara",
        color: "#6d28d9",
        form: "Majestic Attire Susano'o (Nine-Tails Armor)",
        stats: { ninjutsu: 98, taijutsu: 95, genjutsu: 96, intelligence: 94, stamina: 98 }
      }
    ]
  },
  {
    id: "valley_part_1",
    title: "The Clash of Bonds & Brotherhood",
    conflict: "Naruto Uzumaki vs. Sasuke Uchiha (Part I)",
    era: "Classic Era",
    location: "The Valley of the End",
    description: "Naruto's desperate attempt to stop Sasuke from leaving the Leaf Village to join Orochimaru. In their final battle, Naruto tapped into the raw, red-burning Vermillion Kurama Shroud while Sasuke unleashed the fully developed Stage 2 Cursed Seal of Heaven, bringing Rasengan and Chidori into their fateful first collision.",
    victor: "Sasuke Uchiha",
    fighters: [
      {
        name: "Naruto Uzumaki",
        avatarId: "naruto",
        color: "#ff7a18",
        form: "One-Tailed Vermillion Rasengan Mode",
        stats: { ninjutsu: 75, taijutsu: 80, genjutsu: 20, intelligence: 55, stamina: 95 }
      },
      {
        name: "Sasuke Uchiha",
        avatarId: "sasuke",
        color: "#6d28d9",
        form: "Stage 2 Curse Mark Dark Chidori",
        stats: { ninjutsu: 80, taijutsu: 82, genjutsu: 75, intelligence: 80, stamina: 70 }
      }
    ]
  },
  {
    id: "kamui_duel",
    title: "Ghost of the Past in the Void",
    conflict: "Kakashi Hatake vs. Obito Uchiha",
    era: "Shippuden Era (Fourth War)",
    location: "The Kamui Dimension",
    description: "A battle fought in absolute silence inside the alternate Kamui dimension. Intercutting flashbacks of their childhood taijutsu spars with their modern, lethal deathmatch, the two old friends clashed over their broken dreams and ideologies. Kakashi aimed to pierce Obito's chest, while Obito used the fight to seal his heart's curse mark.",
    victor: "Kakashi Hatake (Tactical Win)",
    fighters: [
      {
        name: "Kakashi Hatake",
        avatarId: "kakashi",
        color: "#ffb347",
        form: "Kamui Sharingan & Lightning Blade",
        stats: { ninjutsu: 90, taijutsu: 88, genjutsu: 85, intelligence: 96, stamina: 75 }
      },
      {
        name: "Obito Uchiha",
        avatarId: "obito",
        color: "#ff7a18",
        form: "Kamui Phasing & Wood Style Release",
        stats: { ninjutsu: 92, taijutsu: 86, genjutsu: 90, intelligence: 85, stamina: 95 }
      }
    ]
  },
  {
    id: "final_valley",
    title: "The Ultimate Destined Showdown",
    conflict: "Naruto Uzumaki vs. Sasuke Uchiha (Part II)",
    era: "Shippuden Era (End)",
    location: "The Valley of the End",
    description: "The absolute climax of the entire Shippuden saga. Sasuke, aiming to execute the Kage and govern the world from the shadows, faces Naruto, who refuses to let his brother walk a lonely path. Clashing with Six Paths Sage Sage Art and the Rinnegan Susano'o, they fought to the point of exhaustion, culminating in a final Rasengan vs. Chidori that shattered the founding Hokage statues.",
    victor: "Draw (Sasuke Concedes)",
    fighters: [
      {
        name: "Naruto Uzumaki",
        avatarId: "naruto",
        color: "#ff7a18",
        form: "Three-Headed Six Paths Kurama Avatar",
        stats: { ninjutsu: 99, taijutsu: 95, genjutsu: 40, intelligence: 80, stamina: 100 }
      },
      {
        name: "Sasuke Uchiha",
        avatarId: "sasuke",
        color: "#6d28d9",
        form: "Perfect Susano'o (Tailed Beast Susano'o)",
        stats: { ninjutsu: 100, taijutsu: 94, genjutsu: 98, intelligence: 96, stamina: 85 }
      }
    ]
  },
  {
    id: "momoshiki_showdown",
    title: "The Union of Legendary Rivals",
    conflict: "Naruto & Sasuke vs. Momoshiki Otsutsuki",
    era: "Boruto Era",
    location: "Momoshiki's Alternate Planet",
    description: "Naruto and Sasuke combine their unparalleled powers to defend the universe from Momoshiki, a god-like Otsutsuki. Displaying flawless teamwork, Sasuke channels his Rinnegan teleportation alongside Naruto's Six Paths Kurama Mode, culminating in the iconic Majestic Attire Susano'o Kurama Slash and the Giant Father-Son Rasengan.",
    victor: "Naruto & Sasuke (Boruto Finisher)",
    fighters: [
      {
        name: "Naruto Uzumaki",
        avatarId: "naruto",
        color: "#ff7a18",
        form: "Six Paths Sage Kurama Golden Avatar Mode",
        stats: { ninjutsu: 98, taijutsu: 96, genjutsu: 50, intelligence: 88, stamina: 98 }
      },
      {
        name: "Sasuke Uchiha",
        avatarId: "sasuke",
        color: "#6d28d9",
        form: "Rinne-Sharingan Perfect Susano'o Mode",
        stats: { ninjutsu: 99, taijutsu: 95, genjutsu: 98, intelligence: 98, stamina: 82 }
      }
    ]
  },
  {
    id: "baryon_mode",
    title: "The Sovereign Flame of Existence",
    conflict: "Baryon Mode Naruto vs. Isshiki Otsutsuki",
    era: "Boruto Era (Peak)",
    location: "Isshiki's Pocket Dimension",
    description: "With all other options exhausted against the supreme Otsutsuki god, Isshiki, Kurama suggests a nuclear-fusion-like transformation: Baryon Mode. Consuming Naruto's and Kurama's life forces directly, the mode creates raw physical speed and power that overwhelms Isshiki, with each blow draining Isshiki's life span down to minutes. A beautiful, tragic victory paid with Kurama's life.",
    victor: "Naruto Uzumaki (Kurama sacrifice)",
    fighters: [
      {
        name: "Naruto Uzumaki",
        avatarId: "naruto",
        color: "#ef4444",
        form: "Ultimate Sovereign Baryon Mode (Life Fusion)",
        stats: { ninjutsu: 80, taijutsu: 100, genjutsu: 30, intelligence: 85, stamina: 100 }
      },
      {
        name: "Isshiki Otsutsuki",
        avatarId: "kaguya", // Fallback avatar
        color: "#3b82f6",
        form: "Byakugan & Sukunahikona Shrinking Divinity",
        stats: { ninjutsu: 99, taijutsu: 98, genjutsu: 90, intelligence: 95, stamina: 99 }
      }
    ]
  }
];
