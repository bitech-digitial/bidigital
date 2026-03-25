"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import CalButton from "@/components/ui/CalButton";

const siteBullets = [
  "Design UX/UI professionnel sur-mesure",
  "SEO & copywriting optimisés inclus",
  "Mise en conformité légale complète (RGPD, CGU, cookies)",
  "Hébergement + nom de domaine inclus",
];

const maintenanceBullets = [
  "Mises à jour légales & sécurité incluses",
  "SEO continu + positions Google surveillées",
  "Copywriting optimisé régulièrement",
  "Modifications sous 48h garanties",
  "Sans engagement — résiliable à tout moment",
];

export default function Offer() {
  return (
    <section id="offre" className="py-20 px-4" style={{ background: "#06071a" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Notre offre
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
            Tout inclus,
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              aucune surprise.
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
          >
            Tarif transparent — devis précis sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1 — Site */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Top bar */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #6366f1, #818cf8)" }}
            />
            <div className="p-7">
              <div className="mb-5">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    color: "#818cf8",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Site vitrine
                </span>
                <p
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#f0f0ff" }}
                >
                  Site vitrine
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                  >
                    à partir de
                  </span>
                  <span
                    className="font-extrabold text-2xl"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#818cf8",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    690 €
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                  >
                    TTC
                  </span>
                </div>
                <p
                  className="text-xs mt-1"
                  style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                >
                  Devis précis gratuit sous 24h
                </p>
              </div>

              <div
                className="border-t mb-5"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              />

              <ul className="flex flex-col gap-3 mb-6">
                {siteBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(74,222,128,0.1)",
                        border: "1px solid rgba(74,222,128,0.25)",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#4ade80" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <CalButton className="w-full" style={{ fontSize: 14, padding: "11px 18px" }}>
                  Prendre rendez-vous
                </CalButton>
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 font-semibold rounded-xl transition-all duration-200 text-sm"
                  style={{
                    background: "rgba(37,211,102,0.1)",
                    border: "1px solid rgba(37,211,102,0.25)",
                    color: "#4ade80",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <WhatsAppIcon size={15} />
                  Nous écrire sur WhatsApp
                </motion.a>
              </div>
              <p
                className="text-xs text-center mt-3"
                style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
              >
                Sans engagement · Devis gratuit sous 24h
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: "rgba(139,92,246,0.06)",
              border: "1px solid rgba(139,92,246,0.25)",
              boxShadow:
                "0 0 40px rgba(139,92,246,0.12), 0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Top bar */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #8b5cf6, #c084fc)" }}
            />
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(139,92,246,0.08) 0%, transparent 60%)",
              }}
            />
            <div className="relative p-7">
              <div className="mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.4)",
                    color: "#c084fc",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Abonnement · sans engagement
                </span>
                <p
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#f0f0ff" }}
                >
                  Maintenance & Évolution
                </p>
                <p
                  className="font-extrabold mt-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#c084fc",
                    letterSpacing: "-0.02em",
                    fontSize: "1.5rem",
                  }}
                >
                  19,99 €<span style={{ fontSize: "1rem", fontWeight: 500, color: "#71717a" }}>/mois</span>
                </p>
              </div>

              <div
                className="border-t mb-5"
                style={{ borderColor: "rgba(139,92,246,0.15)" }}
              />

              <ul className="flex flex-col gap-3 mb-6">
                {maintenanceBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(192,132,252,0.12)",
                        border: "1px solid rgba(192,132,252,0.3)",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#c084fc" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <CalButton className="w-full text-sm">
                Démarrer l&apos;abonnement
              </CalButton>
              <p
                className="text-xs text-center mt-3"
                style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
              >
                Résiliable à tout moment · Sans engagement
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
