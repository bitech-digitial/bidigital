"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Shield,
  ShieldCheck,
  RefreshCw,
  GitBranch,
  Activity,
  Sparkles,
  Bell,
  Gauge,
  Database,
  Headphones,
  UserCheck,
  MessageSquare,
  CheckCircle2,
  Plus,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Data ──────────────────────────────────────────────────────────────────────

const typesMaintenace = [
  {
    icon: Shield,
    label: "Préventive",
    color: "#0055FF",
    title: "Maintenance préventive",
    desc: "Anticiper les problèmes avant qu'ils surviennent : mises à jour du système, sauvegardes régulières, optimisation des performances et vérifications de sécurité. Une approche proactive pour réduire les risques de pannes et assurer la stabilité à long terme.",
  },
  {
    icon: Wrench,
    label: "Corrective",
    color: "#00D2FF",
    title: "Maintenance corrective",
    desc: "Intervenir rapidement lorsqu'un dysfonctionnement survient : identification et résolution des bugs, erreurs ou problèmes de performance. L'objectif est de rétablir le bon fonctionnement de votre site dans les meilleurs délais pour minimiser les perturbations.",
  },
  {
    icon: TrendingUp,
    label: "Évolutive",
    color: "#0055FF",
    title: "Maintenance évolutive",
    desc: "Faire évoluer votre site pour répondre aux besoins changeants de votre activité : nouvelles fonctionnalités, nouvelles pages, optimisations de design et mises à jour technologiques. Pour rester compétitif et attractif dans un environnement en constante évolution.",
  },
];

const inclus = [
  { icon: Shield,       title: "Détection des failles de sécurité",                 desc: "Surveillance proactive pour détecter les vulnérabilités et les corriger rapidement." },
  { icon: ShieldCheck,  title: "Application des correctifs",                         desc: "Mise en place régulière des correctifs de sécurité recommandés." },
  { icon: RefreshCw,    title: "Mise à jour des plugins",                            desc: "Actualisation régulière des plugins pour bénéficier des dernières fonctionnalités." },
  { icon: GitBranch,    title: "Sauvegarde du code avec GIT",                       desc: "Conservation des sauvegardes du code pour restaurer les versions antérieures si nécessaire." },
  { icon: Activity,     title: "Vérification de la disponibilité en continu",        desc: "Surveillance constante du site et intervention rapide en cas de dysfonctionnement." },
  { icon: Sparkles,     title: "Évolutions mineures incluses",                       desc: "Prise en charge des évolutions mineures pour améliorer les fonctionnalités de votre site." },
  { icon: Bell,         title: "Alertes automatiques & interventions < 24h",         desc: "Réception d'alertes en cas d'incidents critiques et intervention dans les 24 heures." },
  { icon: Gauge,        title: "Tests de performances mensuels",                     desc: "Évaluation mensuelle des performances (GTMetrix, Core Web Vitals) et optimisations." },
  { icon: Database,     title: "Sauvegarde de la base de données",                  desc: "Sauvegarde régulière de la base de données pour éviter toute perte de données." },
  { icon: Headphones,   title: "Assistance prioritaire",                             desc: "Support prioritaire avec une réponse rapide et des solutions efficaces." },
];

