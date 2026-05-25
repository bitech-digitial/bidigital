// src/components/tunnel/StepOffer.tsx
import { ArrowRight, Check } from "lucide-react";
import { OFFRES, type Offre } from "@/lib/contract-content";

const INCLUS: Record<Offre, string[]> = {
  vitrine: [
    "Site vitrine sur-mesure",
    "Design premium + copywriting",
    "SEO intégré dès le 1er jour",
    "Hébergement + nom de domaine inclus",
    "Mises à jour illimitées avant publication",
    "Conformité RGPD complète",
  ],
  ecommerce: [
    "Boutique en ligne sur-mesure",
    "Design premium + copywriting",
    "SEO e-commerce intégré",
    "Hébergement + nom de domaine inclus",
    "Paiement en ligne Stripe intégré",
    "Mises à jour illimitées avant publication",
    "Conformité RGPD complète",
  ],
};

interface StepOfferProps {
  nom: string;
  offre: Offre;
  onNext: () => void;
}

function dateIn60Days(): string {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function StepOffer({ nom, offre, onNext }: StepOfferProps) {
  const prenom = nom.split(" ")[0];
  const o = OFFRES[offre];
  const debutFacturation = dateIn60Days();

  return (
    <div>
      <h1
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: "#1D2939",
          fontFamily: "var(--font-heading)",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
        }}
      >
        {prenom ? `Bonjour ${prenom} !` : "Votre site web professionnel"}
      </h1>
      <p
        style={{
          fontSize: 14,
          color: "#475467",
          fontFamily: "var(--font-body)",
          margin: "0 0 24px",
          lineHeight: 1.6,
        }}
      >
        Récapitulatif de votre offre avant de commencer
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "10px 16px",
          background: "#ECFDF5",
          border: "1px solid #6EE7B7",
          borderRadius: 10,
          marginBottom: 16,
          fontSize: 13,
          fontWeight: 700,
          color: "#065F46",
          fontFamily: "var(--font-body)",
        }}
      >
        <span>🎁</span>
        <span>2 mois offerts — 0 € prélevé aujourd&apos;hui</span>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#F8FAFC",
          borderRadius: 12,
          border: "1px solid #F1F5F9",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#007AFF",
            fontFamily: "var(--font-body)",
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {o.label}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 800,
            color: "#065F46",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.03em",
            marginBottom: 6,
          }}
        >
          60 jours gratuits
        </div>
        <div
          style={{
            fontSize: 13,
            color: "#475467",
            fontWeight: 500,
            fontFamily: "var(--font-body)",
          }}
        >
          Puis {o.prix}/mois à partir du {debutFacturation}
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
        {INCLUS[offre].map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              fontSize: 14,
              color: "#1D2939",
              fontFamily: "var(--font-body)",
              borderBottom: "1px solid #F8FAFC",
            }}
          >
            <Check size={15} color="#007AFF" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>

      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "#64748B",
          fontFamily: "var(--font-body)",
          margin: "0 0 14px",
        }}
      >
        Carte bancaire enregistrée maintenant · premier prélèvement dans 2 mois
      </p>

      <button
        onClick={onNext}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          padding: "14px",
          background:
            "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
          color: "#FFFFFF",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "var(--font-heading)",
          border: "none",
          borderRadius: 12,
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,122,255,0.25)",
        }}
      >
        Continuer <ArrowRight size={18} />
      </button>
    </div>
  );
}
