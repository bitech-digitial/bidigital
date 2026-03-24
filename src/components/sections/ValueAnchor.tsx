"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Prix", agency: "3 000€ — 15 000€", freelance: "800€ — 2 000€", bidigital: "à partir de 690€" },
  { label: "Délai", agency: "4 à 12 semaines", freelance: "2 à 6 semaines", bidigital: "48h garanties" },
  { label: "Prix fixe garanti", agency: false, freelance: false, bidigital: true },
  { label: "Hébergement inclus", agency: false, freelance: false, bidigital: true },
  { label: "SEO inclus", agency: true, freelance: false, bidigital: true },
  { label: "Suivi post-livraison", agency: true, freelance: false, bidigital: true },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 mx-auto" style={{ color: "#4ade80" }} />
    ) : (
      <X className="w-4 h-4 mx-auto" style={{ color: "#3f3f46" }} />
    );
  }
  return (
    <span
      className="text-sm font-medium"
      style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
    >
      {value}
    </span>
  );
}

function CellMobile({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4" style={{ color: "#4ade80" }} />
    ) : (
      <X className="w-4 h-4" style={{ color: "#3f3f46" }} />
    );
  }
  return (
    <span
      className="text-xs font-semibold"
      style={{
        fontFamily: "var(--font-body)",
        color: highlight ? "#a5b4fc" : "#a1a1aa",
      }}
    >
      {value}
    </span>
  );
}

export default function ValueAnchor() {
  return (
    <section
      id="comparaison"
      className="py-20 sm:py-24 px-4"
      style={{ background: "#050814" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Comparaison
          </span>
          <h2
            className="text-3xl lg:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Pourquoi payer 3 000€
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)" }}
            >
              pour attendre 6 semaines ?
            </span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
          >
            La qualité d&apos;une agence, la rapidité d&apos;un SaaS, le prix d&apos;un freelance junior.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:block overflow-hidden rounded-2xl"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <th
                  className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-widest w-1/4"
                  style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                >
                  Critère
                </th>
                <th
                  className="py-4 px-6 text-center text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                >
                  Agence classique
                </th>
                <th
                  className="py-4 px-6 text-center text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                >
                  Freelance
                </th>
                <th
                  className="py-4 px-6 text-center"
                  style={{ background: "rgba(99,102,241,0.08)" }}
                >
                  <div className="inline-flex flex-col items-center gap-1">
                    <span
                      className="font-extrabold text-sm"
                      style={{ fontFamily: "var(--font-heading)", color: "#a5b4fc" }}
                    >
                      BiDigital
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.15)",
                        border: "1px solid rgba(99,102,241,0.3)",
                        color: "#818cf8",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Recommandé
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    background: i % 2 === 1 ? "rgba(255,255,255,0.01)" : "transparent",
                  }}
                >
                  <td
                    className="py-4 px-6 text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
                  >
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.agency} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.freelance} />
                  </td>
                  <td
                    className="py-4 px-6 text-center"
                    style={{
                      background: "rgba(99,102,241,0.06)",
                      borderLeft: "1px solid rgba(99,102,241,0.15)",
                      borderRight: "1px solid rgba(99,102,241,0.15)",
                    }}
                  >
                    <Cell value={row.bidigital} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="block md:hidden"
        >
          <div className="grid grid-cols-3 gap-2">
            {/* Agence */}
            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-xs font-bold text-center pb-2 mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#52525b",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                Agence
              </p>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <p className="text-[9px] uppercase tracking-wide mb-0.5" style={{ color: "#3f3f46", fontFamily: "var(--font-body)" }}>
                      {row.label}
                    </p>
                    <CellMobile value={row.agency} />
                  </div>
                ))}
              </div>
            </div>

            {/* Freelance */}
            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="text-xs font-bold text-center pb-2 mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#52525b",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                Freelance
              </p>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <p className="text-[9px] uppercase tracking-wide mb-0.5" style={{ color: "#3f3f46", fontFamily: "var(--font-body)" }}>
                      {row.label}
                    </p>
                    <CellMobile value={row.freelance} />
                  </div>
                ))}
              </div>
            </div>

            {/* BiDigital */}
            <div
              className="rounded-xl p-3 relative"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              <div
                className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-bold"
                style={{ background: "#6366f1", color: "#fff", fontFamily: "var(--font-body)" }}
              >
                ✓ Meilleur
              </div>
              <p
                className="text-xs font-bold text-center pb-2 mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#a5b4fc",
                  borderBottom: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                BiDigital
              </p>
              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <p className="text-[9px] uppercase tracking-wide mb-0.5" style={{ color: "#52525b", fontFamily: "var(--font-body)" }}>
                      {row.label}
                    </p>
                    <CellMobile value={row.bidigital} highlight />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm mt-8"
          style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
        >
          Même niveau de qualité.{" "}
          <span style={{ color: "#a1a1aa", fontWeight: 500 }}>Fraction du prix.</span>{" "}
          <span style={{ color: "#a1a1aa", fontWeight: 500 }}>Fraction du temps.</span>
        </motion.p>
      </div>
    </section>
  );
}
