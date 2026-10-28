export interface Summoning {
  id: string;
  name: string;
  species: string;
  region: string;
  rank: string; // S, A, B, C, D, E
  summoner: string;
  description: string;
  abilities: string[];
  color: string;
  symbol: string;
}

export interface NinjaTool {
  id: string;
  name: string;
  japaneseName: string;
  rank: string; // S, A, B, C, D, E
  type: string; // "Melee Weapon", "Ranged", "Artifact", "Accessory", "Standard Gear"
  owner: string;
  description: string;
  abilities: string[];
  color: string;
  symbol: string;
}

export interface Seal {
  id: string;
  name: string;
  japaneseName: string;
  rank: string; // S, A, B, C, D, E
  type: string; // "Sealing", "Unsealing", "Curse Mark", "Combat Seal"
  creator: string;
  description: string;
  handSeals: string;
  abilities: string[];
  color: string;
  symbol: string;
}

export const SUMMONINGS: Summoning[] = [
  {
    id: "gamabunta",
    name: "Gamabunta",
    species: "Toad (Gama)",
    region: "Mount Myōboku",
    rank: "S",
    summoner: "Jiraiya, Minato Namikaze, Naruto Uzumaki",
    description: "The chief toad of Mount Myoboku, Gamabunta is a massive, bad-tempered warrior who wields a giant tantō sword and spits colossal amounts of water and oil.",
    abilities: ["Water Style: Gunshot", "Toad Sword Dance", "Fire Style: Toad Oil Flame Bullet"],
    color: "#ef4444",
    symbol: "🐸"
  },
  {
    id: "katsuyu",
    name: "Katsuyu",
    species: "Slug (Namekuji)",
    region: "Shikkotsu Forest",
    rank: "S",
    summoner: "Tsunade, Sakura Haruno",
    description: "A gigantic, polite slug residing in the legendary Shikkotsu Forest. Katsuyu can split herself into millions of smaller slugs, allowing her to heal and transmit chakra to entire armies simultaneously.",
    abilities: ["Tongue Tooth Sticky Acid", "Slug Division", "Chakra Share & Cellular Healing"],
    color: "#3b82f6",
    symbol: "🐚"
  },
  {
    id: "manda",
    name: "Manda",
    species: "Snake (Hebi)",
    region: "Ryūchi Cave",
    rank: "S",
    summoner: "Orochimaru, Sasuke Uchiha",
    description: "The colossal, terrifying boss snake of Ryuchi Cave. Manda is notoriously ruthless, violent, and demands hundreds of human sacrifices from his summoner in exchange for combat assistance.",
    abilities: ["Skin Shedding (Decoy)", "Subterranean Ambush", "Supernatural Speed & Constriction"],
    color: "#6d28d9",
    symbol: "🐍"
  },
  {
    id: "enma",
    name: "Monkey King Enma",
    species: "Monkey (Saru)",
    region: "Unknown",
    rank: "S",
    summoner: "Hiruzen Sarutobi (Third Hokage)",
    description: "The loyal companion of the Third Hokage. Enma possesses incredible raw physical power and can transform his body into an indestructible Adamantine Staff that can expand, contract, and form protective cages.",
    abilities: ["Adamantine Staff Transformation", "Staff Clone Prison", "Expert Taijutsu Collaboration"],
    color: "#d97706",
    symbol: "🐒"
  },
  {
    id: "pakkun",
    name: "Pakkun",
    species: "Ninja Hound (Ninken)",
    region: "Hidden Leaf",
    rank: "C",
    summoner: "Kakashi Hatake",
    description: "A small pug who is the leader of Kakashi's eight Ninken. Pakkun is exceptionally intelligent, can speak human language, and possesses a supernatural sense of smell used for tracking and scouting.",
    abilities: ["Super Scent Tracking", "Voice Copying", "Ninken Hounding Wall Formation"],
    color: "#a8a29e",
    symbol: "🐶"
  },
  {
    id: "kamatari",
    name: "Kamatari",
    species: "Scythe Weasel (Kamaitachi)",
    region: "Hidden Sand",
    rank: "B",
    summoner: "Temari",
    description: "A massive scythe-wielding weasel summoned in combination with Temari's wind style. Kamatari rides the wind currents, decimating entire forests and slicing targets to ribbons in seconds.",
    abilities: ["Wind Style: Sea Dragon", "Instant Cleaving Cyclone", "Forest Logging Strike"],
    color: "#10b981",
    symbol: "🍃"
  }
];

