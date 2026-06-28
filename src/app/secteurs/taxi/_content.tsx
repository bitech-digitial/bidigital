"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MapPin, Clock, Phone,
  Navigation, Calendar, ChevronDown, ChevronUp,
  Route, CreditCard, Map, Bell,
} from "lucide-react";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block", padding: "6px 16px", borderRadius: 999,
      fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
      background: "#e2f7ff",
      color: "#0055FF", fontFamily: "var(--font-badge)", marginBottom: 20,
    }}>{children}</span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const besoins = [
  { icon: Route,    label: "Simulateur de trajet intégré",   desc: "Vos visiteurs estiment leur course directement sur votre site." },
  { icon: MapPin,   label: "Visibilité sur Google Maps",     desc: "Soyez trouvé quand un client cherche \"taxi\" près de lui." },
  { icon: CreditCard, label: "Estimation de prix en ligne", desc: "Tarifs jour/nuit affichés clairement, zéro surprise." },
  { icon: Calendar, label: "Demandes de devis en ligne",     desc: "Recevez les demandes par formulaire, 24h/24 et 7j/7." },
  { icon: Bell,     label: "Réservation à l'avance",        desc: "Aéroport, gare, domicile — planifiez les courses à venir." },
  { icon: Map,      label: "Présence sur les GPS majeurs",   desc: "Google Maps, Waze, Apple Maps : vos clients vous trouvent partout." },
];

const metiers = [
  "Taxi conventionné", "VTC", "Moto-taxi", "Ambulance",
  "Navette aéroport", "Navette gare", "Transport scolaire", "Limousine / Berline",
  "Chauffeur événementiel", "Transport médical assis", "Transfert longue distance",
  "Transport de nuit", "Coursier express", "Navette hôtel",
  "Transport PMR", "Taxi collectif",
];

const faqItems = [
  {
    q: "Puis-je intégrer un simulateur de prix sur mon site ?",
    a: "Oui. Nous intégrons un simulateur de trajet personnalisé à vos tarifs réels — zone géographique, forfaits aéroport/gare, supplément nuit. Le client reçoit une estimation immédiate et peut soumettre une demande de course en un clic.",
  },
  {
    q: "Mon site sera-t-il visible sur Google Maps et les GPS ?",
    a: "Absolument. Chaque site BiDigital est accompagné d'une optimisation Google My Business complète : fiche vérifiée, photos, catégories, horaires d'ouverture. Résultat : vous apparaissez dans les recherches locales et sur les cartes GPS dès les premières semaines.",
  },
  {
    q: "Combien coûte un site internet pour taxi ou VTC ?",
    a: "Nous établissons un devis personnalisé gratuit selon votre activité (taxi, VTC, navette). Hébergement, maintenance et mises à jour sont inclus. Contactez-nous pour une estimation sous 24h.",
  },
  {
    q: "Puis-je modifier mes tarifs et mes horaires moi-même ?",
    a: "Oui, votre site est livré avec un espace d'administration simple. Vous mettez à jour vos tarifs jour/nuit, vos forfaits et vos disponibilités en quelques minutes, sans aucune compétence technique requise.",
  },
  {
    q: "Est-ce qu'un site web m'apporte vraiment plus de courses ?",
    a: "Nos clients taxi et VTC constatent en moyenne 30 à 50 % de nouvelles courses via leur site dans les 3 premiers mois. La clé : un simulateur bien visible, un numéro de téléphone cliquable et une fiche Google optimisée. Ensemble, ils créent un tunnel complet de demande de course.",
  },
];

