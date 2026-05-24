"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CouleurData {
  primaire: string;
  secondaire: string;
  notes: string;
}

interface Props {
  value: CouleurData;
  onChange: (v: CouleurData) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepCouleurs({ value, onChange, onNext, onBack }: Props) {
  const set = (k: keyof CouleurData, v: string) => onChange({ ...value, [k]: v });

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Vos couleurs de marque
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>Si vous n&apos;avez pas de charte, choisissez des couleurs qui vous plaisent</p>

      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <label style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#475467", marginBottom: 6 }}>Couleur principale</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", border: "1.5px solid #E1EAF5", borderRadius: 10, background: "#F8FAFC" }}>
            <input
              type="color"
              value={value.primaire || "#007AFF"}
              onChange={(e) => set("primaire", e.target.value)}
              style={{ width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer", padding: 0 }}
            />
            <span style={{ fontSize: 13, color: "#1D2939", fontFamily: "monospace" }}>{value.primaire || "#007AFF"}</span>
          </div>
        </label>
        <label style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#475467", marginBottom: 6 }}>Couleur secondaire</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", border: "1.5px solid #E1EAF5", borderRadius: 10, background: "#F8FAFC" }}>
            <input
              type="color"
              value={value.secondaire || "#1D2939"}
              onChange={(e) => set("secondaire", e.target.value)}
              style={{ width: 28, height: 28, borderRadius: 6, border: "none", cursor: "pointer", padding: 0 }}
            />
            <span style={{ fontSize: 13, color: "#1D2939", fontFamily: "monospace" }}>{value.secondaire || "#1D2939"}</span>
          </div>
        </label>
      </div>

      <label>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#475467", marginBottom: 6 }}>Notes sur les couleurs (optionnel)</div>
        <textarea
          value={value.notes}
          onChange={(e) => set("notes", e.target.value)}
          placeholder="Ex : Je veux quelque chose de doux, pas trop criard..."
          rows={3}
          style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E1EAF5", borderRadius: 10, fontSize: 13, color: "#1D2939", background: "#F8FAFC", resize: "none", outline: "none", fontFamily: "var(--font-body)", boxSizing: "border-box" }}
        />
      </label>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button onClick={onBack} style={{ padding: "13px 18px", borderRadius: 12, border: "1.5px solid #E1EAF5", background: "transparent", color: "#007AFF", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <ArrowLeft size={16} /> Retour
        </button>
        <button onClick={onNext} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 12, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)", color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)" }}>
          Continuer <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
