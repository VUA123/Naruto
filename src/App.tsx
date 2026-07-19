import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShinobiDirectory from "./sections/ShinobiDirectory";
import Clans from "./sections/Clans";
import Villages from "./sections/Villages";
import BijuuCodex from "./sections/BijuuCodex";
import Gallery from "./sections/Gallery";
import type { GalleryItem } from "./sections/Gallery";
import Mechanics from "./sections/Mechanics";
import Timeline from "./sections/Timeline";
import Glossary from "./components/Glossary";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";

// Utility component to reset scroll position on route transitions
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [customHeroBg, setCustomHeroBg] = useState<GalleryItem | null>(null);
  const navigate = useNavigate();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="bg-[#070707] text-white min-h-screen relative font-poppins selection:bg-accent-orange selection:text-white">
      {/* Premium custom mouse follow pointer */}
      <Cursor />

      {/* Responsive Glowing Navbar */}
      <Navbar />

      {/* Reset scroll on route change */}
      <ScrollToTop />

      {/* Render Main Section Routes */}
      <main className="pt-20"> {/* Add top padding for fixed navbar */}
        <Routes>
          <Route 
            path="/" 
            element={
              <Hero 
                onExploreClick={() => navigate("/shinobi")} 
                customBg={customHeroBg}
                onResetBg={() => setCustomHeroBg(null)}
              />
            } 
          />
          <Route path="/shinobi" element={<ShinobiDirectory />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/villages" element={<Villages />} />
          <Route path="/bijuu" element={<BijuuCodex />} />
          <Route path="/mechanics" element={<Mechanics />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route 
            path="/gallery" 
            element={
              <Gallery 
                onSelectBackground={setCustomHeroBg} 
                activeBgId={customHeroBg ? customHeroBg.id : null}
              />
            } 
          />
        </Routes>
      </main>

      {/* Persistent global Glossary dictionary helper */}
      <Glossary />

      {/* Persistent global Audio Ambiance synthesizer */}
      <AudioPlayer />

      {/* Luxury Cinematic Footer */}
      <Footer />
    </div>
  );
}
