import { useState } from "react";
import { motion } from "framer-motion";
import { BIJUU_CODEX } from "../data/bijuu";

export default function BijuuCodex() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBijuu = BIJUU_CODEX[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % BIJUU_CODEX.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + BIJUU_CODEX.length) % BIJUU_CODEX.length);
  };

  return (
    <section id="bijuu" className="py-24 px-6 md:px-12 bg-[#111111] relative overflow-hidden">
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/2 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-purple tracking-[0.3em] uppercase block mb-3">
            Primordial Forces
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            TAILED BEASTS (BIJUU) CODEX
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-purple to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            Unleash the archives of the ancient chakra monsters. Traverse through the data files from the One-Tail up to the primordial Ten-Tails progenitor.
          </p>
        </div>

        {/* Selection Bar Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 max-w-4xl mx-auto">
          {BIJUU_CODEX.map((bijuu, idx) => (
            <button
              key={bijuu.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-cinzel tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "bg-gradient-to-r from-accent-purple to-accent-orange text-white font-bold"
                  : "bg-white/2 text-white/40 border border-white/5 hover:text-white hover:bg-white/5"
              }`}
            >
              {bijuu.name.split(" (")[1]?.replace(")", "") || "10-Tails"}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div className="glass-panel-glow rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden">
          {/* Subtle watermarked beast icon background */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full opacity-5 blur-2xl pointer-events-none" style={{ backgroundColor: activeBijuu.color }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Stylized Graphics/Representation (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* Spinning energy rings */}
              <div className="relative w-72 h-72 rounded-full border border-dashed border-white/5 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-dashed opacity-20"
                  style={{ borderColor: activeBijuu.color }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute inset-10 rounded-full border border-dashed opacity-30"
                  style={{ borderColor: activeBijuu.color }}
                />

                {/* Core Sphere */}
                <div
                  className="w-40 h-40 rounded-full flex flex-col items-center justify-center z-10 border border-white/10"
                  style={{
                    backgroundColor: `${activeBijuu.color}15`,
                    boxShadow: `0 0 40px ${activeBijuu.color}20`,
                  }}
                >
                  <span className="font-cinzel text-xs text-white/60 tracking-widest uppercase mb-1">
                    Tails Count
                  </span>
                  <span
                    className="font-cinzel text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    style={{ color: activeBijuu.color }}
                  >
                    {activeBijuu.tails}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  ❮
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  ❯
                </button>
              </div>
            </div>

            {/* Right Column: Dossier Information (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
                  <div>
                    <span className="text-[10px] font-cinzel text-accent-purple tracking-[0.25em] uppercase">
                      Class S-Rank Beast
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-cinzel tracking-wider text-white mt-1">
                      {activeBijuu.name}
                    </h3>
                  </div>

                  <span className="text-2xl font-cinzel opacity-40 select-none">
                    NO. 0{activeBijuu.tails}
                  </span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed font-poppins mb-6">
                  {activeBijuu.description}
                </p>

                <div className="mb-6">
                  <span className="text-[10px] font-cinzel text-white/40 tracking-widest block mb-1.5 uppercase">
                    Host Jinchuriki
                  </span>
                  <p className="text-xs text-white/90 font-semibold font-poppins">
                    ✦ {activeBijuu.jinchuriki}
                  </p>
                </div>

                {/* Unique Abilities */}
                <div className="mb-8">
                  <span className="text-[10px] font-cinzel text-white/40 tracking-widest block mb-2.5 uppercase">
                    Classified Abilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeBijuu.abilities.map((ability, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/2 border border-white/5 px-3 py-1 rounded-full text-white/80 font-poppins"
                      >
                        ⚡ {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Block */}
              <div className="bg-[#111111]/95 rounded-2xl border border-white/5 p-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Power Level", value: activeBijuu.stats.power, color: activeBijuu.color },
                  { label: "Chakra Reserve", value: activeBijuu.stats.chakra, color: activeBijuu.color },
                  { label: "Defense Shield", value: activeBijuu.stats.defense, color: activeBijuu.color },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[10px] font-cinzel text-white/40 tracking-wider block uppercase mb-2">
                      {stat.label}
                    </span>
                    <span className="text-xl font-bold font-cinzel text-white block mb-2">
                      {stat.value}
                    </span>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${stat.value}%`,
                          backgroundColor: stat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
