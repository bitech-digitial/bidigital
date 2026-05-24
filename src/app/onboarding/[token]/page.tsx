"use client";
import { useState, use } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OnboardingShell from "@/components/onboarding/OnboardingShell";
import StepObjectif from "@/components/onboarding/steps/StepObjectif";
import StepStyle from "@/components/onboarding/steps/StepStyle";
import StepCouleurs from "@/components/onboarding/steps/StepCouleurs";
import StepLogo from "@/components/onboarding/steps/StepLogo";
import StepInspirations from "@/components/onboarding/steps/StepInspirations";
import StepPages from "@/components/onboarding/steps/StepPages";
import StepPhotos from "@/components/onboarding/steps/StepPhotos";
import { CheckCircle } from "lucide-react";

const TOTAL = 7;

interface CouleurData { primaire: string; secondaire: string; notes: string; }

export default function OnboardingPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);

  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [objectif, setObjectif] = useState("");
  const [styleVisuel, setStyleVisuel] = useState("");
  const [couleurs, setCouleurs] = useState<CouleurData>({ primaire: "#007AFF", secondaire: "#1D2939", notes: "" });
  const [logoUrl, setLogoUrl] = useState("");
  const [inspirations, setInspirations] = useState<string[]>(["", "", ""]);
  const [pages, setPages] = useState<string[]>([]);
  const [photosUrls, setPhotosUrls] = useState<string[]>([]);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch("/api/onboarding/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, objectif, styleVisuel, couleurs, logoUrl: logoUrl || null, inspirations: inspirations.filter(Boolean), pages, photosUrls }),
      });
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div style={{ minHeight: "100dvh", background: "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 400 }}>
          <CheckCircle size={56} color="#22C55E" strokeWidth={1.5} style={{ margin: "0 auto 20px" }} />
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "#1D2939", fontFamily: "var(--font-heading)", margin: "0 0 10px" }}>
            Merci, c&apos;est parfait !
          </h1>
          <p style={{ fontSize: 15, color: "#475467", lineHeight: 1.7, margin: 0 }}>
            On a tout ce qu&apos;il faut pour commencer votre site. Vous recevrez un message de notre équipe très bientôt.
          </p>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (step) {
      case 1: return <StepObjectif value={objectif} onChange={setObjectif} onNext={next} />;
      case 2: return <StepStyle value={styleVisuel} onChange={setStyleVisuel} onNext={next} onBack={back} />;
      case 3: return <StepCouleurs value={couleurs} onChange={setCouleurs} onNext={next} onBack={back} />;
      case 4: return <StepLogo token={token} value={logoUrl} onChange={setLogoUrl} onNext={next} onBack={back} />;
      case 5: return <StepInspirations value={inspirations} onChange={setInspirations} onNext={next} onBack={back} />;
      case 6: return <StepPages value={pages} onChange={setPages} onNext={next} onBack={back} />;
      case 7: return <StepPhotos token={token} value={photosUrls} onChange={setPhotosUrls} onSubmit={handleSubmit} onBack={back} submitting={submitting} />;
      default: return null;
    }
  };

  return (
    <OnboardingShell step={step} total={TOTAL}>
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
    </OnboardingShell>
  );
}
