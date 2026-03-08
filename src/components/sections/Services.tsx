"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  Smartphone,
  LayoutDashboard,
  Database,
  Palette,
  Check,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    badge: "Offert avec chaque projet",
    badgeStyle: { background: "#f0fdf4", border: "1px solid #bbf7d0", color: "#16a34a" },
    title: "Identité Visuelle Complète",
    description: "Logo, flyer, carte de visite — offerts avec chaque projet.",
    points: ["Logo professionnel", "Charte graphique", "Flyer sur-mesure", "Carte de visite"],
  },
  {
    icon: Globe,
    badge: "Notre spécialité · 72h",
    badgeStyle: { background: "#eff6ff", border: "1px solid #bfdbfe", color: "#2563eb" },
    title: "Site Vitrine qui Convertit",
    description: "Votre vitrine livrée en 72h, conçue pour convertir vos visiteurs en clients.",
    points: ["Design UX/UI & SEO inclus", "Livraison en 72h garantie", "Copywriting inclus", "Hébergement inclus"],
  },
  {
    icon: Smartphone,
    badge: null,
    title: "Application Mobile",
    description: "iOS & Android. De l'idée au déploiement sur les stores.",
    points: ["iOS & Android natif", "Publication stores incluse", "Design natif", "Maintenance incluse"],
  },
  {
    icon: ShoppingBag,
    badge: null,
    title: "Boutique E-commerce",
    description: "Une boutique performante, pensée pour maximiser vos conversions.",
    points: ["Paiement sécurisé", "Tableau de bord vendeur"],
  },
  {
    icon: LayoutDashboard,
    badge: null,
    title: "Plateforme SaaS",
    description: "Transformez votre idée en produit digital scalable.",
    points: ["Architecture robuste", "Déploiement cloud"],
  },
  {
    icon: Database,
    badge: null,
    title: "CRM & Solution Métier",
    description: "Un outil sur-mesure qui s'adapte à vos processus internes.",
    points: ["Sur-mesure complet", "Formation équipe incluse"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Services() {
  const [expanded, setExpanded] = useState(false);

  const visibleServices = expanded ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-16 px-4 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Services
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Notre expertise{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #0f172a 0%, #2563eb 100%)" }}
            >
              à votre service
            </span>
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Du site vitrine à la solution digitale complexe, nous concevons des produits qui performent.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(37,99,235,0.08), 0 8px 16px rgba(0,0,0,0.06)",
                    borderColor: "#bfdbfe",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)" }}
                >
                  {service.badge && (
                    <span
                      className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={service.badgeStyle}
                    >
                      {service.badge}
                    </span>
                  )}

                  <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#2563eb]" />
                  </div>

                  <h3
                    className="font-bold text-lg mt-4 text-[#0f172a]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-sm text-[#64748b] leading-relaxed mt-2 font-light flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service.description}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-[#475569]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <Check className="w-3.5 h-3.5 text-[#16a34a] flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Expand button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-2 px-6 py-3 border border-[#e2e8f0] rounded-xl text-[#475569] text-sm font-medium hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb] transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {expanded ? "Voir moins" : "Voir tous nos services"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
