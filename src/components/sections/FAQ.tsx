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

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-0">

          {/* ── Colonne gauche : titre + questions ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-0 pr-0 lg:pr-10"
          >
            <span
              className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-4"
              style={{
                background: "#e2f7ff",
                color: "#0055FF",
                fontFamily: "var(--font-badge)",
              }}
            >
              FAQ
            </span>
            <h2
              className="font-bold mb-8"
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
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: openIndex === i ? "#0055FF" : "#191e4f",
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
                        style={{ color: openIndex === i ? "#0055FF" : "#474667" }}
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
                            color: "#474667",
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center pl-0 lg:pl-10"
            style={{ width: "100%", maxWidth: 340 }}
          >
            <img
              src="/images/illustrations/undraw_questions_52ic.svg"
              alt="Questions fréquentes"
              width={300}
              height={240}
              style={{ width: "100%", maxWidth: 300, height: "auto", display: "block" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
