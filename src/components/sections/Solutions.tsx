"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const solutions = [
  {
    tag: "Création de sites",
    title: "Plus qu'un site,",
    titleGradient: "votre vitrine ",
    titleNeon: "numérique",
    description:
      "Un design moderne, une navigation fluide et un contenu optimisé pour garantir une expérience utilisateur irréprochable et un taux de conversion maximal.",
    points: [
      "Responsive — mobile, tablette et desktop",
      "SEO inclus dès la mise en ligne",
      "RGPD conforme — mentions légales, CGU, cookies",
    ],
    cta: { label: "Découvrir nos réalisations", href: "#exemples" },
    illustration: "/images/illustrations/undraw_designer_efwz.svg",
    illustrationAlt: "Designer créant votre vitrine numérique",
    imageLeft: false,
    accentColor: "#007AFF",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative py-12 md:py-24 px-4"
      style={{ background: "#0A1128", overflow: "visible" }}
    >


      {/* ── Radial glow top-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: 800,
          height: 800,
          background: "radial-gradient(circle at top left, rgba(0,85,255,0.35) 0%, rgba(10,17,40,0) 60%)",
          zIndex: 0,
        }}
      />
      {/* Secondary glow bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          right: 0,
          width: 600,
          height: 600,
          background: "radial-gradient(circle at bottom right, rgba(0,180,255,0.12) 0%, rgba(10,17,40,0) 65%)",
          zIndex: 0,
        }}
      />

      {/* ── Grid pattern overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          zIndex: 0,
        }}
      />

      {/* ── Geometric accents ── */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: 60,
          right: 60,
          width: 160,
          height: 160,
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 24,
          transform: "rotate(20deg)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          bottom: 100,
          left: 40,
          width: 80,
          height: 80,
          border: "1px solid rgba(0,180,255,0.12)",
          borderRadius: 14,
          transform: "rotate(-12deg)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="font-extrabold"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Ce que nous faisons{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #007AFF 0%, #00D2FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pour vous
            </span>
          </h2>
        </motion.div>

        {/* ── Alternating blocks ── */}
        <div className="flex flex-col gap-0">
          {solutions.map((sol) => (
            <motion.div
              key={sol.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              <div
                className={`flex flex-col ${sol.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 mb-20`}
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
                    {sol.title}{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, #007AFF 0%, #00D2FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {sol.titleGradient}
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
                      {sol.titleNeon}
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
                    {sol.description}
                  </p>

                  {/* Points */}
                  <ul className="flex flex-col gap-3.5 mb-9">
                    {sol.points.map((point) => (
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
                    href={sol.cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #0044CC 0%, #007AFF 100%)",
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
                    {sol.cta.label}
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
                      backdropFilter: "blur(8px)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                    }}
                  >
                    {/* Glow behind illustration */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 24,
                        background: `radial-gradient(circle at center, ${sol.accentColor === "#007AFF" ? "rgba(0,85,255,0.12)" : "rgba(0,180,255,0.1)"} 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />
                    <img
                      src={sol.illustration}
                      alt={sol.illustrationAlt}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
