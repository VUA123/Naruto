import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VILLAGE_DATA } from "../data/villages";
import { Star, Shield, Landmark, Users } from "lucide-react";

export default function Villages() {
  const [selectedId, setSelectedId] = useState<string>(VILLAGE_DATA[0].id);

  const selectedVillage = VILLAGE_DATA.find((v) => v.id === selectedId) || VILLAGE_DATA[0];

  return (
    <section id="villages" className="py-24 px-6 md:px-12 bg-[#070707] relative overflow-hidden">
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/2 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-red tracking-[0.3em] uppercase block mb-3">
            Great Nations
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            FIVE HIDDEN VILLAGES
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            Sovereign centers of military and economic power in the Shinobi World. Select a village below to read classified dossiers on its Kage leaders and physical power indexes.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Navigation List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {VILLAGE_DATA.map((village) => {
              const isSelected = village.id === selectedId;
              return (
                <button
                  key={village.id}
                  onClick={() => setSelectedId(village.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer flex justify-between items-center group ${
                    isSelected
                      ? "glass-panel-glow border-accent-red/30 shadow-[0_0_20px_rgba(214,40,40,0.05)]"
                      : "glass-panel border-white/5 hover:border-white/10 hover:bg-white/2"
                  }`}
                >
                  {/* Select Background Highlight */}
                  {isSelected && (
                    <motion.div
                      layoutId="villageActiveBg"
                      className="absolute inset-0 bg-gradient-to-r from-white/2 to-transparent pointer-events-none"
                    />
                  )}

                  <div className="z-10">
                    <span className="text-[10px] font-cinzel text-white/30 tracking-widest block uppercase mb-1">
                      {village.leaderTitle.toUpperCase()}: {village.currentLeader}
                    </span>
                    <h3 className="text-lg font-bold font-cinzel tracking-wider text-white group-hover:text-accent-red transition-colors">
                      {village.name.split(" (")[0]}
                    </h3>
                  </div>

                  {/* Icon representing Symbol */}
                  <span className="text-2xl z-10 group-hover:scale-110 transition-transform">
                    {village.symbol.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column - Detailed Showcase Panel (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVillage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel-glow rounded-3xl p-8 md:p-10 border border-white/5 relative"
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-white/5 pb-8 mb-8 gap-4">
                  <div>
                    <span className="text-[10px] font-cinzel tracking-[0.2em] text-accent-red uppercase font-semibold">
                      {selectedVillage.symbol} Dossier
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-cinzel tracking-wider text-white mt-1">
                      {selectedVillage.name}
                    </h3>
                  </div>

                  <div className="bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-right">
                    <span className="text-[10px] font-cinzel text-white/40 tracking-wider block uppercase">
                      Current {selectedVillage.leaderTitle}
                    </span>
                    <span className="text-sm font-semibold font-cinzel text-white">
                      {selectedVillage.currentLeader}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* History and details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-3">
                        VILLAGE OVERVIEW
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed font-poppins mb-6">
                        {selectedVillage.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-2">
                        SPECIAL JUTSU NATURE
                      </h4>
                      <p className="text-xs bg-white/2 border border-white/5 px-4 py-3 rounded-xl font-poppins text-white/80 inline-block">
                        ✦ {selectedVillage.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="bg-[#111111]/80 rounded-2xl border border-white/5 p-6 flex flex-col gap-6">
                    <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase flex items-center gap-1.5 border-b border-white/5 pb-3">
                      <Star size={14} className="text-accent-red" /> STRATEGIC INDEX
                    </h4>

                    {/* Military Power */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-white/60 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Shield size={12} className="text-accent-red" /> Military Power
                        </span>
                        <span>{selectedVillage.stats.militaryPower}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedVillage.stats.militaryPower}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-accent-red to-accent-orange rounded-full"
                        />
                      </div>
                    </div>

                    {/* Economic Strength */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-white/60 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Landmark size={12} className="text-accent-red" /> Economic Index
                        </span>
                        <span>{selectedVillage.stats.economicStrength}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedVillage.stats.economicStrength}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-accent-red to-accent-orange rounded-full"
                        />
                      </div>
                    </div>

                    {/* Ninja Population */}
                    <div>
                      <div className="flex justify-between items-center text-xs text-white/60 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Users size={12} className="text-accent-red" /> Shinobi Population
                        </span>
                        <span>{selectedVillage.stats.ninjaPopulation}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${selectedVillage.stats.ninjaPopulation}%` }}
                          transition={{ duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-accent-red to-accent-orange rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
