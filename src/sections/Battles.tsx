import { useState } from "react";
import { motion } from "framer-motion";
import { EPIC_BATTLES } from "../data/battles";
import { Trophy, MapPin, Swords, Sparkles } from "lucide-react";

export default function Battles() {
  const [activeBattleId, setActiveBattleId] = useState(EPIC_BATTLES[0].id);

  const selectedBattle = EPIC_BATTLES.find((b) => b.id === activeBattleId) || EPIC_BATTLES[0];
  const [f1, f2] = selectedBattle.fighters;

  const statKeys = [
    { id: "ninjutsu", label: "NINJUTSU" },
    { id: "taijutsu", label: "TAIJUTSU" },
    { id: "genjutsu", label: "GENJUTSU" },
    { id: "intelligence", label: "INTELLIGENCE" },
    { id: "stamina", label: "STAMINA" }
  ];

  return (
    <section id="epic-battles" className="py-24 px-6 md:px-12 bg-[#070707] relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4 drop-shadow-[0_0_8px_rgba(255,122,24,0.5)]">
            ICONIC <span className="text-accent-orange">CLASHES</span>
          </h2>
          <p className="text-xs text-white/50 font-poppins tracking-[0.2em] uppercase">
            TALE OF THE TAPE AND HISTORIC RECORDS OF THE GREATEST FIGHTS
          </p>
        </div>

        {/* Battle selector pills */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/5">
          {EPIC_BATTLES.map((battle) => {
            const isActive = battle.id === activeBattleId;
            return (
              <button
                key={battle.id}
                onClick={() => setActiveBattleId(battle.id)}
                className={`px-5 py-3 font-cinzel text-xs font-bold tracking-widest uppercase rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "border-accent-orange bg-accent-orange/10 text-accent-orange shadow-[0_0_15px_rgba(255,122,24,0.15)]"
                    : "border-white/5 text-white/45 hover:text-white hover:border-white/10 bg-white/2"
                }`}
              >
                {battle.conflict.split(" vs. ")[0]} VS {battle.conflict.split(" vs. ")[1]}
              </button>
            );
          })}
        </div>

        {/* Main Confrontation Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Battle Details & Summary (Left 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
              <span className="text-[10px] font-cinzel text-accent-gold tracking-[0.2em] uppercase block mb-1">
                {selectedBattle.era}
              </span>
              <h3 className="text-2xl font-black font-cinzel tracking-wider text-white mb-4">
                {selectedBattle.title}
              </h3>

              <div className="space-y-3 mb-6 text-xs font-poppins text-white/55 border-b border-white/5 pb-5">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-accent-orange" /> Location: <strong className="text-white font-medium">{selectedBattle.location}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Trophy size={13} className="text-accent-orange" /> Victor: <strong className="text-white font-medium">{selectedBattle.victor}</strong>
                </span>
              </div>

              <p className="text-xs text-white/60 leading-relaxed font-poppins mb-6">
                {selectedBattle.description}
              </p>

              <div className="flex items-center gap-2 px-4 py-2 bg-accent-orange/5 border border-accent-orange/15 rounded-xl text-[10px] font-cinzel font-bold text-accent-orange tracking-widest uppercase justify-center">
                <Swords size={12} /> COMBAT DATA SYNCHRONIZED
              </div>
            </div>
          </div>

          {/* Tale of the Tape and Head-to-Head Visuals (Right 8 columns) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Side by side fighter cards */}
            <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
              {/* Fighter 1 Card */}
              <div className="md:col-span-5 glass-panel rounded-3xl p-6 border border-white/5 relative overflow-hidden flex flex-col items-center text-center group transition-colors hover:border-white/10 h-72 justify-center">
                {/* Glow BG */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${f1.color}12 0%, transparent 70%)` }}
                />

                <div className="w-24 h-24 rounded-full border border-white/15 overflow-hidden mb-4 bg-white/5 relative shadow-lg"
                  style={{ borderColor: `${f1.color}40` }}
                >
                  <img
                    src={`/Shinobi/${f1.avatarId}.jpg`}
                    alt={f1.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      // Graceful avatar fallback
                      (e.target as any).style.display = "none";
                    }}
                  />
                  {/* Avatar Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center font-cinzel text-xl font-bold bg-[#111] text-white/30 pointer-events-none">
                    {f1.name[0]}
                  </div>
                </div>

                <h4 className="font-cinzel text-lg font-bold text-white tracking-wider mb-1">
                  {f1.name}
                </h4>
                <p className="text-[10px] font-cinzel text-accent-gold tracking-widest uppercase" style={{ color: f1.color }}>
                  {f1.form}
                </p>
              </div>

              {/* Glowing VS Portal */}
              <div className="md:col-span-1 flex justify-center py-4 md:py-0">
                <div className="w-12 h-12 rounded-full border border-accent-orange/40 bg-accent-orange/5 flex items-center justify-center font-cinzel font-black italic text-accent-orange text-lg shadow-[0_0_20px_rgba(255,122,24,0.2)] animate-pulse">
                  VS
                </div>
              </div>

              {/* Fighter 2 Card */}
              <div className="md:col-span-5 glass-panel rounded-3xl p-6 border border-white/5 relative overflow-hidden flex flex-col items-center text-center group transition-colors hover:border-white/10 h-72 justify-center">
                {/* Glow BG */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${f2.color}12 0%, transparent 70%)` }}
                />

                <div className="w-24 h-24 rounded-full border border-white/15 overflow-hidden mb-4 bg-white/5 relative shadow-lg"
                  style={{ borderColor: `${f2.color}40` }}
                >
                  <img
                    src={`/Shinobi/${f2.avatarId}.jpg`}
                    alt={f2.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as any).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-cinzel text-xl font-bold bg-[#111] text-white/30 pointer-events-none">
                    {f2.name[0]}
                  </div>
                </div>

                <h4 className="font-cinzel text-lg font-bold text-white tracking-wider mb-1">
                  {f2.name}
                </h4>
                <p className="text-[10px] font-cinzel text-accent-gold tracking-widest uppercase" style={{ color: f2.color }}>
                  {f2.form}
                </p>
              </div>
            </div>

            {/* Tale of the Tape Stat Bars */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-6 relative overflow-hidden">
              <h4 className="font-cinzel text-xs text-accent-gold tracking-widest uppercase mb-6 flex items-center gap-1.5 border-b border-white/5 pb-3">
                <Sparkles size={14} className="text-accent-orange animate-pulse" /> TALE OF THE TAPE (HEAD-TO-HEAD STAT COMPARISON)
              </h4>

              <div className="space-y-5">
                {statKeys.map((stat) => {
                  const val1 = (f1.stats as any)[stat.id] || 50;
                  const val2 = (f2.stats as any)[stat.id] || 50;

                  return (
                    <div key={stat.id} className="grid grid-cols-12 gap-3 items-center">
                      {/* Fighter 1 Stat Value (Left aligned) */}
                      <div className="col-span-1 text-right text-xs font-bold font-mono" style={{ color: f1.color }}>
                        {val1}
                      </div>

                      {/* Fighter 1 Left-aligned progress bar */}
                      <div className="col-span-4 h-[5px] bg-white/5 rounded-full overflow-hidden flex justify-end">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${val1}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: f1.color }}
                        />
                      </div>

                      {/* Stat Label in the Center */}
                      <div className="col-span-2 text-center text-[10px] font-cinzel tracking-widest text-white/40 font-bold whitespace-nowrap">
                        {stat.label}
                      </div>

                      {/* Fighter 2 Right-aligned progress bar */}
                      <div className="col-span-4 h-[5px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${val2}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: f2.color }}
                        />
                      </div>

                      {/* Fighter 2 Stat Value (Right aligned) */}
                      <div className="col-span-1 text-left text-xs font-bold font-mono" style={{ color: f2.color }}>
                        {val2}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
