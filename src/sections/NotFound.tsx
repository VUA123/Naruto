import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Compass } from "lucide-react";

const SHORTCUTS = [
  { to: "/shinobi", label: "Shinobi Directory" },
  { to: "/timeline", label: "History" },
  { to: "/gallery", label: "Visual Archive" }
];

export default function NotFound() {
  return (
    <section
      id="not-found"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#070707] px-6 py-24"
    >
      {/* Oversized kanji watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-cinzel font-black text-[18rem] md:text-[30rem] leading-none text-white/[0.025]"
      >
        忍
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-orange/25 bg-accent-orange/5 text-[10px] font-cinzel font-bold tracking-[0.3em] uppercase text-accent-orange"
        >
          <Compass size={12} />
          Scroll Lost
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 font-cinzel text-6xl md:text-8xl font-black tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/35"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 font-cinzel text-lg md:text-xl tracking-[0.2em] uppercase text-white/80"
        >
          This path leaves no trace
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-4 text-sm font-poppins text-white/55 max-w-md mx-auto leading-relaxed"
        >
          The page you are looking for has vanished from the archive. Return to
          the village or continue through one of the open records below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-gold text-[#0a0a0a] font-cinzel text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all"
          >
            <ArrowLeft size={14} />
            Return Home
          </Link>

          <Link
            to="/shinobi"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-cinzel text-xs font-bold tracking-widest uppercase hover:border-accent-orange/50 hover:text-accent-orange transition-all"
          >
            <BookOpen size={14} />
            Browse Shinobi
          </Link>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <span className="text-[10px] font-cinzel text-accent-gold/40 tracking-[0.25em] uppercase block mb-4">
            Continue Exploring
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {SHORTCUTS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-xs font-poppins text-white/45 hover:text-accent-orange transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
