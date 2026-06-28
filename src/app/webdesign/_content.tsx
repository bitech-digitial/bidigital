"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Paintbrush,
  Search,
  TrendingUp,
  Star,
  Plus,
  ArrowRight,
  Eye,
  MousePointer,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────


const avantages = [
  {
    icon: Eye,
    kw: "Première impression décisive",
    text: "Selon Google, les utilisateurs jugent un site en quelques secondes. Un design attrayant donne une première impression positive et encourage l'exploration.",
    img: "/images/illustrations/undraw_designer_efwz.svg",
    imgAlt: "Première impression visuelle",
  },
  {
    icon: TrendingUp,
    kw: "Taux de conversion amélioré",
    text: "Un design clair avec des appels à l'action visibles guide les utilisateurs vers la conversion — achat, prise de contact, inscription — de façon naturelle.",
    img: "/images/illustrations/undraw_level-up_fenw.svg",
    imgAlt: "Amélioration du taux de conversion",
  },
  {
    icon: Star,
    kw: "Image de marque renforcée",
    text: "Selon Stanford, 75 % des utilisateurs jugent la crédibilité d'une entreprise sur la base de son design. Une identité visuelle forte renforce la confiance.",
    img: "/images/illustrations/undraw_experts_v2vy.svg",
    imgAlt: "Image de marque et crédibilité",
  },
  {
    icon: MousePointer,
    kw: "Expérience utilisateur optimisée",
    text: "Un webdesign unique et attractif crée une identité mémorable, encourage l'engagement et fidélise vos clients dans la durée.",
    img: "/images/illustrations/undraw_ui-analysis_crhb.svg",
    imgAlt: "Expérience utilisateur UX",
  },
  {
    icon: Search,
    kw: "Référencement SEO boosté",
    text: "Navigation fluide, temps de chargement réduit, responsive design et structure HTML propre : chaque détail du design contribue à votre positionnement Google.",
    img: "/images/illustrations/undraw_performance-comparison_qd1q.svg",
    imgAlt: "SEO et performances Google",
  },
  {
    icon: Paintbrush,
    kw: "Différenciation concurrentielle",
    text: "Un design sur-mesure vous distingue de vos concurrents et renforce votre positionnement dans l'esprit de vos clients potentiels.",
    img: "/images/illustrations/undraw_ideas_vn7a.svg",
    imgAlt: "Différenciation et idées créatives",
  },
];

const faqs = [
  {
    q: "Qu'est-ce que le webdesign ?",
    a: "Le webdesign, également connu sous le nom de conception UI, est un processus qui mêle créativité et technique. Son objectif est de concevoir, planifier et réaliser l'aspect visuel et fonctionnel d'un site web ou d'une application web. Il intègre la mise en page, la typographie, les couleurs, les images et les animations, tout en prenant en compte l'interface utilisateur (UI) et l'expérience utilisateur (UX). L'objectif est de fournir une expérience en ligne agréable et en harmonie avec l'identité de votre marque.",
  },
  {
    q: "Comment le webdesign peut-il améliorer le SEO ?",
    a: "Un bon webdesign améliore le SEO de plusieurs façons : un site bien conçu et facile à naviguer incite les visiteurs à rester plus longtemps, réduisant le taux de rebond. L'optimisation de la vitesse de chargement, la structuration des informations, l'utilisation correcte des balises HTML et un design responsive contribuent à une meilleure indexation. Google privilégie les sites mobile-friendly, ce qui renforce l'importance d'un design adaptatif.",
  },
  {
    q: "Comment un bon webdesign peut-il augmenter le taux de conversion ?",
    a: "Un bon webdesign améliore l'expérience utilisateur en rendant l'action souhaitée — achat, inscription, prise de contact — plus facile et plus attrayante. Un design clair et intuitif, avec des appels à l'action bien visibles, guide les utilisateurs tout au long du parcours de conversion. De plus, un design esthétiquement agréable renforce la confiance et la crédibilité, des éléments essentiels pour encourager les visiteurs à s'engager davantage.",
  },
  {
    q: "Combien coûte une prestation de webdesign ?",
    a: "Le coût d'une prestation webdesign dépend de la complexité du projet, du nombre de pages, des fonctionnalités souhaitées et du niveau de personnalisation. Chez BiDigital, nous établissons un devis personnalisé et transparent adapté à votre budget et à vos objectifs. Contactez-nous pour une estimation gratuite et sans engagement.",
  },
];

// ── Helper ────────────────────────────────────────────────────────────────────

