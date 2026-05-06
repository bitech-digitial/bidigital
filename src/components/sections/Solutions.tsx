"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const solutions = [
  {
    tag: "Création de sites",
    title: "Plus qu'un site, votre vitrine numérique",
    description:
      "Un design moderne, une navigation fluide et un contenu optimisé pour garantir une expérience utilisateur irréprochable et un taux de conversion maximal.",
    points: [
      "Responsive — mobile, tablette et desktop",
      "SEO inclus dès la mise en ligne",
      "RGPD conforme — mentions légales, CGU, cookies",
      "Livré en 7 jours",
    ],
    cta: { label: "Découvrir nos réalisations", href: "#exemples" },
    image: "/images/realisations/site-2.webp",
    imageLeft: false,
  },
  {
    tag: "Référencement",
    title: "Soyez visible là où vos clients cherchent",
    description:
      "Apparaissez en tête des résultats Google là où vos clients vous cherchent. SEO technique, contenu optimisé et suivi de positions inclus.",
    points: [
      "Audit SEO complet de votre site",
      "Mots-clés ciblés pour votre secteur",
      "Rapports mensuels de performance",
      "SEA optionnel pour accélérer",
    ],
    cta: { label: "Optimiser ma visibilité", href: "#contact" },
    image: "/images/realisations/site-1.webp",
    imageLeft: true,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-4" style={{ background: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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
            Nos solutions
          </span>
          <h2
            className="font-extrabold"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#03045E",
            }}
          >
            Ce que nous faisons{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0077B6, #023E8A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pour vous
            </span>
          </h2>
        </motion.div>

        {/* Alternating blocks */}
        <div className="flex flex-col gap-24">
          {solutions.map((sol) => (
            <motion.div
              key={sol.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${sol.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
            >
              {/* Text */}
              <div className="flex-1">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background: "rgba(0,119,182,0.08)",
                    border: "1px solid rgba(0,119,182,0.2)",
                    color: "#0077B6",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {sol.tag}
                </span>
                <h3
                  className="font-extrabold mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                    color: "#03045E",
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {sol.title}
                </h3>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#4a6080", fontSize: 16 }}
                >
                  {sol.description}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {sol.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(0,119,182,0.1)" }}
                      >
                        <Check size={11} style={{ color: "#0077B6" }} />
                      </span>
                      <span
                        style={{ fontFamily: "var(--font-body)", color: "#1a2a4a", fontSize: 15 }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={sol.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    background: "#03045E",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#0077B6")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#03045E")}
                >
                  {sol.cta.label}
                </a>
              </div>

              {/* Image */}
              <div
                className="flex-1 w-full"
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid #e1eaf5",
                  boxShadow: "0 8px 40px rgba(0,119,182,0.1)",
                }}
              >
                {/* Browser chrome */}
                <div
                  style={{
                    background: "#F0F9FF",
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 14px",
                    borderBottom: "1px solid #e1eaf5",
                    gap: 6,
                  }}
                >
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />
                  ))}
                </div>
                <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                  <Image
                    src={sol.image}
                    alt={sol.tag}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
