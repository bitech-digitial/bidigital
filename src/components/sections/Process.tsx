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
  bg: string;
  dark: boolean;
};

const steps: Step[] = [
  {
    id: 1,
    num: "01",
    Icon: FileText,
    label: "Étape 01",
    title: "Vous nous parlez de votre projet",
    description:
      "Un échange simple. Vos besoins, votre univers, vos objectifs.",
    time: "~15 minutes",
    bg: "#ffffff",
    dark: false,
  },
  {
    id: 2,
    num: "02",
    Icon: Code2,
    label: "Étape 02",
    title: "Nous concevons votre site",
    description:
      "Design, développement, SEO, copywriting. Vous ne touchez à rien.",
    time: "Notre travail",
    bg: "#f8fafc",
    dark: false,
  },
  {
    id: 3,
    num: "03",
    Icon: Eye,
    label: "Étape 03",
    title: "Vous validez",
    description:
      "Nous soumettons le résultat. Vous donnez votre avis. Nous ajustons.",
    time: "Votre validation",
    bg: "#eff6ff",
    dark: false,
  },
  {
    id: 4,
    num: "04",
    Icon: Rocket,
    label: "Étape 04",
    title: "Votre site est en ligne",
    description: "Publié, indexé, visible sur Google. En moins de 72h.",
    time: "En moins de 72h",
    bg: "#2563eb",
    dark: true,
  },
];

function StepCard({ step }: { step: Step }) {
  const numColor = step.dark
    ? "rgba(255,255,255,0.12)"
    : "rgba(37,99,235,0.07)";
  const iconBg = step.dark ? "rgba(255,255,255,0.15)" : "#eff6ff";
  const iconColor = step.dark ? "#ffffff" : "#2563eb";
  const labelColor = step.dark ? "rgba(255,255,255,0.65)" : "#2563eb";
  const titleColor = step.dark ? "#ffffff" : "#0f172a";
  const descColor = step.dark ? "rgba(255,255,255,0.75)" : "#64748b";
  const badgeBg = step.dark ? "rgba(255,255,255,0.15)" : "#eff6ff";
  const badgeColor = step.dark ? "#ffffff" : "#2563eb";

  return (
    <div className="flex flex-col">
      {/* Number */}
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "72px",
          fontWeight: 900,
          lineHeight: 1,
          color: numColor,
          marginBottom: "20px",
          userSelect: "none",
        }}
      >
        {step.num}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: iconBg }}
      >
        <step.Icon style={{ width: 22, height: 22, color: iconColor }} />
      </div>

      {/* Label */}
      <p
        className="text-xs font-semibold uppercase tracking-widest mt-4"
        style={{ fontFamily: "var(--font-body)", color: labelColor }}
      >
        {step.label}
      </p>

      {/* Title */}
      <h3
        className="font-bold text-lg mt-1 leading-snug"
        style={{ fontFamily: "var(--font-heading)", color: titleColor }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mt-2 font-light"
        style={{ fontFamily: "var(--font-body)", color: descColor }}
      >
        {step.description}
      </p>

      {/* Badge */}
      <span
        className="inline-block self-start rounded-full px-3 py-1 text-xs font-semibold mt-4"
        style={{
          background: badgeBg,
          color: badgeColor,
          fontFamily: "var(--font-body)",
        }}
      >
        {step.time}
      </span>
    </div>
  );
}

export default function Process() {
  return (
    <section id="processus" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Processus
          </span>
          <h2
            className="font-extrabold text-3xl lg:text-4xl text-slate-800"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            De votre idée à la mise en ligne.
          </h2>
          <p
            className="font-light text-slate-500 text-base lg:text-lg mt-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Un processus simple, transparent, pensé pour vous.
          </p>
        </motion.div>

        {/* Desktop — grid 4 cols */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                transition: { duration: 0.25 },
              }}
              className="rounded-[20px] border border-[#e2e8f0] p-8"
              style={{
                background: step.bg,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </div>

        {/* Mobile — flex col */}
        <div className="flex flex-col gap-4 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[20px] border border-[#e2e8f0] p-6"
              style={{
                background: step.bg,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
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
