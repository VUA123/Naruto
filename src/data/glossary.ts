export interface GlossaryTerm {
  term: string;
  definition: string;
  category: "General" | "Jutsu" | "Ranks" | "World";
}

export const GLOSSARY_DATA: GlossaryTerm[] = [
  {
    term: "Chakra",
    definition: "The essential life energy used by shinobi to perform jutsu. It is created by molding together physical energy (from body cells) and spiritual energy (from training and experience).",
    category: "General"
  },
  {
    term: "Ninjutsu",
    definition: "Techniques that manipulate chakra to perform supernatural physical feats, such as exhaling fire, manipulating elements, or creating physical shadow clones.",
    category: "Jutsu"
  },
  {
    term: "Taijutsu",
    definition: "Hand-to-hand martial arts and physical combat techniques. Unlike ninjutsu and genjutsu, taijutsu rarely requires molding chakra, relying instead on physical stamina, strength, and speed.",
    category: "Jutsu"
  },
  {
    term: "Genjutsu",
    definition: "Illusionary techniques that target the opponent's sensory systems. By flowing chakra into the target's brain, a genjutsu caster can create powerful mental hallucinations, trap enemies in place, or inflict mental pain.",
    category: "Jutsu"
  },
  {
    term: "Kage",
    definition: "The title given to the leaders of the hidden villages of the Five Great Shinobi Nations. They are typically the strongest and most strategically brilliant ninja in their country. Examples include Hokage (Leaf) and Kazekage (Sand).",
    category: "Ranks"
  },
  {
    term: "Hokage",
    definition: "The supreme leader and protector of the Hidden Leaf Village (Konohagakure). The title represents the 'Fire Shadow' and is held by legendary figures like Hashirama Senju and Naruto Uzumaki.",
    category: "Ranks"
  },
  {
    term: "Jinchūriki",
    definition: "An individual who has a Tailed Beast (Bijū) sealed inside their body. They possess colossal chakra reserves but are often feared and isolated by their villages before proving their worth (e.g., Naruto Uzumaki, Gaara).",
    category: "General"
  },
  {
    term: "Bijū (Tailed Beast)",
    definition: "Nine giant, primordial entities made of pure, concentrated chakra. They are classified by their number of tails (1 to 9), with the Nine-Tails (Kurama) being the most powerful. Originally weapons of war, they are sentient, powerful creatures.",
    category: "World"
  },
  {
    term: "Kekkei Genkai",
    definition: "A genetic anomaly passed down through specific shinobi clans. It allows members to utilize unique abilities, such as ocular jutsu (Sharingan) or combining two basic elements to create a new one (e.g., Lava or Ice Style).",
    category: "Jutsu"
  },
  {
    term: "Dōjutsu",
    definition: "Ocular jutsu (eye techniques) that are typically inherited as Kekkei Genkai. Prominent examples include the Sharingan (Uchiha), Byakugan (Hyūga), and the god-like Rinnegan.",
    category: "Jutsu"
  },
  {
    term: "Genin",
    definition: "The lowest rank of shinobi, achieved after graduating from the Ninja Academy. They are placed in four-member squads (three Genin and one Jonin leader) to perform low-risk D-rank and C-rank missions.",
    category: "Ranks"
  },
  {
    term: "Chūnin",
    definition: "Middle-rank ninja who have qualified as squad leaders, demonstrating tactical intelligence, maturity, and advanced combat ability through the rigorous Chūnin Exams.",
    category: "Ranks"
  },
  {
    term: "Jōnin",
    definition: "High-rank, elite ninja who possess extreme combat prowess, elemental mastery, and leadership skills. They perform dangerous A-rank and S-rank missions and act as mentors to Genin squads.",
    category: "Ranks"
  },
  {
    term: "Sannin",
    definition: "The 'Legendary Three' students of the Third Hokage—Jiraiya, Tsunade, and Orochimaru. They achieved legendary status during the Second Great Ninja War and are among the world's most powerful ninja.",
    category: "Ranks"
  },
  {
    term: "Akatsuki",
    definition: "A rogue, S-class criminal organization composed of powerful missing-nin from various villages. Easily recognized by their black cloaks with red clouds, their ultimate goal is to capture all Tailed Beasts.",
    category: "World"
  },
  {
    term: "Missing-Nin",
    definition: "A rogue shinobi who has abandoned their hidden village, often committing crimes or seeking absolute freedom. They are branded as traitors and hunted down by specialized Hunter-nin squads.",
    category: "Ranks"
  },
  {
    term: "Senjutsu (Sage Mode)",
    definition: "An advanced combat art that involves absorbing natural energy from the environment and blending it with physical and spiritual chakra. It grants massive physical enhancements, sensory range, and augmented jutsu.",
    category: "Jutsu"
  },
  {
    term: "Kekkei Tōta",
    definition: "An advanced, ultra-rare form of Kekkei Genkai that allows a shinobi to fuse *three* basic elements instead of two. The only known example is the Dust Release (Ōnoki), which combines Fire, Earth, and Wind.",
    category: "Jutsu"
  }
];
