import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Paiement confirmé — BiDigital",
  robots: { index: false, follow: false },
};

export default function PaiementMerciPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #F0F4FA 0%, #F5F8FC 40%, #FFFFFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: "#FFFFFF",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          padding: "48px 40px",
          textAlign: "center",
        }}
      >
        {/* Icône succès */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.1)",
            border: "2px solid rgba(34,197,94,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <CheckCircle size={36} color="#22C55E" strokeWidth={1.8} />
        </div>

        {/* Logo */}
        <div
          style={{
            fontWeight: 800,
            fontSize: 18,
            fontFamily: "var(--font-heading)",
            background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 16,
          }}
        >
          BiDigital
        </div>

        <h1
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: "#1D2939",
            fontFamily: "var(--font-heading)",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Bienvenue chez BiDigital !
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#475467",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
            margin: "0 0 8px",
          }}
        >
          Votre paiement a bien été reçu — merci pour votre confiance.
        </p>

        <p
          style={{
            fontSize: 15,
            color: "#475467",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
            margin: "0 0 28px",
          }}
        >
          Vous avez reçu un email avec un lien vers votre questionnaire.{" "}
          <strong style={{ color: "#1D2939" }}>Prenez 5 minutes pour le remplir</strong> — c&apos;est ce qui nous permettra de lancer la création de votre site exactement comme vous le souhaitez.
        </p>
      </div>
    </main>
  );
}
