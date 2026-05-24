"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

const STYLES = [
  {
    value: "minimaliste",
    label: "Minimaliste",
    desc: "Blanc, épuré, beaucoup d'espace",
    preview: "⬜ ⬜ ⬜",
    bg: "#FAFAFA",
    border: "#E5E7EB",
  },
  {
    value: "bold",
    label: "Bold & Impact",
    desc: "Contrastes forts, typographie XXL",
    preview: "■ ■ ■",
    bg: "#1D2939",
    border: "#374151",
    dark: true,
  },
  {
    value: "elegant",
    label: "Élégant",
    desc: "Tons dorés, serif, sophistiqué",
    preview: "✦ ✦ ✦",
    bg: "#FDF8F0",
    border: "#D4A853",
  },
  {
    value: "dynamique",
    label: "Dynamique",
    desc: "Couleurs vives, gradients, moderne",
    preview: "◈ ◈ ◈",
    bg: "#EFF6FF",
    border: "#007AFF",
  },
];

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepStyle({ value, onChange, onNext, onBack }: Props) {
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Quel style visuel vous correspond ?
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>L&apos;ambiance générale de votre futur site</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
        {STYLES.map((s) => (
          <button
            key={s.value}
            onClick={() => onChange(s.value)}
            style={{
              padding: "16px 12px", borderRadius: 12, cursor: "pointer", textAlign: "left",
              border: `2px solid ${value === s.value ? "#007AFF" : s.border}`,
              background: s.bg, transition: "all 0.15s",
              outline: value === s.value ? "3px solid rgba(0,122,255,0.2)" : "none",
            }}
          >
            <div style={{ fontSize: 18, marginBottom: 8 }}>{s.preview}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: s.dark ? "#fff" : "#1D2939", fontFamily: "var(--font-heading)" }}>{s.label}</div>
            <div style={{ fontSize: 11, color: s.dark ? "#9CA3AF" : "#94A3B8", marginTop: 2 }}>{s.desc}</div>
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={onBack} style={{ padding: "13px 18px", borderRadius: 12, border: "1.5px solid #E1EAF5", background: "transparent", color: "#007AFF", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <ArrowLeft size={16} /> Retour
        </button>
        <button onClick={onNext} disabled={!value} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 12, border: "none", cursor: value ? "pointer" : "not-allowed", background: value ? "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)" : "#E1EAF5", color: value ? "#fff" : "#94A3B8", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)", transition: "background 0.2s" }}>
          Continuer <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
