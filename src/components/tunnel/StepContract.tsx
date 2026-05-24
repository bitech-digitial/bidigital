// src/components/tunnel/StepContract.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getContractClauses, type Offre } from "@/lib/contract-content";

const ACCENT_COLORS = [
  "#007AFF", "#00B4D8", "#0044CC", "#5B8DEF",
  "#007AFF", "#00B4D8", "#0044CC", "#5B8DEF",
];

interface StepContractProps {
  offre: Offre;
  onNext: () => void;
  onBack: () => void;
}

export default function StepContract({ offre, onNext, onBack }: StepContractProps) {
  const clauses = getContractClauses(offre);
  return (
    <div>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#1D2939",
          fontFamily: "var(--font-heading)",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
        }}
      >
        Contrat de prestation
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "#94A3B8",
          fontFamily: "var(--font-body)",
          margin: "0 0 20px",
        }}
      >
        Lisez attentivement les conditions avant de signer
      </p>

      <div
        style={{
          maxHeight: 360,
          overflowY: "auto",
          marginBottom: 20,
          paddingRight: 4,
        }}
      >
        {clauses.map((clause, i) => (
          <div
            key={clause.id}
            style={{
              borderLeft: `3px solid ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`,
              paddingLeft: 14,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#1D2939",
                fontFamily: "var(--font-heading)",
                marginBottom: 6,
              }}
            >
              {clause.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#475467",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              {clause.content}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "13px 18px",
            background: "transparent",
            color: "#007AFF",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            border: "1.5px solid #E1EAF5",
            borderRadius: 12,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <ArrowLeft size={16} /> Retour
        </button>
        <button
          onClick={onNext}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px",
            background:
              "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          J&apos;ai lu le contrat <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
