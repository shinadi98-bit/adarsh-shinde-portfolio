"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Resumes",    href: "#resumes"    },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,      setMenuOpen]      = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05070A]/90 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-lg text-white tracking-tight hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            AS<span className="text-cyan-400">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active ? "text-cyan-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollTo("#resumes")}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer"
          >
            Resume Versions
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#05070A]/98 backdrop-blur-xl border-b border-white/8 md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                    activeSection === link.href.slice(1)
                      ? "text-cyan-400 bg-cyan-500/8"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#resumes")}
                className="mt-2 px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium text-center cursor-pointer"
              >
                Resume Versions
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
