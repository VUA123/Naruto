export interface Jutsu {
  id: string;
  name: string;
  japaneseName: string;
  rank: "E" | "D" | "C" | "B" | "A" | "S";
  type: "Ninjutsu" | "Taijutsu" | "Genjutsu" | "Fūinjutsu";
  element: "None" | "Fire" | "Wind" | "Lightning" | "Earth" | "Water" | "Wood";
  creator: string;
  description: string;
  notableUsers: string[];
}

export const JUTSU_DATA: Jutsu[] = [
  {
    id: "rasengan",
    name: "Rasengan (Spiraling Sphere)",
    japaneseName: "螺旋丸",
    rank: "A",
    type: "Ninjutsu",
    element: "None",
    creator: "Minato Namikaze",
    description: "An extremely high-level Ninjutsu technique that requires perfect chakra control. The user gathers a massive spin of chakra in their palm, molding it into a dense, rapidly rotating sphere. It delivers catastrophic crushing and kinetic damage upon contact without needing hand signs.",
    notableUsers: ["Naruto Uzumaki", "Minato Namikaze", "Jiraiya", "Kakashi Hatake"]
  },
  {
    id: "chidori",
    name: "Chidori (One Thousand Birds)",
    japaneseName: "千鳥",
    rank: "A",
    type: "Ninjutsu",
    element: "Lightning",
    creator: "Kakashi Hatake",
    description: "A highly concentrated thrust of lightning-infused chakra gathered in the user's hand, emitting a sound reminiscent of a thousand chirping birds. It grants incredible piercing power, allowing the user to stab through almost any barrier, but requires extreme speed.",
    notableUsers: ["Sasuke Uchiha", "Kakashi Hatake"]
  },
  {
    id: "shadow_clone",
    name: "Multi-Shadow Clone Jutsu",
    japaneseName: "多重影分身の術",
    rank: "A",
    type: "Ninjutsu",
    element: "None",
    creator: "Tobirama Senju",
    description: "An advanced, forbidden variation of the standard Clone Jutsu. Instead of creating illusionary duplicates, the user evenly divides their chakra to create solid, physically real clones. Because it halves the user's chakra recursively, it is forbidden to anyone without massive chakra reserves.",
    notableUsers: ["Naruto Uzumaki", "Tobirama Senju", "Kakashi Hatake"]
  },
  {
    id: "rasenshuriken",
    name: "Wind Release: Rasenshuriken",
    japaneseName: "風遁・螺旋手裏剣",
    rank: "S",
    type: "Ninjutsu",
    element: "Wind",
    creator: "Naruto Uzumaki",
    description: "The ultimate evolution of the Rasengan. Naruto achieved what the Fourth Hokage could not: fusing elemental wind nature with the rotating chakra sphere. Shaped like a massive spinning shuriken, it attacks the target at a cellular level, cutting chakra pathways with trillions of microscopic wind blades.",
    notableUsers: ["Naruto Uzumaki"]
  },
  {
    id: "flying_raijin",
    name: "Flying Thunder God Jutsu",
    japaneseName: "飛雷神の術",
    rank: "S",
    type: "Ninjutsu",
    element: "None",
    creator: "Tobirama Senju",
    description: "A legendary Space-Time Ninjutsu. The user places a special seal formula onto a target or weapon (like a custom kunai). Once marked, the user can instantly teleport across dimensions to that seal's exact location, bypassing all distance and physical barriers.",
    notableUsers: ["Minato Namikaze", "Tobirama Senju"]
  },
  {
    id: "susanoo",
    name: "Susano'o (Tempestuous God)",
    japaneseName: "須佐能乎",
    rank: "S",
    type: "Ninjutsu",
    element: "None",
    creator: "Ōtsutsuki Clan",
    description: "The ultimate defense and offense unlocked by awakening the Mangekyō Sharingan in both eyes. The user summons a colossal, spectral samurai warrior made of solid chakra that surrounds and protects them, capable of slicing mountains and deflecting meteors.",
    notableUsers: ["Sasuke Uchiha", "Itachi Uchiha", "Madara Uchiha", "Kakashi Hatake"]
  },
  {
    id: "amaterasu",
    name: "Amaterasu (Heavenly Illuminating)",
    japaneseName: "天照",
    rank: "S",
    type: "Ninjutsu",
    element: "Fire",
    creator: "Uchiha Clan",
    description: "The highest level of Fire Release, unlocked via the Mangekyō Sharingan. It produces legendary jet-black flames at the exact focal point of the user's vision. These black flames burn as hot as the sun and are completely unquenchable, burning for seven days and seven nights until the target is reduced to ash.",
    notableUsers: ["Sasuke Uchiha", "Itachi Uchiha"]
  },
  {
    id: "reaper_seal",
    name: "Reaper Death Seal",
    japaneseName: "屍鬼封尽",
    rank: "S",
    type: "Fūinjutsu",
    element: "None",
    creator: "Uzumaki Clan",
    description: "A dark and absolute sealing technique of the Uzumaki Clan. The user summons the Shinigami (Death God) to physically extract the target's soul and seal it away. However, as the ultimate price of the pact, the Shinigami also devours the user's soul, condemning both to eternal combat in the Death God's stomach.",
    notableUsers: ["Minato Namikaze", "Hiruzen Sarutobi"]
  },
  {
    id: "night_guy",
    name: "Night Guy (The Eight Gates)",
    japaneseName: "夜ガイ",
    rank: "S",
    type: "Taijutsu",
    element: "None",
    creator: "Might Guy",
    description: "The ultimate, forbidden Taijutsu attack. By opening the eighth and final gate (Gate of Death), the user gains physical power exceeding all Kages combined. Night Guy is a single, kick attack of such extreme, concentrated force that it bends the local fabric of space-time, making it impossible to dodge.",
    notableUsers: ["Might Guy"]
  },
  {
    id: "tsukuyomi",
    name: "Tsukuyomi (Moon God)",
    japaneseName: "月読",
    rank: "S",
    type: "Genjutsu",
    element: "None",
    creator: "Itachi Uchiha",
    description: "One of the most powerful illusionary genjutsu in existence, cast through the Mangekyō Sharingan. Upon eye contact, the target's mind is dragged into an illusionary dimension where the caster has absolute control over space, gravity, and time. Seconds in reality can translate to days of mental torture in the illusion, completely destroying the target's psyche.",
    notableUsers: ["Itachi Uchiha"]
  },
  {
    id: "kirin",
    name: "Kirin (The Lightning Beast)",
    japaneseName: "麒麟",
    rank: "S",
    type: "Ninjutsu",
    element: "Lightning",
    creator: "Sasuke Uchiha",
    description: "A legendary lightning technique that Sasuke developed to bypass chakra limitations. Instead of using his own chakra, he uses fire to create massive storm clouds in the sky, then molds the *natural lightning* into the shape of a colossal Kirin beast, driving it down onto the enemy in less than a millisecond.",
    notableUsers: ["Sasuke Uchiha"]
  },
  {
    id: "wood_golem",
    name: "Wood Style: True Several Thousand Hands",
    japaneseName: "木遁・真数千手",
    rank: "S",
    type: "Ninjutsu",
    element: "Wood",
    creator: "Hashirama Senju",
    description: "A titanic Wood Release jutsu requiring Sage Mode. Hashirama summons a colossal, wooden statue of a multi-armed deity that dwarfs even the Tailed Beasts. Armed with thousands of moving arms, it can deliver a barrage of physical blows capable of stripping Kurama's armor and obliterating mountain ranges.",
    notableUsers: ["Hashirama Senju"]
  }
];
