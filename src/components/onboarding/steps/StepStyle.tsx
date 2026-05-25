"use client";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const STYLES = [
  {
    value: "minimaliste",
    label: "Épuré & Aéré",
    brand: "Apple · Notion · Arc",
    bg: "#FAFAFA",
    border: "#E5E7EB",
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ height: 6, background: "#D1D5DB", borderRadius: 3, width: "60%" }} />
        <div style={{ height: 4, background: "#E5E7EB", borderRadius: 3, width: "90%" }} />
        <div style={{ height: 4, background: "#E5E7EB", borderRadius: 3, width: "75%" }} />
      </div>
    ),
  },
  {
    value: "bold",
    label: "Fort & Impactant",
    brand: "Nike · Adidas · Red Bull",
    bg: "#1D2939",
    border: "#374151",
    dark: true,
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ height: 10, background: "#fff", borderRadius: 3, width: "70%" }} />
        <div style={{ height: 4, background: "#4B5563", borderRadius: 3, width: "90%" }} />
      </div>
    ),
  },
  {
    value: "elegant",
    label: "Élégant & Raffiné",
    brand: "Chanel · Dior · Cartier",
    bg: "#FDF8F0",
    border: "#D4A853",
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ height: 6, background: "#D4A853", borderRadius: 1, width: "50%" }} />
        <div style={{ height: 4, background: "#E8D5A3", borderRadius: 1, width: "85%" }} />
        <div style={{ height: 4, background: "#E8D5A3", borderRadius: 1, width: "70%" }} />
      </div>
    ),
  },
  {
    value: "dynamique",
    label: "Moderne & Coloré",
    brand: "Spotify · Stripe · Figma",
    bg: "#EFF6FF",
    border: "#007AFF",
    preview: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ height: 6, background: "linear-gradient(90deg,#00B4D8,#007AFF)", borderRadius: 3, width: "60%" }} />
        <div style={{ height: 4, background: "#BFDBFE", borderRadius: 3, width: "90%" }} />
        <div style={{ height: 4, background: "#BFDBFE", borderRadius: 3, width: "75%" }} />
      </div>
    ),
  },
];

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepStyle({ value, onChange, onNext, onBack }: Props) {
  const handleSurprise = () => {
    onChange("libre");
    onNext();
  };

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Quelle ambiance vous parle ?
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>Choisissez le style qui ressemble le plus à votre marque</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {STYLES.map((s) => (
          <button
            key={s.value}
            onClick={() => onChange(s.value)}
            style={{
              padding: "16px 14px", borderRadius: 12, cursor: "pointer", textAlign: "left",
              border: `2px solid ${value === s.value ? "#007AFF" : s.border}`,
              background: s.bg, transition: "all 0.15s",
              outline: value === s.value ? "3px solid rgba(0,122,255,0.2)" : "none",
            }}
          >
            <div style={{ marginBottom: 10 }}>{s.preview}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: s.dark ? "#fff" : "#1D2939", fontFamily: "var(--font-heading)" }}>{s.label}</div>
            <div style={{ fontSize: 11, color: s.dark ? "#6B7280" : "#94A3B8", marginTop: 2 }}>{s.brand}</div>
          </button>
        ))}
      </div>

      <button
        onClick={handleSurprise}
        style={{
          width: "100%", padding: "12px 16px", borderRadius: 12, marginBottom: 20,
          border: "1.5px dashed #007AFF", background: "#F0F9FF",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          fontSize: 13, fontWeight: 700, color: "#007AFF", fontFamily: "var(--font-heading)",
          transition: "background 0.15s",
        }}
      >
        <Sparkles size={15} />
        Je vous laisse m&apos;impressionner
      </button>

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
