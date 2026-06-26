"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  RefreshCw,
  Wrench,
  Server,
  Search,
  CheckCircle2,
  Plus,
  ArrowRight,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: ShoppingCart,
    title: "Création de site e-commerce",
    description:
      "Boutiques en ligne performantes, adaptées à votre activité, avec paiement sécurisé et gestion simplifiée des commandes.",
  },
  {
    icon: Globe,
    title: "Création de site vitrine",
    description:
      "Sites professionnels sur-mesure, pensés pour refléter votre image de marque et convertir vos visiteurs en clients.",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site internet",
    description:
      "Modernisation du design, optimisation des performances et mise en conformité RGPD de votre site existant.",
  },
  {
    icon: Wrench,
    title: "Maintenance de site internet",
    description:
      "Surveillance, mises à jour et support technique pour assurer le bon fonctionnement de votre site au quotidien.",
  },
  {
    icon: Server,
    title: "Hébergement web",
    description:
      "Infrastructure sécurisée et fiable incluse dans chaque projet, pour une disponibilité maximale de votre site.",
  },
  {
    icon: Search,
    title: "Référencement naturel (SEO)",
    description:
      "Optimisation technique et éditoriale pour améliorer votre positionnement sur Google et attirer des prospects qualifiés.",
  },
];

const steps = [
  { num: "01", title: "Définir les objectifs",       desc: "Analyse de vos besoins, de votre secteur et de vos cibles pour fixer des objectifs précis et mesurables." },
  { num: "02", title: "Benchmark & arborescence",    desc: "Étude de la concurrence, organisation des pages et rédaction du cahier des charges complet." },
  { num: "03", title: "UX Design & maquettage",      desc: "Conception des interfaces, maquettes interactives et charte graphique sur-mesure fidèle à votre marque." },
  { num: "04", title: "Développement web",           desc: "Intégration technique, développement des fonctionnalités, SEO on-page et conformité RGPD intégrée." },
  { num: "05", title: "Validation & recette",        desc: "Tests multi-appareils, corrections et validation finale avec vous avant le déploiement en production." },
  { num: "06", title: "Mise en ligne & maintenance", desc: "Déploiement sur votre hébergement, configuration DNS et accompagnement continu avec notre forfait maintenance." },
];

const advantages = [
  { kw: "Sur-mesure",             text: "Chaque site est conçu spécifiquement pour votre activité, vos objectifs et votre identité visuelle. Aucun template générique.",            img: "/images/illustrations/undraw_designer_efwz.svg",              imgAlt: "Design sur-mesure" },
  { kw: "SEO inclus",             text: "Optimisation technique et sémantique intégrée dès la conception pour maximiser votre visibilité sur Google dès le lancement.",             img: "/images/illustrations/undraw_performance-comparison_qd1q.svg", imgAlt: "SEO et performances Google" },
  { kw: "Conformité RGPD",        text: "Mentions légales, politique de confidentialité, gestion des cookies : votre site est conforme CNIL dès le jour 1.",                        img: "/images/illustrations/undraw_experts_v2vy.svg",               imgAlt: "Conformité RGPD et CNIL" },
  { kw: "Responsive design",      text: "Votre site s'adapte parfaitement à tous les appareils : smartphone, tablette et desktop, pour chaque visiteur.",                           img: "/images/illustrations/undraw_ui-analysis_crhb.svg",           imgAlt: "Design responsive multi-appareils" },
  { kw: "Performance optimisée",  text: "Temps de chargement réduits, Core Web Vitals optimisés — un meilleur score Google et une meilleure expérience utilisateur.",               img: "/images/illustrations/undraw_level-up_fenw.svg",              imgAlt: "Performances optimisées" },
  { kw: "Accompagnement durable", text: "Notre collaboration ne s'arrête pas à la mise en ligne. Nous assurons la maintenance et l'évolution de votre site dans la durée.",         img: "/images/illustrations/undraw_collaboration_hkrb.svg",         imgAlt: "Accompagnement et collaboration durable" },
];

