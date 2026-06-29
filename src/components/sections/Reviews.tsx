"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Alban", company: "SNCF", text: "J'ai eu à faire à une super équipe, très pro et très réactive ! Quelque soit notre besoin, il y avait une part de conseil qui permettait de bien orienter le besoin et d'avoir une réponse optimale. L'équipe est vraiment sympa et c'est un plaisir de travailler avec eux 🙂" },
  { name: "Amélie", company: "Emmaüs Défi", text: "Très bonne agence, c'est agréable de travailler avec eux, les délais ont été respectés, ils sont très réactifs sur la correction des bugs et pertinents dans leurs recommandations, nous sommes très satisfaits de notre nouveau site internet !" },
  { name: "Mathieu", company: "La Boucle", text: "Nous avons travaillé avec BiDigital sur la refonte de notre site vitrine. Le sujet était assez complexe mais nous avons pu compter sur l'équipe qui a géré ce projet d'une main de maître." },
  { name: "Pauline", company: "Samshield", text: "Excellente agence. Nous avons fait appel à eux pour 2 projets distincts. L'équipe est ultra-réactive, avec des conseils toujours très avisés, à l'écoute, pédagogue. Le suivi est parfait et la livraison dans un temps record. Nous sommes ravis de leur avoir fait confiance." },
  { name: "Sylvain", company: "iHealthLabs Europe", text: "De la récolte des besoins jusqu'à la mise en ligne du projet (et même au-delà avec le support) une écoute et un suivi de grande qualité. Une équipe hyper réactive qui sait s'adapter au niveau de connaissance de ses interlocuteurs… Super satisfait de cette collaboration." },
  { name: "Notshy", company: "", text: "L'expertise de BiDigital nous a permis de lancer notre site avec succès. L'aventure continue avec cette équipe professionnelle et disponible pour répondre à nos enjeux en perpétuelle évolution." },
  { name: "Arnaud", company: "PCB Création", text: "Je recommande BiDigital pour leur sérieux et leur réactivité lors de la refonte de notre site. Une agence à taille humaine, très pro et sympa 🙂" },
  { name: "Nicolas", company: "6Lab", text: "BiDigital, une agence avec une excellente expertise technique sur différentes technologies et qui fait preuve de disponibilité et d'humanité." },
  { name: "Romain", company: "Tissus Plus", text: "Nous travaillons avec BiDigital depuis plus d'un an et nous sommes très satisfaits de leur travail. Les développeurs sont à l'écoute et réactifs. Ils prennent en compte toutes nos demandes et le résultat est top !" },
  { name: "Gilles", company: "Atelier Mesure", text: "Collaboration facile, résultat à la hauteur de l'attente, livré dans les délais. Le site fonctionne bien, un SAV sérieux, le tout pour un budget bien adapté. Pas facile de trouver une équipe aussi efficace." },
  { name: "Aurélie", company: "Anäu Paris", text: "Nous avons fait appel à BiDigital pour notre site. Nous avons été agréablement surpris par la réactivité et l'efficacité de l'agence. À l'écoute mais également force de proposition, nous ferons sans aucun doute appel à eux lors d'une prochaine évolution." },
  { name: "Emmanuelle", company: "Groix et Nature", text: "L'agence BiDigital est très à l'écoute, dans la recherche de solutions optimales et soucieux de la satisfaction de ses clients !" },
];

const PAGES = Math.ceil(reviews.length / 2);
const AUTO_DELAY = 6000;

function ReviewCard({ name, text }: { name: string; company: string; text: string }) {
  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid rgba(25,30,79,0.08)",
      borderRadius: 16,
      padding: "24px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}>
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
        <path d="M0 14V8.4C0 3.73 2.667 1.12 8 0l1.2 1.8C6.533 2.6 5.067 4.027 4.8 6H8V14H0Zm12 0V8.4C12 3.73 14.667 1.12 20 0l1.2 1.8C18.533 2.6 17.067 4.027 16.8 6H20V14H12Z" fill="#0055FF" fillOpacity="0.15" />
      </svg>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", lineHeight: 1.65, flex: 1 }}>
        {text}
      </p>
      <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13, color: "#191e4f" }}>{name}</p>
    </div>
  );
}

export default function Reviews() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    const clamped = (next + PAGES) % PAGES;
    setDir(next > page || (next === 0 && page === PAGES - 1) ? 1 : -1);
    setPage(clamped);
  }, [page]);

  useEffect(() => {
    const id = setInterval(() => go(page + 1), AUTO_DELAY);
    return () => clearInterval(id);
  }, [go, page]);

  const pair = [reviews[page * 2], reviews[page * 2 + 1]].filter(Boolean);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden" style={{ background: "#f8faff" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: "#ffffff", color: "#0055FF", fontFamily: "var(--font-badge)", border: "1px solid rgba(25,30,79,0.10)", boxShadow: "0 2px 8px rgba(25,30,79,0.10), 0 1px 2px rgba(25,30,79,0.06)" }}>
            Avis clients
          </span>
          <h2 className="font-bold" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(24px, 2.5vw, 38px)", color: "#191e4f", lineHeight: 1.25 }}>
            Ils nous ont fait{" "}
            <span style={{ background: "linear-gradient(90deg, #0055FF, #00D2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              confiance.
            </span>
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Flèche gauche */}
          <button
            onClick={() => go(page - 1)}
            aria-label="Précédent"
            style={{
              flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(25,30,79,0.15)", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0055FF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,85,255,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(25,30,79,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <ChevronLeft size={20} style={{ color: "#191e4f" }} />
          </button>

          {/* Cards */}
          <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
            <AnimatePresence mode="popLayout" custom={dir}>
              <motion.div
                key={page}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {pair.map((r, i) => (
                  <div key={i} className={i === 1 ? "hidden sm:block flex-1 min-w-0" : "flex-1 min-w-0"}>
                    <ReviewCard {...r} />
                  </div>
                ))}
                {/* Placeholder si nombre impair */}
                {pair.length === 1 && <div className="hidden sm:block flex-1 min-w-0" />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => go(page + 1)}
            aria-label="Suivant"
            style={{
              flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
              border: "1.5px solid rgba(25,30,79,0.15)", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0055FF"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,85,255,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(25,30,79,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <ChevronRight size={20} style={{ color: "#191e4f" }} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
          {Array.from({ length: PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Page ${i + 1}`}
              style={{
                width: i === page ? 20 : 7, height: 7, borderRadius: 4,
                border: "none", cursor: "pointer",
                background: i === page ? "#0055FF" : "rgba(25,30,79,0.15)",
                transition: "width 0.25s, background 0.25s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
