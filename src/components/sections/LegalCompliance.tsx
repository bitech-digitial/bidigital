"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Cookie, AlertTriangle } from "lucide-react";
import CalButton from "@/components/ui/CalButton";

const checkpoints = [
  {
    icon: ShieldCheck,
    title: "RGPD & Politique de confidentialité",
    description: "Rédigée et intégrée selon votre activité. Conforme dès le jour 1.",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
  },
  {
    icon: FileText,
    title: "Mentions légales conformes",
    description: "À jour selon votre statut juridique et votre secteur d'activité.",
    color: "#818cf8",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
  },
  {
    icon: Cookie,
    title: "Gestion des cookies — bandeau CNIL",
    description: "Bandeau de consentement conforme aux directives CNIL, intégré et fonctionnel.",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
  },
];

export default function LegalCompliance() {
  return (
    <section
      id="conformite"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: "#06071a" }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 400,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.3)",
              color: "#f87171",
              fontFamily: "var(--font-body)",
            }}
          >
            Conformité légale
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Votre site est-il en règle ?{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #f87171, #fb923c)",
              }}
            >
              Évitez jusqu&apos;à 75 000 € d&apos;amende.
            </span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              color: "#a1a1aa",
              lineHeight: 1.7,
            }}
          >
            En France, la loi impose des obligations précises à tout site web (RGPD, mentions légales, cookies, accessibilité).
            La plupart des PME et indépendants ne sont pas conformes — et s&apos;exposent à des sanctions lourdes.
            Chez BiDigital,{" "}
            <span style={{ color: "#f0f0ff", fontWeight: 500 }}>
              chaque site livré est 100% conforme dès le premier jour.
            </span>
          </p>
        </motion.div>

        {/* 3 checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {checkpoints.map((cp, i) => {
            const Icon = cp.icon;
            return (
              <motion.div
                key={cp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{
                  background: cp.bg,
                  border: `1px solid ${cp.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: cp.bg, border: `1px solid ${cp.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: cp.color }} />
                </div>
                <h4
                  className="font-semibold text-sm mb-1.5"
                  style={{ fontFamily: "var(--font-heading)", color: "#f0f0ff" }}
                >
                  {cp.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
                >
                  {cp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Alert badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl p-5 sm:p-6"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.25)",
          }}
        >
          <div className="flex items-start gap-3 text-left">
            <AlertTriangle
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              style={{ color: "#f87171" }}
            />
            <div>
              <p
                className="font-semibold text-sm sm:text-base mb-1"
                style={{ fontFamily: "var(--font-heading)", color: "#fca5a5" }}
              >
                75 000 € d&apos;amende maximum pour non-conformité RGPD
              </p>
              <p
                className="text-xs sm:text-sm"
                style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
              >
                La CNIL sanctionne activement les entreprises non conformes. Ne prenez pas ce risque.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <CalButton className="text-sm px-5 py-3 whitespace-nowrap">
              Mettre mon site en conformité
            </CalButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
