"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Star } from "lucide-react";

const miniCards = [
  {
    icon: Clock,
    color: "#818cf8",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.2)",
    title: "Modifications sous 48h",
    text: "Chaque demande traitée en moins de 48h ouvrées.",
  },
  {
    icon: ShieldCheck,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.1)",
    border: "rgba(74,222,128,0.2)",
    title: "Site 100% conforme",
    text: "RGPD, mentions légales, cookies : zéro risque légal.",
  },
  {
    icon: TrendingUp,
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.1)",
    border: "rgba(56,189,248,0.2)",
    title: "SEO inclus",
    text: "Apparaître en 1ère page Google dès la mise en ligne.",
  },
  {
    icon: Star,
    color: "#fb923c",
    bg: "rgba(251,146,60,0.1)",
    border: "rgba(251,146,60,0.2)",
    title: "Tout inclus, sans surprise",
    text: "Hébergement, domaine, logo, flyer, carte de visite.",
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
      className="py-20 px-4"
      style={{ background: "#050814" }}
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
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Notre engagement
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Pourquoi nous{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              faire confiance ?
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
          >
            Nous restons présents bien après la mise en ligne.
          </p>
        </motion.div>

        {/* 4 mini-cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: card.bg, border: `1px solid ${card.border}` }}
                >
                  <Icon className="w-4 h-4" style={{ color: card.color }} />
                </div>
                <h4
                  className="font-semibold text-sm mb-1.5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#f0f0ff",
                  }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
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