const faqs = [
  {
    q: "Combien coûte la création d'un site internet ?",
    a: "Le coût varie selon la complexité et les fonctionnalités souhaitées. Chaque projet est unique et fait l'objet d'un devis personnalisé après analyse de vos besoins. Contactez-nous pour obtenir une estimation gratuite et sans engagement.",
  },
  {
    q: "Quel CMS choisir pour mon site internet ?",
    a: "Le choix dépend de vos besoins. WordPress est idéal pour les sites vitrines et blogs. Pour les boutiques en ligne, PrestaShop ou Shopify sont excellents. Pour des performances maximales, Next.js est notre recommandation. Nous vous guidons dans ce choix lors de notre premier échange.",
  },
  {
    q: "Pourquoi faire appel à une agence web ?",
    a: "Une agence web apporte l'expertise technique, créative et stratégique pour créer un site performant : design, développement, SEO, conformité légale et maintenance. Vous économisez du temps et bénéficiez d'un accompagnement professionnel complet.",
  },
  {
    q: "La maintenance est-elle nécessaire après la création du site ?",
    a: "La maintenance assure la sécurité de votre site, la mise à jour des composants, la conformité légale et le bon fonctionnement au quotidien. Contactez-nous pour un devis personnalisé adapté à vos besoins, sans engagement.",
  },
];

// ── Composants réutilisables ──────────────────────────────────────────────────

