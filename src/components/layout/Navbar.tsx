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

const BiDigitalLogo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="BiDigital"
    style={{ borderRadius: 10, flexShrink: 0 }}
  >
    <rect width="100" height="100" rx="22" fill="#0d0e20" />
    <circle cx="22" cy="22" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="50" cy="22" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="78" cy="22" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="22" cy="50" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="78" cy="50" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="22" cy="78" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="50" cy="78" r="2.5" fill="#6366f1" opacity="0.25" />
    <circle cx="78" cy="78" r="2.5" fill="#6366f1" opacity="0.25" />
    <rect x="28" y="26" width="6" height="48" rx="3" fill="url(#nl1)" />
    <path
      d="M34 26 L52 26 Q64 26 64 38 Q64 50 52 50 L34 50"
      stroke="url(#nl1)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M34 50 L54 50 Q68 50 68 62 Q68 74 54 74 L34 74"
      stroke="url(#nl2)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="nl1" x1="28" y1="26" x2="68" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="nl2" x1="28" y1="50" x2="68" y2="74" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
        style={
          scrolled || menuOpen
            ? {
                background: "rgba(8,9,15,0.95)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }
            : {}
        }
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="BiDigital — Accueil">
            <BiDigitalLogo />
            <span
              className="font-extrabold text-lg tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #f8fafc, #818cf8)",
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
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", color: "#64748b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <CalButton className="text-sm px-5 py-2.5">
              Prendre rendez-vous
            </CalButton>
          </div>

          {/* Burger */}
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
      </motion.header>

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
              <p style={{ fontSize: 11, color: "#334155", textAlign: "center", marginTop: 16 }}>
                ✓ Satisfait ou remboursé · Réponse sous 2h
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
