"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock, Sparkles } from "lucide-react";

const miniCards = [
  {
    icon: ShieldCheck,
    color: "#818cf8",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.2)",
    title: "Site 100% conforme",
    text: "RGPD, cookies, CGU — zéro risque légal. Tout est inclus dès le jour 1.",
  },
  {
    icon: TrendingUp,
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.2)",
    title: "SEO inclus dès J1",
    text: "Google vous voit d'abord. Optimisation technique et éditoriale dès la mise en ligne.",
  },
  {
    icon: Clock,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    title: "Modifications <48h",
    text: "Besoin d'un changement ? Réponse garantie sous 48h ouvrées. Sans supplément.",
  },
  {
    icon: Sparkles,
    color: "#c084fc",
    bg: "rgba(192,132,252,0.08)",
    border: "rgba(192,132,252,0.2)",
    title: "Tout inclus, 19,99€/mois",
    text: "Hébergement, domaine, maintenance, mises à jour légales. Sans engagement.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function Values() {
  return (
    <section
      id="valeurs"
      className="py-24 px-4"
      style={{ background: "#08090f" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.2)",
              color: "#22d3ee",
              fontFamily: "var(--font-body)",
            }}
          >
            ENGAGEMENTS
          </span>
          <h2
            className="font-extrabold text-gradient mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Pourquoi nous{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              faire confiance ?
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#94a3b8",
              fontSize: "1.1rem",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Nous restons présents bien après la mise en ligne.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {miniCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(99,102,241,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: card.bg, border: `1px solid ${card.border}` }}
                >
                  <Icon style={{ width: 18, height: 18, color: card.color }} />
                </div>
                <h4
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "#f8fafc" }}
                >
                  ✦ {card.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#64748b" }}
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
