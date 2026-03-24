"use client";

import { motion } from "framer-motion";
import InfiniteScroll, { type ScrollCard } from "@/components/ui/InfiniteScroll";

const examples: ScrollCard[] = [
  {
    sector: "Artisan & Bâtiment",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Site web artisan bâtiment",
    url: "menuiserie-dupont.fr",
  },
  {
    sector: "Restaurant",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Site web restaurant",
    url: "lebristo-paris.fr",
  },
  {
    sector: "Photographe",
    label: "Portfolio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    alt: "Site web photographe",
    url: "martin-photo.fr",
  },
  {
    sector: "Thérapeute",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    alt: "Site web thérapeute",
    url: "cabinet-bien-etre.fr",
  },
  {
    sector: "Immobilier",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    alt: "Site web agent immobilier",
    url: "agence-immo92.fr",
  },
  {
    sector: "Événementiel",
    label: "Site vitrine",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Site web événementiel",
    url: "events-prestige.fr",
  },
];

export default function Examples() {
  return (
    <section id="exemples" className="py-20 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Réalisations
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Des sites qui convertissent,
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              pour chaque secteur.
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
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
