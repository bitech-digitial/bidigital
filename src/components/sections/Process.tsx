"use client";

import { motion } from "framer-motion";
import { FileText, Code2, Eye, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tu nous parles de toi",
    description:
      "Un formulaire simple. Ton activité, tes couleurs, ce que tu veux que tes clients fassent sur ton site. Pas de jargon.",
    tag: "~10 minutes",
    Icon: FileText,
  },
  {
    number: "02",
    title: "On crée ton site",
    description:
      "Design sur-mesure, développement, intégration des textes et images. Tu ne touches à rien.",
    tag: "Notre travail",
    Icon: Code2,
  },
  {
    number: "03",
    title: "Tu valides",
    description:
      "On t'envoie un lien pour voir ton site. Tu donnes ton avis. On ajuste jusqu'à ce que ce soit parfait.",
    tag: "Ta validation",
    Icon: Eye,
  },
  {
    number: "04",
    title: "Ton site est en ligne",
    description:
      "Publié, indexé, visible sur Google. En moins de 72h après ton brief.",
    tag: "En moins de 72h",
    Icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-24 px-4 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Processus
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            De ton idée à ton site en ligne.
            <br />
            En 4 étapes. En 72h.
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            De ton côté : 10 minutes de ton temps. Du nôtre : tout le reste.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white border border-[#e2e8f0] rounded-2xl p-4 md:p-6 flex flex-col gap-4 hover:bg-[#f8fafc] hover:border-[#bfdbfe] transition-all duration-300"
            >
              {/* Number */}
              <span
                className="text-5xl font-bold leading-none select-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "rgba(37,99,235,0.06)",
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center">
                <step.Icon className="w-5 h-5 text-[#2563eb]" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-[#0f172a] font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#64748b] text-sm leading-relaxed font-light" style={{ fontFamily: "var(--font-body)" }}>
                  {step.description}
                </p>
              </div>

              {/* Tag */}
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] text-xs text-[#2563eb] self-start"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.tag}
              </div>

              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-[#bfdbfe] to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
