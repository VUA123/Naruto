import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SHINOBI_ROSTER } from "../data/shinobi";
import CharacterCard from "../components/CharacterCard";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ShinobiDirectory() {
  const [search, setSearch] = useState("");
  const [villageFilter, setVillageFilter] = useState("All Villages");
  const [rankFilter, setRankFilter] = useState("All Ranks");

  const filteredRoster = useMemo(() => {
    return SHINOBI_ROSTER.filter((shinobi) => {
      // 1. Search text matching
      const matchesSearch =
        shinobi.name.toLowerCase().includes(search.toLowerCase()) ||
        shinobi.clan.toLowerCase().includes(search.toLowerCase()) ||
        shinobi.specialty.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      // 2. Village matching
      if (villageFilter !== "All Villages") {
        if (villageFilter === "Rogue") {
          // Check for Rogue or Unknown
          if (!shinobi.village.includes("Rogue") && !shinobi.village.includes("Unknown") && !shinobi.village.includes("Akatsuki")) {
            return false;
          }
        } else {
          // Exact village match (e.g. "Leaf", "Sand")
          if (!shinobi.village.includes(villageFilter)) return false;
        }
      }

      // 3. Rank matching
      if (rankFilter !== "All Ranks") {
        if (rankFilter === "Kage") {
          // General Kage, excluding Hokage if we want to differentiate
          if (!shinobi.rank.includes("Kage") && !shinobi.rank.includes("Kazekage") && !shinobi.rank.includes("Raikage") && !shinobi.rank.includes("Mizukage") && !shinobi.rank.includes("Tsuchikage")) {
            return false;
          }
        } else if (rankFilter === "Akatsuki") {
          if (!shinobi.rank.includes("Akatsuki") && !shinobi.village.includes("Akatsuki")) return false;
        } else if (rankFilter === "Missing-Nin") {
          if (!shinobi.rank.includes("Rogue")) return false;
        } else {
          if (!shinobi.rank.toLowerCase().includes(rankFilter.toLowerCase())) return false;
        }
      }

      return true;
    });
  }, [search, villageFilter, rankFilter]);

  return (
    <section id="shinobi" className="py-24 px-6 md:px-12 bg-[#070707] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4 drop-shadow-[0_0_8px_rgba(255,122,24,0.5)]">
            SHINOBI <span className="text-accent-orange">DIRECTORY</span>
          </h2>
          <p className="text-xs text-white/50 font-poppins tracking-[0.2em] uppercase">
            DATABASE OF LEGENDARY NINJA ACROSS THE FIVE GREAT NATIONS
          </p>
        </div>

        {/* Filter and Search Controls bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 items-center bg-[#111111]/50 p-2 rounded-2xl border border-white/5">
          
          {/* Search Input */}
          <div className="relative w-full lg:flex-1">
            <input
              type="text"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm font-poppins text-white placeholder-white/30 focus:outline-none focus:border-accent-orange/50 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          </div>

          {/* Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Village Dropdown */}
            <div className="relative w-full sm:w-48">
              <select
                value={villageFilter}
                onChange={(e) => setVillageFilter(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm font-poppins text-white focus:outline-none focus:border-accent-orange/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="All Villages">All Villages</option>
                <option value="Leaf">Hidden Leaf</option>
                <option value="Sand">Hidden Sand</option>
                <option value="Mist">Hidden Mist</option>
                <option value="Cloud">Hidden Cloud</option>
                <option value="Stone">Hidden Stone</option>
                <option value="Rogue">Rogue/Unknown</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
            </div>

            {/* Rank Dropdown */}
            <div className="relative w-full sm:w-48">
              <select
                value={rankFilter}
                onChange={(e) => setRankFilter(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm font-poppins text-white focus:outline-none focus:border-accent-orange/50 transition-colors appearance-none cursor-pointer"
                style={{
                  borderColor: rankFilter !== "All Ranks" ? "#ff7a18" : ""
                }}
              >
                <option value="All Ranks">All Ranks</option>
                <option value="Hokage">Hokage</option>
                <option value="Kage">Kage (Other)</option>
                <option value="Jonin">Jōnin</option>
                <option value="Sannin">Sannin</option>
                <option value="Missing-Nin">Missing-Nin</option>
                <option value="Akatsuki">Akatsuki</option>
                <option value="Genin">Genin</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Shinobi Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredRoster.map((shinobi) => (
              <motion.div
                key={shinobi.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CharacterCard shinobi={shinobi} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredRoster.length === 0 && (
          <div className="text-center py-20 bg-[#111111] rounded-2xl border border-dashed border-white/10 mt-6">
            <SlidersHorizontal className="mx-auto text-white/20 mb-4" size={32} />
            <h3 className="font-cinzel text-lg text-white/80 tracking-widest uppercase mb-1">
              No Shinobi Found
            </h3>
            <p className="text-sm text-white/40 font-poppins">
              Try adjusting your village or rank filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
