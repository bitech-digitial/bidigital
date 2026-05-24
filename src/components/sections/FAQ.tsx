"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Mon site est-il vraiment conforme RGPD ?",
    a: "Oui. Chaque site BiDigital est livré avec mentions légales, politique de confidentialité, gestion des cookies conforme CNIL et CGU si nécessaire. Vous êtes protégé dès le jour 1.",
  },
  {
    q: "Puis-je garder mon nom de domaine existant ?",
    a: "Absolument. Nous pouvons utiliser votre domaine actuel.",
  },
  {
    q: "Comment se déroule un projet avec BiDigital ?",
    a: "Un premier échange pour comprendre votre activité et vos objectifs, suivi d'une phase de conception complète (design, développement, SEO, conformité légale). Vous validez le résultat, nous ajustons, puis votre site est mis en ligne.",
  },
  {
    q: "Qu'est-ce qui est inclus dans chaque projet ?",
    a: "Chaque projet comprend le design, le développement, l'optimisation SEO, la rédaction des contenus, l'hébergement, le nom de domaine et la conformité légale.",
  },
  {
    q: "Comment fonctionne le devis ?",
    a: "Chaque projet est unique. Après notre premier échange, nous vous proposons un devis clair, détaillé et compétitif, adapté à vos besoins réels.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-10 md:py-20 px-4 overflow-hidden" style={{ background: "#FFFFFF" }}>

      {/* ── Décos géométriques ── */}
      {/* Trait vertical droit */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "10%", bottom: "10%", right: 24, width: 1,
        background: "linear-gradient(180deg, transparent, rgba(0,122,255,0.12), transparent)",
      }} />
      {/* Carré outline bas-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        bottom: 50, right: 60, width: 80, height: 80,
        border: "1.5px solid rgba(0,122,255,0.1)", borderRadius: 14,
        transform: "rotate(18deg)",
      }} />
      {/* Grand cercle outline gauche */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "50%", left: -120, marginTop: -180,
        width: 360, height: 360,
        border: "1.5px solid rgba(0,122,255,0.06)", borderRadius: "50%",
      }} />
      {/* Petit carré haut-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        top: 40, right: 80, width: 36, height: 36,
        background: "rgba(0,122,255,0.05)", border: "1px solid rgba(0,122,255,0.15)",
        borderRadius: 8, transform: "rotate(-14deg)",
      }} />
      {/* Rectangle horizontal haut */}
      <div className="absolute pointer-events-none" style={{
        top: 0, left: "15%", right: "15%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,122,255,0.1), transparent)",
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* ── Colonne gauche : titre + questions ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-0 pr-0 lg:pr-10"
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
              FAQ
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#1D2939",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Les questions
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #007AFF, #0044CC)",
                }}
              >
                qu&apos;on nous pose souvent.
              </span>
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: openIndex === i ? "rgba(0,122,255,0.04)" : "#F0F9FF",
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
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: openIndex === i ? "#007AFF" : "#1D2939",
                      }}
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
                      <Plus
                        className="w-5 h-5"
                        style={{ color: openIndex === i ? "#007AFF" : "#475467" }}
                      />
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
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "#475467",
                            borderColor: "rgba(0,122,255,0.1)",
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Trait vertical séparateur (desktop) ── */}
          <div
            className="hidden lg:block flex-shrink-0"
            style={{ width: 1, background: "linear-gradient(180deg, transparent, rgba(0,122,255,0.2) 20%, rgba(0,122,255,0.2) 80%, transparent)" }}
          />

          {/* ── Trait horizontal séparateur (mobile) ── */}
          <div
            className="block lg:hidden my-10"
            style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,122,255,0.2) 20%, rgba(0,122,255,0.2) 80%, transparent)" }}
          />

          {/* ── Colonne droite : illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center pl-0 lg:pl-10"
            style={{ width: "100%", maxWidth: 340 }}
          >
            <img
              src="/images/illustrations/undraw_questions_52ic.svg"
              alt="Questions fréquentes"
              style={{ width: "100%", maxWidth: 300, height: "auto", display: "block" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
