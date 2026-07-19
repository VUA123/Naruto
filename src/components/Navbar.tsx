import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const PRIMARY_NAV_ITEMS = [
  { id: "/", label: "Home" },
  { id: "/shinobi", label: "Shinobi" },
  { id: "/timeline", label: "History" }
];

const COMPENDIUM_NAV_ITEMS = [
  { id: "/clans", label: "Clans" },
  { id: "/villages", label: "Villages" },
  { id: "/bijuu", label: "Bijuu Codex" },
  { id: "/mechanics", label: "Chakra & Jutsu" },
  { id: "/dojutsu", label: "Eye Techniques" },
  { id: "/jutsu", label: "Jutsu Library" },
  { id: "/gallery", label: "Gallery" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if any compendium route is currently active
  const isCompendiumActive = COMPENDIUM_NAV_ITEMS.some(item => item.id === activePath);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled || activePath !== "/"
            ? "bg-[#070707]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group"
          >
            <span className="font-cinzel text-accent-orange font-black text-2xl tracking-wider transition-all duration-300 group-hover:text-accent-gold drop-shadow-[0_0_10px_rgba(255,122,24,0.3)]">
              NINJA
            </span>
            <span className="font-cinzel text-white text-base tracking-[0.25em] border-l border-white/20 pl-3">
              CHRONICLES
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    className={`font-cinzel text-sm tracking-widest uppercase transition-colors relative py-2 ${
                      activePath === item.id
                        ? "text-accent-orange font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activePath === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-orange to-accent-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}

              {/* Compendium Dropdown Trigger */}
              <li
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="relative"
              >
                <button
                  className={`font-cinzel text-sm tracking-widest uppercase transition-colors py-2 flex items-center gap-1.5 cursor-pointer ${
                    isCompendiumActive || dropdownOpen
                      ? "text-accent-orange font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <BookOpen size={14} />
                  Compendium
                  <motion.div
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                  {isCompendiumActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-orange to-accent-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-2 w-56 bg-[#070707]/95 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex flex-col gap-1"
                    >
                      {COMPENDIUM_NAV_ITEMS.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.id}
                            onClick={() => setDropdownOpen(false)}
                            className={`font-cinzel text-xs tracking-widest uppercase block px-4 py-2.5 rounded-xl transition-all ${
                              activePath === subItem.id
                                ? "bg-accent-orange/10 text-accent-orange font-bold border-l-2 border-accent-orange pl-3.5"
                                : "text-white/65 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>

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
            className="fixed inset-0 top-[72px] bg-[#070707] z-30 flex flex-col items-center justify-center p-6 md:hidden overflow-y-auto"
          >
            {/* Scrollable container for mobile menu links */}
            <ul className="flex flex-col gap-5 text-center py-8">
              {/* Primary links */}
              {PRIMARY_NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link
                    to={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-cinzel text-lg tracking-widest uppercase block ${
                      activePath === item.id
                        ? "text-accent-orange font-bold drop-shadow-[0_0_8px_rgba(255,122,24,0.3)]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              <div className="w-12 h-[1px] bg-white/10 mx-auto my-1" />

              {/* Compendium section header */}
              <span className="text-[10px] font-cinzel text-accent-gold/40 tracking-[0.25em] uppercase block">
                Shinobi Archive
              </span>

              {/* Compendium sub-links */}
              {COMPENDIUM_NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (PRIMARY_NAV_ITEMS.length + index) * 0.03 }}
                >
                  <Link
                    to={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-cinzel text-sm tracking-wider uppercase block ${
                      activePath === item.id
                        ? "text-accent-orange font-bold drop-shadow-[0_0_8px_rgba(255,122,24,0.3)]"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
