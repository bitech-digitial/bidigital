"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  {
    label: "Prix",
    agency: "3 000€ — 15 000€",
    freelance: "800€ — 2 000€",
    bidigital: "597€ TTC",
  },
  {
    label: "Délai",
    agency: "4 à 12 semaines",
    freelance: "2 à 6 semaines",
    bidigital: "72h garanties",
  },
  {
    label: "Prix fixe garanti",
    agency: false,
    freelance: false,
    bidigital: true,
  },
  {
    label: "Hébergement inclus",
    agency: false,
    freelance: false,
    bidigital: true,
  },
  {
    label: "SEO inclus",
    agency: true,
    freelance: false,
    bidigital: true,
  },
  {
    label: "Suivi post-livraison",
    agency: true,
    freelance: false,
    bidigital: true,
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-[#16a34a] mx-auto" />
    ) : (
      <X className="w-5 h-5 text-[#94a3b8] mx-auto" />
    );
  }
  return <span className="text-[#0f172a] text-sm" style={{ fontFamily: "var(--font-body)" }}>{value}</span>;
}

function CellMobile({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-4 h-4 text-[#16a34a]" />
    ) : (
      <X className="w-4 h-4 text-[#94a3b8]" />
    );
  }
  return <span className="text-xs font-medium text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{value}</span>;
}

export default function ValueAnchor() {
  return (
    <section className="py-24 px-4 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto">
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
            Comparaison
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pourquoi payer 3 000€
            <br />
            pour attendre 6 semaines ?
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            La qualité d'une agence, la rapidité d'un SaaS, le prix d'un
            freelance junior.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full border-collapse bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="text-left py-4 px-6 text-[#475569] text-sm font-medium w-1/4" style={{ fontFamily: "var(--font-body)" }}>
                  Critère
                </th>
                <th className="py-4 px-6 text-center text-[#475569] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Agence classique
                </th>
                <th className="py-4 px-6 text-center text-[#475569] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Freelance
                </th>
                <th className="py-4 px-6 text-center relative bg-[#dbeafe]">
                  <div className="inline-flex flex-col items-center">
                    <span
                      className="text-[#1d4ed8] font-bold text-sm"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      BiDigital
                    </span>
                    <span className="text-[10px] text-[#2563eb] mt-1 bg-[#eff6ff] px-2 py-0.5 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
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
                  className={`border-t border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors ${
                    i % 2 === 0 ? "" : "bg-[#f8fafc]/50"
                  }`}
                >
                  <td className="py-4 px-6 text-[#0f172a] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    {row.label}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.agency} />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Cell value={row.freelance} />
                  </td>
                  <td className="py-4 px-6 text-center bg-[#eff6ff] border-x border-[#bfdbfe]">
                    <Cell value={row.bidigital} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block md:hidden"
        >
          <div className="grid grid-cols-3 gap-2">
            {/* Agence classique */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3">
              <h3
                className="text-xs font-bold text-center pb-2 border-b border-[#e2e8f0]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Agence
              </h3>
              <div className="pt-2 space-y-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">
                      {row.label}
                    </div>
                    <CellMobile value={row.agency} />
                  </div>
                ))}
              </div>
            </div>

            {/* Freelance */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3">
              <h3
                className="text-xs font-bold text-center pb-2 border-b border-[#e2e8f0]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Freelance
              </h3>
              <div className="pt-2 space-y-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">
                      {row.label}
                    </div>
                    <CellMobile value={row.freelance} />
                  </div>
                ))}
              </div>
            </div>

            {/* BiDigital */}
            <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-3 relative">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 bg-[#2563eb] text-white text-[9px] font-bold rounded-full">
                Meilleur choix
              </div>
              <h3
                className="text-xs font-bold text-center text-[#1d4ed8] pb-2 border-b border-[#bfdbfe]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                BiDigital
              </h3>
              <div className="pt-2 space-y-3">
                {rows.map((row) => (
                  <div key={row.label}>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-0.5">
                      {row.label}
                    </div>
                    <CellMobile value={row.bidigital} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#475569] mt-8 text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Même niveau de qualité.{" "}
          <span className="text-[#0f172a] font-medium">Fraction du prix.</span>{" "}
          <span className="text-[#0f172a] font-medium">Fraction du temps.</span>
        </motion.p>
      </div>
    </section>
  );
}
