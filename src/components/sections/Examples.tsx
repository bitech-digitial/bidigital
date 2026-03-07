"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

const examples = [
  {
    sector: "Bâtiment & Artisanat",
    sub: "Plombier · Électricien · Maçon",
    description: "Un site qui rassure avant même le premier appel.",
    delay: "58h",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    alt: "Site web artisan bâtiment",
  },
  {
    sector: "Restauration",
    sub: "Restaurant · Pizzeria · Snack",
    description:
      "Ta carte en ligne, tes horaires, ta réservation — tout au même endroit.",
    delay: "48h",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Site web restaurant",
  },
  {
    sector: "Bien-être & Thérapie",
    sub: "Coach · Thérapeute · Naturopathe",
    description: "Un site qui inspire confiance dès la première visite.",
    delay: "64h",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    alt: "Site web thérapeute bien-être",
  },
  {
    sector: "Créatifs & Photo",
    sub: "Photographe · Vidéaste",
    description: "Laisse ton travail parler. On crée le cadre parfait.",
    delay: "72h",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    alt: "Site web photographe",
  },
  {
    sector: "Immobilier",
    sub: "Agent immobilier · Gestionnaire",
    description: "Une vitrine pro qui attire les bons clients au bon moment.",
    delay: "66h",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    alt: "Site web agent immobilier",
  },
  {
    sector: "Événementiel",
    sub: "Wedding planner · Organisateur",
    description: "Montre ce que tu fais. Fais rêver avant même le devis.",
    delay: "70h",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Site web wedding planner",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Examples() {
  return (
    <section id="exemples" className="py-24 px-4 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Exemples
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Des sites qui convertissent,
            <br />
            pour chaque secteur.
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Chaque métier a ses codes. On les connaît. On les applique.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.sector}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:border-[#bfdbfe] hover:shadow-xl"
            >
              {/* Browser mockup */}
              <div className="relative z-10 bg-[#f8fafc] border-b border-[#e2e8f0] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <div className="flex-1 mx-3 h-5 bg-white border border-[#e2e8f0] rounded-md flex items-center px-3">
                  <span className="text-[#94a3b8] text-xs truncate">
                    www.{ex.sector.toLowerCase().replace(/[^a-z]/g, "")}.fr
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-[#2563eb] transition-colors" />
              </div>

              {/* Image preview */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={ex.image}
                  alt={ex.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={80}
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.5))",
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="text-[#0f172a] font-bold text-lg mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {ex.sector}
                </h3>
                <p className="text-[#2563eb] text-xs font-medium mb-3" style={{ fontFamily: "var(--font-body)" }}>{ex.sub}</p>
                <p className="text-[#64748b] text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {ex.description}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] text-xs text-[#2563eb]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Clock className="w-3.5 h-3.5" />
                  Livré en {ex.delay}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
