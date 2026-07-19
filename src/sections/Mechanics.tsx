import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Droplet, Zap, Wind, Mountain, Eye, Sparkles, Shield, Compass } from "lucide-react";

interface ElementData {
  id: string;
  name: string;
  japanese: string;
  icon: any;
  color: string;
  bgColor: string;
  strongAgainst: string;
  weakAgainst: string;
  description: string;
  notableUsers: string[];
}

const ELEMENT_DATA: ElementData[] = [
  {
    id: "fire",
    name: "Fire Release",
    japanese: "Katon",
    icon: Flame,
    color: "#ff3e3e",
    bgColor: "rgba(255, 62, 62, 0.1)",
    strongAgainst: "Wind",
    weakAgainst: "Water",
    description: "Offensive-focused chakra that burns and incinerates. Famed amongst the Uchiha Clan, it is molded within the stomach and released through the mouth as devastating fireballs.",
    notableUsers: ["Sasuke Uchiha", "Itachi Uchiha", "Madara Uchiha", "Jiraiya"]
  },
  {
    id: "wind",
    name: "Wind Release",
    japanese: "Fūton",
    icon: Wind,
    color: "#4ade80",
    bgColor: "rgba(74, 222, 128, 0.1)",
    strongAgainst: "Lightning",
    weakAgainst: "Fire",
    description: "The rarest of the five basic elements. It is sharp and cutting, perfect for close-to-mid-range weapons combat or creating blade-like vortexes of wind. Ideal for slicing through defenses.",
    notableUsers: ["Naruto Uzumaki", "Temari", "Asuma Sarutobi", "Danzo Shimura"]
  },
  {
    id: "lightning",
    name: "Lightning Release",
    japanese: "Raiton",
    icon: Zap,
    color: "#eab308",
    bgColor: "rgba(234, 179, 8, 0.1)",
    strongAgainst: "Earth",
    weakAgainst: "Wind",
    description: "Extremely fast and piercing chakra. It is used to accelerate nerve signals for incredible speed, or focused into weapons to pierce any solid barrier. Perfect for high-penetration assassin techniques.",
    notableUsers: ["Sasuke Uchiha", "Kakashi Hatake", "Fourth Raikage", "Darui"]
  },
  {
    id: "earth",
    name: "Earth Release",
    japanese: "Doton",
    icon: Mountain,
    color: "#a78bfa",
    bgColor: "rgba(167, 139, 250, 0.1)",
    strongAgainst: "Water",
    weakAgainst: "Lightning",
    description: "Highly defensive and solid chakra. It allows the user to manipulate the ground, create massive defensive stone walls, or alter the weight and hardness of objects and their own body.",
    notableUsers: ["Ōnoki", "Kurotsuchi", "Kakuzu", "Hashirama Senju"]
  },
  {
    id: "water",
    name: "Water Release",
    japanese: "Suiton",
    icon: Droplet,
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.1)",
    strongAgainst: "Fire",
    weakAgainst: "Earth",
    description: "Highly versatile and adaptive chakra. It can be used to form defensive liquid walls, powerful crushing tidal waves, or high-pressure water lasers capable of cutting through solid steel.",
    notableUsers: ["Kisame Hoshigaki", "Tobirama Senju", "Mei Terumi", "Zabuza Momochi"]
  }
];

