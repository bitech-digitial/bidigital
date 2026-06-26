"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Phone,
  ChevronDown, ChevronUp, FileText, ImageIcon,
  MapPin, Users, Search, MessageSquare,
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
  { icon: Search,       label: "Gagner en visibilité locale",     desc: "Apparaître sur Google quand un client cherche votre service dans votre ville." },
  { icon: ImageIcon,    label: "Valoriser vos réalisations",      desc: "Un portfolio photo/vidéo qui prouve votre savoir-faire avant même le premier contact." },
  { icon: FileText,     label: "Générer des demandes de devis",   desc: "Un formulaire simple et efficace pour capter les prospects 24h/24." },
  { icon: Users,        label: "Acquérir de nouveaux clients",    desc: "Plus de trafic qualifié, plus de contacts, plus de chiffre d'affaires." },
  { icon: MessageSquare,label: "Afficher vos avis clients",       desc: "Vos avis Google intégrés renforcent la confiance et déclenchent la prise de contact." },
  { icon: MapPin,       label: "Diffusion locale de vos infos",   desc: "Vos coordonnées visibles sur Google Maps, Waze, Pages Jaunes et les GPS majeurs." },
];

const metiers = [
  "Plombier / Chauffagiste", "Électricien", "Peintre en bâtiment", "Jardinier / Paysagiste",
  "Menuisier / Charpentier", "Serrurier", "Maçon / Carreleur", "Couvreur",
  "Avocat / Juriste", "Agent immobilier", "Formateur professionnel", "Nettoyage professionnel",
  "Déménageur", "Transport & Logistique", "Vétérinaire", "Auto-école",
];

const faqItems = [
  {
    q: "Quel type de site convient à mon entreprise de services ?",
    a: "Pour une entreprise de services, un site vitrine professionnel est idéal : il présente vos services, affiche vos réalisations et photos de chantier, collecte des demandes de devis et intègre vos avis Google. BiDigital crée chaque site sur-mesure selon votre activité — plombier, consultant, coach ou juriste, le résultat est toujours adapté à votre cible.",
  },
  {
    q: "Mon site sera-t-il visible sur Google pour mes services locaux ?",
    a: "Oui. Chaque site BiDigital est optimisé pour le référencement local : mots-clés \"[service] [ville]\", balises SEO techniques, Google My Business configuré, fiche Waze et Apple Maps. Résultat : vous apparaissez quand un client cherche votre activité dans votre zone géographique.",
  },
  {
    q: "Puis-je afficher mes réalisations et témoignages clients ?",
    a: "Absolument. Votre site intègre une galerie de réalisations (photos avant/après, projets terminés) et vos avis Google sont automatiquement affichés. Ces éléments sont les plus puissants pour convaincre un prospect de vous contacter plutôt qu'un concurrent.",
  },
  {
    q: "Combien coûte un site internet pour une entreprise de services ?",
    a: "Nous établissons un devis personnalisé gratuit selon vos besoins. Tout est livré clé en main — hébergement, mises à jour illimitées et support inclus. Contactez-nous pour une estimation sous 24h.",
  },
  {
    q: "Combien de temps faut-il pour mettre mon site en ligne ?",
    a: "En général entre 2 et 4 semaines selon la complexité du projet. Vous validez le design avant la mise en ligne et bénéficiez d'un accompagnement personnalisé du brief jusqu'au lancement. Pas de mauvaise surprise, pas de délai caché.",
  },
];

