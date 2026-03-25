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
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px)";
        el.style.borderColor = "rgba(99,102,241,0.3)";
        el.style.boxShadow = "0 8px 40px rgba(99,102,241,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
      }}
    >
      {/* Browser bar — traffic lights only, no URL */}
      <div
        style={{
          background: "#141420",
          height: 32,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
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
    <section id="exemples" className="py-24 overflow-hidden" style={{ background: "#06070e" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            RÉALISATIONS
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
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
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
              color: "#94a3b8",
              fontSize: "1.1rem",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Chaque métier a ses codes. Nous les connaissons. Nous les appliquons.
          </p>
        </motion.div>

        {/* Desktop grid 3×2 */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {realisations.map((r) => (
            <BrowserCard key={r.sector} realisation={r} />
          ))}
        </div>

        {/* Mobile — carrousel CSS infini */}
        <div className="block lg:hidden w-full">
          <div className="cards-container">
            <div className="cards-track">
              {realisations.map((r, i) => (
                <div key={`a-${i}`} className="mx-2.5 shrink-0" style={{ width: "min(76vw, 300px)" }}>
                  <BrowserCard realisation={r} />
                </div>
              ))}
              {realisations.map((r, i) => (
                <div key={`b-${i}`} aria-hidden className="mx-2.5 shrink-0" style={{ width: "min(76vw, 300px)" }}>
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
