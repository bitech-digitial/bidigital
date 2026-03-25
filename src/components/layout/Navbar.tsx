"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import CalButton from "@/components/ui/CalButton";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const navLinks = [
  { label: "Nos réalisations", href: "#exemples" },
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#processus" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const bar1Style = menuOpen ? { transform: "rotate(45deg) translateY(7px)" } : {};
  const bar2Style = menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {};
  const bar3Style = menuOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {};

  return (
    <>
      {/* Outer wrapper: full-width fixed, pointer-events-none so content is clickable */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{
          padding: scrolled ? "12px 16px 0" : "0",
          transition: "padding 0.35s ease",
        }}
      >
        {/* Inner pill nav */}
        <header
          className="pointer-events-auto mx-auto"
          style={{
            maxWidth: scrolled ? 896 : "100%",
            borderRadius: scrolled ? 18 : 0,
            background: scrolled || menuOpen ? "rgba(8,9,15,0.9)" : "transparent",
            backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
            boxShadow: scrolled
              ? "0 4px 24px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.07)"
              : "none",
            transition:
              "max-width 0.35s ease, border-radius 0.35s ease, background 0.3s ease, box-shadow 0.35s ease",
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo — texte seul sans icône */}
            <a
              href="#"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded-lg"
              aria-label="BiDigital — Accueil"
            >
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #f8fafc 0%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BiDigital
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded"
                  style={{ fontFamily: "var(--font-body)", color: "#64748b" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex flex-col items-center">
              <CalButton style={{ fontSize: 13, padding: "8px 16px", borderRadius: 10 }}>
                Parlons de votre projet
              </CalButton>
            </div>

            {/* Burger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 rounded-lg"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {[bar1Style, bar2Style, bar3Style].map((style, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      width: 20,
                      height: 2,
                      borderRadius: 2,
                      background: "#94a3b8",
                      transformOrigin: "center",
                      transition: "all 0.3s ease",
                      ...style,
                    }}
                  />
                ))}
              </button>
            </div>
          </nav>
        </header>
      </motion.div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              background: "#08090f",
              zIndex: 40,
              display: "flex",
              flexDirection: "column",
              paddingTop: 80,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "32px 24px 0" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    borderRadius: 14,
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#f8fafc",
                    textDecoration: "none",
                    background: "transparent",
                    border: "1px solid transparent",
                    transition: "all 0.15s",
                    fontFamily: "var(--font-heading)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                >
                  {link.label}
                  <ArrowRight size={15} color="#475569" />
                </a>
              ))}
            </div>

            <div className="section-divider" style={{ margin: "16px 24px" }} />

            <div style={{ marginTop: "auto", padding: "0 24px 40px" }}>
              <CalButton className="w-full justify-center" style={{ fontSize: 15, padding: "14px 20px", borderRadius: 16 }}>
                Prendre rendez-vous — gratuit
              </CalButton>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  padding: 16,
                  borderRadius: 16,
                  border: "1px solid rgba(74,222,128,0.2)",
                  background: "rgba(74,222,128,0.06)",
                  color: "#4ade80",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: 12,
                }}
              >
                <WhatsAppIcon size={18} />
                Nous écrire sur WhatsApp
              </a>
              <p style={{ fontSize: 11, color: "#334155", textAlign: "center", marginTop: 16 }}>
                ✓ Satisfait ou remboursé · Réponse sous 24h
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
