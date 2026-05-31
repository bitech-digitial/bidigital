"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, Clock,
  Paperclip, ChevronDown,
  Send, CheckCircle, Loader2, X,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const SUJETS = [
  "Création de site internet",
  "Site e-commerce",
  "Refonte de site web",
  "Référencement naturel (SEO)",
  "Maintenance & hébergement",
  "Webdesign",
  "Agence partenaire",
  "Autre demande",
];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid #e1eaf5",
  borderRadius: 8,
  color: "#1D2939",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  padding: "12px 14px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const focusStyle = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#007AFF";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,122,255,0.1)";
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "#e1eaf5";
    e.currentTarget.style.boxShadow = "none";
  },
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#667085",
  marginBottom: 6,
  fontFamily: "var(--font-body)",
};

const requiredDot = <span style={{ color: "#007AFF", marginLeft: 2 }}>*</span>;

export default function ContactPageContent() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    nom: "", prenom: "", email: "", telephone: "",
    societe: "", sujet: "", message: "", consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    if (name === "message") setCharCount(value.length);
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const clearFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const extraInfo = [
        form.societe ? `Société : ${form.societe}` : "",
        fileName ? `Pièce jointe mentionnée : ${fileName}` : "",
      ].filter(Boolean).join("\n");

      const fullMessage = [form.message, extraInfo].filter(Boolean).join("\n\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.prenom} ${form.nom}`.trim(),
          email: form.email,
          phone: form.telephone || undefined,
          activity: form.sujet,
          message: fullMessage,
          consent: form.consent,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { error?: string };
        setErrorMsg(data.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg("Une erreur est survenue. Réessayez ou contactez-nous directement.");
      setStatus("error");
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "transparent", minHeight: "100svh" }}
    >
      {/* ── Glows de fond (même que Hero) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700, height: 700, top: "-200px", left: "-150px",
          background: "radial-gradient(ellipse, rgba(0,122,255,0.08) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600, top: "-80px", right: "-100px",
          background: "radial-gradient(ellipse, rgba(144,224,239,0.12) 0%, transparent 65%)",
          borderRadius: "50%", filter: "blur(60px)",
        }}
      />

      {/* ── Grille de points ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,122,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        className="contact-main-grid relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 60,
          paddingTop: 120,
          paddingBottom: 100,
        }}
      >
        {/* ── Left column — Intro ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 7vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#1D2939",
              marginBottom: 20,
              letterSpacing: "-0.04em",
            }}
          >
            Nous{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              contacter
            </span>
          </h1>

          {/* Intro text */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              color: "#1D2939",
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 420,
            }}
          >
            Une question, un projet, une idée&nbsp;? Notre équipe vous accompagne
            de la réflexion jusqu&apos;à la mise en ligne. Décrivez votre besoin
            et nous vous répondons sous 24h.
          </p>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {(
              [
                { Icon: Phone, text: "07 49 99 94 25",   href: "tel:+33749999425" },
                { Icon: Mail,  text: "contact@bidigital.fr", href: "mailto:contact@bidigital.fr" },
                { Icon: Clock, text: "Lun–Ven, 9h–19h",  href: undefined },
              ] as { Icon: React.ElementType; text: string; href: string | undefined }[]
            ).map(({ Icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(0,122,255,0.07)",
                    border: "1px solid rgba(0,122,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} style={{ color: "#007AFF" }} />
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 15,
                      color: "#1D2939", textDecoration: "none", fontWeight: 500,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#007AFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#1D2939")}
                  >
                    {text}
                  </a>
                ) : (
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#1D2939", fontWeight: 500 }}>
                    {text}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Google badge — logo + étoiles seulement */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#FFFFFF",
              border: "1px solid #e1eaf5",
              borderRadius: 12, padding: "10px 16px",
              alignSelf: "flex-start",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/google.svg"
              alt="Google"
              style={{ width: 20, height: 20, flexShrink: 0 }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#FBBF24", fontSize: 16, lineHeight: 1 }}>★</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right column — Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #e1eaf5",
                  borderRadius: 20,
                  padding: "64px 40px",
                  textAlign: "center",
                  boxShadow: "0 8px 40px rgba(0,122,255,0.08)",
                }}
              >
                <CheckCircle
                  style={{ color: "#4ade80", width: 56, height: 56, margin: "0 auto 20px" }}
                />
                <h2
                  style={{
                    fontFamily: "var(--font-heading)", fontSize: 24,
                    color: "#1D2939", fontWeight: 700, marginBottom: 10,
                  }}
                >
                  Message envoyé !
                </h2>
                <p style={{ fontFamily: "var(--font-body)", color: "#475467", fontSize: 15 }}>
                  Nous vous répondons sous 24h en semaine. À très vite&nbsp;!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-form-card"
                onSubmit={handleSubmit}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #e1eaf5",
                  borderRadius: 20,
                  padding: "36px 36px 32px",
                  boxShadow: "0 8px 40px rgba(0,122,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {/* Row 1 — Nom | Prénom */}
                <div className="contact-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="cp-nom" style={labelStyle}>Nom {requiredDot}</label>
                    <input
                      id="cp-nom"
                      name="nom" type="text" required
                      placeholder="Dupont"
                      value={form.nom}
                      onChange={handleChange}
                      style={inputBase}
                      {...focusStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-prenom" style={labelStyle}>Prénom {requiredDot}</label>
                    <input
                      id="cp-prenom"
                      name="prenom" type="text" required
                      placeholder="Marie"
                      value={form.prenom}
                      onChange={handleChange}
                      style={inputBase}
                      {...focusStyle}
                    />
                  </div>
                </div>

                {/* Row 2 — Email | Téléphone */}
                <div className="contact-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="cp-email" style={labelStyle}>Email {requiredDot}</label>
                    <input
                      id="cp-email"
                      name="email" type="email" required
                      placeholder="marie@exemple.fr"
                      value={form.email}
                      onChange={handleChange}
                      style={inputBase}
                      {...focusStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-telephone" style={labelStyle}>Téléphone</label>
                    <input
                      id="cp-telephone"
                      name="telephone" type="tel"
                      placeholder="06 00 00 00 00"
                      value={form.telephone}
                      onChange={handleChange}
                      style={inputBase}
                      {...focusStyle}
                    />
                  </div>
                </div>

                {/* Row 3 — Société | Pièce jointe */}
                <div className="contact-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="cp-societe" style={labelStyle}>Société</label>
                    <input
                      id="cp-societe"
                      name="societe" type="text"
                      placeholder="BiDigital SAS"
                      value={form.societe}
                      onChange={handleChange}
                      style={inputBase}
                      {...focusStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Pièce jointe</label>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                      style={{
                        ...inputBase,
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer", userSelect: "none",
                        paddingRight: 10,
                      }}
                    >
                      <span
                        style={{
                          flex: 1, overflow: "hidden", textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          color: fileName ? "#1D2939" : "#9EAFC2",
                          fontSize: 15,
                        }}
                      >
                        {fileName ?? "Choisir un fichier…"}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                        {fileName && (
                          <button
                            type="button"
                            onClick={clearFile}
                            aria-label="Retirer le fichier"
                            style={{ background: "none", border: "none", cursor: "pointer", padding: 2, lineHeight: 1 }}
                          >
                            <X size={13} style={{ color: "#9EAFC2" }} />
                          </button>
                        )}
                        <Paperclip size={16} style={{ color: "#007AFF" }} />
                      </div>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                      onChange={handleFile}
                      style={{ display: "none" }}
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Row 4 — Sujet */}
                <div>
                  <label htmlFor="cp-sujet" style={labelStyle}>Sujet {requiredDot}</label>
                  <div style={{ position: "relative" }}>
                    <select
                      id="cp-sujet"
                      name="sujet" required
                      value={form.sujet}
                      onChange={handleChange}
                      style={{
                        ...inputBase,
                        paddingRight: 36,
                        appearance: "none",
                        WebkitAppearance: "none",
                        cursor: "pointer",
                        colorScheme: "light",
                      }}
                      {...focusStyle}
                    >
                      <option value="" disabled style={{ color: "#9EAFC2" }}>
                        Sélectionner un sujet…
                      </option>
                      {SUJETS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      style={{
                        position: "absolute", right: 12, top: "50%",
                        transform: "translateY(-50%)",
                        color: "#007AFF", pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Row 5 — Message */}
                <div>
                  <label htmlFor="cp-message" style={labelStyle}>Votre message {requiredDot}</label>
                  <div style={{ position: "relative" }}>
                    <textarea
                      id="cp-message"
                      name="message" required rows={5}
                      placeholder="Décrivez votre projet ou votre demande…"
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputBase, resize: "none", paddingBottom: 28 }}
                      {...focusStyle}
                    />
                    <span
                      style={{
                        position: "absolute", bottom: 10, right: 12,
                        fontSize: 11, pointerEvents: "none",
                        fontFamily: "var(--font-body)",
                        color: charCount > 1800 ? "#ef4444" : "#9EAFC2",
                        transition: "color 0.2s",
                      }}
                    >
                      {charCount}/2000
                    </span>
                  </div>
                </div>

                {/* Consent */}
                <div
                  style={{
                    border: "1px solid #e1eaf5",
                    borderRadius: 8,
                    padding: "14px 16px",
                    background: "#FAFBFC",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 12,
                  }}
                >
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", flex: 1 }}>
                    <input
                      type="checkbox" name="consent" required
                      checked={form.consent}
                      onChange={handleChange}
                      style={{ accentColor: "#007AFF", width: 17, height: 17, cursor: "pointer", marginTop: 1, flexShrink: 0 }}
                    />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#1D2939", lineHeight: 1.5 }}>
                      J&apos;accepte que BiDigital traite mes données pour répondre à ma demande.{" "}
                      <a
                        href="/politique-de-confidentialite"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#007AFF", textDecoration: "underline" }}
                      >
                        Politique de confidentialité
                      </a>
                    </span>
                  </label>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0, opacity: 0.6 }}>
                    <svg width="16" height="16" viewBox="0 0 512 512" fill="#F4811F">
                      <path d="M338.5 275.8c2-6.9.1-11.8-3.7-15.5-3.5-3.5-8.9-5.5-15.2-5.6l-138.3-1.8c-2-.1-3.1-2.5-1.2-3.7l140.5-20.2c23.1-2.4 48.3-23.7 57.1-49.1 0 0 15.5-43.3-14.3-70-23.2-21-55.5-22.4-55.5-22.4-15.6-49.5-61.4-85.5-115.4-85.5-44.1 0-82.7 22.7-105.2 57.1-8.3-5.4-18.2-8.6-28.8-8.6-28.7 0-52 23.3-52 52 0 3.7.4 7.3 1 10.8C-12.5 118-26 148-26 181.1c0 54.3 44 98.3 98.3 98.3h256c30.2 0 48.2-18.3 48.2-18.3s-40.5-2.9-38-85.3z" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "#667085", lineHeight: 1.2 }}>
                      Protégé par<br />Cloudflare
                    </span>
                  </div>
                </div>


                {/* Error */}
                {status === "error" && (
                  <p style={{ color: "#ef4444", fontSize: 13, textAlign: "center", fontFamily: "var(--font-body)" }}>
                    {errorMsg || "Une erreur est survenue. Réessayez ou contactez-nous directement."}
                  </p>
                )}

                {/* Submit */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 4 }}>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "14px 52px",
                      borderRadius: 50,
                      background: status === "loading"
                        ? "rgba(0,122,255,0.5)"
                        : "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-heading)",
                      fontSize: 16, fontWeight: 700,
                      border: "none",
                      cursor: status === "loading" ? "wait" : "pointer",
                      boxShadow: status === "loading" ? "none" : "0 4px 24px rgba(0,122,255,0.35)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading") {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,122,255,0.45)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = status === "loading" ? "none" : "0 4px 24px rgba(0,122,255,0.35)";
                    }}
                  >
                    {status === "loading" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
