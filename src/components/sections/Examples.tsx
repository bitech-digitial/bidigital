"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const realisations = [
  { image: "/images/realisations/site-2.webp", sector: "Immobilier · Diagnostic" },
  { image: "/images/realisations/site-3.webp", sector: "Artisan · Bâtiment" },
  { image: "/images/realisations/site-4.webp", sector: "Bien-être · Coaching" },
  { image: "/images/realisations/site-5.webp", sector: "Décoration · Design" },
  { image: "/images/realisations/site-6.webp", sector: "Artisan · Climatisation" },
  { image: "/images/realisations/site-1.webp", sector: "Agence · Marketing Digital" },
];

function BrowserCard({ realisation }: { realisation: (typeof realisations)[0] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 group"
      style={{
        background: "#F0F9FF",
        border: "1px solid #e1eaf5",
        boxShadow: "0 4px 24px rgba(0,122,255,0.07)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = "rgba(0,122,255,0.3)";
        el.style.boxShadow = "0 8px 40px rgba(0,122,255,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "#e1eaf5";
        el.style.boxShadow = "0 4px 24px rgba(0,122,255,0.07)";
      }}
    >
      {/* Browser bar */}
      <div
        style={{
          background: "#F0F9FF",
          height: 32,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          borderBottom: "1px solid #e1eaf5",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e", display: "block" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840", display: "block" }} />
        </div>
      </div>

      {/* Screenshot */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <Image
          src={realisation.image}
          alt={`Réalisation BiDigital — ${realisation.sector}`}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          className="group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

export default function Examples() {
  return (
    <section id="exemples" className="relative py-12 md:py-24 overflow-hidden" style={{ background: "#F0F9FF" }}>

      {/* ── Décos géométriques ── */}
      {/* Trait vertical gauche */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "15%", bottom: "15%", left: 24, width: 1,
        background: "linear-gradient(180deg, transparent, rgba(0,122,255,0.1), transparent)",
      }} />
      {/* Carré outline haut-gauche */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: 50, left: 50, width: 70, height: 70,
        border: "1.5px solid rgba(0,122,255,0.12)", borderRadius: 12,
        transform: "rotate(12deg)",
      }} />
      {/* Grand cercle droite */}
      <div className="absolute pointer-events-none hidden lg:block" style={{
        top: "50%", right: -120, marginTop: -200,
        width: 400, height: 400,
        border: "1.5px solid rgba(0,122,255,0.06)", borderRadius: "50%",
      }} />
      {/* Petit rectangle bas-droite */}
      <div className="absolute pointer-events-none hidden md:block" style={{
        bottom: 40, right: 70, width: 90, height: 45,
        border: "1px solid rgba(0,122,255,0.1)", borderRadius: 8,
        transform: "rotate(-10deg)",
      }} />
      {/* Trait horizontal bas */}
      <div className="absolute pointer-events-none" style={{
        bottom: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(0,122,255,0.1), transparent)",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest mb-5"
            style={{
              background: "rgba(0,122,255,0.08)",
              border: "1px solid rgba(0,122,255,0.2)",
              color: "#007AFF",
              fontFamily: "var(--font-body)",
            }}
          >
            Nos références
          </span>
          <h2
            className="font-extrabold text-gradient mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Des sites qui convertissent,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #007AFF, #0044CC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pour chaque secteur.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#475467",
              fontSize: "1.1rem",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Un aperçu de nos réalisations, déclinées selon les univers de nos clients.
          </p>
        </motion.div>

        {/* Carrousel infini — desktop + mobile */}
        <div className="w-full">
          <div className="cards-container">
            <div className="cards-track">
              {realisations.map((r, i) => (
                <div
                  key={`a-${i}`}
                  className="mx-3 shrink-0"
                  style={{ width: "min(76vw, 420px)" }}
                >
                  <BrowserCard realisation={r} />
                </div>
              ))}
              {realisations.map((r, i) => (
                <div
                  key={`b-${i}`}
                  aria-hidden
                  className="mx-3 shrink-0"
                  style={{ width: "min(76vw, 420px)" }}
                >
                  <BrowserCard realisation={r} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
