"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const points = [
  "Audit SEO de votre site existant",
  "Sélection de mots-clés adaptés à votre secteur",
  "Accompagnement sur la durée",
];

export default function Referencement() {
  return (
    <section
      className="relative py-12 md:py-24 px-4"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "#16182e",
            padding: "clamp(36px, 6vw, 72px) clamp(24px, 5vw, 64px)",
          }}
        >
          {/* Radial glow top-right */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: 0,
              right: 0,
              width: 700,
              height: 700,
              background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              zIndex: 0,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: 0,
              left: 0,
              width: 500,
              height: 500,
              background: "radial-gradient(circle at bottom left, rgba(0,68,204,0.2) 0%, rgba(10,17,40,0) 65%)",
              zIndex: 0,
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              zIndex: 0,
            }}
          />

          <div className="relative z-10">
          <div
          className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
        >
          {/* ── Text side ── */}
          <div className="flex-1">
            {/* Title */}
            <h3
              className="font-extrabold mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)",
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Soyez visible là où{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                vos clients{" "}
              </span>
              <span
                style={{
                  color: "#00E5FF",
                  textShadow: [
                    "0 0 6px rgba(0,229,255,0.9)",
                    "0 0 14px rgba(0,229,255,0.7)",
                    "0 0 28px rgba(0,180,255,0.55)",
                    "0 0 55px rgba(0,122,255,0.35)",
                    "0 0 90px rgba(0,68,204,0.2)",
                  ].join(", "),
                }}
              >
                cherchent
              </span>
            </h3>

            {/* Description */}
            <p
              className="mb-7 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.72)",
                fontSize: 17,
              }}
            >
              Apparaissez en tête des résultats Google là où vos clients vous cherchent.
              SEO technique, contenu optimisé et suivi de positions inclus.
            </p>

            {/* Points */}
            <ul className="flex flex-col gap-3.5 mb-9">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(0,68,204,0.5), rgba(0,191,255,0.3))",
                      border: "1px solid rgba(0,180,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ChevronRight size={11} style={{ color: "#0088FF" }} />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#FFFFFF",
                      fontSize: 15.5,
                      lineHeight: 1.5,
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200"
              style={{ borderRadius: 50, padding: "12px 24px" }}
              style={{
                background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,122,255,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,180,255,0.45)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,122,255,0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Optimiser ma visibilité
              <ChevronRight size={15} />
            </a>
          </div>

          {/* ── Illustration side ── */}
          <div className="flex-1 w-full flex items-center justify-center">
            <div
              className="relative w-full"
              style={{
                borderRadius: 24,
                padding: "clamp(16px, 4vw, 32px)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 24,
                  background: "radial-gradient(circle at center, rgba(0,180,255,0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <img
                src="/images/illustrations/undraw_performance-comparison_qd1q.svg"
                alt="Comparaison de performances SEO"
                width={420}
                height={340}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  maxWidth: 420,
                  height: "auto",
                  display: "block",
                  position: "relative",
                  filter: "brightness(0.95) saturate(1.1)",
                }}
              />
            </div>
          </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
