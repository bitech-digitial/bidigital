"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Shield,
  Zap,
  Search,
  Headphones,
  TrendingUp,
  PiggyBank,
  Lock,
  Activity,
  Plus,
  ArrowRight,
  Globe,
  Database,
  Cpu,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────

const avantages = [
  { icon: Zap,        kw: "Rapidité et disponibilité",  group: "Performance & SEO" },
  { icon: Search,     kw: "Optimisation SEO",            group: "Performance & SEO" },
  { icon: TrendingUp, kw: "Flexibilité et scalabilité",  group: "Performance & SEO" },
  { icon: Shield,     kw: "Sécurité renforcée",          group: "Protection & support" },
  { icon: Headphones, kw: "Support technique réactif",   group: "Protection & support" },
  { icon: PiggyBank,  kw: "Économies à long terme",      group: "Protection & support" },
];

const solutions = [
  {
    icon: Globe,
    title: "Hébergement partagé",
    desc: "Idéal pour les sites vitrines et les petites structures. Performances optimisées, sécurité active et prix accessible pour démarrer sereinement.",
  },
  {
    icon: Cpu,
    title: "VPS (Serveur Privé Virtuel)",
    desc: "Ressources dédiées garanties pour une montée en charge fluide. La solution intermédiaire entre mutualisé et dédié, pour les sites à fort trafic.",
  },
  {
    icon: Server,
    title: "Serveur dédié",
    desc: "Performance maximale et isolation totale pour les projets e-commerce, SaaS ou à très fort trafic. Personnalisation complète de l'environnement.",
  },
  {
    icon: Database,
    title: "Hébergement CMS & e-commerce",
    desc: "Configurations optimisées pour WordPress, PrestaShop et Shopify : cache, CDN, PHP-FPM et optimisations spécifiques à chaque plateforme.",
  },
];