export default function Mechanics() {
  const [selectedElement, setSelectedElement] = useState<ElementData>(ELEMENT_DATA[0]);

  return (
    <section className="py-12 px-6 md:px-12 bg-[#070707] min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-orange tracking-[0.3em] uppercase block mb-3">
            Shinobi Fundamentals
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            CHAKRA & JUTSU MECHANICS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            For those new to the world of Naruto, this guide explains the mystical physics, energy systems, and disciplines that every shinobi must master.
          </p>
        </div>

        {/* Part 1: What is Chakra? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-cinzel text-accent-gold tracking-widest uppercase block">
              01 ➔ The Source of Power
            </span>
            <h3 className="text-3xl font-bold font-cinzel text-white tracking-wider">
              WHAT IS CHAKRA?
            </h3>
            <p className="text-sm text-white/70 font-poppins leading-relaxed">
              Chakra is the foundational energy of the Naruto universe. In simple terms, it is the magical fuel that ninja burn to perform supernatural feats.
            </p>
            <p className="text-sm text-white/60 font-poppins leading-relaxed">
              To perform a technique (Jutsu), a shinobi must combine and mold two distinct energies inside their body:
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white/2 rounded-xl p-4 border border-white/5 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange font-bold font-cinzel text-sm shrink-0">
                  P
                </div>
                <div>
                  <h4 className="text-xs font-cinzel text-white font-bold tracking-wider mb-1 uppercase">
                    Physical Energy (Body)
                  </h4>
                  <p className="text-xs text-white/50 font-poppins">
                    Collected from each of the trillions of cells that make up the human body, built through physical exercise and stamina.
                  </p>
                </div>
              </div>

              <div className="bg-white/2 rounded-xl p-4 border border-white/5 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold font-bold font-cinzel text-sm shrink-0">
                  S
                </div>
                <div>
                  <h4 className="text-xs font-cinzel text-white font-bold tracking-wider mb-1 uppercase">
                    Spiritual Energy (Mind)
                  </h4>
                  <p className="text-xs text-white/50 font-poppins">
                    Derived from the soul, mind, and mental training, strengthened through experience, study, and meditation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chakra diagram */}
          <div className="lg:col-span-7 flex justify-center relative">
            <div className="w-full max-w-md h-96 glass-panel rounded-2xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden p-8">
              {/* Spinning background circles */}
              <div className="absolute w-72 h-72 rounded-full border border-dashed border-accent-orange/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-48 h-48 rounded-full border border-dashed border-accent-gold/10 animate-[spin_10s_linear_infinite_reverse]" />

              <div className="flex gap-4 items-center z-10">
                <div className="text-center p-4 bg-accent-orange/10 border border-accent-orange/20 rounded-xl w-28">
                  <span className="font-cinzel text-xs text-white tracking-widest block font-bold mb-1">BODY</span>
                  <span className="text-[10px] font-poppins text-white/50 block">Physical</span>
                </div>
                <span className="text-xl font-bold font-cinzel text-white/40">+</span>
                <div className="text-center p-4 bg-accent-gold/10 border border-accent-gold/20 rounded-xl w-28">
                  <span className="font-cinzel text-xs text-white tracking-widest block font-bold mb-1">MIND</span>
                  <span className="text-[10px] font-poppins text-white/50 block">Spiritual</span>
                </div>
              </div>

              <span className="text-2xl font-bold font-cinzel text-white/30 my-4">➔</span>

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px rgba(255,122,24,0.1)",
                    "0 0 40px rgba(255,122,24,0.3)",
                    "0 0 20px rgba(255,122,24,0.1)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full bg-gradient-to-tr from-accent-orange/30 via-accent-gold/20 to-transparent border border-accent-orange/40 flex flex-col items-center justify-center z-10"
              >
                <Compass className="text-accent-orange animate-spin-slow mb-1" size={24} />
                <span className="font-cinzel text-base font-black text-white tracking-widest">CHAKRA</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Part 2: The Three Pillars of Combat */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-cinzel text-accent-gold tracking-widest uppercase block mb-2">
              02 ➔ Classifications of Combat
            </span>
            <h3 className="text-3xl font-bold font-cinzel text-white tracking-wider">
              THE THREE JUTSU TYPES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ninjutsu */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange mb-6">
                <Sparkles size={20} />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white tracking-wider mb-3">
                NINJUTSU
              </h4>
              <p className="text-xs text-white/50 font-poppins leading-relaxed mb-4">
                The magical art of using chakra to alter physics or create substances (like fire or water). It includes elemental transformations, reanimation, shadow clones, and teleportation.
              </p>
              <span className="text-[10px] font-cinzel text-accent-gold tracking-widest font-semibold">
                Examples: Rasengan, Fireball Jutsu, Chidori
              </span>
            </div>

            {/* Taijutsu */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold mb-6">
                <Shield size={20} />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white tracking-wider mb-3">
                TAIJUTSU
              </h4>
              <p className="text-xs text-white/50 font-poppins leading-relaxed mb-4">
                Physical martial arts. While it doesn't usually create magic, elite taijutsu users can mold chakra to achieve superhuman strength, open the Eight Inner Gates, and strike with blinding speed.
              </p>
              <span className="text-[10px] font-cinzel text-accent-gold tracking-widest font-semibold">
                Examples: Shadow of the Leaf, Night Guy
              </span>
            </div>

            {/* Genjutsu */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Eye size={20} />
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white tracking-wider mb-3">
                GENJUTSU
              </h4>
              <p className="text-xs text-white/50 font-poppins leading-relaxed mb-4">
                The art of illusion. It intercepts the opponent's nervous system to manipulate their senses. Used to interrogate, paralyze, or mentally torture enemies by trapping them inside illusions.
              </p>
              <span className="text-[10px] font-cinzel text-accent-gold tracking-widest font-semibold">
                Examples: Tsukuyomi, Infinite Tsukuyomi
              </span>
            </div>
          </div>
        </div>

        {/* Part 3: Interactive Elemental Wheel */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <span className="text-xs font-cinzel text-accent-gold tracking-widest uppercase block mb-2">
              03 ➔ The Elemental Cycle
            </span>
            <h3 className="text-3xl font-bold font-cinzel text-white tracking-wider">
              FIVE CHAKRA NATURES
            </h3>
            <p className="text-xs text-white/40 font-poppins max-w-xl mx-auto mt-2 leading-relaxed">
              Shinobi can transform the nature of their chakra into elements. The five basic elements operate in a rock-paper-scissors-like cycle of strengths and weaknesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111111]/30 p-8 rounded-3xl border border-white/5">
            {/* Elements Selector / Ring */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {ELEMENT_DATA.map((elem) => {
                const isSelected = selectedElement.id === elem.id;
                const IconComp = elem.icon;
                return (
                  <motion.button
                    key={elem.id}
                    whileHover={{ x: 4 }}
                    onClick={() => setSelectedElement(elem)}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? "border-white/20 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                        : "border-transparent hover:bg-white/2"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: elem.bgColor, color: elem.color }}
                      >
                        <IconComp size={20} />
                      </div>
                      <div>
                        <span className="font-cinzel text-sm font-bold text-white tracking-wider block">
                          {elem.name}
                        </span>
                        <span className="text-[9px] font-cinzel text-white/30 tracking-widest block">
                          {elem.japanese.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-cinzel tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: isSelected ? `${elem.color}20` : "transparent",
                        color: isSelected ? elem.color : "rgba(255,255,255,0.2)",
                      }}
                    >
                      {isSelected ? "ACTIVE" : "SELECT"}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Elements Description Panel */}
            <div className="lg:col-span-7 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedElement.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel-glow h-full rounded-2xl p-8 border border-white/5 flex flex-col justify-between"
                  style={{
                    boxShadow: `0 0 30px ${selectedElement.color}05`,
                  }}
                >
                  <div>
                    {/* Element Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                        style={{
                          backgroundColor: selectedElement.bgColor,
                          color: selectedElement.color,
                        }}
                      >
                        <selectedElement.icon size={28} />
                      </div>
                      <div>
                        <span
                          className="text-[10px] font-cinzel tracking-[0.2em] font-bold block"
                          style={{ color: selectedElement.color }}
                        >
                          {selectedElement.japanese.toUpperCase()}
                        </span>
                        <h4 className="font-cinzel text-2xl font-black text-white tracking-wider">
                          {selectedElement.name}
                        </h4>
                      </div>
                    </div>

                    {/* Element Strengths / Weaknesses */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/2 rounded-xl p-3 border border-white/5">
                        <span className="text-[9px] font-cinzel text-green-400 tracking-wider block uppercase mb-1">
                          ✔ Strong Against
                        </span>
                        <span className="font-cinzel text-xs text-white font-bold tracking-wider">
                          {selectedElement.strongAgainst} Release
                        </span>
                      </div>
                      <div className="bg-white/2 rounded-xl p-3 border border-white/5">
                        <span className="text-[9px] font-cinzel text-red-400 tracking-wider block uppercase mb-1">
                          ✖ Weak Against
                        </span>
                        <span className="font-cinzel text-xs text-white font-bold tracking-wider">
                          {selectedElement.weakAgainst} Release
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-poppins leading-relaxed mb-6">
                      {selectedElement.description}
                    </p>
                  </div>

                  {/* Notable Members */}
                  <div className="border-t border-white/5 pt-6">
                    <span className="text-[10px] font-cinzel text-white/40 tracking-widest block mb-3 uppercase">
                      Notable Masters
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedElement.notableUsers.map((user) => (
                        <span
                          key={user}
                          className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-white/80 font-poppins font-medium"
                        >
                          {user}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
