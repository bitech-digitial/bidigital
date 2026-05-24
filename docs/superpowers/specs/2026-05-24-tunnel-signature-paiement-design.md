# Tunnel Signature + Paiement — Design Spec
**Date :** 2026-05-24  
**Projet :** BiDigital — agence web, abonnement 100€/mois  
**Statut :** Approuvé

---

## Contexte

BiDigital vend des sites web sous forme d'abonnement mensuel à 100€/mois. Après un appel commercial, le prospect reçoit un email de devis contenant un lien cliquable vers le tunnel. L'objectif est de transformer un prospect en client signé + payé en 4 étapes, avec un maximum de fluidité et de confiance.

Le tunnel remplace le parcours classique (PDF à imprimer/signer/scanner) par une expérience digitale moderne, mobile-first, style SaaS premium.

---

## Flow complet

```
Email de devis (manuel)
  → lien: https://bidigital.fr/tunnel?email=xxx&nom=xxx

/tunnel
  Étape 1 — Offre       → résumé, prix, inclus, bouton Continuer
  Étape 2 — Contrat     → HTML responsive scrollable par sections
  Étape 3 — Signature   → checkbox consentement + canvas natif
                         → POST /api/tunnel/sign → token en DB
  Étape 4 — Paiement    → POST /api/tunnel/create-checkout
                         → redirect checkout.stripe.com

Stripe Checkout
  → success_url: /paiement/merci?session_id={CHECKOUT_SESSION_ID}
  → cancel_url:  /tunnel
  → webhook: POST /api/stripe/tunnel-webhook
       → marque paid = true en DB
       → génère PDF signé (@react-pdf/renderer)
       → email client (Resend) : bienvenue + PDF en pièce jointe
       → email interne : alerte nouveau client signé
       → facture : envoyée automatiquement par Stripe Dashboard
```

---

## Architecture

### Approche retenue : Client state + DB uniquement à la signature (Approche A)

- Les étapes 1 et 2 sont de la pure UI React (useState, aucun appel API)
- La DB est créée uniquement à l'étape 3 (signature)
- Un token CUID opaque relie la DB, Stripe et Resend
- Si l'utilisateur abandonne avant de signer : aucune trace en DB

### Style visuel : Ultra-minimaliste

- Fond blanc pur
- Barre de progression linéaire en haut (fill gradient bleu)
- Carte blanche centrée max-w-[520px]
- Typographie : Plus Jakarta Sans (heading) + Instrument Sans (body) — déjà en place
- Palette : #007AFF, #1D2939, gradient #00B4D8→#0044CC
- Transitions : Framer Motion `AnimatePresence` entre étapes (déjà installé)
- Mobile-first, gros boutons, zéro friction

---

## Structure des fichiers

### Nouveaux fichiers

```
src/
├── app/
│   ├── tunnel/
│   │   ├── layout.tsx                    ← layout minimal (sans Navbar/Footer/MobileStickyCTA)
│   │   └── page.tsx                      ← orchestrateur tunnel (client component)
│   └── api/
│       └── tunnel/
│           ├── sign/route.ts             ← POST: sauvegarde signature
│           └── create-checkout/route.ts  ← POST: crée Stripe CheckoutSession
│
├── components/
│   └── tunnel/
│       ├── TunnelShell.tsx               ← wrapper (logo + barre de progression)
│       ├── StepOffer.tsx                 ← étape 1: résumé offre
│       ├── StepContract.tsx              ← étape 2: contrat HTML scrollable
│       ├── StepSignature.tsx             ← étape 3: checkbox + canvas + submit
│       └── SignatureCanvas.tsx           ← canvas natif réutilisable
│
└── lib/
    ├── db.ts                             ← Prisma client singleton
    ├── pdf.tsx                           ← génération PDF server-side
    ├── contract-content.ts               ← clauses du contrat (source de vérité)
    └── email/
        ├── templates.ts                  ← HTML des emails (client + interne)
        └── send.ts                       ← fonctions d'envoi Resend
```

### Fichiers modifiés

```
src/app/api/stripe/tunnel-webhook/route.ts   ← nouveau webhook dédié tunnel
prisma/schema.prisma                          ← nouveau modèle ContractSession
.env.local                                    ← STRIPE_TUNNEL_WEBHOOK_SECRET à ajouter
```

### Fichiers inchangés

```
src/app/paiement/page.tsx          ← conservé (accès direct sans tunnel)
src/app/paiement/merci/page.tsx    ← réutilisé comme success_url Stripe
src/app/api/stripe/create-subscription/route.ts  ← conservé
```

---

## Base de données — Prisma + Neon PostgreSQL

### Schéma

```prisma
model ContractSession {
  id                String    @id @default(cuid())
  token             String    @unique @default(cuid())

  // Client
  email             String
  nom               String?

  // Preuve légale de signature
  signatureData     String    @db.Text   // base64 PNG du canvas
  ip                String
  userAgent         String
  signedAt          DateTime

  // Stripe
  checkoutSessionId String?   @unique
  stripeCustomerId  String?
  paid              Boolean   @default(false)
  paidAt            DateTime?

  createdAt         DateTime  @default(now())
}
```

### Variables d'environnement à ajouter

```bash
DATABASE_URL="postgresql://..."           # Neon connection string
STRIPE_TUNNEL_WEBHOOK_SECRET="whsec_..." # webhook dédié tunnel
```

---

## API Routes

### `POST /api/tunnel/sign`

