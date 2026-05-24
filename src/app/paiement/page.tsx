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
        className="min-h-screen flex items-center justify-center px-4 py-10"
        style={{ background: "linear-gradient(180deg, #F0F4FA 0%, #F5F8FC 40%, #FFFFFF 100%)" }}
      >
        <div
          className="w-full max-w-[520px] bg-white rounded-2xl px-5 py-8 sm:px-10 sm:py-10"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}
        >
          <div className="text-center mb-7">
            <a
              href="/"
              className="inline-block font-extrabold text-[22px] no-underline mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              BiDigital
            </a>

            <h1
              className="text-xl sm:text-[22px] font-extrabold m-0 mb-2.5 tracking-tight"
              style={{ color: "#1D2939", fontFamily: "var(--font-heading)" }}
            >
              Paiement sécurisé
            </h1>

            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-[5px] rounded-full text-xs font-semibold"
              style={{
                fontFamily: "var(--font-body)",
                background: "rgba(0,122,255,0.06)",
                border: "1px solid rgba(0,122,255,0.2)",
                color: "#007AFF",
              }}
            >
              <Lock size={12} strokeWidth={2.5} />
              Stripe · Paiement 100% sécurisé SSL
            </span>
          </div>

          <div
            className="h-px mb-7"
            style={{ background: "linear-gradient(90deg, transparent, #e1eaf5, transparent)" }}
          />

          <PaymentForm />
        </div>
      </main>

      <CookieBanner />
    </>
  );
}
