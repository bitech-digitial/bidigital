"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Est-ce que 597€ c'est vraiment tout compris ?",
    a: "Oui, design, développement, hébergement et un mois de retouches inclus. Seul coût additionnel : nom de domaine ~15€/an, que tu achètes toi-même. On t'explique comment faire.",
  },
  {
    q: "Je ne connais rien au web. Est-ce que c'est compliqué ?",
    a: "Non. Tu réponds à un formulaire simple (10 minutes max), on gère tout le reste. Tu n'as rien à installer, rien à apprendre. Tu valides, on livre.",
  },
  {
    q: "Et si je n'ai pas de textes ni de photos ?",
    a: "On intègre des images libres de droits adaptées à ton secteur. Pour les textes, contacte-nous avant de démarrer — on voit ensemble ce qu'on peut faire.",
  },
  {
    q: "Que se passe-t-il si le résultat ne me convient pas ?",
    a: "On retravaille jusqu'à satisfaction complète. 1 mois de retouches est inclus dans le prix. Si vraiment ça ne convient pas, on rembourse. Satisfait ou remboursé, c'est notre engagement.",
  },
  {
    q: "Quelle différence avec Wix ou un constructeur de site ?",
    a: "Site sur-mesure, conçu pour convertir, optimisé SEO, sans passer des heures à apprendre un outil. Et ça se voit : ton site ressemblera à un site pro, pas à un template générique.",
  },
  {
    q: "Vous travaillez partout en France et en pays francophones ?",
    a: "Oui, 100% à distance. On travaille avec des clients en France, Belgique, Suisse et Canada. Tu n'as pas besoin d'être dans la même ville que nous.",
  },
  {
    q: "Et après la livraison, vous disparaissez ?",
    a: "Non. 1 mois de retouches inclus après livraison. Si tu as besoin d'un suivi mensuel (mises à jour, nouvelles pages, maintenance), on propose un accompagnement adapté.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-[#ffffff]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            qu'on nous pose souvent.
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
                className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-6 text-left hover:bg-[#f8fafc] transition-colors"
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
                    openIndex === i
                      ? "border-[#2563eb] bg-[#eff6ff]"
                      : "border-[#e2e8f0]"
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
                      className="px-6 pb-6 text-[#475569] text-sm leading-relaxed border-t border-[#e2e8f0] pt-4 bg-[#f8fafc] font-light"
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
