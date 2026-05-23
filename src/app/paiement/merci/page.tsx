import type { Metadata } from "next";
import Link from "next/link";

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
            fontSize: 36,
          }}
        >
          ✅
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
          Paiement confirmé !
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#475467",
            fontFamily: "var(--font-body)",
            lineHeight: 1.6,
            margin: "0 0 32px",
          }}
        >
          Votre abonnement est maintenant actif.
          <br />
          Un email de confirmation vient de vous être envoyé.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "13px 28px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            textDecoration: "none",
            boxShadow: "0 4px 15px rgba(0,122,255,0.3)",
          }}
        >
          Retour sur bidigital.fr
        </Link>
      </div>
    </main>
  );
}
