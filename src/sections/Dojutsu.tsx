import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, RefreshCw, Zap } from "lucide-react";

interface DojutsuStage {
  id: string;
  name: string;
  japanese: string;
  description: string;
  abilities: string[];
  color: string;
  // Custom render parameters for SVG
  eyeType: "sharingan" | "mangekyo" | "eternal" | "rinnegan" | "byakugan";
  tomoeCount?: number;
  patternSvg?: () => any;
}

const DOJUTSU_STAGES: DojutsuStage[] = [
  {
    id: "sharingan1",
    name: "1-Tomoe Sharingan",
    japanese: "写輪眼 (一巴)",
    description: "The initial awakening of the Sharingan, triggered by extreme emotional distress. It grants the user a fraction of the bloodline's visual capabilities, allowing them to track high-speed movements slightly and sense chakra flow.",
    abilities: ["Improved kinetic vision", "Ability to see chakra as a color", "Track basic hand signs"],
    color: "#ff3e3e",
    eyeType: "sharingan",
    tomoeCount: 1
  },
  {
    id: "sharingan2",
    name: "2-Tomoe Sharingan",
    japanese: "写輪眼 (二巴)",
    description: "The matured first-stage eye. The user can easily read hand signs, copy basic enemy physical movements, and predict simple trajectories. It increases general combat capabilities immensely.",
    abilities: ["Predict physical attacks", "Copy hand signs and simple techniques", "Pierces basic Genjutsu illusions"],
    color: "#ff3e3e",
    eyeType: "sharingan",
    tomoeCount: 2
  },
  {
    id: "sharingan3",
    name: "3-Tomoe Sharingan",
    japanese: "写輪眼 (三巴)",
    description: "The fully matured standard Sharingan. The user's dynamic kinetic tracking reaches its pinnacle, allowing them to predict movements flawlessly and cast powerful Genjutsu illusions with a simple gaze.",
    abilities: ["Perfect movement prediction", "Cast visual Genjutsu (illusions)", "Copy complex Ninjutsu & Taijutsu"],
    color: "#ff3e3e",
    eyeType: "sharingan",
    tomoeCount: 3
  },
  {
    id: "mangekyo",
    name: "Mangekyō Sharingan",
    japanese: "万華鏡写輪眼",
    description: "An advanced, legendary awakening triggered by the trauma of experiencing the loss of a loved one. It morphs the pupil into a unique pinwheel shape and unlocks god-like techniques, but slowly blinds the user with each activation.",
    abilities: ["Unlocks Amaterasu (black flames)", "Unlocks Tsukuyomi (ultimate illusion)", "Allows summoning of spectral Susano'o armor"],
    color: "#e11d48",
    eyeType: "mangekyo",
    patternSvg: () => (
      // Itachi's three-spoked curved pinwheel
      <g>
        <path d="M 0,0 Q -15,-20 -35,-20 Q -25,0 0,0" fill="#000000" />
        <path d="M 0,0 Q 20,-15 20,-35 Q 0,-25 0,0" fill="#000000" transform="rotate(120)" />
        <path d="M 0,0 Q 15,20 35,20 Q 25,0 0,0" transform="rotate(240)" fill="#000000" />
      </g>
    )
  },
  {
    id: "eternal",
    name: "Eternal Mangekyō",
    japanese: "永遠の万華鏡写輪眼",
    description: "Achieved by transplanting the Mangekyō Sharingan of a close blood relative (like a sibling). This fuses the eye designs and permanently cures the blindness side-effects, allowing infinite use of god-tier techniques.",
    abilities: ["Permanently prevents blindness", "Unlocks Perfect Form Susano'o (colossal samurai)", "Reduces chakra consumption of ocular arts"],
    color: "#be123c",
    eyeType: "eternal",
    patternSvg: () => (
      // Sasuke's overlapping star & pinwheel
      <g>
        {/* Star */}
        <polygon points="0,-42 12,-12 42,0 12,12 0,42 -12,12 -42,0 -12,-12" fill="#000000" />
        {/* Overlapping thick ring inside */}
        <circle cx="0" cy="0" r="15" fill="none" stroke="#be123c" strokeWidth="4" />
        <circle cx="0" cy="0" r="8" fill="#000000" />
      </g>
    )
  },
  {
    id: "rinnegan",
    name: "The Rinnegan",
    japanese: "輪廻眼",
    description: "The 'Samsara Eye'—the ultimate evolution of visual prowess. It is characterized by concentric purple ripples. The Rinnegan grants god-like control over space, gravity, souls, and reanimation, and is said to appear in times of global creation or destruction.",
    abilities: ["Mastery of all 5 basic Chakra Natures", "The Six Paths powers (Gravity push/pull, soul extraction, tech absorption)", "Teleportation & Dimension-shifting"],
    color: "#a78bfa",
    eyeType: "rinnegan"
  }
];

