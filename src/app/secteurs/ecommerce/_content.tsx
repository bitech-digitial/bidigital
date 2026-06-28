"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, CheckCircle2, ChevronDown, Star,
  CreditCard, Package, Search, Truck, BarChart3, Shield, Lock,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

// ── Palette ───────────────────────────────────────────────────────────────────
// #0055FF  bleu primaire  — accents, badges, icônes
// #00D2FF  cyan           — gradient endpoint
// #474667  gris-bleu      — texte body
// #191e4f  marine foncé   — titres, textes importants
// #16182e  quasi-noir     — fonds CTA dark
// #FFFFFF  blanc          — fonds clairs, cartes

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block", padding: "6px 16px", borderRadius: 999,
      fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
      background: "#e2f7ff",
      color: "#0055FF", fontFamily: "var(--font-badge)", marginBottom: 20,
    }}>
      {children}
    </span>
  );
}

const metiers = [
  "Boutique de prêt-à-porter", "Fleuriste", "Bijouterie / Horlogerie",
  "Maroquinerie / Accessoires", "Librairie / Papeterie", "Épicerie fine",
  "Caviste / Vins & spiritueux", "Boulangerie / Pâtisserie",
  "Décoration intérieure", "Artisan créateur", "Cosmétiques & bien-être",
  "Jouets & jeux", "Sport & plein air", "High-tech / Informatique",
  "Jardinerie / Plantes",
];

const besoinItems = [
  { icon: ShoppingBag, label: "Vendre en ligne 24h/24" },
  { icon: CreditCard,  label: "Paiement sécurisé intégré" },
  { icon: Package,     label: "Gestion de vos commandes" },
  { icon: Search,      label: "Référencement Google e-commerce" },
  { icon: Truck,       label: "Options de livraison flexibles" },
  { icon: BarChart3,   label: "Suivi de vos ventes en temps réel" },
];

const faqItems = [
  {
    q: "Combien coûte la création d'une boutique en ligne ?",
    a: "Le tarif varie selon vos besoins (nombre de produits, fonctionnalités, livraison, gestion des stocks) et votre secteur d'activité. Nous établissons un devis personnalisé gratuit pour chaque projet.",
  },
  {
    q: "Puis-je vendre un nombre illimité de produits ?",
    a: "Oui, absolument. Votre boutique en ligne BiDigital vous permet de mettre en ligne autant de produits que nécessaire, classés par catégories et sous-catégories. Chaque fiche produit peut intégrer photos, descriptions, prix, variantes (taille, couleur) et stock disponible.",
  },
  {
    q: "Quels moyens de paiement puis-je proposer à mes clients ?",
    a: "Nous intégrons tous les moyens de paiement sécurisés : carte bancaire (Visa, Mastercard), PayPal, Apple Pay, Google Pay et virement bancaire. Chaque transaction est sécurisée par un protocole SSL — vos clients paient en toute confiance.",
  },
  {
    q: "Comment mes produits apparaissent-ils sur Google ?",
    a: "Nous optimisons chaque fiche produit pour le SEO : balises title, meta descriptions, données structurées Schema.org, URLs propres, images avec balises alt. Vos produits peuvent aussi apparaître dans Google Shopping. Résultat : un trafic organique qualifié, sans payer la publicité.",
  },
  {
    q: "Puis-je gérer ma boutique depuis mon téléphone ?",
    a: "Oui, votre espace d'administration est entièrement responsive. Vous ajoutez des produits, modifiez les prix, traitez les commandes et consultez vos statistiques depuis votre smartphone — à n'importe quel moment. Nous vous formons à l'utilisation lors de la livraison.",
  },
];

const features = [
  { icon: Shield,    label: "Paiement SSL sécurisé",          desc: "CB, PayPal, Apple Pay intégrés" },
  { icon: Package,   label: "Gestion de stock automatisée",   desc: "Alertes et mises à jour en temps réel" },
  { icon: Truck,     label: "Livraison multi-transporteurs",  desc: "Colissimo, Chronopost, retrait boutique" },
  { icon: BarChart3, label: "Tableau de bord des ventes",     desc: "Statistiques et rapports clairs" },
  { icon: Search,    label: "SEO e-commerce avancé",          desc: "Google Shopping + référencement naturel" },
  { icon: CreditCard,label: "Fiches produits illimitées",     desc: "Photos, variantes, descriptions IA" },
];

