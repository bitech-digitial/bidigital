"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ALL_PAGES = [
  "Accueil",
  "À propos",
  "Services",
  "Portfolio / Réalisations",
  "Tarifs",
  "Contact",
  "Mentions légales",
  "Page de vente",
];

interface Props {
  value: string[];
  onChange: (v: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepPages({ value, onChange, onNext, onBack }: Props) {
  const toggle = (p: string) => {
    onChange(value.includes(p) ? value.filter((x) => x !== p) : [...value, p]);
  };

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Quelles pages souhaitez-vous ?
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>Sélectionnez tout ce qui vous correspond</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        {ALL_PAGES.map((p) => {
          const selected = value.includes(p);
          return (
            <button
              key={p}
              onClick={() => toggle(p)}
              style={{
                padding: "8px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                border: `1.5px solid ${selected ? "#007AFF" : "#E1EAF5"}`,
                background: selected ? "#EFF6FF" : "#F8FAFC",
                color: selected ? "#007AFF" : "#475467",
                transition: "all 0.15s",
              }}
            >
              {p}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={onBack} style={{ padding: "13px 18px", borderRadius: 12, border: "1.5px solid #E1EAF5", background: "transparent", color: "#007AFF", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <ArrowLeft size={16} /> Retour
        </button>
        <button onClick={onNext} disabled={value.length === 0} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 12, border: "none", cursor: value.length > 0 ? "pointer" : "not-allowed", background: value.length > 0 ? "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)" : "#E1EAF5", color: value.length > 0 ? "#fff" : "#94A3B8", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)", transition: "background 0.2s" }}>
          Continuer <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
