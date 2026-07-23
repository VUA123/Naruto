import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ShieldAlert, Image as ImageIcon } from "lucide-react";
import type { GalleryItem } from "./Gallery";

interface HeroProps {
  onExploreClick: () => void;
  customBg: GalleryItem | null;
  onResetBg: () => void;
}

export default function Hero({ onExploreClick, customBg, onResetBg }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
    }> = [];

    // Use selected gallery item colors or fallback to default Valley of the End palette
    const colors = customBg 
      ? [customBg.color, "#ffb347", "#ffffff"]
      : ["#d62828", "#ffb347", "#ffffff"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 15), 100);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height + canvas.height,
          size: Math.random() * 3 + 1,
          speedY: -(Math.random() * 1.5 + 0.5),
          speedX: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        
        p.y += p.speedY;
        p.x += p.speedX;
        
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [customBg]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden transition-all duration-1000"
      style={{
        // If a custom background is chosen, we blend a glowing gradient color into the dark background
        backgroundColor: "#070707",
        backgroundImage: customBg 
          ? `radial-gradient(circle at center, ${customBg.color}15 0%, #070707 75%)`
          : "none"
      }}
    >
      {/* HTML5 Dynamic Chakra Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Large Glowing Watermark Symbol (Changes based on selection!) */}
      <div 
        className="absolute text-[15rem] md:text-[25rem] select-none pointer-events-none opacity-5 font-bold transition-all duration-1000 z-0 animate-[pulse_6s_infinite]"
        style={{
          color: customBg ? customBg.color : "#d62828",
          textShadow: customBg ? `0 0 100px ${customBg.color}` : "none"
        }}
      >
        {customBg ? customBg.symbol : "⚔️"}
      </div>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center">
        
        {/* State Badge: Will of fire or active custom background lore */}
        {customBg ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2.5 mb-6 border px-4 py-1.5 rounded-full bg-white/2 backdrop-blur-md text-[10px] tracking-[0.25em] uppercase"
            style={{
              borderColor: `${customBg.color}30`,
              color: customBg.color
            }}
          >
            <ImageIcon size={12} /> THEME: {customBg.title}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onResetBg();
              }}
              className="ml-2 pl-2 border-l border-white/10 hover:text-white font-bold cursor-pointer"
            >
              RESET ✕
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.6, y: 0 }}
            className="flex items-center gap-2 mb-6 border border-white/10 px-4 py-1.5 rounded-full bg-white/2 backdrop-blur-md text-[10px] tracking-[0.25em] uppercase text-accent-gold"
          >
            <ShieldAlert size={12} className="text-accent-orange" /> WILL OF FIRE ENDURES
          </motion.div>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center select-none"
        >
          <h1 className="font-cinzel text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-[0.15em] leading-none mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            NARUTO
          </h1>
          <h2 
            className="font-cinzel text-xl md:text-3xl font-bold tracking-[0.4em] uppercase mb-8 transition-colors duration-1000"
            style={{
              color: customBg ? customBg.color : "#d62828",
              textShadow: customBg ? `0 0 15px ${customBg.color}50` : `0 0 10px rgba(214,40,40,0.3)`
            }}
          >
            {customBg ? customBg.title : "NINJA CHRONICLES"}
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins text-sm md:text-base text-white/80 max-w-xl leading-relaxed mb-10 text-center"
        >
          {customBg 
            ? customBg.description 
            : "Dive deep into the ultimate interactive archive of the Shinobi world. Explore legendary lineages, the chakra nature of hidden villages, and the ancient mysteries of the Tailed Beasts."}
        </motion.p>

        {/* Action Button */}
        <motion.button
          onClick={onExploreClick}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="glass-panel text-white font-cinzel text-sm tracking-widest px-8 py-4 rounded-full font-bold relative group overflow-hidden cursor-pointer"
          style={{
            borderColor: customBg ? `${customBg.color}50` : "rgba(214, 40, 40, 0.3)",
            boxShadow: customBg ? `0 0 20px ${customBg.color}15` : "0 0 15px rgba(214, 40, 40, 0.1)"
          }}
        >
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              backgroundImage: customBg 
                ? `linear-gradient(to right, ${customBg.color}, #ffb347)`
                : "linear-gradient(to right, #d62828, #ffb347)"
            }}
          />
          ENTER THE ROSTER ➔
        </motion.button>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/30 hover:text-white transition-colors cursor-pointer"
        onClick={onExploreClick}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
