"use client";

import { motion } from "framer-motion";
import InfiniteScroll, { type ScrollCard } from "@/components/ui/InfiniteScroll";

const examples: ScrollCard[] = [
  {
    sector: "Artisan & Bâtiment",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Site web artisan bâtiment",
  },
  {
    sector: "Restaurant",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Site web restaurant",
  },
  {
    sector: "Photographe",
    label: "Portfolio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    alt: "Site web photographe",
  },
  {
    sector: "Thérapeute",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    alt: "Site web thérapeute",
  },
  {
    sector: "Immobilier",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    alt: "Site web agent immobilier",
  },
  {
    sector: "Événementiel",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Site web événementiel",
  },
];

export default function Examples() {
  return (
    <section id="exemples" className="py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Réalisations
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Des sites qui convertissent,
            <br />
            pour chaque secteur.
          </h2>
          <p
            className="text-[#475569] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Chaque métier a ses codes. Nous les connaissons. Nous les appliquons.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <InfiniteScroll items={examples} />
      </motion.div>
    </section>
  );
}
