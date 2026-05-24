"use client";

import { motion } from "framer-motion";
import { Globe, Search, Share2, ArrowRight } from "lucide-react";

const expertises = [
  {
    icon: Globe,
    title: "Création de site",
    description:
      "Conception de sites internet performants, adaptés à tous les écrans, pour transformer vos visiteurs en clients.",
    href: "#",
  },
  {
    icon: Search,
    title: "Référencement SEO / SEA",
    description:
      "Optimisez votre visibilité sur Google pour apparaître là où vos clients vous cherchent.",
    href: "#",
  },
  {
    icon: Share2,
    title: "Réseaux Sociaux",
    description:
      "Animez votre communauté et développez votre notoriété sur les plateformes incontournables.",
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Expertises() {
  return (
    <section id="expertises" className="py-20 px-4" style={{ background: "#F0F9FF" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
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
            className="font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#1D2939",
            }}
          >
            Notre savoir-faire{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #007AFF, #0044CC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              digital
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#475467",
              fontSize: "1.1rem",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Des solutions complètes pour développer votre présence en ligne et attirer de nouveaux clients.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {expertises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 24 } }}
                className="flex flex-col rounded-2xl p-7"
                style={{
                  background: "#F0F9FF",
                  border: "1px solid #e1eaf5",
                  boxShadow: "0 4px 20px rgba(0,122,255,0.05)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(0,122,255,0.1)",
                    border: "1px solid rgba(0,122,255,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#007AFF" }} />
                </div>
                <h3
                  className="font-bold text-lg mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "#1D2939" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ fontFamily: "var(--font-body)", color: "#475467" }}
                >
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "#007AFF", fontFamily: "var(--font-body)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1D2939")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#007AFF")}
                >
                  En savoir plus
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
