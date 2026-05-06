"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import CalButton from "@/components/ui/CalButton";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

// ── Data ─────────────────────────────────────────────────────────────────────

const expertisesColumns = [
  {
    title: "Création de sites",
    items: [
      { label: "Site vitrine", href: "#" },
      { label: "Site e-commerce", href: "#" },
      { label: "Site de réservation", href: "#" },
    ],
  },
  {
    title: "Visibilité",
    items: [
      { label: "Référencement SEO", href: "#" },
      { label: "Référencement SEA", href: "#" },
    ],
  },
];

const secteurItems = [
  { label: "Bâtiment / Artisan", href: "#" },
  { label: "Commerce", href: "#" },
  { label: "Restauration", href: "#" },
  { label: "Agriculture", href: "#" },
  { label: "Hébergement", href: "#" },
  { label: "Beauté / Bien-être", href: "#" },
  { label: "Taxi / VTC", href: "#" },
  { label: "Automobile", href: "#" },
  { label: "Services", href: "#" },
];

const dropdownPanelStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#FFFFFF",
  border: "1px solid #e1eaf5",
  borderRadius: 16,
  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  zIndex: 100,
};

// ── Dropdown Panels ───────────────────────────────────────────────────────────

function ExpertisesPanel() {
  return (
    <div style={{ display: "flex", gap: 32, padding: "20px 24px" }}>
      {expertisesColumns.map((col) => (
        <div key={col.title} style={{ minWidth: 160 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: "#0077B6",
            textTransform: "uppercase", letterSpacing: "0.08em",
            marginBottom: 10, fontFamily: "var(--font-body)",
          }}>
            {col.title}
          </p>
          {col.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "block", padding: "7px 10px", borderRadius: 8,
                fontSize: 14, color: "#1a2a4a", textDecoration: "none",
                fontFamily: "var(--font-body)", transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0077B6";
                e.currentTarget.style.background = "rgba(0,119,182,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1a2a4a";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

function SecteurPanel() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
      gap: 4, padding: "16px 20px", minWidth: 380,
    }}>
      {secteurItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          style={{
            display: "block", padding: "8px 12px", borderRadius: 8,
            fontSize: 13, color: "#1a2a4a", textDecoration: "none",
            fontFamily: "var(--font-body)", transition: "all 0.15s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#0077B6";
            e.currentTarget.style.background = "rgba(0,119,182,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#1a2a4a";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenAccordion(null);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeMenu(); setOpenDropdown(null); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const bar1Style = menuOpen ? { transform: "rotate(45deg) translateY(7px)" } : {};
  const bar2Style = menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {};
  const bar3Style = menuOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {};

  return (
    <>
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
        <header
          className="pointer-events-auto mx-auto"
          style={{
            maxWidth: scrolled ? 896 : "100%",
            borderRadius: scrolled ? 18 : 0,
            background: scrolled || menuOpen ? "rgba(255,255,255,0.95)" : "transparent",
            backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
            boxShadow: scrolled
              ? "0 4px 24px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(0,0,0,0.04)"
              : "none",
            transition:
              "max-width 0.35s ease, border-radius 0.35s ease, background 0.3s ease, box-shadow 0.35s ease",
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6]/40 rounded-lg"
              aria-label="BiDigital — Accueil"
            >
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #03045E 0%, #0077B6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BiDigital
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {/* Nos expertises */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => openMenu("expertises")}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "expertises"}
                  className="flex items-center gap-1 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: openDropdown === "expertises" ? "#03045E" : "#4a6080",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    transition: "color 0.2s",
                  }}
                >
                  Nos expertises
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s",
                      transform: openDropdown === "expertises" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "expertises" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      style={dropdownPanelStyle}
                      onMouseEnter={() => openMenu("expertises")}
                      onMouseLeave={scheduleClose}
                    >
                      <ExpertisesPanel />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Votre secteur */}
              <div
                style={{ position: "relative" }}
                onMouseEnter={() => openMenu("secteur")}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "secteur"}
                  className="flex items-center gap-1 text-sm focus:outline-none"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: openDropdown === "secteur" ? "#03045E" : "#4a6080",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    transition: "color 0.2s",
                  }}
                >
                  Votre secteur
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s",
                      transform: openDropdown === "secteur" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openDropdown === "secteur" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      style={dropdownPanelStyle}
                      onMouseEnter={() => openMenu("secteur")}
                      onMouseLeave={scheduleClose}
                    >
                      <SecteurPanel />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nos réalisations */}
              <a
                href="#exemples"
                className="text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6]/40 rounded"
                style={{ fontFamily: "var(--font-body)", color: "#4a6080", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#03045E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4a6080")}
              >
                Nos réalisations
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <CalButton style={{ fontSize: 13, padding: "8px 18px", borderRadius: 10 }}>
                Lancer mon projet
              </CalButton>
            </div>

            {/* Burger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6]/40 rounded-lg"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "transparent", border: "1px solid rgba(0,0,0,0.08)",
                  cursor: "pointer", padding: 8,
                  display: "flex", flexDirection: "column",
                  justifyContent: "center", alignItems: "center",
                  gap: 5, transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,119,182,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {[bar1Style, bar2Style, bar3Style].map((style, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block", width: 20, height: 2,
                      borderRadius: 2, background: "#03045E",
                      transformOrigin: "center", transition: "all 0.3s ease",
                      ...style,
                    }}
                  />
                ))}
              </button>
            </div>
          </nav>
        </header>
      </motion.div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed", inset: 0, background: "#FFFFFF",
              zIndex: 40, display: "flex", flexDirection: "column",
              paddingTop: 80, overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "32px 24px 0" }}>
              {/* Nos expertises accordion */}
              <div>
                <button
                  aria-expanded={openAccordion === "expertises"}
                  onClick={() => setOpenAccordion(openAccordion === "expertises" ? null : "expertises")}
                  style={{
                    display: "flex", width: "100%", alignItems: "center",
                    justifyContent: "space-between", padding: "16px 20px",
                    borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#03045E",
                    background: "transparent", border: "1px solid transparent",
                    cursor: "pointer", fontFamily: "var(--font-heading)", transition: "all 0.15s",
                  }}
                >
                  Nos expertises
                  <ChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.2s",
                      transform: openAccordion === "expertises" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openAccordion === "expertises" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden", paddingLeft: 20 }}
                    >
                      {expertisesColumns.map((col) => (
                        <div key={col.title} style={{ marginBottom: 12 }}>
                          <p style={{
                            fontSize: 11, fontWeight: 700, color: "#0077B6",
                            textTransform: "uppercase", letterSpacing: "0.08em",
                            marginBottom: 6, fontFamily: "var(--font-body)",
                          }}>
                            {col.title}
                          </p>
                          {col.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => closeMenu()}
                              style={{
                                display: "block", padding: "8px 12px", borderRadius: 8,
                                fontSize: 14, color: "#4a6080", textDecoration: "none",
                                fontFamily: "var(--font-body)",
                              }}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Votre secteur accordion */}
              <div>
                <button
                  aria-expanded={openAccordion === "secteur"}
                  onClick={() => setOpenAccordion(openAccordion === "secteur" ? null : "secteur")}
                  style={{
                    display: "flex", width: "100%", alignItems: "center",
                    justifyContent: "space-between", padding: "16px 20px",
                    borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#03045E",
                    background: "transparent", border: "1px solid transparent",
                    cursor: "pointer", fontFamily: "var(--font-heading)", transition: "all 0.15s",
                  }}
                >
                  Votre secteur
                  <ChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.2s",
                      transform: openAccordion === "secteur" ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openAccordion === "secteur" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden", paddingLeft: 20, paddingBottom: 12 }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {secteurItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => closeMenu()}
                            style={{
                              padding: "8px 14px", borderRadius: 8, fontSize: 13,
                              color: "#4a6080", textDecoration: "none",
                              fontFamily: "var(--font-body)",
                              background: "rgba(0,119,182,0.04)",
                              border: "1px solid rgba(0,119,182,0.1)",
                            }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nos réalisations */}
              <a
                href="#exemples"
                onClick={() => closeMenu()}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 20px", borderRadius: 14,
                  fontSize: 16, fontWeight: 600, color: "#03045E",
                  textDecoration: "none", fontFamily: "var(--font-heading)",
                }}
              >
                Nos réalisations
                <ArrowRight size={15} color="#4a6080" />
              </a>
            </div>

            <div className="section-divider" style={{ margin: "16px 24px" }} />

            <div style={{ marginTop: "auto", padding: "0 24px 40px" }}>
              <CalButton
                className="w-full justify-center"
                style={{ fontSize: 15, padding: "14px 20px", borderRadius: 16 }}
              >
                Prendre rendez-vous — gratuit
              </CalButton>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 8, width: "100%", padding: 16, borderRadius: 16,
                  border: "1px solid rgba(74,222,128,0.25)",
                  background: "rgba(74,222,128,0.06)",
                  color: "#16a34a", fontSize: 14, fontWeight: 600,
                  textDecoration: "none", marginTop: 12,
                }}
              >
                <WhatsAppIcon size={18} />
                Nous écrire sur WhatsApp
              </a>
              <p style={{ fontSize: 11, color: "#4a6080", textAlign: "center", marginTop: 16 }}>
                ✓ Satisfait ou remboursé · Réponse sous 24h
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
