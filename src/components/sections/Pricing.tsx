"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Camera, Gift, Rocket } from "lucide-react";

type PlanType = "vitrine" | "ecommerce";

const plansData = {
  vitrine: [
    {
      name: "Essentiel",
      tagline: "Lancez votre présence digitale",
      price: "490",
      oldPrice: "990",
      monthly: "49,90",
      popular: false,
      promo: true,
      cta: { label: "Demander ma maquette gratuite", href: "/maquette" },
      features: [
        "Site vitrine jusqu'à 5 pages",
        "Design responsive (mobile, tablette, desktop)",
        "SEO de base inclus dès la mise en ligne",
        "Conformité RGPD complète",
        "Hébergement + nom de domaine inclus",
        "Support par email",
        "Création & gestion de votre fiche Google My Business",
      ],
    },
    {
      name: "Booster",
      tagline: "Accélérez votre croissance",
      price: "1 250",
      oldPrice: null,
      monthly: "79,90",
      popular: true,
      promo: false,
      cta: { label: "Demander ma maquette gratuite", href: "/maquette" },
      features: [
        "Tout l'Essentiel inclus",
        "Jusqu'à 10 pages sur-mesure",
        "Formulaire avancé + prise de RDV en ligne",
        "SEO avancé + suivi mensuel des positions Google",
        "Blog / actualités pour booster votre référencement",
        "Copywriting professionnel de toutes vos pages",
        "Support prioritaire réactif sous 24h",
      ],
    },
    {
      name: "Sur mesure",
      tagline: "Votre projet a des besoins spécifiques",
      price: null,
      oldPrice: null,
      monthly: null,
      popular: false,
      promo: false,
      cta: { label: "Demander ma maquette gratuite", href: "/maquette" },
      features: [
        "Tout le Booster inclus",
        "E-commerce, réservation en ligne, espace client",
        "Fonctionnalités développées sur-mesure",
        "Intégrations API tierces (CRM, ERP, paiement…)",
        "Campagne Google Ads lancée et optimisée",
        "Chef de projet dédié tout au long du projet",
        "Devis gratuit et personnalisé sous 24h",
      ],
    },
  ],
  ecommerce: [
    {
      name: "Essentiel",
      tagline: "Votre boutique en ligne clé-en-main",
      price: "990",
      oldPrice: "1 490",
      monthly: "99,90",
      popular: false,
      promo: true,
      cta: { label: "Demander ma maquette gratuite", href: "/maquette" },
      features: [
        "Boutique jusqu'à 50 produits",
        "Paiement en ligne sécurisé (Stripe / PayPal)",
        "Design responsive mobile-first",
        "SEO e-commerce de base inclus",
        "Hébergement + nom de domaine inclus",
        "Création & gestion de votre fiche Google My Business",
      ],
    },
    {
      name: "Booster",
      tagline: "Vendez plus, gérez moins",
      price: "1 990",
      oldPrice: null,
      monthly: "169,90",
      popular: true,
      promo: false,
      cta: { label: "Demander ma maquette gratuite", href: "/maquette" },
      features: [
        "Tout l'Essentiel inclus",
        "Produits illimités + variantes",
        "Gestion des stocks, commandes et retours",
        "SEO avancé + suivi mensuel des positions Google",
        "Fiches produits optimisées SEO + copywriting",
        "Relances panier abandonné automatiques",
        "Intégration réseaux sociaux & pixel Meta",
        "Support prioritaire réactif sous 24h",
      ],
    },
    {
      name: "Sur mesure",
      tagline: "Un projet e-commerce complexe ?",
      price: null,
      oldPrice: null,
      monthly: null,
      popular: false,
      promo: false,
      cta: { label: "Demander ma maquette gratuite", href: "/maquette" },
      features: [
        "Tout le Booster inclus",
        "Marketplace, abonnements, configurateur produit",
        "Intégrations ERP / logistique / entrepôt",
        "Développements et fonctionnalités sur-mesure",
        "Campagne Google Shopping & Ads lancée",
        "Chef de projet dédié tout au long du projet",
        "Devis gratuit et personnalisé sous 24h",
      ],
    },
  ],
};

