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

  const bar1Style = menuOpen
    ? { transform: "rotate(45deg) translateY(7px)" }
    : {};
  const bar2Style = menuOpen
    ? { opacity: 0, transform: "scaleX(0)" }
    : {};
  const bar3Style = menuOpen
    ? { transform: "rotate(-45deg) translateY(-7px)" }
    : {};

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
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
                backgroundImage: "linear-gradient(135deg, #0f172a, #2563eb)",
              }}
            >
              BiDigital
            </span>
          </a>

          {/* Desktop nav links — lg+ only */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#475569] hover:text-[#0f172a] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA — lg+ only */}
          <div className="hidden lg:flex items-center">
            <CalButton className="text-sm px-5 py-2.5">
              Démarrer mon projet
            </CalButton>
          </div>

          {/* Burger button — mobile only (< lg) */}
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
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {[bar1Style, bar2Style, bar3Style].map((style, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 20,
                    height: 2,
                    borderRadius: 2,
                    background: "#0f172a",
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

      {/* Full-screen menu overlay — mobile only */}
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
              background: "#ffffff",
              zIndex: 40,
              display: "flex",
              flexDirection: "column",
              paddingTop: 80,
            }}
          >
            {/* Nav links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "32px 24px 0" }}>
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
                    borderRadius: 16,
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#0f172a",
                    textDecoration: "none",
                    background: "transparent",
                    transition: "background 0.15s",
                    fontFamily: "var(--font-heading)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {link.label}
                  <ArrowRight size={16} color="#94a3b8" />
                </a>
              ))}
            </div>

            {/* Separator */}
            <div style={{ height: 1, background: "#f1f5f9", margin: "16px 24px" }} />

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
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  color: "#16a34a",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: 12,
                }}
              >
                <WhatsAppIcon size={18} />
                Nous écrire sur WhatsApp
              </a>

              <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", marginTop: 16 }}>
                ✓ Satisfait ou remboursé · Sites livrés en 72h
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
