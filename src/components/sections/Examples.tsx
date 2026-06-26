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

function BrowserCard({ realisation, lazy = false }: { realisation: (typeof realisations)[0]; lazy?: boolean }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 group"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(25,30,79,0.08)",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = "none";
      }}
    >
      {/* Browser bar */}
      <div
        style={{
          background: "#f8faff",
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
          loading={lazy ? "lazy" : "eager"}
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
    <section id="exemples" className="relative py-12 md:py-24 overflow-hidden" style={{ background: "#ffffff" }}>

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
            className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-5"
            style={{
              background: "#e2f7ff",
              color: "#0055FF",
              fontFamily: "var(--font-badge)",
            }}
          >
            Nos références
          </span>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 43px)",
              color: "#191e4f",
              lineHeight: 1.25,
            }}
          >
            Des sites qui convertissent,{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                pour chaque secteur.
              </span>
              <span style={{
                display: "block", height: 3,
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                borderRadius: 2,
                position: "absolute", bottom: -2, left: 0, right: 0,
              }} />
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#474667",
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
                  <BrowserCard realisation={r} lazy />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
