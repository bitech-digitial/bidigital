"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, CheckCircle2, ChevronDown, Star,
  Calendar, Users, Search, Smartphone, Globe, Heart,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Palette ───────────────────────────────────────────────────────────────────
// #0055FF  bleu primaire     — accents, badges, icônes
// #00D2FF  cyan clair        — endpoint de gradient
// #474667  gris-violet       — texte body
// #191e4f  indigo foncé      — titres, textes importants
// #16182e  quasi-noir indigo — fonds CTA dark
// #f8faff  blanc-bleu        — fonds clairs alternés
// #e2f7ff  bleu très clair   — containers icônes, badges

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block", padding: "6px 16px", borderRadius: 999,
      fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
      background: "#e2f7ff",
      color: "#0055FF", fontFamily: "var(--font-badge)", marginBottom: 20,
    }}>
      {children}
    </span>
  );
}

const metiers = [
  "Institut de beauté", "Salon de coiffure", "Salon de massage", "Onglerie",
  "Spa", "Salon de tatouage", "Esthéticienne", "Vétérinaires",
  "Coach bien-être", "Naturopathe", "Ostéopathe", "Réflexologue",
  "Sophrologue", "Podologue", "Médecin / Praticien", "Psychologue",
];

const besoinItems = [
  { icon: Calendar,    label: "Agenda de réservation en ligne" },
  { icon: Users,       label: "Fidéliser votre clientèle" },
  { icon: Search,      label: "Être trouvé sur Google Maps" },
  { icon: Globe,       label: "Présenter vos prestations" },
  { icon: Smartphone,  label: "Site responsive mobile" },
  { icon: Heart,       label: "Refléter votre univers et valeurs" },
];

const faqItems = [
  {
    q: "Pourquoi un salon de beauté a besoin d'un site web ?",
    a: "Plus de 80% de vos futurs clients vous rechercheront sur Google avant de prendre rendez-vous. Sans site web, vous êtes invisible face à vos concurrents. Un site professionnel avec agenda en ligne génère des réservations 24h/24, même quand vous êtes en cabine.",
  },
  {
    q: "Peut-on intégrer un agenda de réservation en ligne ?",
    a: "Absolument. Nous intégrons un système de prise de rendez-vous directement sur votre site, personnalisé à votre planning et vos prestations. Vos clients réservent en quelques clics, vous recevez une confirmation automatique. Fini les appels manqués.",
  },
  {
    q: "Combien coûte un site web pour professionnel de la beauté ?",
    a: "Nous établissons un devis personnalisé gratuit selon vos prestations, votre univers et votre zone géographique. Contactez-nous pour une estimation sous 24h, sans engagement.",
  },
  {
    q: "Le SEO local est-il efficace pour les salons et instituts ?",
    a: "Oui, particulièrement. Vos clients cherchent \"salon de coiffure [ville]\", \"massage bien-être [quartier]\" — des recherches très locales. Nous optimisons votre fiche Google My Business, vos pages services et vos balises locales pour que vous apparaissiez en tête de ces recherches.",
  },
  {
    q: "Combien de temps pour la création de mon site ?",
    a: "Un site beauté / bien-être est généralement livré en 2 à 3 semaines après validation du brief. Nous vous guidons pour collecter vos photos, textes et tarifs. Vous recevez un site clé-en-main, prêt à attirer de nouveaux clients dès le premier jour.",
  },
];

