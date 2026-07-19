import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VILLAGE_DATA } from "../data/villages";
import { Star, Shield, Landmark, Users, Map } from "lucide-react";

interface MapRegion {
  id: string;
  name: string;
  color: string;
  path: string;
  labelX: number;
  labelY: number;
  label: string;
  symbol: string;
}

// Coordinates mapped for a stylized 500x350 tactical map
const MAP_REGIONS: MapRegion[] = [
  {
    id: "iwa", // Hidden Stone
    name: "Hidden Stone (Iwagakure)",
    color: "#ff3e3e", // Red/Earth
    path: "M 30,50 L 220,50 L 250,150 L 160,190 L 30,150 Z",
    labelX: 110,
    labelY: 100,
    label: "LAND OF EARTH (IWA)",
    symbol: "🪨"
  },
  {
    id: "suna", // Hidden Sand
    name: "Hidden Sand (Sunagakure)",
    color: "#ffb347", // Sand/Gold
    path: "M 30,150 L 160,190 L 240,230 L 210,320 L 30,320 Z",
    labelX: 110,
    labelY: 260,
    label: "LAND OF WIND (SUNA)",
    symbol: "⏳"
  },
  {
    id: "konoha", // Hidden Leaf
    name: "Hidden Leaf (Konohagakure)",
    color: "#ff7a18", // Leaf/Orange
    path: "M 250,150 L 380,110 L 410,210 L 350,300 L 240,230 Z",
    labelX: 310,
    labelY: 200,
    label: "LAND OF FIRE (KONOHA)",
    symbol: "🍃"
  },
  {
    id: "kumo", // Hidden Cloud
    name: "Hidden Cloud (Kumogakure)",
    color: "#eab308", // Cloud/Yellow
    path: "M 220,50 L 450,50 L 450,140 L 380,110 Z",
    labelX: 340,
    labelY: 85,
    label: "LAND OF LIGHTNING (KUMO)",
    symbol: "☁️"
  },
  {
    id: "kiri", // Hidden Mist
    name: "Hidden Mist (Kirigakure)",
    color: "#3b82f6", // Water/Blue
    // Archipelago/islands in the ocean (represented as individual path chunks)
    path: "M 430,180 A 15,15 0 1,1 460,180 A 15,15 0 1,1 430,180 M 440,240 A 25,20 0 1,1 490,240 A 25,20 0 1,1 440,240 M 390,280 A 20,15 0 1,1 430,280 A 20,15 0 1,1 390,280",
    labelX: 440,
    labelY: 215,
    label: "LAND OF WATER (KIRI)",
    symbol: "🌫️"
  }
];

