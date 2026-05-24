"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function NouveauOnboardingPage() {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [offre, setOffre] = useState("vitrine");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async () => {
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/onboarding/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nom, offre }),
      });
      const data = await res.json();
      setLink(data.url as string);
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const input = (label: string, node: React.ReactNode) => (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#475467", marginBottom: 6 }}>{label}</label>
      {node}
    </div>
  );

  const inputStyle = {
    width: "100%", padding: "11px 14px", border: "1.5px solid #E1EAF5", borderRadius: 10,
    fontSize: 14, color: "#1D2939", background: "#F8FAFC", outline: "none",
    fontFamily: "var(--font-body)", boxSizing: "border-box" as const,
  };

  return (
    <div style={{ minHeight: "100dvh", background: "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 440, background: "#fff", borderRadius: 20, boxShadow: "0 4px 40px rgba(0,0,0,0.07)", padding: "28px 28px 32px" }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 4px" }}>
          Générer un lien onboarding
        </h1>
        <p style={{ fontSize: 13, color: "#94A3B8", margin: "0 0 24px" }}>Crée un lien personnalisé à envoyer à ton client</p>

        {input("Email du client *", <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="client@email.fr" style={inputStyle} />)}
        {input("Prénom + Nom", <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Thomas Dupont" style={inputStyle} />)}
        {input("Offre", (
          <select value={offre} onChange={(e) => setOffre(e.target.value)} style={inputStyle}>
            <option value="vitrine">Site Vitrine Pro — 99 €/mois</option>
            <option value="ecommerce">Site E-commerce Pro — 199 €/mois</option>
          </select>
        ))}

        <button
          onClick={generate}
          disabled={!email || loading}
          style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", cursor: email && !loading ? "pointer" : "not-allowed", background: email ? "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)" : "#E1EAF5", color: email ? "#fff" : "#94A3B8", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-heading)", marginBottom: 16 }}
        >
          {loading ? "Génération..." : "Générer le lien"}
        </button>

        {link && (
          <div style={{ padding: "14px 16px", background: "#F0F9FF", border: "1.5px solid rgba(0,122,255,0.2)", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ flex: 1, fontSize: 13, color: "#007AFF", wordBreak: "break-all" }}>{link}</span>
            <button onClick={copy} style={{ flexShrink: 0, background: "none", border: "none", cursor: "pointer", color: "#007AFF", display: "flex", alignItems: "center" }}>
              {copied ? <Check size={18} color="#22C55E" /> : <Copy size={18} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
