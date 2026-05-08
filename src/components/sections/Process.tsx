"use client";

import { motion } from "framer-motion";
import { FileText, Code2, Eye, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  id: number;
  num: string;
  Icon: LucideIcon;
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
    title: "Vous nous parlez de votre projet",
    description:
      "Un échange simple de 15 minutes. Vos besoins, votre univers, vos objectifs. On écoute, on note, on propose.",
    time: "~15 min",
    featured: false,
  },
  {
    id: 2,
    num: "02",
    Icon: Code2,
    title: "Nous concevons votre site",
    description:
      "Design, développement, SEO, copywriting, conformité légale. Vous ne touchez à rien — on gère tout.",
    time: "Notre travail",
    featured: false,
  },
  {
    id: 3,
    num: "03",
    Icon: Eye,
    title: "Vous validez",
    description:
      "On vous soumet le résultat. Vous donnez votre avis. On ajuste jusqu'à ce que ce soit parfait.",
    time: "Votre validation",
    featured: false,
  },
  {
    id: 4,
    num: "04",
    Icon: Rocket,
    title: "Votre site est en ligne",
    description:
      "Publié, indexé, visible sur Google. Mis en ligne rapidement après le premier échange.",
    time: "En ligne",
    featured: true,
  },
];

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(0,119,182,0.3)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="flex-shrink-0 hidden lg:block"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Process() {
  return (
    <section id="processus" className="relative py-24 px-4 overflow-hidden" style={{ background: "#FFFFFF" }}>

      {/* ── Décos géométriques ── */}
      {/* Trait diagonal haut-gauche */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: 0, left: "5%", width: 1, height: 180,
        background: "linear-gradient(180deg, transparent, rgba(0,119,182,0.15), transparent)",
        transform: "rotate(20deg)",
      }} />
      {/* Carré outline haut-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        top: 50, right: 60, width: 90, height: 90,
        border: "1.5px solid rgba(0,119,182,0.1)", borderRadius: 16,
        transform: "rotate(15deg)",
      }} />
      {/* Cercle outline gauche milieu */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "50%", left: -60, marginTop: -100,
        width: 200, height: 200,
        border: "1.5px solid rgba(0,119,182,0.08)", borderRadius: "50%",
      }} />
      {/* Trait horizontal bas */}
      <div className="absolute pointer-events-none" style={{
        bottom: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,119,182,0.1), transparent)",
      }} />
      {/* Rectangle bas-gauche */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        bottom: 40, left: 40, width: 70, height: 40,
        border: "1px solid rgba(0,119,182,0.12)", borderRadius: 8,
        transform: "rotate(-8deg)",
      }} />
      {/* Petit carré accent bas-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        bottom: 60, right: 50, width: 28, height: 28,
        background: "rgba(0,119,182,0.06)", border: "1px solid rgba(0,119,182,0.2)",
        borderRadius: 6, transform: "rotate(20deg)",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* ── Colonne gauche : illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0 flex items-center justify-center pr-0 lg:pr-10"
            style={{ width: "100%", maxWidth: 340 }}
          >
            <img
              src="/images/illustrations/undraw_ideas_vn7a.svg"
              alt="De votre idée à la mise en ligne"
              style={{ width: "100%", maxWidth: 300, height: "auto", display: "block" }}
            />
          </motion.div>

          {/* ── Trait vertical séparateur (desktop) ── */}
          <div
            className="hidden lg:block flex-shrink-0"
            style={{ width: 1, background: "linear-gradient(180deg, transparent, rgba(0,119,182,0.2) 20%, rgba(0,119,182,0.2) 80%, transparent)" }}
          />

          {/* ── Trait horizontal séparateur (mobile) ── */}
          <div
            className="block lg:hidden my-10"
            style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,119,182,0.2) 20%, rgba(0,119,182,0.2) 80%, transparent)" }}
          />

          {/* ── Colonne droite : titre + 4 étapes ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-0 pl-0 lg:pl-10"
          >
            {/* Header */}
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1 mb-5"
              style={{
                background: "rgba(0,119,182,0.08)",
                border: "1px solid rgba(0,119,182,0.2)",
                color: "#0077B6",
                fontFamily: "var(--font-body)",
              }}
            >
              PROCESSUS
            </span>
            <h2
              className="font-extrabold text-gradient mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              De votre idée à la mise en ligne.
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-body)",
                color: "#4a6080",
                fontSize: "1.1rem",
              }}
            >
              Un processus simple, transparent, pensé pour vous.
            </p>

            {/* 4 étapes — empilées verticalement */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative rounded-2xl p-5 overflow-hidden flex items-start gap-4"
                  style={{
                    background: step.featured ? "rgba(0,119,182,0.06)" : "#F0F9FF",
                    border: `1px solid ${step.featured ? "rgba(0,119,182,0.25)" : "#e1eaf5"}`,
                    boxShadow: step.featured ? "0 0 30px rgba(0,119,182,0.08)" : "none",
                  }}
                >
                  {/* Big number in background */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: "-0.5rem",
                      right: "0.75rem",
                      fontSize: "4.5rem",
                      fontWeight: 900,
                      fontFamily: "var(--font-heading)",
                      color: "#0077B6",
                      opacity: 0.07,
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: step.featured ? "rgba(0,119,182,0.12)" : "rgba(0,119,182,0.08)",
                      border: `1px solid ${step.featured ? "rgba(0,119,182,0.3)" : "rgba(0,119,182,0.2)"}`,
                    }}
                  >
                    <step.Icon style={{ width: 18, height: 18, color: "#0077B6" }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Time badge */}
                    <span
                      className="inline-block text-xs px-2.5 py-0.5 rounded-full font-medium mb-1.5"
                      style={{
                        background: step.featured ? "rgba(0,119,182,0.1)" : "rgba(0,119,182,0.06)",
                        color: "#0077B6",
                        fontFamily: "var(--font-body)",
                        border: `1px solid ${step.featured ? "rgba(0,119,182,0.2)" : "rgba(0,119,182,0.12)"}`,
                      }}
                    >
                      {step.time}
                    </span>
                    <h3
                      className="font-bold text-sm mb-1"
                      style={{ fontFamily: "var(--font-heading)", color: "#03045E", letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
