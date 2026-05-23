import type { Metadata } from "next";
import { Lock } from "lucide-react";
import PaymentForm from "@/components/sections/PaymentForm";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "Paiement sécurisé — BiDigital",
  description: "Activez votre abonnement BiDigital en toute sécurité via Stripe.",
  robots: { index: false, follow: false },
};

export default function PaiementPage() {
  return (
    <>
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
            maxWidth: 520,
            background: "#FFFFFF",
            borderRadius: 20,
            boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
            padding: "40px 40px 36px",
          }}
        >
          {/* Header de confiance */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                fontWeight: 800,
                fontSize: 22,
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
                marginBottom: 16,
              }}
            >
              BiDigital
            </a>

            <h1
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#1D2939",
                fontFamily: "var(--font-heading)",
                margin: "0 0 10px",
                letterSpacing: "-0.02em",
              }}
            >
              Paiement sécurisé
            </h1>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 20,
                background: "rgba(0,122,255,0.06)",
                border: "1px solid rgba(0,122,255,0.2)",
                color: "#007AFF",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "var(--font-body)",
              }}
            >
              <Lock size={12} strokeWidth={2.5} />
              Stripe · Paiement 100% sécurisé SSL
            </span>
          </div>

          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, #e1eaf5, transparent)",
              marginBottom: 28,
            }}
          />

          <PaymentForm />
        </div>
      </main>

      <CookieBanner />
    </>
  );
}
