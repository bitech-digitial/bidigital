"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, RefreshCw, Wrench, Server, Search } from "lucide-react";

const expertises = [
  {
    icon: Globe,
    title: "Création de site internet",
    description:
      "Nous concevons des sites vitrines professionnels, pensés pour refléter votre image et attirer vos clients.",
  },
  {
    icon: ShoppingCart,
    title: "Création de site e-commerce",
    description:
      "Nous développons des boutiques en ligne performantes, adaptées à votre activité et prêtes à vendre.",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site internet",
    description:
      "Modernisation du design, mise en conformité RGPD et optimisation de l'expérience utilisateur pour redonner de la valeur à votre site.",
  },
  {
    icon: Wrench,
    title: "Maintenance de site internet",
    description:
      "Surveillance, mises à jour et support technique pour assurer le bon fonctionnement de votre site au quotidien.",
  },
  {
    icon: Server,
    title: "Hébergement web",
    description:
      "Une infrastructure fiable et sécurisée pour garantir la disponibilité de votre site en toutes circonstances.",
  },
  {
    icon: Search,
    title: "Référencement naturel (SEO)",
    description:
      "Amélioration de votre visibilité sur Google grâce à une optimisation technique et éditoriale adaptée à votre secteur.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-10 md:py-20 px-4" style={{ background: "#F0F9FF" }}>


      {/* ── Décos géométriques ── */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "10%", bottom: "10%", left: 20, width: 1,
        background: "linear-gradient(180deg, transparent, rgba(0,122,255,0.12), transparent)",
      }} />
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: 40, left: 50, width: 80, height: 80,
        border: "1.5px solid rgba(0,122,255,0.12)", borderRadius: 14,
        transform: "rotate(10deg)",
      }} />
      <div className="absolute pointer-events-none hidden lg:block" style={{
        bottom: 80, right: -60, width: 300, height: 300,
        border: "1.5px solid rgba(0,122,255,0.07)", borderRadius: "50%",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header centré ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-4"
            style={{
              background: "rgba(0,122,255,0.08)",
              border: "1px solid rgba(0,122,255,0.2)",
              color: "#007AFF",
              fontFamily: "var(--font-body)",
            }}
          >
            Nos expertises
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#1D2939",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Découvrez l&apos;ensemble de{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #007AFF, #0044CC)" }}
            >
              nos expertises
            </span>
          </h2>
          <p
            className="text-lg mb-3 mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#475467", lineHeight: 1.7, maxWidth: 740 }}
          >
            Création, refonte, SEO, e-commerce, nous intervenons sur l&apos;ensemble des aspects de votre présence en ligne avec des solutions adaptées à vos objectifs.
          </p>
        </motion.div>

        {/* ── Grille 3 × 2 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertises.map((expertise, i) => {
            const Icon = expertise.icon;
            return (
              <motion.div
                key={expertise.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 24 },
                }}
                className="flex flex-col rounded-2xl p-6"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #e1eaf5",
                  boxShadow: "0 4px 20px rgba(0,122,255,0.05)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(0,122,255,0.08)",
                    border: "1px solid rgba(0,122,255,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#007AFF" }} />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "#1D2939" }}
                >
                  {expertise.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#475467" }}
                >
                  {expertise.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
