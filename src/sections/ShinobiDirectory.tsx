import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SHINOBI_ROSTER } from "../data/shinobi";
import CharacterCard from "../components/CharacterCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ShinobiDirectory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "leaf" | "rogue" | "kage" | "sannin">("all");

  const categories = [
    { id: "all", label: "All Shinobi" },
    { id: "leaf", label: "Hidden Leaf" },
    { id: "rogue", label: "Rogue/Akatsuki" },
    { id: "kage", label: "Kages" },
    { id: "sannin", label: "Sannin" },
  ];

  const filteredRoster = useMemo(() => {
    return SHINOBI_ROSTER.filter((shinobi) => {
      // Search matching
      const matchesSearch =
        shinobi.name.toLowerCase().includes(search.toLowerCase()) ||
        shinobi.clan.toLowerCase().includes(search.toLowerCase()) ||
        shinobi.specialty.toLowerCase().includes(search.toLowerCase());

      if (!matchesSearch) return false;

      // Category filter matching
      if (filter === "all") return true;
      if (filter === "leaf") return shinobi.village.includes("Leaf");
      if (filter === "rogue") return shinobi.village.includes("Rogue") || shinobi.rank.includes("Rogue") || shinobi.rank.includes("Akatsuki");
      if (filter === "kage") return shinobi.rank.includes("Kage") || shinobi.id === "hashirama" || shinobi.id === "tobirama" || shinobi.id === "hiruzen" || shinobi.id === "minato";
      if (filter === "sannin") return shinobi.rank.includes("Sannin");

      return true;
    });
  }, [search, filter]);

  return (
    <section id="shinobi" className="py-24 px-6 md:px-12 bg-[#070707] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-orange tracking-[0.3em] uppercase block mb-3">
            Shinobi Directory
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            LEGENDARY SHINOBI
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            Search and explore the files of the world's most powerful ninja. Click any card to reveal classified jutsu statistics and custom chakra abilities.
          </p>
        </div>

        {/* Filter and Search Controls bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-white/2 rounded-2xl p-4 border border-white/5 backdrop-blur-md">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-cinzel tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-accent-orange to-accent-gold text-white font-bold shadow-lg shadow-accent-orange/10"
                    : "bg-transparent text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search Name, Clan, Specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-xs font-poppins text-white placeholder-white/30 focus:outline-none focus:border-accent-orange/50 transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={14} />
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
          <div className="text-center py-20 bg-white/2 rounded-2xl border border-dashed border-white/5 mt-6">
            <SlidersHorizontal className="mx-auto text-white/20 mb-4" size={32} />
            <h3 className="font-cinzel text-lg text-white/80 tracking-widest uppercase mb-1">
              No Shinobi Found
            </h3>
            <p className="text-xs text-white/40 font-poppins">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
