"use client";
import { useState } from "react";
import { ArrowLeft, Loader2, Upload, X } from "lucide-react";
import { Check } from "lucide-react";

interface Props {
  token: string;
  value: string[];
  onChange: (urls: string[]) => void;
  onSubmit: () => void;
  onBack: () => void;
  submitting: boolean;
}

export default function StepPhotos({ token, value, onChange, onSubmit, onBack, submitting }: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = async (files: FileList) => {
    setError(null);
    setUploading(true);
    const urls: string[] = [];
    try {
      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.append("file", file);
        fd.append("token", token);
        fd.append("type", "photo");
        const res = await fetch("/api/onboarding/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Erreur upload");
        urls.push(data.url as string);
      }
      onChange([...value, ...urls]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur upload");
    } finally {
      setUploading(false);
    }
  };

  const remove = (url: string) => onChange(value.filter((u) => u !== url));

  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        Photos disponibles
      </h2>
      <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 20px" }}>Uploadez vos photos (produits, équipe, locaux…) — optionnel</p>

      {value.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {value.map((url) => (
            <div key={url} style={{ position: "relative" }}>
              <img src={url} alt="" style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 8, border: "1.5px solid #E1EAF5" }} />
              <button onClick={() => remove(url)} style={{ position: "absolute", top: -6, right: -6, background: "#EF4444", border: "none", borderRadius: "50%", width: 18, height: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={10} color="#fff" />
              </button>
            </div>
          ))}
        </div>
      )}

      <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "24px 16px", border: "2px dashed #E1EAF5", borderRadius: 12, cursor: "pointer", marginBottom: 20, background: "#F8FAFC" }}>
        <Upload size={20} color="#007AFF" />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#475467" }}>{uploading ? "Envoi en cours..." : "Ajouter des photos"}</span>
        <span style={{ fontSize: 11, color: "#94A3B8" }}>JPG, PNG, WebP — Max 10 Mo chacune</span>
        <input type="file" accept="image/*" multiple style={{ display: "none" }} disabled={uploading} onChange={(e) => { if (e.target.files) handleFiles(e.target.files); }} />
      </label>

      {error && <p style={{ fontSize: 13, color: "#EF4444", marginBottom: 12 }}>{error}</p>}

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={onBack} disabled={submitting} style={{ padding: "13px 18px", borderRadius: 12, border: "1.5px solid #E1EAF5", background: "transparent", color: "#007AFF", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, opacity: submitting ? 0.5 : 1 }}>
          <ArrowLeft size={16} /> Retour
        </button>
        <button onClick={onSubmit} disabled={submitting || uploading} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 12, border: "none", cursor: (submitting || uploading) ? "not-allowed" : "pointer", background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)", color: "#fff", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)", opacity: (submitting || uploading) ? 0.7 : 1 }}>
          {submitting ? <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Envoi...</> : <><Check size={16} /> Terminer</>}
        </button>
      </div>
    </div>
  );
}
