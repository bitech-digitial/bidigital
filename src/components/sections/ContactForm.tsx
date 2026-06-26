"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const SECTORS = [
  "Artisan / BTP",
  "Commerce / Boutique",
  "Santé / Bien-être",
  "Restaurant / Food",
  "Coach / Consultant",
  "Photographe / Créatif",
  "Professions libérales",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", sector: "", message: "", consent: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, activity: form.sector }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { error?: string };
        setErrorMsg(data.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.");
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "#FFFFFF",
    border: "1px solid #e1eaf5",
    borderRadius: 12,
    color: "#191e4f",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    padding: "12px 14px",
    width: "100%",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    transition: "border-color 0.2s, box-shadow 0.2s",
  } as const;

  const focusStyle = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "rgba(0,122,255,0.6)";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,122,255,0.1)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "#e1eaf5";
      e.currentTarget.style.boxShadow = "none";
    },
  };

  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "#474667",
    marginBottom: 6,
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="formulaire"
      className="relative py-12 md:py-24 px-4 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 300,
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, rgba(0,122,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Avis Google ── */}
      <div className="relative z-10 max-w-4xl mx-auto mb-14 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Titre + Badge Google */}
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#191e4f",
              marginBottom: 12, letterSpacing: "-0.02em",
            }}>
              Avis clients
            </h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logos/google.svg" alt="Google" style={{ width: 18, height: 18, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: "#191e4f" }}>
                5,0
              </span>
              <div style={{ display: "flex", gap: 1 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: "#FBBF24", fontSize: 15, lineHeight: 1 }}>★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              {
                initiale: "O", couleur: "#9333EA",
                nom: "Oumayma Nbaya", date: "il y a un jour",
                texte: "Je tiens à vous remercier pour votre travail réalisé pour le site de mon institut de beauté. La gestion des rendez-vous est impeccable, Bilel est une personne très à l'écoute et professionnelle, merci !",
              },
              {
                initiale: "Y", couleur: "#0055FF",
                nom: "Yassine E.", date: "il y a 6 jours",
                texte: "Super satisfait du travail réalisé pour la création de mon site internet. J'ai longtemps hésité à sauter le pas, mais c'est un excellent investissement. Le rendu est extrêmement propre et professionnel. Je recommande sans hésiter !",
              },
              {
                initiale: "N", couleur: "#059669",
                nom: "Neima Moussa", date: "il y a une semaine",
                texte: "Très satisfaite de la création de mon site e-commerce de toiles artistiques. Équipe à l'écoute, professionnelle et réactive. Le résultat est magnifique et correspond parfaitement à mes attentes. Je recommande cette agence !",
              },
            ].map((avis) => (
              <div
                key={avis.nom}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #e1eaf5",
                  borderRadius: 16,
                  padding: "20px 22px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {/* Header : avatar + nom + date */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                    background: avis.couleur,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 700, color: "#FFFFFF",
                    fontFamily: "var(--font-heading)",
                  }}>
                    {avis.initiale}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: "#191e4f" }}>
                      {avis.nom}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#9EAFC2" }}>
                      {avis.date}
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logos/google.svg"
                    alt="Google"
                    style={{ width: 16, height: 16, marginLeft: "auto", flexShrink: 0, opacity: 0.7 }}
                  />
                </div>
                {/* Étoiles */}
                <div style={{ display: "flex", gap: 1 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: "#FBBF24", fontSize: 14, lineHeight: 1 }}>★</span>
                  ))}
                </div>
                {/* Texte */}
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 13, color: "#474667",
                  lineHeight: 1.65, margin: 0,
                }}>
                  {avis.texte}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest rounded-full px-4 py-1.5 mb-4"
            style={{
              background: "rgba(0,122,255,0.08)",
              border: "1px solid rgba(0,122,255,0.2)",
              color: "#0055FF",
              fontFamily: "var(--font-badge)",
            }}
          >
            Contact rapide
          </span>
          <h2
            className="font-extrabold text-3xl mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#191e4f",
              letterSpacing: "-0.02em",
            }}
          >
            Parlons de{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #0055FF, #00D2FF)",
              }}
            >
              votre projet
            </span>
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-body)", color: "#474667" }}
          >
            Décrivez-nous votre besoin, nous revenons vers vous sous 24h.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "#FFFFFF",
            border: "1px solid #e1eaf5",
            boxShadow: "0 8px 40px rgba(0,122,255,0.08)",
          }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-8 text-center"
              >
                <CheckCircle className="w-14 h-14" style={{ color: "#4ade80" }} />
                <p
                  className="font-bold text-xl"
                  style={{ fontFamily: "var(--font-heading)", color: "#191e4f" }}
                >
                  Message envoyé !
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                >
                  On vous répond sous 24h en semaine. À très vite !
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-name" style={labelStyle}>Prénom</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Marie"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      {...focusStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-email" style={labelStyle}>Email</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      required
                      placeholder="marie@exemple.fr"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      {...focusStyle}
                    />
                  </div>
                </div>

                {/* Sector */}
                <div>
                  <label htmlFor="cf-sector" style={labelStyle}>Votre secteur</label>
                  <select
                    id="cf-sector"
                    name="sector"
                    required
                    value={form.sector}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", colorScheme: "light" }}
                    {...focusStyle}
                  >
                    <option value="" disabled style={{ background: "#FFFFFF", color: "#191e4f" }}>
                      Choisir…
                    </option>
                    {SECTORS.map((s) => (
                      <option key={s} value={s} style={{ background: "#FFFFFF", color: "#191e4f" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="cf-message" style={labelStyle}>Votre projet</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Je cherche un site vitrine pour mon cabinet de kiné à Versailles…"
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" }}
                    {...focusStyle}
                  />
                </div>


                {/* Error */}
                {status === "error" && (
                  <p
                    className="text-xs text-center"
                    style={{ color: "#ef4444", fontFamily: "var(--font-body)" }}
                  >
                    {errorMsg || "Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp."}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 w-full font-semibold text-sm transition-all duration-200 mt-1"
                  style={{ borderRadius: 50, padding: "14px 32px" }}
                  style={{
                    background: status === "loading"
                      ? "rgba(0,85,255,0.5)"
                      : "linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    border: "none",
                    cursor: status === "loading" ? "wait" : "pointer",
                    boxShadow: status === "loading" ? "none" : "0 4px 20px rgba(0,122,255,0.3)",
                  }}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer ma demande
                    </>
                  )}
                </button>

                {/* RGPD consent */}
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 flex-shrink-0"
                    style={{ accentColor: "#0055FF" }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#474667" }}
                  >
                    J&apos;accepte que BiDigital traite mes données pour répondre à ma demande, conformément à sa{" "}
                    <a
                      href="/politique-de-confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0055FF" }}
                    >
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
