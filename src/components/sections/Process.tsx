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
    <section id="processus" className="py-24 px-4" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
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
            style={{
              fontFamily: "var(--font-body)",
              color: "#4a6080",
              fontSize: "1.1rem",
            }}
          >
            Un processus simple, transparent, pensé pour vous.
          </p>
        </motion.div>

        {/* 4 Steps — horizontal on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col lg:flex-row items-stretch flex-1 gap-0">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex-1 relative rounded-2xl p-7 overflow-hidden"
                style={{
                  background: step.featured
                    ? "rgba(0,119,182,0.06)"
                    : "#F0F9FF",
                  border: `1px solid ${
                    step.featured
                      ? "rgba(0,119,182,0.25)"
                      : "#e1eaf5"
                  }`,
                  boxShadow: step.featured
                    ? "0 0 40px rgba(0,119,182,0.1)"
                    : "none",
                  marginBottom: i < steps.length - 1 ? "0.75rem" : 0,
                }}
              >
                {/* Big number in background */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "-1rem",
                    right: "1rem",
                    fontSize: "6rem",
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
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: step.featured
                      ? "rgba(0,119,182,0.12)"
                      : "rgba(0,119,182,0.08)",
                    border: `1px solid ${
                      step.featured
                        ? "rgba(0,119,182,0.3)"
                        : "rgba(0,119,182,0.2)"
                    }`,
                    boxShadow: step.featured
                      ? "0 0 20px rgba(0,119,182,0.15)"
                      : "none",
                  }}
                >
                  <step.Icon
                    style={{
                      width: 20,
                      height: 20,
                      color: "#0077B6",
                    }}
                  />
                </div>

                {/* Time badge */}
                <span
                  className="inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-3"
                  style={{
                    background: step.featured
                      ? "rgba(0,119,182,0.1)"
                      : "rgba(0,119,182,0.06)",
                    color: "#0077B6",
                    fontFamily: "var(--font-body)",
                    border: `1px solid ${
                      step.featured
                        ? "rgba(0,119,182,0.2)"
                        : "rgba(0,119,182,0.12)"
                    }`,
                  }}
                >
                  {step.time}
                </span>

                <h3
                  className="font-bold text-base mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#03045E",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#4a6080",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center px-3 self-center">
                  <ArrowIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
