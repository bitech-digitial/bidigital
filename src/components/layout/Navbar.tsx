"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ChevronDown,
  Globe, RefreshCw, Paintbrush, Search, Wrench, Server,
  Hammer, ShoppingBag, UtensilsCrossed, Home, Sparkles, Car, Gauge, Briefcase,
  type LucideIcon,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";

// ── Data ─────────────────────────────────────────────────────────────────────

const expertiseItems: { icon: LucideIcon; label: string; desc: string; href: string }[] = [
  { icon: Globe,      label: "Création de site internet", desc: "Un site conçu sur-mesure, optimisé SEO et conforme RGPD dès la mise en ligne",              href: "/creation-site-internet" },
  { icon: RefreshCw,  label: "Refonte de site internet",  desc: "Modernisation de votre site existant — design, performances et conformité",                  href: "/refonte-site-internet" },
  { icon: Paintbrush, label: "Webdesign",                 desc: "Des interfaces pensées pour l'expérience utilisateur et l'image de votre marque",            href: "/webdesign" },
  { icon: Search,     label: "SEO",                       desc: "Optimisation technique et éditoriale pour améliorer votre positionnement Google",             href: "/referencement-naturel-seo" },
  { icon: Wrench,     label: "Maintenance",               desc: "Surveillance, mises à jour et support technique pour garder votre site opérationnel",         href: "/maintenance-site-internet" },
  { icon: Server,     label: "Hébergement web",           desc: "Infrastructure sécurisée, rapide et infogérée incluse dans chaque projet",                    href: "/hebergement-web" },
];

