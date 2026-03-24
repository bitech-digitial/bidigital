"use client";

import { motion } from "framer-motion";
import { FileText, Code2, Eye, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  id: number;
  num: string;
  Icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  time: string;
  featured: boolean;
};

const steps: Step[] = [
  {
    id: 1,
    num: "01",
    Icon: FileText,
    label: "Étape 01",
    title: "Vous nous parlez de votre projet",
    description: "Un échange simple. Vos besoins, votre univers, vos objectifs.",
    time: "~15 minutes",
    featured: false,
  },
  {
    id: 2,
    num: "02",
    Icon: Code2,
    label: "Étape 02",
    title: "Nous concevons votre site",
    description: "Design, développement, SEO, copywriting. Vous ne touchez à rien.",
    time: "Notre travail",
    featured: false,
  },
  {
    id: 3,
    num: "03",
    Icon: Eye,
    label: "Étape 03",
    title: "Vous validez",
    description: "Nous soumettons le résultat. Vous donnez votre avis. Nous ajustons.",
    time: "Votre validation",
    featured: false,
  },
  {
    id: 4,
    num: "04",
    Icon: Rocket,
    label: "Étape 04",
    title: "Votre site est en ligne",
    description: "Publié, indexé, visible sur Google. Rapidement mis en ligne.",
    time: "Rapidement mis en ligne",
    featured: true,
  },
];

function StepCard({ step }: { step: Step }) {
  const numColor = step.featured
    ? "rgba(139,92,246,0.2)"
    : "rgba(99,102,241,0.1)";
  const iconBg = step.featured ? "rgba(139,92,246,0.15)" : "rgba(99,102,241,0.1)";
  const iconColor = step.featured ? "#c084fc" : "#818cf8";
  const labelColor = step.featured ? "#c084fc" : "#818cf8";
  const titleColor = "#f0f0ff";
  const descColor = step.featured ? "rgba(240,240,255,0.7)" : "#71717a";
  const badgeBg = step.featured ? "rgba(139,92,246,0.15)" : "rgba(99,102,241,0.1)";
  const badgeColor = step.featured ? "#c084fc" : "#818cf8";

  return (
    <div className="flex flex-col">
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "64px",
          fontWeight: 900,
          lineHeight: 1,
          color: numColor,
          marginBottom: "16px",
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}
      >
        {step.num}
      </span>

      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: iconBg, border: `1px solid ${step.featured ? "rgba(139,92,246,0.3)" : "rgba(99,102,241,0.2)"}` }}
      >
        <step.Icon style={{ width: 20, height: 20, color: iconColor }} />
      </div>

      <p
        className="text-xs font-semibold uppercase tracking-widest mt-4 mb-1"
        style={{ fontFamily: "var(--font-body)", color: labelColor }}
      >
        {step.label}
      </p>

      <h3
        className="font-bold text-lg leading-snug mb-2"
        style={{ fontFamily: "var(--font-heading)", color: titleColor }}
      >
        {step.title}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-body)", color: descColor }}
      >
        {step.description}
      </p>

      <span
        className="inline-block self-start rounded-full px-3 py-1 text-xs font-semibold mt-4"
        style={{ background: badgeBg, color: badgeColor, fontFamily: "var(--font-body)" }}
      >
        {step.time}
      </span>
    </div>
  );
}

export default function Process() {
  return (
    <section
      id="processus"
      className="py-20 px-4"
      style={{ background: "#06071a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Processus
          </span>
          <h2
            className="font-extrabold text-3xl lg:text-4xl mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
            }}
          >
            De votre idée à la mise en ligne.
          </h2>
          <p
            className="text-base lg:text-lg"
            style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
          >
            Un processus simple, transparent, pensé pour vous.
          </p>
        </motion.div>

        {/* Desktop — grid 4 cols */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="rounded-2xl p-7"
              style={{
                background: step.featured
                  ? "rgba(139,92,246,0.08)"
                  : "rgba(255,255,255,0.02)",
                border: step.featured
                  ? "1px solid rgba(139,92,246,0.25)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: step.featured
                  ? "0 0 40px rgba(139,92,246,0.1)"
                  : "none",
              }}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-4 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6"
              style={{
                background: step.featured
                  ? "rgba(139,92,246,0.08)"
                  : "rgba(255,255,255,0.02)",
                border: step.featured
                  ? "1px solid rgba(139,92,246,0.25)"
                  : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