| Champ | Détail |
|---|---|
| Body | `{ email, nom, signatureData, consent }` |
| Validation | email valide, consent === true, signatureData non vide |
| Rate limit | 3 requêtes/h par IP |
| Action | `db.contractSession.create(...)` |
| Réponse | `{ token: string }` |
| Erreurs | 400 (validation), 429 (rate limit), 500 (DB) |

### `POST /api/tunnel/create-checkout`

| Champ | Détail |
|---|---|
| Body | `{ token }` |
| Validation | token valide en DB, `paid === false` |
| Action | `stripe.checkout.sessions.create(...)` + update DB |
| Réponse | `{ url: string }` → redirect côté client |
| Stripe config | `mode: 'subscription'`, prix hardcodé `STRIPE_PRICE_VITRINE`, `metadata: { token }`, `allow_promotion_codes: true` |

### `POST /api/stripe/tunnel-webhook`

| Champ | Détail |
|---|---|
| Sécurité | `stripe.webhooks.constructEvent(body, sig, WEBHOOK_SECRET)` obligatoire |
| Événement | `checkout.session.completed` |
| Action | Update DB → generatePDF → sendClientEmail → sendInternalEmail |
| Idempotence | Vérifie `paid === false` avant traitement (évite double envoi) |

---

## Composants React

### `tunnel/page.tsx`

```tsx
'use client'
// État : step (1-4), email, nom, signatureData, consent, loading
// URL params : ?email=xxx&nom=xxx → pré-remplissage
// Navigation : next() / back() sans routing (tout sur /tunnel)
// Rendu : <TunnelShell step={step}><AnimatePresence>{renderStep()}</AnimatePresence></TunnelShell>
```

### `SignatureCanvas.tsx`

- Canvas API native (pas de lib externe)
- Événements : `pointerdown` / `pointermove` / `pointerup` (souris + doigt)
- Export : `canvas.toDataURL('image/png')` → base64
- Validation : détection canvas vide via `getImageData` (tous pixels transparents = vide)
- Bouton "Effacer" : `ctx.clearRect()`

### `StepContract.tsx`

- Contrat affiché en HTML responsive (sections aérées avec bordure colorée à gauche)
- Bouton "J'ai lu le contrat" sticky en bas sur mobile
- Source : `contract-content.ts` (même fichier que le PDF)

### Transitions Framer Motion

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={step}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2 }}
  />
</AnimatePresence>
```

---

## Génération PDF — `@react-pdf/renderer`

- Rendu server-side uniquement (`renderToBuffer`)
- Structure du PDF : en-tête BiDigital · clauses du contrat · bloc signature (nom, email, IP, horodatage) · image de la signature
- Source partagée avec le HTML : `contract-content.ts`
- Nom du fichier : `contrat-bidigital-[nom]-[date].pdf`

---

## Emails — Resend

### Email client (post-paiement)

- **De :** BiDigital `<contact@bidigital.fr>`
- **Sujet :** `Votre contrat BiDigital signé — bienvenue !`
- **Contenu :** message de bienvenue personnalisé + récapitulatif offre + "je vous contacte dans les 24h"
- **Pièce jointe :** PDF du contrat signé

### Email interne BiDigital (post-paiement)

- **De :** BiDigital `<contact@bidigital.fr>`
- **À :** `contact@bidigital.fr`
- **Sujet :** `Nouveau client signé — [nom] — [email]`
- **Contenu :** nom, email, date/heure, IP, user-agent, ID Stripe customer, lien dashboard Stripe

### Facture Stripe

Envoyée automatiquement par Stripe (configurer dans Stripe Dashboard → Settings → Billing → Invoices → "Send an invoice to customers automatically").

---

## Sécurité

| Point | Mesure |
|---|---|
| Signature HMAC webhook | `stripe.webhooks.constructEvent` obligatoire |
| Token opaque | CUID non devinable, aucune donnée sensible exposée |
| Double paiement | Vérification `paid === false` avant création checkout ET avant traitement webhook |
| Rate limiting | 3 req/h par IP sur `/api/tunnel/sign` |
| Validation inputs | email regex, consent boolean, signatureData non vide, sanitize nom |
| Canvas XSS | `toDataURL()` retourne du base64 PNG — non exécutable |
| Données légales | IP + userAgent + timestamp + base64 signature stockés en DB PostgreSQL |

---

## Librairies à installer

```bash
npm install @prisma/client prisma @react-pdf/renderer
npx prisma init
```

| Librairie | Rôle | Statut |
|---|---|---|
| `prisma` + `@prisma/client` | ORM Neon PostgreSQL | À installer |
| `@react-pdf/renderer` | Génération PDF server-side | À installer |
| `resend` | Envoi emails | ✅ Installé |
| `stripe` | Paiement + webhook | ✅ Installé |
| `framer-motion` | Transitions étapes | ✅ Installé |

---

## Étape 0 — Email de devis (manuel)

Après l'appel commercial, tu envoies manuellement un email de devis avec un lien personnalisé :

```
https://bidigital.fr/tunnel?email=jean.dupont@exemple.fr&nom=Jean
```

Le tunnel pré-remplit automatiquement le champ email et le prénom via `useSearchParams()`. Aucun backend nécessaire pour cette étape.

---

## Hors scope (MVP)

- Dashboard admin pour consulter les contrats signés
- Génération automatique de l'email de devis
- Signature certifiée eIDAS (DocuSign, HelloSign)
- Multi-offres dynamiques dans le tunnel (une seule offre : vitrine 100€/mois)
- Reprise de session si abandon avant signature
