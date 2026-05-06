# Refonte Homepage bidigital.fr — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refondre la Navbar avec menus déroulants et créer 3 nouvelles sections (Expertises, Stats, Solutions) pour la page d'accueil de bidigital.fr.

**Architecture:** On modifie Navbar.tsx et Hero.tsx existants, on crée 3 nouveaux composants de sections, on met à jour Examples.tsx et Footer.tsx, et on réordonne page.tsx. Chaque tâche produit un fichier autonome vérifiable par TypeScript.

**Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide React · `next/image`

---

## Carte des fichiers

| Action | Fichier | Responsabilité |
|--------|---------|----------------|
| Modifier | `src/components/layout/Navbar.tsx` | Navbar avec dropdowns desktop + accordéons mobile |
| Modifier | `src/components/sections/Hero.tsx` | Nouvelle accroche, 3 badges réassurance, sans prix |
| Créer | `src/components/sections/Expertises.tsx` | Grille 3 services (Création, SEO/SEA, Réseaux) |
| Créer | `src/components/sections/Stats.tsx` | 4 compteurs animés sur fond navy |
| Créer | `src/components/sections/Solutions.tsx` | 2 blocs alternés image/texte |
| Modifier | `src/components/sections/Examples.tsx` | Badge label → "NOS RÉFÉRENCES" |
| Modifier | `src/components/layout/Footer.tsx` | Ajout liens Expertises + Réalisations |
| Modifier | `src/app/page.tsx` | Imports + ordre des sections mis à jour |

---

## Task 1 — Navbar avec dropdowns

**Files:**
- Modify: `src/components/layout/Navbar.tsx`

- [ ] **Step 1 : Remplacer le contenu de Navbar.tsx**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenuOpen(false); setOpenDropdown(null); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
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

  const dropdownPanelStyle = {
    position: "absolute" as const,
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#FFFFFF",
    border: "1px solid #e1eaf5",
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
    zIndex: 100,
  };

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
                              onClick={() => setMenuOpen(false)}
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
                            onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Expected: aucune erreur TypeScript.

- [ ] **Step 3 : Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: navbar — menus déroulants desktop + accordéons mobile"
```

---

## Task 2 — Hero mis à jour

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1 : Remplacer le contenu de Hero.tsx**

```tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import CalButton from "@/components/ui/CalButton";

export default function Hero() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (blob1Ref.current) blob1Ref.current.style.transform = `translateY(${y * 0.18}px)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${y * 0.12}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "#FFFFFF", minHeight: "100svh" }}>
      {/* Blobs */}
      <div
        ref={blob1Ref}
        className="absolute pointer-events-none mesh-blob"
        style={{
          width: 700, height: 700, top: "-200px", left: "-150px",
          background: "radial-gradient(ellipse, rgba(202,240,248,0.6) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)", willChange: "transform", opacity: 0.8,
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute pointer-events-none mesh-blob-alt"
        style={{
          width: 600, height: 600, top: "-100px", right: "-120px",
          background: "radial-gradient(ellipse, rgba(144,224,239,0.45) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(60px)", willChange: "transform", opacity: 0.7,
        }}
      />
      <div
        className="absolute pointer-events-none mesh-blob"
        style={{
          width: 400, height: 400, bottom: "0px", left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(0,119,182,0.08) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(80px)", animationDelay: "3s",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="text-center">

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 8.5vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
              color: "#03045E",
            }}
          >
            <span className="block">Propulsez votre activité</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #03045E 0%, #0077B6 60%, #90E0EF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              avec une stratégie digitale
            </span>
            <span className="block">sur mesure.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#4a6080",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Nous accompagnons les artisans, commerçants et dirigeants de PME
            dans leur croissance numérique.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <div className="btn-glow rounded-[14px] w-full sm:w-auto">
              <CalButton className="w-full sm:w-auto" style={{ fontSize: 15, padding: "14px 28px", borderRadius: 14 }}>
                Prendre rendez-vous
              </CalButton>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 font-semibold rounded-[14px] transition-all duration-200 text-[15px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B6]/30"
              style={{
                background: "transparent", border: "1px solid #e1eaf5",
                color: "#1a2a4a", fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,119,182,0.3)";
                e.currentTarget.style.background = "rgba(0,119,182,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e1eaf5";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                style={{ color: "#25D366", flexShrink: 0 }} aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Nous écrire
            </a>
          </motion.div>

          {/* Badges de réassurance */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {/* Badge Google */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)",
                fontFamily: "var(--font-body)", fontSize: 12, color: "#4a6080",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-label="Google" style={{ flexShrink: 0 }}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span style={{ color: "#fbbf24" }}>★★★★★</span>
              <span style={{ color: "#03045E", fontWeight: 600 }}>5/5</span>
              <span>· Clients satisfaits</span>
            </span>

            {/* Badge livraison */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)",
                fontFamily: "var(--font-body)", fontSize: 12, color: "#4a6080",
              }}
            >
              <span style={{ color: "#4ade80" }}>✓</span>
              Satisfait ou remboursé · Livraison en 7 jours
            </span>

            {/* Badge paiement */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)",
                fontFamily: "var(--font-body)", fontSize: 12, color: "#4a6080",
              }}
            >
              🔒 Paiement sécurisé · Sans engagement
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" style={{ color: "#4a6080" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Expected: aucune erreur TypeScript.

- [ ] **Step 3 : Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: hero — nouvelle accroche, sous-titre sans prix, 3 badges réassurance"
```

