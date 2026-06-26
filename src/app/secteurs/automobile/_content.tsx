"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car, CheckCircle2, ChevronDown,
  Wrench, Search, Smartphone, CalendarCheck, MapPin, Gauge,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Palette ───────────────────────────────────────────────────────────────────
// #0055FF  bleu primaire  — accents, badges, icônes
// #00D2FF  cyan           — gradient endpoint
// #474667  gris-bleu      — texte body
// #191e4f  marine foncé   — titres, textes importants
// #16182e  quasi-noir     — fonds CTA dark
// #FFFFFF  blanc          — fonds clairs, cartes

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
  "Garage toutes marques", "Carrosserie", "Concessionnaire", "Vendeur VO",
  "Auto-école", "Location de voitures", "Contrôle technique", "Préparateur auto",
  "Vente de pièces", "Mécanicien indépendant", "Pressing auto / Detailing", "Remorquage / Dépannage",
  "Vitrerie auto", "Climatisation auto", "Électricien auto", "Tuning & Préparation",
];

const besoinItems = [
  { icon: Search,       label: "Être trouvé sur Google localement" },
  { icon: CalendarCheck,label: "Recevoir des demandes de RDV en ligne" },
  { icon: Wrench,       label: "Présenter vos services et spécialités" },
  { icon: MapPin,       label: "Dominer la carte Google Maps" },
  { icon: Gauge,        label: "Afficher votre stock de véhicules" },
  { icon: Smartphone,   label: "Convertir les visites mobiles en appels" },
];

const faqItems = [
  {
    q: "Pourquoi un garage ou un concessionnaire a besoin d'un site web ?",
    a: "Plus de 80 % des automobilistes cherchent un garage ou un vendeur en ligne avant de se déplacer. Sans site web professionnel, vous perdez ces clients au profit de la concurrence. Un site bien référencé génère des appels, des demandes de devis et des prises de RDV en continu — même le week-end.",
  },
  {
    q: "Peut-on afficher un catalogue de véhicules sur le site ?",
    a: "Oui. Nous intégrons une galerie de véhicules ou de fiches techniques avec photos, caractéristiques et prix. Vous pouvez gérer votre stock en direct depuis un back-office simple, sans aucune compétence technique. Chaque fiche est optimisée pour le SEO.",
  },
  {
    q: "Comment la prise de RDV en ligne fonctionne-t-elle ?",
    a: "Nous intégrons un module de réservation directement sur votre site : vos clients choisissent le service souhaité (vidange, révision, contrôle, devis…), sélectionnent un créneau disponible et reçoivent une confirmation automatique. Vous gérez tout depuis votre agenda numérique.",
  },
  {
    q: "Le SEO local est-il efficace pour l'automobile ?",
    a: "Absolument. Les recherches comme « garage [ville] », « carrosserie pas chère [quartier] » ou « contrôle technique près de moi » génèrent un trafic très qualifié. Nous optimisons votre fiche Google My Business, vos balises locales et vos pages pour que vous apparaissiez en tête de ces recherches.",
  },
  {
    q: "Combien coûte un site web pour garage ou concessionnaire ?",
    a: "Nous établissons un devis gratuit et personnalisé selon votre activité et votre zone. Contactez-nous pour une estimation sous 24h, sans engagement.",
  },
];