const faqs = [
  {
    q: "Quels types d'hébergement web proposez-vous ?",
    a: "Chez BiDigital, nous proposons une palette diversifiée d'options d'hébergement pour satisfaire une variété de besoins : l'hébergement mutualisé pour les petits sites, le VPS (Serveur Privé Virtuel) pour les projets à trafic intermédiaire, le serveur dédié pour les plus grandes structures, et des configurations spécifiques pour les CMS comme WordPress, PrestaShop et Shopify. Chaque option est conçue pour répondre à différents niveaux de trafic, de performance et de budget.",
  },
  {
    q: "Comment BiDigital assure la sécurité de mon site ?",
    a: "La sécurité est une priorité absolue chez BiDigital. Nous déployons des pare-feux de pointe et des mécanismes de défense contre les attaques malveillantes. Notre équipe effectue régulièrement des analyses et audits de sécurité pour identifier et prévenir tout risque. Nos systèmes de surveillance fonctionnent 24h/24 et 7j/7, prêts à détecter et neutraliser les menaces avant qu'elles n'affectent vos services. Nous optimisons également constamment nos serveurs pour offrir un niveau de sécurité renforcé.",
  },
  {
    q: "BiDigital propose-t-il un hébergement spécifique pour les CMS (WordPress, PrestaShop, Shopify) ?",
    a: "Absolument. Nous nous spécialisons dans l'optimisation des sites sous les principaux CMS et plateformes e-commerce. Pour PrestaShop et WooCommerce par exemple, nous configurons l'hébergement spécifiquement pour garantir une rapidité d'affichage et des performances optimales. Nos experts travaillent en étroite collaboration avec vous pour optimiser votre installation et vous aider à atteindre vos objectifs commerciaux.",
  },
  {
    q: "Qu'est-ce qui est inclus dans l'hébergement BiDigital ?",
    a: "Nos forfaits d'hébergement incluent : surveillance de la disponibilité en continu, sauvegardes régulières, certificat SSL, protection contre les attaques DDoS, accès aux logs, support technique réactif et un chef de projet dédié pour coordonner toutes vos demandes. L'hébergement est souvent couplé à notre forfait de maintenance pour une couverture complète de votre site.",
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

export default function HebergementContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — split-screen asymétrique (serveurs / néons bleus)
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
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

            {/* ── Colonne gauche : image serveurs ── */}
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
                  src="/images/hebergement-hero.webp"
                  alt="Hébergement web serveur — infrastructure BiDigital"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fetchPriority="high" decoding="async" />

                {/* Badge uptime */}
                <div
                  className="absolute top-5 right-5 flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(0,210,255,0.25)" }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                  <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-heading)" }}>
                    Uptime 99.99%
                  </span>
                </div>

                {/* Badge surveillance */}
                <div
                  className="absolute top-16 right-5 flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(0,85,255,0.25)" }}
                >
                  <Activity size={12} style={{ color: "#90E0EF" }} />
                  <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-heading)" }}>
                    Surveillance 24h/24
                  </span>
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
                <span style={{ display: "block" }}>
                  Hébergement{" "}
                  <span style={{ position: "relative", display: "inline-block" }}>
                    <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                      web
                    </span>
                    <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                  </span>
                </span>
                <span style={{ display: "block" }}>performant &amp; sécurisé</span>
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 480 }}
              >
                Nous offrons des solutions d&apos;hébergement web spécifiques et robustes pour tous les types de
                sites. Assurez une présence en ligne solide et performante avec nos services personnalisés.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="btn-glow rounded-full">
                  <a href="/maquette" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-heading)", padding: "13px 24px", borderRadius: 50, textDecoration: "none", background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#fff", boxShadow: "0 4px 20px rgba(0,85,255,0.25)", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                    Demander ma maquette gratuite
                  </a>
                </div>
                <a
                  href="#nos-solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-heading)",
                    background: "#f8faff",
                    color: "#191e4f",
                    border: "1px solid rgba(25,30,79,0.08)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                    borderRadius: 50,
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
                  Nos solutions
                  <ArrowRight size={15} />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QU'EST-CE QUE L'HÉBERGEMENT — Introduction centrée
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
            <SectionBadge>L&apos;hébergement en détail</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Qu&apos;est-ce que{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  l&apos;hébergement web ?
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                content: (
                  <>
                    L&apos;hébergement web est un service essentiel pour rendre les sites internet accessibles en ligne.
                    Il fonctionne comme un espace de stockage en ligne où tous les éléments du site — textes, images,
                    vidéos et fichiers — sont conservés sur un <strong style={{ color: "#191e4f" }}>serveur spécialisé</strong>,
                    un ordinateur puissant constamment connecté à Internet. Lorsqu&apos;une personne saisit l&apos;adresse
                    de votre site, le serveur lui envoie les fichiers pour afficher la page.
                  </>
                ),
              },
              {
                content: (
                  <>
                    Les services d&apos;hébergement web englobent également le{" "}
                    <strong style={{ color: "#191e4f" }}>domaine</strong> (l&apos;adresse unique du site), la{" "}
                    <strong style={{ color: "#191e4f" }}>bande passante</strong> (gérant la quantité de données échangées),
                    et des <strong style={{ color: "#191e4f" }}>mesures de sécurité</strong> pour protéger le site contre
                    les menaces en ligne. Le choix de l&apos;hébergement adéquat est crucial pour garantir que votre site
                    reste disponible, rapide et sécurisé en permanence.
                  </>
                ),
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                {item.content}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SÉCURITÉ & PERFORMANCE — split 2 cols (texte gauche, image droite)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Texte gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>Infrastructure de confiance</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Sécurité et{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    performance
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Nos serveurs sont optimisés avec des pare-feux et des protections contre les attaques afin de
                garantir une <strong style={{ color: "#191e4f" }}>disponibilité et une rapidité maximales</strong>.
                Chaque configuration est pensée pour la performance et la résilience.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Nos systèmes de <strong style={{ color: "#191e4f" }}>surveillance fonctionnent 24h/24</strong>,
                détectant et réagissant aux problèmes avant qu&apos;ils ne deviennent critiques. Votre site reste
                en ligne, performant, et vos données protégées en toutes circonstances.
              </p>

              {/* Métriques inline */}
              <div className="flex gap-6 mt-8 flex-wrap">
                {[
                  { icon: Lock,     val: "SSL",      label: "Certificat inclus" },
                  { icon: Activity, val: "24/7",     label: "Monitoring actif" },
                  { icon: Shield,   val: "DDoS",     label: "Protection active" },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "#e2f7ff" }}
                      >
                        <Icon size={16} style={{ color: "#0055FF" }} />
                      </div>
                      <div>
                        <p className="font-extrabold text-sm leading-none" style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}>
                          {m.val}
                        </p>
                        <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "#474667" }}>{m.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/hebergement-web-1.webp"
                alt="Hébergement web sécurisé et performant — BiDigital"
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
          NOS SOLUTIONS — 4 types d'hébergement
      ══════════════════════════════════════════════════════════════ */}
      <section id="nos-solutions" className="py-16 md:py-20 px-4" style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionBadge>Nos offres</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              Des solutions pour{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  tous les projets
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid rgba(25,30,79,0.08)",
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                    style={{ background: "#e2f7ff" }}
                  >
                    <Icon size={20} style={{ color: "#0055FF" }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                    >
                      {sol.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                    >
                      {sol.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LES AVANTAGES — 2 groupes compacts
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionBadge>Pourquoi un hébergement de qualité</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              Les avantages d&apos;un hébergement{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  performant
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
            {[...new Set(avantages.map((a) => a.group))].map((group, gi) => {
              const groupItems = avantages.filter((a) => a.group === group);
              return (
                <div
                  key={group}
                  className="rounded-2xl p-6"
                  style={{ background: "#f8faff", border: "1px solid rgba(25,30,79,0.08)" }}
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
                Vous avez un projet web ?
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.60)", maxWidth: 440 }}
              >
                Partagez-nous votre projet. Nous vous proposons une solution d&apos;hébergement adaptée à vos
                besoins, à votre trafic et à votre budget.
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
      <section className="py-16 md:py-24 px-4" style={{ background: "#ffffff" }}>
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
              Vos questions sur{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  l&apos;hébergement web
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
                      background: openFaq === i ? "#e2f7ff" : "rgba(0,85,255,0.04)",
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
