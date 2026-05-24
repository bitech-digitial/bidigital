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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
      {/* Récapitulatif offre */}
      <div
        className="rounded-xl p-4 sm:p-5 flex justify-between items-center gap-3 flex-wrap"
        style={{ background: "#F0F9FF", border: "1px solid #e1eaf5" }}
      >
        <div className="min-w-0">
          <div
            className="text-xs mb-0.5"
            style={{ color: "#475467", fontFamily: "var(--font-body)" }}
          >
            Création de site internet
          </div>
          <div
            className="text-[15px] font-bold leading-snug"
            style={{ color: "#1D2939", fontFamily: "var(--font-heading)" }}
          >
            {offer.label}
          </div>
        </div>
        <div className="flex items-baseline gap-1 shrink-0">
          <span
            className="text-2xl sm:text-[28px] font-extrabold"
            style={{ color: "#007AFF", fontFamily: "var(--font-heading)" }}
          >
            {offer.display}
          </span>
          <span className="text-xs" style={{ color: "#475467" }}>/mois</span>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-semibold"
          style={{ color: "#1D2939", fontFamily: "var(--font-heading)" }}
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="vous@exemple.fr"
          className="pay-input w-full px-3.5 py-3 rounded-[10px] text-[15px] bg-white"
          style={{
            border: "1px solid #e1eaf5",
            color: "#1D2939",
            fontFamily: "var(--font-body)",
          }}
        />
      </div>

      {/* Stripe Payment Element */}
      <div>
        <label
          className="block mb-2 text-sm font-semibold"
          style={{ color: "#1D2939", fontFamily: "var(--font-heading)" }}
        >
          Informations de paiement
        </label>
        <PaymentElement />
      </div>

      {errorMsg && (
        <p
          className="text-sm m-0"
          style={{ color: "#ef4444", fontFamily: "var(--font-body)" }}
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !EMAIL_RE.test(email) || !stripe || !elements}
        className="pay-submit w-full py-4 rounded-[14px] text-base font-bold border-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: loading ? "#86efac" : "#22c55e",
          color: "#FFFFFF",
          fontFamily: "var(--font-heading)",
          cursor: loading ? "not-allowed" : "pointer",
          minHeight: 52,
        }}
      >
        {loading ? (
          <>
            <span
              className="animate-spin inline-block rounded-full shrink-0"
              style={{
                width: 16,
                height: 16,
                border: "2px solid rgba(255,255,255,0.4)",
                borderTopColor: "#FFFFFF",
              }}
            />
            Traitement en cours...
          </>
        ) : (
          "Payer"
        )}
      </button>

      <div className="flex items-center justify-center gap-1.5">
        <Lock size={13} color="#475467" strokeWidth={2.5} />
        <span
          className="text-xs"
          style={{ color: "#475467", fontFamily: "var(--font-body)" }}
        >
          Paiement 100% sécurisé · Stripe · SSL
        </span>
      </div>
    </form>
  );
}

function OfferSelector({ onSelect }: { onSelect: (offre: string) => void }) {
  return (
    <div className="flex flex-col gap-3">
      <p
        className="text-[15px] text-center m-0"
        style={{ color: "#475467", fontFamily: "var(--font-body)" }}
      >
        Choisissez votre abonnement :
      </p>
      {Object.entries(OFFERS).map(([key, o]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className="pay-offer-btn w-full px-4 sm:px-5 py-4 rounded-xl flex justify-between items-center gap-3 cursor-pointer"
          style={{
            background: "#F0F9FF",
            border: "1px solid #e1eaf5",
            fontFamily: "var(--font-heading)",
          }}
        >
          <span
            className="text-[15px] font-bold text-left"
            style={{ color: "#1D2939" }}
          >
            {o.label}
          </span>
          <span className="flex items-baseline gap-1 shrink-0">
            <span className="text-lg font-extrabold" style={{ color: "#007AFF" }}>
              {o.display}
            </span>
            <span className="text-xs font-normal" style={{ color: "#475467" }}>
              /mois
            </span>
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
    <Suspense
      fallback={
        <div
          className="text-center py-10"
          style={{ color: "#475467" }}
        >
          Chargement...
        </div>
      }
    >
      <PaymentFormInner />
    </Suspense>
  );
}
