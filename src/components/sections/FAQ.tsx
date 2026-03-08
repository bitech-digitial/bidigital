"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Comment se déroule un projet avec BiDigital ?",
    a: "Tout commence par un échange de 15 minutes pour comprendre vos besoins. Nous établissons ensuite un devis personnalisé et transparent. Une fois validé, nous démarrons la conception. Vous êtes informé à chaque étape, et votre site est livré selon le délai convenu — 72h pour un site vitrine.",
  },
  {
    q: "Qu'est-ce qui est inclus dans chaque projet ?",
    a: "Chaque projet inclut le design UX/UI sur-mesure, le développement complet, l'optimisation SEO, le copywriting, l'hébergement, le nom de domaine, la création de logo, un flyer, une carte de visite, et un an de modifications effectuées sous 48h. Aucun frais caché.",
  },
  {
    q: "Comment fonctionne le devis ?",
    a: "Chaque projet est unique. Après notre premier échange, nous vous proposons un devis clair, détaillé et compétitif, adapté à vos besoins réels. Pas de forfait générique — une proposition pensée pour vous.",
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: "Nous restons présents. Toute modification est traitée sous 48h pendant un an, inclus dans votre projet. Vous bénéficiez d'un interlocuteur dédié, disponible et réactif. Nous construisons une relation sur le long terme.",
  },
  {
    q: "Pourquoi choisir BiDigital plutôt qu'une autre agence ?",
    a: "Parce que nous combinons la réactivité d'une startup, l'exigence d'une agence premium et la bienveillance d'un partenaire engagé. Votre réussite est notre priorité — pas seulement la livraison.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 px-4 bg-[#ffffff]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-sm font-medium mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Les questions
            <br />
            qu&apos;on nous pose souvent.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-5 text-left hover:bg-[#f8fafc] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span
                  className="text-[#0f172a] font-semibold text-sm md:text-base leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                    openIndex === i ? "border-[#2563eb] bg-[#eff6ff]" : "border-[#e2e8f0]"
                  }`}
                >
                  <Plus
                    className={`w-4 h-4 transition-colors ${
                      openIndex === i ? "text-[#2563eb]" : "text-[#64748b]"
                    }`}
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
                      className="px-6 pb-5 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4 bg-[#f8fafc] font-light"
                      style={{ fontFamily: "var(--font-body)" }}
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
