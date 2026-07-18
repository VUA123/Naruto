export interface Clan {
  id: string;
  name: string;
  emblem: string; // Brief description of what emblem to draw or emoji
  description: string;
  specialAbility: string;
  notableMembers: string[];
  color: string;
  stats: {
    influence: number;
    jutsuMastery: number;
    stamina: number;
  };
}

export const CLAN_DATA: Clan[] = [
  {
    id: "uchiha",
    name: "Uchiha Clan",
    emblem: "🔴 Fan Symbol (Red & White)",
    description: "One of the four noble clans of Konohagakure, famed for their incredible combat prowess and powerful ocular jutsu.",
    specialAbility: "Sharingan / Mangekyo Sharingan (Visual Illusion & Susano'o)",
    notableMembers: ["Sasuke Uchiha", "Itachi Uchiha", "Madara Uchiha", "Obito Uchiha"],
    color: "#d62828",
    stats: { influence: 98, jutsuMastery: 100, stamina: 85 }
  },
  {
    id: "uzumaki",
    name: "Uzumaki Clan",
    emblem: "🌀 Red Spiral (Uzushio)",
    description: "Originating from Uzushio, this clan is famous for their incredibly strong life-forces and mastery of sealing arts.",
    specialAbility: "Colossal Chakra Reserves, Adamantine Sealing Chains",
    notableMembers: ["Naruto Uzumaki", "Nagato (Pain)", "Kushina Uzumaki", "Karin"],
    color: "#ff7a18",
    stats: { influence: 95, jutsuMastery: 90, stamina: 100 }
  },
  {
    id: "senju",
    name: "Senju Clan",
    emblem: "🔱 Vajra Symbol",
    description: "The 'Clan with a Thousand Skills', co-founders of the Leaf Village. Renowned for their incredible life force and physical energy.",
    specialAbility: "Wood Style (Mokuton), Sage Body Regeneration",
    notableMembers: ["Hashirama Senju", "Tobirama Senju", "Tsunade"],
    color: "#ffb347",
    stats: { influence: 100, jutsuMastery: 98, stamina: 98 }
  },
  {
    id: "hyuga",
    name: "Hyūga Clan",
    emblem: "⚪ White Gentle Eye",
    description: "A noble clan of Konoha possessing the Byakugan, giving them an almost 360-degree field of vision and the ability to see chakra.",
    specialAbility: "Byakugan (Ocular Vision) & Gentle Fist Taijutsu Style",
    notableMembers: ["Hinata Hyūga", "Neji Hyūga", "Hiashi Hyūga", "Hanabi Hyūga"],
    color: "#6d28d9",
    stats: { influence: 94, jutsuMastery: 95, stamina: 82 }
  },
  {
    id: "nara",
    name: "Nara Clan",
    emblem: "🦌 Deer Emblem / Shadow Spiral",
    description: "Famed for their high intelligence, sheep/deer-herding, and their incredible ability to manipulate shadows.",
    specialAbility: "Shadow Possession Jutsu, High Strategic Intelligence",
    notableMembers: ["Shikamaru Nara", "Shikaku Nara", "Shikadai Nara"],
    color: "#ffb347",
    stats: { influence: 85, jutsuMastery: 88, stamina: 70 }
  },
  {
    id: "akimichi",
    name: "Akimichi Clan",
    emblem: "🍚 'Food' Kanji Circle",
    description: "One of the noble clans of Leaf. Members can convert calories into pure physical size and raw combat energy.",
    specialAbility: "Expansion Jutsu, Butterfly Chakra Mode",
    notableMembers: ["Choji Akimichi", "Choza Akimichi", "Chocho Akimichi"],
    color: "#ff7a18",
    stats: { influence: 82, jutsuMastery: 80, stamina: 95 }
  },
  {
    id: "yamanaka",
    name: "Yamanaka Clan",
    emblem: "🌸 Clover / Violet Flower",
    description: "A clan that runs a local flower shop, specializing in sensory communication and mind-transfer infiltration jutsu.",
    specialAbility: "Mind Transfer Jutsu, Sensory Communication Link",
    notableMembers: ["Ino Yamanaka", "Inoichi Yamanaka", "Inojin Yamanaka"],
    color: "#6d28d9",
    stats: { influence: 84, jutsuMastery: 85, stamina: 75 }
  },
  {
    id: "aburame",
    name: "Aburame Clan",
    emblem: "🐝 Parasitic Insect Cluster",
    description: "A mysterious clan whose members offer their bodies as nests for parasitic insects (Kikaichu) in exchange for combat aid.",
    specialAbility: "Insect Manipulation Jutsu, Chakra Draining Swarms",
    notableMembers: ["Shino Aburame", "Shibi Aburame", "Torune Aburame"],
    color: "#ffb347",
    stats: { influence: 80, jutsuMastery: 90, stamina: 85 }
  },
  {
    id: "inuzuka",
    name: "Inuzuka Clan",
    emblem: "🐾 Red Fang Marks",
    description: "A clan known for their deep bonds with canine partners (Ninken), utilizing cooperative beast-mimicry combat styles.",
    specialAbility: "Fang Over Fang, Beast Human Clone",
    notableMembers: ["Kiba Inuzuka", "Tsume Inuzuka", "Hana Inuzuka", "Akamaru"],
    color: "#ff7a18",
    stats: { influence: 78, jutsuMastery: 80, stamina: 90 }
  }
];