---

## Task 3 — Nouveau composant Expertises

**Files:**
- Create: `src/components/sections/Expertises.tsx`

- [ ] **Step 1 : Créer Expertises.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { Globe, Search, Share2, ArrowRight } from "lucide-react";

const expertises = [
  {
    icon: Globe,
    title: "Création de site",
    description:
      "Conception de sites internet performants, adaptés à tous les écrans, pour transformer vos visiteurs en clients.",
    href: "#",
  },
  {
    icon: Search,
    title: "Référencement SEO / SEA",
    description:
      "Optimisez votre visibilité sur Google pour apparaître là où vos clients vous cherchent.",
    href: "#",
  },
  {
    icon: Share2,
    title: "Réseaux Sociaux",
    description:
      "Animez votre communauté et développez votre notoriété sur les plateformes incontournables.",
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Expertises() {
  return (
    <section id="expertises" className="py-20 px-4" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(0,119,182,0.08)",
              border: "1px solid rgba(0,119,182,0.2)",
              color: "#0077B6",
              fontFamily: "var(--font-body)",
            }}
          >
            Nos expertises
          </span>
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#03045E",
            }}
          >
            Notre savoir-faire{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0077B6, #023E8A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              digital
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#4a6080",
              fontSize: "1.1rem",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Des solutions complètes pour développer votre présence en ligne et attirer de nouveaux clients.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {expertises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 24 } }}
                className="flex flex-col rounded-2xl p-7"
                style={{
                  background: "#F0F9FF",
                  border: "1px solid #e1eaf5",
                  boxShadow: "0 4px 20px rgba(0,119,182,0.05)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(0,119,182,0.1)",
                    border: "1px solid rgba(0,119,182,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#0077B6" }} />
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "#03045E" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
                >
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "#0077B6", fontFamily: "var(--font-body)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#03045E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0077B6")}
                >
                  En savoir plus
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Expected: aucune erreur TypeScript.

- [ ] **Step 3 : Commit**

```bash
git add src/components/sections/Expertises.tsx
git commit -m "feat: section Expertises — grille 3 services avec animations"
```

---

## Task 4 — Nouveau composant Stats

**Files:**
- Create: `src/components/sections/Stats.tsx`

- [ ] **Step 1 : Créer Stats.tsx**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 100, suffix: "%", label: "Clients satisfaits" },
  { value: 7, suffix: " jours", label: "Délai de livraison moyen" },
  { value: 3, suffix: " ans", label: "D'expertise digitale" },
  { value: 24, suffix: "h", label: "Délai de réponse garanti" },
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 900,
          color: "#FFFFFF",
          fontFamily: "var(--font-heading)",
          lineHeight: 1,
          letterSpacing: "-0.03em",
        }}
      >
        {count}
        {suffix}
      </div>
      <p
        style={{
          fontSize: 15,
          color: "rgba(255,255,255,0.6)",
          marginTop: 10,
          fontFamily: "var(--font-body)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      style={{
        background: "#03045E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            BiDigital en chiffres
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter value={s.value} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Expected: aucune erreur TypeScript.

- [ ] **Step 3 : Commit**

```bash
git add src/components/sections/Stats.tsx
git commit -m "feat: section Stats — compteurs animés IntersectionObserver sur fond navy"
```

---

## Task 5 — Nouveau composant Solutions

**Files:**
- Create: `src/components/sections/Solutions.tsx`

- [ ] **Step 1 : Créer Solutions.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const solutions = [
  {
    tag: "Création de sites",
    title: "Plus qu'un site, votre vitrine numérique",
    description:
      "Un design moderne, une navigation fluide et un contenu optimisé pour garantir une expérience utilisateur irréprochable et un taux de conversion maximal.",
    points: [
      "Responsive — mobile, tablette et desktop",
      "SEO inclus dès la mise en ligne",
      "RGPD conforme — mentions légales, CGU, cookies",
      "Livré en 7 jours",
    ],
    cta: { label: "Découvrir nos réalisations", href: "#exemples" },
    image: "/images/realisations/site-2.webp",
    imageLeft: false,
  },
  {
    tag: "Référencement",
    title: "Soyez visible là où vos clients cherchent",
    description:
      "Apparaissez en tête des résultats Google là où vos clients vous cherchent. SEO technique, contenu optimisé et suivi de positions inclus.",
    points: [
      "Audit SEO complet de votre site",
      "Mots-clés ciblés pour votre secteur",
      "Rapports mensuels de performance",
      "SEA optionnel pour accélérer",
    ],
    cta: { label: "Optimiser ma visibilité", href: "#contact" },
    image: "/images/realisations/site-1.webp",
    imageLeft: true,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-4" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(0,119,182,0.08)",
              border: "1px solid rgba(0,119,182,0.2)",
              color: "#0077B6",
              fontFamily: "var(--font-body)",
            }}
          >
            Nos solutions
          </span>
          <h2
            className="font-extrabold"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#03045E",
            }}
          >
            Ce que nous faisons{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0077B6, #023E8A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pour vous
            </span>
          </h2>
        </motion.div>

        {/* Alternating blocks */}
        <div className="flex flex-col gap-24">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${sol.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
            >
              {/* Text */}
              <div className="flex-1">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: "rgba(0,119,182,0.08)",
                    border: "1px solid rgba(0,119,182,0.2)",
                    color: "#0077B6",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {sol.tag}
                </span>
                <h3
                  className="font-extrabold mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                    color: "#03045E",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {sol.title}
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#4a6080", fontSize: 16 }}
                >
                  {sol.description}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {sol.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(0,119,182,0.1)" }}
                      >
                        <Check size={11} style={{ color: "#0077B6" }} />
                      </span>
                      <span
                        style={{ fontFamily: "var(--font-body)", color: "#1a2a4a", fontSize: 15 }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={sol.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    background: "#03045E",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0077B6")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#03045E")}
                >
                  {sol.cta.label}
                </a>
              </div>

              {/* Image */}
              <div
                className="flex-1 w-full"
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid #e1eaf5",
                  boxShadow: "0 8px 40px rgba(0,119,182,0.1)",
                }}
              >
                {/* Browser chrome */}
                <div
                  style={{
                    background: "#F0F9FF",
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 14px",
                    borderBottom: "1px solid #e1eaf5",
                    gap: 6,
                  }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />
                  ))}
                </div>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image
                    src={sol.image}
                    alt={sol.tag}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Expected: aucune erreur TypeScript.