// needed for TS inference
const plans_vitrine = plansData.vitrine;

// ─── Toggle iOS ────────────────────────────────────────────────────────────────

function Toggle({ value, onChange }: { value: PlanType; onChange: (v: PlanType) => void }) {
  return (
    <div
      style={{
        display: "inline-flex",
        background: "rgba(25,30,79,0.06)",
        borderRadius: 50,
        padding: 4,
        gap: 0,
        position: "relative",
      }}
    >
      {(["vitrine", "ecommerce"] as PlanType[]).map((type) => {
        const active = value === type;
        return (
          <button
            key={type}
            onClick={() => onChange(type)}
            style={{
              position: "relative",
              zIndex: 1,
              padding: "9px 22px",
              borderRadius: 50,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
              color: active ? "#ffffff" : "#474667",
              transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {active && (
              <motion.div
                layoutId="toggle-pill"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 50,
                  background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                  zIndex: -1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {type === "vitrine" ? "Site vitrine" : "Site e-commerce"}
          </button>
        );
      })}
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [type, setType] = useState<PlanType>("vitrine");
  const plans = plansData[type];

  return (
    <section className="relative py-12 md:py-24 px-4 overflow-hidden" style={{ background: "#f8faff" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-5"
            style={{ background: "#ffffff", color: "#0055FF", fontFamily: "var(--font-badge)", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)" }}
          >
            Nos tarifs
          </span>
          <h2
            className="font-bold mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3vw, 43px)",
              color: "#191e4f",
              lineHeight: 1.25,
            }}
          >
            Des offres claires,{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span style={{
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                sans surprise.
              </span>
              <span style={{
                display: "block", height: 3,
                background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                borderRadius: 2,
                position: "absolute", bottom: -2, left: 0, right: 0,
              }} />
            </span>
          </h2>

          {/* Toggle */}
          <Toggle value={type} onChange={setType} />
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                {/* Badge populaire au-dessus */}
                {plan.popular ? (
                  <div className="flex justify-center" style={{ marginBottom: -16, position: "relative", zIndex: 10 }}>
                    <span style={{
                      background: "#191e4f", color: "#ffffff",
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                      padding: "5px 18px", borderRadius: 9999,
                      fontFamily: "var(--font-badge)",
                    }}>
                      ⭐ POPULAIRE
                    </span>
                  </div>
                ) : (
                  <div style={{ marginBottom: -16, height: 26 }} />
                )}

                {/* Card */}
                <div style={{
                  background: "#ffffff", borderRadius: 20, padding: "32px 28px",
                  border: plan.popular ? "2px solid #0055FF" : plan.promo ? "2px solid #f59e0b" : "1px solid rgba(25,30,79,0.10)",
                  boxShadow: plan.popular ? "0 0 40px rgba(0,85,255,0.12)" : plan.promo ? "0 0 32px rgba(245,158,11,0.10)" : "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                  {/* Badge promo */}
                  {plan.promo && (
                    <div style={{ marginBottom: 14 }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        background: "#fff7ed", color: "#c2570a",
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
                        padding: "3px 10px", borderRadius: 50,
                        fontFamily: "var(--font-badge)",
                        border: "1px solid #fed7aa",
                      }}>
                        <Rocket size={9} style={{ flexShrink: 0 }} /> OFFRE LANCEMENT · 20 PREMIERS SITES
                      </span>
                    </div>
                  )}

                  {/* Plan name + tagline */}
                  <div style={{ marginBottom: 24 }}>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 4 }}>
                      {plan.name}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#474667" }}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Prix */}
                  <div style={{ marginBottom: 24 }}>
                    {plan.price ? (
                      <>
                        {plan.oldPrice && (
                          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#9b9fb9", textDecoration: "line-through", marginBottom: 2 }}>
                            {plan.oldPrice} € mise en place
                          </p>
                        )}
                        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 38, color: plan.promo ? "#c2570a" : "#191e4f", lineHeight: 1 }}>
                            {plan.price} €
                          </span>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#474667" }}>mise en place</span>
                        </div>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#474667", marginTop: 4 }}>
                          puis <strong>{plan.monthly} €</strong>/mois<span style={{ color: "#059669", fontWeight: 600 }}> · sans engagement</span>
                        </p>
                      </>
                    ) : (
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 32, color: "#191e4f", lineHeight: 1 }}>
                        Sur devis
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div style={{ marginBottom: 24 }}>
                    <a
                      href={plan.cta.href}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "100%", padding: "12px 20px", borderRadius: 50,
                        fontSize: 14, fontWeight: 600, fontFamily: "var(--font-heading)",
                        textDecoration: "none",
                        ...(plan.popular ? {
                          background: "linear-gradient(90deg, #0055FF, #00D2FF)",
                          color: "#fff", border: "none",
                        } : {
                          background: "transparent", color: "#191e4f",
                          border: "1.5px solid rgba(25,30,79,0.25)",
                        }),
                        transition: "opacity 0.15s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                    >
                      {plan.cta.label}
                    </a>
                  </div>

                  {/* Séparateur */}
                  <div style={{ height: 1, background: "rgba(25,30,79,0.08)", marginBottom: 20 }} />

                  {/* Features */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {plan.features.filter(f => !f.startsWith("Shooting photo")).map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{
                          flexShrink: 0, width: 18, height: 18, borderRadius: "50%",
                          background: "#e2f7ff", display: "flex", alignItems: "center",
                          justifyContent: "center", marginTop: 1,
                        }}>
                          <Check size={11} style={{ color: "#0055FF" }} />
                        </span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "#474667", lineHeight: 1.5 }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Shooting photo — 2 blocs côte à côte */}
        <div className="shooting-banner-wrap" style={{ marginTop: 32, display: "flex", gap: 16, alignItems: "stretch" }}>

          {/* Bloc texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            style={{
              flex: 1,
              borderRadius: 20,
              background: "#ffffff",
              border: "1px solid rgba(25,30,79,0.10)",
              boxShadow: "0 4px 24px rgba(0,85,255,0.08)",
              padding: "32px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: 14 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#ffffff", color: "#0055FF",
                fontFamily: "var(--font-badge)", fontSize: 12, fontWeight: 600,
                border: "1px solid rgba(25,30,79,0.10)",
                boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)",
                borderRadius: 999, padding: "5px 14px",
              }}>
                <Gift size={11} style={{ color: "#0055FF" }} />
                Shooting photo offert
              </span>
            </div>
            <div style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800,
              color: "#191e4f", marginBottom: 12, lineHeight: 1.2, letterSpacing: "-0.02em",
            }}>
              Inclus{" "}
              <span style={{ background: "linear-gradient(90deg, #0055FF, #00D2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                gratuitement
              </span>
              {" "}avec votre site
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.7, margin: 0 }}>
              Les photos font toute la différence. Un site avec de belles images professionnelles inspire confiance, valorise votre activité et convainc vos visiteurs bien mieux qu&apos;un texte seul. C&apos;est pourquoi nous vous offrons un shooting photo dédié pour que votre site soit aussi beau que votre travail.
            </p>
          </motion.div>

          {/* Bloc photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              flex: 1,
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(25,30,79,0.10)",
              boxShadow: "0 4px 24px rgba(0,85,255,0.08)",
              minHeight: 260,
            }}
          >
            <img
              src="/images/shooting.webp"
              alt="Shooting photo professionnel BiDigital"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              loading="lazy" decoding="async"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
