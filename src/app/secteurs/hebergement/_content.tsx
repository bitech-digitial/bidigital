"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, ChevronDown,
  Calendar, Users, Globe, MapPin, ImageIcon, Wifi, Lock,
} from "lucide-react";
import CalButton from "@/components/ui/CalButton";
import { WHATSAPP_LINK } from "@/lib/constants";

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
  "Hôtel", "Gîte / Chambre d'hôtes", "Camping", "Résidence de tourisme",
  "Hébergement insolite", "Location de vacances", "Auberge de jeunesse",
  "Maison d'hôtes", "Chalet de montagne", "Villa de luxe",
  "Glamping", "Tiny House", "Yourte / Tipi", "Péniche",
];

const besoinItems = [
  { icon: Calendar,   label: "Réservations en direct 24h/24" },
  { icon: Globe,      label: "Connexion Booking / Airbnb" },
  { icon: Users,      label: "Attirer une nouvelle clientèle" },
  { icon: ImageIcon,  label: "Galerie de votre établissement" },
  { icon: MapPin,     label: "SEO local et tourisme" },
  { icon: Wifi,       label: "Site responsive tous supports" },
];

const faqItems = [
  {
    q: "Puis-je intégrer un système de réservation en ligne ?",
    a: "Absolument. Nous intégrons un moteur de réservation directement sur votre site : vos visiteurs consultent les disponibilités, sélectionnent leurs dates et paient en ligne en toute sécurité. Vous recevez une confirmation automatique et gérez votre planning depuis votre espace d'administration.",
  },
  {
    q: "Mon site sera-t-il connecté à Booking.com et Airbnb ?",
    a: "Oui. Grâce à un channel manager intégré, votre planning est synchronisé en temps réel avec les principales plateformes OTA (Booking, Airbnb, Expedia). Plus de risque de double réservation — une gestion centralisée depuis un seul écran.",
  },
  {
    q: "Comment augmenter mes réservations directes et réduire les commissions ?",
    a: "En combinant un site optimisé SEO, un comparateur \"meilleur prix garanti\", un bouton de réservation bien visible et des avis Google mis en avant, vous incitez vos visiteurs à réserver directement. Résultat : moins de commissions OTA, plus de marge et une relation client directe.",
  },
  {
    q: "Puis-je gérer mes disponibilités depuis mon téléphone ?",
    a: "Oui, votre espace d'administration est entièrement responsive. Ajoutez des disponibilités, modifiez vos tarifs, répondez aux demandes et consultez votre planning depuis votre smartphone — depuis votre établissement ou en déplacement.",
  },
];