- [ ] **Step 3 : Commit**

```bash
git add src/components/sections/Solutions.tsx
git commit -m "feat: section Solutions — 2 blocs alternés image/texte avec mockup navigateur"
```

---

## Task 6 — Mise à jour Examples.tsx

**Files:**
- Modify: `src/components/sections/Examples.tsx` (ligne 83)

- [ ] **Step 1 : Changer le badge label de "RÉALISATIONS" à "NOS RÉFÉRENCES"**

Localiser dans `Examples.tsx` la ligne contenant `RÉALISATIONS` et la remplacer :

```tsx
// Avant
RÉALISATIONS

// Après
NOS RÉFÉRENCES
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/sections/Examples.tsx
git commit -m "fix: Examples — badge label mis à jour vers NOS RÉFÉRENCES"
```

---

## Task 7 — Mise à jour Footer.tsx

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1 : Ajouter les nouveaux liens dans le tableau `navLinks`**

Remplacer le tableau `navLinks` existant (ligne 51) par :

```tsx
const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Nos expertises", href: "#expertises" },
  { label: "Nos réalisations", href: "#exemples" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Prendre rendez-vous", href: CAL_FULL_URL, external: true },
];
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "fix: footer — ajout liens Nos expertises et Nos réalisations"
```

---

## Task 8 — Mise à jour page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1 : Remplacer le contenu de page.tsx**

```tsx
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ConversionPopup from "@/components/ui/ConversionPopup";
import CookieBanner from "@/components/ui/CookieBanner";

const Expertises = dynamic(() => import("@/components/sections/Expertises"), { ssr: true });
const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: true });
const Solutions = dynamic(() => import("@/components/sections/Solutions"), { ssr: true });
const Examples = dynamic(() => import("@/components/sections/Examples"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const LegalCompliance = dynamic(() => import("@/components/sections/LegalCompliance"), { ssr: true });
const Values = dynamic(() => import("@/components/sections/Values"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Offer = dynamic(() => import("@/components/sections/Offer"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const TrustBar = dynamic(() => import("@/components/ui/TrustBar"), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <Expertises />
        <Stats />
        <Solutions />
        <Examples />
        <Services />
        <LegalCompliance />
        <Values />
        <Process />
        <Offer />
        <ContactForm />
        <FAQ />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
      <ConversionPopup />
      <CookieBanner />
    </>
  );
}
```

- [ ] **Step 2 : Build final de vérification**

```bash
npm run build
```

Expected: compilation réussie, aucune erreur TypeScript ni avertissement critique.

- [ ] **Step 3 : Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: page.tsx — ordre des sections mis à jour, Expertises + Stats + Solutions ajoutés"
```

---

## Vérification finale

- [ ] Lancer le serveur de développement :
```bash
npm run dev
```
- [ ] Ouvrir `http://localhost:3000` et vérifier :
  - Navbar : dropdowns "Nos expertises" et "Votre secteur" au hover
  - Navbar mobile : accordéons fonctionnels au tap
  - Hero : nouvelle accroche sans prix, 3 badges en ligne
  - Section Expertises : 3 cartes avec animation au scroll
  - Section Stats : compteurs qui s'animent au scroll sur fond navy
  - Section Solutions : 2 blocs alternés avec mockup navigateur
  - Section "NOS RÉFÉRENCES" : badge correctement mis à jour
  - Footer : liens "Nos expertises" et "Nos réalisations" présents
