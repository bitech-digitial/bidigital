"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Smartphone, Globe, Search, FileText, ImageIcon, Gauge,
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
  "Maçons", "Peintres", "Plombiers", "Électriciens",
  "Menuisiers", "Charpentiers", "Couvreurs", "Carreleurs",
  "Serruriers", "Jardiniers / Paysagistes", "Climaticiens", "Piscinistes",
  "Façadiers", "Terrassiers", "Domoticiens", "Cuisinistes",
];


const besoinItems = [
  { icon: Search,    label: "Gagner en visibilité locale" },
  { icon: FileText,  label: "Générer plus de demandes de devis" },
  { icon: ImageIcon, label: "Mettre en avant vos réalisations" },
  { icon: Globe,     label: "Vous démarquer de vos concurrents" },
  { icon: Gauge,     label: "Accroître les prises de contact" },
  { icon: Smartphone,label: "Être trouvé sur mobile" },
];

const faqItems = [
  {
    q: "Pourquoi un artisan du bâtiment a besoin d'un site web ?",
    a: "Aujourd'hui, 78% des consommateurs recherchent un artisan sur Google avant de contacter quiconque. Sans site web, vous perdez ces clients au profit de vos concurrents. Un site bien référencé génère des demandes de devis en continu, même quand vous êtes sur le chantier.",
  },
  {
    q: "Combien coûte un site web pour artisan du bâtiment ?",
    a: "Nous établissons un devis personnalisé gratuit selon vos besoins et votre zone géographique. Contactez-nous pour une estimation sous 24h, sans engagement.",
  },
  {
    q: "Puis-je ajouter mes photos de chantiers moi-même ?",
    a: "Absolument. Chaque site intègre un back-office simple pour ajouter ou modifier vos photos de réalisations, vos témoignages clients et vos textes — sans aucune compétence technique. Votre site évolue au rythme de vos chantiers.",
  },
  {
    q: "Le SEO local est-il vraiment efficace pour le bâtiment ?",
    a: "Oui, et c'est particulièrement puissant pour les artisans car vos clients cherchent toujours à proximité (\"plombier [ville]\", \"électricien [quartier]\"). Nous optimisons votre fiche Google My Business, vos balises locales et vos pages pour dominer ces recherches de proximité.",
  },
  {
    q: "Combien de temps pour créer le site ?",
    a: "Un site vitrine artisan est généralement livré en 2 à 3 semaines après validation du brief et de vos contenus. Nous vous accompagnons pour collecter les photos, textes et informations nécessaires — aucune expérience technique requise de votre côté.",
  },
];

export default function BatimentContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── B. HERO — Split-screen asymétrique ───────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, paddingBottom: 0, overflowX: "hidden" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
          className="grid-batiment-hero"
        >
          {/* Gauche — texte */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {["Bâtiment", "Artisans", "Site vitrine"].map((t) => (
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
              fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.8vw, 3rem)",
              fontWeight: 900, color: "#191e4f", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              Faites rentrer les devis{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                pendant que vous êtes sur le chantier
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
              BiDigital crée des sites internet sur-mesure pour les artisans du bâtiment.
              Formulaire de devis, galerie de réalisations, SEO local — un site qui travaille
              pour vous 24h/24.
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

          {/* Droite — visuel avec rectangle fond cyan */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }} style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 480 }}>
            {/* Rectangle vertical fond — signature DA Bagizy */}
            <div style={{
              position: "absolute", top: 20, right: 0, bottom: 0,
              width: "70%", background: "rgba(0,85,255,0.08)",
              borderRadius: 24, zIndex: 0,
            }} />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/batiment-hero-new.webp"
              alt="Site internet pour entreprises du bâtiment et artisans"
              style={{
                position: "relative", zIndex: 1,
                width: "85%", height: 420,
                borderRadius: 20, display: "block",
                objectFit: "cover",
              }}
              fetchPriority="high" decoding="async" />
          </motion.div>
        </div>

        {/* Vos besoins — bandeau horizontal juste sous le hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ maxWidth: 1100, margin: "64px auto 0", padding: "0 24px 72px" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 24, textAlign: "center" }}>
            Vos besoins
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-batiment-besoins">
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

      {/* ── C. INTRODUCTION CENTRÉE ──────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>Pourquoi un site web ?</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            Artisans du bâtiment : votre premier chantier, c&apos;est votre visibilité en ligne
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85, marginBottom: 20 }}>
            Aujourd&apos;hui, <strong style={{ color: "#191e4f" }}>78% des consommateurs cherchent un artisan sur Google</strong> avant
            de décrocher leur téléphone. Sans présence web, vous êtes invisible — et ce sont vos concurrents qui récoltent
            ces demandes de devis. Faire connaître votre activité en ligne n&apos;est plus une option, c&apos;est une nécessité.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85 }}>
            Chez BiDigital, nous concevons des sites internet sur-mesure pour les artisans du bâtiment : maçons, plombiers,
            électriciens, peintres, menuisiers, couvreurs… Des sites <strong style={{ color: "#191e4f" }}>pensés pour votre secteur</strong>,
            optimisés pour le référencement local et conçus pour transformer chaque visiteur en client.
          </p>
        </motion.div>
      </section>

      {/* ── J. LES MÉTIERS — grille de badges ────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
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
            Choisissez l&apos;offre adaptée à votre secteur
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.7, marginBottom: 40, textAlign: "center" }}>
            BiDigital accompagne tous les corps de métier du bâtiment dans leur transformation digitale.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {metiers.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                style={{
                  padding: "10px 20px", borderRadius: 999,
                  background: "#FFFFFF", border: "1px solid rgba(25,30,79,0.08)",
                  fontSize: 14, fontWeight: 600, color: "#191e4f",
                  fontFamily: "var(--font-body)", cursor: "default",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,85,255,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,85,255,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#0055FF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,30,79,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#191e4f";
                }}
              >
                {m}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="grid-batiment-faq"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} style={{ position: "sticky", top: 100 }}>
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.2vw, 2rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Vos questions sur la création de site pour artisan
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.7, marginBottom: 24 }}>
              Vous avez d&apos;autres questions ? Contactez-nous — réponse garantie sous 24h.
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

      {/* ── K. CTA FINAL ─────────────────────────────────────────────────── */}
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
              <div style={{ fontSize: 40, marginBottom: 20 }}>🚀</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Boostez la visibilité de{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    votre entreprise artisanale
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.7, marginBottom: 40 }}>
                Nos experts du web vous accompagnent de A à Z — brief, design, rédaction, mise en ligne.
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
        @media (max-width: 900px) {
          .grid-batiment-hero,
          .grid-batiment-mobile,
          .grid-batiment-faq { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-batiment-offres { grid-template-columns: 1fr !important; }
          .grid-batiment-besoins { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .grid-batiment-besoins { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
