import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "shinobi", label: "Shinobi" },
  { id: "clans", label: "Clans" },
  { id: "villages", label: "Villages" },
  { id: "bijuu", label: "Bijuu Codex" },
  { id: "gallery", label: "Gallery" }
];

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#070707]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick("hero");
            }}
            className="flex items-center gap-3 group"
          >
            <span className="font-cinzel text-accent-orange font-black text-2xl tracking-wider transition-all duration-300 group-hover:text-accent-gold drop-shadow-[0_0_10px_rgba(255,122,24,0.3)]">
              NINJA
            </span>
            <span className="font-cinzel text-white text-base tracking-[0.25em] border-l border-white/20 pl-3">
              CHRONICLES
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.id);
                  }}
                  className={`font-cinzel text-sm tracking-widest uppercase transition-colors relative py-2 ${
                    activeSection === item.id
                      ? "text-accent-orange font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-orange to-accent-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-accent-orange transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-[#070707] z-30 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <ul className="flex flex-col gap-8 text-center">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.id);
                    }}
                    className={`font-cinzel text-xl tracking-widest uppercase block ${
                      activeSection === item.id
                        ? "text-accent-orange font-bold drop-shadow-[0_0_8px_rgba(255,122,24,0.3)]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
