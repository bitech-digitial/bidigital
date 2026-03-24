"use client";

import { motion } from "framer-motion";
import { FileText, Code2, Eye, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  id: number;
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
    Icon: FileText,
    label: "Étape 01",
    title: "Vous nous parlez de votre projet",
    description:
      "Un échange simple de 15 minutes. Vos besoins, votre univers, vos objectifs. On écoute, on note, on propose.",
    time: "~15 min",
    featured: false,
  },
  {
    id: 2,
    Icon: Code2,
    label: "Étape 02",
    title: "Nous concevons votre site",
    description:
      "Design, développement, SEO, copywriting, conformité légale. Vous ne touchez à rien — on gère tout.",
    time: "Notre travail",
    featured: false,
  },
  {
    id: 3,
    Icon: Eye,
    label: "Étape 03",
    title: "Vous validez",
    description:
      "On vous soumet le résultat. Vous donnez votre avis. On ajuste jusqu'à ce que ce soit parfait.",
    time: "Votre validation",
    featured: false,
  },
  {
    id: 4,
    Icon: Rocket,
    label: "Étape 04",
    title: "Votre site est en ligne",
    description:
      "Publié, indexé, visible sur Google. En moyenne 48h après le premier échange.",
    time: "🚀 En ligne",
    featured: true,
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-20 px-4" style={{ background: "#06071a" }}>
      <div className="max-w-3xl mx-auto">
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
            className="text-base"
            style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
          >
            Un processus simple, transparent, pensé pour vous.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            className="absolute left-5 top-4 w-px hidden sm:block"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 2.5rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              background:
                "linear-gradient(to bottom, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 75%, transparent 100%)",
            }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 sm:gap-8 relative pb-8 last:pb-0"
              >
                {/* Icon node */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: step.featured
                        ? "rgba(139,92,246,0.2)"
                        : "rgba(99,102,241,0.12)",
                      border: `1px solid ${
                        step.featured
                          ? "rgba(139,92,246,0.5)"
                          : "rgba(99,102,241,0.3)"
                      }`,
                      boxShadow: step.featured
                        ? "0 0 20px rgba(139,92,246,0.3)"
                        : "none",
                    }}
                  >
                    <step.Icon
                      style={{
                        width: 18,
                        height: 18,
                        color: step.featured ? "#c084fc" : "#818cf8",
                      }}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className="flex-1 rounded-2xl p-5 sm:p-6"
                  style={{
                    background: step.featured
                      ? "rgba(139,92,246,0.06)"
                      : "rgba(255,255,255,0.02)",
                    border: `1px solid ${
                      step.featured
                        ? "rgba(139,92,246,0.2)"
                        : "rgba(255,255,255,0.06)"
                    }`,
                    boxShadow: step.featured
                      ? "0 0 30px rgba(139,92,246,0.08)"
                      : "none",
                  }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: step.featured ? "#c084fc" : "#818cf8",
                      }}
                    >
                      {step.label}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: step.featured
                          ? "rgba(139,92,246,0.12)"
                          : "rgba(99,102,241,0.08)",
                        color: step.featured ? "#c084fc" : "#818cf8",
                        fontFamily: "var(--font-body)",
                        border: `1px solid ${
                          step.featured
                            ? "rgba(139,92,246,0.2)"
                            : "rgba(99,102,241,0.15)"
                        }`,
                      }}
                    >
                      {step.time}
                    </span>
                  </div>

                  <h3
                    className="font-bold text-base sm:text-lg mb-1.5"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#f0f0ff",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: step.featured
                        ? "rgba(240,240,255,0.65)"
                        : "#71717a",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
