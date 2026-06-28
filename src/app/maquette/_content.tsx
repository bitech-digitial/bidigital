"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2, Globe, Upload } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Step =
  | "intro"
  | "has-website"
  | "website-url"
  | "analyzing"
  | "identity-choice"
  | "adjustment-method"
  | "adjustment-describe"
  | "no-website-info"
  | "contact"
  | "success";

interface FormData {
  hasWebsite?: boolean;
  websiteUrl?: string;
  identityChoice?: "keep" | "adjust" | "from-scratch";
  adjustmentMethod?: "describe" | "discuss";
  adjustmentDescription?: string;
  activityDomain?: string;
  businessName?: string;
  inspirationSites?: string;
  remarks?: string;
  firstName?: string;
  phone?: string;
  email?: string;
}

// ─── Constantes ──────────────────────────────────────────────────────────────

const ANALYSIS_STEPS = [
  "Site détecté",
  "Charte graphique récupérée",
  "Capture terminée",
  "Analyse terminée",
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
};

const transition = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as [number,number,number,number] };

// ─── Utils ───────────────────────────────────────────────────────────────────

function buildMessage(d: FormData): string {
  const lines: string[] = ["📋 DEMANDE MAQUETTE GRATUITE"];
  if (d.hasWebsite) {
    lines.push(`Site existant : ${d.websiteUrl}`);
    if (d.identityChoice === "keep")         lines.push("Choix : Conserver l'identité actuelle");
    if (d.identityChoice === "from-scratch") lines.push("Choix : Repartir de zéro");
    if (d.identityChoice === "adjust") {
      lines.push("Choix : Ajustements");
      if (d.adjustmentMethod === "describe") lines.push(`Ajustements : ${d.adjustmentDescription}`);
      if (d.adjustmentMethod === "discuss")  lines.push("Préfère en discuter directement");
    }
  } else {
    lines.push(`Pas de site existant`);
    if (d.businessName)     lines.push(`Nom commercial : ${d.businessName}`);
    if (d.activityDomain)   lines.push(`Domaine d'activité : ${d.activityDomain}`);
    if (d.inspirationSites) lines.push(`Inspirations : ${d.inspirationSites}`);
    if (d.remarks)          lines.push(`Remarques : ${d.remarks}`);
  }
  return lines.join("\n");
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function InputField({ label, placeholder, value, onChange, type = "text" }: {
  label: string; placeholder: string; value: string;
  onChange: (v: string) => void; type?: string;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#474667", marginBottom: 6, fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", padding: "12px 14px", borderRadius: 12,
          border: "1px solid #e1eaf5", fontSize: 15, color: "#191e4f",
          fontFamily: "var(--font-body)", background: "#fff", outline: "none",
          boxSizing: "border-box",
        }}
        onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,85,255,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,85,255,0.08)"; }}
        onBlur={e  => { e.currentTarget.style.borderColor = "#e1eaf5"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}

function TextareaField({ label, placeholder, value, onChange }: {
  label: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#474667", marginBottom: 6, fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {label}
      </label>
      <textarea
        rows={3}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: "100%", padding: "12px 14px", borderRadius: 12,
          border: "1px solid #e1eaf5", fontSize: 15, color: "#191e4f",
          fontFamily: "var(--font-body)", background: "#fff", outline: "none",
          resize: "none", boxSizing: "border-box",
        }}
        onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,85,255,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,85,255,0.08)"; }}
        onBlur={e  => { e.currentTarget.style.borderColor = "#e1eaf5"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}

function ChoiceCard({ label, sub, selected, onClick }: {
  label: string; sub?: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", textAlign: "left", padding: "16px 18px",
        borderRadius: 14, cursor: "pointer", transition: "all 0.18s",
        border: selected ? "2px solid #0055FF" : "1.5px solid rgba(25,30,79,0.12)",
        background: selected ? "rgba(0,85,255,0.04)" : "#fff",
        boxShadow: selected ? "0 0 0 4px rgba(0,85,255,0.07)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
          border: selected ? "none" : "1.5px solid rgba(25,30,79,0.2)",
          background: selected ? "linear-gradient(90deg,#0055FF,#00D2FF)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {selected && <Check size={11} color="#fff" />}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: selected ? "#0055FF" : "#191e4f" }}>
            {label}
          </div>
          {sub && <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#474667", marginTop: 2 }}>{sub}</div>}
        </div>
      </div>
    </button>
  );
}

function PrimaryBtn({ onClick, children, disabled }: { onClick?: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%", padding: "14px 20px", borderRadius: 50,
        background: disabled ? "rgba(0,85,255,0.35)" : "linear-gradient(90deg,#0055FF,#00D2FF)",
        color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-heading)",
        border: "none", cursor: disabled ? "not-allowed" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        transition: "opacity 0.15s",
      }}
    >
      {children}
    </button>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 6,
        fontSize: 13, color: "#474667", fontFamily: "var(--font-body)",
        background: "none", border: "none", cursor: "pointer", padding: 0,
        marginBottom: 24,
      }}
    >
      <ArrowLeft size={14} /> Retour
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MaquetteContent() {
  const [step, setStep]           = useState<Step>("intro");
  const [dir, setDir]             = useState(1);
  const [data, setData]           = useState<FormData>({});
  const [analysisStep, setAnalysisStep] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const go = (next: Step, direction = 1) => {
    setDir(direction);
    setStep(next);
  };

  const set = (patch: Partial<FormData>) => setData(prev => ({ ...prev, ...patch }));

  // Fake analysis sequence
  useEffect(() => {
    if (step !== "analyzing") return;
    setAnalysisStep(-1);
    const timers = ANALYSIS_STEPS.map((_, i) =>
      setTimeout(() => {
        setAnalysisStep(i);
        if (i === ANALYSIS_STEPS.length - 1) {
          setTimeout(() => go("identity-choice"), 700);
        }
      }, 700 + i * 900)
    );
    return () => timers.forEach(clearTimeout);
  }, [step]);

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.firstName || "",
          email: data.email || "",
          sector: data.activityDomain || "Demande maquette",
          message: buildMessage(data),
          activity: data.activityDomain || "Demande maquette",
          consent: true,
        }),
      });
    } catch { /* silent */ }
    setIsSubmitting(false);
    go("success");
  };

  // ── Progress bar ──────────────────────────────────────────────────────────
  const progressMap: Record<Step, number> = {
    intro: 0, "has-website": 15, "website-url": 30, analyzing: 45,
    "identity-choice": 55, "adjustment-method": 65, "adjustment-describe": 72,
    "no-website-info": 45, contact: 85, success: 100,
  };
  const progress = progressMap[step] ?? 0;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#f8faff 0%,#eef3ff 60%,#ffffff 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 16px" }}>

      {/* Logo */}
      <a href="/" style={{ textDecoration: "none", marginBottom: 32 }}>
        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 22, background: "linear-gradient(90deg,#0055FF,#00D2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          BiDigital
        </span>
      </a>

      {/* Card */}
      <div style={{ width: "100%", maxWidth: 520, background: "#fff", borderRadius: 24, border: "1px solid rgba(25,30,79,0.09)", boxShadow: "0 8px 40px rgba(25,30,79,0.07)", overflow: "hidden" }}>

        {/* Progress bar */}
        {step !== "success" && (
          <div style={{ height: 3, background: "#f0f0f8" }}>
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ height: "100%", background: "linear-gradient(90deg,#0055FF,#00D2FF)" }}
            />
          </div>
        )}

        <div style={{ padding: "36px 32px" }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >

              {/* ── INTRO ─────────────────────────────────────────── */}
              {step === "intro" && (
                <div>
                  <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(22px,4vw,28px)", color: "#191e4f", lineHeight: 1.25, marginTop: 16, marginBottom: 12 }}>
                    Quelques questions pour mieux vous connaître
                  </h1>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.65, marginBottom: 32 }}>
                    On a besoin de comprendre votre activité pour vous proposer la meilleure solution. Ça prend 30 secondes, c&apos;est gratuit, et sans engagement.
                  </p>
                  <PrimaryBtn onClick={() => go("has-website")}>
                    C&apos;est parti <ArrowRight size={16} />
                  </PrimaryBtn>
                </div>
              )}

              {/* ── HAS WEBSITE ───────────────────────────────────── */}
              {step === "has-website" && (
                <div>
                  <BackBtn onClick={() => go("intro", -1)} />
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 22, color: "#191e4f", marginBottom: 24 }}>
                    Avez-vous déjà un site web ?
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <ChoiceCard
                      label="Oui, j'ai un site"
                      selected={data.hasWebsite === true}
                      onClick={() => { set({ hasWebsite: true }); go("website-url"); }}
                    />
                    <ChoiceCard
                      label="Non, pas encore"
                      selected={data.hasWebsite === false}
                      onClick={() => { set({ hasWebsite: false }); go("no-website-info"); }}
                    />
                  </div>
                </div>
              )}

              {/* ── WEBSITE URL ───────────────────────────────────── */}
              {step === "website-url" && (
                <div>
                  <BackBtn onClick={() => go("has-website", -1)} />
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "#e2f7ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <Globe size={20} style={{ color: "#0055FF" }} />
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 22, color: "#191e4f", marginBottom: 8 }}>
                    Montrez-nous votre site
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 24 }}>
                    On analyse votre identité visuelle actuelle.
                  </p>
                  <div style={{ marginBottom: 20 }}>
                    <input
                      type="url"
                      placeholder="https://votre-site.fr"
                      value={data.websiteUrl || ""}
                      onChange={e => set({ websiteUrl: e.target.value })}
                      style={{
                        width: "100%", padding: "14px 16px", borderRadius: 14,
                        border: "1.5px solid #e1eaf5", fontSize: 15, color: "#191e4f",
                        fontFamily: "var(--font-body)", background: "#f8faff",
                        outline: "none", boxSizing: "border-box",
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#0055FF"; e.currentTarget.style.background = "#fff"; }}
                      onBlur={e  => { e.currentTarget.style.borderColor = "#e1eaf5"; e.currentTarget.style.background = "#f8faff"; }}
                    />
                  </div>
                  <PrimaryBtn
                    onClick={() => { if (data.websiteUrl) go("analyzing"); }}
                    disabled={!data.websiteUrl}
                  >
                    Analyser mon site <ArrowRight size={16} />
                  </PrimaryBtn>
                </div>
              )}

              {/* ── ANALYZING ─────────────────────────────────────── */}
              {step === "analyzing" && (
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#e2f7ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <Loader2 size={24} style={{ color: "#0055FF", animation: "spin 1s linear infinite" }} />
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 8 }}>
                    Analyse en cours…
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 32 }}>
                    {data.websiteUrl}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
                    {ANALYSIS_STEPS.map((label, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 12 }}
                        animate={analysisStep >= i ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                        transition={{ duration: 0.35 }}
                        style={{ display: "flex", alignItems: "center", gap: 10 }}
                      >
                        <div style={{
                          width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                          background: "linear-gradient(90deg,#0055FF,#00D2FF)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <Check size={12} color="#fff" />
                        </div>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#191e4f", fontWeight: 500 }}>{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── IDENTITY CHOICE ───────────────────────────────── */}
              {step === "identity-choice" && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#22c55e", fontWeight: 600 }}>Analyse terminée</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 6 }}>
                    Votre identité visuelle
                  </h2>
                  <div style={{ background: "#f8faff", border: "1px solid #e1eaf5", borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <Globe size={14} style={{ color: "#0055FF", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#474667" }}>
                        {data.websiteUrl}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 20 }}>
                    Souhaitez-vous conserver cette identité visuelle ?
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <ChoiceCard
                      label="Oui, on garde tout"
                      sub="On modernise et optimise votre site pour la conversion, en gardant votre identité."
                      selected={data.identityChoice === "keep"}
                      onClick={() => { set({ identityChoice: "keep" }); go("contact"); }}
                    />
                    <ChoiceCard
                      label="Je veux des ajustements"
                      selected={data.identityChoice === "adjust"}
                      onClick={() => { set({ identityChoice: "adjust" }); go("adjustment-method"); }}
                    />
                    <ChoiceCard
                      label="On repart de zéro"
                      sub="Notre équipe créera une identité sur-mesure adaptée à votre secteur et à vos objectifs."
                      selected={data.identityChoice === "from-scratch"}
                      onClick={() => { set({ identityChoice: "from-scratch" }); go("contact"); }}
                    />
                  </div>
                </div>
              )}

              {/* ── ADJUSTMENT METHOD ─────────────────────────────── */}
              {step === "adjustment-method" && (
                <div>
                  <BackBtn onClick={() => go("identity-choice", -1)} />
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 8 }}>
                    Comment souhaitez-vous procéder ?
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 24 }}>
                    Dites-nous comment vous préférez nous transmettre vos idées d&apos;ajustements.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <ChoiceCard
                      label="Je préfère vous décrire les changements"
                      sub="Décrivez ce que vous aimeriez modifier (couleurs, logo, style…)"
                      selected={data.adjustmentMethod === "describe"}
                      onClick={() => { set({ adjustmentMethod: "describe" }); go("adjustment-describe"); }}
                    />
                    <ChoiceCard
                      label="Je préfère en discuter directement"
                      sub="Un membre de notre équipe vous contactera pour en parler."
                      selected={data.adjustmentMethod === "discuss"}
                      onClick={() => { set({ adjustmentMethod: "discuss" }); go("contact"); }}
                    />
                  </div>
                </div>
              )}

              {/* ── ADJUSTMENT DESCRIBE ───────────────────────────── */}
              {step === "adjustment-describe" && (
                <div>
                  <BackBtn onClick={() => go("adjustment-method", -1)} />
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 8 }}>
                    Décrivez vos ajustements
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 20 }}>
                    Couleurs, logo, structure, style général…
                  </p>
                  <div style={{ marginBottom: 24 }}>
                    <TextareaField
                      label=""
                      placeholder="Ex : je voudrais des tons plus chauds, un logo modernisé et une mise en page plus aérée…"
                      value={data.adjustmentDescription || ""}
                      onChange={v => set({ adjustmentDescription: v })}
                    />
                  </div>
                  <PrimaryBtn
                    onClick={() => { if (data.adjustmentDescription) go("contact"); }}
                    disabled={!data.adjustmentDescription}
                  >
                    Continuer <ArrowRight size={16} />
                  </PrimaryBtn>
                </div>
              )}

              {/* ── NO WEBSITE INFO ───────────────────────────────── */}
              {step === "no-website-info" && (
                <div>
                  <BackBtn onClick={() => go("has-website", -1)} />
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 8 }}>
                    Quel est votre domaine d&apos;activité ?
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 24 }}>
                    Ces informations nous aident à créer une maquette qui vous ressemble.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <InputField
                      label="Nom commercial *"
                      placeholder="Ex : Salon Élégance, Boulangerie Martin…"
                      value={data.businessName || ""}
                      onChange={v => set({ businessName: v })}
                    />
                    <InputField
                      label="Domaine d'activité *"
                      placeholder="Ex : plomberie, coiffure, restauration…"
                      value={data.activityDomain || ""}
                      onChange={v => set({ activityDomain: v })}
                    />

                    {/* Logo upload */}
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#474667", marginBottom: 6, fontFamily: "var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        Logo (optionnel)
                      </label>
                      <label style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "12px 16px", borderRadius: 12,
                        border: "1.5px dashed rgba(0,85,255,0.25)", cursor: "pointer",
                        background: "rgba(0,85,255,0.02)",
                      }}>
                        <Upload size={16} style={{ color: "#0055FF", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667" }}>Ajouter votre logo</span>
                        <input type="file" accept="image/*" style={{ display: "none" }} />
                      </label>
                    </div>

                    <InputField
                      label="Sites d'inspiration (optionnel)"
                      placeholder="Des sites web qui vous plaisent…"
                      value={data.inspirationSites || ""}
                      onChange={v => set({ inspirationSites: v })}
                    />
                    <TextareaField
                      label="Remarques (optionnel)"
                      placeholder="Détails supplémentaires sur votre projet…"
                      value={data.remarks || ""}
                      onChange={v => set({ remarks: v })}
                    />
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <PrimaryBtn
                      onClick={() => { if (data.businessName && data.activityDomain) go("contact"); }}
                      disabled={!data.businessName || !data.activityDomain}
                    >
                      Presque fini <ArrowRight size={16} />
                    </PrimaryBtn>
                  </div>
                </div>
              )}

              {/* ── CONTACT ───────────────────────────────────────── */}
              {step === "contact" && (
                <div>
                  <BackBtn onClick={() => {
                    if (data.hasWebsite) {
                      if (data.identityChoice === "adjust" && data.adjustmentMethod === "describe") go("adjustment-describe", -1);
                      else if (data.identityChoice === "adjust") go("adjustment-method", -1);
                      else go("identity-choice", -1);
                    } else {
                      go("no-website-info", -1);
                    }
                  }} />
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 20, color: "#191e4f", marginBottom: 6 }}>
                    Dernière étape — On revient vers vous sous 72h
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#474667", marginBottom: 24 }}>
                    Notre équipe va étudier votre activité et vous envoyer une maquette personnalisée.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                    <InputField label="Prénom" placeholder="Votre prénom" value={data.firstName || ""} onChange={v => set({ firstName: v })} />
                    <InputField label="Téléphone" placeholder="06 XX XX XX XX" value={data.phone || ""} onChange={v => set({ phone: v })} type="tel" />
                    <InputField label="Email" placeholder="votre@email.fr" value={data.email || ""} onChange={v => set({ email: v })} type="email" />
                  </div>

                  {/* Engagement */}
                  <div style={{ background: "#f8faff", border: "1px solid #e1eaf5", borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#474667", lineHeight: 1.65, margin: 0 }}>
                      🤝 <strong>Notre engagement :</strong> Nous créons votre maquette gratuitement et sans engagement. En retour, nous vous demandons simplement de répondre à notre proposition — même si c&apos;est un non.
                    </p>
                  </div>

                  <PrimaryBtn
                    onClick={handleFinalSubmit}
                    disabled={!data.firstName || !data.email || isSubmitting}
                  >
                    {isSubmitting ? <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> : <>Recevoir ma maquette gratuite <ArrowRight size={16} /></>}
                  </PrimaryBtn>
                  <p style={{ textAlign: "center", fontSize: 11.5, color: "#9b9fb9", fontFamily: "var(--font-body)", marginTop: 10 }}>
                    Sans engagement. Sans carte bancaire. Vous voyez avant de décider.
                  </p>
                </div>
              )}

              {/* ── SUCCESS ───────────────────────────────────────── */}
              {step === "success" && (
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{
                      width: 64, height: 64, borderRadius: "50%",
                      background: "linear-gradient(90deg,#0055FF,#00D2FF)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    <Check size={28} color="#fff" />
                  </motion.div>
                  <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 24, color: "#191e4f", marginBottom: 12 }}>
                    Demande reçue !
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#474667", lineHeight: 1.65, marginBottom: 32 }}>
                    Notre équipe va analyser votre activité et vous envoyer une maquette personnalisée sous <strong>72h</strong>. Gardez un œil sur votre boîte mail.
                  </p>
                  <a
                    href="/"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "13px 28px", borderRadius: 50,
                      background: "linear-gradient(90deg,#0055FF,#00D2FF)",
                      color: "#fff", fontSize: 15, fontWeight: 700,
                      fontFamily: "var(--font-heading)", textDecoration: "none",
                    }}
                  >
                    Retour à l&apos;accueil
                  </a>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer note */}
      {step !== "success" && (
        <p style={{ marginTop: 20, fontSize: 12, color: "#9b9fb9", fontFamily: "var(--font-body)" }}>
          Gratuit · Sans engagement · Réponse sous 72h
        </p>
      )}
    </div>
  );
}
