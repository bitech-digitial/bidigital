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
    title: "Premier échange",
    description:
      "Nous prenons le temps de comprendre votre activité, vos besoins et vos objectifs avant de commencer quoi que ce soit.",
    time: "Premier échange",
    featured: false,
  },
  {
    id: 2,
    num: "02",
    Icon: Code2,
    title: "Conception",
    description:
      "Design, développement, SEO et conformité légale. Nous gérons l'ensemble du projet de A à Z.",
    time: "Conception",
    featured: false,
  },
  {
    id: 3,
    num: "03",
    Icon: Eye,
    title: "Validation",
    description:
      "Nous vous soumettons le résultat. Vous donnez votre retour, nous ajustons jusqu'à votre satisfaction.",
    time: "Validation",
    featured: false,
  },
  {
    id: 4,
    num: "04",
    Icon: Rocket,
    title: "Mise en ligne",
    description:
      "Votre site est publié, configuré et prêt à être référencé sur Google.",
    time: "Mise en ligne",
    featured: true,
  },
];

const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(0,122,255,0.3)"
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
    <section id="processus" className="relative py-12 md:py-24 px-4 overflow-hidden" style={{ background: "#FFFFFF" }}>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* ── Colonne gauche : illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-shrink-0 flex items-center justify-center pr-0 lg:pr-10 hidden sm:flex"
            style={{ width: "100%", maxWidth: 340 }}
          >
            <img
              src="/images/illustrations/undraw_ideas_vn7a.svg"
              alt="De votre idée à la mise en ligne"
              width={300}
              height={240}
              style={{ width: "100%", maxWidth: 300, height: "auto", display: "block" }}
            />
          </motion.div>

          {/* ── Trait vertical séparateur (desktop) ── */}
          <div
            className="hidden lg:block flex-shrink-0"
            style={{ width: 1, background: "linear-gradient(180deg, transparent, rgba(0,122,255,0.2) 20%, rgba(0,122,255,0.2) 80%, transparent)" }}
          />

          {/* ── Trait horizontal séparateur (tablet only) ── */}
          <div
            className="hidden sm:block lg:hidden my-10"
            style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,122,255,0.2) 20%, rgba(0,122,255,0.2) 80%, transparent)" }}
          />

          {/* ── Colonne droite : titre + 4 étapes ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-0 pl-0 lg:pl-10"
          >
            {/* Header */}
            <span
              className="inline-block text-xs font-medium rounded-full px-3 py-1.5 mb-5"
              style={{
                background: "#e2f7ff",
                color: "#0055FF",
                fontFamily: "var(--font-badge)",
              }}
            >
              Notre processus
            </span>
            <h2
              className="font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 43px)",
                color: "#191e4f",
                lineHeight: 1.25,
              }}
            >
              De votre idée à la mise en ligne,{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{
                  background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  en toute simplicité.
                </span>
                <span style={{
                  display: "block", height: 3,
                  background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                  borderRadius: 2,
                  position: "absolute", bottom: -2, left: 0, right: 0,
                }} />
              </span>
            </h2>

            {/* 4 étapes — empilées verticalement */}
            <div className="space-y-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative rounded-2xl p-5 overflow-hidden flex items-start gap-4"
                  style={{
                    background: step.featured ? "rgba(0,85,255,0.06)" : "#f8faff",
                    border: `1px solid ${step.featured ? "rgba(0,122,255,0.25)" : "#e1eaf5"}`,
                    boxShadow: step.featured ? "0 0 30px rgba(0,122,255,0.08)" : "none",
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
                      color: "#0055FF",
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
                      background: step.featured ? "rgba(0,122,255,0.12)" : "rgba(0,122,255,0.08)",
                      border: `1px solid ${step.featured ? "rgba(0,122,255,0.3)" : "rgba(0,122,255,0.2)"}`,
                    }}
                  >
                    <step.Icon style={{ width: 18, height: 18, color: "#0055FF" }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Time badge */}
                    <span
                      className="inline-block text-xs px-2.5 py-0.5 rounded-full font-medium mb-1.5"
                      style={{
                        background: step.featured ? "rgba(0,122,255,0.1)" : "rgba(0,122,255,0.06)",
                        color: "#0055FF",
                        fontFamily: "var(--font-body)",
                        border: `1px solid ${step.featured ? "rgba(0,122,255,0.2)" : "rgba(0,122,255,0.12)"}`,
                      }}
                    >
                      {step.time}
                    </span>
                    <h3
                      className="font-bold text-sm mb-1"
                      style={{ fontFamily: "var(--font-heading)", color: "#191e4f", letterSpacing: "-0.01em" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "#474667" }}
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
