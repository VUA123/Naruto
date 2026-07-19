import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JUTSU_DATA } from "../data/jutsu";
import { Search, ChevronDown, User, ShieldAlert } from "lucide-react";

export default function JutsuLibrary() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [rankFilter, setRankFilter] = useState("All Ranks");

  const filteredJutsu = useMemo(() => {
    return JUTSU_DATA.filter((jutsu) => {
      const matchesSearch =
        jutsu.name.toLowerCase().includes(search.toLowerCase()) ||
        jutsu.creator.toLowerCase().includes(search.toLowerCase()) ||
        jutsu.description.toLowerCase().includes(search.toLowerCase()) ||
        jutsu.japaneseName.includes(search);

      if (!matchesSearch) return false;

      if (typeFilter !== "All Types" && jutsu.type !== typeFilter) return false;
      if (rankFilter !== "All Ranks" && jutsu.rank !== rankFilter) return false;

      return true;
    });
  }, [search, typeFilter, rankFilter]);

  // Color mapping based on elements
  const getElementBadgeStyles = (element: string) => {
    switch (element) {
      case "Fire":
        return { bg: "rgba(239, 68, 68, 0.15)", text: "#ef4444", border: "rgba(239, 68, 68, 0.3)" };
      case "Wind":
        return { bg: "rgba(74, 222, 128, 0.15)", text: "#4ade80", border: "rgba(74, 222, 128, 0.3)" };
      case "Lightning":
        return { bg: "rgba(234, 179, 8, 0.15)", text: "#eab308", border: "rgba(234, 179, 8, 0.3)" };
      case "Earth":
        return { bg: "rgba(167, 139, 250, 0.15)", text: "#a78bfa", border: "rgba(167, 139, 250, 0.3)" };
      case "Water":
        return { bg: "rgba(59, 130, 246, 0.15)", text: "#3b82f6", border: "rgba(59, 130, 246, 0.3)" };
      case "Wood":
        return { bg: "rgba(16, 185, 129, 0.15)", text: "#10b981", border: "rgba(16, 185, 129, 0.3)" };
      default:
        return { bg: "rgba(255, 255, 255, 0.05)", text: "#a3a3a3", border: "rgba(255, 255, 255, 0.1)" };
    }
  };

  const getRankBadgeStyles = (rank: string) => {
    switch (rank) {
      case "S":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "A":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "B":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-white/5 text-white/50 border-white/10";
    }
  };

  return (
    <section id="jutsu-library" className="py-24 px-6 md:px-12 bg-[#070707] relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4 drop-shadow-[0_0_8px_rgba(255,122,24,0.5)]">
            FAMOUS <span className="text-accent-orange">JUTSU LIBRARY</span>
          </h2>
          <p className="text-xs text-white/50 font-poppins tracking-[0.2em] uppercase">
            A RECORD OF LEGENDARY TECHNIQUES AND EXTRAORDINARY ABILITIES
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 items-center bg-[#111111]/50 p-2 rounded-2xl border border-white/5">
          {/* Search Input */}
          <div className="relative w-full lg:flex-1">
            <input
              type="text"
              placeholder="Search by jutsu name, element, creator..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm font-poppins text-white placeholder-white/30 focus:outline-none focus:border-accent-orange/50 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          </div>

          {/* Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Type Dropdown */}
            <div className="relative w-full sm:w-48">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm font-poppins text-white focus:outline-none focus:border-accent-orange/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="All Types">All Types</option>
                <option value="Ninjutsu">Ninjutsu (Magic)</option>
                <option value="Taijutsu">Taijutsu (Martial Arts)</option>
                <option value="Genjutsu">Genjutsu (Illusion)</option>
                <option value="Fūinjutsu">Fūinjutsu (Sealing)</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
            </div>

            {/* Rank Dropdown */}
            <div className="relative w-full sm:w-48">
              <select
                value={rankFilter}
                onChange={(e) => setRankFilter(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm font-poppins text-white focus:outline-none focus:border-accent-orange/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="All Ranks">All Ranks</option>
                <option value="S">S-Class (Legendary)</option>
                <option value="A">A-Class (Forbidden/Elite)</option>
                <option value="B">B-Class (Advanced)</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredJutsu.map((jutsu) => {
              const elemStyles = getElementBadgeStyles(jutsu.element);
              return (
                <motion.div
                  key={jutsu.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-between h-[360px]"
                >
                  {/* Subtle element background glow */}
                  <div
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: elemStyles.text }}
                  />

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          {/* Rank badge */}
                          <span className={`text-[9px] font-cinzel font-black tracking-widest px-2 py-0.5 rounded border ${getRankBadgeStyles(jutsu.rank)}`}>
                            {jutsu.rank}-CLASS
                          </span>
                          {/* Type badge */}
                          <span className="text-[9px] font-cinzel tracking-widest px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10 uppercase">
                            {jutsu.type}
                          </span>
                        </div>
                        <h3 className="font-cinzel text-xl font-bold text-white tracking-wider group-hover:text-accent-orange transition-colors">
                          {jutsu.name}
                        </h3>
                        <span className="text-xs font-cinzel text-white/30 tracking-widest block font-medium">
                          {jutsu.japaneseName}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-poppins leading-relaxed line-clamp-4">
                      {jutsu.description}
                    </p>
                  </div>

                  {/* Footer details */}
                  <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-poppins text-white/40">
                      <span className="flex items-center gap-1.5">
                        <User size={12} className="text-accent-orange" /> Creator:{" "}
                        <strong className="text-white font-medium">{jutsu.creator}</strong>
                      </span>

                      {/* Element Release badge */}
                      <span
                        className="text-[9px] font-cinzel font-semibold tracking-wider px-2 py-0.5 rounded border uppercase"
                        style={{
                          backgroundColor: elemStyles.bg,
                          color: elemStyles.text,
                          borderColor: elemStyles.border,
                        }}
                      >
                        {jutsu.element === "None" ? "No Element" : `${jutsu.element} Release`}
                      </span>
                    </div>

                    {/* Notable Users */}
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-[9px] font-cinzel text-white/30 tracking-wider uppercase shrink-0">
                        Notable Users:
                      </span>
                      <div className="flex gap-1 overflow-x-auto scrollbar-none pr-4">
                        {jutsu.notableUsers.map((user) => (
                          <span
                            key={user}
                            className="text-[9px] bg-white/2 border border-white/10 px-1.5 py-0.5 rounded text-white/70 font-poppins whitespace-nowrap"
                          >
                            {user.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredJutsu.length === 0 && (
          <div className="text-center py-20 bg-[#111111] rounded-2xl border border-dashed border-white/10 mt-6">
            <ShieldAlert className="mx-auto text-white/20 mb-4" size={32} />
            <h3 className="font-cinzel text-lg text-white/80 tracking-widest uppercase mb-1">
              No Jutsu Found
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
