# Page Paiement Stripe — bidigital.fr/paiement

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer `/paiement` avec Stripe Payment Element (mode déféré) permettant d'activer un abonnement mensuel (99€ ou 200€) selon `?offre=vitrine|ecommerce`, avec page de confirmation `/paiement/merci`.

**Architecture:** Page tunnel sans Navbar. Composant client `PaymentForm` initialisé en `mode: "subscription"` (déféré). Au submit : valider via `elements.submit()` → créer Customer+Subscription côté serveur → `confirmPayment` avec le `clientSecret`. Les Price IDs restent côté serveur (non exposés).

**Tech Stack:** Next.js 16 App Router · TypeScript · `stripe@^17` · `@stripe/stripe-js` · `@stripe/react-stripe-js` · Framer Motion · Tailwind CSS v4

---

## File Map

| Fichier | Action | Rôle |
|---------|--------|------|
| `.env.local` | Modifier | Ajouter les 4 variables Stripe |
| `src/app/api/stripe/create-subscription/route.ts` | Créer | POST : mappe `offre` → priceId, crée Customer+Subscription, renvoie `clientSecret` |
| `src/components/sections/PaymentForm.tsx` | Créer | Composant client : sélecteur offre, email, Payment Element, submit |
| `src/app/paiement/page.tsx` | Créer | Page tunnel `/paiement` — importe PaymentForm, pas de Navbar |
| `src/app/paiement/merci/page.tsx` | Créer | Page de confirmation post-paiement |
| `src/app/sitemap.ts` | Modifier | Ajouter `/paiement` (priority 0.3) |

---

### Task 1 : Installer Stripe et configurer les variables d'environnement

**Files:**
- Modify: `package.json` (via npm install)
- Modify: `.env.local`

- [ ] **Étape 1 : Installer les 3 packages Stripe**

Dans le terminal du projet :
```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

Résultat attendu : aucune erreur, les 3 packages apparaissent dans `package.json`.

- [ ] **Étape 2 : Ajouter les variables dans `.env.local`**

Ouvrir `.env.local` et ajouter (en remplaçant par tes vraies clés de test) :

```env
# Stripe — utiliser les clés TEST (pk_test_ / sk_test_) pendant le dev
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXX

# Price IDs — Dashboard Stripe > Catalogue de produits > cliquer le produit > copier l'ID "price_..."
STRIPE_PRICE_VITRINE=price_XXXXXXXXXXXXXX
STRIPE_PRICE_ECOMMERCE=price_XXXXXXXXXXXXXX
```

> Note : `STRIPE_PRICE_*` ne sont PAS préfixés `NEXT_PUBLIC_` — ils restent côté serveur uniquement.

- [ ] **Étape 3 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur.

- [ ] **Étape 4 : Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install stripe dependencies"
```

---

### Task 2 : Créer l'API route `/api/stripe/create-subscription`

**Files:**
- Create: `src/app/api/stripe/create-subscription/route.ts`

- [ ] **Étape 1 : Créer le fichier**

```typescript
// src/app/api/stripe/create-subscription/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_MAP: Record<string, string | undefined> = {
  vitrine: process.env.STRIPE_PRICE_VITRINE,
  ecommerce: process.env.STRIPE_PRICE_ECOMMERCE,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, offre } = body as { email: string; offre: string };

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const priceId = PRICE_MAP[offre];
    if (!priceId) {
      return NextResponse.json({ error: "Offre invalide." }, { status: 400 });
    }

    // Cherche ou crée le Customer Stripe
    const existing = await stripe.customers.list({ email, limit: 1 });
    const customer =
      existing.data[0] ?? (await stripe.customers.create({ email }));

    // Crée la Subscription en mode "incomplete" pour capturer le paiement
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      payment_settings: { save_default_payment_method: "on_subscription" },
      expand: ["latest_invoice.payment_intent"],
    });

    const invoice = subscription.latest_invoice as Stripe.Invoice;
    const paymentIntent = invoice.payment_intent as Stripe.PaymentIntent;

    if (!paymentIntent?.client_secret) {
      return NextResponse.json(
        { error: "Impossible de créer le paiement." },
        { status: 500 }
      );
    }

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur serveur.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
```

