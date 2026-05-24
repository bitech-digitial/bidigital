"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown,
  Globe, RefreshCw, Paintbrush, Search, Wrench, Server,
  Hammer, ShoppingBag, UtensilsCrossed, Home, Sparkles, Car, Gauge, Briefcase,
  type LucideIcon,
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import CalButton from "@/components/ui/CalButton";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

// ── Data ─────────────────────────────────────────────────────────────────────

const expertiseItems: { icon: LucideIcon; label: string; desc: string; href: string }[] = [
  { icon: Globe,      label: "Création de site internet", desc: "Un site conçu sur-mesure, optimisé SEO et conforme RGPD dès la mise en ligne",              href: "#services" },
  { icon: RefreshCw,  label: "Refonte de site internet",  desc: "Modernisation de votre site existant — design, performances et conformité",                  href: "#services" },
  { icon: Paintbrush, label: "Webdesign",                 desc: "Des interfaces pensées pour l'expérience utilisateur et l'image de votre marque",            href: "#services" },
  { icon: Search,     label: "SEO",                       desc: "Optimisation technique et éditoriale pour améliorer votre positionnement Google",             href: "#services" },
  { icon: Wrench,     label: "Maintenance",               desc: "Surveillance, mises à jour et support technique pour garder votre site opérationnel",         href: "#services" },
  { icon: Server,     label: "Hébergement web",           desc: "Infrastructure sécurisée, rapide et infogérée incluse dans chaque projet",                    href: "#services" },
];

const secteurItems: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Hammer,           label: "Bâtiment / Artisan",  href: "/contact" },
  { icon: ShoppingBag,      label: "Commerce",            href: "/contact" },
  { icon: UtensilsCrossed,  label: "Restauration",        href: "/contact" },
  { icon: Home,             label: "Hébergement",         href: "/contact" },
  { icon: Sparkles,         label: "Beauté / Bien-être",  href: "/contact" },
  { icon: Car,              label: "Taxi / VTC",          href: "/contact" },
  { icon: Gauge,            label: "Automobile",          href: "/contact" },
  { icon: Briefcase,        label: "Services",            href: "/contact" },
];

const dropdownPanelStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 14px)",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#FFFFFF",
  border: "1px solid #e1eaf5",
  borderRadius: 16,
  boxShadow: "0 12px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)",
  zIndex: 100,
  overflow: "visible",
};

const bubbleArrow: React.CSSProperties = {
  position: "absolute",
  top: -7,
  left: "50%",
  transform: "translateX(-50%) rotate(45deg)",
  width: 14,
  height: 14,
  background: "#FFFFFF",
  borderTop: "1px solid #e1eaf5",
  borderLeft: "1px solid #e1eaf5",
  borderRadius: 2,
  zIndex: 1,
};

// ── Dropdown Panels ───────────────────────────────────────────────────────────

