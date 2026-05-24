"use client";

import { motion } from "framer-motion";
import { Rocket, Search, ShieldCheck, Clock, Globe, Sparkles } from "lucide-react";

const cards = [
  {
    id: "launch",
    icon: Rocket,
    label: "Mise en ligne rapide",
    text: "Votre site est conçu, développé et publié en 7 jours. Design, SEO, légal — tout inclus.",
    accent: "#007AFF",
    glow: "rgba(0,122,255,0.25)",
    size: "large",
  },
  {
    id: "seo",
    icon: Search,
    label: "SEO dès J1",
    text: "Visible sur Google dès la mise en ligne. Optimisation technique et éditoriale incluse.",
    accent: "#0096C7",
    glow: "rgba(0,150,199,0.2)",
    size: "medium",
  },
  {
    id: "legal",
    icon: ShieldCheck,
    label: "100% conforme RGPD",
    text: "Mentions légales, CGU, cookies — zéro risque légal dès le jour 1.",
    accent: "#0044CC",
    glow: "rgba(0,68,204,0.2)",
    size: "small",
  },
  {
    id: "support",
    icon: Clock,
    label: "Support < 48h",
    text: "Modifications et réponses garanties sous 48h ouvrées.",
    accent: "#007AFF",
    glow: "rgba(0,122,255,0.2)",
    size: "small",
  },
  {
    id: "global",
    icon: Globe,
    label: "Toute la France",
    text: "Nous travaillons avec des artisans, commerçants et PME partout en France.",
    accent: "#0096C7",
    glow: "rgba(0,150,199,0.2)",
    size: "medium",
  },
  {
    id: "quality",
    icon: Sparkles,
    label: "Qualité premium",
    text: "Chaque projet est traité avec la même exigence, quelle que soit sa taille.",
    accent: "#0044CC",
    glow: "rgba(0,68,204,0.25)",
    size: "large-alt",
  },
];

function GlassCard({
  card,
  delay = 0,
  className = "",
  style = {},
}: {
  card: (typeof cards)[0];
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative overflow-hidden rounded-3xl p-6 flex flex-col ${className}`}
      style={{
        background: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(255,255,255,0.9)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 32px rgba(0,122,255,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        ...style,
      }}
    >
      {/* Glow intérieur */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -30,
          right: -30,
          width: 120,
          height: 120,
          background: `radial-gradient(ellipse, ${card.glow} 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      {/* Icône */}
      <div
        className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
        style={{
          background: `rgba(${card.accent === "#007AFF" ? "0,119,182" : card.accent === "#0096C7" ? "0,150,199" : "2,62,138"},0.1)`,
          border: `1px solid rgba(${card.accent === "#007AFF" ? "0,119,182" : card.accent === "#0096C7" ? "0,150,199" : "2,62,138"},0.25)`,
        }}
      >
        <Icon style={{ width: 18, height: 18, color: card.accent }} />
      </div>

      <h3
        className="font-bold mb-2"
        style={{
          fontFamily: "var(--font-heading)",
          color: "#1D2939",
          fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
          letterSpacing: "-0.01em",
        }}
      >
        {card.label}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-body)", color: "#475467" }}
      >
        {card.text}
      </p>

      {/* Trait décoratif bas */}
      <div
        className="absolute bottom-0 left-6 right-6"
        style={{
          height: 2,
          background: `linear-gradient(90deg, transparent, ${card.accent}30, transparent)`,
          borderRadius: 99,
        }}
      />
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "#F0F9FF" }}
    >
      {/* ── Glows de fond ── */}
      <div className="absolute pointer-events-none" style={{
        top: "10%", left: "5%", width: 400, height: 400,
        background: "radial-gradient(ellipse, rgba(0,122,255,0.12) 0%, transparent 70%)",
        filter: "blur(60px)", borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "10%", right: "5%", width: 500, height: 400,
        background: "radial-gradient(ellipse, rgba(0,150,199,0.1) 0%, transparent 70%)",
        filter: "blur(70px)", borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none" style={{
        top: "50%", left: "50%", marginLeft: -200, marginTop: -150,
        width: 400, height: 300,
        background: "radial-gradient(ellipse, rgba(0,68,204,0.07) 0%, transparent 70%)",
        filter: "blur(50px)", borderRadius: "50%",
      }} />

      {/* ── Éléments géométriques ── */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: 40, right: 80, width: 100, height: 100,
        border: "1.5px solid rgba(0,122,255,0.12)", borderRadius: 20,
        transform: "rotate(15deg)",
      }} />
      <div className="absolute pointer-events-none hidden lg:block" style={{
        bottom: 60, left: 60, width: 70, height: 70,
        border: "1.5px solid rgba(0,122,255,0.1)", borderRadius: "50%",
      }} />
      <div className="absolute pointer-events-none hidden md:block" style={{
        top: "60%", right: 30, width: 40, height: 40,
        background: "rgba(0,122,255,0.06)", border: "1px solid rgba(0,122,255,0.18)",
        borderRadius: 8, transform: "rotate(25deg)",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Bento Grid — Broken Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* Bloc 1 — Large (span 2 colonnes, 2 lignes) */}
          <div className="lg:col-span-2 lg:row-span-2">
            <GlassCard
              card={cards[0]}
              delay={0}
              className="h-full min-h-[260px] lg:min-h-[320px]"
              style={{
                background: "linear-gradient(135deg, rgba(0,122,255,0.06) 0%, rgba(255,255,255,0.7) 60%)",
              }}
            />
          </div>

          {/* Bloc 2 — Medium, décalé vers le bas (effet broken grid) */}
          <div className="lg:mt-8">
            <GlassCard card={cards[1]} delay={0.1} className="h-full min-h-[180px]" />
          </div>

          {/* Bloc 3 — Small */}
          <div>
            <GlassCard card={cards[2]} delay={0.15} className="min-h-[160px]" />
          </div>

          {/* Bloc 4 — Small, décalé vers le haut */}
          <div className="lg:-mt-6">
            <GlassCard card={cards[3]} delay={0.2} className="min-h-[160px]" />
          </div>

          {/* Bloc 5 — Medium, span 2 colonnes */}
          <div className="md:col-span-2 lg:col-span-1">
            <GlassCard card={cards[4]} delay={0.25} className="min-h-[160px]" />
          </div>

          {/* Bloc 6 — Large-alt, span 2 colonnes, décalé */}
          <div className="md:col-span-2 lg:col-span-2 lg:mt-4">
            <GlassCard
              card={cards[5]}
              delay={0.3}
              className="min-h-[160px]"
              style={{
                background: "linear-gradient(135deg, rgba(0,68,204,0.05) 0%, rgba(255,255,255,0.7) 60%)",
                flexDirection: "row",
                gap: "1.5rem",
                alignItems: "center",
              }}
            />
          </div>

        </div>

        {/* Stat bar — décalée (broken grid accent) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 lg:-mt-2 lg:ml-auto lg:w-1/3"
        >
          <div
            className="rounded-3xl p-5 flex items-center gap-4"
            style={{
              background: "linear-gradient(135deg, #1D2939 0%, #007AFF 100%)",
              boxShadow: "0 8px 40px rgba(0,122,255,0.25)",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-neon-counter" style={{ fontSize: 22 }}>★</span>
            </div>
            <div>
              <p className="text-neon" style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, lineHeight: 1 }}>
                5/5 Google
              </p>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)", fontSize: 13, marginTop: 4 }}>
                100% clients satisfaits
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
