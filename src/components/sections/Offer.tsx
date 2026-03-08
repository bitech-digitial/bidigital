"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

const bullets = [
  "Design UX/UI professionnel sur-mesure",
  "SEO & copywriting optimisés inclus",
  "Hébergement + nom de domaine inclus",
  "Modifications pendant 1 an sous 48h",
];

export default function Offer() {
  return (
    <section id="offre" className="py-20 px-4 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
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
            Notre offre
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tout inclus,
            <br />
            aucune surprise.
          </h2>
          <p
            className="text-[#475569] text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sur devis personnalisé — tarif compétitif et transparent, établi
            selon vos besoins.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-lg mx-auto"
        >
          <div
            className="relative bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.08), 0 8px 32px rgba(37,99,235,0.06)",
            }}
          >
            {/* Gradient top bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background: "linear-gradient(90deg, #2563eb, #60a5fa)",
              }}
            />

            <div className="p-8 md:p-10">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <span
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe] text-sm font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span className="text-shimmer">
                    Sites vitrines livrés en 72h
                  </span>
                </span>
              </div>

              {/* Heading */}
              <div className="text-center mb-8">
                <p
                  className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Votre projet, votre devis.
                </p>
                <p
                  className="text-[#475569] text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Un tarif adapté à vos besoins, établi avec transparence.
                </p>
              </div>

              <div className="border-t border-[#e2e8f0] mb-8" />

              {/* Bullets */}
              <div className="flex flex-col gap-4 mb-8">
                {bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#f0fdf4] border border-[#16a34a]/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#16a34a]" />
                    </div>
                    <span
                      className="text-[#0f172a] text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <CalButton className="w-full text-sm">
                  Prendre rendez-vous
                </CalButton>
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-white font-semibold rounded-xl transition-all duration-200 hover:opacity-90 text-sm"
                  style={{
                    backgroundColor: "#25d366",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <WhatsAppIcon size={16} />
                  Nous écrire sur WhatsApp
                </motion.a>
              </div>

              <p
                className="text-xs text-[#94a3b8] text-center mt-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Sans engagement · Devis gratuit sous 24h
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
