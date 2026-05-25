// src/components/tunnel/StepSignature.tsx
"use client";
import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import SignatureCanvas from "./SignatureCanvas";
import type { Offre } from "@/lib/contract-content";

interface StepSignatureProps {
  email: string;
  nom: string;
  offre: Offre;
  onBack: () => void;
  onSuccess: (token: string) => void;
}

export default function StepSignature({
  email,
  nom,
  offre,
  onBack,
  onSuccess,
}: StepSignatureProps) {
  const [consent, setConsent] = useState(false);
  const [signatureData, setSignatureData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = consent && signatureData !== null && !loading;

  const handleSubmit = async () => {
    if (!canSubmit || !signatureData) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/tunnel/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nom, offre, signatureData, consent }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }
      onSuccess(data.token as string);
    } catch {
      setError("Impossible de contacter le serveur. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

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
        Signature électronique
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "#94A3B8",
          fontFamily: "var(--font-body)",
          margin: "0 0 20px",
        }}
      >
        Dessinez votre signature ci-dessous
      </p>

      {/* Checkbox consentement */}
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          background: "#F8FAFC",
          border: `1px solid ${consent ? "rgba(0,122,255,0.3)" : "#E1EAF5"}`,
          borderRadius: 10,
          padding: "12px 14px",
          marginBottom: 16,
          cursor: "pointer",
          transition: "border-color 0.2s",
        }}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{
            marginTop: 2,
            accentColor: "#007AFF",
            width: 15,
            height: 15,
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <span
          style={{
            fontSize: 13,
            color: "#475467",
            fontFamily: "var(--font-body)",
            lineHeight: 1.5,
          }}
        >
          Je reconnais avoir lu et accepté les termes du contrat de prestation
          BiDigital.
        </span>
      </label>

      {/* Zone signature */}
      <div style={{ marginBottom: 12 }}>
        <SignatureCanvas onChange={setSignatureData} />
      </div>

      {/* Métadonnées légales */}
      <div
        style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}
      >
        {["IP sauvegardée", "Horodatage", "Email lié", "User-agent"].map(
          (label) => (
            <span
              key={label}
              style={{
                fontSize: 11,
                background: "#F0F9FF",
                color: "#007AFF",
                border: "1px solid rgba(0,122,255,0.15)",
                borderRadius: 20,
                padding: "3px 10px",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
              }}
            >
              {label}
            </span>
          )
        )}
      </div>

      {error && (
        <p
          style={{
            fontSize: 13,
            color: "#EF4444",
            marginBottom: 12,
            fontFamily: "var(--font-body)",
          }}
        >
          {error}
        </p>
      )}

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onBack}
          disabled={loading}
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
            opacity: loading ? 0.5 : 1,
          }}
        >
          <ArrowLeft size={16} /> Retour
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px",
            background: canSubmit
              ? "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)"
              : "#E1EAF5",
            color: canSubmit ? "#FFFFFF" : "#94A3B8",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            border: "none",
            borderRadius: 12,
            cursor: canSubmit ? "pointer" : "not-allowed",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          {loading ? (
            <>
              <Loader2
                size={16}
                style={{ animation: "spin 1s linear infinite" }}
              />{" "}
              Envoi...
            </>
          ) : (
            "Continuer"
          )}
        </button>
      </div>
    </div>
  );
}