export default function TaxiContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .grid-taxi-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .grid-taxi-besoins {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .grid-taxi-mockups {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .grid-taxi-faq {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .grid-taxi-offres {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @keyframes taxi-left  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes taxi-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .taxi-track-left  { display: flex; width: max-content; animation: taxi-left  28s linear infinite; }
        .taxi-track-right { display: flex; width: max-content; animation: taxi-right 28s linear infinite; }
        @media (max-width: 900px) {
          .grid-taxi-hero { grid-template-columns: 1fr; gap: 40px; }
          .grid-taxi-besoins { grid-template-columns: 1fr 1fr; }
          .grid-taxi-mockups { grid-template-columns: 1fr; }
          .grid-taxi-faq { grid-template-columns: 1fr; }
          .grid-taxi-offres { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .grid-taxi-besoins { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 110, paddingBottom: 80, background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="grid-taxi-hero">
            {/* Left */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              <SectionBadge>Secteur · Taxi / VTC</SectionBadge>
              <h1 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800, color: "#191e4f", lineHeight: 1.15, marginBottom: 20,
              }}>
                Un site internet qui transforme vos visiteurs en{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    clients
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "#474667",
                lineHeight: 1.7, marginBottom: 36, fontFamily: "var(--font-body)",
              }}>
                Simulateur de trajet, estimation de prix, demande de devis en ligne — BiDigital
                crée votre site taxi ou VTC pour générer plus de courses et être visible sur
                Google Maps avant vos concurrents.
              </p>
              {/* Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
                {["Simulateur de trajet", "Devis en ligne", "SEO Google Maps", "Tarifs jour/nuit"].map((b) => (
                  <span key={b} style={{
                    padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: "rgba(0,85,255,0.08)", border: "1px solid rgba(0,85,255,0.2)",
                    color: "#474667", fontFamily: "var(--font-body)",
                  }}>{b}</span>
                ))}
              </div>
              {/* CTA */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "13px 28px", borderRadius: 50, fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-heading)", textDecoration: "none",
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                    color: "#FFFFFF", boxShadow: "0 4px 18px rgba(0,85,255,0.35)",
                    transition: "filter 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  Créer mon site taxi <ArrowRight size={16} />
                </a>
                <a
                  href="tel:0749999425"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "13px 24px", borderRadius: 50, fontSize: 15, fontWeight: 600,
                    fontFamily: "var(--font-body)", textDecoration: "none",
                    border: "1.5px solid rgba(0,85,255,0.35)", color: "#191e4f",
                    background: "transparent", transition: "border-color 0.15s, color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#0055FF"; (e.currentTarget as HTMLElement).style.color = "#0055FF"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,85,255,0.35)"; (e.currentTarget as HTMLElement).style.color = "#191e4f"; }}
                >
                  <Phone size={15} /> Appeler
                </a>
              </div>
            </motion.div>

            {/* Right — mockup */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.15 }}
              style={{ position: "relative" }}
            >
              <div style={{
                position: "absolute", top: 20, left: -8, bottom: 0,
                width: "70%", borderRadius: 20,
                background: "rgba(0,85,255,0.08)", zIndex: 0, pointerEvents: "none",
              }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/taxi.webp"
                alt="Création site internet pour taxi et VTC"
                style={{
                  position: "relative", zIndex: 1, borderRadius: 20,
                  width: "100%", display: "block",
                  objectFit: "cover", aspectRatio: "1 / 1",
                  boxShadow: "0 20px 60px rgba(25,30,79,0.12)",
                }}
                fetchPriority="high" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#f8faff" }}>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: 750, margin: "0 auto", textAlign: "center" }}
        >
          <SectionBadge>Votre marché en ligne</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 800, color: "#191e4f", marginBottom: 24, lineHeight: 1.3,
          }}>
            Vos clients vous cherchent sur{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                Google
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            ,<br />pas dans l&apos;annuaire
          </h2>
          <p style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#474667",
            lineHeight: 1.8, marginBottom: 20, fontFamily: "var(--font-body)",
          }}>
            Aujourd&apos;hui, une personne qui a besoin d&apos;un taxi tape "taxi [ville]" sur son téléphone.
            Elle clique sur les trois premiers résultats Google Maps, compare les étoiles et les avis,
            puis appelle directement. Sans site professionnel, vous n&apos;existez pas dans ces résultats —
            et vous laissez ces courses à vos concurrents.
          </p>
          <p style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#474667",
            lineHeight: 1.8, fontFamily: "var(--font-body)",
          }}>
            BiDigital crée votre vitrine digitale sur-mesure : simulateur de trajet, tarifs clairs,
            demande de devis en un clic. Résultat : vos visiteurs deviennent des clients avant même
            d&apos;avoir décroché leur téléphone. Votre site travaille pendant que vous êtes au volant.
          </p>
        </motion.div>
      </section>

      {/* ── BESOINS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-taxi-besoins" style={{ marginTop: 0 }}>
            {besoins.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    background: "#f8faff", borderRadius: 14, padding: "22px 20px",
                    border: "1px solid rgba(25,30,79,0.08)",
                    display: "flex", flexDirection: "column", gap: 10,
                    transition: "box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(25,30,79,0.10)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "#e2f7ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={18} color="#0055FF" />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#191e4f", fontFamily: "var(--font-heading)" }}>
                    {b.label}
                  </div>
                  <div style={{ fontSize: 13, color: "#474667", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                    {b.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── UX NARRATIVE (dark card) ──────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: 700, margin: "0 auto" }}
        >
          <div style={{
            borderRadius: 28,
            padding: "48px 40px",
            background: "#16182e",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: "50%", right: -100, width: 500, height: 500,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              transform: "translateY(-50%)", pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", top: "50%", left: -100, width: 400, height: 400,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              transform: "translateY(-50%)", pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <SectionBadge>Expérience utilisateur</SectionBadge>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800, color: "#FFFFFF", marginBottom: 24, lineHeight: 1.3,
              }}>
                Un simulateur de trajet qui convertit
                <br />
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    les curieux en clients
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16, marginTop: 40,
              }}>
                {[
                  { icon: Navigation, t: "Trajet calculé en temps réel", desc: "Départ, arrivée, distance, durée estimée." },
                  { icon: CreditCard, t: "Prix transparent affiché", desc: "Tarif jour, nuit, forfait aéroport — sans surprise." },
                  { icon: Clock,       t: "Disponible 24h/24", desc: "Votre site reçoit les demandes pendant que vous conduisez." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.t} style={{
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,85,255,0.15)",
                      borderRadius: 14, padding: 20, textAlign: "left",
                    }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: "#e2f7ff",
                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12,
                      }}>
                        <Icon size={17} color="#0055FF" />
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-heading)", marginBottom: 6 }}>
                        {item.t}
                      </div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── DOUBLE MAQUETTES ─────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#f8faff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionBadge>Pages intérieures</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.3,
            }}>
              Simulateur et{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  tarifs
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
              {" "}— deux pages clés
            </h2>
          </motion.div>

          <div className="grid-taxi-mockups">
            {/* Left — Simulateur */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              <div style={{ background: "#0F0F1A", borderRadius: 20, padding: 28 }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ background: "#1A1A2E", padding: "10px 14px", display: "flex", gap: 6 }}>
                    {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                      <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <div style={{ padding: 20, background: "#0F0F1A" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-heading)", marginBottom: 14 }}>
                      Simulateur de trajet
                    </div>
                    <div style={{
                      background: "#1A1A2E", borderRadius: 10, padding: 14, marginBottom: 14,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <div>
                          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}>Départ</div>
                          <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-heading)", color: "#ffffff" }}>Paris 10ème</div>
                        </div>
                        <ArrowRight size={14} color="#34D058" />
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}>Arrivée</div>
                          <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-heading)", color: "#ffffff" }}>CDG Terminal 2</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}>
                        <span style={{ color: "#34D058", fontWeight: 700 }}>45 min</span> · 28 km
                      </div>
                    </div>
                    <div style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "#1A1A2E", borderRadius: 10, padding: "12px 14px", marginBottom: 10,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>Tarif estimé</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>Tarif de jour · 1 passager</div>
                      </div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#34D058", fontFamily: "var(--font-heading)" }}>38 €</div>
                    </div>
                    <div style={{
                      background: "#34D058", borderRadius: 8, padding: "9px 14px",
                      textAlign: "center", fontSize: 12, fontWeight: 700, color: "#0A0A0A",
                      fontFamily: "var(--font-heading)",
                    }}>
                      Confirmer ma réservation
                    </div>
                  </div>
                </div>
              </div>
              <p style={{
                textAlign: "center", marginTop: 16, fontSize: 13, fontWeight: 600,
                color: "#474667", fontFamily: "var(--font-body)",
              }}>
                Page simulateur — résultat + confirmation
              </p>
            </motion.div>

            {/* Right — Tarifs */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.12 }}
            >
              <div style={{ background: "#0F0F1A", borderRadius: 20, padding: 28 }}>
                <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ background: "#1A1A2E", padding: "10px 14px", display: "flex", gap: 6 }}>
                    {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                      <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                    ))}
                  </div>
                  <div style={{ padding: 20, background: "#0F0F1A" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-heading)", marginBottom: 14 }}>
                      Nos tarifs
                    </div>
                    {[
                      { label: "Forfait aéroport CDG", price: "à partir de 45 €", badge: "Populaire" },
                      { label: "Forfait gare Paris",    price: "à partir de 25 €", badge: null },
                      { label: "Tarif de nuit (21h–6h)", price: "+20 %",           badge: null },
                      { label: "Tarif longue distance",  price: "Sur devis",        badge: null },
                    ].map((t, i) => (
                      <div key={t.label} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "10px 12px", borderRadius: 8, marginBottom: 6,
                        background: i === 0 ? "rgba(52,208,88,0.10)" : "#1A1A2E",
                        border: i === 0 ? "1px solid rgba(52,208,88,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      }}>
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#ffffff", fontFamily: "var(--font-body)" }}>
                            {t.label}
                          </div>
                          {t.badge && (
                            <span style={{
                              fontSize: 9, fontWeight: 700, color: "#34D058",
                              background: "rgba(52,208,88,0.15)", borderRadius: 4, padding: "2px 6px",
                              fontFamily: "var(--font-body)", letterSpacing: "0.05em",
                            }}>
                              {t.badge}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? "#34D058" : "rgba(255,255,255,0.6)", fontFamily: "var(--font-heading)" }}>
                          {t.price}
                        </div>
                      </div>
                    ))}
                    <a href="/maquette" style={{
                      display: "block", background: "#34D058", borderRadius: 8, padding: "9px 14px",
                      textAlign: "center", fontSize: 12, fontWeight: 700, color: "#0A0A0A",
                      fontFamily: "var(--font-heading)", marginTop: 10, textDecoration: "none",
                    }}>
                      Demander ma maquette gratuite
                    </a>
                  </div>
                </div>
              </div>
              <p style={{
                textAlign: "center", marginTop: 16, fontSize: 13, fontWeight: 600,
                color: "#474667", fontFamily: "var(--font-body)",
              }}>
                Page tarifs — forfaits & devis
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SEO GOOGLE MAPS ───────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#ffffff", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: -120, width: 600, height: 500,
          borderRadius: "50%", background: "radial-gradient(ellipse, rgba(0,85,255,0.10) 0%, transparent 65%)",
          transform: "translateY(-50%)", pointerEvents: "none", zIndex: 0,
        }} />
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <SectionBadge>Visibilité locale</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 800, color: "#191e4f", marginBottom: 24, lineHeight: 1.3,
          }}>
            Être trouvé sur{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                Google Maps
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            {" "}avant vos concurrents
          </h2>
          <p style={{
            fontSize: "1rem", color: "#474667", lineHeight: 1.8,
            marginBottom: 20, fontFamily: "var(--font-body)",
          }}>
            80 % des recherches de taxi se font sur mobile avec une intention immédiate. Google Maps
            est le premier point de contact — avant votre site, avant les plateformes. BiDigital
            optimise votre fiche Google My Business, vos photos, vos avis et vos catégories pour
            apparaître dans le pack local dès les premières semaines.
          </p>
          <p style={{
            fontSize: "1rem", color: "#474667", lineHeight: 1.8,
            marginBottom: 40, fontFamily: "var(--font-body)",
          }}>
            Votre site est également déclaré sur Waze, Apple Maps et les annuaires GPS majeurs.
            Quel que soit l&apos;application de votre client, votre numéro est cliquable, votre adresse
            est accessible et votre note s&apos;affiche. La visibilité locale, c&apos;est le carburant de
            votre activité.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              "Google My Business optimisé",
              "Waze & Apple Maps",
              "Référencement local",
              "Gestion des avis Google",
              "Mots-clés \"taxi [ville]\"",
              "Schema LocalBusiness",
            ].map((chip) => (
              <span key={chip} style={{
                padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                background: "rgba(0,85,255,0.07)", border: "1px solid rgba(25,30,79,0.08)",
                color: "#474667", fontFamily: "var(--font-body)",
              }}>{chip}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── MÉTIERS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <SectionBadge>Votre activité</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              fontWeight: 800, color: "#191e4f", marginBottom: 14, lineHeight: 1.3,
            }}>
              Nous travaillons avec tous les{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  professionnels
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
              {" "}du transport
            </h2>
            <p style={{
              fontSize: "0.95rem", color: "#474667", maxWidth: 500, margin: "0 auto",
              fontFamily: "var(--font-body)", lineHeight: 1.7,
            }}>
              Chauffeur indépendant ou flotte, votre site est conçu selon votre activité spécifique.
            </p>
          </motion.div>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to right, #ffffff 0%, transparent 100%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2, background: "linear-gradient(to left, #ffffff 0%, transparent 100%)", pointerEvents: "none" }} />
            <div style={{ overflow: "hidden", marginBottom: 12 }}>
              <div className="taxi-track-left">
                {[...metiers.slice(0, 8), ...metiers.slice(0, 8)].map((m, i) => (
                  <div key={i} style={{ padding: "10px 22px", borderRadius: 999, flexShrink: 0, marginRight: 12, background: "#ffffff", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(0,85,255,0.07)", fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{m}</div>
                ))}
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <div className="taxi-track-right">
                {[...metiers.slice(8), ...metiers.slice(8)].map((m, i) => (
                  <div key={i} style={{ padding: "10px 22px", borderRadius: 999, flexShrink: 0, marginRight: 12, background: "#ffffff", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(0,85,255,0.07)", fontSize: 14, fontWeight: 600, color: "#191e4f", fontFamily: "var(--font-body)" }}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#f8faff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionBadge>FAQ</SectionBadge>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              fontWeight: 800, color: "#191e4f", lineHeight: 1.3,
            }}>
              Questions fréquentes
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 780, margin: "0 auto" }}>
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  background: "#FFFFFF", borderRadius: 14,
                  border: openFaq === i ? "1px solid rgba(0,85,255,0.3)" : "1px solid rgba(25,30,79,0.08)",
                  overflow: "hidden", transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "18px 22px",
                    background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    gap: 12,
                  }}
                >
                  <span style={{
                    fontSize: 15, fontWeight: 700, color: "#191e4f",
                    fontFamily: "var(--font-heading)", lineHeight: 1.4,
                  }}>
                    {item.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp size={17} color="#0055FF" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={17} color="#474667" style={{ flexShrink: 0 }} />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{
                        padding: "0 22px 18px",
                        fontSize: 14, color: "#474667",
                        fontFamily: "var(--font-body)", lineHeight: 1.75,
                        borderTop: "1px solid rgba(25,30,79,0.08)",
                        paddingTop: 14,
                      }}>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#f8faff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            style={{
              position: "relative", overflow: "hidden", borderRadius: 32,
              textAlign: "center", background: "#16182e",
              padding: "clamp(48px, 8vw, 80px) clamp(24px, 6vw, 64px)",
            }}
          >
            <div style={{
              position: "absolute", top: -60, left: "30%", width: 400, height: 400, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: "25%", width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>🚖</div>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 900, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.2,
              }}>
                Prêt à générer plus de{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    courses
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
                {" "}?
              </h2>
              <p style={{
                fontSize: "1rem", color: "rgba(255,255,255,0.60)",
                marginBottom: 40, fontFamily: "var(--font-body)", lineHeight: 1.7,
              }}>
                Discutons de votre projet en 15 minutes. BiDigital crée votre site taxi ou VTC professionnel
                avec simulateur de trajet, SEO local et visibilité Google Maps.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "14px 32px", borderRadius: 50, fontSize: 15, fontWeight: 800,
                    fontFamily: "var(--font-heading)", textDecoration: "none",
                    background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)", color: "#FFFFFF",
                    boxShadow: "0 4px 20px rgba(0,85,255,0.4)",
                    transition: "filter 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  Lancer mon projet <ArrowRight size={16} />
                </a>
                <a
                  href="tel:0749999425"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "14px 28px", borderRadius: 50, fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-body)", textDecoration: "none",
                    color: "rgba(255,255,255,0.80)", border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.08)", transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
                >
                  <Phone size={15} /> 07 49 99 94 25
                </a>
              </div>
              <p style={{
                marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-body)",
              }}>
                ✓ Devis gratuit · Réponse sous 24h
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
