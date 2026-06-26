"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  TrendingUp,
  Wrench,
  Clock,
  BarChart2,
  Link2,
  Star,
  Plus,
  ArrowRight,
  FileSearch,
  Gauge,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: FileSearch,
    title: "Audit SEO complet",
    desc: "Diagnostic précis de votre site : analyse technique, sémantique et de l'autorité de domaine. On identifie les freins et les opportunités de croissance.",
  },
  {
    icon: Wrench,
    title: "Optimisation technique",
    desc: "Vitesse de chargement, Core Web Vitals, structure des URLs, balises Hn, données structurées, indexation : on optimise chaque levier technique.",
  },
  {
    icon: Search,
    title: "SEO sémantique & contenu",
    desc: "Recherche de mots-clés, siloing thématique, rédaction optimisée et maillage interne pour asseoir votre autorité sur vos sujets cibles.",
  },
];

const raisons = [
  {
    icon: Star,
    kw: "Expertise spécialisée",
    stat: "Algorithmes Google",
    desc: "Nos experts suivent les mises à jour d'algorithmes et maîtrisent les meilleures pratiques : technique, sémantique et netlinking.",
  },
  {
    icon: TrendingUp,
    kw: "Outils SEO de pointe",
    stat: "Ahrefs · Semrush",
    desc: "Outils premium pour des audits précis et un suivi rigoureux de vos performances organiques — sans approximation.",
  },
  {
    icon: Clock,
    kw: "Gain de temps",
    stat: "Suivi long terme",
    desc: "Le SEO demande un suivi constant. En nous confiant votre référencement, vos équipes restent concentrées sur votre cœur de métier.",
  },
  {
    icon: Wrench,
    kw: "Méthode transparente",
    stat: "Reporting mensuel",
    desc: "Sprints priorisés, reporting mensuel clair et réactivité aux évolutions du marché pour un SEO toujours optimal.",
  },
];

