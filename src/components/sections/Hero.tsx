"use client";

import { motion } from "framer-motion";
import { ChevronRight, Check, ArrowDown } from "lucide-react";

const badges = [
  "Livraison en 72h garantie",
  "Prix fixe, sans surprise",
  "SEO inclus",
  "Satisfait ou remboursé",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 bg-white">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(#e2e8f0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Blob 1 — top left */}
      <div
        className="absolute z-0"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          left: "-150px",
          background: "rgba(37,99,235,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 2 — top right */}
      <div
        className="absolute z-0"
        style={{
          width: "500px",
          height: "500px",
          top: "-80px",
          right: "-100px",
          background: "rgba(147,197,253,0.15)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 3 — bottom center */}
      <div
        className="absolute z-0"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(219,234,254,0.2)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pre-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
          Agence web — France & pays francophones
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-[#0f172a]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ton activité mérite un site{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #2563eb, #60a5fa)",
            }}
          >
            qui travaille
          </span>{" "}
          pour toi.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          style={{ fontFamily: "var(--font-body)" }}
        >
          On conçoit ton site web professionnel de A à Z. Livré en 72h.{" "}
          <span className="text-[#0f172a] font-medium">À partir de 597€</span>,
          hébergement inclus. Tu te concentres sur ton métier — on s'occupe du
          reste.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 w-full"
        >
          <a
            href="#offre"
            className="group flex items-center justify-center gap-2 w-full md:w-auto px-7 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Démarrer mon projet gratuitement
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#exemples"
            className="flex items-center justify-center gap-2 w-full md:w-auto px-7 py-4 border border-[#e2e8f0] hover:border-[#bfdbfe] text-[#475569] hover:text-[#0f172a] rounded-xl transition-all duration-200 hover:bg-[#eff6ff] text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Voir des exemples
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-xs text-[#2563eb]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Check className="w-3.5 h-3.5 text-[#16a34a] flex-shrink-0" />
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#94a3b8]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
