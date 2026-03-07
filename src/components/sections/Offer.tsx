"use client";

import { motion } from "framer-motion";
import { Check, ChevronRight, Info } from "lucide-react";

const included = [
  "Design sur-mesure",
  "Jusqu'à 5 pages",
  "100% responsive (mobile + desktop)",
  "SEO de base optimisé",
  "Formulaire de contact",
  "Hébergement inclus 1 an",
  "Livraison 72h garantie",
  "1 mois de retouches inclus",
];

export default function Offer() {
  return (
    <section id="offre" className="py-24 px-4 bg-[#f8fafc]">
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
            Tarif
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Une offre. Un prix.
            <br />
            Aucune surprise.
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Pas de devis. Pas de négociation. Pas de <em>ça dépend</em>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-lg mx-4 md:mx-auto"
        >
          <div className="relative bg-white border-2 border-[#bfdbfe] rounded-3xl p-6 md:p-10 shadow-xl shadow-blue-100">
            {/* Badge livraison */}
            <div className="flex justify-center mb-6">
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Livraison en 72h garantie
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-start justify-center gap-1 mb-2">
                <span className="text-[#475569] text-lg mt-3">€</span>
                <span
                  className="text-5xl md:text-7xl font-extrabold text-[#0f172a] leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  597
                </span>
              </div>
              <p className="text-[#475569] text-sm" style={{ fontFamily: "var(--font-body)" }}>TTC · Paiement unique</p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#e2e8f0] mb-8" />

            {/* Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f0fdf4] border border-[#16a34a]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#16a34a]" />
                  </div>
                  <span className="text-[#0f172a] text-sm" style={{ fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Domain note */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] mb-8">
              <Info className="w-4 h-4 text-[#94a3b8] flex-shrink-0 mt-0.5" />
              <p className="text-[#94a3b8] text-xs leading-relaxed font-light" style={{ fontFamily: "var(--font-body)" }}>
                Nom de domaine (~15€/an) à ta charge. On t'explique comment
                faire, c'est très simple.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Démarrer mon projet
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
