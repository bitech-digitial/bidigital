"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, RefreshCw, Wrench, Server, Search } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const expertises = [
  {
    icon: Globe,
    title: "Création de site internet",
    description:
      "Nous concevons des sites vitrines professionnels, pensés pour refléter votre image et attirer vos clients.",
    href: "/creation-site-internet",
  },
  {
    icon: ShoppingCart,
    title: "Création de site e-commerce",
    description:
      "Nous développons des boutiques en ligne performantes, adaptées à votre activité et prêtes à vendre.",
    href: null,
  },
  {
    icon: RefreshCw,
    title: "Refonte de site internet",
    description:
      "Modernisation du design, mise en conformité RGPD et optimisation de l'expérience utilisateur pour redonner de la valeur à votre site.",
    href: "/refonte-site-internet",
  },
  {
    icon: Wrench,
    title: "Maintenance de site internet",
    description:
      "Surveillance, mises à jour et support technique pour assurer le bon fonctionnement de votre site au quotidien.",
    href: "/maintenance-site-internet",
  },
  {
    icon: Server,
    title: "Hébergement web",
    description:
      "Une infrastructure fiable et sécurisée pour garantir la disponibilité de votre site en toutes circonstances.",
    href: "/hebergement-web",
  },
  {
    icon: Search,
    title: "Référencement naturel (SEO)",
    description:
      "Amélioration de votre visibilité sur Google grâce à une optimisation technique et éditoriale adaptée à votre secteur.",
    href: "/referencement-naturel-seo",
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
    <section id="services" className="relative py-10 md:py-20 px-4" style={{ background: "#ffffff" }}>


      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header centré ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: "#e2f7ff",
              color: "#0055FF",
              fontFamily: "var(--font-badge)",
            }}
          >
            Nos expertises
          </span>
          <h2
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 43px)",
              color: "#191e4f",
              lineHeight: 1.25,
            }}
          >
            Découvrez l&apos;ensemble de{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                nos expertises
              </span>
              <span style={{
                display: "block", height: 3,
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                borderRadius: 2,
                position: "absolute", bottom: -2, left: 0, right: 0,
              }} />
            </span>
          </h2>
          <p
            className="text-lg mb-3 mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#474667", lineHeight: 1.6, maxWidth: 740 }}
          >
            Création, refonte, SEO, e-commerce, nous intervenons sur l&apos;ensemble des aspects de votre présence en ligne avec des solutions adaptées à vos objectifs.
          </p>
        </motion.div>

        {/* ── Grille 3 × 2 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertises.map((expertise, i) => {
            const Icon = expertise.icon;
            const cardContent = (
              <SpotlightCard className="flex flex-col p-6 h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "#e2f7ff",
                    border: "none",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#0055FF" }} />
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                >
                  {expertise.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                >
                  {expertise.description}
                </p>
                {expertise.href && (
                  <span
                    className="flex items-center gap-1 mt-4 text-xs font-semibold"
                    style={{ color: "#007AFF", fontFamily: "var(--font-heading)" }}
                  >
                    En savoir plus →
                  </span>
                )}
              </SpotlightCard>
            );

            return (
              <motion.div
                key={expertise.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                {expertise.href ? (
                  <a href={expertise.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
