"use client";

import { useEffect, useState } from "react";
import { CAL_FULL_URL } from "@/lib/constants";

const SHOW_AFTER_PERCENT = 25;
const HIDE_NEAR_FOOTER   = 92;
const HIDE_AT_TOP        = 8;

export default function MobileStickyCTA() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (dismissed) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;

      setVisible(
        pct > SHOW_AFTER_PERCENT &&
        pct < HIDE_NEAR_FOOTER   &&
        pct > HIDE_AT_TOP
      );
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [dismissed]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{
        transform: visible && !dismissed ? "translateY(0)" : "translateY(100%)",
        opacity: visible && !dismissed ? 1 : 0,
        pointerEvents: visible && !dismissed ? "auto" : "none",
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
      }}
      aria-hidden={!visible}
    >
      {/* Dégradé de fond */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: 120,
          background: "linear-gradient(to top, #08090f 0%, rgba(8,9,15,0.8) 60%, transparent 100%)",
        }}
      />

      {/* Barre CTA */}
      <div
        className="relative mx-3 mb-4 overflow-hidden"
        style={{
          background: "rgba(13,13,31,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(99,102,241,0.2)",
          borderRadius: 18,
          boxShadow: "0 -4px 30px rgba(99,102,241,0.15), 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        {/* Glow ligne supérieure */}
        <div
          className="absolute top-0 pointer-events-none"
          style={{
            left: "25%",
            right: "25%",
            height: 1,
            background: "linear-gradient(to right, transparent, rgba(99,102,241,0.6), transparent)",
          }}
        />

        <div className="flex items-center gap-3 px-4 py-3.5">
          {/* Indicateur pulsant */}
          <div className="relative shrink-0">
            <div
              className="w-2.5 h-2.5 rounded-full bg-indigo-400"
              style={{ animation: "ctaPulse 2s ease-in-out infinite" }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "rgba(99,102,241,0.3)",
                animation: "ctaRing 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Texte */}
          <div className="flex-1 min-w-0">
            <p
              className="font-semibold text-sm leading-tight truncate"
              style={{ color: "#f8fafc", fontFamily: "var(--font-heading)" }}
            >
              Parlons de votre projet
            </p>
            <p
              className="text-xs leading-tight mt-0.5"
              style={{ color: "rgba(129,140,248,0.7)", fontFamily: "var(--font-body)" }}
            >
              Réponse sous 2h · Sans engagement
            </p>
          </div>

          {/* Bouton RDV */}
          <a
            href={CAL_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap font-bold text-sm"
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 12,
              boxShadow: "0 4px 15px rgba(99,102,241,0.4)",
              fontFamily: "var(--font-body)",
              transition: "transform 0.1s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Prendre RDV
          </a>

          {/* Bouton fermer */}
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 ml-1 p-1 rounded-lg focus:outline-none"
            style={{ color: "#475569", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            aria-label="Fermer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