- [ ] **Étape 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Si TypeScript se plaint que `new Stripe()` requiert `apiVersion`, remplacer la ligne par :
```typescript
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});
```
(utiliser la version suggérée par l'IDE / le message d'erreur TypeScript)

- [ ] **Étape 3 : Tester la route manuellement**

Démarrer le serveur :
```bash
npm run dev
```

Dans un second terminal (remplacer `price_xxx` par ton vrai Price ID de test) :
```bash
curl -X POST http://localhost:3000/api/stripe/create-subscription \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@test.com\",\"offre\":\"vitrine\"}"
```

Résultat attendu : `{"clientSecret":"pi_xxx_secret_xxx"}`

- [ ] **Étape 4 : Commit**

```bash
git add src/app/api/stripe/create-subscription/route.ts
git commit -m "feat: add Stripe create-subscription API route"
```

---

### Task 3 : Créer le composant PaymentForm

**Files:**
- Create: `src/components/sections/PaymentForm.tsx`

- [ ] **Étape 1 : Créer le fichier**

```tsx
// src/components/sections/PaymentForm.tsx
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

// ── Formulaire interne (hooks Stripe — doit être dans <Elements>) ──────────────

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

    // 1. Valider le Payment Element côté client
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMsg(submitError.message ?? "Erreur de validation.");
      setLoading(false);
      return;
    }

    // 2. Créer la subscription côté serveur → obtenir clientSecret
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

    // 3. Confirmer le paiement — Stripe redirige vers /paiement/merci
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

      {/* Message d'erreur */}
      {errorMsg && (
        <p style={{ fontSize: 14, color: "#ef4444", fontFamily: "var(--font-body)", margin: 0 }}>
          {errorMsg}
        </p>
      )}

      {/* CTA vert */}
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

      {/* Footer sécurité */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <Lock size={13} color="#475467" />
        <span style={{ fontSize: 12, color: "#475467", fontFamily: "var(--font-body)" }}>
          Paiement sécurisé par Stripe · SSL
        </span>
      </div>
    </form>
  );
}

// ── Sélecteur d'offre si ?offre absent ou invalide ────────────────────────────

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

// ── Wrapper (lit searchParams — doit être dans <Suspense>) ────────────────────

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

// ── Export principal ──────────────────────────────────────────────────────────

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
```

- [ ] **Étape 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur.

- [ ] **Étape 3 : Commit**

```bash
git add src/components/sections/PaymentForm.tsx
git commit -m "feat: add PaymentForm component with Stripe Payment Element"
```

---

### Task 4 : Créer la page `/paiement`

**Files:**
- Create: `src/app/paiement/page.tsx`

- [ ] **Étape 1 : Créer le fichier**

```tsx
// src/app/paiement/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import CookieBanner from "@/components/ui/CookieBanner";

const PaymentForm = dynamic(() => import("@/components/sections/PaymentForm"), {
  ssr: false,
});

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
            {/* Logo BiDigital */}
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

            {/* Badge SSL */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "5px 12px",
                borderRadius: 20,
                background: "rgba(0,122,255,0.06)",
                border: "1px solid rgba(0,122,255,0.2)",
                color: "#007AFF",
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "var(--font-body)",
              }}
            >
              🔒 Stripe · Paiement 100% sécurisé SSL
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, #e1eaf5, transparent)",
              marginBottom: 28,
            }}
          />

          {/* Formulaire de paiement */}
          <PaymentForm />
        </div>
      </main>

      <CookieBanner />
    </>
  );
}
```

- [ ] **Étape 2 : Vérifier TypeScript**

```bash
npx tsc --noEmit
```