function SectionBadge({ children }: { children: string }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-4"
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

export default function CreationSiteContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — split-screen asymétrique
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)",
          paddingTop: 110,
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
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

            {/* ── Colonne gauche : image ── */}
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
                <Image
                  src="/images/site-internet.webp"
                  alt="Création de site internet sur-mesure par BiDigital"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
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
                Création de{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                  >
                    site internet
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: -3,
                      left: 0,
                      right: 0,
                      height: 3,
                      borderRadius: 2,
                      background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                    }}
                  />
                </span>
                <br />
                sur-mesure
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 480 }}
              >
                En tant qu&apos;agence spécialisée, nous développons des solutions digitales adaptées à vos besoins :
                site vitrine, e-commerce, SEO inclus et conformité RGPD garantie dès la mise en ligne.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <CalButton style={{ fontSize: 15, padding: "13px 24px", borderRadius: 50 }}>
                  Demander un devis gratuit
                </CalButton>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "transparent",
                    color: "#191e4f",
                    border: "1.5px solid rgba(25,30,79,0.25)",
                    borderRadius: 50,
                    padding: "13px 24px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#0055FF";
                    e.currentTarget.style.background = "rgba(0,85,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(25,30,79,0.25)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Nos services
                  <ArrowRight size={15} />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTRODUCTION — "Qu'est-ce que..."
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>Notre approche</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Création de site internet avec{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  BiDigital
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: -3,
                    left: 0,
                    right: 0,
                    height: 3,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  }}
                />
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.8, marginBottom: 20 }}>
              Votre site internet est votre meilleur commercial — disponible 24h/24, visible partout. Un site bien conçu attire, convainc et convertit. Sans lui, vous laissez le terrain à vos concurrents.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.8 }}>
              Chez BiDigital, nous ne créons pas que du code. Webdesign, UX, SEO, RGPD, marketing digital : nous gérons tout pour vous livrer un site qui performe dès le premier jour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NOS SERVICES — 6 cards
      ══════════════════════════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-24 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionBadge>Ce que nous faisons</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              Nos{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  services web
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: -3,
                    left: 0,
                    right: 0,
                    height: 3,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  }}
                />
              </span>
            </h2>
            <p
              className="text-base"
              style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 560 }}
            >
              Nous couvrons l&apos;ensemble de vos besoins en ligne, de la création à la maintenance, avec des solutions professionnelles sur-mesure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex flex-col p-6 rounded-2xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(25,30,79,0.08)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,85,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,30,79,0.08)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "#e2f7ff" }}
                  >
                    <Icon size={20} style={{ color: "#0055FF" }} />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SÉCURITÉ & PERFORMANCE — split 2 cols
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
              <SectionBadge>Qualité & fiabilité</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Un site web{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                  >
                    performant
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: -3,
                      left: 0,
                      right: 0,
                      height: 3,
                      borderRadius: 2,
                      background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                    }}
                  />
                </span>{" "}
                et sécurisé
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Chaque site BiDigital est développé avec les meilleures pratiques en matière de sécurité : connexion HTTPS,
                protection contre les injections, mises à jour régulières des composants. Votre site et les données de vos
                visiteurs sont protégés en permanence.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Côté performances, nous optimisons chaque projet pour obtenir d&apos;excellents scores Core Web Vitals :
                temps de chargement réduits, images optimisées et code minimal pour une expérience utilisateur fluide qui
                favorise également votre référencement Google.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
                <Image
                  src="/images/site-internet-securise.webp"
                  alt="Site internet sécurisé et performant — BiDigital"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LES AVANTAGES — grille 2 cols
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-3"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              Les avantages d&apos;un site{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  BiDigital
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: -3,
                    left: 0,
                    right: 0,
                    height: 3,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  }}
                />
              </span>
            </h2>
            <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
              Un site web professionnel conçu par notre agence, c&apos;est la garantie de :
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((item, i) => (
              <motion.div
                key={item.kw}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col p-5 rounded-2xl"
                style={{ background: "#f8faff", border: "1px solid rgba(25,30,79,0.08)" }}
              >
                <div className="mb-4 flex items-center justify-center" style={{ height: 96 }}>
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    width={120}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    style={{ height: 96, width: "auto", objectFit: "contain" }}
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={18} style={{ color: "#0055FF" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>
                    <strong style={{ color: "#191e4f", fontFamily: "var(--font-heading)" }}>{item.kw}</strong>
                    {" — "}
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LES ÉTAPES — notre processus
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#f8faff" }}>
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
              Les étapes pour la création
              <br />
              de votre site internet
            </h2>
          </motion.div>

          {/* Stepper : 2 rangées de 3 */}
          <div className="flex flex-col gap-6">
            {[steps.slice(0, 3), steps.slice(3)].map((row, ri) => (
              <div key={ri} className="grid grid-cols-3 gap-0 relative">
                {/* Ligne de connexion */}
                <div
                  className="absolute pointer-events-none hidden sm:block"
                  style={{
                    top: 20,
                    left: "calc(16.666% + 20px)",
                    right: "calc(16.666% + 20px)",
                    height: 2,
                    background: "linear-gradient(90deg, #0055FF 0%, rgba(0,85,255,0.2) 100%)",
                  }}
                />
                {row.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: (ri * 3 + i) * 0.07 }}
                    className="flex flex-col items-center text-center px-3 relative z-10"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3 flex-shrink-0"
                      style={{
                        background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                      }}
                    >
                      <span
                        className="font-extrabold text-sm"
                        style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <p
                      className="font-bold text-sm leading-snug"
                      style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                    >
                      {step.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA CENTRAL — dark section
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-20 md:py-28 px-4 overflow-hidden text-center"
        style={{ background: "#16182e" }}
      >
        {/* Halo centré */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 700, height: 700,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: "rgba(0,85,255,0.2)", color: "#00D2FF", fontFamily: "var(--font-badge)" }}
          >
            Projet web ?
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", letterSpacing: "-0.025em" }}
          >
            Vous avez un projet web ?
          </h2>
          <p
            className="text-base mb-8 mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", maxWidth: 440 }}
          >
            Contactez-nous via notre formulaire ou directement sur WhatsApp.
            Nous vous répondons dans les 24h avec une proposition sur-mesure.
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
                background: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.90)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "13px 28px",
                borderRadius: 50,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            >
              Écrire sur WhatsApp
            </a>
          </div>
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
              Vos questions sur la création
              <br />
              <span style={{ position: "relative", display: "inline-block" }}>
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  de site internet
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: -3,
                    left: 0,
                    right: 0,
                    height: 3,
                    borderRadius: 2,
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  }}
                />
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
                      borderColor: openFaq === i ? "rgba(0,85,255,0.4)" : "rgba(25,30,79,0.12)",
                      background: openFaq === i ? "#e2f7ff" : "rgba(25,30,79,0.04)",
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
