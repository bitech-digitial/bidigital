# Spec : Page Paiement Stripe — bidigital.fr/paiement

**Date :** 2026-05-23  
**Statut :** Validé  
**Stack :** Next.js App Router · TypeScript · Stripe Payment Element · Framer Motion

---

## 1. Objectif

Créer une page de paiement dédiée `bidigital.fr/paiement` permettant aux clients BiDigital d'activer leur abonnement mensuel (99€ ou 200€) via Stripe, avec une expérience qui inspire confiance et redirige vers une page de confirmation post-paiement.

---

## 2. Architecture des fichiers

```
src/app/paiement/
  ├── page.tsx                        ← page tunnel (pas de Navbar)
  └── merci/
      └── page.tsx                    ← confirmation post-paiement

src/app/api/stripe/
  └── create-subscription/
      └── route.ts                    ← POST : crée Customer + Subscription Stripe

src/components/sections/
  └── PaymentForm.tsx                 ← composant "use client" avec Payment Element
```

---

## 3. Paramètre URL & offres

| URL | Offre | Price ID Stripe | Montant |
|-----|-------|-----------------|---------|
| `/paiement?offre=vitrine` | Abonnement Site Vitrine | `STRIPE_PRICE_VITRINE` | 99€ / mois |
| `/paiement?offre=ecommerce` | Abonnement E-commerce | `STRIPE_PRICE_ECOMMERCE` | 200€ / mois |

Si `?offre` est absent ou invalide → afficher les deux options à sélectionner dans la card.

---

## 4. Variables d'environnement requises

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_VITRINE=price_...
STRIPE_PRICE_ECOMMERCE=price_...
```

Pour les tests, utiliser les clés `pk_test_` / `sk_test_` et des Price IDs de test.

---

## 5. Design visuel

### Page `/paiement`

- **Fond :** dégradé `#F0F4FA → #F5F8FC` (identique au body du site), plein écran, pas de Navbar
- **Card centrale :** fond `#FFFFFF`, `border-radius: 20px`, `box-shadow` léger, `max-width: 520px`, centrée verticalement et horizontalement, padding `40px`

**Contenu de la card (dans l'ordre) :**

1. **Header de confiance**
   - Logo BiDigital (texte gradient existant `#00B4D8 → #007AFF → #0044CC`)
   - Titre : "Paiement sécurisé" — `font-heading`, `font-weight: 800`
   - Badge SSL : `🔒 Stripe · Paiement 100% sécurisé` — fond `rgba(0,122,255,0.06)`, border `rgba(0,122,255,0.2)`, couleur `#007AFF`

2. **Récapitulatif offre**
   - Bloc `#F0F9FF`, border `#e1eaf5`, `border-radius: 12px`
   - Nom de l'offre (ex: "Abonnement Site Vitrine") — `font-heading`, `font-weight: 700`
   - Montant en grand (ex: "99€") + "/mois" — accent `#007AFF`

3. **Champ Email**
   - Label "Email" + input standard
   - Border `#e1eaf5`, focus border `#007AFF`, `border-radius: 10px`

4. **Stripe Payment Element**
   - Thème `"stripe"` avec `appearance` personnalisée :
     - `colorPrimary: "#007AFF"`
     - `colorBackground: "#F0F9FF"`
     - `borderRadius: "12px"`
     - `fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"`

5. **CTA**
   - Bouton vert `#22c55e` (universellement associé à la validation)
   - Texte : "Activer mon abonnement →"
   - Pleine largeur, `border-radius: 14px`, `padding: 16px`
   - État loading : spinner + texte "Traitement en cours..."
   - État erreur : message d'erreur Stripe affiché en rouge sous le bouton

6. **Footer card**
   - Logos SVG Visa / Mastercard / CB
   - Texte discret : "Paiement sécurisé par Stripe" — couleur `#475467`

### Page `/paiement/merci`

- Même fond que `/paiement`
- Card centrée avec :
  - Icône ✅ vert animée (Framer Motion scale-in)
  - Titre : "Paiement confirmé !"
  - Sous-titre : "Un email de confirmation vient de vous être envoyé."
  - Bouton retour : "Retour sur bidigital.fr" → href="/"

---

## 6. Flux technique Stripe

```
Client                    PaymentForm.tsx           route.ts (serveur)        Stripe
  │                              │                         │                     │
  │── saisit email + carte ─────>│                         │                     │
  │── clique "Activer" ─────────>│                         │                     │
  │                              │── POST /api/stripe ────>│                     │
  │                              │   { email, priceId }    │── createCustomer ──>│
  │                              │                         │── createSubscription>│
  │                              │<── { clientSecret } ────│                     │
  │                              │── confirmPayment ───────────────────────────>│
  │                              │   { return_url: /paiement/merci }             │
  │<── redirect /paiement/merci ─│                         │                     │
```

### Détail de la route `/api/stripe/create-subscription`

**Méthode :** `POST`  
**Body :** `{ email: string, priceId: string }`  
**Réponse :** `{ clientSecret: string }`

Logique serveur :
1. Rechercher un Customer existant par email via `stripe.customers.list({ email })`
2. Si absent → `stripe.customers.create({ email })`
3. `stripe.subscriptions.create({ customer: customer.id, items: [{ price: priceId }], payment_behavior: "default_incomplete", expand: ["latest_invoice.payment_intent"] })`
4. Extraire le `clientSecret` du `PaymentIntent` et le retourner

### Confirmation côté client

```ts
const { error } = await stripe.confirmPayment({
  elements,
  confirmParams: {
    return_url: `${window.location.origin}/paiement/merci`,
    receipt_email: email,
  },
});
```

---

## 7. Gestion des erreurs

| Cas | Comportement |
|-----|-------------|
| Carte refusée | Message d'erreur Stripe affiché sous le bouton, reste sur la page |
| Email invalide | Validation front avant appel API |
| `?offre` invalide | Sélecteur d'offre affiché dans la card |
| Erreur serveur | Message générique "Une erreur est survenue, veuillez réessayer" |

---

## 8. Ce qui n'est PAS dans le scope V1

- Webhook Stripe (gestion des renouvellements, échecs de paiement)
- Portail client Stripe (modification de carte, annulation)
- Authentification / espace client BiDigital
- Plusieurs devises
