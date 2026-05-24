// src/components/tunnel/StepOffer.tsx
import { ArrowRight, Check } from "lucide-react";
import { OFFRES, type Offre } from "@/lib/contract-content";

const INCLUS: Record<Offre, string[]> = {
  vitrine: [
    "Site vitrine sur-mesure",
    "Design premium + copywriting",
    "SEO intégré dès le 1er jour",
    "Hébergement + nom de domaine inclus",
    "Mises à jour illimitées",
    "Conformité RGPD complète",
  ],
  ecommerce: [
    "Boutique en ligne sur-mesure",
    "Design premium + copywriting",
    "SEO e-commerce intégré",
    "Hébergement + nom de domaine inclus",
    "Paiement en ligne Stripe intégré",
    "Mises à jour illimitées",
    "Conformité RGPD complète",
  ],
};

interface StepOfferProps {
  nom: string;
  offre: Offre;
  onNext: () => void;
}

export default function StepOffer({ nom, offre, onNext }: StepOfferProps) {
  const prenom = nom.split(" ")[0];
  const o = OFFRES[offre];

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
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {o.label}
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#1D2939",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.03em",
          }}
        >
          {o.prix}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "#94A3B8",
            fontWeight: 500,
            fontFamily: "var(--font-body)",
          }}
        >
          par mois · engagement 12 mois · {o.total} total
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
