"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed, Star, CheckCircle2, ChevronDown,
  MapPin, Clock, Smartphone, Search, ShoppingCart,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Palette ───────────────────────────────────────────────────────────────────
// #0055FF  bleu primaire     — accents, badges, icônes
// #00D2FF  cyan clair        — endpoint de gradient
// #474667  gris-violet       — texte body
// #191e4f  indigo foncé      — titres, textes importants
// #16182e  quasi-noir indigo — fonds dark (CTA, sections sombres)
// #f8faff  blanc-bleu        — fonds clairs alternés
// #e2f7ff  bleu très clair   — containers icônes, badges

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        background: "#e2f7ff",
        color: "#0055FF",
        fontFamily: "var(--font-badge)",
        marginBottom: 20,
      }}
    >
      {children}
    </span>
  );
}

const features = [
  { icon: UtensilsCrossed, title: "Menu en ligne interactif",   desc: "Présentez vos plats avec photos, descriptions, allergènes et prix — mis à jour en quelques clics." },
  { icon: Clock,           title: "Réservation en ligne",       desc: "Un système de réservation intégré directement dans votre site, sans commission tiers." },
  { icon: ShoppingCart,    title: "Click & collect",            desc: "Proposez la commande en ligne à emporter et augmentez votre chiffre d'affaires sans salle supplémentaire." },
  { icon: Search,          title: "SEO local Google",           desc: "Apparaissez en premier lorsqu'un client cherche \"restaurant [votre ville]\" sur Google." },
  { icon: MapPin,          title: "Fiche Google optimisée",     desc: "Intégration de Google Maps, avis clients et horaires synchronisés pour rassurer vos visiteurs." },
  { icon: Smartphone,      title: "100% mobile-first",          desc: "75% des recherches restau se font sur mobile. Votre site est parfait sur tous les écrans." },
];

const avantages = [
  "Design sur-mesure à votre image culinaire",
  "Référencement local optimisé dès le lancement",
  "Réservations et commandes directement sur votre site",
  "Photos de plats haute qualité valorisées",
  "Avis clients intégrés pour rassurer vos visiteurs",
  "Conformité RGPD et accessibilité incluses",
  "Hébergement rapide et sécurisé inclus",
];

const faqItems = [
  {
    q: "Combien coûte un site web pour restaurant ?",
    a: "Chaque projet est unique — nous établissons un devis personnalisé gratuit selon vos besoins (menu en ligne, réservation, click & collect) avant tout engagement.",
  },
  {
    q: "Puis-je mettre à jour mon menu moi-même ?",
    a: "Absolument. Nous intégrons un back-office simple qui vous permet de modifier vos plats, prix et disponibilités en quelques clics — sans aucune compétence technique. Vous gardez le contrôle total de votre contenu.",
  },
  {
    q: "Combien de temps faut-il pour créer mon site ?",
    a: "Un site vitrine est généralement livré en 2 à 3 semaines. Un site avec des fonctionnalités avancées (réservation, click & collect) prend 4 à 6 semaines. Nous vous accompagnons à chaque étape.",
  },
  {
    q: "Est-ce que le SEO local est inclus ?",
    a: "Oui. Chaque site que nous créons est optimisé pour le référencement local dès la mise en ligne : balises sémantiques, données structurées (Schema.org Restaurant), Google My Business synchronisé et performances techniques optimales.",
  },
  {
    q: "Que se passe-t-il après la livraison du site ?",
    a: "Nous proposons des forfaits de maintenance mensuelle pour gérer les mises à jour, la sécurité et les sauvegardes. Vous pouvez aussi opter pour la maintenance autonome — votre site vous appartient entièrement.",
  },
];