export const NINJA_TOOLS: NinjaTool[] = [
  {
    id: "samehada",
    name: "Samehada (Shark Skin)",
    japaneseName: "鮫肌",
    rank: "S",
    type: "Melee Weapon",
    owner: "Kisame Hoshigaki / Seven Swordsmen",
    description: "The most terrifying of the Seven Swords of the Mist. Samehada is a sentient, scale-covered sword that shreds flesh and feeds on the chakra of its opponents, transferring it to its master.",
    abilities: ["Chakra Siphoning", "Fusion with Master", "Sentient Shield & Choice of Master"],
    color: "#6d28d9",
    symbol: "🦈"
  },
  {
    id: "kubikiribocho",
    name: "Kubikiribōchō (Executioner's Blade)",
    japaneseName: "首斬り包丁",
    rank: "S",
    type: "Melee Weapon",
    owner: "Zabuza Momochi / Kakashi Hatake / Suigetsu Hozuki",
    description: "A giant broadsword known as the 'Deforming Sword'. It has a unique circle cutout used to decapitate opponents. If chipped or broken, it regenerates itself using the iron extracted from the blood of those it slays.",
    abilities: ["Flesh & Iron Regeneration", "Colossal Slicing Power", "Silent Execution Synchronization"],
    color: "#ef4444",
    symbol: "⚔️"
  },
  {
    id: "bashosen",
    name: "Bashōsen (Banana Fan)",
    japaneseName: "芭蕉扇",
    rank: "S",
    type: "Artifact",
    owner: "Sage of Six Paths / Tenten",
    description: "One of the legendary Treasured Tools of the Sage of Six Paths. It is a large feather fan capable of generating any of the five basic elemental nature transformations in massive bursts, though it consumes lethal amounts of chakra.",
    abilities: ["Five-Element Burst Generation", "Fire, Water, Wind, Earth, Lightning Release", "Wind Storm Shields"],
    color: "#ef4444",
    symbol: "🪭"
  },
  {
    id: "kusanagi",
    name: "Sword of Kusanagi",
    japaneseName: "草薙の剣",
    rank: "S",
    type: "Melee Weapon",
    owner: "Sasuke Uchiha / Orochimaru",
    description: "A chokutō sword of peerless craftsmanship. Sasuke's version can easily channel his Chidori lightning chakra to become entirely unblockable, slicing through solid steel and stone like butter.",
    abilities: ["Chakra Flow Conduction", "Indestructible Razor Edge", "Chidori Katana Synchronization"],
    color: "#3b82f6",
    symbol: "🗡️"
  },
  {
    id: "chakrablade",
    name: "Chakra Trench Knives",
    japaneseName: "チャクラ刀",
    rank: "A",
    type: "Melee Weapon",
    owner: "Asuma Sarutobi / Shikamaru Nara",
    description: "Custom trench knives made of a special metal that absorbs the user's chakra. Asuma infuses them with his Wind chakra, extending the blade's reach with invisible, razor-sharp aura extensions.",
    abilities: ["Wind Nature Enhancement", "Extended Chakra Blades", "Close-quarters Piercing Power"],
    color: "#22c55e",
    symbol: "👊"
  },
  {
    id: "puppets",
    name: "Crow, Black Ant & Salamander",
    japaneseName: "烏 & 黒蟻 & 山椒魚",
    rank: "B",
    type: "Standard Gear",
    owner: "Sasori / Kankuro",
    description: "The classic mechanical puppet trio. Crow acts as the offense (housing hidden blades and poison launchers), Black Ant traps targets, and Salamander provides absolute iron defense.",
    abilities: ["Poison Gas & Dart Launching", "Triple Puppet Joint Ambush", "Salamander Iron Shielding"],
    color: "#eab308",
    symbol: "🎭"
  },
  {
    id: "fuma_shuriken",
    name: "Fūma Shuriken (Windmill)",
    japaneseName: "風魔手裏剣",
    rank: "C",
    type: "Ranged",
    owner: "Various Shinobi (Sasuke, Naruto, etc.)",
    description: "A massive four-bladed shuriken renowned for its extreme lethality. The blades are collapsible for easy storage and can be thrown with incredible momentum or used in shadow-impersonation decoys.",
    abilities: ["Collapsible Flight Mechanics", "Shadow Shuriken Decoy Combo", "High-velocity Slicing"],
    color: "#a78bfa",
    symbol: "🥏"
  },
  {
    id: "kunai",
    name: "Standard Kunai",
    japaneseName: "苦無",
    rank: "D",
    type: "Standard Gear",
    owner: "All Shinobi",
    description: "The quintessential utility tool and weapon of every ninja. A metal dagger used for close-range combat, throwing, carving, climbing, or attaching explosive tags.",
    abilities: ["Close-range Stabbing", "High-accuracy Throwing", "Tag Attachment Utility"],
    color: "#a3a3a3",
    symbol: "📍"
  },
  {
    id: "shuriken",
    name: "Standard Shuriken",
    japaneseName: "手裏剣",
    rank: "E",
    type: "Ranged",
    owner: "All Shinobi",
    description: "Small star-shaped throwing stars used in rapid succession to distract, disorient, or injure enemies from a distance. The absolute basis of academy throwing training.",
    abilities: ["Rapid Throwing", "Distraction & Cover Fire", "Deflecting Projectiles"],
    color: "#a3a3a3",
    symbol: "✴️"
  }
];

