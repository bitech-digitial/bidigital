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
    q: "Que comprend l'abonnement à 19,99 €/mois ?",
    a: "L'hébergement, le nom de domaine (ou le vôtre), les mises à jour légales et de sécurité, la surveillance SEO, le copywriting optimisé, et toutes vos modifications sous 48h. Sans engagement, résiliable à tout moment.",
  },
  {
    q: "Puis-je garder mon nom de domaine existant ?",
    a: "Absolument. Nous pouvons utiliser votre domaine actuel.",
  },
  {
    q: "Comment se déroule un projet avec BiDigital ?",
    a: "Tout commence par un échange de 15 minutes pour comprendre vos besoins. Nous établissons ensuite un devis personnalisé et transparent. Une fois validé, nous démarrons la conception. Vous êtes informé à chaque étape.",
  },
  {
    q: "Qu'est-ce qui est inclus dans chaque projet ?",
    a: "Chaque projet inclut le design UX/UI sur-mesure, le développement complet, l'optimisation SEO, le copywriting, l'hébergement, le nom de domaine, la création de logo, un flyer, une carte de visite, et la mise en conformité légale complète. Aucun frais caché.",
  },
  {
    q: "Comment fonctionne le devis ?",
    a: "Chaque projet est unique. Après notre premier échange, nous vous proposons un devis clair, détaillé et compétitif, adapté à vos besoins réels. Pas de forfait générique — une proposition pensée pour vous.",
  },
  {
    q: "Pourquoi choisir BiDigital plutôt qu'une autre agence ?",
    a: "Parce que nous combinons la réactivité d'une startup, l'exigence d'une agence premium et la bienveillance d'un partenaire engagé. Chaque site est conforme, optimisé et maintenu. Votre réussite est notre priorité.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4" style={{ background: "#050814" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Les questions
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              qu&apos;on nous pose souvent.
            </span>
          </h2>
        </motion.div>

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
                background: openIndex === i
                  ? "rgba(99,102,241,0.06)"
                  : "rgba(255,255,255,0.02)",
                border: openIndex === i
                  ? "1px solid rgba(99,102,241,0.2)"
                  : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-semibold text-sm md:text-base leading-snug"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: openIndex === i ? "#a5b4fc" : "#e0e0ff",
                  }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: openIndex === i
                      ? "rgba(99,102,241,0.4)"
                      : "rgba(255,255,255,0.1)",
                    background: openIndex === i
                      ? "rgba(99,102,241,0.12)"
                      : "transparent",
                  }}
                >
                  <Plus
                    className="w-4 h-4"
                    style={{
                      color: openIndex === i ? "#818cf8" : "#52525b",
                    }}
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
                      className="px-5 pb-5 text-sm leading-relaxed border-t pt-4"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "#a1a1aa",
                        borderColor: "rgba(99,102,241,0.12)",
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
      </div>
    </section>
  );
}
