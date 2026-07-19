import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Refs for Web Audio API nodes to modify sound dynamically
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);
  const chimeTimerRef = useRef<number | null>(null);
  const droneIntervalRef = useRef<any | null>(null);

  // Japanese In Sen pentatonic scale frequencies (chime notes)
  const PENTATONIC_SCALE = [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 466.16, 523.25];

  const startAmbiance = () => {
    try {
      // 1. Initialize Audio Context
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // 2. Create Drone (Atmospheric physical energy)
      const osc = ctx.createOscillator();
      const lowpass = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.value = 110; // Low A drone

      lowpass.type = "lowpass";
      lowpass.frequency.value = 220; // Filter high harmonics for warmth

      gain.gain.value = 0.04; // Very quiet background drone

      // Connect nodes
      osc.connect(lowpass);
      lowpass.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      
      droneOscRef.current = osc;
      droneGainRef.current = gain;

      // Slowly modulate drone volume slightly over time for an organic "breathing" feel
      let angle = 0;
      droneIntervalRef.current = setInterval(() => {
        if (!droneGainRef.current || ctx.state === "suspended") return;
        angle += 0.05;
        // Volume oscillates between 0.02 and 0.05
        droneGainRef.current.gain.setValueAtTime(0.03 + Math.sin(angle) * 0.01, ctx.currentTime);
      }, 100);

      // 3. Create Wind Chimes (Temple chimes randomly triggering)
      const triggerChime = () => {
        if (ctx.state === "suspended") return;

        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        const chimeFilter = ctx.createBiquadFilter();

        // Pick random frequency from the traditional scale (high register)
        const baseFreq = PENTATONIC_SCALE[Math.floor(Math.random() * PENTATONIC_SCALE.length)];
        chimeOsc.type = "sine";
        chimeOsc.frequency.value = baseFreq * 2; // Move up an octave for chime register

        chimeFilter.type = "bandpass";
        chimeFilter.frequency.value = baseFreq * 2;
        chimeFilter.Q.value = 10;

        chimeGain.gain.setValueAtTime(0, ctx.currentTime);
        // Exponential decay envelope (soft hammer strike, slow decay)
        chimeGain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.05);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0);

        chimeOsc.connect(chimeFilter);
        chimeFilter.connect(chimeGain);
        chimeGain.connect(ctx.destination);

        chimeOsc.start();
        chimeOsc.stop(ctx.currentTime + 3.2);

        // Schedule next chime strike randomly between 3 to 8 seconds
        const nextDelay = 3000 + Math.random() * 5000;
        chimeTimerRef.current = window.setTimeout(triggerChime, nextDelay);
      };

      // Start chime loop after a short delay
      chimeTimerRef.current = window.setTimeout(triggerChime, 2000);

    } catch (err) {
      console.warn("Web Audio API failed to load", err);
    }
  };

  const stopAmbiance = () => {
    // Stop oscillators and chimes
    if (droneOscRef.current) {
      try {
        droneOscRef.current.stop();
      } catch (e) {}
      droneOscRef.current = null;
    }
    if (droneIntervalRef.current) {
      clearInterval(droneIntervalRef.current);
      droneIntervalRef.current = null;
    }
    if (chimeTimerRef.current) {
      clearTimeout(chimeTimerRef.current);
      chimeTimerRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
  };

  const handleToggle = () => {
    if (isPlaying) {
      stopAmbiance();
      setIsPlaying(false);
    } else {
      startAmbiance();
      setIsPlaying(true);
    }
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      stopAmbiance();
    };
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className={`fixed bottom-6 left-6 z-30 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer border group transition-all duration-300 ${
        isPlaying
          ? "bg-[#111111]/80 border-accent-orange/40 text-accent-orange shadow-[0_0_15px_rgba(255,122,24,0.15)]"
          : "bg-[#111111]/80 border-white/5 text-white/50 hover:text-white"
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 size={22} className="animate-pulse" />
          <span className="absolute w-full h-full rounded-full border border-accent-orange/30 animate-ping opacity-20 pointer-events-none" />
        </>
      ) : (
        <VolumeX size={22} />
      )}
      <span className="absolute -top-10 left-0 bg-[#111111]/90 backdrop-blur border border-white/10 px-3 py-1 rounded text-[9px] tracking-widest font-cinzel text-accent-gold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {isPlaying ? "Mute Ambiance" : "Play Ambiance"}
      </span>
    </motion.button>
  );
}
