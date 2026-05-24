// src/app/tunnel/page.tsx
"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import TunnelShell from "@/components/tunnel/TunnelShell";
import StepOffer from "@/components/tunnel/StepOffer";
import StepContract from "@/components/tunnel/StepContract";
import StepSignature from "@/components/tunnel/StepSignature";
import type { Offre } from "@/lib/contract-content";

function TunnelContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const nom = searchParams.get("nom") ?? "";
  const offreParam = searchParams.get("offre");
  const offre: Offre = offreParam === "ecommerce" ? "ecommerce" : "vitrine";

  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleSigned = async (token: string) => {
    setStep(4);
    setError(null);

    try {
      const res = await fetch("/api/tunnel/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error ?? "Erreur lors de la création du paiement.");
        setStep(3);
        return;
      }

      window.location.href = data.url as string;
    } catch {
      setError("Impossible de contacter le serveur. Réessayez.");
      setStep(3);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOffer nom={nom} offre={offre} onNext={next} />;
      case 2:
        return <StepContract offre={offre} onNext={next} onBack={back} />;
      case 3:
        return (
          <StepSignature
            email={email}
            nom={nom}
            offre={offre}
            onBack={back}
            onSuccess={handleSigned}
          />
        );
      case 4:
        return (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Loader2
              size={32}
              color="#007AFF"
              style={{
                animation: "spin 1s linear infinite",
                display: "block",
                margin: "0 auto 16px",
              }}
            />
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#1D2939",
                fontFamily: "var(--font-heading)",
                margin: "0 0 6px",
              }}
            >
              Redirection vers le paiement...
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#94A3B8",
                fontFamily: "var(--font-body)",
              }}
            >
              Vous allez être redirigé vers Stripe
            </p>
            {error && (
              <p
                style={{
                  fontSize: 13,
                  color: "#EF4444",
                  marginTop: 16,
                  fontFamily: "var(--font-body)",
                }}
              >
                {error}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <TunnelShell step={Math.min(step, 4)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </TunnelShell>
  );
}

export default function TunnelPage() {
  return (
    <Suspense>
      <TunnelContent />
    </Suspense>
  );
}