function ExpertisesPanel() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: 4, padding: "16px 20px", width: 640,
    }}>
      {expertiseItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            style={{
              display: "flex", alignItems: "flex-start", gap: 12,
              padding: "12px 14px", borderRadius: 12,
              textDecoration: "none", transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,122,255,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{
              flexShrink: 0, width: 38, height: 38, borderRadius: 10,
              background: "rgba(0,122,255,0.08)", border: "1px solid rgba(0,122,255,0.18)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginTop: 2,
            }}>
              <Icon size={18} style={{ color: "#007AFF" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{
                fontSize: 15, fontWeight: 700, color: "#1D2939",
                fontFamily: "var(--font-heading)", lineHeight: 1.3,
              }}>
                {item.label}
              </span>
              <span style={{
                fontSize: 13, color: "#475467",
                fontFamily: "var(--font-body)", lineHeight: 1.5,
              }}>
                {item.desc}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function SecteurPanel() {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: 4, padding: "16px 20px", width: 480,
    }}>
      {secteurItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "11px 14px", borderRadius: 10,
              fontSize: 15, fontWeight: 400, color: "#1D2939",
              textDecoration: "none", fontFamily: "var(--font-body)",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#007AFF";
              e.currentTarget.style.background = "rgba(0,122,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#1D2939";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <div style={{
              flexShrink: 0, width: 32, height: 32, borderRadius: 8,
              background: "rgba(0,122,255,0.08)", border: "1px solid rgba(0,122,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={15} style={{ color: "#007AFF" }} />
            </div>
            {item.label}
          </a>
        );
      })}
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
  const expertisesRef = useRef<HTMLDivElement>(null);
  const secteurRef    = useRef<HTMLDivElement>(null);

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

  // position:absolute relative to trigger div, but visually centered on page
  // (avoids Framer Motion transform containing-block bug that breaks position:fixed)
  const getDDStyle = (ref: React.RefObject<HTMLDivElement | null>, width: number): React.CSSProperties => {
    const el = ref.current;
    if (!el) return { ...dropdownPanelStyle, position: "absolute", top: "calc(100% + 14px)" };
    const r = el.getBoundingClientRect();
    const margin = 16;
    const viewportLeft = Math.max(margin, Math.min(window.innerWidth / 2 - width / 2, window.innerWidth - width - margin));
    return {
      ...dropdownPanelStyle,
      position: "absolute",
      top: "calc(100% + 14px)",
      left: viewportLeft - r.left,
      transform: "none",
    };
  };

  const getArrowLeft = (ref: React.RefObject<HTMLDivElement | null>, width: number): number => {
    const el = ref.current;
    if (!el) return width / 2;
    const r = el.getBoundingClientRect();
    const margin = 16;
    const viewportLeft = Math.max(margin, Math.min(window.innerWidth / 2 - width / 2, window.innerWidth - width - margin));
    return r.left + r.width / 2 - viewportLeft;
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
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 rounded-lg"
              aria-label="BiDigital — Accueil"
            >
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
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
                ref={expertisesRef}
                style={{ position: "relative" }}
                onMouseEnter={() => openMenu("expertises")}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "expertises"}
                  className="flex items-center focus:outline-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 16, fontWeight: 600,
                    color: openDropdown === "expertises" ? "#007AFF" : "#1D2939",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    transition: "color 0.2s",
                  }}
                >
                  Nos expertises
                </button>
                <AnimatePresence>
                  {openDropdown === "expertises" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      style={getDDStyle(expertisesRef, 640)}
                      onMouseEnter={() => openMenu("expertises")}
                      onMouseLeave={scheduleClose}
                    >
                      <div style={{ ...bubbleArrow, left: getArrowLeft(expertisesRef, 640) }} />
                      <ExpertisesPanel />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Votre secteur */}
              <div
                ref={secteurRef}
                style={{ position: "relative" }}
                onMouseEnter={() => openMenu("secteur")}
                onMouseLeave={scheduleClose}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "secteur"}
                  className="flex items-center focus:outline-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 16, fontWeight: 600,
                    color: openDropdown === "secteur" ? "#007AFF" : "#1D2939",
                    background: "none", border: "none", cursor: "pointer", padding: 0,
                    transition: "color 0.2s",
                  }}
                >
                  Votre secteur
                </button>
                <AnimatePresence>
                  {openDropdown === "secteur" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      style={getDDStyle(secteurRef, 480)}
                      onMouseEnter={() => openMenu("secteur")}
                      onMouseLeave={scheduleClose}
                    >
                      <div style={{ ...bubbleArrow, left: getArrowLeft(secteurRef, 480) }} />
                      <SecteurPanel />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Nos réalisations */}
              <a
                href="#exemples"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 rounded"
                style={{
                  fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600,
                  color: "#1D2939", transition: "color 0.2s", textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#007AFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#1D2939")}
              >
                Nos réalisations
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <CalButton style={{ fontSize: 14, padding: "8px 18px", borderRadius: 10, background: "transparent", color: "#1D2939", boxShadow: "none", border: "1px solid rgba(29,41,57,0.25)" }}>
                Prendre RDV
              </CalButton>
              <a
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)",
                  color: "#FFFFFF", textDecoration: "none",
                  background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                  padding: "8px 18px", borderRadius: 10,
                  boxShadow: "0 4px 15px rgba(0,122,255,0.3)",
                  transition: "filter 0.15s, transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.08)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 22px rgba(0,122,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,122,255,0.3)";
                }}
              >
                Nous contacter
              </a>
            </div>

            {/* Burger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 rounded-lg"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "transparent", border: "1px solid rgba(0,0,0,0.08)",
                  cursor: "pointer", padding: 8,
                  display: "flex", flexDirection: "column",
                  justifyContent: "center", alignItems: "center",
                  gap: 5, transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,122,255,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {[bar1Style, bar2Style, bar3Style].map((style, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block", width: 20, height: 2,
                      borderRadius: 2, background: "#1D2939",
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
                    borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#1D2939",
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
                      style={{ overflow: "hidden", paddingLeft: 12, paddingBottom: 8 }}
                    >
                      {expertiseItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => closeMenu()}
                            style={{
                              display: "flex", alignItems: "flex-start", gap: 10,
                              padding: "10px 12px", borderRadius: 10,
                              textDecoration: "none",
                            }}
                          >
                            <div style={{
                              flexShrink: 0, width: 30, height: 30, borderRadius: 8,
                              background: "rgba(0,122,255,0.08)", border: "1px solid rgba(0,122,255,0.18)",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              marginTop: 2,
                            }}>
                              <Icon size={14} style={{ color: "#007AFF" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                              <span style={{
                                fontSize: 16, fontWeight: 700, color: "#1D2939",
                                fontFamily: "var(--font-heading)",
                              }}>
                                {item.label}
                              </span>
                              <span style={{
                                fontSize: 14, color: "#475467",
                                fontFamily: "var(--font-body)",
                              }}>
                                {item.desc}
                              </span>
                            </div>
                          </a>
                        );
                      })}
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
                    borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#1D2939",
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
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {secteurItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => closeMenu()}
                              style={{
                                display: "flex", alignItems: "center", gap: 8,
                                padding: "9px 14px", borderRadius: 10, fontSize: 15,
                                fontWeight: 500, color: "#1D2939", textDecoration: "none",
                                fontFamily: "var(--font-body)",
                                background: "rgba(0,122,255,0.04)",
                                border: "1px solid rgba(0,122,255,0.12)",
                              }}
                            >
                              <div style={{
                                flexShrink: 0, width: 26, height: 26, borderRadius: 6,
                                background: "rgba(0,122,255,0.08)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                              }}>
                                <Icon size={13} style={{ color: "#007AFF" }} />
                              </div>
                              {item.label}
                            </a>
                          );
                        })}
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
                  fontSize: 16, fontWeight: 600, color: "#1D2939",
                  textDecoration: "none", fontFamily: "var(--font-heading)",
                }}
              >
                Nos réalisations
                <ArrowRight size={15} color="#475467" />
              </a>
            </div>

            <div className="section-divider" style={{ margin: "16px 24px" }} />

            <div style={{ marginTop: "auto", padding: "0 24px 40px" }}>
              <CalButton
                className="w-full justify-center"
                style={{ fontSize: 15, padding: "14px 20px", borderRadius: 16, background: "transparent", color: "#0044CC", boxShadow: "none", border: "1px solid rgba(0,122,255,0.25)" }}
              >
                Prendre RDV
              </CalButton>
              <a
                href="/contact"
                onClick={() => closeMenu()}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", padding: "14px 20px", borderRadius: 16, marginTop: 10,
                  background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                  color: "#FFFFFF", fontSize: 15, fontWeight: 700,
                  textDecoration: "none", fontFamily: "var(--font-heading)",
                  boxShadow: "0 4px 15px rgba(0,122,255,0.3)",
                }}
              >
                Nous contacter
              </a>
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
              <p style={{ fontSize: 12, color: "#475467", textAlign: "center", marginTop: 16 }}>
                ✓ Satisfait ou remboursé · Réponse sous 24h
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
