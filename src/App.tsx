import { useState, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShinobiDirectory from "./sections/ShinobiDirectory";
import Clans from "./sections/Clans";
import Villages from "./sections/Villages";
import BijuuCodex from "./sections/BijuuCodex";
import Gallery from "./sections/Gallery";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

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

  // Monitor Active Sections for Navbar Highlighting
  useEffect(() => {
    if (loading) return;

    const sections = ["hero", "shinobi", "clans", "villages", "bijuu", "gallery"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const handleNavClick = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="bg-[#070707] text-white min-h-screen relative font-poppins selection:bg-accent-orange selection:text-white">
      {/* Premium custom mouse follow pointer */}
      <Cursor />

      {/* Responsive Glowing Navbar */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Sections */}
      <Hero onExploreClick={() => handleNavClick("shinobi")} />
      
      <ShinobiDirectory />
      
      <Clans />
      
      <Villages />
      
      <BijuuCodex />
      
      <Gallery />

      {/* Luxury Cinematic Footer */}
      <Footer />
    </div>
  );
}
