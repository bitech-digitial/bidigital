"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// ─── Paramètres ───────────────────────────────────
const CARD_W = 340;
const GAP    = 20;
const SPEED  = 0.35;
const LERP   = 0.07;
// ──────────────────────────────────────────────────

const realisations1 = [
  { image: "/images/realisations/site-2.webp", sector: "Immobilier · Diagnostic" },
  { image: "/images/realisations/site-3.webp", sector: "Artisan · Bâtiment" },
  { image: "/images/realisations/site-4.webp", sector: "Bien-être · Coaching" },
  { image: "/images/realisations/site-5.webp", sector: "Décoration · Design" },
  { image: "/images/realisations/site-6.webp", sector: "Artisan · Climatisation" },
  { image: "/images/realisations/site-1.webp", sector: "Agence · Marketing Digital" },
];

const realisations2 = [
  { image: "/images/realisations/site-7.webp",  sector: "Restaurant · Gastronomie" },
  { image: "/images/realisations/site-8.webp",  sector: "Beauté · Institut" },
  { image: "/images/realisations/site-9.webp",  sector: "Taxi · VTC" },
  { image: "/images/realisations/site-10.webp", sector: "E-commerce · Mode" },
  { image: "/images/realisations/site-11.webp", sector: "Hébergement · Gîte" },
  { image: "/images/realisations/site-12.webp", sector: "Automobile · Garage" },
  { image: "/images/realisations/site-13.webp", sector: "Services · Consulting" },
];

const TRACK1 = realisations1.length * (CARD_W + GAP);
const TRACK2 = realisations2.length * (CARD_W + GAP);

function BrowserCard({ realisation, lazy = false }: { realisation: (typeof realisations1)[0]; lazy?: boolean }) {
  return (
    <div
      style={{
        width: CARD_W,
        flexShrink: 0,
        borderRadius: 16,
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid rgba(25,30,79,0.08)",
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
        <div style={{
          flex: 1, marginLeft: 10, height: 16, borderRadius: 4,
          background: "rgba(25,30,79,0.06)",
        }} />
      </div>

      {/* Screenshot */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <Image
          src={realisation.image}
          alt={`Réalisation BiDigital — ${realisation.sector}`}
          fill
          loading={lazy ? "lazy" : "eager"}
          sizes="340px"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

    </div>
  );
}

function ScrollMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x1 = 0;
    let x2 = -2 * TRACK2;
    let rafId: number;
    let running = false;

    const tick = () => {
      const y = window.scrollY;
      x1 += (-y * SPEED - x1) * LERP;
      x2 += (-2 * TRACK2 + y * SPEED - x2) * LERP;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${x1 % TRACK1}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${x2 % TRACK2}px)`;
      if (running) rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) rafId = requestAnimationFrame(tick);
        else cancelAnimationFrame(rafId);
      },
      { threshold: 0, rootMargin: "100px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const set1 = [...realisations1, ...realisations1, ...realisations1];
  const set2 = [...realisations2, ...realisations2, ...realisations2];

  return (
    <div ref={containerRef} className="space-y-5">
      {/* Rangée 1 — glisse à gauche */}
      <div style={{ overflow: "hidden" }}>
        <div
          ref={row1Ref}
          style={{ display: "flex", gap: GAP, width: "max-content", willChange: "transform" }}
        >
          {set1.map((r, i) => (
            <BrowserCard key={i} realisation={r} lazy={i >= realisations1.length} />
          ))}
        </div>
      </div>

      {/* Rangée 2 — glisse à droite */}
      <div style={{ overflow: "hidden" }}>
        <div
          ref={row2Ref}
          style={{ display: "flex", gap: GAP, width: "max-content", willChange: "transform" }}
        >
          {set2.map((r, i) => (
            <BrowserCard key={i} realisation={r} lazy />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Examples() {
  return (
    <section id="exemples" className="relative py-6 md:py-10 overflow-hidden" style={{ background: "#ffffff" }}>
      <ScrollMarquee />
    </section>
  );
}
