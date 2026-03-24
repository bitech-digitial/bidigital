"use client";

import { motion } from "framer-motion";

export default function PunchlineQuote() {
  return (
    <section
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "#08090f" }}
    >
      {/* Glow behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Giant quote mark in background */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-2rem",
            left: "-1rem",
            fontSize: "20rem",
            lineHeight: 1,
            fontFamily: "var(--font-heading)",
            fontWeight: 900,
            color: "#6366f1",
            opacity: 0.05,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          "
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
          style={{
            padding: "3rem 2.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 24,
            backdropFilter: "blur(8px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
              fontWeight: 700,
              color: "#f8fafc",
              lineHeight: 1.4,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            La 2e page de Google, c&apos;est le meilleur endroit
            <br className="hidden sm:block" />
            pour se cacher.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nous, on vous met en 1ère.
            </span>
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              color: "#475569",
              fontStyle: "italic",
              letterSpacing: "0.03em",
            }}
          >
            — BiDigital, obsédés par vos résultats
          </p>
        </motion.div>
      </div>
    </section>
  );
}
