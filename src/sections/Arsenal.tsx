import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SUMMONINGS, NINJA_TOOLS, SEALS } from "../data/arsenal";
import { Search, ShieldAlert, User, Award, Compass, Key } from "lucide-react";

export default function Arsenal() {
  const [activeTab, setActiveTab] = useState<"summons" | "tools" | "seals">("summons");
  const [search, setSearch] = useState("");
  const [rankFilter, setRankFilter] = useState("All Ranks");

  // Filter Logic
  const filteredSummons = useMemo(() => {
    return SUMMONINGS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.species.toLowerCase().includes(search.toLowerCase()) ||
        item.region.toLowerCase().includes(search.toLowerCase()) ||
        item.summoner.toLowerCase().includes(search.toLowerCase());

      const matchesRank = rankFilter === "All Ranks" || item.rank === rankFilter;
      return matchesSearch && matchesRank;
    });
  }, [search, rankFilter]);

  const filteredTools = useMemo(() => {
    return NINJA_TOOLS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.japaneseName.includes(search) ||
        item.type.toLowerCase().includes(search.toLowerCase()) ||
        item.owner.toLowerCase().includes(search.toLowerCase());

      const matchesRank = rankFilter === "All Ranks" || item.rank === rankFilter;
      return matchesSearch && matchesRank;
    });
  }, [search, rankFilter]);

  const filteredSeals = useMemo(() => {
    return SEALS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.japaneseName.includes(search) ||
        item.type.toLowerCase().includes(search.toLowerCase()) ||
        item.creator.toLowerCase().includes(search.toLowerCase());

      const matchesRank = rankFilter === "All Ranks" || item.rank === rankFilter;
      return matchesSearch && matchesRank;
    });
  }, [search, rankFilter]);

  // Styling helpers
  const getRankBadgeStyles = (rank: string) => {
    switch (rank) {
      case "S":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "A":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "B":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "C":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "D":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "E":
        return "bg-stone-500/20 text-stone-400 border-stone-500/30";
      default:
        return "bg-white/5 text-white/50 border-white/10";
    }
  };

  const tabs = [
    { id: "summons", label: "Summoning Contracts", icon: "🐸" },
    { id: "tools", label: "Ninja Tools & Gear", icon: "🗡️" },
    { id: "seals", label: "Fūinjutsu (Seals)", icon: "🌀" }
  ];

  return (
    <section id="arsenal" className="py-24 px-6 md:px-12 bg-[#070707] relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4 drop-shadow-[0_0_8px_rgba(255,122,24,0.5)]">
            NINJA <span className="text-accent-orange">ARSENAL</span>
          </h2>
          <p className="text-xs text-white/50 font-poppins tracking-[0.2em] uppercase">
            SACRED SUMMONS, ANCIENT ARTIFACTS, AND FORBIDDEN SEALING TECHNIQUES
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-white/5 mb-12 overflow-x-auto scrollbar-none gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSearch("");
                }}
                className={`flex items-center gap-2.5 px-6 py-4 font-cinzel text-xs md:text-sm font-bold tracking-widest uppercase border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-accent-orange text-accent-orange bg-accent-orange/5"
                    : "border-transparent text-white/50 hover:text-white hover:bg-white/2"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Filters Controls bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center bg-[#111111]/50 p-2 rounded-2xl border border-white/5">
          {/* Search Input */}
          <div className="relative w-full sm:flex-1">
            <input
              type="text"
              placeholder={`Search in ${activeTab === "summons" ? "Summons" : activeTab === "tools" ? "Tools" : "Seals"}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm font-poppins text-white placeholder-white/30 focus:outline-none focus:border-accent-orange/50 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          </div>

          {/* Rank Dropdown Filter */}
          <div className="relative w-full sm:w-48">
            <select
              value={rankFilter}
              onChange={(e) => setRankFilter(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm font-poppins text-white focus:outline-none focus:border-accent-orange/50 transition-colors appearance-none cursor-pointer"
            >
              <option value="All Ranks">All Ranks</option>
              <option value="S">S-Class (Legendary)</option>
              <option value="A">A-Class (Elite)</option>
              <option value="B">B-Class (Advanced)</option>
              <option value="C">C-Class (Chunin Level)</option>
              <option value="D">D-Class (Genin Level)</option>
              <option value="E">E-Class (Academy Level)</option>
            </select>
            <Compass className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Main Dynamic Grid Content */}
        <AnimatePresence mode="wait">
          {activeTab === "summons" && (
            <motion.div
              key="summons-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredSummons.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{
                    y: -8,
                    borderColor: `${item.color}40`,
                    boxShadow: `0 15px 35px ${item.color}12`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass-panel-glow rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between h-[420px]"
                >
                  {/* Subtle Background Glow Circle */}
                  <div
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl pointer-events-none"
                    style={{ backgroundColor: item.color }}
                  />

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-cinzel font-black tracking-widest px-2 py-0.5 rounded border ${getRankBadgeStyles(item.rank)}`}>
                            {item.rank}-RANK
                          </span>
                          <span className="text-[10px] font-cinzel tracking-widest px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10 uppercase">
                            SUMMON
                          </span>
                        </div>
                        <h3 className="font-cinzel text-2xl font-bold text-white tracking-wider">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-3xl select-none">{item.symbol}</span>
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col gap-1 mb-4 text-xs font-poppins text-white/50">
                      <span className="flex items-center gap-1.5">
                        <Compass size={12} className="text-accent-orange" /> Species: <strong className="text-white font-medium">{item.species}</strong>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Award size={12} className="text-accent-orange" /> Region: <strong className="text-white font-medium">{item.region}</strong>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-poppins leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Abilities & Summoners */}
                  <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
                    <div className="flex items-center gap-1.5 overflow-hidden text-[10px]">
                      <span className="font-cinzel text-white/30 tracking-wider uppercase shrink-0">
                        Summoners:
                      </span>
                      <span className="text-white/70 truncate font-poppins">{item.summoner}</span>
                    </div>

                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[9px] font-cinzel text-white/30 tracking-wider uppercase shrink-0">
                        Specialties:
                      </span>
                      <div className="flex gap-1 overflow-x-auto scrollbar-none">
                        {item.abilities.map((ability) => (
                          <span
                            key={ability}
                            className="text-[9px] bg-white/2 border border-white/10 px-1.5 py-0.5 rounded text-white/70 font-poppins whitespace-nowrap"
                          >
                            ✦ {ability}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "tools" && (
            <motion.div
              key="tools-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTools.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{
                    y: -8,
                    borderColor: `${item.color}40`,
                    boxShadow: `0 15px 35px ${item.color}12`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass-panel-glow rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between h-[420px]"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-cinzel font-black tracking-widest px-2 py-0.5 rounded border ${getRankBadgeStyles(item.rank)}`}>
                            {item.rank}-RANK
                          </span>
                          <span className="text-[10px] font-cinzel tracking-widest px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10 uppercase">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-cinzel text-2xl font-bold text-white tracking-wider">
                          {item.name}
                        </h3>
                        <span className="text-xs font-cinzel text-white/30 tracking-widest font-medium block">
                          {item.japaneseName}
                        </span>
                      </div>
                      <span className="text-3xl select-none">{item.symbol}</span>
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col gap-1 mb-4 text-xs font-poppins text-white/50">
                      <span className="flex items-center gap-1.5">
                        <User size={12} className="text-accent-orange" /> Notable Owner: <strong className="text-white font-medium truncate max-w-[200px]">{item.owner}</strong>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-poppins leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Abilities */}
                  <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[9px] font-cinzel text-white/30 tracking-wider uppercase shrink-0">
                        Combat Mechanics:
                      </span>
                      <div className="flex gap-1 overflow-x-auto scrollbar-none">
                        {item.abilities.map((ability) => (
                          <span
                            key={ability}
                            className="text-[9px] bg-white/2 border border-white/10 px-1.5 py-0.5 rounded text-white/70 font-poppins whitespace-nowrap"
                          >
                            ⚡ {ability}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "seals" && (
            <motion.div
              key="seals-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredSeals.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{
                    y: -8,
                    borderColor: `${item.color}40`,
                    boxShadow: `0 15px 35px ${item.color}12`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass-panel-glow rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between h-[420px]"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-cinzel font-black tracking-widest px-2 py-0.5 rounded border ${getRankBadgeStyles(item.rank)}`}>
                            {item.rank}-RANK
                          </span>
                          <span className="text-[10px] font-cinzel tracking-widest px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10 uppercase">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-cinzel text-2xl font-bold text-white tracking-wider">
                          {item.name}
                        </h3>
                        <span className="text-xs font-cinzel text-white/30 tracking-widest font-medium block">
                          {item.japaneseName}
                        </span>
                      </div>
                      <span className="text-3xl select-none">{item.symbol}</span>
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col gap-1 mb-4 text-xs font-poppins text-white/50">
                      <span className="flex items-center gap-1.5">
                        <User size={12} className="text-accent-orange" /> Creator: <strong className="text-white font-medium truncate max-w-[200px]">{item.creator}</strong>
                      </span>
                      {item.handSeals && (
                        <span className="flex items-center gap-1.5">
                          <Key size={12} className="text-accent-orange" /> Hand Seals: <strong className="text-white font-mono text-[9px] truncate max-w-[200px]">{item.handSeals}</strong>
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-poppins leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Abilities */}
                  <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[9px] font-cinzel text-white/30 tracking-wider uppercase shrink-0">
                        Technique Effects:
                      </span>
                      <div className="flex gap-1 overflow-x-auto scrollbar-none">
                        {item.abilities.map((ability) => (
                          <span
                            key={ability}
                            className="text-[9px] bg-white/2 border border-white/10 px-1.5 py-0.5 rounded text-white/70 font-poppins whitespace-nowrap"
                          >
                            🔒 {ability}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty States */}
        {((activeTab === "summons" && filteredSummons.length === 0) ||
          (activeTab === "tools" && filteredTools.length === 0) ||
          (activeTab === "seals" && filteredSeals.length === 0)) && (
          <div className="text-center py-20 bg-[#111111]/50 rounded-2xl border border-dashed border-white/10 mt-6">
            <ShieldAlert className="mx-auto text-white/20 mb-4" size={32} />
            <h3 className="font-cinzel text-lg text-white/80 tracking-widest uppercase mb-1">
              No Items Found
            </h3>
            <p className="text-sm text-white/40 font-poppins">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