export default function RestaurationContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── 1. HERO ── */}
      <section style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, paddingBottom: 0, overflowX: "hidden" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
          className="grid-cols-hero-restauration"
        >
          {/* Col gauche */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {["Restauration", "Site vitrine", "E-commerce"].map((tag) => (
                <span key={tag} style={{
                  padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                  background: "rgba(0,85,255,0.08)", border: "1px solid rgba(0,85,255,0.25)",
                  color: "#0055FF", fontFamily: "var(--font-body)",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 900, color: "#191e4f", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              Le site web qui fait venir{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                vos clients à table
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
              BiDigital crée des sites web sur-mesure pour les restaurants, cafés
              et traiteurs. Menu en ligne, réservation, SEO local — une présence
              digitale qui convertit les recherches Google en couverts.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <CalButton style={{
                fontSize: 15, padding: "12px 24px", borderRadius: 50,
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                color: "#FFFFFF", boxShadow: "0 4px 18px rgba(0,85,255,0.35)",
                border: "none", fontWeight: 700,
              }}>
                Discuter de mon projet
              </CalButton>
              <a
                href="#nos-services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 15, fontWeight: 600, color: "#474667",
                  textDecoration: "none", padding: "12px 20px",
                  border: "1px solid rgba(25,30,79,0.08)", borderRadius: 50,
                  fontFamily: "var(--font-body)", transition: "color 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0055FF"; e.currentTarget.style.borderColor = "rgba(0,85,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#474667"; e.currentTarget.style.borderColor = "rgba(25,30,79,0.08)"; }}
              >
                Voir nos services →
              </a>
            </div>

          </motion.div>

          {/* Col droite */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }} style={{ position: "relative" }}>
            {/* Forme décorative */}
            <div style={{
              position: "absolute", top: -32, right: -32, width: "90%", height: "110%",
              background: "rgba(0,85,255,0.08)",
              borderRadius: 28, zIndex: 0,
            }} />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/restaurent-1.webp"
              alt="Création site internet pour restaurants et food"
              style={{
                position: "relative", zIndex: 1,
                width: "100%", height: 520,
                borderRadius: 20, display: "block",
                objectFit: "cover",
              }}
              fetchPriority="high" decoding="async" />
          </motion.div>
        </div>

        <div style={{ height: 80, background: "linear-gradient(to bottom, transparent 0%, rgba(0,85,255,0.03) 100%)", marginTop: 64 }} />
      </section>

      {/* ── 2. INTRODUCTION — fond clair alterné ── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>La restauration à l&apos;ère numérique</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15,
            letterSpacing: "-0.025em", marginBottom: 24,
          }}>
            Votre restaurant mérite une vitrine digitale à la hauteur de votre cuisine
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.8, marginBottom: 20 }}>
            En 2024, <strong style={{ color: "#191e4f" }}>87% des clients cherchent un restaurant en ligne</strong> avant de réserver.
            Un site web bien conçu n&apos;est plus un luxe — c&apos;est votre premier serveur. Celui qui accueille,
            convainc et déclenche la réservation, 24h/24, même quand votre salle est fermée.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.8, marginBottom: 20 }}>
            Chez BiDigital, nous comprenons les contraintes du secteur : vous n&apos;avez ni le temps ni les ressources
            pour gérer un site complexe. C&apos;est pourquoi nous créons des sites <strong style={{ color: "#191e4f" }}>simples à gérer,
            beaux à regarder</strong> et conçus pour attirer de nouveaux clients via Google.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.8 }}>
            Menu en ligne actualisable, formulaire de <strong style={{ color: "#191e4f" }}>réservation intégré</strong>,
            fiche Google optimisée, photos de plats valorisées — nous gérons tout de A à Z pour que vous puissiez
            vous concentrer sur ce qui compte : votre cuisine.
          </p>
        </motion.div>
      </section>

      {/* ── 3. SPLIT — Mockup site / texte ── */}
      <section style={{ background: "#ffffff", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="grid-cols-restauration-split"
        >
          {/* Photo restaurant */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/restaurent.webp"
              alt="Restaurant — ambiance et tradition"
              style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 20, display: "block", boxShadow: "0 20px 60px rgba(25,30,79,0.15)" }}
              loading="lazy" decoding="async" />
          </motion.div>

          {/* Texte */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <SectionBadge>Ce que nous créons</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.15,
              letterSpacing: "-0.025em", marginBottom: 20,
            }}>
              Un site à la hauteur de la tradition de votre restaurant
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 16 }}>
              Chaque restaurant a une histoire, un univers visuel, une identité forte. Nous créons
              des sites web qui <strong style={{ color: "#191e4f" }}>racontent cette histoire</strong> et donnent
              envie aux clients de pousser votre porte — ou de commander en ligne.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 28 }}>
              Du choix des couleurs et typographies à la mise en valeur de vos plats signatures,
              tout est pensé pour créer une expérience cohérente entre votre établissement physique
              et votre présence digitale.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Design personnalisé à votre univers culinaire", "Menu actualisable sans développeur", "SEO local pour attirer les clients à proximité"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={18} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#474667", fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── 6. NOS SERVICES — fond blanc ── */}
      <section id="nos-services" style={{ background: "#ffffff", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <SectionBadge>Ce que nous faisons pour vous</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em" }}>
              Tout ce dont votre restaurant a besoin,{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  dans un seul site
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-cols-services-restauration">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  style={{ background: "#FFFFFF", border: "1px solid rgba(25,30,79,0.08)", borderRadius: 16, padding: "28px 24px", transition: "box-shadow 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "#e2f7ff",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
                  }}>
                    <Icon size={22} style={{ color: "#0055FF" }} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: "#191e4f", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. AVANTAGES — fond clair alterné + checkmarks ── */}
      <section style={{ background: "#f8faff", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="grid-cols-avantages-restauration"
        >
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
            <SectionBadge>Pourquoi BiDigital ?</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20,
            }}>
              Une agence web qui comprend les contraintes de votre secteur
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8 }}>
              Nous avons accompagné des restaurateurs, cafetiers et traiteurs dans leur transformation
              digitale. Nous savons que votre priorité est votre cuisine — pas votre site web.
              C&apos;est exactement pour ça que nous sommes là.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {avantages.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 12,
                  padding: "14px 18px", background: "#FFFFFF", borderRadius: 12,
                  border: "1px solid rgba(25,30,79,0.08)",
                }}
              >
                <CheckCircle2 size={18} style={{ color: "#0055FF", flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667" }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ── 9. FAQ — 2 colonnes ── */}
      <section style={{ background: "#ffffff", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="grid-cols-faq-restauration"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            style={{ position: "sticky", top: 100 }}
          >
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 16 }}>
              Vos questions sur la création de site restaurant
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.7, marginBottom: 24 }}>
              Vous avez d&apos;autres questions ? Contactez-nous — nous répondons en moins de 24h.
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
                    <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0 24px 24px", fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.75 }}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA FINAL ── */}
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
                Propulsez votre restaurant sur{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    Google dès maintenant
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.7, marginBottom: 40 }}>
                Chaque jour sans site web, c&apos;est des clients qui vont chez votre concurrent.
                Lançons votre présence digitale ensemble — devis gratuit sous 24h.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 700,
                    color: "#FFFFFF", textDecoration: "none", background: "#0055FF",
                    padding: "14px 28px", borderRadius: 50,
                    boxShadow: "0 4px 20px rgba(0,85,255,0.4)",
                    fontFamily: "var(--font-heading)", transition: "filter 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Obtenir mon devis gratuit
                </a>
                <CalButton style={{
                  fontSize: 15, padding: "14px 24px", borderRadius: 50,
                  background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.80)",
                  boxShadow: "none", border: "1px solid rgba(255,255,255,0.14)", fontWeight: 600,
                }}>
                  Prendre RDV
                </CalButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .grid-cols-hero-restauration,
          .grid-cols-restauration-split,
          .grid-cols-avantages-restauration,
          .grid-cols-faq-restauration {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .grid-cols-screenshots { grid-template-columns: 1fr !important; }
          .grid-cols-services-restauration { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .grid-cols-services-restauration { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
