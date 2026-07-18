import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Slight delay after hitting 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#070707] z-50 flex flex-col justify-center items-center">
      <div className="relative mb-8 w-24 h-24">
        {/* Glowing swirling Uzumaki spiral loading effect */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 border-4 border-t-accent-orange border-r-transparent border-b-accent-gold border-l-transparent rounded-full shadow-[0_0_15px_rgba(255,122,24,0.3)]"
        />
        <div className="absolute inset-2 flex items-center justify-center font-cinzel text-accent-orange font-bold text-3xl drop-shadow-[0_0_8px_rgba(255,122,24,0.5)]">
          渦
        </div>
      </div>

      <div className="text-center font-cinzel">
        <h2 className="text-lg tracking-[0.3em] text-accent-gold uppercase mb-2 animate-pulse">
          Gathering Chakra
        </h2>
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-orange to-accent-gold"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        <span className="text-xs text-white/40 tracking-wider block mt-2">
          {Math.min(progress, 100)}%
        </span>
      </div>
    </div>
  );
}