export default function EcommerceContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── B. HERO — Split-screen asymétrique ───────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, overflowX: "hidden" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
          className="grid-ecom-hero"
        >
          {/* Gauche — texte */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {["E-commerce", "Boutique en ligne", "Vente sur internet"].map((t) => (
                <span key={t} style={{
                  padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                  background: "rgba(0,85,255,0.08)", border: "1px solid rgba(0,85,255,0.25)",
                  color: "#0055FF", fontFamily: "var(--font-body)",
                }}>
                  {t}
                </span>
              ))}
            </div>

            <h1 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
              fontWeight: 900, color: "#191e4f", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              Lancez votre boutique en ligne et{" "}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                vendez partout en France 24h/24
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
              BiDigital crée des boutiques en ligne sur-mesure pour les commerçants : fiches produits
              soignées, paiement sécurisé, gestion des commandes et SEO e-commerce — un site qui
              vend pendant que vous gérez votre commerce physique.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/maquette" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-heading)", padding: "12px 24px", borderRadius: 50, textDecoration: "none", background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#FFFFFF", boxShadow: "0 4px 18px rgba(0,85,255,0.35)", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                Demander ma maquette gratuite
              </a>
              <a href="#focus-produit" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 15, fontWeight: 600, color: "#474667",
                textDecoration: "none", padding: "12px 20px",
                border: "1px solid rgba(0,85,255,0.25)", borderRadius: 50,
                fontFamily: "var(--font-body)", transition: "color 0.15s, border-color 0.15s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0055FF"; e.currentTarget.style.borderColor = "rgba(0,85,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#474667"; e.currentTarget.style.borderColor = "rgba(0,85,255,0.25)"; }}
              >
                Voir la démo →
              </a>
            </div>

          </motion.div>

          {/* Droite — visuel e-commerce avec forme et rectangle translucide */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 480 }}
          >
            {/* Rectangle fond translucide — signature DA */}
            <div style={{
              position: "absolute", top: 20, left: 0, bottom: 0,
              width: "68%", height: "85%",
              background: "rgba(0,85,255,0.08)", borderRadius: 20, zIndex: 0,
            }} />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/commerce.webp"
              alt="Boutique en ligne e-commerce — achat sécurisé BiDigital"
              style={{
                position: "relative", zIndex: 1,
                width: "82%", height: 440,
                borderRadius: 20, display: "block",
                objectFit: "cover",
              }}
              fetchPriority="high" decoding="async" />
          </motion.div>
        </div>

        {/* Vos besoins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ maxWidth: 1100, margin: "64px auto 0", padding: "0 24px 80px" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 24, textAlign: "center" }}>
            Vos besoins
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-ecom-besoins">
            {besoinItems.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 18px", borderRadius: 12,
                  border: "1px solid rgba(25,30,79,0.08)",
                  background: "rgba(0,85,255,0.04)",
                }}>
                  <Icon size={16} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{b.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ── C. INTRO CENTRÉE ─────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>Votre boutique en ligne</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            Un canal de vente disponible{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                24h/24
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            , même quand votre boutique est fermée
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85, marginBottom: 20 }}>
            Aujourd&apos;hui, <strong style={{ color: "#191e4f" }}>60% des achats débutent par une recherche en ligne</strong> — même
            pour des commerces de proximité. Sans boutique en ligne, vous perdez ces ventes au profit de
            la concurrence ou des grandes plateformes. Un site e-commerce bien construit, c&apos;est un
            vendeur qui ne dort jamais.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85 }}>
            Chez BiDigital, nous concevons des boutiques en ligne <strong style={{ color: "#191e4f" }}>parfaitement adaptées à votre
            secteur et à votre identité</strong> : design sur-mesure, catalogue produits optimisé, expérience
            d&apos;achat fluide sur mobile, paiement sécurisé. Votre boutique physique gagne un jumeau
            digital performant.
          </p>
        </motion.div>
      </section>

      {/* ── D. BOUTIQUE — Image + Texte asymétrique ──────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <div
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}
          className="grid-ecom-boutique"
        >
          {/* Gauche — photo produit */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(25,30,79,0.08)", boxShadow: "0 8px 40px rgba(25,30,79,0.10)" }}>
              {/* Barre browser */}
              <div style={{ background: "#030E13", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
                <div style={{ marginLeft: 10, flex: 1, maxWidth: 280, background: "rgba(0,85,255,0.06)", borderRadius: 5, height: 22, padding: "0 10px", display: "flex", alignItems: "center", border: "1px solid rgba(0,85,255,0.1)" }}>
                  <Lock size={9} style={{ color: "rgba(0,85,255,0.35)", marginRight: 5 }} />
                  <span style={{ fontSize: 10, color: "rgba(0,85,255,0.35)", fontFamily: "monospace" }}>ma-boutique.fr</span>
                </div>
              </div>
              {/* Fiche produit */}
              <div style={{ background: "#ffffff", display: "flex" }}>
                {/* Photo produit */}
                <div style={{ width: "42%", flexShrink: 0, position: "relative", background: "#f5f3f0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/ecommerce.webp"
                    alt="T-shirt en lin Marine"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", minHeight: 320 }}
                    loading="lazy" decoding="async" />
                  <span style={{ position: "absolute", top: 10, left: 10, background: "#191e4f", color: "#fff", fontSize: 8, fontWeight: 700, padding: "3px 8px", borderRadius: 50, letterSpacing: "0.06em", fontFamily: "var(--font-badge)" }}>
                    NOUVEAUTÉ · EN STOCK
                  </span>
                </div>

                {/* Infos produit */}
                <div style={{ flex: 1, padding: "20px 18px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div>
                    <p style={{ fontSize: 9.5, color: "#9b9fb9", fontFamily: "var(--font-body)", marginBottom: 4 }}>Unisexe · T-shirts</p>
                    <h3 style={{ fontSize: 13, fontWeight: 800, color: "#191e4f", fontFamily: "var(--font-heading)", lineHeight: 1.3, marginBottom: 6 }}>
                      T-shirt en lin naturel<br />
                      <span style={{ fontWeight: 500, color: "#474667" }}>Coloris Marine</span>
                    </h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontSize: 18, fontWeight: 800, color: "#191e4f", fontFamily: "var(--font-heading)" }}>59,00 €</span>
                    </div>
                    <p style={{ fontSize: 9, color: "#059669", fontWeight: 600, fontFamily: "var(--font-body)", marginTop: 3 }}>
                      Livraison gratuite dès 60 € · Retours 30 jours
                    </p>
                  </div>

                  <div style={{ height: 1, background: "rgba(25,30,79,0.07)" }} />

                  <div>
                    <p style={{ fontSize: 9.5, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-heading)", marginBottom: 6 }}>
                      Couleur : <span style={{ fontWeight: 400, color: "#474667" }}>Marine</span>
                    </p>
                    <div style={{ display: "flex", gap: 6 }}>
                      {[
                        { color: "#1e3a5f", label: "Marine", active: true },
                        { color: "#C9B99A", label: "Sable" },
                        { color: "#6B7280", label: "Gris" },
                        { color: "#D1FAE5", label: "Sauge" },
                      ].map((c) => (
                        <div key={c.label} title={c.label} style={{ width: 18, height: 18, borderRadius: "50%", background: c.color, border: c.active ? "2px solid #0055FF" : "1.5px solid rgba(25,30,79,0.15)", boxShadow: c.active ? "0 0 0 1px #fff inset" : "none", cursor: "pointer" }} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: 9.5, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-heading)", marginBottom: 6 }}>Taille</p>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {["XS", "S", "M", "L", "XL"].map((s) => (
                        <div key={s} style={{ padding: "4px 8px", borderRadius: 6, fontSize: 9.5, fontWeight: 600, fontFamily: "var(--font-heading)", cursor: "pointer", background: s === "M" ? "#191e4f" : "transparent", color: s === "M" ? "#fff" : "#474667", border: s === "M" ? "1.5px solid #191e4f" : "1.5px solid rgba(25,30,79,0.2)" }}>{s}</div>
                      ))}
                    </div>
                  </div>

                  <div style={{ height: 1, background: "rgba(25,30,79,0.07)" }} />

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <button style={{ width: "100%", padding: "8px", borderRadius: 8, background: "#191e4f", color: "#fff", border: "none", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-heading)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                      <ShoppingBag size={11} /> Ajouter au panier
                    </button>
                    <button style={{ width: "100%", padding: "8px", borderRadius: 8, background: "linear-gradient(90deg, #0055FF, #00D2FF)", color: "#fff", border: "none", fontSize: 10, fontWeight: 700, fontFamily: "var(--font-heading)", cursor: "pointer" }}>
                      Acheter maintenant
                    </button>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                    <span style={{ color: "#f59e0b", fontSize: 10 }}>★★★★★</span>
                    <span style={{ fontSize: 9, color: "#9b9fb9", fontFamily: "var(--font-body)" }}>4,9 · 128 avis</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Droite — texte */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65, delay: 0.1 }}
          >
            <SectionBadge>Catalogue produits</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20,
            }}>
              Une boutique qui met en valeur vos produits et stimule{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  l&apos;achat
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 16 }}>
              <strong style={{ color: "#191e4f" }}>Chaque fiche produit est un argument de vente.</strong> Photos haute définition,
              descriptions engageantes, variantes de couleur et de taille, avis clients, badge "En stock" —
              tout est pensé pour déclencher l&apos;achat dès la première visite.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 28 }}>
              Votre catalogue est organisé par catégories, filtrable et navigable en quelques clics.
              Les moteurs de recherche comme Google indexent chaque page produit pour vous apporter
              un <strong style={{ color: "#191e4f" }}>trafic qualifié gratuitement</strong>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Photos multi-angles et zoom intégré", "Variantes : couleurs, tailles, modèles", "Fiches produits illimitées", "Moteur de recherche interne"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={17} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "#474667", fontFamily: "var(--font-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── G. TEXTE CENTRÉ ───────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>Stratégie digitale</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            E-commerce et présence locale : le{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                duo gagnant
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            {" "}pour vendre plus
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85, marginBottom: 20 }}>
            Un site e-commerce ne suffit pas — il faut qu&apos;il soit <strong style={{ color: "#191e4f" }}>visible au bon moment, sur le bon
            moteur de recherche</strong>. Nous intégrons d&apos;emblée une stratégie SEO e-commerce : balises produits
            optimisées, URLs propres, données structurées Schema.org, intégration Google Shopping.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85 }}>
            Combiné à votre ancrage local, ce double effet vous permet de <strong style={{ color: "#191e4f" }}>toucher à la fois vos
            clients de proximité et des acheteurs partout en France</strong> — sans multiplier les budgets
            publicitaires. Votre boutique en ligne devient le prolongement naturel de votre boutique physique.
          </p>
        </motion.div>
      </section>

      {/* ── FONCTIONNALITÉS GRID — 6 features ────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionBadge>Tout inclus</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em",
            }}>
              Votre boutique en ligne,{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  clé-en-main
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-ecom-features">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    padding: "24px 22px", borderRadius: 14,
                    border: "1px solid rgba(25,30,79,0.08)",
                    background: "#FFFFFF",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,30,79,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,30,79,0.08)";
                  }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e2f7ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <Icon size={18} color="#0055FF" />
                  </div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: "#191e4f", marginBottom: 4 }}>{f.label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#474667", lineHeight: 1.5 }}>{f.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MÉTIERS GRID ─────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 12, textAlign: "center" }}>
            Les secteurs
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em",
            marginBottom: 12, textAlign: "center",
          }}>
            E-commerce adapté à{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                chaque type
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            {" "}de commerce
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.7, marginBottom: 40, textAlign: "center" }}>
            BiDigital accompagne tous les commerçants qui souhaitent vendre en ligne — boutique
            physique, créateur indépendant ou pure-player.
          </p>

          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to right, #f8faff 0%, transparent 100%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to left, #f8faff 0%, transparent 100%)", pointerEvents: "none" }} />
            <div style={{ overflow: "hidden", marginBottom: 12 }}>
              <div className="ecom-track-left">
                {[...metiers.slice(0, 8), ...metiers.slice(0, 8)].map((m, i) => (
                  <div key={i} style={{ padding: "10px 22px", borderRadius: 999, flexShrink: 0, marginRight: 12, background: "#ffffff", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(0,85,255,0.07)", fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{m}</div>
                ))}
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <div className="ecom-track-right">
                {[...metiers.slice(8), ...metiers.slice(8)].map((m, i) => (
                  <div key={i} style={{ padding: "10px 22px", borderRadius: 999, flexShrink: 0, marginRight: 12, background: "#ffffff", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(0,85,255,0.07)", fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ background: "#FFFFFF", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="grid-ecom-faq"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} style={{ position: "sticky", top: 100 }}>
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.2vw, 2rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Vos questions sur la création de{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  boutique en ligne
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.7, marginBottom: 24 }}>
              D&apos;autres questions ? Contactez-nous — réponse garantie sous 24h.
            </p>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#0055FF", textDecoration: "none", fontFamily: "var(--font-body)" }}>
              Nous contacter →
            </a>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.45, delay: i * 0.07 }}
                style={{
                  background: "#FFFFFF", borderRadius: 16,
                  border: "1px solid rgba(25,30,79,0.08)", overflow: "hidden",
                  boxShadow: openFaq === i ? "0 8px 32px rgba(25,30,79,0.10)" : "none",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700, color: openFaq === i ? "#0055FF" : "#191e4f", lineHeight: 1.4, transition: "color 0.2s" }}>
                    {item.q}
                  </span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                    <ChevronDown size={18} color={openFaq === i ? "#0055FF" : "#474667"} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div key="a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                      <div style={{ padding: "0 24px 24px", fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.75 }}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
            style={{
              position: "relative", overflow: "hidden", borderRadius: 32,
              textAlign: "center", background: "#16182e",
              padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 64px)",
            }}
          >
            <div style={{ position: "absolute", top: "50%", left: "15%", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "50%", right: "10%", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,210,255,0.10) 0%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🛒</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Ouvrez votre boutique en ligne{" "}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  dès cette semaine
                </span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.7, marginBottom: 40 }}>
                Brief, design, catalogue, paiement, mise en ligne — BiDigital prend en charge l&apos;intégralité
                de votre projet e-commerce. Devis gratuit sous 24h, sans engagement.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 800,
                    color: "#FFFFFF", textDecoration: "none", background: "#0055FF",
                    padding: "14px 28px", borderRadius: 50,
                    boxShadow: "0 4px 20px rgba(0,85,255,0.4)",
                    fontFamily: "var(--font-heading)", transition: "filter 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Obtenir mon devis e-commerce
                </a>
                <a
                  href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600,
                    color: "rgba(255,255,255,0.80)", border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "14px 24px", borderRadius: 50, textDecoration: "none", fontFamily: "var(--font-body)",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Nous écrire sur WhatsApp →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes ecom-left  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes ecom-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .ecom-track-left  { display: flex; width: max-content; animation: ecom-left  28s linear infinite; }
        .ecom-track-right { display: flex; width: max-content; animation: ecom-right 28s linear infinite; }
        @media (max-width: 900px) {
          .grid-ecom-hero,
          .grid-ecom-boutique,
          .grid-ecom-mockups,
          .grid-ecom-faq,
          .grid-ecom-focus { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-ecom-besoins,
          .grid-ecom-features { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .grid-ecom-besoins,
          .grid-ecom-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
