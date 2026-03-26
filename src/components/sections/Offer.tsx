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
    <section id="offre" className="py-20 px-4" style={{ background: "#F0F9FF" }}>
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
              background: "rgba(0,119,182,0.08)",
              border: "1px solid rgba(0,119,182,0.2)",
              color: "#0077B6",
              fontFamily: "var(--font-body)",
            }}
          >
            Notre offre
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#03045E",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Tout inclus,
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #0077B6, #023E8A)",
              }}
            >
              aucune surprise.
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
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
              background: "#FFFFFF",
              border: "1px solid #e1eaf5",
              boxShadow: "0 8px 32px rgba(0,119,182,0.07)",
            }}
          >
            {/* Top bar */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #0077B6, #023E8A)" }}
            />
            <div className="p-7">
              <div className="mb-5">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: "rgba(0,119,182,0.08)",
                    border: "1px solid rgba(0,119,182,0.2)",
                    color: "#0077B6",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Site web
                </span>
                <p
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#03045E" }}
                >
                  Site web
                </p>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
                  >
                    à partir de
                  </span>
                  <span
                    className="font-extrabold text-2xl"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#0077B6",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    690 €
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
                  >
                    TTC
                  </span>
                </div>
                <p
                  className="text-xs mt-1"
                  style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
                >
                  Devis précis gratuit sous 24h
                </p>
              </div>

              <div
                className="border-t mb-5"
                style={{ borderColor: "#e1eaf5" }}
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
                    <span style={{ fontFamily: "var(--font-body)", color: "#1a2a4a" }}>
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
                    background: "rgba(37,211,102,0.08)",
                    border: "1px solid rgba(37,211,102,0.2)",
                    color: "#16a34a",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <WhatsAppIcon size={15} />
                  Nous écrire sur WhatsApp
                </motion.a>
              </div>
              <p
                className="text-xs text-center mt-3"
                style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
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
              background: "rgba(0,119,182,0.05)",
              border: "1px solid rgba(0,119,182,0.25)",
              boxShadow:
                "0 0 40px rgba(0,119,182,0.1), 0 8px 32px rgba(0,119,182,0.06)",
            }}
          >
            {/* Top bar */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #0077B6, #023E8A)" }}
            />
            {/* Inner glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(0,119,182,0.06) 0%, transparent 60%)",
              }}
            />
            <div className="relative p-7">
              <div className="mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: "rgba(0,119,182,0.1)",
                    border: "1px solid rgba(0,119,182,0.3)",
                    color: "#0077B6",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Abonnement · sans engagement
                </span>
                <p
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "#03045E" }}
                >
                  Maintenance & Évolution
                </p>
                <p
                  className="font-extrabold mt-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#0077B6",
                    letterSpacing: "-0.02em",
                    fontSize: "1.5rem",
                  }}
                >
                  19,99 €<span style={{ fontSize: "1rem", fontWeight: 500, color: "#4a6080" }}>/mois</span>
                </p>
              </div>

              <div
                className="border-t mb-5"
                style={{ borderColor: "rgba(0,119,182,0.12)" }}
              />

              <ul className="flex flex-col gap-3 mb-6">
                {maintenanceBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(0,119,182,0.1)",
                        border: "1px solid rgba(0,119,182,0.25)",
                      }}
                    >
                      <Check className="w-3 h-3" style={{ color: "#0077B6" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", color: "#1a2a4a" }}>
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
                style={{ fontFamily: "var(--font-body)", color: "#4a6080" }}
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
