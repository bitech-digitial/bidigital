"use client";

import { motion } from "framer-motion";
import FloatingShapesLayer from "@/components/ui/FloatingShapesLayer";

export default function ColorBlock() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#020318", minHeight: "560px" }}
      aria-label="BiDigital — Construire le Web de demain"
    >
      <FloatingShapesLayer variant="dark" />

      {/* ── Couches géométriques superposées ── */}

      {/* Couche 1 — bande diagonale bleu foncé */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(145deg, #1D2939 0%, transparent 55%)",
          opacity: 0.9,
        }}
      />

      {/* Couche 2 — bloc rectangle bleu vif en haut à droite */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: "45%",
          height: "65%",
          background: "linear-gradient(200deg, #007AFF 0%, #0044CC 60%, transparent 100%)",
          opacity: 0.55,
          borderBottomLeftRadius: "80% 60%",
        }}
      />

      {/* Couche 3 — rectangle bas gauche cyan pâle */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: 0,
          width: "40%",
          height: "50%",
          background: "linear-gradient(340deg, #0096C7 0%, #0044CC 50%, transparent 100%)",
          opacity: 0.35,
          borderTopRightRadius: "70% 80%",
        }}
      />

      {/* Couche 4 — fine bande horizontale accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(144,224,239,0.25) 30%, rgba(0,122,255,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Couche 5 — glow central */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          background: "radial-gradient(ellipse, rgba(0,122,255,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Couche 6 — petits blocs accent en bas à droite */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          bottom: "60px",
          right: "80px",
          width: 120,
          height: 120,
          border: "1px solid rgba(144,224,239,0.15)",
          borderRadius: 16,
          transform: "rotate(20deg)",
        }}
      />
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          bottom: "80px",
          right: "100px",
          width: 60,
          height: 60,
          background: "rgba(0,122,255,0.2)",
          border: "1px solid rgba(0,150,199,0.3)",
          borderRadius: 10,
          transform: "rotate(-10deg)",
        }}
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: "40px",
          left: "60px",
          width: 80,
          height: 80,
          border: "1px solid rgba(0,122,255,0.2)",
          borderRadius: 12,
          transform: "rotate(15deg)",
        }}
      />

      {/* ── Contenu centré ── */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[560px] px-6 py-20 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-semibold tracking-widest rounded-full px-4 py-1.5 mb-8"
          style={{
            background: "rgba(144,224,239,0.1)",
            border: "1px solid rgba(144,224,239,0.25)",
            color: "#90E0EF",
            fontFamily: "var(--font-badge)",
          }}
        >
          Agence digitale
        </motion.span>

        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            maxWidth: 800,
            margin: "0 auto 1.5rem",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>BiDigital&nbsp;: </span>
          <span className="text-neon-pulse">Construire le Web</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}> de demain</span>
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto 2.5rem",
          }}
        >
          Design, performance, visibilité — une agence qui transforme
          votre présence en ligne en véritable moteur de croissance.
        </motion.p>

        {/* Ligne décorative */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            width: 80,
            height: 3,
            background: "linear-gradient(90deg, #007AFF, #90E0EF)",
            borderRadius: 99,
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