export default function AutomobileContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, paddingBottom: 0, overflowX: "hidden" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
          className="grid-auto-hero"
        >
          {/* Gauche — texte */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {["Automobile", "Garage", "Concessionnaire"].map((t) => (
                <span key={t} style={{
                  padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                  background: "rgba(0,85,255,0.08)", border: "1px solid rgba(0,85,255,0.25)",
                  color: "#0055FF", fontFamily: "var(--font-heading)",
                }}>
                  {t}
                </span>
              ))}
            </div>

            <h1 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 900, color: "#191e4f", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              Un site web qui ramène{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                des clients dans votre garage
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
              BiDigital crée des sites internet sur-mesure pour les professionnels de l&apos;automobile.
              Prise de RDV en ligne, galerie de véhicules, SEO local — une présence digitale
              qui convertit chaque recherche Google en client fidèle.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <CalButton style={{
                fontSize: 15, padding: "12px 24px", borderRadius: 50,
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                color: "#FFFFFF", boxShadow: "0 4px 18px rgba(0,85,255,0.35)",
                border: "none", fontWeight: 700,
              }}>
                Demander un devis gratuit
              </CalButton>
            </div>
          </motion.div>

          {/* Droite — visuel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 480 }}
          >
            <div style={{
              position: "absolute", top: 20, right: 0, bottom: 0,
              width: "70%", background: "rgba(0,85,255,0.08)",
              borderRadius: 24, zIndex: 0,
            }} />

            <div style={{
              position: "relative", zIndex: 1,
              width: "85%", height: 420,
              borderRadius: 20, overflow: "hidden",
            }}>
              <img
                src="/images/automobile-hero.webp"
                alt="Garage automobile — mécanique et service professionnel BiDigital"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                fetchPriority="high" decoding="async" />
            </div>
          </motion.div>
        </div>

        {/* Vos besoins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ maxWidth: 1100, margin: "64px auto 0", padding: "0 24px 72px" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 24, textAlign: "center" }}>
            Vos besoins
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-auto-besoins">
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

      {/* ── INTRODUCTION CENTRÉE ──────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>Pourquoi un site web ?</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            Votre garage mérite une vitrine à la hauteur de votre{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                expertise
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85, marginBottom: 20 }}>
            Aujourd&apos;hui, <strong style={{ color: "#191e4f" }}>plus de 80 % des automobilistes recherchent un prestataire en ligne</strong> avant
            de décrocher leur téléphone ou de se déplacer. Sans site web professionnel, ce sont vos
            concurrents qui captent ces clients — même s&apos;ils sont moins compétents que vous.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85 }}>
            Chez BiDigital, nous créons des sites internet sur-mesure pour les professionnels de l&apos;automobile :
            garages toutes marques, carrosseries, concessionnaires, auto-écoles… Des sites{" "}
            <strong style={{ color: "#191e4f" }}>pensés pour votre secteur</strong>, optimisés pour le référencement
            local et conçus pour transformer chaque visiteur en client.
          </p>
        </motion.div>
      </section>

      {/* ── MAQUETTE DESKTOP ─────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
          style={{ maxWidth: 1050, margin: "0 auto" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 12, textAlign: "center" }}>
            Exemple de site automobile
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em",
            marginBottom: 16, textAlign: "center",
          }}>
            Un site qui travaille pour vous{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                24h/24
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.75, marginBottom: 48, textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            Prise de rendez-vous en ligne, présentation de vos services, catalogue de véhicules — tout ce dont vos clients ont besoin, accessible en quelques clics.
          </p>

          {/* Browser mockup */}
          <div style={{
            background: "#FFFFFF", borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(25,30,79,0.08)",
          }}>
            {/* Browser chrome */}
            <div style={{ background: "#F8FAFC", borderBottom: "1px solid rgba(25,30,79,0.08)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{ flex: 1, background: "#FFFFFF", borderRadius: 6, padding: "4px 12px", fontSize: 12, color: "#474667", fontFamily: "var(--font-body)", border: "1px solid rgba(25,30,79,0.08)", marginLeft: 12 }}>
                garage-exemple.fr
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "32px 32px 24px" }}>
              {/* Navbar simulée */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid rgba(25,30,79,0.08)" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 18, color: "#191e4f" }}>Garage Dupont <span style={{ color: "#0055FF" }}>Auto</span></div>
                <div style={{ display: "flex", gap: 20 }}>
                  {["Services", "Véhicules", "RDV", "Contact"].map((m) => (
                    <span key={m} style={{ fontSize: 13, color: "#474667", fontFamily: "var(--font-body)", fontWeight: 500 }}>{m}</span>
                  ))}
                </div>
                <div style={{ background: "#0055FF", color: "#FFF", fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 8, fontFamily: "var(--font-heading)" }}>
                  Prendre RDV
                </div>
              </div>

              {/* Hero simulé */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#191e4f", fontFamily: "var(--font-heading)", lineHeight: 1.2, marginBottom: 10 }}>
                    Garage toutes marques<br /><span style={{ color: "#0055FF" }}>à Bordeaux</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#474667", fontFamily: "var(--font-body)", lineHeight: 1.7, marginBottom: 16 }}>
                    Révision, réparation, diagnostic électronique. Devis gratuit sous 24h.
                  </p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ background: "#0055FF", color: "#FFF", fontSize: 11, fontWeight: 700, padding: "7px 14px", borderRadius: 8, fontFamily: "var(--font-heading)" }}>Prendre RDV</div>
                    <div style={{ border: "1px solid rgba(0,85,255,0.3)", color: "#0055FF", fontSize: 11, fontWeight: 600, padding: "7px 14px", borderRadius: 8, fontFamily: "var(--font-body)" }}>Nos tarifs</div>
                  </div>
                </div>
                <div style={{ background: "linear-gradient(90deg, rgba(0,85,255,0.08) 0%, rgba(0,210,255,0.06) 100%)", borderRadius: 12, padding: 16 }}>
                  {/* Module RDV */}
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 10 }}>PRENDRE UN RENDEZ-VOUS</div>
                  {[
                    { label: "Service", value: "Révision complète" },
                    { label: "Date", value: "Mardi 18 juin" },
                    { label: "Heure", value: "09h00" },
                  ].map((row) => (
                    <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(25,30,79,0.08)" }}>
                      <span style={{ fontSize: 11, color: "#474667", fontFamily: "var(--font-body)" }}>{row.label}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-heading)" }}>{row.value}</span>
                    </div>
                  ))}
                  <div style={{ background: "#0055FF", color: "#FFF", fontSize: 11, fontWeight: 700, textAlign: "center", padding: "8px", borderRadius: 8, marginTop: 10, fontFamily: "var(--font-heading)" }}>
                    Confirmer le RDV →
                  </div>
                </div>
              </div>

              {/* Services row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", gap: 10 }}>
                {["Révision & vidange", "Carrosserie", "Diagnostic", "Pneus"].map((s) => (
                  <div key={s} style={{
                    padding: "10px 12px", borderRadius: 10, textAlign: "center",
                    background: "rgba(0,85,255,0.05)", border: "1px solid rgba(25,30,79,0.08)",
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-heading)" }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FONCTIONNALITÉS CLÉS ─────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl"
            style={{ background: "#16182e", padding: "clamp(36px, 6vw, 72px) clamp(24px, 5vw, 64px)" }}
          >
            {/* Glow top-left */}
            <div className="absolute pointer-events-none" style={{ top: 0, left: 0, width: 700, height: 700, background: "radial-gradient(circle at top left, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)", zIndex: 0 }} />
            {/* Glow bottom-right */}
            <div className="absolute pointer-events-none" style={{ bottom: 0, right: 0, width: 500, height: 500, background: "radial-gradient(circle at bottom right, rgba(0,210,255,0.10) 0%, transparent 65%)", zIndex: 0 }} />
            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px", zIndex: 0 }} />

            <div className="relative" style={{ zIndex: 1 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 12, textAlign: "center" }}>
                Ce que nous créons
              </p>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.025em",
                marginBottom: 48, textAlign: "center",
              }}>
                Tout ce qu&apos;un professionnel de l&apos;automobile attend de son site
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="grid-auto-features">
                {[
                  {
                    icon: CalendarCheck,
                    title: "Prise de RDV en ligne",
                    desc: "Vos clients réservent leur créneau directement sur votre site — révision, vidange, diagnostic ou devis — sans appel téléphonique.",
                  },
                  {
                    icon: Car,
                    title: "Catalogue de véhicules",
                    desc: "Affichez votre stock de voitures d'occasion avec fiches descriptives, photos HD et prix. Gérez votre inventaire en temps réel.",
                  },
                  {
                    icon: Search,
                    title: "SEO local optimisé",
                    desc: "Apparaissez en tête des résultats Google pour « garage [votre ville] », « carrosserie [quartier] » et toutes les recherches de proximité.",
                  },
                  {
                    icon: Wrench,
                    title: "Présentation de vos services",
                    desc: "Détaillez chaque prestation avec des prix indicatifs, délais et garanties. Rassurez vos prospects avant même qu'ils vous contactent.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
                      style={{
                        background: "rgba(255,255,255,0.04)", borderRadius: 16,
                        border: "1px solid rgba(0,85,255,0.2)", padding: "28px 28px",
                      }}
                    >
                      <div style={{
                        width: 44, height: 44, borderRadius: 12,
                        background: "#e2f7ff",
                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                      }}>
                        <Icon size={20} color="#0055FF" />
                      </div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DOUBLE MAQUETTES ─────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }} className="grid-auto-double">
          {/* Gauche — îlot coloré maquette RDV */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
            style={{ background: "rgba(0,85,255,0.07)", borderRadius: 20, padding: 32 }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 12 }}>
              Votre agenda en ligne
            </p>
            {/* Simulation agenda */}
            <div style={{ background: "#FFFFFF", borderRadius: 14, padding: "20px 20px" }}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "#191e4f", marginBottom: 16 }}>Juin 2025</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 16 }}>
                {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((d) => (
                  <div key={d} style={{ textAlign: "center", fontSize: 10, fontWeight: 600, color: "#474667", fontFamily: "var(--font-heading)" }}>{d}</div>
                ))}
                {[
                  { d: "16", busy: false }, { d: "17", busy: true }, { d: "18", busy: false },
                  { d: "19", busy: true }, { d: "20", busy: false },
                  { d: "23", busy: false }, { d: "24", busy: false }, { d: "25", busy: true },
                  { d: "26", busy: false }, { d: "27", busy: false },
                ].map((slot) => (
                  <div key={slot.d} style={{
                    textAlign: "center", fontSize: 12, fontWeight: 600,
                    padding: "8px 4px", borderRadius: 8,
                    background: slot.busy ? "#e2f7ff" : "transparent",
                    color: slot.busy ? "#0055FF" : "#191e4f",
                    fontFamily: "var(--font-heading)",
                    border: slot.busy ? "1px solid rgba(0,85,255,0.25)" : "1px solid transparent",
                  }}>{slot.d}</div>
                ))}
              </div>
              <div style={{ background: "rgba(0,85,255,0.08)", borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 4 }}>Créneau sélectionné</div>
                <div style={{ fontSize: 12, color: "#191e4f", fontFamily: "var(--font-body)" }}>Mardi 17 juin — 09h00 / Révision complète</div>
              </div>
            </div>
          </motion.div>

          {/* Droite — texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
          >
            <SectionBadge>Agenda & réservation</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20,
            }}>
              Vos clients prennent RDV à{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  n&apos;importe quelle heure
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 24 }}>
              Fini les appels manqués et les messages sans réponse. Votre agenda en ligne est disponible
              24h/24, 7j/7 — vos clients réservent leur créneau en autonomie et reçoivent une confirmation
              automatique par e-mail ou SMS.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Créneaux synchronisés avec votre agenda", "Confirmation automatique client & garage", "Rappel de RDV par e-mail / SMS", "Gestion des annulations en 1 clic"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={17} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#474667", fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </section>

      {/* ── SEO LOCAL + HALO ─────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: -100,
          width: 500, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,85,255,0.08) 0%, transparent 65%)",
          transform: "translateY(-50%)", pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }} className="grid-auto-seo">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
          >
            <SectionBadge>Référencement local</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 20,
            }}>
              Quand un automobiliste cherche un garage dans votre ville,{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  c&apos;est vous qu&apos;il trouve
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 28 }}>
              Nous optimisons votre site et votre fiche Google My Business pour que vous apparaissiez
              en tête des résultats sur les recherches locales : <em>« garage toutes marques Bordeaux »</em>,{" "}
              <em>« carrosserie pas chère Lyon »</em>, <em>« vidange rapide près de moi »</em>…
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Fiche Google My Business optimisée", "Pages SEO par service et par ville", "Avis clients intégrés et mis en avant", "Temps de chargement < 2 secondes"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={17} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#474667", fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
          >
            {/* Simulation résultats Google */}
            <div style={{ background: "#FFFFFF", borderRadius: 16, padding: "24px", border: "1px solid rgba(25,30,79,0.08)" }}>
              <div style={{ fontSize: 11, color: "#474667", fontFamily: "var(--font-body)", marginBottom: 16 }}>
                Résultats Google — « <strong>garage toutes marques bordeaux</strong> »
              </div>
              {[
                { name: "Garage Dupont Auto — Bordeaux", url: "garage-dupont-auto.fr", desc: "Révision, vidange, carrosserie. Devis gratuit. ⭐ 4,9 · 187 avis" },
                { name: "Votre concurrent", url: "concurrent.fr", desc: "Garage Bordeaux Centre..." },
                { name: "Un autre concurrent", url: "garage-xyz.fr", desc: "Mécanique générale..." },
              ].map((r, i) => (
                <div key={r.name} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: i < 2 ? "1px solid rgba(25,30,79,0.07)" : "none" }}>
                  <div style={{ fontSize: 11, color: "#474667", fontFamily: "var(--font-body)", marginBottom: 2 }}>{r.url}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? "#0055FF" : "#191e4f", fontFamily: "var(--font-heading)", marginBottom: 3 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#474667", fontFamily: "var(--font-body)" }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LES MÉTIERS ──────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-heading)", marginBottom: 12, textAlign: "center" }}>
            Les métiers
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em",
            marginBottom: 36, textAlign: "center",
          }}>
            Vous exercez dans l&apos;automobile ? On crée{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                votre site
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            .
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {metiers.map((m) => (
              <span key={m} style={{
                padding: "8px 18px", borderRadius: 999, fontSize: 14, fontWeight: 500,
                background: "rgba(0,85,255,0.06)", border: "1px solid rgba(25,30,79,0.08)",
                color: "#191e4f", fontFamily: "var(--font-body)",
              }}>
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionBadge>Questions fréquentes</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em",
            }}>
              Tout ce que vous voulez{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  savoir
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  background: "#FFFFFF", borderRadius: 14,
                  border: "1px solid rgba(25,30,79,0.08)",
                  overflow: "hidden", boxShadow: openFaq === i ? "0 8px 32px rgba(25,30,79,0.10)" : "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: openFaq === i ? "#0055FF" : "#191e4f", lineHeight: 1.4, flex: 1, marginRight: 12 }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{ color: "#0055FF", flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 24px 20px" }}>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", lineHeight: 1.8 }}>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA DARK ─────────────────────────────────────────────────── */}
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
              <h2 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20,
              }}>
                Prêt à attirer plus de clients dans votre garage ?
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.75, marginBottom: 36 }}>
                Réservez un appel gratuit de 30 minutes. On analyse votre situation, on répond à vos questions,
                et on vous propose une solution adaptée à votre activité et à votre budget.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <CalButton style={{
                  fontSize: 16, padding: "14px 32px", borderRadius: 50,
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#FFFFFF",
                  border: "none", fontWeight: 700, boxShadow: "0 4px 20px rgba(0,85,255,0.4)",
                }}>
                  Réserver un appel gratuit
                </CalButton>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.80)",
                    textDecoration: "none", padding: "14px 28px",
                    border: "1px solid rgba(255,255,255,0.14)", borderRadius: 50,
                    background: "rgba(255,255,255,0.08)",
                    fontFamily: "var(--font-body)", transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Écrire sur WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .grid-auto-hero, .grid-auto-double, .grid-auto-seo, .grid-auto-mobile {
            grid-template-columns: 1fr !important;
          }
          .grid-auto-besoins {
            grid-template-columns: 1fr 1fr !important;
          }
          .grid-auto-features {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .grid-auto-besoins {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