- [ ] **Étape 3 : Tester visuellement**

Démarrer le serveur si ce n'est pas déjà fait :
```bash
npm run dev
```

Ouvrir dans le navigateur :
- `http://localhost:3000/paiement?offre=vitrine` → doit afficher la card avec "Abonnement Site Vitrine · 99€/mois"
- `http://localhost:3000/paiement?offre=ecommerce` → doit afficher "Abonnement E-commerce · 200€/mois"
- `http://localhost:3000/paiement` → doit afficher le sélecteur d'offre

- [ ] **Étape 4 : Commit**

```bash
git add src/app/paiement/page.tsx
git commit -m "feat: add /paiement page with card layout and trust signals"
```

---

### Task 5 : Créer la page `/paiement/merci`

**Files:**
- Create: `src/app/paiement/merci/page.tsx`

- [ ] **Étape 1 : Créer le fichier**

```tsx
// src/app/paiement/merci/page.tsx
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
```

- [ ] **Étape 2 : Tester visuellement**

Ouvrir `http://localhost:3000/paiement/merci` → card de confirmation avec ✅, titre et bouton retour.

- [ ] **Étape 3 : Commit**

```bash
git add src/app/paiement/merci/page.tsx
git commit -m "feat: add /paiement/merci confirmation page"
```

---

### Task 6 : Mettre à jour le sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Étape 1 : Ajouter `/paiement` au sitemap**

Dans `src/app/sitemap.ts`, ajouter une entrée après les pages existantes :

```typescript
{
  url: "https://www.bidigital.fr/paiement",
  lastModified: new Date(),
  changeFrequency: "yearly",
  priority: 0.3,
},
```

> Note : Ne pas ajouter `/paiement/merci` — cette page n'a pas de valeur SEO.

- [ ] **Étape 2 : Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat: add /paiement to sitemap"
```

---

### Task 7 : Test end-to-end avec une carte de test Stripe

- [ ] **Étape 1 : Aller sur la page de paiement**

```
http://localhost:3000/paiement?offre=vitrine
```

- [ ] **Étape 2 : Remplir le formulaire avec les données de test Stripe**

| Champ | Valeur de test |
|-------|---------------|
| Email | `test@bidigital.fr` |
| Numéro de carte | `4242 4242 4242 4242` |
| Date d'expiration | `12/34` (n'importe quelle date future) |
| CVC | `123` |
| Code postal | `75001` |

- [ ] **Étape 3 : Cliquer sur "Activer mon abonnement →"**

Résultat attendu :
1. Bouton passe en mode "Traitement en cours..."
2. Redirection automatique vers `http://localhost:3000/paiement/merci`
3. Page de confirmation affichée

- [ ] **Étape 4 : Vérifier dans le dashboard Stripe**

Aller sur `dashboard.stripe.com` → Abonnements → vérifier qu'un abonnement actif apparaît pour `test@bidigital.fr`.

- [ ] **Étape 5 : Tester un échec de paiement**

Recommencer avec la carte `4000 0000 0000 0002` (carte refusée).
Résultat attendu : message d'erreur rouge sous le bouton, on reste sur la page.

- [ ] **Étape 6 : Commit final**

```bash
git add -A
git commit -m "feat: complete Stripe payment page implementation"
```

---

## Récapitulatif des URLs

| URL | Comportement |
|-----|-------------|
| `/paiement?offre=vitrine` | Formulaire pré-rempli — 99€/mois |
| `/paiement?offre=ecommerce` | Formulaire pré-rempli — 200€/mois |
| `/paiement` | Sélecteur d'offre |
| `/paiement/merci` | Page de confirmation (accessible après paiement Stripe) |

## Variables d'environnement production

Avant de passer en production, remplacer dans `.env.local` (ou les variables Vercel) :
- `pk_test_` → `pk_live_`
- `sk_test_` → `sk_live_`
- Les Price IDs de test → Price IDs live de ton dashboard Stripe
