"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "ML",
    name: "Marie L.",
    city: "Versailles",
    sector: "Thérapeute",
    color: "#818cf8",
    rating: 5,
    quote:
      "En 72h, j'avais un site professionnel, conforme RGPD, et déjà positionné sur Google. Mes prises de RDV ont augmenté de 40% en deux mois. Je recommande sans hésiter.",
  },
  {
    initials: "TC",
    name: "Thomas C.",
    city: "Chaville",
    sector: "Plombier",
    color: "#38bdf8",
    rating: 5,
    quote:
      "Avant, j'avais aucune présence en ligne. Maintenant j'apparais en première page sur Google pour ma ville. Les appels ont triplé. L'équipe est réactive et pro.",
  },
  {
    initials: "SA",
    name: "Sophie A.",
    city: "Boulogne-Billancourt",
    sector: "Photographe",
    color: "#c084fc",
    rating: 5,
    quote:
      "Un portfolio élégant, rapide et conforme. Bilel a su capter mon univers créatif et le traduire en un site qui me ressemble vraiment. Impeccable du début à la fin.",
  },
  {
    initials: "RB",
    name: "Romain B.",
    city: "Sèvres",
    sector: "Coach sportif",
    color: "#4ade80",
    rating: 5,
    quote:
      "Prix clair, délai respecté, zéro surprise. Exactement ce qu'on cherche quand on est indépendant. Le SEO a été travaillé et ça se ressent sur le trafic mensuel.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]" />
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
      style={{
        background: `${color}22`,
        border: `2px solid ${color}55`,
        color,
        fontFamily: "var(--font-heading)",
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "#06071a" }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 400,
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              color: "#818cf8",
              fontFamily: "var(--font-body)",
            }}
          >
            Témoignages
          </span>
          <h2
            className="font-extrabold text-3xl lg:text-4xl mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
            }}
          >
            Ce que disent{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              nos clients
            </span>
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
          >
            Des vrais professionnels, de vraies transformations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-4 relative"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote className="w-8 h-8" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-body)", color: "#a1a1aa" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <Avatar initials={t.initials} color={t.color} />
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ fontFamily: "var(--font-heading)", color: "#e0e0ff" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                  >
                    {t.sector} · {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs mt-8"
          style={{ fontFamily: "var(--font-body)", color: "#3f3f46" }}
        >
          ★ Bientôt vérifiés sur Google Business · Avis collectés directement auprès de nos clients
        </motion.p>
      </div>
    </section>
  );
}
