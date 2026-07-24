import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Shinobi } from "../data/shinobi";
import { Sparkles, MapPin, Award } from "lucide-react";

interface CharacterCardProps {
  shinobi: Shinobi;
}

export default function CharacterCard({ shinobi }: CharacterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Map mouse position to degree rotations
    setRotateX(-(mouseY / (height / 2)) * 10);
    setRotateY((mouseX / (width / 2)) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen(true)}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
        className="glass-panel-glow relative rounded-2xl h-[420px] p-6 flex flex-col justify-between overflow-hidden cursor-pointer group"
      >
        {/* Glow Background Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${shinobi.color}15 0%, transparent 70%)`,
          }}
        />

        {/* Top Header info */}
        <div className="flex justify-between items-start z-10" style={{ transform: "translateZ(30px)" }}>
          <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-cinzel font-semibold">
            {shinobi.rank}
          </span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs border border-white/5 font-cinzel font-bold text-white/80"
            style={{ backgroundColor: `${shinobi.color}20` }}
          >
            {shinobi.name[0]}
          </div>
        </div>

        {/* Avatar - Cinematic abstract graphics or character image */}
        <div
          className="w-full h-44 rounded-xl flex items-center justify-center relative overflow-hidden my-4 border border-white/5 bg-white/2"
          style={{ transform: "translateZ(10px)" }}
        >
          {!imgError ? (
            <img
              src={`/Shinobi/${shinobi.id}.jpg`}
              alt={shinobi.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <>
              {/* Swirling energy circles to act as placeholder art */}
              <div
                className="absolute w-24 h-24 rounded-full border border-dashed opacity-20 animate-[spin_12s_linear_infinite]"
                style={{ borderColor: shinobi.color }}
              />
              <div
                className="absolute w-16 h-16 rounded-full border border-dashed opacity-30 animate-[spin_8s_linear_infinite_reverse]"
                style={{ borderColor: shinobi.color }}
              />
              <div
                className="absolute w-10 h-10 rounded-full flex items-center justify-center text-2xl font-cinzel text-white/80 select-none shadow-[0_0_20px_rgba(255,255,255,0.05)] font-black"
                style={{ textShadow: `0 0 10px ${shinobi.color}` }}
              >
                {shinobi.name.split(" ")[0][0]}
                {shinobi.name.split(" ")[1]?.[0] || ""}
              </div>
            </>
          )}
        </div>

        {/* Info Area */}
        <div className="z-10 flex flex-col gap-1" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-xl font-bold font-cinzel tracking-wider text-white transition-all duration-300 group-hover:text-accent-orange">
            {shinobi.name}
          </h3>
          <p className="text-xs text-white/60 font-poppins line-clamp-2 mt-1">
            {shinobi.description}
          </p>
        </div>

        {/* Click to expand hover hint */}
        <div className="flex justify-between items-center text-[10px] text-white/30 font-cinzel tracking-widest pt-2 border-t border-white/5 mt-3">
          <span>CLAN: {shinobi.clan.toUpperCase()}</span>
          <span className="text-accent-orange group-hover:animate-pulse">DETAILS ➔</span>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070707]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel-glow w-full max-w-2xl rounded-2xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors text-white/70 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              {/* Modal Banner decoration */}
              <div
                className="h-3 bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${shinobi.color}, #ffb347)`,
                }}
              />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {!imgError && (
                      <div className="w-16 h-16 rounded-full border border-white/10 overflow-hidden bg-white/5 flex-shrink-0">
                        <img
                          src={`/Shinobi/${shinobi.id}.jpg`}
                          alt={shinobi.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div>
                      <span
                        className="text-xs font-cinzel tracking-widest uppercase px-2 py-1 rounded border border-white/5 inline-block mb-2"
                        style={{
                          backgroundColor: `${shinobi.color}10`,
                          borderColor: `${shinobi.color}30`,
                          color: shinobi.color,
                        }}
                      >
                        {shinobi.rank}
                      </span>
                      <h2 className="text-3xl font-bold font-cinzel tracking-wider text-white">
                        {shinobi.name}
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-white/50 font-poppins">
                    <span className="flex items-center gap-1.5">
                      <Award size={14} className="text-accent-orange" /> Clan:{" "}
                      <strong className="text-white">{shinobi.clan}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent-orange" /> Village:{" "}
                      <strong className="text-white">{shinobi.village}</strong>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column Description */}
                  <div>
                    <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-3">
                      BACKGROUND
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed mb-6">
                      {shinobi.description}
                    </p>

                    <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-3">
                      SPECIAL JUTSU & SPECIALTY
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {shinobi.specialty.split(", ").map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80 font-poppins"
                        >
                          ✦ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column Stats */}
                  <div className="bg-white/2 rounded-xl border border-white/5 p-6">
                    <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-4 flex items-center gap-1.5">
                      <Sparkles size={14} /> JUTSU STATISTICS
                    </h4>
                    <div className="flex flex-col gap-4">
                      {[
                        { label: "Ninjutsu", value: shinobi.stats.ninjutsu },
                        { label: "Taijutsu", value: shinobi.stats.taijutsu },
                        { label: "Genjutsu", value: shinobi.stats.genjutsu },
                        { label: "Intelligence", value: shinobi.stats.intelligence },
                        { label: "Stamina", value: shinobi.stats.stamina },
                      ].map((stat, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs text-white/60 mb-1">
                            <span>{stat.label}</span>
                            <span>{stat.value}/100</span>
                          </div>
                          <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${stat.value}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r"
                              style={{
                                backgroundImage: `linear-gradient(to right, ${shinobi.color}, #ffb347)`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
