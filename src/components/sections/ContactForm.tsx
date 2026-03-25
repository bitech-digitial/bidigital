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
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    color: "#f0f0ff",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    padding: "12px 14px",
    width: "100%",
    outline: "2px solid transparent",
    outlineOffset: "2px",
    transition: "border-color 0.2s, box-shadow 0.2s",
  } as const;

  const focusStyle = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      e.currentTarget.style.boxShadow = "none";
    },
  };

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: "#52525b",
    marginBottom: 6,
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="formulaire"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: "#06071a" }}
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
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
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
            Contact rapide
          </span>
          <h2
            className="font-extrabold text-3xl mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#f0f0ff",
              letterSpacing: "-0.02em",
            }}
          >
            Décrivez votre projet.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #818cf8, #c084fc)",
              }}
            >
              On revient sous 24h.
            </span>
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
          >
            Sans engagement. Pas de démo commerciale. Juste une vraie réponse.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
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
                  style={{ fontFamily: "var(--font-heading)", color: "#f0f0ff" }}
                >
                  Message envoyé !
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "#71717a" }}
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
                    <label style={labelStyle}>Prénom</label>
                    <input
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
                    <label style={labelStyle}>Email</label>
                    <input
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
                  <label style={labelStyle}>Votre secteur</label>
                  <select
                    name="sector"
                    required
                    value={form.sector}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", colorScheme: "dark" }}
                    {...focusStyle}
                  >
                    <option value="" disabled style={{ background: "#0d0f23" }}>
                      Choisir…
                    </option>
                    {SECTORS.map((s) => (
                      <option key={s} value={s} style={{ background: "#0d0f23" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Votre projet en 2 mots</label>
                  <textarea
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
                    style={{ color: "#f87171", fontFamily: "var(--font-body)" }}
                  >
                    Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 mt-1"
                  style={{
                    background:
                      status === "loading"
                        ? "rgba(99,102,241,0.5)"
                        : "linear-gradient(135deg, #6366f1, #818cf8)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    border: "none",
                    cursor: status === "loading" ? "wait" : "pointer",
                    boxShadow:
                      status === "loading"
                        ? "none"
                        : "0 4px 20px rgba(99,102,241,0.35)",
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
                    style={{ accentColor: "#6366f1" }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "#52525b" }}
                  >
                    J&apos;accepte que BiDigital traite mes données pour répondre à ma demande, conformément à sa{" "}
                    <a
                      href="/politique-de-confidentialite"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#818cf8" }}
                    >
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>

                <p
                  className="text-center text-xs"
                  style={{ fontFamily: "var(--font-body)", color: "#3f3f46" }}
                >
                  Sans engagement · Réponse sous 24h · 100% confidentiel
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
