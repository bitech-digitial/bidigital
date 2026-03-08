"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Star } from "lucide-react";
import { HeartHandshake } from "lucide-react";

const miniCards = [
  {
    icon: Clock,
    title: "Modifications sous 48h",
    text: "Chaque demande traitée en moins de 48h ouvrées.",
  },
  {
    icon: Shield,
    title: "1 an de modifications offert",
    text: "Un an complet de modifications sans supplément.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement bienveillant",
    text: "Nous vous guidons à chaque étape avec pédagogie.",
  },
  {
    icon: Star,
    title: "Tout inclus, sans surprise",
    text: "Hébergement, domaine, logo, flyer, carte de visite inclus.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function Values() {
  return (
    <section
      className="py-16 px-4"
      style={{ background: "linear-gradient(to bottom, #f8fafc, #ffffff)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Notre engagement
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pourquoi nous{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)" }}
            >
              faire confiance ?
            </span>
          </h2>
          <p
            className="text-[#475569] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Nous restons présents bien après la mise en ligne.
          </p>
        </motion.div>

        {/* 4 mini-cards 2x2 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {miniCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-5"
              >
                <Icon className="w-5 h-5 text-[#2563eb]" />
                <h4
                  className="font-semibold text-[#0f172a] text-sm mt-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h4>
                <p
                  className="text-[#64748b] text-xs leading-relaxed mt-1 font-light"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
