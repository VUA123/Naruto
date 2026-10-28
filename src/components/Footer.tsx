import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Archive",
    links: [
      { to: "/shinobi", label: "Shinobi Directory" },
      { to: "/clans", label: "Clans" },
      { to: "/villages", label: "Hidden Villages" }
    ]
  },
  {
    title: "Codex",
    links: [
      { to: "/bijuu", label: "Bijū Codex" },
      { to: "/dojutsu", label: "Dōjutsu" },
      { to: "/jutsu", label: "Jutsu Library" }
    ]
  },
  {
    title: "Explore",
    links: [
      { to: "/timeline", label: "Timeline" },
      { to: "/battles", label: "Epic Battles" },
      { to: "/arsenal", label: "Ninja Arsenal" },
      { to: "/gallery", label: "Gallery" }
    ]
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/5 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-96 h-96 border border-white/5 rounded-full pointer-events-none opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/5 rounded-full pointer-events-none opacity-20"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <span className="font-cinzel text-accent-orange font-black text-2xl tracking-wider drop-shadow-[0_0_8px_rgba(255,122,24,0.3)] transition-colors group-hover:text-accent-gold">
                NINJA CHRONICLES
              </span>
            </Link>

            <p className="font-poppins text-sm text-white/45 max-w-sm mb-8 leading-relaxed">
              A curated interactive archive of the Shinobi world. Explore
              legendary lineages, the chakra natures of the hidden villages, and
              the ancient mysteries of the Tailed Beasts.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 text-[10px] font-cinzel font-bold tracking-[0.25em] uppercase text-white/50 hover:text-accent-orange transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent-orange/40 transition-colors">
                <ArrowUp size={16} />
              </span>
              Back to top
            </motion.button>
          </div>

          {/* Sitemap */}
          <nav
            aria-label="Footer"
            className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="font-cinzel text-[10px] font-bold tracking-[0.25em] uppercase text-accent-gold/60 mb-4">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-xs font-poppins text-white/45 hover:text-accent-orange transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="w-full pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center text-xs text-white/30 gap-4">
          <p>
            © {new Date().getFullYear()} Ninja Chronicles. A fan-made archive,
            built for the community.
          </p>
          <p className="max-w-2xl leading-relaxed lg:text-right">
            Unofficial fan project. Not affiliated with Shueisha, Studio Pierrot,
            or Masashi Kishimoto. Naruto © Masashi Kishimoto.
          </p>
        </div>
      </div>
    </footer>
  );
}
