"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock, Sparkles } from "lucide-react";
import FloatingShapesLayer from "@/components/ui/FloatingShapesLayer";

const miniCards = [
  {
    icon: ShieldCheck,
    color: "#007AFF",
    bg: "rgba(0,122,255,0.08)",
    border: "rgba(0,122,255,0.2)",
    title: "Site conforme",
    text: "Mentions légales, politique de cookies, CGU — chaque site est livré en conformité avec la réglementation en vigueur.",
  },
  {
    icon: TrendingUp,
    color: "#007AFF",
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
    color: "#007AFF",
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
      <FloatingShapesLayer variant="light" />

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
              background: "rgba(0,122,255,0.08)",
              border: "1px solid rgba(0,122,255,0.2)",
              color: "#007AFF",
              fontFamily: "var(--font-body)",
            }}
          >
            Nos engagements
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
            Ce que nous vous{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #007AFF, #0044CC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              garantissons
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#475467",
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
                  background: "#F0F9FF",
                  border: "1px solid #e1eaf5",
                  boxShadow: "0 4px 24px rgba(0,122,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(0,122,255,0.3)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,122,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#e1eaf5";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,122,255,0.06)";
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
                  style={{ fontFamily: "var(--font-heading)", color: "#1D2939" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#475467" }}
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