export default function ServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .grid-svc-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .grid-svc-besoins {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .grid-svc-mockups {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .grid-svc-offres {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .grid-svc-hero    { grid-template-columns: 1fr; gap: 40px; }
          .grid-svc-besoins { grid-template-columns: 1fr 1fr; }
          .grid-svc-mockups { grid-template-columns: 1fr; }
          .grid-svc-offres  { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .grid-svc-besoins { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 110, paddingBottom: 80, background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="grid-svc-hero">

            {/* Left — texte */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              <SectionBadge>Secteur · Services</SectionBadge>
              <h1 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800, color: "#191e4f", lineHeight: 1.15, marginBottom: 20,
              }}>
                Un site qui transforme votre{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    expertise en clients
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h1>
              <p style={{
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "#474667",
                lineHeight: 1.7, marginBottom: 36, fontFamily: "var(--font-body)",
              }}>
                Portfolio de réalisations, formulaire de devis en ligne, avis Google intégrés et
                SEO local — BiDigital crée votre site vitrine professionnel pour capter de
                nouveaux clients et renforcer votre crédibilité en ligne.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
                {["Portfolio de réalisations", "Formulaire de devis", "Avis Google", "SEO local"].map((b) => (
                  <span key={b} style={{
                    padding: "7px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                    background: "rgba(0,85,255,0.08)", border: "1px solid rgba(0,85,255,0.2)",
                    color: "#474667", fontFamily: "var(--font-body)",
                  }}>{b}</span>
                ))}
              </div>
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
                  Créer mon site <ArrowRight size={16} />
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

            {/* Right — image */}
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
              <img
                src="/images/service-1.webp"
                alt="Exemple de site vitrine pour entreprise de services"
                style={{
                  position: "relative", zIndex: 1, borderRadius: 20, width: "100%",
                  height: "auto", display: "block",
                  border: "1px solid rgba(25,30,79,0.08)",
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
          <SectionBadge>Votre présence en ligne</SectionBadge>
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
            .<br />Êtes-vous là quand ils arrivent ?
          </h2>
          <p style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#474667",
            lineHeight: 1.8, marginBottom: 20, fontFamily: "var(--font-body)",
          }}>
            Qu&apos;il cherche un plombier, un électricien ou un consultant, votre futur client tape
            son besoin sur Google et compare les trois premiers résultats. Sans site professionnel,
            vous êtes invisible — et ce sont vos concurrents qui récupèrent ses appels et ses devis.
            Un site bien conçu, c&apos;est votre commercial qui travaille 24h/24 pendant que vous êtes sur le terrain.
          </p>
          <p style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", color: "#474667",
            lineHeight: 1.8, fontFamily: "var(--font-body)",
          }}>
            BiDigital crée des sites vitrine sur-mesure adaptés à votre activité de services :
            présentation claire de vos prestations, galerie de réalisations, formulaire de devis
            simple et numéro cliquable sur mobile. Votre expertise mérite une vitrine digitale
            à la hauteur de votre travail.
          </p>
        </motion.div>
      </section>

      {/* ── BESOINS ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-svc-besoins">
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
              position: "absolute", top: -60, left: "30%", width: 400, height: 400,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: "25%", width: 300, height: 300,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <SectionBadge>Un site pensé pour convertir</SectionBadge>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800, color: "#FFFFFF", marginBottom: 24, lineHeight: 1.3,
              }}>
                Des parcours repensés pour{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    générer plus de devis
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
              </h2>
              <p style={{
                fontSize: "1rem", color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8, marginBottom: 40, fontFamily: "var(--font-body)",
              }}>
                Chaque page de votre site est conçue pour guider le visiteur vers une action :
                appeler, remplir un formulaire de devis ou consulter vos réalisations.
                Aucun parcours ne laisse le client sans solution.
              </p>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 16,
              }}>
                {[
                  { icon: ImageIcon,   t: "Portfolio photo/vidéo",    desc: "Vos chantiers terminés convaincent mieux que n'importe quel argumentaire." },
                  { icon: FileText,    t: "Formulaire de devis clair", desc: "Simple, rapide, sans friction — le prospect le remplit en moins de 2 minutes." },
                  { icon: Phone,       t: "Numéro cliquable mobile",  desc: "Un tap pour vous appeler directement depuis la fiche Google ou votre site." },
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
          </motion.div>
        </div>
      </section>

      {/* ── DESIGN & CONFIANCE ────────────────────────────────────────────── */}
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
          <SectionBadge>Confiance & crédibilité</SectionBadge>
          <h2 style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 800, color: "#191e4f", marginBottom: 24, lineHeight: 1.3,
          }}>
            Un design moderne qui inspire{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                confiance
              </span>
              <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
            </span>
            {" "}dès la première visite
          </h2>
          <p style={{
            fontSize: "1rem", color: "#474667", lineHeight: 1.8,
            marginBottom: 20, fontFamily: "var(--font-body)",
          }}>
            Dans le secteur des services, la confiance se construit avant même le premier
            échange. Un site professionnel avec un design soigné, des photos de qualité et vos
            certifications affichées envoie un signal fort : vous êtes sérieux, vous maîtrisez
            votre métier, et vos clients peuvent vous faire confiance pour entrer chez eux.
          </p>
          <p style={{
            fontSize: "1rem", color: "#474667", lineHeight: 1.8,
            marginBottom: 40, fontFamily: "var(--font-body)",
          }}>
            BiDigital intègre systématiquement vos avis Google, vos labels (RGE, Qualibat,
            assurance décennale) et vos témoignages clients pour renforcer cette crédibilité.
            Le résultat : des prospects qui vous contactent déjà convaincus, et des cycles de
            décision deux fois plus courts.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              "Avis Google intégrés",
              "Labels et certifications",
              "Photos professionnelles",
              "Témoignages clients",
              "Assurance affichée",
              "Zone d'intervention claire",
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
      <section style={{ padding: "80px 24px", background: "#f8faff" }}>
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
              Nous créons des sites pour tous les{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                  professionnels
                </span>
                <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
              </span>
              {" "}de services
            </h2>
            <p style={{
              fontSize: "0.95rem", color: "#474667", maxWidth: 520, margin: "0 auto",
              fontFamily: "var(--font-body)", lineHeight: 1.7,
            }}>
              Artisan ou profession libérale, votre site est conçu selon les spécificités de votre métier.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
          >
            {metiers.map((m) => (
              <span key={m} style={{
                padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                background: "#ffffff", border: "1px solid rgba(25,30,79,0.08)",
                color: "#191e4f", fontFamily: "var(--font-body)",
                transition: "border-color 0.15s, color 0.15s, background 0.15s",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#0055FF";
                  (e.currentTarget as HTMLElement).style.color = "#0055FF";
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,85,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(25,30,79,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#191e4f";
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                }}
              >
                {m}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
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
                    background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 12,
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
                        padding: "14px 22px 18px",
                        fontSize: 14, color: "#474667",
                        fontFamily: "var(--font-body)", lineHeight: 1.75,
                        borderTop: "1px solid rgba(25,30,79,0.08)",
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
              position: "absolute", top: -60, left: "30%", width: 400, height: 400,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: -40, right: "25%", width: 300, height: 300,
              borderRadius: "50%", background: "radial-gradient(circle, rgba(0,85,255,0.30) 0%, rgba(0,210,255,0.10) 50%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>🚀</div>
              <h2 style={{
                fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 900, color: "#FFFFFF", marginBottom: 20, lineHeight: 1.2,
              }}>
                Prêt à décrocher plus de{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }}>
                    devis
                  </span>
                  <span style={{ position: "absolute", bottom: -3, left: 0, right: 0, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)" }} />
                </span>
                {" "}?
              </h2>
              <p style={{
                fontSize: "1rem", color: "rgba(255,255,255,0.60)",
                marginBottom: 40, fontFamily: "var(--font-body)", lineHeight: 1.7,
              }}>
                Discutons de votre projet en 15 minutes. BiDigital crée votre site professionnel
                avec portfolio, formulaire de devis et SEO local — livré clé en main.
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
              <p style={{ marginTop: 24, fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>
                ✓ Devis gratuit · Réponse sous 24h · Satisfait ou remboursé
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
