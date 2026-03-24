"use client";

import { motion } from "framer-motion";
import { Globe, Palette, RefreshCw, Check } from "lucide-react";

const services = [
  {
    icon: Palette,
    badge: "Offert avec chaque projet",
    badgeStyle: {
      background: "rgba(74,222,128,0.1)",
      border: "1px solid rgba(74,222,128,0.25)",
      color: "#4ade80",
    },
    title: "Identité Visuelle Complète",
    description: "Logo, flyer, carte de visite — offerts avec chaque projet.",
    points: [
      "Logo professionnel sur-mesure",
      "Charte graphique complète",
      "Flyer & carte de visite",
    ],
    glow: false,
  },
  {
    icon: Globe,
    badge: "Notre spécialité",
    badgeStyle: {
      background: "rgba(99,102,241,0.12)",
      border: "1px solid rgba(99,102,241,0.3)",
      color: "#a5b4fc",
    },
    title: "Site Vitrine qui Convertit",
    description:
      "Votre vitrine en ligne, conçue pour convertir vos visiteurs en clients.",
    points: [
      "SEO pour apparaître en 1ère position sur Google",
      "Mise en conformité légale incluse (RGPD, mentions légales, CGU)",
      "Copywriting & contenu optimisé inclus",
      "Hébergement + nom de domaine inclus",
    ],
    glow: false,
  },
  {
    icon: RefreshCw,
    badge: "ABONNEMENT · SANS ENGAGEMENT",
    badgeStyle: {
      background: "rgba(139,92,246,0.15)",
      border: "1px solid rgba(139,92,246,0.4)",
      color: "#c084fc",
    },
    title: "Maintenance & Évolution Continue",
    description:
      "Votre site reste à jour, performant et optimisé. Nous gérons tout, vous vous concentrez sur votre activité.",
    points: [
      "Mises à jour légales & sécurité incluses",
      "SEO continu + positions Google surveillées",
      "Copywriting optimisé régulièrement",
      "Hébergement + nom de domaine inclus",
      "Modifications sous 48h garanties",
      "Sans engagement",
    ],
    price: "À partir de 19,99 €/mois",
    glow: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4" style={{ background: "#050814" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Notre offre
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Notre expertise{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              à votre service
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
          >
            Du site vitrine conforme à la maintenance continue, nous couvrons tout votre digital.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                }}
                className="relative flex flex-col rounded-2xl p-6"
                style={{
                  background: service.glow
                    ? "rgba(139,92,246,0.06)"
                    : "rgba(255,255,255,0.03)",
                  border: service.glow
                    ? "1px solid rgba(139,92,246,0.25)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: service.glow
                    ? "0 0 40px rgba(139,92,246,0.12), 0 4px 20px rgba(0,0,0,0.3)"
                    : "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                {/* Featured glow ring for maintenance card */}
                {service.glow && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at top, rgba(139,92,246,0.08) 0%, transparent 70%)",
                    }}
                  />
                )}

                {service.badge && (
                  <span
                    className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={service.badgeStyle}
                  >
                    {service.badge}
                  </span>
                )}

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: service.glow
                      ? "rgba(139,92,246,0.15)"
                      : "rgba(99,102,241,0.12)",
                    border: service.glow
                      ? "1px solid rgba(139,92,246,0.3)"
                      : "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: service.glow ? "#c084fc" : "#818cf8" }}
                  />
                </div>

                <h3
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#f0f0ff",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
                >
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2 mb-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
                    >
                      <Check
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        style={{ color: "#4ade80" }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {service.price && (
                  <div
                    className="mt-auto pt-4 border-t"
                    style={{ borderColor: "rgba(139,92,246,0.2)" }}
                  >
                    <span
                      className="font-bold text-base"
                      style={{
                        color: "#c084fc",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {service.price}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
