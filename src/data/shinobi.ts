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
  {
    id: "kisame",
    name: "Kisame Hoshigaki",
    clan: "Hoshigaki",
    village: "Hidden Mist (Kirigakure) / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "Known as the 'Monster of the Hidden Mist'. Wields the sentient sword Samehada and possesses chakra levels comparable to a Tailed Beast.",
    specialty: "Water Style, Samehada (Chakra Drain), Shark Dance Jutsu",
    color: "#6d28d9",
    stats: { ninjutsu: 90, taijutsu: 95, genjutsu: 50, intelligence: 70, stamina: 100 }
  },
  {
    id: "deidara",
    name: "Deidara",
    clan: "Unknown",
    village: "Hidden Stone (Iwagakure) / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "An explosive artist who views his destructive jutsu as fleeting masterpieces. Former pupil of the Third Tsuchikage.",
    specialty: "Explosive Clay (C1 to C4), C0 (Ultimate Art), Earth Style",
    color: "#ffb347",
    stats: { ninjutsu: 95, taijutsu: 75, genjutsu: 70, intelligence: 90, stamina: 80 }
  },
  {
    id: "sasori",
    name: "Sasori",
    clan: "Unknown",
    village: "Hidden Sand (Sunagakure) / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "A genius puppeteer known as 'Sasori of the Red Sand'. He converted his own body into a puppet to achieve eternal youth.",
    specialty: "Puppet Mastery, Lethal Poisons, Iron Sand, Human Puppets",
    color: "#d62828",
    stats: { ninjutsu: 92, taijutsu: 80, genjutsu: 75, intelligence: 95, stamina: 95 }
  },
  {
    id: "hidan",
    name: "Hidan",
    clan: "Unknown",
    village: "Hidden Steam (Yugakure) / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "A foul-mouthed, immortal zealot of the Jashin faith. He defeats opponents by linking their bodies and inflicting fatal wounds on himself.",
    specialty: "Immortality, Curse Technique: Death Controlling Possessed Blood",
    color: "#d62828",
    stats: { ninjutsu: 60, taijutsu: 90, genjutsu: 40, intelligence: 60, stamina: 100 }
  },
  {
    id: "kakuzu",
    name: "Kakuzu",
    clan: "Unknown",
    village: "Hidden Waterfall (Takigakure) / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "A greedy bounty hunter holding five hearts, granting him near-immortality and mastery over all five basic elemental natures.",
    specialty: "Earth Grudge Fear, Five Elemental Masks, Hardening Jutsu",
    color: "#ffb347",
    stats: { ninjutsu: 96, taijutsu: 85, genjutsu: 60, intelligence: 85, stamina: 95 }
  },
  {
    id: "konan",
    name: "Konan",
    clan: "Unknown",
    village: "Hidden Rain (Amegakure) / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "The 'Angel' of the Hidden Rain and a founding member of the Akatsuki. She fights using incredibly versatile and explosive paper jutsu.",
    specialty: "Dance of the Shikigami, Paper Person of God Technique (600 Billion Explosives)",
    color: "#6d28d9",
    stats: { ninjutsu: 90, taijutsu: 70, genjutsu: 80, intelligence: 92, stamina: 85 }
  },
  {
    id: "zetsu",
    name: "Zetsu",
    clan: "Unknown",
    village: "Unknown / Akatsuki",
    rank: "S-Class Missing-Nin / Akatsuki",
    description: "A bizarre, dual-personality entity acting as the Akatsuki's ultimate spy, capable of merging with the earth to travel instantly.",
    specialty: "Mayfly (Underground Travel), Spore Technique, Chakra Absorption",
    color: "#111111",
    stats: { ninjutsu: 85, taijutsu: 50, genjutsu: 95, intelligence: 98, stamina: 90 }
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
  },
  // Leaf Jōnin
  {
    id: "guy",
    name: "Might Guy",
    clan: "Unknown",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Taijutsu Master",
    description: "The Leaf's Sublime Green Beast. A taijutsu master who can open the Eight Gates, possessing physical power exceeding all Kages.",
    specialty: "Eight Inner Gates, Night Guy, Morning Peacock, Daytime Tiger",
    color: "#d62828",
    stats: { ninjutsu: 5, taijutsu: 100, genjutsu: 5, intelligence: 68, stamina: 98 }
  },
  {
    id: "shikamaru",
    name: "Shikamaru Nara",
    clan: "Nara",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Advisor",
    description: "An incredibly lazy but peerless strategic genius with an IQ over 200, serving as the main advisor to the Hokage.",
    specialty: "Shadow Possession Jutsu, Shadow Strangle, Elite Strategy",
    color: "#ffb347",
    stats: { ninjutsu: 80, taijutsu: 70, genjutsu: 75, intelligence: 100, stamina: 65 }
  },
  {
    id: "neji",
    name: "Neji Hyuga",
    clan: "Hyūga",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Branch Prodigy",
    description: "A genius of the Hyuga clan branch house who broke free from fate, mastering the Gentle Fist and Byakugan visual prowess.",
    specialty: "Byakugan, Eight Trigrams Sixty-Four Palms, Heavenly Rotation",
    color: "#6d28d9",
    stats: { ninjutsu: 84, taijutsu: 95, genjutsu: 60, intelligence: 90, stamina: 80 }
  },
  {
    id: "asuma",
    name: "Asuma Sarutobi",
    clan: "Sarutobi",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Twelve Guardian",
    description: "The son of the Third Hokage and former member of the Guardian Shinobi Twelve, specializing in trench knife wind-infused close combat.",
    specialty: "Wind Style: Flying Swallow, Fire Style: Burning Ash",
    color: "#ffb347",
    stats: { ninjutsu: 88, taijutsu: 88, genjutsu: 70, intelligence: 85, stamina: 82 }
  },
  {
    id: "kurenai",
    name: "Kurenai Yūhi",
    clan: "Unknown",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Jonin / Genjutsu Expert",
    description: "One of the Leaf's premier Genjutsu specialists, famed for her illusionary bindings representing vines and cherry blossoms.",
    specialty: "Demonic Illusion: Tree Binding Death, Sensory Tracking",
    color: "#ffb347",
    stats: { ninjutsu: 70, taijutsu: 65, genjutsu: 98, intelligence: 88, stamina: 70 }
  },
  // Leaf Chūnin & Genin
  {
    id: "hinata",
    name: "Hinata Hyūga",
    clan: "Hyūga",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Gentle Princess",
    description: "The heiress of the Hyūga Clan who overcame her shyness and self-doubt, drawing inspiration from Naruto to become a strong ninja.",
    specialty: "Byakugan, Gentle Step Twin Lion Fists, Eight Trigrams Vacuum Palm",
    color: "#6d28d9",
    stats: { ninjutsu: 72, taijutsu: 88, genjutsu: 55, intelligence: 80, stamina: 78 }
  },
  {
    id: "lee",
    name: "Rock Lee",
    clan: "Unknown",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Taijutsu Prodigy",
    description: "A ninja who cannot use Ninjutsu or Genjutsu, but trained tirelessly under Might Guy to become a legendary taijutsu specialist.",
    specialty: "Primary Lotus, Hidden Lotus, Drunken Fist, Five Gates",
    color: "#d62828",
    stats: { ninjutsu: 0, taijutsu: 94, genjutsu: 0, intelligence: 65, stamina: 95 }
  },
  {
    id: "kiba",
    name: "Kiba Inuzuka",
    clan: "Inuzuka",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Beast-Mimic",
    description: "A loud and hot-headed shinobi who fights alongside his loyal ninja dog Akamaru using ferocious feral beast-mimicry.",
    specialty: "Fang Over Fang, Beast Human Clone, Giant Two-Headed Wolf",
    color: "#ff7a18",
    stats: { ninjutsu: 76, taijutsu: 82, genjutsu: 30, intelligence: 60, stamina: 85 }
  },
  {
    id: "shino",
    name: "Shino Aburame",
    clan: "Aburame",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Insect Host",
    description: "An incredibly calm and analytical shinobi who hosts the parasitic Kikaichu insects within his body for combat and scouting.",
    specialty: "Secret Insect Bog, Insect Jamming, Chakra Drain Swarms",
    color: "#ffb347",
    stats: { ninjutsu: 84, taijutsu: 70, genjutsu: 70, intelligence: 92, stamina: 80 }
  },
  {
    id: "choji",
    name: "Chōji Akimichi",
    clan: "Akimichi",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Giant Guard",
    description: "A kind-hearted shinobi who converts his calories into physical size and destructive combat energy, protecting his teammates.",
    specialty: "Human Bullet Tank, Partial Multi-Size, Butterfly Chakra Mode",
    color: "#ff7a18",
    stats: { ninjutsu: 78, taijutsu: 86, genjutsu: 30, intelligence: 65, stamina: 92 }
  },
  {
    id: "ino",
    name: "Ino Yamanaka",
    clan: "Yamanaka",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Sensory Leader",
    description: "A sensory and mind-transmission specialist who manages communications for the Leaf, possessing great floral intelligence.",
    specialty: "Mind Transfer Jutsu, Sensory Communication Link, Medical Ninjutsu",
    color: "#6d28d9",
    stats: { ninjutsu: 75, taijutsu: 68, genjutsu: 80, intelligence: 86, stamina: 70 }
  },
  {
    id: "tenten",
    name: "Tenten",
    clan: "Unknown",
    village: "Hidden Leaf (Konohagakure)",
    rank: "Chunin / Tool Master",
    description: "A skilled weapons specialist who seals hundreds of diverse ninja tools in scrolls, summoning them in rapid succession.",
    specialty: "Twin Rising Dragons, Summoning Scrolls, Weapon Arsenal",
    color: "#ffb347",
    stats: { ninjutsu: 74, taijutsu: 80, genjutsu: 50, intelligence: 78, stamina: 75 }
  },
  // Sand Shinobi
  {
    id: "kankuro",
    name: "Kankuro",
    clan: "Kazekage Clan",
    village: "Hidden Sand (Sunagakure)",
    rank: "Jonin / Puppet Master",
    description: "An elite puppet master and brother to Gaara. He commands diverse lethal puppets including Crow, Black Ant, and Salamander.",
    specialty: "Puppet Show, Poison Fog, Iron Maiden Execution",
    color: "#ffb347",
    stats: { ninjutsu: 82, taijutsu: 74, genjutsu: 55, intelligence: 84, stamina: 80 }
  },
  {
    id: "temari",
    name: "Temari",
    clan: "Kazekage Clan",
    village: "Hidden Sand (Sunagakure)",
    rank: "Jonin / Wind Master",
    description: "A sharp and analytical wind specialist who wields a massive Iron Fan to create catastrophic razor-sharp tornadoes.",
    specialty: "Wind Style: Sea Dragon, Giant Summoning: Kamatari",
    color: "#ffb347",
    stats: { ninjutsu: 86, taijutsu: 76, genjutsu: 60, intelligence: 88, stamina: 82 }
  },
  {
    id: "baki",
    name: "Baki",
    clan: "Unknown",
    village: "Hidden Sand (Sunagakure)",
    rank: "Jonin / Instructor",
    description: "A hardened veteran of the Sand and direct instructor to Gaara's team, executing enemies with invisible wind blades.",
    specialty: "Wind Style: Blade of Wind, Sensory Tracking",
    color: "#ffb347",
    stats: { ninjutsu: 80, taijutsu: 82, genjutsu: 50, intelligence: 82, stamina: 80 }
  },
  {
    id: "chiyo",
    name: "Lady Chiyo",
    clan: "Unknown",
    village: "Hidden Sand (Sunagakure)",
    rank: "Elder / Legendary Puppeteer",
    description: "A highly respected elder puppeteer and poison master who sealed Shukaku within Gaara and fought Sasori using Chikamatsu puppets.",
    specialty: "Ten Puppets of Chikamatsu, One's Own Life Reincarnation",
    color: "#ffb347",
    stats: { ninjutsu: 92, taijutsu: 80, genjutsu: 85, intelligence: 95, stamina: 60 }
  },
  // Cloud Shinobi
  {
    id: "darui",
    name: "Darui",
    clan: "Unknown",
    village: "Hidden Cloud (Kumogakure)",
    rank: "Jonin / Future Raikage",
    description: "The right-hand man to the Fourth Raikage who wields the unique Storm Release Kekkei Genkai and black lightning jutsu.",
    specialty: "Storm Style: Laser Circus, Black Lightning Panther",
    color: "#ffb347",
    stats: { ninjutsu: 90, taijutsu: 88, genjutsu: 65, intelligence: 88, stamina: 86 }
  },
  {
    id: "cee",
    name: "Cee",
    clan: "Unknown",
    village: "Hidden Cloud (Kumogakure)",
    rank: "Jonin / Sensory-Medical",
    description: "An elite companion of the Raikage, specializing in sensory tracking, medical ninjutsu, and blinding lightning-based genjutsu.",
    specialty: "Lightning Style: Flash Pillar, Medical & Sensory Link",
    color: "#ffb347",
    stats: { ninjutsu: 78, taijutsu: 70, genjutsu: 82, intelligence: 86, stamina: 74 }
  },
  {
    id: "omoi",
    name: "Omoi",
    clan: "Unknown",
    village: "Hidden Cloud (Kumogakure)",
    rank: "Chunin / Swordsman",
    description: "An anxious, overthinking but incredibly skilled sword specialist trained under Killer B, executing rapid cloud-style slashes.",
    specialty: "Cloud-Style Kenjutsu: Crescent Moon Slash, Shadow Clones",
    color: "#ff7a18",
    stats: { ninjutsu: 74, taijutsu: 84, genjutsu: 40, intelligence: 80, stamina: 80 }
  },
  {
    id: "karui",
    name: "Karui",
    clan: "Unknown",
    village: "Hidden Cloud (Kumogakure)",
    rank: "Chunin / Swordstress",
    description: "A hot-tempered, passionate swordstress from the Cloud, wielding a long sword to deliver devastating physical blows.",
    specialty: "Cloud-Style Kenjutsu: Flame Slash, Heavy Physical Strikes",
    color: "#ff7a18",
    stats: { ninjutsu: 70, taijutsu: 85, genjutsu: 30, intelligence: 68, stamina: 82 }
  },
  {
    id: "killerb",
    name: "Killer B",
    clan: "Kazekage Clan", // Used loosely for tracking
    village: "Hidden Cloud (Kumogakure)",
    rank: "Jonin / Eight-Tails Jinchuriki",
    description: "The adoptive brother of the Raikage and host to the Eight-Tails Gyuki. He is a rap-loving shinobi who fights using seven swords.",
    specialty: "Acrobat Seven-Swords Dance, Lariat, Tailed Beast Bomb",
    color: "#ff7a18",
    stats: { ninjutsu: 94, taijutsu: 98, genjutsu: 65, intelligence: 78, stamina: 100 }
  },
  // Mist Shinobi
  {
    id: "zabuza",
    name: "Zabuza Momochi",
    clan: "Unknown",
    village: "Hidden Mist (Kirigakure) / Rogue",
    rank: "Jonin / Demon of Mist",
    description: "One of the Seven Ninja Swordsmen of the Mist. Known as the 'Demon of the Mist' for his brutal silent-killing technique.",
    specialty: "Silent Killing, Kubikiribocho (Executioner Blade), Water Dragon",
    color: "#6d28d9",
    stats: { ninjutsu: 85, taijutsu: 90, genjutsu: 60, intelligence: 82, stamina: 84 }
  },
  {
    id: "haku",
    name: "Haku",
    clan: "Yuki",
    village: "Hidden Mist (Kirigakure) / Rogue",
    rank: "Genin / Ice Specialist",
    description: "Zabuza's loyal companion possessing the rare Ice Release Kekkei Genkai, allowing him to travel through reflective ice mirrors.",
    specialty: "Demonic Flashing Ice Crystals, Thousand Flying Water Needles",
    color: "#6d28d9",
    stats: { ninjutsu: 86, taijutsu: 80, genjutsu: 70, intelligence: 85, stamina: 70 }
  },
  {
    id: "chojuro",
    name: "Chōjūrō",
    clan: "Unknown",
    village: "Hidden Mist (Kirigakure)",
    rank: "Jonin / Future Mizukage",
    description: "A shy but incredibly talented swordsman of the Mist, wielding the twin-handled hammer sword Hiramekarei.",
    specialty: "Hiramekarei Unleashed (Chakra Bones), Water Style",
    color: "#6d28d9",
    stats: { ninjutsu: 80, taijutsu: 86, genjutsu: 50, intelligence: 76, stamina: 82 }
  },
  {
    id: "suigetsu",
    name: "Suigetsu Hōzuki",
    clan: "Hozuki",
    village: "Hidden Mist (Kirigakure) / Rogue",
    rank: "Chunin / Water Mutant",
    description: "A member of the Hozuki clan who can liquefy his body at will, wielding Zabuza's massive Executioner Blade.",
    specialty: "Hydrification Technique, Executioner Blade Slash, Water Gun",
    color: "#6d28d9",
    stats: { ninjutsu: 82, taijutsu: 84, genjutsu: 45, intelligence: 72, stamina: 90 }
  },
  // Stone Shinobi
  {
    id: "kurotsuchi",
    name: "Kurotsuchi",
    clan: "Kamizuru",
    village: "Hidden Stone (Iwagakure)",
    rank: "Jonin / Future Tsuchikage",
    description: "The granddaughter of the Third Tsuchikage possessing the rare Lava Style Kekkei Genkai, specializing in volcanic quicklime.",
    specialty: "Lava Style: Quicklime Congealing, Earth Style Golem",
    color: "#d62828",
    stats: { ninjutsu: 88, taijutsu: 82, genjutsu: 60, intelligence: 84, stamina: 82 }
  },
  {
    id: "akatsuchi",
    name: "Akatsuchi",
    clan: "Unknown",
    village: "Hidden Stone (Iwagakure)",
    rank: "Jonin / Stone Guard",
    description: "An immensely large, jovial, and powerful guardian who serves as the shield to the Third Tsuchikage, summoning rock golems.",
    specialty: "Earth Style: Golem Creation, Fist Rock Technique",
    color: "#ffb347",
    stats: { ninjutsu: 80, taijutsu: 84, genjutsu: 40, intelligence: 70, stamina: 94 }
  }
];
