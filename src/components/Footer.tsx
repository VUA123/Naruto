import { motion } from "framer-motion";
import { ArrowUp, Globe, Shield, Star, Award } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/5 py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 border border-white/5 rounded-full pointer-events-none opacity-20" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/5 rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Back To Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-orange hover:border-accent-orange transition-all duration-300 mb-8 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </motion.button>

        {/* Logo or Brand */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-cinzel text-accent-orange font-black text-2xl tracking-wider drop-shadow-[0_0_8px_rgba(255,122,24,0.3)]">
            NINJA CHRONICLES
          </span>
        </div>

        <p className="font-poppins text-sm text-white/40 text-center max-w-md mb-8 leading-relaxed">
          The ultimate premium interactive encyclopedia of the Naruto Shinobi Universe. Delve deep into the lore of Legendary Shinobi, Tailed Beasts, and Hidden Villages.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mb-10">
          {[
            { icon: <Globe size={18} />, link: "#" },
            { icon: <Shield size={18} />, link: "#" },
            { icon: <Star size={18} />, link: "#" },
            { icon: <Award size={18} />, link: "#" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1, color: "#ff7a18" }}
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-white/40 hover:border-accent-orange/30 transition-all duration-300 cursor-pointer"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-white/30 gap-4">
          <p>© {new Date().getFullYear()} Ninja Chronicles. Created for Naruto fans.</p>
          <p className="tracking-wider uppercase">
            Designed with <span className="text-accent-orange">✦</span> Premium Anime UI
          </p>
        </div>
      </div>
    </footer>
  );
}
