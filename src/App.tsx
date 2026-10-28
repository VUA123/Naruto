import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShinobiDirectory from "./sections/ShinobiDirectory";
import Clans from "./sections/Clans";
import Villages from "./sections/Villages";
import BijuuCodex from "./sections/BijuuCodex";
import Gallery, { GALLERY_ITEMS } from "./sections/Gallery";
import type { GalleryItem } from "./sections/Gallery";
import Mechanics from "./sections/Mechanics";
import Timeline from "./sections/Timeline";
import Dojutsu from "./sections/Dojutsu";
import JutsuLibrary from "./sections/JutsuLibrary";
import Battles from "./sections/Battles";
import Arsenal from "./sections/Arsenal";
import NotFound from "./sections/NotFound";
import Glossary from "./components/Glossary";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";

const HERO_BG_STORAGE_KEY = "ninja-hero-bg";
const DEFAULT_HERO_BG_ID = "valley";

function resolveHeroBg(id: string | null): GalleryItem | null {
  return (
    GALLERY_ITEMS.find((item) => item.id === id) ??
    GALLERY_ITEMS.find((item) => item.id === DEFAULT_HERO_BG_ID) ??
    null
  );
}

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
  const [customHeroBg, setCustomHeroBg] = useState<GalleryItem | null>(() => {
    try {
      return resolveHeroBg(localStorage.getItem(HERO_BG_STORAGE_KEY));
    } catch {
      return resolveHeroBg(DEFAULT_HERO_BG_ID);
    }
  });
  const navigate = useNavigate();

  const handleSelectHeroBg = (item: GalleryItem | null) => {
    setCustomHeroBg(item);
    try {
      if (item) {
        localStorage.setItem(HERO_BG_STORAGE_KEY, item.id);
      } else {
        localStorage.removeItem(HERO_BG_STORAGE_KEY);
      }
    } catch {
      // Storage can be unavailable (private mode / blocked cookies); the
      // selection still works for the current session.
    }
  };

  const handleResetHeroBg = () => {
    setCustomHeroBg(resolveHeroBg(DEFAULT_HERO_BG_ID));
    try {
      localStorage.removeItem(HERO_BG_STORAGE_KEY);
    } catch {
      // Ignore storage failures on reset.
    }
  };

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
                onResetBg={handleResetHeroBg}
              />
            } 
          />
          <Route path="/shinobi" element={<ShinobiDirectory />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/villages" element={<Villages />} />
          <Route path="/bijuu" element={<BijuuCodex />} />
          <Route path="/mechanics" element={<Mechanics />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/battles" element={<Battles />} />
          <Route path="/dojutsu" element={<Dojutsu />} />
          <Route path="/jutsu" element={<JutsuLibrary />} />
          <Route path="/arsenal" element={<Arsenal />} />
          <Route 
            path="/gallery" 
            element={
              <Gallery 
                onSelectBackground={handleSelectHeroBg} 
                activeBgId={customHeroBg ? customHeroBg.id : null}
              />
            } 
          />
          <Route path="*" element={<NotFound />} />
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
