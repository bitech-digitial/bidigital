"use client";
import { ArrowRight } from "lucide-react";

const OPTIONS = [
  { value: "vendre", label: "Vendre en ligne", desc: "Boutique, prises de RDV, devis en ligne" },
  { value: "informer", label: "Informer / Présenter", desc: "Vitrine professionnelle, portfolio" },
  { value: "leads", label: "Générer des leads", desc: "Capturer des contacts, formulaires" },
];

interface Props {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}

export default function StepObjectif({ value, onChange, onNext }: Props) {
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Quel est l&apos;objectif principal de votre site ?
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>Choisissez ce qui correspond le mieux à votre activité</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {OPTIONS.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "flex-start",
              padding: "14px 16px", borderRadius: 12, cursor: "pointer", textAlign: "left",
              border: `2px solid ${value === o.value ? "#007AFF" : "#E1EAF5"}`,
              background: value === o.value ? "#EFF6FF" : "#F8FAFC",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: "#1D2939", fontFamily: "var(--font-heading)" }}>{o.label}</span>
            <span style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{o.desc}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!value}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          padding: "13px", borderRadius: 12, border: "none", cursor: value ? "pointer" : "not-allowed",
          background: value ? "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)" : "#E1EAF5",
          color: value ? "#fff" : "#94A3B8", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)",
          transition: "background 0.2s",
        }}
      >
        Continuer <ArrowRight size={16} />
      </button>
    </div>
  );
}
