"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Upload, X } from "lucide-react";

interface Props {
  token: string;
  value: string;
  onChange: (url: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepLogo({ token, value, onChange, onNext, onBack }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("token", token);
      fd.append("type", "logo");
      const res = await fetch("/api/onboarding/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erreur upload");
      onChange(data.url as string);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Votre logo
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>PNG, SVG ou JPG — si vous n&apos;en avez pas, on passe à l&apos;étape suivante</p>

      {value ? (
        <div style={{ position: "relative", marginBottom: 20 }}>
          <img src={value} alt="Logo" style={{ maxHeight: 80, maxWidth: "100%", borderRadius: 8, border: "1.5px solid #E1EAF5" }} />
          <button onClick={() => onChange("")} style={{ position: "absolute", top: -8, right: -8, background: "#EF4444", border: "none", borderRadius: "50%", width: 22, height: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={12} color="#fff" />
          </button>
        </div>
      ) : (
        <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "32px 16px", border: "2px dashed #E1EAF5", borderRadius: 12, cursor: "pointer", marginBottom: 20, background: "#F8FAFC", transition: "border-color 0.2s" }}>
          <Upload size={24} color="#007AFF" />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#475467" }}>{uploading ? "Envoi en cours..." : "Cliquez pour uploader votre logo"}</span>
          <span style={{ fontSize: 11, color: "#94A3B8" }}>Max 10 Mo</span>
          <input type="file" accept="image/*,.svg" style={{ display: "none" }} disabled={uploading} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        </label>
      )}

      {error && <p style={{ fontSize: 13, color: "#EF4444", marginBottom: 12 }}>{error}</p>}

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={onBack} style={{ padding: "13px 18px", borderRadius: 12, border: "1.5px solid #E1EAF5", background: "transparent", color: "#007AFF", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          <ArrowLeft size={16} /> Retour
        </button>
        <button onClick={onNext} disabled={uploading} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 12, border: "none", cursor: uploading ? "not-allowed" : "pointer", background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)", color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)" }}>
          {value ? "Continuer" : "Passer"} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