const faqs = [
  {
    q: "Qu'est-ce qu'une agence SEO ?",
    a: "Une agence SEO est une entreprise spécialisée dans l'optimisation pour les moteurs de recherche. Son rôle est d'aider votre entreprise à améliorer sa visibilité en ligne en augmentant la qualité et la quantité du trafic organique vers votre site. Elle met en œuvre des stratégies techniques, sémantiques et de netlinking pour que votre site apparaisse en bonne position dans les résultats Google, sur les requêtes recherchées par vos clients potentiels.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats SEO ?",
    a: "Le SEO est un investissement à long terme. En règle générale, il faut de 3 à 6 mois pour commencer à observer des résultats significatifs — et 6 à 12 mois pour atteindre un positionnement stable sur des requêtes compétitives. Dès le début, nous travaillons sur l'audit, la recherche de mots-clés et les optimisations techniques, et vous recevez un reporting mensuel pour suivre la progression. Les premiers gains de trafic arrivent souvent dès les semaines suivantes pour les requêtes longue traîne.",
  },
  {
    q: "Comment choisir une agence SEO ?",
    a: "Plusieurs critères sont déterminants : l'expertise et les références de l'agence, la gamme de services proposés (audit, technique, sémantique, netlinking), la méthodologie de travail (agile et transparente de préférence), l'accès à des outils performants et — surtout — l'adhésion à des pratiques SEO éthiques (White Hat). Méfiez-vous des promesses de résultats garantis en quelques semaines : le SEO durable prend du temps. Chez BiDigital, nous vous proposons un audit initial gratuit pour un diagnostic sans engagement.",
  },
  {
    q: "Quel est le coût d'une prestation SEO ?",
    a: "Le tarif d'une prestation SEO dépend de la taille de votre site, de la compétitivité de votre secteur, des actions à mener (audit seul, optimisation technique, production de contenu, netlinking) et de la durée d'accompagnement. Chez BiDigital, nous établissons un devis personnalisé après un audit initial gratuit. Contactez-nous pour obtenir une estimation adaptée à vos objectifs et à votre budget.",
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

export default function SeoContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeRaison, setActiveRaison] = useState(0);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — split-screen asymétrique
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        {/* Halo arrière-plan */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700, height: 700,
            top: "50%", left: "55%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(ellipse at center, rgba(0,85,255,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Colonne gauche : image ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div
                className="relative rounded-3xl overflow-hidden w-full"
                style={{ aspectRatio: "4/5", maxHeight: 560 }}
              >
                <img
                  src="/images/seo-hero.webp"
                  alt="Stratégie SEO référencement naturel BiDigital"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
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
                    <Search size={20} style={{ color: "#0055FF" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}>
                      Référencement naturel sur-mesure
                    </p>
                    <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
                      Audit · Technique · Contenu · Netlinking
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
                Agence{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  SEO
                </span>
                <br />
                Référencement naturel
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 480 }}
              >
                Avec près de la moitié du trafic web provenant des moteurs de recherche, maximisez votre acquisition
                de trafic organique et atteignez vos objectifs commerciaux grâce à une stratégie SEO efficace.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="btn-glow rounded-xl">
                  <CalButton style={{ fontSize: 15, padding: "13px 24px", borderRadius: 50 }}>
                    Demander un audit gratuit
                  </CalButton>
                </div>
                <a
                  href="#nos-services-seo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#f8faff",
                    color: "#191e4f",
                    border: "1px solid rgba(25,30,79,0.08)",
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
                  Nos services SEO
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Trust indicators */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QU'EST-CE QUE LE SEO — split 2 cols texte + image
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>Le SEO en détail</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-7"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Qu&apos;est-ce que le{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    référencement naturel ?
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>

              <div className="space-y-5">
                {(
                  [
                    <>
                      Le <strong style={{ color: "#191e4f" }}>SEO</strong> (Search Engine Optimization), ou référencement naturel, est
                      l&apos;ensemble des techniques visant à améliorer la position d&apos;un site web dans les résultats organiques
                      des moteurs de recherche. Une stratégie efficace mobilise trois leviers complémentaires : l&apos;optimisation{" "}
                      <strong style={{ color: "#191e4f" }}>technique</strong>, le SEO{" "}
                      <strong style={{ color: "#191e4f" }}>sémantique</strong> et le{" "}
                      <strong style={{ color: "#191e4f" }}>netlinking</strong>.
                    </>,
                    <>
                      Chez BiDigital, nous appliquons une méthodologie agile et transparente. Sprints priorisés, reporting mensuel clair
                      : votre stratégie <strong style={{ color: "#191e4f" }}>SEO</strong> évolue en permanence selon vos objectifs
                      commerciaux et les évolutions de l&apos;algorithme Google.
                    </>,
                    <>
                      L&apos;optimisation ne s&apos;arrête pas après la mise en place. La mesure et les corrections continues sont
                      essentielles pour repérer les opportunités et améliorer votre performance durablement.
                    </>,
                  ] as React.ReactNode[]
                ).map((content, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                  >
                    {content}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/seo-analytics.webp"
                alt="Tableau de bord SEO — analytics et référencement naturel"
                className="rounded-2xl w-full"
                style={{
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
                loading="lazy" decoding="async" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOS SERVICES SEO — 3 cartes grille
      ══════════════════════════════════════════════════════════════ */}
      <section id="nos-services-seo" className="py-16 md:py-24 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionBadge>Nos services SEO</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Une gamme complète pour{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  maximiser votre visibilité
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 580 }}
            >
              Qu&apos;il s&apos;agisse d&apos;un audit SEO complet, d&apos;optimisations techniques ou d&apos;une stratégie
              de netlinking, BiDigital vous accompagne sur l&apos;ensemble des leviers du référencement naturel.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "#f8faff",
                    border: "1px solid rgba(25,30,79,0.08)",
                    transition: "box-shadow 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
                    (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.background = "#f8faff";
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "#e2f7ff" }}
                  >
                    <Icon size={28} style={{ color: "#0055FF" }} />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                  >
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          POURQUOI UNE AGENCE SEO — split 2 cols + 4 raisons
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header + image split */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-14">

            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>Pourquoi nous confier votre SEO</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Pourquoi faire appel à une{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    agence SEO ?
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Le référencement naturel est un investissement stratégique qui demande expertise, outils spécialisés
                et suivi constant. Collaborer avec BiDigital, c&apos;est bénéficier d&apos;une équipe dédiée qui maîtrise
                les leviers SEO et les évolutions des algorithmes Google.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                En externalisant votre référencement, vous libérez vos équipes pour vous concentrer sur votre
                cœur de métier, tout en ayant la certitude que votre visibilité en ligne est entre de bonnes mains.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/seo-agence.webp"
                alt="Équipe agence SEO BiDigital — stratégie référencement naturel"
                className="rounded-2xl w-full"
                style={{
                  aspectRatio: "16/10",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
                loading="lazy" decoding="async" />
            </motion.div>
          </div>

          {/* 4 raisons — tabs */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {raisons.map((r, i) => {
                const TabIcon = r.icon;
                const isActive = activeRaison === i;
                return (
                  <button
                    key={r.kw}
                    onClick={() => setActiveRaison(i)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: isActive ? "#0055FF" : "#FFFFFF",
                      color: isActive ? "#FFFFFF" : "#474667",
                      border: isActive ? "1px solid #0055FF" : "1px solid rgba(25,30,79,0.08)",
                      boxShadow: isActive ? "0 4px 16px rgba(0,85,255,0.25)" : "none",
                    }}
                  >
                    <TabIcon size={15} />
                    {r.kw}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {(() => {
                const item = raisons[activeRaison];
                const Icon = item.icon;
                return (
                  <motion.div
                    key={activeRaison}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col sm:flex-row items-start gap-6 p-7 rounded-2xl"
                    style={{ background: "#FFFFFF", border: "1px solid rgba(0,85,255,0.15)" }}
                  >
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: "#e2f7ff" }}
                    >
                      <Icon size={26} style={{ color: "#0055FF" }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-extrabold text-xl" style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}>
                          {item.kw}
                        </h3>
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-bold"
                          style={{ background: "#e2f7ff", color: "#0055FF", fontFamily: "var(--font-body)" }}
                        >
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            <div className="flex gap-2 mt-4 justify-center">
              {raisons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveRaison(i)}
                  className="rounded-full transition-all duration-200"
                  style={{ width: activeRaison === i ? 20 : 6, height: 6, background: activeRaison === i ? "#0055FF" : "#CBD5E0" }}
                  aria-label={`Voir ${raisons[i].kw}`}
                />
              ))}
            </div>
          </div>
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
                background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <span className="text-4xl block mb-5" aria-hidden>🚀</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", letterSpacing: "-0.025em" }}
              >
                Vous cherchez une agence SEO ?
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.60)", maxWidth: 440 }}
              >
                Partagez-nous votre site et vos objectifs. Nous réalisons un audit SEO gratuit et vous proposons
                une stratégie adaptée à votre secteur et à votre budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <CalButton
                  style={{ fontSize: 15, padding: "13px 28px", borderRadius: 50 }}
                >
                  Demander un audit gratuit
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
                    borderRadius: 9999,
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
              Vos questions sur le{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  référencement naturel
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
