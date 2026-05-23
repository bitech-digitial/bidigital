"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import { Lock } from "lucide-react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const OFFERS: Record<string, { label: string; amount: number; display: string }> = {
  vitrine: { label: "Abonnement Site Vitrine", amount: 9900, display: "99€" },
  ecommerce: { label: "Abonnement E-commerce", amount: 20000, display: "200€" },
};

const appearance: StripeElementsOptions["appearance"] = {
  theme: "stripe",
  variables: {
    colorPrimary: "#007AFF",
    colorBackground: "#FFFFFF",
    colorText: "#1D2939",
    colorDanger: "#ef4444",
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif",
    borderRadius: "12px",
  },
  rules: {
    ".Input": { border: "1px solid #e1eaf5", boxShadow: "none" },
    ".Input:focus": {
      border: "1px solid #007AFF",
      boxShadow: "0 0 0 3px rgba(0,122,255,0.1)",
    },
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function CheckoutForm({
  offre,
  email,
  setEmail,
}: {
  offre: string;
  email: string;
  setEmail: (v: string) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const offer = OFFERS[offre];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setErrorMsg(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMsg(submitError.message ?? "Erreur de validation.");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/stripe/create-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, offre }),
    });
    const data: { clientSecret?: string; error?: string } = await res.json();

    if (!res.ok || !data.clientSecret) {
      setErrorMsg(data.error ?? "Erreur lors de la création de l'abonnement.");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: data.clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/paiement/merci`,
        receipt_email: email,
      },
    });

    if (error) setErrorMsg(error.message ?? "Paiement refusé.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Récapitulatif offre */}
      <div style={{
        background: "#F0F9FF", border: "1px solid #e1eaf5",
        borderRadius: 12, padding: "16px 20px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <div style={{ fontSize: 12, color: "#475467", fontFamily: "var(--font-body)", marginBottom: 2 }}>
            Votre abonnement
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1D2939", fontFamily: "var(--font-heading)" }}>
            {offer.label}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: "#007AFF", fontFamily: "var(--font-heading)" }}>
            {offer.display}
          </span>
          <span style={{ fontSize: 12, color: "#475467", display: "block" }}>/mois</span>
        </div>
      </div>

      {/* Email */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 14, fontWeight: 600, color: "#1D2939", fontFamily: "var(--font-heading)" }}>
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="vous@exemple.fr"
          style={{
            padding: "12px 14px", border: "1px solid #e1eaf5",
            borderRadius: 10, fontSize: 15, color: "#1D2939",
            fontFamily: "var(--font-body)", outline: "none",
            transition: "border-color 0.2s", background: "#FFFFFF",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#007AFF")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#e1eaf5")}
        />
      </div>

      {/* Stripe Payment Element */}
      <div>
        <label style={{
          display: "block", marginBottom: 8,
          fontSize: 14, fontWeight: 600, color: "#1D2939", fontFamily: "var(--font-heading)",
        }}>
          Informations de paiement
        </label>
        <PaymentElement />
      </div>

      {errorMsg && (
        <p style={{ fontSize: 14, color: "#ef4444", fontFamily: "var(--font-body)", margin: 0 }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !EMAIL_RE.test(email) || !stripe || !elements}
        style={{
          width: "100%", padding: "16px", borderRadius: 14,
          background: loading ? "#86efac" : "#22c55e",
          color: "#FFFFFF", fontSize: 16, fontWeight: 700,
          fontFamily: "var(--font-heading)", border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background 0.2s",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}
        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#16a34a"; }}
        onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#22c55e"; }}
      >
        {loading ? (
          <>
            <span className="animate-spin" style={{
              width: 16, height: 16, display: "inline-block",
              border: "2px solid rgba(255,255,255,0.4)",
              borderTopColor: "#FFFFFF", borderRadius: "50%",
            }} />
            Traitement en cours...
          </>
        ) : "Activer mon abonnement →"}
      </button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <Lock size={13} color="#475467" />
        <span style={{ fontSize: 12, color: "#475467", fontFamily: "var(--font-body)" }}>
          Paiement sécurisé par Stripe · SSL
        </span>
      </div>
    </form>
  );
}

function OfferSelector({ onSelect }: { onSelect: (offre: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <p style={{ fontSize: 15, color: "#475467", fontFamily: "var(--font-body)", margin: 0, textAlign: "center" }}>
        Choisissez votre abonnement :
      </p>
      {Object.entries(OFFERS).map(([key, o]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          style={{
            padding: "16px 20px", borderRadius: 12,
            border: "1px solid #e1eaf5", background: "#F0F9FF",
            cursor: "pointer", display: "flex",
            justifyContent: "space-between", alignItems: "center",
            fontFamily: "var(--font-heading)", transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#007AFF";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,122,255,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e1eaf5";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 700, color: "#1D2939" }}>{o.label}</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#007AFF" }}>
            {o.display}<span style={{ fontSize: 12, fontWeight: 400, color: "#475467" }}>/mois</span>
          </span>
        </button>
      ))}
    </div>
  );
}

function PaymentFormInner() {
  const searchParams = useSearchParams();
  const rawOffre = searchParams.get("offre") ?? "";
  const [offre, setOffre] = useState(rawOffre in OFFERS ? rawOffre : "");
  const [email, setEmail] = useState("");

  const offer = OFFERS[offre];

  if (!offer) {
    return <OfferSelector onSelect={setOffre} />;
  }

  const options: StripeElementsOptions = {
    mode: "subscription",
    amount: offer.amount,
    currency: "eur",
    appearance,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm offre={offre} email={email} setEmail={setEmail} />
    </Elements>
  );
}

export default function PaymentForm() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: "center", color: "#475467", padding: 40 }}>
        Chargement...
      </div>
    }>
      <PaymentFormInner />
    </Suspense>
  );
}
