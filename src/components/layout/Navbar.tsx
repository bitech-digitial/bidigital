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
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={
          scrolled || menuOpen
            ? {
                background: "rgba(5,8,20,0.85)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }
            : {}
        }
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 2px 10px rgba(99,102,241,0.4)",
              }}
            >
              <span
                className="text-white text-sm font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                B
              </span>
            </div>
            <span
              className="font-extrabold text-lg tracking-tight text-transparent bg-clip-text"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundImage: "linear-gradient(135deg, #f0f0ff, #818cf8)",
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
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#71717a",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e0e0ff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#71717a")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <CalButton className="text-sm px-5 py-2.5">
              Démarrer mon projet
            </CalButton>
          </div>

          {/* Burger — mobile only */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
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
                    background: "#a1a1aa",
                    transformOrigin: "center",
                    transition: "all 0.3s ease",
                    ...style,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen menu overlay */}
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
              background: "#050814",
              zIndex: 40,
              display: "flex",
              flexDirection: "column",
              paddingTop: 80,
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Nav links */}
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
                    color: "#e0e0ff",
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
                  <ArrowRight size={15} color="#52525b" />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="section-divider" style={{ margin: "16px 24px" }} />

            {/* CTAs */}
            <div style={{ marginTop: "auto", padding: "0 24px 40px" }}>
              <CalButton className="w-full justify-center py-4 text-base rounded-2xl">
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
              <p
                style={{
                  fontSize: 11,
                  color: "#52525b",
                  textAlign: "center",
                  marginTop: 16,
                }}
              >
                ✓ Satisfait ou remboursé · Réponse sous 2h
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