function SectionBadge({ children }: { children: string }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-4"
      style={{
        background: "#ffffff",
        color: "#0055FF",
        fontFamily: "var(--font-badge)",
        border: "1px solid rgba(25,30,79,0.10)",
        boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)",
      }}
    >
      {children}
    </span>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WebdesignContent() {
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

            {/* ── Colonne gauche : image placeholder ── */}
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
                  src="/images/web-design-new.webp"
                  alt="Designer UX — conception webdesign sur-mesure BiDigital"
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
                  Webdesign
                </span>
                <br />
                sur-mesure
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 480 }}
              >
                Pour une stratégie digitale réussie, un webdesign moderne et une image de marque cohérente
                sont essentiels pour améliorer votre SEO et optimiser votre taux de conversion.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="btn-glow rounded-full">
                  <a
                    href="/maquette"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 15, fontWeight: 600, fontFamily: "var(--font-heading)",
                      padding: "13px 24px", borderRadius: 50, textDecoration: "none",
                      background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                      color: "#fff", border: "none",
                      boxShadow: "0 4px 20px rgba(0,85,255,0.25)",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >
                    Demander ma maquette gratuite
                  </a>
                </div>
                <a
                  href="#seo-webdesign"
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
                  Webdesign & SEO
                  <ArrowRight size={15} />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QU'EST-CE QUE LE WEBDESIGN — Introduction centrée
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
            <SectionBadge>Le webdesign en détail</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Qu&apos;est-ce que le{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  Webdesign ?
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#474667" }}
            >
              Le webdesign, ou design web, est le processus de planification, de création et de mise en œuvre des éléments
              visuels et fonctionnels d&apos;un site web. Il englobe la mise en page, la typographie, les couleurs, les
              images, l&apos;interface utilisateur (UI) et l&apos;expérience utilisateur (UX).
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#474667" }}
            >
              Un webdesign efficace vise à créer une expérience en ligne attrayante, facile à naviguer et{" "}
              <strong style={{ color: "#191e4f" }}>alignée avec l&apos;identité de marque</strong>. Il joue un rôle
              crucial dans l&apos;engagement des utilisateurs, le taux de conversion, la différenciation de la concurrence
              et le référencement SEO.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          L'IMPORTANCE DU WEBDESIGN — split 2 cols
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Texte gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>Pourquoi le design compte</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                L&apos;importance du Webdesign
                <br />
                pour votre{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    marque
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Le webdesign est la première chose que les utilisateurs remarquent lorsqu&apos;ils visitent un site. Un
                design bien conçu avec une navigation intuitive peut captiver les visiteurs et les inciter à explorer
                davantage.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Selon une étude de Google, les utilisateurs{" "}
                <strong style={{ color: "#191e4f" }}>jugent un site web en quelques secondes</strong>. Un webdesign
                attrayant donne une première impression positive et encourage les utilisateurs à rester et à s&apos;engager
                davantage avec votre contenu. Chez BiDigital, chaque projet est conçu pour marquer les esprits dès le
                premier regard.
              </p>
            </motion.div>

            {/* Image placeholder droite — ambiance sombre "écran de code" */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/maintenance.webp"
                alt="Webdesign professionnel — BiDigital agence web"
                className="rounded-2xl w-full"
                style={{
                  aspectRatio: "16/10",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LES AVANTAGES — 6 items grille
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionBadge>Pourquoi investir dans le design</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              Les avantages d&apos;un webdesign{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  professionnel
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {avantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.kw}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex flex-col p-6 rounded-2xl"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(25,30,79,0.08)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="mb-4 flex items-center justify-center" style={{ height: 80 }}>
                    <img
                      src={item.img}
                      alt={item.imgAlt}
                      width={100}
                      height={80}
                      loading="lazy"
                      decoding="async"
                      style={{ height: 80, width: "auto", objectFit: "contain" }}
                    />
                  </div>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "#e2f7ff" }}
                  >
                    <Icon size={16} style={{ color: "#0055FF" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
                    <strong style={{ color: "#191e4f", fontFamily: "var(--font-heading)", display: "block", marginBottom: 4 }}>
                      {item.kw}
                    </strong>
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA CENTRAL — dark card
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#f8faff" }}>
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
                Vous cherchez une agence Webdesign ?
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.60)", maxWidth: 440 }}
              >
                Partagez-nous votre projet et vos objectifs. Nous concevons des interfaces modernes, performantes
                et alignées avec votre image de marque.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/maquette" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-heading)", padding: "13px 28px", borderRadius: 50, textDecoration: "none", background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#fff", boxShadow: "0 4px 20px rgba(0,85,255,0.25)", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                  Demander ma maquette gratuite
                </a>
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
      <section className="py-16 md:py-24 px-4" style={{ background: "#FFFFFF" }}>
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
                  webdesign
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
                  background: openFaq === i ? "rgba(0,85,255,0.04)" : "#f8faff",
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
