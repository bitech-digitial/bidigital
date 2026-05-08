"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, RefreshCw, Wrench, Server, Search } from "lucide-react";

const expertises = [
  {
    icon: Globe,
    title: "Création de site internet",
    description:
      "Notre agence de création de site web est spécialisée dans le développement de sites corporate sous WordPress.",
  },
  {
    icon: ShoppingCart,
    title: "Création de site e-commerce",
    description:
      "Notre agence web est spécialisée dans la création de site e-commerce avec PrestaShop et Shopify.",
  },
  {
    icon: RefreshCw,
    title: "Refonte de site internet",
    description:
      "Donnez un nouveau souffle à votre site internet pour de meilleures performances et une expérience utilisateur optimale.",
  },
  {
    icon: Wrench,
    title: "Maintenance de site internet",
    description:
      "Assistance professionnelle 24h/24 pour surveiller, mettre à jour et maintenir votre site web.",
  },
  {
    icon: Server,
    title: "Hébergement web",
    description:
      "Solutions d'hébergement fiables et sécurisées pour assurer la disponibilité constante de votre site.",
  },
  {
    icon: Search,
    title: "Référencement SEO / SEA",
    description:
      "Boostez votre visibilité sur Google grâce à des stratégies SEO naturelles et des campagnes SEA ciblées pour attirer plus de clients.",
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
    <section id="services" className="relative py-20 px-4 overflow-hidden" style={{ background: "#F0F9FF" }}>

      {/* ── Décos géométriques ── */}
      {/* Trait vertical gauche */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "10%", bottom: "10%", left: 20, width: 1,
        background: "linear-gradient(180deg, transparent, rgba(0,119,182,0.12), transparent)",
      }} />
      {/* Carré outline haut-gauche */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: 40, left: 50, width: 80, height: 80,
        border: "1.5px solid rgba(0,119,182,0.12)", borderRadius: 14,
        transform: "rotate(10deg)",
      }} />
      {/* Grand cercle droit */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "50%", right: -100, marginTop: -200,
        width: 400, height: 400,
        border: "1.5px solid rgba(0,119,182,0.07)", borderRadius: "50%",
      }} />
      {/* Rectangle diagonal bas-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        bottom: 40, right: 60, width: 120, height: 60,
        border: "1px solid rgba(0,119,182,0.1)", borderRadius: 10,
        transform: "rotate(-15deg)",
      }} />
      {/* Petit carré rempli milieu-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        top: "45%", right: 80, width: 32, height: 32,
        background: "rgba(0,119,182,0.06)", border: "1px solid rgba(0,119,182,0.18)",
        borderRadius: 6, transform: "rotate(25deg)",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* ── Colonne gauche : titre + texte + 6 cartes ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-0 pr-0 lg:pr-10"
          >
            <span
              className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{
                background: "rgba(0,119,182,0.08)",
                border: "1px solid rgba(0,119,182,0.2)",
                color: "#0077B6",
                fontFamily: "var(--font-body)",
              }}
            >
              Nos expertises
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#03045E",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Découvrez l&apos;ensemble de{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #0077B6, #023E8A)" }}
              >
                nos expertises
              </span>
            </h2>
            <p
              className="text-lg mb-4"
              style={{ fontFamily: "var(--font-body)", color: "#4a6080", lineHeight: 1.7 }}
            >
              Que votre objectif soit de créer un site innovant, de lancer une boutique en ligne,
              d&apos;améliorer votre marketing digital ou votre SEO, nous sommes à vos côtés.
              Nous vous proposons des solutions efficaces et pérennes qui répondent à vos besoins.
            </p>
            <p
              className="text-base mb-10"
              style={{ fontFamily: "var(--font-body)", color: "#4a6080", lineHeight: 1.7 }}
            >
              De plus, nous gérons vos projets de refonte, nous nous chargeons de la maintenance
              et de l&apos;hébergement de vos sites et élaborons des stratégies SEO efficaces pour
              renforcer votre présence en ligne.
            </p>

            {/* Grid — 6 cartes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="flex flex-col rounded-2xl p-5"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #e1eaf5",
                      boxShadow: "0 4px 20px rgba(0,119,182,0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: "rgba(0,119,182,0.08)",
                        border: "1px solid rgba(0,119,182,0.2)",
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#0077B6" }} />
                    </div>
                    <h3
                      className="font-bold text-base mb-1.5"
                      style={{ fontFamily: "var(--font-heading)", color: "#03045E" }}
                    >
                      {expertise.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
                    >
                      {expertise.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Trait vertical séparateur (desktop) ── */}
          <div
            className="hidden lg:block flex-shrink-0"
            style={{ width: 1, background: "linear-gradient(180deg, transparent, rgba(0,119,182,0.2) 20%, rgba(0,119,182,0.2) 80%, transparent)" }}
          />

          {/* ── Trait horizontal séparateur (mobile) ── */}
          <div
            className="block lg:hidden my-10"
            style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,119,182,0.2) 20%, rgba(0,119,182,0.2) 80%, transparent)" }}
          />

          {/* ── Colonne droite : illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center pl-0 lg:pl-10"
            style={{ width: "100%", maxWidth: 320 }}
          >
            <img
              src="/images/illustrations/undraw_experts_v2vy.svg"
              alt="Nos expertises"
              style={{ width: "100%", maxWidth: 280, height: "auto", display: "block" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
