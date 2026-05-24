"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  value: string[];
  onChange: (v: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepInspirations({ value, onChange, onNext, onBack }: Props) {
  const set = (i: number, v: string) => {
    const next = [...value];
    next[i] = v;
    onChange(next);
  };

  const hasOne = value.some((v) => v.trim().length > 0);

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Sites qui vous inspirent
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>Partagez 1 à 3 sites que vous trouvez beaux (concurrents ou non)</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {[0, 1, 2].map((i) => (
          <input
            key={i}
            type="url"
            value={value[i] ?? ""}
            onChange={(e) => set(i, e.target.value)}
            placeholder={`https://exemple${i + 1}.fr`}
            style={{ padding: "12px 14px", border: "1.5px solid #E1EAF5", borderRadius: 10, fontSize: 13, color: "#1D2939", background: "#F8FAFC", outline: "none", fontFamily: "var(--font-body)", width: "100%", boxSizing: "border-box" }}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={onBack} style={{ padding: "13px 18px", borderRadius: 12, border: "1.5px solid #E1EAF5", background: "transparent", color: "#007AFF", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <ArrowLeft size={16} /> Retour
        </button>
        <button onClick={onNext} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 12, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)", color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)" }}>
          {hasOne ? "Continuer" : "Passer"} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