export const SEALS: Seal[] = [
  {
    id: "shiki_fujin",
    name: "Reaper Death Seal (Shiki Fūjin)",
    japaneseName: "屍鬼封尽",
    rank: "S",
    type: "Sealing",
    creator: "Uzumaki Clan",
    handSeals: "Snake → Boar → Ram → Rabbit → Dog → Rat → Bird → Horse → Snake → Clap Hands",
    description: "The ultimate forbidden sealing technique of the Uzumaki Clan. The summoner calls upon the Shinigami (Death God), who extracts the target's soul and devours it. In exchange, the summoner's soul is also consumed, condemning both to eternal combat inside the Reaper's stomach.",
    abilities: ["Absolute Soul Extraction", "Irreversible Seal", "Deity Binding Pact"],
    color: "#ef4444",
    symbol: "💀"
  },
  {
    id: "shisho_fujin",
    name: "Four Symbols Seal",
    japaneseName: "四象封尽",
    rank: "S",
    type: "Sealing",
    creator: "Uzumaki Clan",
    handSeals: "Clap Hands",
    description: "A high-level sealing formula based on the Uzumaki sealing style, used to seal powerful evil spirits or Tailed Beasts. Minato used two of these seals in a dual configuration to bind the Nine-Tails inside baby Naruto.",
    abilities: ["Tailed Beast Suppression", "Chakra Leakage Filtration (for Host)", "Reinforced Core Lock"],
    color: "#ef4444",
    symbol: "🌀"
  },
  {
    id: "curse_mark_heaven",
    name: "Cursed Seal of Heaven",
    japaneseName: "天の呪印",
    rank: "A",
    type: "Curse Mark",
    creator: "Orochimaru",
    handSeals: "Bite (Direct Application)",
    description: "A parasitic mark branded by Orochimaru. It feeds off the user's negative emotions and chakra, granting them massive physical power and a demonic Stage 2 transformation, while corroding their mind and binding their soul to Orochimaru's consciousness.",
    abilities: ["Stage 2 Demonic Transformation", "Raw Physical & Chakra Multiplyer", "Orochimaru's Consciousness Anchor"],
    color: "#6d28d9",
    symbol: "🎯"
  },
  {
    id: "gogyo_fujin",
    name: "Five Elements Seal (Gogyō Fūjin)",
    japaneseName: "五行封尽",
    rank: "A",
    type: "Sealing",
    creator: "Unknown / Leaf Elders",
    handSeals: "Five fingers charged with elemental flame directly applied to the target's core.",
    description: "A seal that blocks the flow of chakra from a Jinchuriki's tailed beast. Orochimaru used this on Naruto during the Chunin Exams, placing an odd-numbered seal over Minato's even-numbered Four Symbols Seal, fully disrupting Naruto's ability to balance or mold his own chakra.",
    abilities: ["Host-Beast Connection Disruption", "Chakra Molding Jamming", "Flow Constriction"],
    color: "#6d28d9",
    symbol: "🖐️"
  },
  {
    id: "iron_armor_seal",
    name: "Iron Armor Seal",
    japaneseName: "鉄甲封印",
    rank: "B",
    type: "Sealing",
    creator: "Hidden Cloud",
    handSeals: "Dog → Bird → Monkey → Ram",
    description: "The standard sealing technique of the Hidden Cloud Village, used to seal the Eight-Tails Gyūki inside its hosts. Though slightly weaker than the Uzumaki style, it creates a robust and stable Jinchūriki bond.",
    abilities: ["Jinchūriki Stabilization", "Beast Chakra Containment", "Steady Output Control"],
    color: "#d97706",
    symbol: "🛡️"
  },
  {
    id: "shakyo_fujin",
    name: "Finger Carving Seal",
    japaneseName: "指刻封印",
    rank: "C",
    type: "Sealing",
    creator: "Jiraiya",
    handSeals: "Concentrated fire chakra on index finger",
    description: "A simple, utility-based seal where the user concentrates heat chakra into their fingertip, allowing them to burn characters and messages permanently into any surface, including animal skin, stone, or iron.",
    abilities: ["Indestructible Heat Carving", "Sealed Message Transmission", "Emergency Log Writing"],
    color: "#eab308",
    symbol: "☝️"
  },
  {
    id: "fuka_hoin",
    name: "Fire Enclosing Seal (Fūka Hōin)",
    japaneseName: "封火法印",
    rank: "D",
    type: "Sealing",
    creator: "Leaf Jonin",
    handSeals: "Rat → Bird → Dog → Tiger → Boar",
    description: "A seal used to contain powerful or unquenchable external fires (such as the black flames of Amaterasu). The ninja writes the sealing scroll formula, performs the seals, and draws the fire directly into the paper scroll for containment.",
    abilities: ["Hostile Flame Containment", "Amaterasu Suppression", "Scroll Absorption"],
    color: "#3b82f6",
    symbol: "📜"
  },
  {
    id: "explosive_tag_seal",
    name: "Explosive Tag Activation",
    japaneseName: "起爆札法印",
    rank: "E",
    type: "Combat Seal",
    creator: "All Shinobi",
    handSeals: "Ram / Tiger",
    description: "The simple, universal seal used to remotely trigger or delay the detonation of an explosive tag. A staple technique of basic Academy combat training.",
    abilities: ["Delayed Detonation Control", "Remote Triggering", "Trap Synchronization"],
    color: "#a3a3a3",
    symbol: "💥"
  }
];
