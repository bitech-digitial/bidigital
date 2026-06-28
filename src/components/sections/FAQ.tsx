"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Je ne suis pas à l'aise avec le digital, c'est un problème ?",
    a: "Absolument pas. Nous nous occupons de tout, de A à Z. Notre équipe reste disponible à tout moment pour répondre à vos questions.",
  },
  {
    q: "Est-ce que je suis engagé sur une durée ?",
    a: "Non. Vous pouvez arrêter à tout moment. Pas de contrat longue durée, pas de pénalité de résiliation.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Nous assurons la sécurité de votre site, les mises à jour techniques et le suivi SEO pour maintenir et améliorer votre positionnement sur Google dans la durée.",
  },
  {
    q: "J'ai besoin d'une fonctionnalité spécifique, c'est possible ?",
    a: "Oui. Prise de rendez-vous en ligne, espace client, boutique, devis interactif… tout est possible. Dites-nous ce dont vous avez besoin, nous trouvons la solution.",
  },
  {
    q: "J'ai déjà un site, vous pouvez le reprendre ?",
    a: "Oui. Nous pouvons migrer votre contenu existant, récupérer votre référencement actuel et améliorer votre site existant.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Oui. Nous utilisons des hébergeurs certifiés, avec sauvegardes quotidiennes et conformité RGPD complète.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-10 md:py-20 px-4 overflow-hidden" style={{ background: "#FFFFFF" }}>

      <div className="relative z-10 max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: "#ffffff", color: "#0055FF", fontFamily: "var(--font-badge)", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)" }}
          >
            FAQ
          </span>
          <h2
            className="font-bold"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 43px)",
              color: "#191e4f",
              lineHeight: 1.25,
            }}
          >
            Les questions{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                qu&apos;on nous pose souvent.
              </span>
              <span style={{
                display: "block", height: 3,
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                borderRadius: 2,
                position: "absolute", bottom: -2, left: 0, right: 0,
              }} />
            </span>
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: openIndex === i ? "rgba(0,85,255,0.04)" : "#f8faff",
                border: openIndex === i ? "1px solid rgba(0,122,255,0.2)" : "1px solid #e1eaf5",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-bold text-base md:text-lg leading-snug"
                  style={{ fontFamily: "var(--font-heading)", color: openIndex === i ? "#0055FF" : "#191e4f" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: openIndex === i ? "rgba(0,122,255,0.4)" : "#e1eaf5",
                    background: openIndex === i ? "rgba(0,122,255,0.08)" : "rgba(0,122,255,0.04)",
                  }}
                >
                  <Plus className="w-5 h-5" style={{ color: openIndex === i ? "#0055FF" : "#474667" }} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div
                      className="px-6 pb-6 text-base leading-relaxed border-t pt-4"
                      style={{ fontFamily: "var(--font-body)", color: "#474667", borderColor: "rgba(0,122,255,0.1)" }}
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
