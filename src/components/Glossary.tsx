import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, Search, Sparkles } from "lucide-react";
import { GLOSSARY_DATA } from "../data/glossary";
import type { GlossaryTerm } from "../data/glossary";

export default function Glossary() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Jutsu", "Ranks", "World"];

  const filteredTerms = GLOSSARY_DATA.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-gradient-to-tr from-accent-orange to-accent-gold text-white flex items-center justify-center shadow-lg cursor-pointer hover:shadow-accent-orange/30 border border-white/10 group"
      >
        <BookOpen size={22} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-10 right-0 bg-[#111111]/90 backdrop-blur border border-white/10 px-3 py-1 rounded text-[9px] tracking-widest font-cinzel text-accent-gold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Glossary
        </span>
      </motion.button>

      {/* Slide-out Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#070707]/95 border-l border-white/5 z-50 flex flex-col h-full shadow-2xl p-6 md:p-8"
              data-lenis-prevent
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white tracking-widest uppercase">
                      SHINOBI DICTIONARY
                    </h3>
                    <p className="text-[10px] text-white/40 tracking-wider font-poppins">
                      CORE TERMINOLOGY FOR BEGINNERS
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/5 hover:bg-white/5 transition-colors flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search terms or definitions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-xs font-poppins text-white placeholder-white/30 focus:outline-none focus:border-accent-orange/50 transition-colors"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={14} />
              </div>

              {/* Category Filter Tabs */}
              <div className="flex gap-1.5 overflow-x-auto pb-4 mb-4 border-b border-white/5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-cinzel tracking-wider uppercase font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-accent-orange/15 border-accent-orange text-accent-orange font-bold"
                        : "bg-[#111111] border-white/5 text-white/50 hover:text-white hover:border-white/15"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Terminology List */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-6 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
                {filteredTerms.map((item, index) => (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(index * 0.04, 0.4) }}
                    onClick={() => setSelectedTerm(item)}
                    className="bg-white/2 rounded-xl p-4 border border-white/5 relative group hover:border-white/10 transition-colors cursor-pointer hover:bg-white/4"
                  >
                    {/* Tiny category pill */}
                    <span className="absolute top-4 right-4 text-[8px] font-cinzel tracking-widest text-accent-gold/60 uppercase bg-white/2 px-1.5 py-0.5 rounded border border-white/5">
                      {item.category}
                    </span>

                    <h4 className="font-cinzel text-sm font-bold text-white tracking-widest uppercase mb-2 flex items-center gap-1.5 group-hover:text-accent-orange transition-colors">
                      <Sparkles size={11} className="text-accent-orange" />
                      {item.term}
                    </h4>
                    <p className="text-xs text-white/60 font-poppins leading-relaxed">
                      {item.definition}
                    </p>
                  </motion.div>
                ))}

                {filteredTerms.length === 0 && (
                  <div className="text-center py-12 text-white/30">
                    <BookOpen className="mx-auto mb-3 opacity-20" size={32} />
                    <p className="text-xs font-poppins">No terms found matching your query.</p>
                  </div>
                )}
              </div>

              {/* Footer Quote */}
              <div className="border-t border-white/5 pt-4 mt-4 text-center">
                <span className="text-[9px] font-cinzel text-white/30 tracking-[0.2em] uppercase block">
                  Knowledge is a Shinobi's greatest weapon.
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Detailed Term Modal Popup */}
      <AnimatePresence>
        {selectedTerm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-1 sm:p-2 bg-[#000000]/85 backdrop-blur-md">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTerm(null)}
              className="absolute inset-0 cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="glass-panel-glow w-full h-full max-w-full max-h-full rounded-xl overflow-hidden relative p-6 md:p-10 bg-[#0c0c0c]/95 border border-white/10 shadow-2xl z-10 flex flex-col"
              data-lenis-prevent
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTerm(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/5 hover:bg-white/5 transition-colors flex items-center justify-center text-white/60 hover:text-white cursor-pointer z-20"
              >
                ✕
              </button>

              {/* Icon / Design Accent */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-full border border-accent-orange/20 bg-accent-orange/5 flex items-center justify-center text-accent-orange mb-4 shadow-[0_0_30px_rgba(214,40,40,0.1)]">
                  <Sparkles size={24} />
                </div>
                <span className="text-[10px] font-cinzel text-accent-gold tracking-[0.3em] uppercase block mb-1">
                  {selectedTerm.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-cinzel text-white tracking-widest uppercase">
                  {selectedTerm.term}
                </h3>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent mt-3" />
              </div>

              {/* Scrollable Lore Content */}
              <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <p className="text-xs text-white/50 font-poppins italic border-l-2 border-accent-orange/40 pl-3 py-1.5 mb-6 leading-relaxed bg-white/2 rounded-r-md">
                  {selectedTerm.definition}
                </p>
                
                {/* Long description split by double newlines into paragraphs */}
                <div className="space-y-4 text-sm text-white/80 font-poppins leading-relaxed">
                  {selectedTerm.detailedDescription.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Footer decorative line */}
              <div className="border-t border-white/5 pt-4 mt-6 text-center">
                <span className="text-[9px] font-cinzel text-white/30 tracking-[0.25em] uppercase">
                  CLASSIFIED LEAF CODENAME // SECURE DATA
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
