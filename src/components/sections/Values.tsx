"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock, Sparkles } from "lucide-react";

const miniCards = [
  {
    icon: ShieldCheck,
    color: "#0055FF",
    bg: "rgba(0,122,255,0.08)",
    border: "rgba(0,122,255,0.2)",
    title: "Site conforme",
    text: "Mentions légales, politique de cookies, CGU — chaque site est livré en conformité avec la réglementation en vigueur.",
  },
  {
    icon: TrendingUp,
    color: "#0055FF",
    bg: "rgba(0,122,255,0.08)",
    border: "rgba(0,122,255,0.2)",
    title: "SEO intégré",
    text: "Optimisation technique et éditoriale incluse dès la création, pour un référencement naturel opérationnel dès le lancement.",
  },
  {
    icon: Clock,
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    title: "Réactivité",
    text: "Toute demande de modification est prise en charge rapidement, sans frais supplémentaires.",
  },
  {
    icon: Sparkles,
    color: "#0055FF",
    bg: "rgba(0,122,255,0.08)",
    border: "rgba(0,122,255,0.2)",
    title: "Tout inclus",
    text: "Hébergement, nom de domaine, maintenance et mises à jour légales inclus dans chaque projet.",
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
      className="relative py-12 md:py-24 px-4 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest mb-5"
            style={{
              background: "#e2f7ff",
              color: "#0055FF",
              fontFamily: "var(--font-badge)",
            }}
          >
            Nos engagements
          </span>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 43px)",
              color: "#191e4f",
              lineHeight: 1.25,
            }}
          >
            Ce que nous vous{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                garantissons
              </span>
              <span style={{
                display: "block", height: 3,
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                borderRadius: 2,
                position: "absolute", bottom: -2, left: 0, right: 0,
              }} />
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#474667",
              fontSize: "1.1rem",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            dès la mise en ligne.
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
                  background: "#ffffff",
                  border: "1px solid rgba(25,30,79,0.08)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#e2f7ff" }}
                >
                  <Icon style={{ width: 18, height: 18, color: card.color }} />
                </div>
                <h4
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#474667" }}
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
