import { motion } from "framer-motion";
import type { Clan } from "../data/clans";
import { Shield, Sparkles } from "lucide-react";

interface ClanCardProps {
  clan: Clan;
}

export default function ClanCard({ clan }: ClanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass-panel relative rounded-2xl p-8 overflow-hidden border border-white/5 flex flex-col justify-between group h-full"
    >
      {/* Absolute glow background decorative elements */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: clan.color }}
      />

      <div>
        {/* Emblem Description Block */}
        <div className="flex justify-between items-start mb-6">
          <span
            className="text-[10px] font-cinzel tracking-wider uppercase px-2.5 py-1 rounded-md border text-white/90"
            style={{
              borderColor: `${clan.color}30`,
              backgroundColor: `${clan.color}10`,
            }}
          >
            {clan.emblem}
          </span>
          <Shield className="text-white/20 group-hover:text-accent-orange transition-colors duration-300" size={20} />
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold font-cinzel tracking-wider text-white mb-3 group-hover:text-accent-orange transition-colors">
          {clan.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed font-poppins mb-6">
          {clan.description}
        </p>

        {/* Special Ability */}
        <div className="mb-6 bg-white/2 rounded-xl p-4 border border-white/5">
          <span className="text-[10px] font-cinzel text-accent-gold tracking-widest block mb-1.5 uppercase flex items-center gap-1">
            <Sparkles size={10} /> Secret Clan Ability
          </span>
          <p className="text-xs text-white/90 font-medium font-poppins">
            {clan.specialAbility}
          </p>
        </div>
      </div>

      <div>
        {/* Notable Members */}
        <div className="mb-6">
          <span className="text-[10px] font-cinzel text-white/40 tracking-widest block mb-2 uppercase">
            Notable Members
          </span>
          <div className="flex flex-wrap gap-1.5">
            {clan.notableMembers.map((member, i) => (
              <span
                key={i}
                className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70 font-poppins"
              >
                {member}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
          <span>Influence</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${clan.stats.influence}%`,
                  backgroundColor: clan.color,
                }}
              />
            </div>
            <span className="text-[10px] font-cinzel text-white/80">{clan.stats.influence}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