const secteurItems: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Hammer,           label: "Bâtiment / Artisan",  href: "/secteurs/batiment" },
  { icon: ShoppingBag,      label: "Commerce",            href: "/secteurs/ecommerce" },
  { icon: UtensilsCrossed,  label: "Restauration",        href: "/secteurs/restauration" },
  { icon: Home,             label: "Hébergement",         href: "/secteurs/hebergement" },
  { icon: Sparkles,         label: "Beauté / Bien-être",  href: "/secteurs/beaute" },
  { icon: Car,              label: "Taxi / VTC",          href: "/secteurs/taxi" },
  { icon: Gauge,            label: "Automobile",          href: "/secteurs/automobile" },
  { icon: Briefcase,        label: "Services",            href: "/secteurs/services" },
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
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,85,255,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{
              flexShrink: 0, width: 38, height: 38, borderRadius: 10,
              background: "#e2f7ff",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginTop: 2,
            }}>
              <Icon size={18} style={{ color: "#0055FF" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{
                fontSize: 15, fontWeight: 700, color: "#191e4f",
                fontFamily: "var(--font-heading)", lineHeight: 1.3,
              }}>
                {item.label}
              </span>
              <span style={{
                fontSize: 13, color: "#474667",
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
              fontSize: 15, fontWeight: 400, color: "#191e4f",
              textDecoration: "none", fontFamily: "var(--font-body)",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0055FF";
              e.currentTarget.style.background = "rgba(0,85,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#191e4f";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <div style={{
              flexShrink: 0, width: 32, height: 32, borderRadius: 8,
              background: "#e2f7ff",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={15} style={{ color: "#0055FF" }} />
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
    const onScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const ddPositions = useRef<Record<string, React.CSSProperties>>({});
  const arrowPositions = useRef<Record<string, number>>({});

  const calcPosition = useCallback((key: string, ref: React.RefObject<HTMLDivElement | null>, width: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const margin = 16;
    const viewportLeft = Math.max(margin, Math.min(window.innerWidth / 2 - width / 2, window.innerWidth - width - margin));
    ddPositions.current[key] = {
      ...dropdownPanelStyle,
      position: "absolute",
      top: "calc(100% + 14px)",
      left: viewportLeft - r.left,
      transform: "none",
    };
    arrowPositions.current[key] = r.left + r.width / 2 - viewportLeft;
  }, []);

  useLayoutEffect(() => {
    const onResize = () => {
      calcPosition("expertises", expertisesRef, 640);
      calcPosition("secteur", secteurRef, 480);
    };
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [calcPosition]);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    const ref = key === "expertises" ? expertisesRef : secteurRef;
    const width = key === "expertises" ? 640 : 480;
    calcPosition(key, ref, width);
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
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ padding: scrolled || menuOpen ? "0 1rem" : "0" }}
      >
        <div
          className="mx-auto"
          style={{
            marginTop: scrolled || menuOpen ? 8 : 0,
            paddingLeft: scrolled || menuOpen ? 24 : 24,
            paddingRight: scrolled || menuOpen ? 24 : 24,
            maxWidth: scrolled || menuOpen ? "56rem" : "100%",
            borderRadius: scrolled || menuOpen ? "1rem" : 0,
            background: scrolled || menuOpen
              ? "rgba(255,255,255,0.88)"
              : "rgba(255,255,255,0.90)",
            boxShadow: scrolled || menuOpen
              ? "0 8px 32px rgba(25,30,79,0.08)"
              : "none",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            transition: "max-width 0.3s ease, margin-top 0.3s ease, border-radius 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <nav className="flex items-center justify-between" style={{ height: 68 }}>
            {/* Logo */}
            <a
              href="/"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 rounded-lg"
              aria-label="BiDigital — Accueil"
            >
              <span
                className="font-bold text-xl"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
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
                    color: openDropdown === "expertises" ? "#0055FF" : "#191e4f",
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
                      style={ddPositions.current["expertises"] ?? dropdownPanelStyle}
                      onMouseEnter={() => openMenu("expertises")}
                      onMouseLeave={scheduleClose}
                    >
                      <div style={{ ...bubbleArrow, left: arrowPositions.current["expertises"] ?? 320 }} />
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
                    color: openDropdown === "secteur" ? "#0055FF" : "#191e4f",
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
                      style={ddPositions.current["secteur"] ?? dropdownPanelStyle}
                      onMouseEnter={() => openMenu("secteur")}
                      onMouseLeave={scheduleClose}
                    >
                      <div style={{ ...bubbleArrow, left: arrowPositions.current["secteur"] ?? 240 }} />
                      <SecteurPanel />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Agence */}
              <a
                href="/agence"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 rounded"
                style={{
                  fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600,
                  color: "#191e4f", transition: "opacity 0.2s", textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Agence
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <CalButton style={{ fontSize: 15, padding: "10px 22px", borderRadius: 50, background: "transparent", color: "#191e4f", boxShadow: "none", border: "1px solid rgba(25,30,79,0.25)", transition: "opacity 0.15s" }}>
                Prendre RDV
              </CalButton>
              <a
                href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center",
                  fontSize: 15, fontWeight: 600, fontFamily: "var(--font-heading)",
                  color: "#FFFFFF", textDecoration: "none",
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  padding: "10px 22px", borderRadius: 50,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
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
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,85,255,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {[bar1Style, bar2Style, bar3Style].map((style, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block", width: 20, height: 2,
                      borderRadius: 2, background: "#191e4f",
                      transformOrigin: "center", transition: "all 0.3s ease",
                      ...style,
                    }}
                  />
                ))}
              </button>
            </div>
          </nav>
        </div>
      </header>

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
                    borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#191e4f",
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
                              background: "#e2f7ff",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              marginTop: 2,
                            }}>
                              <Icon size={14} style={{ color: "#0055FF" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                              <span style={{
                                fontSize: 16, fontWeight: 700, color: "#191e4f",
                                fontFamily: "var(--font-heading)",
                              }}>
                                {item.label}
                              </span>
                              <span style={{
                                fontSize: 14, color: "#474667",
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
                    borderRadius: 14, fontSize: 16, fontWeight: 600, color: "#191e4f",
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
                                fontWeight: 500, color: "#191e4f", textDecoration: "none",
                                fontFamily: "var(--font-body)",
                                background: "#e2f7ff",
                              }}
                            >
                              <div style={{
                                flexShrink: 0, width: 26, height: 26, borderRadius: 6,
                                background: "rgba(0,85,255,0.12)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                              }}>
                                <Icon size={13} style={{ color: "#0055FF" }} />
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

              {/* Agence */}
              <a
                href="/agence"
                onClick={() => closeMenu()}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "16px 20px", borderRadius: 14,
                  fontSize: 16, fontWeight: 600, color: "#191e4f",
                  textDecoration: "none", fontFamily: "var(--font-heading)",
                }}
              >
                Agence
                <ArrowRight size={15} color="#474667" />
              </a>
            </div>

            <div className="section-divider" style={{ margin: "16px 24px" }} />

            <div style={{ marginTop: "auto", padding: "0 24px 40px" }}>
              <CalButton
                className="w-full justify-center"
                style={{ fontSize: 15, padding: "14px 20px", borderRadius: 50, background: "transparent", color: "#0055FF", boxShadow: "none", border: "1px solid rgba(0,85,255,0.25)" }}
              >
                Prendre RDV
              </CalButton>
              <a
                href="/contact"
                onClick={() => closeMenu()}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", padding: "14px 20px", borderRadius: 50, marginTop: 10,
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  color: "#FFFFFF", fontSize: 15, fontWeight: 700,
                  textDecoration: "none", fontFamily: "var(--font-heading)",
                }}
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