export default function BeauteContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── B. HERO — Split-screen asymétrique ───────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, overflowX: "hidden" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
          className="grid-beaute-hero"
        >
          {/* Gauche — texte */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {["Beauté", "Bien-être", "Réservation en ligne"].map((t) => (
                <span key={t} style={{
                  padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                  background: "rgba(0,85,255,0.08)", border: "1px solid rgba(0,85,255,0.25)",
                  color: "#0055FF", fontFamily: "var(--font-body)",
                }}>
                  {t}
                </span>
              ))}
            </div>

            <h1 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
              fontWeight: 900, color: "#191e4f", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              Attirez plus de clients grâce à un site{" "}
              <span style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                beauté et bien-être sur-mesure
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
              BiDigital crée des sites internet pour les professionnels de la beauté et du bien-être.
              Agenda en ligne, présentation de vos prestations, SEO local — un site qui génère des
              réservations pendant que vous êtes en cabine.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/maquette" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-heading)", padding: "12px 24px", borderRadius: 50, textDecoration: "none", background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#FFFFFF", boxShadow: "0 4px 18px rgba(0,85,255,0.35)", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                Demander ma maquette gratuite
              </a>
              <a href="#nos-offres" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 15, fontWeight: 600, color: "#474667",
                textDecoration: "none", padding: "12px 20px",
                border: "1px solid rgba(25,30,79,0.08)", borderRadius: 50,
                fontFamily: "var(--font-body)", transition: "color 0.15s, border-color 0.15s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0055FF"; e.currentTarget.style.borderColor = "rgba(0,85,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#474667"; e.currentTarget.style.borderColor = "rgba(25,30,79,0.08)"; }}
              >
                Voir nos offres →
              </a>
            </div>

          </motion.div>

          {/* Droite — visuel avec rectangle fond translucide (signature DA Maison Beauté) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 500 }}
          >
            {/* Rectangle fond translucide — décalé haut-droite */}
            <div style={{
              position: "absolute", top: 28, right: -8, bottom: 0,
              width: "72%", height: "90%",
              background: "rgba(0,85,255,0.08)",
              borderRadius: 20, zIndex: 0,
            }} />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/salon-beaute.webp"
              alt="Site internet pour instituts de beauté et esthéticiennes"
              style={{
                position: "relative", zIndex: 1,
                width: "76%", height: 460,
                borderRadius: 20, display: "block",
                objectFit: "cover",
              }}
              fetchPriority="high" decoding="async" />
          </motion.div>
        </div>

        {/* Vos besoins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ maxWidth: 1100, margin: "64px auto 0", padding: "0 24px 80px" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 24, textAlign: "center" }}>
            Vos besoins
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-beaute-besoins">
            {besoinItems.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 18px", borderRadius: 12,
                  border: "1px solid rgba(25,30,79,0.08)",
                  background: "rgba(0,85,255,0.04)",
                }}>
                  <Icon size={16} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{b.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ── C. SPLIT — photo gauche / texte droite ───────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-cols-beaute-split">
          {/* Photo gauche */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65 }}>
            <img
              src="/images/salon-beaute-2.webp"
              alt="Institut de beauté — vitrine digitale professionnelle"
              style={{ width: "100%", borderRadius: 20, aspectRatio: "4/3", objectFit: "cover", objectPosition: "center", display: "block" }}
              loading="lazy" decoding="async" />
          </motion.div>
          {/* Texte droite */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <SectionBadge>Votre secteur</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
              Beauté et bien-être : votre expertise mérite une vitrine digitale à la hauteur
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 16 }}>
              Dans un secteur où <strong style={{ color: "#191e4f" }}>l&apos;image et la confiance sont primordiales</strong>, votre site
              web est bien plus qu&apos;une simple carte de visite. C&apos;est la première impression que vous
              laissez à vos futurs clients — avant même qu&apos;ils franchissent la porte de votre établissement.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8 }}>
              Nous concevons des sites internet qui reflètent <strong style={{ color: "#191e4f" }}>le professionnalisme et l&apos;identité
              unique de votre marque</strong> : de l&apos;institut de beauté au spa, du salon de coiffure à la
              praticienne en naturopathie — chaque site est créé sur-mesure pour votre univers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── G. SPLIT — texte gauche / photo droite ───────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-cols-beaute-booking-split">
          {/* Texte gauche */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65 }}>
            <SectionBadge>Réservation en ligne</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
              Un agenda intelligent pour multiplier vos prises de rendez-vous
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 16 }}>
              Intégré directement à votre site, <strong style={{ color: "#191e4f" }}>votre agenda en ligne est disponible 24h/24,
              7j/7</strong>. Vos clients choisissent leur soin, leur créneau et reçoivent une confirmation
              automatique — sans appel téléphonique, sans email d&apos;aller-retour.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 28 }}>
              L&apos;outil s&apos;adapte à votre planning, vos offres et votre charte graphique. Vous gérez tout
              depuis votre téléphone — <strong style={{ color: "#191e4f" }}>sans compétence technique requise</strong>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Confirmation automatique par SMS / email", "Rappel 24h avant le RDV", "Gestion depuis votre smartphone", "Synchronisation avec votre agenda Google"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={16} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#474667", fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Calendrier client */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div style={{ background: "#ffffff", borderRadius: 24, boxShadow: "0 8px 48px rgba(25,30,79,0.13)", overflow: "hidden", border: "1px solid rgba(25,30,79,0.07)" }}>

              {/* Header */}
              <div style={{ background: "linear-gradient(135deg, #0055FF 0%, #00D2FF 100%)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>Prendre un rendez-vous</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>Juin 2025</div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {["‹", "›"].map((a) => (
                    <div key={a} style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700, cursor: "pointer" }}>{a}</div>
                  ))}
                </div>
              </div>

              {/* Calendrier */}
              <div style={{ padding: "14px 16px 0" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 6 }}>
                  {["L","M","M","J","V","S","D"].map((j, i) => (
                    <div key={i} style={{ textAlign: "center", fontSize: 10, fontWeight: 700, color: "#9b9fb9", fontFamily: "var(--font-body)", paddingBottom: 6 }}>{j}</div>
                  ))}
                  {[
                    { d: "", e: true }, { d: "", e: true },
                    { d: "1" }, { d: "2" }, { d: "3", off: true }, { d: "4" }, { d: "5", off: true },
                    { d: "6", off: true }, { d: "7" }, { d: "8" }, { d: "9" }, { d: "10" }, { d: "11" }, { d: "12", off: true },
                    { d: "13", off: true }, { d: "14" }, { d: "15", sel: true }, { d: "16" }, { d: "17" }, { d: "18" }, { d: "19", off: true },
                    { d: "20", off: true }, { d: "21" }, { d: "22" }, { d: "23" }, { d: "24" }, { d: "25" }, { d: "26", off: true },
                    { d: "27", off: true }, { d: "28" }, { d: "29" }, { d: "30" },
                  ].map((c, i) => (
                    <div key={i} style={{
                      aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: 7, fontSize: 12, fontWeight: c.sel ? 800 : 500, cursor: c.e || c.off ? "default" : "pointer",
                      background: c.sel ? "#0055FF" : "transparent",
                      color: c.sel ? "#fff" : c.e ? "transparent" : c.off ? "rgba(25,30,79,0.18)" : "#191e4f",
                    }}>{c.d}</div>
                  ))}
                </div>
              </div>

              {/* Créneaux */}
              <div style={{ padding: "10px 16px 0", borderTop: "1px solid rgba(25,30,79,0.06)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#9b9fb9", fontFamily: "var(--font-body)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Créneaux disponibles · 15 juin</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["09:00", "09:30", "10:30", "11:00", "14:00", "14:30", "15:30", "16:00"].map((h, i) => (
                    <div key={h} style={{
                      padding: "6px 11px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                      fontFamily: "var(--font-body)", cursor: "pointer",
                      background: i === 2 ? "#0055FF" : "rgba(0,85,255,0.05)",
                      color: i === 2 ? "#fff" : "#191e4f",
                      border: i === 2 ? "1.5px solid #0055FF" : "1.5px solid rgba(0,85,255,0.15)",
                    }}>{h}</div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ width: "100%", padding: "11px", borderRadius: 12, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", boxShadow: "0 4px 14px rgba(0,85,255,0.28)" }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#fff", fontFamily: "var(--font-heading)" }}>Confirmer mon rendez-vous →</span>
                </div>
                <div style={{ textAlign: "center", fontSize: 10, color: "#9b9fb9", fontFamily: "var(--font-body)", marginTop: 7 }}>Confirmation par SMS · Gratuit · Sans compte</div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MÉTIERS GRID ─────────────────────────────────────────────────── */}
      <section id="nos-offres" style={{ background: "#ffffff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 12, textAlign: "center" }}>
            Les métiers
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em",
            marginBottom: 12, textAlign: "center",
          }}>
            Une solution adaptée à chaque professionnel
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.7, marginBottom: 40, textAlign: "center" }}>
            Qu&apos;il s&apos;agisse d&apos;un soin du visage, d&apos;un massage ou d&apos;un coaching bien-être, BiDigital
            accompagne tous les professionnels de la beauté-santé.
          </p>

          {/* Ticker ligne 1 — gauche */}
          <div style={{ overflow: "hidden", marginBottom: 12 }}>
            <div className="marquee-track-left" style={{ gap: 12 }}>
              {[...metiers.slice(0, 8), ...metiers.slice(0, 8)].map((m, i) => (
                <div key={i} style={{
                  padding: "10px 22px", borderRadius: 999, flexShrink: 0,
                  background: "#ffffff",
                  border: "1px solid rgba(25,30,79,0.10)",
                  boxShadow: "0 2px 8px rgba(0,85,255,0.07)",
                  fontSize: 14, fontWeight: 600, color: "#191e4f",
                  fontFamily: "var(--font-body)", marginRight: 12,
                }}>{m}</div>
              ))}
            </div>
          </div>
          {/* Ticker ligne 2 — droite */}
          <div style={{ overflow: "hidden" }}>
            <div className="marquee-track-right" style={{ gap: 12 }}>
              {[...metiers.slice(8), ...metiers.slice(8)].map((m, i) => (
                <div key={i} style={{
                  padding: "10px 22px", borderRadius: 999, flexShrink: 0,
                  background: "#ffffff",
                  border: "1px solid rgba(25,30,79,0.10)",
                  boxShadow: "0 2px 8px rgba(0,85,255,0.07)",
                  fontSize: 14, fontWeight: 600, color: "#191e4f",
                  fontFamily: "var(--font-body)", marginRight: 12,
                }}>{m}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="grid-beaute-faq"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} style={{ position: "sticky", top: 100 }}>
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.2vw, 2rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Vos questions sur la création de site beauté et bien-être
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.7, marginBottom: 24 }}>
              D&apos;autres questions ? Contactez-nous — réponse garantie sous 24h.
            </p>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#0055FF", textDecoration: "none", fontFamily: "var(--font-body)" }}>
              Nous contacter →
            </a>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, delay: i * 0.07 }}
                style={{
                  background: "#FFFFFF", borderRadius: 16,
                  border: "1px solid rgba(25,30,79,0.08)", overflow: "hidden",
                  boxShadow: openFaq === i ? "0 8px 32px rgba(25,30,79,0.10)" : "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: openFaq === i ? "#0055FF" : "#191e4f", lineHeight: 1.4, transition: "color 0.2s" }}>
                    {item.q}
                  </span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                    <ChevronDown size={18} color={openFaq === i ? "#0055FF" : "#474667"} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0 24px 24px", fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.75 }}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            style={{
              position: "relative", overflow: "hidden", borderRadius: 32,
              textAlign: "center", background: "#16182e",
              padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 64px)",
            }}
          >
            <div style={{ position: "absolute", top: "50%", left: "15%", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "50%", right: "10%", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,210,255,0.10) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>✨</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Donnez à votre salon une{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    vitrine digitale à la hauteur
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.7, marginBottom: 40 }}>
                Nos experts du web créent votre site clé-en-main. Brief, design, rédaction, mise en ligne.
                Devis gratuit sous 24h, sans engagement.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 800,
                    color: "#FFFFFF", textDecoration: "none", background: "#0055FF",
                    padding: "14px 28px", borderRadius: 50,
                    boxShadow: "0 4px 20px rgba(0,85,255,0.4)",
                    fontFamily: "var(--font-heading)", transition: "filter 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Obtenir mon devis gratuit
                </a>
                <a
                  href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600,
                    color: "rgba(255,255,255,0.80)", border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "14px 24px", borderRadius: 50, textDecoration: "none", fontFamily: "var(--font-body)",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Nous écrire sur WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left  { display: flex; width: max-content; animation: marquee-left  28s linear infinite; }
        .marquee-track-right { display: flex; width: max-content; animation: marquee-right 28s linear infinite; }
        @media (max-width: 900px) {
          .grid-beaute-hero,
          .grid-beaute-mockups,
          .grid-beaute-faq,
          .grid-beaute-focus,
          .grid-cols-beaute-split,
          .grid-cols-beaute-booking-split { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-beaute-besoins { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .grid-beaute-besoins { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