const faqs = [
  {
    q: "Combien coûte la maintenance d'un site internet ?",
    a: "Chez BiDigital, nous adoptons une approche sur mesure facturée via un forfait mensuel. Le coût dépend de la complexité de votre site, du niveau de support technique requis et des services additionnels souhaités. Cette flexibilité tarifaire nous permet d'offrir des solutions adaptées, assurant que chaque client bénéficie d'un service de maintenance qui correspond précisément à ses besoins. Contactez-nous pour un devis personnalisé et sans engagement.",
  },
  {
    q: "BiDigital peut-il reprendre la maintenance d'un site existant ?",
    a: "Oui, reprendre la maintenance d'un site web déjà existant fait partie de nos compétences. Nous débutons par une évaluation initiale approfondie pour saisir toutes les spécificités techniques et fonctionnelles de votre site. Cette analyse nous permet d'identifier les particularités de votre plateforme et les points d'amélioration. Suite à cette évaluation, nous élaborons un plan de maintenance sur mesure pour garantir le bon fonctionnement continu, la sécurité et l'optimisation régulière de votre site.",
  },
  {
    q: "Quels sont les différents types de maintenance de site web ?",
    a: "Trois catégories de maintenance se distinguent. La maintenance corrective intervient lorsqu'un dysfonctionnement est identifié : elle corrige les anomalies et bugs pour rétablir un fonctionnement optimal. La maintenance préventive anticipe les problèmes : mises à jour régulières, vérifications de sécurité et sauvegardes quotidiennes. La maintenance évolutive améliore continuellement le site en prenant en compte les ajustements nécessaires pour rester aligné avec les dernières tendances technologiques et les besoins de votre activité.",
  },
  {
    q: "Quelle est la différence entre maintenance et hébergement ?",
    a: "L'hébergement web assure la disponibilité technique de votre site sur des serveurs (espace disque, bande passante, uptime). La maintenance de site internet, elle, englobe l'ensemble des actions nécessaires au bon fonctionnement et à l'évolution de votre site : mises à jour CMS et plugins, sécurité, sauvegardes, corrections de bugs et évolutions. BiDigital propose les deux services, qui sont complémentaires et souvent associés dans nos forfaits.",
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

export default function MaintenanceContent() {
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
                  src="/images/maintenance-site.webp"
                  alt="Maintenance site internet — développeur au travail BiDigital"
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
                  style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                  <span className="text-xs font-bold" style={{ color: "#191e4f", fontFamily: "var(--font-heading)" }}>
                    Uptime 99.98%
                  </span>
                </div>

                {/* Badge alerte */}
                <div
                  className="absolute top-16 right-5 flex items-center gap-2 px-3 py-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <Bell size={12} style={{ color: "#0055FF" }} />
                  <span className="text-xs font-bold" style={{ color: "#191e4f", fontFamily: "var(--font-heading)" }}>
                    Intervention &lt; 24h
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
                Maintenance de{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}
                >
                  site internet
                </span>
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667", maxWidth: 480 }}
              >
                La maintenance de site internet n&apos;est pas seulement recommandée, elle est essentielle. Nous
                proposons une gamme complète de services pour garantir que votre site fonctionne de manière optimale
                en permanence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="btn-glow rounded-xl">
                  <a href="/maquette" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 600, fontFamily: "var(--font-heading)", padding: "13px 24px", borderRadius: 50, textDecoration: "none", background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#fff", boxShadow: "0 4px 20px rgba(0,85,255,0.25)", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                    Demander ma maquette gratuite
                  </a>
                </div>
                <a
                  href="#forfait-inclus"
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
                  Ce qui est inclus
                  <ArrowRight size={15} />
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          QU'EST-CE QUE LA MAINTENANCE — Introduction centrée
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
            <SectionBadge>La maintenance en détail</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Qu&apos;est-ce que la maintenance{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  de site internet ?
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                text: (
                  <>
                    La maintenance de site internet est cruciale. Elle assure le bon fonctionnement, la{" "}
                    <strong style={{ color: "#191e4f" }}>sécurité</strong>{" "}et l&apos;actualisation de votre site. Cela
                    implique des tâches régulières et variées : mise à jour du contenu et de l&apos;interface, révision et
                    optimisation des fonctionnalités, et optimisation{" "}
                    <strong style={{ color: "#191e4f" }}>SEO</strong>{" "}pour améliorer la visibilité sur le web.
                  </>
                ),
              },
              {
                text: (
                  <>
                    La maintenance englobe également la résolution de problèmes techniques — bugs ou erreurs de
                    serveur — nécessitant une intervention rapide. La{" "}
                    <strong style={{ color: "#191e4f" }}>protection contre les menaces en ligne</strong>{" "}est aussi un volet
                    essentiel, préservant l&apos;intégrité de votre site et des données de vos utilisateurs.
                  </>
                ),
              },
              {
                text: (
                  <>
                    Chez BiDigital, nous proposons une maintenance complète qui inclut la{" "}
                    <strong style={{ color: "#191e4f" }}>maintenance préventive</strong>,{" "}
                    <strong style={{ color: "#191e4f" }}>corrective</strong> et{" "}
                    <strong style={{ color: "#191e4f" }}>évolutive</strong>. Une démarche globale, essentielle pour la
                    pérennité et la compétitivité de votre site web.
                  </>
                ),
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SÉCURITÉ & PERFORMANCE — split 2 cols inversé
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
              <SectionBadge>Sécurité & performances</SectionBadge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Votre site sécurisé et{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    performant en permanence
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                La sécurité et la performance de votre site sont primordiales. Nous mettons en place des mesures
                avancées de protection contre les menaces et les intrusions, tout en optimisant régulièrement votre
                site pour garantir une expérience fluide et rapide à vos visiteurs.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "#474667" }}
              >
                Souscrire à un forfait de maintenance BiDigital, c&apos;est bénéficier d&apos;une expertise technique
                permanente, maintenir votre site à jour avec les dernières normes de sécurité, et optimiser
                continuellement votre référencement naturel.
              </p>
            </motion.div>

            {/* Image droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src="/images/maintenance-site-2.webp"
                alt="Maintenance site internet — sécurité et performance BiDigital"
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
          3 TYPES DE MAINTENANCE — cards
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
            <SectionBadge>Notre approche</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em" }}
            >
              3 types de maintenance{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  pour votre site
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5">
            {typesMaintenace.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl flex flex-col"
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "#e2f7ff" }}
                  >
                    <Icon size={22} style={{ color: type.color }} />
                  </div>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-3 self-start"
                    style={{ background: "#e2f7ff", color: "#0055FF", fontFamily: "var(--font-body)" }}
                  >
                    {type.label}
                  </span>
                  <h3
                    className="font-bold text-base mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                  >
                    {type.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                  >
                    {type.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CE QUI EST INCLUS — carte forfait premium
      ══════════════════════════════════════════════════════════════ */}
      <section id="forfait-inclus" className="py-16 md:py-24 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionBadge>Forfait mensuel</SectionBadge>
            <h2
              className="text-3xl sm:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              Tout ce qui est inclus{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  dans votre forfait
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl"
            style={{ background: "#16182e" }}
          >
            {/* Halos */}
            <div className="absolute pointer-events-none" style={{ top: 0, left: 0, width: 500, height: 500, background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)" }} />
            <div className="absolute pointer-events-none" style={{ bottom: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)" }} />

            <div className="relative z-10 p-8 md:p-10">
              {/* Header interne */}
              <div className="flex items-center gap-3 mb-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,85,255,0.2)", border: "1px solid rgba(0,85,255,0.3)" }}
                >
                  <Wrench size={18} style={{ color: "#60AAFF" }} />
                </div>
                <div>
                  <p className="font-extrabold text-base" style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}>
                    Maintenance BiDigital — Forfait mensuel
                  </p>
                  <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)" }}>
                    Sans engagement · Activation immédiate
                  </p>
                </div>
              </div>

              {/* Grille des features */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {inclus.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -12 : 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(0,85,255,0.18)", border: "1px solid rgba(0,85,255,0.25)" }}
                      >
                        <Icon size={13} style={{ color: "#60AAFF" }} />
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
                      >
                        {item.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA interne */}
              <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <CalButton style={{ fontSize: 14, padding: "11px 22px", borderRadius: 50 }}>
                  Démarrer la maintenance
                </CalButton>
                <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                  Audit initial gratuit · Reprise de site existant possible
                </p>
              </div>
            </div>
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
                background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <span className="text-4xl block mb-5" aria-hidden>🚀</span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", letterSpacing: "-0.025em" }}
              >
                Confiez la maintenance de votre site à BiDigital
              </h2>
              <p
                className="text-base mb-8 mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.60)", maxWidth: 440 }}
              >
                Nous reprenons la maintenance de votre site existant ou intégrons la maintenance dès la
                création. Devis personnalisé et audit initial gratuit.
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
              Vos questions sur la{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  maintenance web
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