export default function HebergementContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", paddingTop: 110, overflowX: "hidden" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}
          className="grid-heb-hero"
        >
          {/* Gauche — visuel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 500, overflow: "hidden" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hotel-1.webp"
              alt="Site internet pour hôtels et établissements d'hébergement"
              style={{
                width: "100%", height: 480,
                borderRadius: 20, display: "block",
                objectFit: "cover",
              }}
              fetchPriority="high" decoding="async" />
          </motion.div>

          {/* Droite — texte */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {["Tourisme", "Réservation en ligne"].map((t) => (
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
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.1rem, 3vw, 2rem)",
              fontWeight: 900, color: "#191e4f", lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>Augmentez vos réservations directes</span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                et{" "}<span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    réduisez vos commissions
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.75, marginBottom: 32, maxWidth: 500 }}>
              BiDigital crée des sites internet pour les professionnels de l&apos;hébergement :
              hôtels, gîtes, campings, chambres d&apos;hôtes… Moteur de réservation intégré,
              synchronisation Booking & Airbnb, SEO tourisme local.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/maquette" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-heading)", padding: "12px 24px", borderRadius: 50, textDecoration: "none", background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#FFFFFF", boxShadow: "0 4px 18px rgba(0,85,255,0.35)", transition: "opacity 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}>
                Demander ma maquette gratuite
              </a>
              <a href="#moteur-reservation" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 15, fontWeight: 600, color: "#474667",
                textDecoration: "none", padding: "12px 20px",
                border: "1px solid rgba(0,85,255,0.25)", borderRadius: 50,
                fontFamily: "var(--font-body)", transition: "color 0.15s, border-color 0.15s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#0055FF"; e.currentTarget.style.borderColor = "rgba(0,85,255,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#474667"; e.currentTarget.style.borderColor = "rgba(0,85,255,0.25)"; }}
              >
                Voir le moteur de réservation →
              </a>
            </div>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-heb-besoins">
            {besoinItems.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 18px", borderRadius: 12,
                  border: "1px solid rgba(25,30,79,0.08)",
                  background: "#ffffff",
                }}>
                  <Icon size={16} style={{ color: "#0055FF", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{b.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>


      {/* ── IMAGE DE MARQUE ───────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>Image de marque</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28,
          }}>
            Une image de{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                marque
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            {" "}forte qui donne envie de séjourner chez vous
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85, marginBottom: 20 }}>
            Dans l&apos;hébergement, <strong style={{ color: "#191e4f" }}>le premier regard est décisif</strong>. Avant même de lire
            votre description, vos visiteurs jugent l&apos;atmosphère de votre établissement à travers les
            photos, les couleurs et la qualité générale de votre site. Un design soigné inspire
            confiance et fait monter le désir de réserver.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "#474667", lineHeight: 1.85 }}>
            BiDigital intègre <strong style={{ color: "#191e4f" }}>votre identité visuelle, vos photos professionnelles et votre
            univers unique</strong> pour créer un site qui vous ressemble — chaleureux pour un gîte,
            élégant pour un boutique-hôtel, aventureux pour un camping glamping. Votre site raconte
            votre histoire avant même que vos clients franchissent votre porte.
          </p>
        </motion.div>
      </section>

      {/* ── FOCUS MOTEUR DE RÉSERVATION ───────────────────────────────────── */}
      <section id="moteur-reservation" style={{ background: "#f8faff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}
          style={{ maxWidth: 1020, margin: "0 auto" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 12, textAlign: "center" }}>
            Focus interface
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em",
            marginBottom: 48, textAlign: "center",
          }}>
            Votre moteur de{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                réservation
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            {" "}: rapide, sécurisé, personnalisé
          </h2>

          <div
            style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(25,30,79,0.08)", transition: "box-shadow 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            <div style={{ background: "#030E13", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
              <div style={{ marginLeft: 10, flex: 1, maxWidth: 320, background: "rgba(0,85,255,0.06)", borderRadius: 5, height: 22, padding: "0 10px", display: "flex", alignItems: "center", border: "1px solid rgba(0,85,255,0.1)" }}>
                <Lock size={10} style={{ color: "rgba(0,85,255,0.35)", marginRight: 4 }} />
                <span style={{ fontSize: 10, color: "rgba(0,85,255,0.35)", fontFamily: "monospace" }}>votre-hotel.fr/reservation</span>
              </div>
            </div>

            <div style={{ background: "#FFFFFF", padding: "32px 40px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "start" }} className="grid-heb-focus">

                {/* Photo chambre */}
                <div>
                  <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", height: 260, marginBottom: 14 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/hotel.webp"
                      alt="Chambre d'hébergement — moteur de réservation"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      loading="lazy" decoding="async" />
                  </div>
                </div>

                {/* Formulaire */}
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#ffffff", letterSpacing: "0.08em", fontFamily: "var(--font-body)", marginBottom: 10, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", display: "inline-block", padding: "3px 10px", borderRadius: 4 }}>
                    VÉRIFIER LES DISPONIBILITÉS
                  </div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 800, color: "#191e4f", marginBottom: 20 }}>
                    Réservation en ligne
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                    {[
                      { label: "ARRIVÉE", value: "Jeu. 12 juin" },
                      { label: "DÉPART",  value: "Dim. 15 juin" },
                    ].map((f) => (
                      <div key={f.label} style={{ background: "rgba(0,85,255,0.05)", borderRadius: 8, padding: "10px 12px", border: "1px solid rgba(0,85,255,0.15)" }}>
                        <div style={{ fontSize: 9, fontWeight: 700, color: "#0055FF", letterSpacing: "0.08em", fontFamily: "var(--font-body)", marginBottom: 4 }}>{f.label}</div>
                        <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "#191e4f" }}>
                          <Calendar size={11} style={{ display: "inline", marginRight: 5, verticalAlign: "middle", color: "#0055FF" }} />
                          {f.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "rgba(0,85,255,0.05)", borderRadius: 8, padding: "10px 12px", border: "1px solid rgba(0,85,255,0.15)", marginBottom: 12 }}>
                    <div style={{ fontSize: 9, fontWeight: 700, color: "#0055FF", letterSpacing: "0.08em", fontFamily: "var(--font-body)", marginBottom: 4 }}>VOYAGEURS</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "#191e4f" }}>
                        <Users size={11} style={{ display: "inline", marginRight: 5, verticalAlign: "middle", color: "#0055FF" }} />
                        2 adultes
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        {["-", "+"].map((b) => (
                          <div key={b} style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(0,85,255,0.1)", border: "1px solid rgba(0,85,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#191e4f" }}>{b}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ background: "rgba(0,85,255,0.04)", borderRadius: 8, padding: "12px 14px", border: "1px solid rgba(25,30,79,0.08)", marginBottom: 18 }}>
                    {[
                      { label: "Prix par nuit", value: "89 €" },
                      { label: "Durée du séjour", value: "3 nuits" },
                    ].map((l) => (
                      <div key={l.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{ fontSize: 13, color: "#474667", fontFamily: "var(--font-body)" }}>{l.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "#191e4f", fontFamily: "var(--font-heading)" }}>{l.value}</span>
                      </div>
                    ))}
                    <div style={{ borderTop: "1px solid rgba(25,30,79,0.08)", paddingTop: 8, marginTop: 4, display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#191e4f", fontFamily: "var(--font-heading)" }}>Total</span>
                      <span style={{ fontSize: 18, fontWeight: 900, color: "#0055FF", fontFamily: "var(--font-heading)" }}>267 €</span>
                    </div>
                  </div>

                  <div style={{ width: "100%", height: 44, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Calendar size={16} color="#ffffff" />
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-heading)" }}>Vérifier les disponibilités</span>
                  </div>

                  <p style={{ fontSize: 11, color: "#474667", fontFamily: "var(--font-body)", textAlign: "center", marginTop: 10 }}>
                    Paiement 100% sécurisé · Annulation gratuite sous 48h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "#474667", fontFamily: "var(--font-body)", marginTop: 20 }}>
            Moteur de réservation — personnalisé à votre établissement et votre charte graphique
          </p>
        </motion.div>
      </section>

      {/* ── SEO ───────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: -120,
          width: 600, height: 500, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,85,255,0.10) 0%, transparent 65%)",
          transform: "translateY(-50%)", pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="grid-heb-seo">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          >
            <SectionBadge>Référencement local</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 24,
            }}>
              Être trouvé sur{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  Google
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
              {" "}avant Booking.com — c&apos;est possible
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 16 }}>
              Les plateformes OTA dépensent des millions en SEO pour apparaître en premier sur Google.
              Mais <strong style={{ color: "#191e4f" }}>un site bien optimisé peut s&apos;intercaler avant elles</strong>{" "}sur les
              recherches locales et de niche : "gîte [région]", "chambre d&apos;hôtes [commune]",
              "camping éco [département]". Ces requêtes ciblées amènent des visiteurs déjà décidés.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8, marginBottom: 16 }}>
              Nous optimisons votre site de A à Z : <strong style={{ color: "#191e4f" }}>fiche Google My Business</strong> complète,
              balises locales, contenus ciblés sur vos mots-clés touristiques, vitesse de chargement
              optimale. Votre établissement remonte naturellement dans les résultats de recherche.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.8 }}>
              Résultat : vous captez des voyageurs avant qu&apos;ils n&apos;arrivent sur les plateformes — et
              vous transformez chaque visite en <strong style={{ color: "#191e4f" }}>réservation directe sans commission</strong>.
            </p>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="/images/google.webp"
              alt="Référencement local hébergement sur Google"
              style={{ width: "100%", borderRadius: 20, objectFit: "cover", aspectRatio: "4/3", display: "block" }}
              loading="lazy" decoding="async"
            />
          </motion.div>
        </div>
      </section>

      {/* ── MÉTIERS ───────────────────────────────────────────────────────── */}
      <section style={{ background: "#f8faff", padding: "80px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0055FF", fontFamily: "var(--font-body)", marginBottom: 12, textAlign: "center" }}>
            Les types d&apos;hébergement
          </p>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.025em",
            marginBottom: 12, textAlign: "center",
          }}>
            Une solution adaptée à chaque{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                établissement
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#474667", lineHeight: 1.7, marginBottom: 40, textAlign: "center" }}>
            Du camping éco au boutique-hôtel de luxe, BiDigital accompagne tous les professionnels
            de l&apos;hébergement touristique dans leur transformation digitale.
          </p>

          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to right, #f8faff 0%, transparent 100%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to left, #f8faff 0%, transparent 100%)", pointerEvents: "none" }} />
            <div style={{ overflow: "hidden", marginBottom: 12 }}>
              <div className="heb-track-left">
                {[...metiers.slice(0, 7), ...metiers.slice(0, 7)].map((m, i) => (
                  <div key={i} style={{ padding: "10px 22px", borderRadius: 999, flexShrink: 0, marginRight: 12, background: "#ffffff", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(0,85,255,0.07)", fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{m}</div>
                ))}
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <div className="heb-track-right">
                {[...metiers.slice(7), ...metiers.slice(7)].map((m, i) => (
                  <div key={i} style={{ padding: "10px 22px", borderRadius: 999, flexShrink: 0, marginRight: 12, background: "#ffffff", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(0,85,255,0.07)", fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "100px 24px" }}>
        <div
          style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
          className="grid-heb-faq"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} style={{ position: "sticky", top: 100 }}>
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.2vw, 2rem)", fontWeight: 800, color: "#191e4f", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Vos questions sur la création de site d&apos;hébergement
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
            <div style={{ position: "absolute", top: "50%", right: "10%", width: 500, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)", transform: "translateY(-50%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>🏨</div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
                Boostez les réservations directes de{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    votre établissement
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "rgba(255,255,255,0.60)", lineHeight: 1.7, marginBottom: 40 }}>
                Moteur de réservation, channel manager, SEO touristique —
                BiDigital prend en charge tout votre projet digital.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 800,
                    color: "#FFFFFF", textDecoration: "none",
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                    padding: "14px 28px", borderRadius: 50,
                    boxShadow: "0 4px 20px rgba(0,85,255,0.4)",
                    fontFamily: "var(--font-heading)", transition: "filter 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Obtenir mon devis gratuit
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
        @keyframes heb-left  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes heb-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .heb-track-left  { display: flex; width: max-content; animation: heb-left  28s linear infinite; }
        .heb-track-right { display: flex; width: max-content; animation: heb-right 28s linear infinite; }
        @media (max-width: 900px) {
          .grid-heb-hero,
          .grid-heb-mockups,
          .grid-heb-faq,
          .grid-heb-focus,
          .grid-heb-seo { grid-template-columns: 1fr !important; gap: 40px !important; }
          .grid-heb-besoins { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .grid-heb-besoins { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
