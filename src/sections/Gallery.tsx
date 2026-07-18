import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShieldAlert } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  symbol: string;
  color: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "valley",
    title: "Valley of the End",
    category: "Environments",
    description: "The legendary gorge where Hashirama Senju and Madara Uchiha engaged in their epoch-ending duel, co-founding the cycle of fate which Sasuke and Naruto would eventually break.",
    symbol: "⚔️",
    color: "#d62828"
  },
  {
    id: "monument",
    title: "Hokage Rock Monument",
    category: "Structures",
    description: "The massive cliffside overlooking Konohagakure, carved with the faces of all who have served as Hokage. A symbol of leadership and protection.",
    symbol: "🪨",
    color: "#ffb347"
  },
  {
    id: "rasengan",
    title: "Rasengan vs Chidori",
    category: "Techniques",
    description: "The ultimate clash of ideals: Naruto's spiraling wind sphere of cooperation versus Sasuke's piercing lightning blade of isolated vengeance.",
    symbol: "🌀",
    color: "#ff7a18"
  },
  {
    id: "sharingan",
    title: "Mangekyō Sharingan",
    category: "Dojutsu",
    description: "An advanced form of the Sharingan awakened by experiencing deep loss. Possesses god-like techniques but gradually blinds the user.",
    symbol: "👁️",
    color: "#6d28d9"
  },
  {
    id: "will",
    title: "The Will of Fire",
    category: "Ideology",
    description: "The spiritual belief that the entire village is like a large family unit, and every Leaf shinobi must love, trust, and protect the next generation.",
    symbol: "🔥",
    color: "#ff7a18"
  },
  {
    id: "akatsuki",
    title: "Akatsuki Red Cloud",
    category: "Symbols",
    description: "The symbol of the rogue organization dedicated to collecting all Tailed Beasts. The red cloud represents the rain of blood that fell in their home country.",
    symbol: "☁️",
    color: "#d62828"
  }
];

interface GalleryProps {
  onSelectBackground: (item: GalleryItem | null) => void;
  activeBgId: string | null;
}

export default function Gallery({ onSelectBackground, activeBgId }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleSetBackground = (item: GalleryItem) => {
    onSelectBackground(item);
    setSelectedItem(null); // Close modal after selection
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-[#070707] relative overflow-hidden">
      {/* Absolute background decorations */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-orange tracking-[0.3em] uppercase block mb-3">
            Visual Archive
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            LEGENDARY ENCOUNTERS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            Peruse our collection of abstract visual symbols representing the most historic clashes, philosophies, and monuments of the Ninja world.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => {
            const isActive = activeBgId === item.id;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedItem(item)}
                className={`glass-panel rounded-2xl overflow-hidden h-80 relative cursor-pointer group border flex flex-col justify-between p-8 transition-colors ${
                  isActive ? "border-accent-orange" : "border-white/5"
                }`}
              >
                {/* Blur color circle behind */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${item.color}30 0%, transparent 70%)`,
                  }}
                />

                {/* Category */}
                <div className="flex justify-between items-center text-[10px] font-cinzel text-white/40 tracking-widest uppercase">
                  <span>{item.category}</span>
                  <div className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="text-accent-orange text-[9px] tracking-wider uppercase font-semibold flex items-center gap-1">
                        <ShieldAlert size={10} /> ACTIVE BG
                      </span>
                    )}
                    <Eye size={12} className="opacity-0 group-hover:opacity-100 group-hover:text-accent-orange transition-all duration-300" />
                  </div>
                </div>

                {/* Central Symbol */}
                <div
                  className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center text-4xl self-center bg-white/2 shadow-[0_0_20px_rgba(255,255,255,0.02)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  style={{
                    boxShadow: `0 0 30px ${item.color}10`,
                    borderColor: `${item.color}20`
                  }}
                >
                  {item.symbol}
                </div>

                {/* Title Block */}
                <div className="border-t border-white/5 pt-4">
                  <h3 className="font-cinzel text-lg font-bold text-white tracking-wider group-hover:text-accent-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-poppins text-white/30 tracking-wider uppercase block mt-1">
                    CLASSIFIED FILES ➔
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070707]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel-glow w-full max-w-lg rounded-2xl overflow-hidden relative p-8 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white/70 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center text-3xl bg-white/2 mb-6"
                  style={{
                    boxShadow: `0 0 40px ${selectedItem.color}30`,
                    borderColor: `${selectedItem.color}30`
                  }}
                >
                  {selectedItem.symbol}
                </div>

                <span className="text-[10px] font-cinzel text-accent-gold tracking-[0.3em] uppercase block mb-1">
                  {selectedItem.category}
                </span>

                <h3 className="text-2xl font-bold font-cinzel text-white tracking-wider mb-4">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-white/70 font-poppins leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {/* Set Background Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSetBackground(selectedItem)}
                  className="px-6 py-2.5 rounded-full border text-xs font-cinzel tracking-widest uppercase font-bold cursor-pointer transition-colors shadow-lg mt-2 mb-6"
                  style={{
                    borderColor: selectedItem.color,
                    backgroundColor: `${selectedItem.color}15`,
                    color: "#ffffff"
                  }}
                >
                  Set as Home Background
                </motion.button>

                <div className="w-16 h-[1px]" style={{ backgroundColor: selectedItem.color }} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
