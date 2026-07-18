import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ShieldAlert } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
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

    const colors = ["#ff7a18", "#ffb347", "#d62828", "#6d28d9"];

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
          y: Math.random() * canvas.height + canvas.height, // Start below or scattered
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
        
        // Add subtle radial shadow/glow to particles
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        
        // Move particle upwards
        p.y += p.speedY;
        p.x += p.speedX;
        
        // Reset when moving off screen top
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      
      ctx.shadowBlur = 0; // reset
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
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-[#070707] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* HTML5 Dynamic Chakra Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 max-w-5xl flex flex-col items-center">
        {/* Subtle decorative scroll element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-6 border border-white/10 px-4 py-1.5 rounded-full bg-white/2 backdrop-blur-md text-[10px] tracking-[0.25em] uppercase text-accent-gold"
        >
          <ShieldAlert size={12} className="text-accent-orange" /> WILL OF FIRE ENDURES
        </motion.div>

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
          <h2 className="font-cinzel text-xl md:text-3xl text-accent-orange font-bold tracking-[0.4em] uppercase mb-8 drop-shadow-[0_0_10px_rgba(255,122,24,0.3)]">
            NINJA CHRONICLES
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins text-sm md:text-base text-white/80 max-w-xl leading-relaxed mb-10 text-center"
        >
          Dive deep into the ultimate interactive archive of the Shinobi world. Explore legendary lineages, the chakra nature of hidden villages, and the ancient mysteries of the Tailed Beasts.
        </motion.p>

        {/* Action Button */}
        <motion.button
          onClick={onExploreClick}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 122, 24, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="glass-panel border-accent-orange/30 text-white font-cinzel text-sm tracking-widest px-8 py-4 rounded-full font-bold relative group overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(255,122,24,0.1)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
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
