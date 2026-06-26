"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  ShoppingCart,
  Globe,
  CheckCircle2,
  Plus,
  ArrowRight,
  Search,
  Smartphone,
  Zap,
  TrendingUp,
  Shield,
  LayoutTemplate,
  MousePointer,
  Star,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Définition des besoins",
    desc: "Identification de ce que vous attendez de la refonte : nouvelles fonctionnalités, objectifs commerciaux, cibles à atteindre.",
  },
  {
    num: "02",
    title: "Audit du site actuel",
    desc: "Analyse approfondie de votre site existant pour identifier les forces à conserver et les faiblesses à corriger.",
  },
  {
    num: "03",
    title: "Optimisation SEO",
    desc: "Rédaction de contenus textes optimisés, audit des redirections et plan de préservation du positionnement Google.",
  },
  {
    num: "04",
    title: "UX & Design",
    desc: "Refonte de l'architecture de navigation, maquettage des interfaces et création d'un design moderne à votre image.",
  },
  {
    num: "05",
    title: "Développement & migration",
    desc: "Intégration technique, migration des données existantes, développement des nouvelles fonctionnalités.",
  },
  {
    num: "06",
    title: "Validation & mise en ligne",
    desc: "Tests multi-appareils, recette avec vous et déploiement en production avec suivi post-lancement.",
  },
];

const reasons = [
  // Expérience utilisateur
  { icon: LayoutTemplate, kw: "Design modernisé",          group: "UX & identité" },
  { icon: Smartphone,     kw: "Responsive mobile",          group: "UX & identité" },
  { icon: MousePointer,   kw: "Conversion optimisée",       group: "UX & identité" },
  { icon: Star,           kw: "Image de marque alignée",    group: "UX & identité" },
  // Performance & technique
  { icon: TrendingUp,     kw: "Meilleur référencement SEO", group: "Performance & technique" },
  { icon: Zap,            kw: "Performances accrues",       group: "Performance & technique" },
  { icon: Shield,         kw: "Sécurité & RGPD",            group: "Performance & technique" },
  { icon: Search,         kw: "Taux de rebond réduit",      group: "Performance & technique" },
];

const faqs = [
  {
    q: "Combien coûte une refonte de site web ?",
    a: "Le coût varie selon la taille du site, la complexité des fonctionnalités, le CMS et l'étendue des modifications. Une refonte est généralement plus coûteuse qu'une création neuve car elle implique audit, migration de données et optimisation SEO. Chez BiDigital, nous établissons un devis personnalisé et transparent adapté à vos besoins. Contactez-nous pour une estimation gratuite.",
  },
  {
    q: "Quels sont les avantages d'une refonte de site web ?",
    a: "Une refonte améliore l'esthétique, la navigation et les performances de votre site. Elle augmente le temps passé par les visiteurs, améliore le taux de conversion, optimise le référencement naturel et permet d'aligner votre présence en ligne avec votre identité de marque actuelle. C'est un investissement qui dynamise durablement votre activité.",
  },
  {
    q: "Une refonte de site a-t-elle un impact sur le SEO ?",
    a: "Une refonte bien planifiée améliore le SEO : structure du site, vitesse de chargement, responsive design et contenus optimisés. En revanche, une refonte mal exécutée peut nuire à votre positionnement (URLs cassées, redirections manquantes). Chez BiDigital, nous prenons toutes les précautions nécessaires pour préserver et améliorer votre classement.",
  },
  {
    q: "À quelle fréquence faut-il refondre son site web ?",
    a: "Une refonte complète est généralement recommandée tous les 4 à 5 ans. Toutefois, des refontes partielles (design, contenu, performances) peuvent être réalisées plus régulièrement selon l'évolution de votre activité et des standards du web. Notre forfait maintenance inclut des mises à jour régulières pour éviter de partir de trop loin.",
  },
];

// ── Helper ────────────────────────────────────────────────────────────────────