export default function Villages() {
  const [selectedId, setSelectedId] = useState<string>("konoha"); // Default to Konoha
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedVillage = VILLAGE_DATA.find((v) => v.id === selectedId) || VILLAGE_DATA[0];

  return (
    <section id="villages" className="py-12 px-6 md:px-12 bg-[#070707] relative overflow-hidden">
      {/* Decorative background grid patterns */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/2 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-red tracking-[0.3em] uppercase block mb-3">
            Great Nations
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            SHINOBI WORLD MAP
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-red to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            The Ninja World is dominated by the Five Great Shinobi Nations. Hover over the regions on the tactical map below to illuminate countries, and click on them to access classified village dossiers.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Stylized SVG Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[500px] aspect-[500/350] bg-[#111111]/40 border border-white/5 rounded-3xl relative overflow-hidden shadow-2xl p-4">
              
              {/* Tactical overlay indicators */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[9px] font-cinzel text-white/40 uppercase tracking-widest">
                <Map size={12} className="text-accent-red" /> TACTICAL GEOGRAPHIC GRID
              </div>

              {/* Water grid wave lines background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* SVG Interactive Map */}
              <svg
                viewBox="0 0 500 350"
                className="w-full h-full select-none"
              >
                {/* Region Map Paths */}
                {MAP_REGIONS.map((region) => {
                  const isSelected = selectedId === region.id;
                  const isHovered = hoveredId === region.id;

                  return (
                    <g key={region.id}>
                      {/* Glow filter backdrop under path */}
                      {(isHovered || isSelected) && (
                        <path
                          d={region.path}
                          fill="none"
                          stroke={region.color}
                          strokeWidth="8"
                          className="opacity-20 blur-sm transition-all duration-300 pointer-events-none"
                        />
                      )}

                      {/* Main Hoverable landmass path */}
                      <path
                        d={region.path}
                        onClick={() => setSelectedId(region.id)}
                        onMouseEnter={() => setHoveredId(region.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="transition-all duration-300 cursor-pointer"
                        style={{
                          fill: isSelected
                            ? `${region.color}25`
                            : isHovered
                            ? `${region.color}15`
                            : "rgba(255, 255, 255, 0.02)",
                          stroke: isSelected
                            ? region.color
                            : isHovered
                            ? `${region.color}80`
                            : "rgba(255, 255, 255, 0.08)",
                          strokeWidth: isSelected ? 2 : 1,
                        }}
                      />

                      {/* Hover / Selection glowing text labels */}
                      <text
                        x={region.labelX}
                        y={region.labelY}
                        onClick={() => setSelectedId(region.id)}
                        onMouseEnter={() => setHoveredId(region.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        textAnchor="middle"
                        className="font-cinzel font-black cursor-pointer pointer-events-auto transition-colors duration-300 select-none"
                        style={{
                          fontSize: "8px",
                          letterSpacing: "0.08em",
                          fill: isSelected
                            ? "#ffffff"
                            : isHovered
                            ? region.color
                            : "rgba(255, 255, 255, 0.35)",
                          textShadow: isSelected
                            ? `0 0 8px ${region.color}`
                            : "none",
                        }}
                      >
                        {region.symbol} {region.label.split(" (")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick helper legend */}
            <div className="mt-4 flex gap-4 text-[10px] font-cinzel text-white/30 tracking-widest uppercase">
              <span>🪨 Earth</span>
              <span>⏳ Wind</span>
              <span>🍃 Fire</span>
              <span>☁️ Lightning</span>
              <span>🌫️ Water</span>
            </div>
          </div>

          {/* Right Column - Detailed Dossier Showcase Panel (7 cols) */}
          <div className="lg:col-span-7">
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
                      {selectedVillage.symbol} classified intelligence
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-cinzel tracking-wider text-white mt-1">
                      {selectedVillage.name}
                    </h3>
                  </div>

                  <div className="bg-[#111111] border border-white/5 rounded-xl px-4 py-3 text-right shrink-0">
                    <span className="text-[10px] font-cinzel text-white/40 tracking-wider block uppercase">
                      Current {selectedVillage.leaderTitle}
                    </span>
                    <span className="text-sm font-semibold font-cinzel text-white">
                      {selectedVillage.currentLeader}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                  {/* History and details */}
                  <div className="flex flex-col justify-between h-full gap-6">
                    <div>
                      <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-3">
                        VILLAGE OVERVIEW
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed font-poppins">
                        {selectedVillage.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-2">
                        SPECIAL JUTSU NATURE
                      </h4>
                      <p className="text-[11px] bg-white/2 border border-white/5 px-4 py-2.5 rounded-xl font-poppins text-white/80 inline-block font-semibold">
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
                      <div className="flex justify-between items-center text-[10px] text-white/60 mb-2">
                        <span className="flex items-center gap-1.5 font-cinzel font-semibold uppercase tracking-wider">
                          <Shield size={12} className="text-accent-red" /> Military Power
                        </span>
                        <span>{selectedVillage.stats.militaryPower}%</span>
                      </div>
                      <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
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
                      <div className="flex justify-between items-center text-[10px] text-white/60 mb-2">
                        <span className="flex items-center gap-1.5 font-cinzel font-semibold uppercase tracking-wider">
                          <Landmark size={12} className="text-accent-red" /> Economic Index
                        </span>
                        <span>{selectedVillage.stats.economicStrength}%</span>
                      </div>
                      <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
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
                      <div className="flex justify-between items-center text-[10px] text-white/60 mb-2">
                        <span className="flex items-center gap-1.5 font-cinzel font-semibold uppercase tracking-wider">
                          <Users size={12} className="text-accent-red" /> Shinobi Population
                        </span>
                        <span>{selectedVillage.stats.ninjaPopulation}%</span>
                      </div>
                      <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
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
