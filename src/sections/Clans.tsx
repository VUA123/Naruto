import { CLAN_DATA } from "../data/clans";
import ClanCard from "../components/ClanCard";

export default function Clans() {
  return (
    <section id="clans" className="py-24 px-6 md:px-12 bg-[#111111] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border border-white/2 pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-gold tracking-[0.3em] uppercase block mb-3">
            Noble Families
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            LEGENDARY SHINOBI CLANS
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            Unravel the history, special genetic traits (Kekkei Genkai), and profound ancestral influence of the most prominent noble families in the ninja world.
          </p>
        </div>

        {/* Clan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLAN_DATA.map((clan) => (
            <ClanCard key={clan.id} clan={clan} />
          ))}
        </div>
      </div>
    </section>
  );
}