function SectionBadge({ children }: { children: string }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
      style={{
        background: "#e2f7ff",
        color: "#0055FF",
        fontFamily: "var(--font-badge)",
      }}
    >
      {children}
    </span>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function RefonteSiteContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — split-screen asymétrique
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        {/* Halo bleu arrière-plan */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700, height: 700,
            top: "50%", left: "60%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(0,85,255,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Colonne gauche : image placeholder ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div
                className="relative rounded-3xl overflow-hidden w-full"
                style={{ aspectRatio: "4/5", maxHeight: 540 }}
              >
                <img
                  src="/images/refonte-hero.webp"
                  alt="Refonte site internet — maquettes et wireframes BiDigital"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fetchPriority="high" decoding="async" />

                {/* Card info en bas */}
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-2xl flex items-center gap-3"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    padding: "14px 18px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#e2f7ff" }}
                  >
                    <RefreshCw size={20} style={{ color: "#0055FF" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}>
                      Votre site — entièrement modernisé
                    </p>
                    <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
                      Design · Performance · SEO · RGPD
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Colonne droite : texte ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <SectionBadge>Agence web BiDigital</SectionBadge>

              <h1
                className="font-extrabold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                  letterSpacing: "-0.03em",
                  color: "#191e4f",
                }}
              >
                Refonte de{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  site internet
                </span>
                <br />
                sur-mesure
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 480 }}
              >
                Modernisez votre site et exploitez son plein potentiel. Nous redesignons, recodons et optimisons
                votre site existant pour le rendre plus performant, plus visible et conforme RGPD.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="btn-glow rounded-full">
                  <CalButton style={{ fontSize: 15, padding: "13px 24px", borderRadius: 50 }}>
                    Demander un devis gratuit
                  </CalButton>
                </div>
                <a
                  href="#processus"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#f8faff",
                    color: "#191e4f",
                    border: "1px solid rgba(25,30,79,0.08)",
                    borderRadius: 50,
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,85,255,0.3)";
                    e.currentTarget.style.background = "rgba(0,85,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(25,30,79,0.08)";
                    e.currentTarget.style.background = "#f8faff";
                  }}
                >
                  Notre processus
                  <ArrowRight size={15} />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QU'EST-CE QU'UNE REFONTE — Introduction
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <SectionBadge>Comprendre la refonte</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Qu&apos;est-ce qu&apos;une refonte de{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  site web ?
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
              La refonte de site web est un processus qui permet de faire évoluer un site existant en améliorant différents
              aspects. Une <strong style={{ color: "#191e4f" }}>refonte partielle</strong> cible un élément spécifique
              (design, SEO, performances), tandis qu&apos;une <strong style={{ color: "#191e4f" }}>refonte totale</strong>{" "}
              implique une révision complète : architecture, design, code et contenu.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
              Une refonte complète est recommandée tous les 4 à 5 ans pour rester aligné avec les comportements des
              utilisateurs et les standards du web. Chez BiDigital, nous commençons toujours par un audit complet de votre
              site existant pour définir la stratégie de refonte la plus adaptée à vos objectifs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LES ENJEUX — split 2 cols
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image placeholder — ambiance sombre code */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/refonte-audit.webp"
                alt="Audit et refonte site internet — analyse BiDigital"
                className="rounded-2xl w-full"
                style={{
                  aspectRatio: "16/10",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
                loading="lazy" decoding="async" />
            </motion.div>

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SectionBadge>Pourquoi refondre ?</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Les enjeux d&apos;une refonte{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    réussie
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Le principal enjeu d&apos;une refonte est l&apos;amélioration de l&apos;expérience utilisateur grâce à une
                interface intuitive et un design moderne. Elle vise aussi à optimiser le référencement naturel pour
                accroître la visibilité et le trafic organique.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Chez BiDigital, chaque refonte commence par un audit SEO complet. Nous préservons les éléments qui
                fonctionnent, corrigeons ce qui bloque et améliorons ce qui peut l&apos;être, avec une migration sécurisée
                pour ne perdre aucune de vos positions acquises sur Google.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOTRE PROCESSUS — 6 étapes
      ══════════════════════════════════════════════════════════════ */}
      <section id="processus" className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionBadge>Notre processus</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Comment réussir la refonte
              <br />
              de votre site internet
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="relative p-6 rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid rgba(25,30,79,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <span
                  className="absolute top-4 right-4 font-extrabold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "#0055FF",
                    opacity: 0.07,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                  aria-hidden
                >
                  {step.num}
                </span>
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold mb-3"
                  style={{ background: "#e2f7ff", color: "#0055FF", fontFamily: "var(--font-body)" }}
                >
                  Étape {step.num}
                </span>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          POURQUOI REFONDRE — 2 groupes compacts
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              Pourquoi refondre{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  votre site ?
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[...new Set(reasons.map((r) => r.group))].map((group, gi) => {
              const groupItems = reasons.filter((r) => r.group === group);
              return (
                <div
                  key={group}
                  className="rounded-2xl p-6"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(25,30,79,0.08)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <p
                    className="text-xs font-bold tracking-widest mb-5 uppercase"
                    style={{ fontFamily: "var(--font-badge)", color: "#0055FF" }}
                  >
                    {group}
                  </p>
                  <div className="flex flex-col gap-4">
                    {groupItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.kw}
                          initial={{ opacity: 0, x: gi === 0 ? -10 : 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: "#e2f7ff" }}
                          >
                            <Icon size={15} style={{ color: "#0055FF" }} />
                          </div>
                          <span
                            className="font-semibold text-sm"
                            style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                          >
                            {item.kw}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA CENTRAL — dark card
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl text-center"
            style={{
              background: "#16182e",
              padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 64px)",
            }}
          >
            {/* Halos */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: 560, height: 560,
                top: "50%", left: "25%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                width: 400, height: 400,
                bottom: "-20%", right: "5%",
                background: "radial-gradient(ellipse, rgba(0,210,255,0.14) 0%, transparent 65%)",
              }}
            />

            <div className="relative z-10">
              <span className="text-4xl block mb-5" aria-hidden>🚀</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", letterSpacing: "-0.025em" }}
              >
                Vous avez un projet refonte ?
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.60)", maxWidth: 440 }}
              >
                Partagez-nous votre site actuel et vos objectifs. Nous vous proposons un audit gratuit
                et un plan de refonte adapté à votre budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <CalButton
                  style={{ fontSize: 15, padding: "13px 28px", borderRadius: 50 }}
                >
                  Demander un devis
                </CalButton>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.80)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    padding: "13px 28px",
                    borderRadius: 50,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Écrire sur WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionBadge>FAQ</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Vos questions sur la refonte
              <br />
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  de site internet
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: openFaq === i ? "rgba(0,85,255,0.04)" : "#FFFFFF",
                  border: openFaq === i ? "1px solid rgba(0,85,255,0.2)" : "1px solid rgba(25,30,79,0.08)",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span
                    className="font-bold text-base leading-snug"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: openFaq === i ? "#0055FF" : "#191e4f",
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center"
                    style={{
                      borderColor: openFaq === i ? "rgba(0,85,255,0.4)" : "rgba(25,30,79,0.08)",
                      background: openFaq === i ? "rgba(0,85,255,0.08)" : "rgba(0,85,255,0.04)",
                    }}
                  >
                    <Plus size={16} style={{ color: openFaq === i ? "#0055FF" : "#474667" }} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div
                        className="px-6 pb-6 text-sm leading-relaxed border-t pt-4"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "#474667",
                          borderColor: "rgba(0,85,255,0.1)",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