export default function Dojutsu() {
  const [activeStage, setActiveStage] = useState<DojutsuStage>(DOJUTSU_STAGES[0]);
  const [byakuganActive, setByakuganActive] = useState(false);

  // Render Tomoe marks for standard sharingan
  const renderTomoe = (count: number) => {
    const tomoes = [];
    // Positions at angles for 1, 2, or 3 tomoe
    const angles = [0, 120, 240];
    const renderCount = Math.min(count, 3);

    for (let i = 0; i < renderCount; i++) {
      tomoes.push(
        <g key={i} transform={`rotate(${angles[i]}) translate(0, -25)`}>
          {/* Main comma head */}
          <circle cx="0" cy="0" r="5" fill="#000000" />
          {/* Curved tail */}
          <path d="M 0,0 Q -4,5 -8,2 Q -4,0 0,0" fill="#000000" stroke="#000000" strokeWidth="1" />
        </g>
      );
    }
    return tomoes;
  };

  return (
    <section id="dojutsu" className="py-24 px-6 md:px-12 bg-[#070707] relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-cinzel text-accent-orange tracking-[0.3em] uppercase block mb-3">
            Kekkei Genkai Dossier
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            VISUAL PROWESS: DŌJUTSU
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            The Ninja world is filled with hereditary visual mutations called Dōjutsu. These eyes grant absolute combat, kinetic, and spiritual advantages.
          </p>
        </div>

        {/* Section 1: The Sharingan Evolution Simulator */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-cinzel text-accent-gold tracking-widest uppercase block mb-2">
              01 ➔ Interactive Training Ground
            </span>
            <h3 className="text-3xl font-bold font-cinzel text-white tracking-wider">
              SHARĪNGAN EVOLUTION SIMULATOR
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#111111]/30 p-8 rounded-3xl border border-white/5">
            {/* Visual Eye Display (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-white/5 bg-[#111111] flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.01)] overflow-hidden">
                {/* Bulging veins effect when eye is high register */}
                {activeStage.id !== "sharingan1" && (
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff0000_1px,transparent_1px)] [background-size:12px_16px] pointer-events-none" />
                )}

                {/* Animated Eye Graphic */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: activeStage.eyeType === "rinnegan" ? 40 : 15, ease: "linear" }}
                  className="w-56 h-56 rounded-full border-4 border-black relative flex items-center justify-center shadow-inner cursor-pointer"
                  style={{
                    backgroundColor: activeStage.eyeType === "rinnegan" ? "#7c3aed" : "#ff1e1e",
                    boxShadow: `0 0 35px ${activeStage.color}40, inset 0 0 25px rgba(0,0,0,0.8)`,
                    borderColor: "#111111"
                  }}
                >
                  {/* Rinnegan Ripple Circles */}
                  {activeStage.eyeType === "rinnegan" && (
                    <>
                      <circle cx="28" cy="28" r="100" fill="none" stroke="#000" strokeWidth="2" className="absolute" style={{ transform: "translate(0, 0)" }} />
                      <circle cx="28" cy="28" r="80" fill="none" stroke="#000" strokeWidth="2" className="absolute" />
                      <circle cx="28" cy="28" r="60" fill="none" stroke="#000" strokeWidth="2" className="absolute" />
                      <circle cx="28" cy="28" r="40" fill="none" stroke="#000" strokeWidth="2" className="absolute" />
                      <circle cx="28" cy="28" r="20" fill="none" stroke="#000" strokeWidth="2" className="absolute" />
                    </>
                  )}

                  {/* Standard Sharingan center pupil ring and tomoe */}
                  {activeStage.eyeType === "sharingan" && (
                    <>
                      {/* Faint internal iris circle */}
                      <circle cx="112" cy="112" r="25" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" className="absolute" />
                      {/* Render Tomoes */}
                      <svg className="absolute w-full h-full" viewBox="-56 -56 112 112">
                        {renderTomoe(activeStage.tomoeCount || 1)}
                      </svg>
                    </>
                  )}

                  {/* Mangekyō/Eternal Custom Pattern */}
                  {(activeStage.eyeType === "mangekyo" || activeStage.eyeType === "eternal") && activeStage.patternSvg && (
                    <svg className="absolute w-full h-full scale-110" viewBox="-56 -56 112 112">
                      {activeStage.patternSvg()}
                    </svg>
                  )}

                  {/* Black Central Pupil */}
                  <div className="w-10 h-10 rounded-full bg-[#000000] border-2 border-black z-10 shadow-lg" />
                </motion.div>
              </div>

              {/* Action hints */}
              <div className="mt-4 flex gap-1.5 items-center text-[10px] font-cinzel text-white/30 tracking-widest uppercase">
                <RefreshCw size={10} className="animate-spin-slow" /> Pupil spins in combat register
              </div>
            </div>

            {/* Stepper & Details Showcase (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full gap-6">
              
              {/* Stepper Selection */}
              <div className="flex flex-wrap gap-1.5 border-b border-white/5 pb-6">
                {DOJUTSU_STAGES.map((stage) => {
                  const isSelected = activeStage.id === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(stage)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-cinzel tracking-wider uppercase font-semibold border transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-rose-500/10 border-rose-500 text-rose-400 font-bold"
                          : "bg-[#111111] border-white/5 text-white/50 hover:text-white"
                      }`}
                    >
                      {stage.name.split(" ")[0]}
                    </button>
                  );
                })}
              </div>

              {/* Dossier info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <span
                      className="text-[10px] font-cinzel tracking-[0.2em] font-black block mb-1"
                      style={{ color: activeStage.color }}
                    >
                      {activeStage.japanese.toUpperCase()}
                    </span>
                    <h4 className="font-cinzel text-2xl font-black text-white tracking-wider uppercase">
                      {activeStage.name}
                    </h4>
                  </div>

                  <p className="text-xs text-white/60 font-poppins leading-relaxed">
                    {activeStage.description}
                  </p>

                  <div className="border-t border-white/5 pt-4 space-y-2">
                    <span className="text-[10px] font-cinzel text-accent-gold tracking-widest block uppercase mb-1.5 flex items-center gap-1.5">
                      <Zap size={12} className="text-accent-gold" /> Unlocked Abilities
                    </span>
                    {activeStage.abilities.map((ability, index) => (
                      <div key={index} className="flex gap-2 items-center text-xs text-white/40 font-poppins">
                        <span style={{ color: activeStage.color }} className="text-sm font-black">•</span>
                        <span>{ability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Section 2: The Byakugan (Bloodline of Hyuga) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <span className="text-xs font-cinzel text-accent-gold tracking-widest uppercase block">
              02 ➔ The Gentle Visual Sight
            </span>
            <h3 className="text-3xl font-bold font-cinzel text-white tracking-wider uppercase">
              THE BYAKUGAN (ALL-SEEING WHITE EYE)
            </h3>
            <p className="text-xs text-white/60 font-poppins leading-relaxed">
              Passed down exclusively through the noble Hyūga Clan, the Byakugan is easily recognized by its pale, lavender-white, featureless iris. When activated, the blood pathways and blood vessels around the temples bulge intensely.
            </p>
            <p className="text-xs text-white/50 font-poppins leading-relaxed">
              Unlike the predictive, genjutsu-focused Sharingan, the Byakugan grants absolute, high-fidelity sensory perception:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/2 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-cinzel text-white font-bold tracking-wider mb-1 uppercase flex items-center gap-1.5">
                  <Eye size={12} className="text-[#bfdbfe]" /> 360-degree Vision
                </h4>
                <p className="text-[11px] text-white/40 font-poppins">
                  Provides a complete spherical field of vision, allowing the user to see behind them, with only a tiny, needle-thin blind spot near the back of the neck.
                </p>
              </div>

              <div className="bg-white/2 rounded-xl p-4 border border-white/5">
                <h4 className="text-xs font-cinzel text-white font-bold tracking-wider mb-1 uppercase flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#bfdbfe]" /> Chakra Path Vision
                </h4>
                <p className="text-[11px] text-white/40 font-poppins">
                  Can see through solid barriers, track targets across miles, and visually map out the opponent's entire internal Chakra Pathway System, including all 361 pressure points (Tenketsu).
                </p>
              </div>
            </div>

            {/* Interactive activate button */}
            <button
              onClick={() => setByakuganActive(!byakuganActive)}
              className={`px-6 py-2.5 rounded-full border text-xs font-cinzel tracking-widest uppercase font-bold cursor-pointer transition-colors shadow-lg ${
                byakuganActive
                  ? "bg-[#bfdbfe]/15 border-[#bfdbfe] text-[#bfdbfe]"
                  : "bg-white/5 border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {byakuganActive ? "✔ Byakugan Active" : "Activate Byakugan"}
            </button>
          </div>

          {/* Byakugan Art (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="w-72 h-72 rounded-full border border-white/5 bg-[#111111] flex items-center justify-center relative overflow-hidden">
              
              {/* Vein lines radiating outwards when active */}
              {byakuganActive && (
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  {/* Diagonal vein lines */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <line x1="10" y1="10" x2="40" y2="40" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="90" y1="10" x2="60" y2="40" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="10" y1="90" x2="40" y2="60" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" />
                    <line x1="90" y1="90" x2="60" y2="60" stroke="#fff" strokeWidth="1" strokeDasharray="2,2" />
                  </svg>
                </div>
              )}

              {/* Byakugan Eye */}
              <motion.div
                animate={byakuganActive ? { scale: [1, 1.03, 1] } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-56 h-56 rounded-full border-4 border-black relative flex items-center justify-center transition-all duration-500"
                style={{
                  backgroundColor: byakuganActive ? "#e0f2fe" : "#f1f5f9",
                  boxShadow: byakuganActive
                    ? "0 0 35px rgba(191,219,254,0.3), inset 0 0 25px rgba(255,255,255,1)"
                    : "inset 0 0 20px rgba(0,0,0,0.1)",
                  borderColor: "#111111"
                }}
              >
                {/* Faint Pupil ring */}
                <div
                  className={`rounded-full border border-dashed transition-all duration-500 ${
                    byakuganActive ? "w-14 h-14 border-[#3b82f6]/20" : "w-10 h-10 border-black/5"
                  }`}
                />
                {/* Central Soft Pale Iris */}
                <div
                  className={`absolute rounded-full transition-all duration-500 ${
                    byakuganActive ? "w-8 h-8 bg-[#bfdbfe]" : "w-6 h-6 bg-white"
                  }`}
                  style={{
                    boxShadow: byakuganActive ? "0 0 10px rgba(255,255,255,0.8)" : "none"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
