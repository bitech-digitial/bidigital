# Tunnel Signature + Paiement — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un tunnel de vente en 4 étapes (offre → contrat → signature → Stripe Checkout) qui génère automatiquement un PDF signé et envoie les emails post-paiement.

**Architecture:** Client state React pour les étapes 1-2 (aucun appel API), DB Neon/Prisma créée uniquement à la signature (étape 3), token CUID comme pivot entre DB / Stripe / Resend. Le webhook Stripe déclenche la génération PDF et les emails.

**Tech Stack:** Next.js 16 · Prisma + Neon (PostgreSQL) · @react-pdf/renderer · Resend (existant) · Stripe Checkout · Framer Motion (existant) · Canvas API native

---

## Fichiers créés / modifiés

```
CRÉÉS
├── next.config.ts                                         ← serverExternalPackages pour @react-pdf
├── prisma/schema.prisma                                   ← modèle ContractSession
├── src/lib/db.ts                                          ← Prisma client singleton
├── src/lib/contract-content.ts                            ← clauses du contrat (source unique)
├── src/lib/pdf.tsx                                        ← génération PDF server-side
├── src/lib/email/templates.ts                             ← HTML des emails
├── src/lib/email/send.ts                                  ← fonctions Resend
├── src/app/api/tunnel/sign/route.ts                       ← POST: sauvegarde signature
├── src/app/api/tunnel/create-checkout/route.ts            ← POST: crée CheckoutSession Stripe
├── src/app/api/stripe/tunnel-webhook/route.ts             ← POST: webhook post-paiement
├── src/components/tunnel/SignatureCanvas.tsx              ← canvas natif (souris + doigt)
├── src/components/tunnel/TunnelShell.tsx                  ← wrapper + barre de progression
├── src/components/tunnel/StepOffer.tsx                    ← étape 1
├── src/components/tunnel/StepContract.tsx                 ← étape 2
├── src/components/tunnel/StepSignature.tsx                ← étape 3
├── src/app/tunnel/layout.tsx                              ← layout minimal (robots: noindex)
└── src/app/tunnel/page.tsx                                ← orchestrateur 4 étapes

MODIFIÉS
├── .env.local                                             ← DATABASE_URL + STRIPE_TUNNEL_WEBHOOK_SECRET
├── .gitignore                                             ← ajouter .superpowers/
└── src/components/ui/MobileStickyCTA.tsx                  ← cacher sur /tunnel via usePathname
```

---

## Task 1 : Installer les dépendances + configurer next.config.ts

**Files:**
- Create: `next.config.ts`
- Modify: `.gitignore`

- [ ] **Step 1 : Installer Prisma et @react-pdf/renderer**

```bash
cd "C:/Users/Bilel/Desktop/test/clean/bidigital"
npm install @prisma/client prisma @react-pdf/renderer
```

Résultat attendu : `added N packages` sans erreur.

- [ ] **Step 2 : Créer next.config.ts**

`@react-pdf/renderer` utilise des APIs Node.js que webpack ne peut pas bundler côté client. Cette config l'exclut du bundle serveur de Next.js.

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;
```

- [ ] **Step 3 : Mettre à jour .gitignore**

Ajouter à la fin du fichier `.gitignore` existant :

```
# Brainstorm sessions
.superpowers/
```

- [ ] **Step 4 : Vérifier que le build TypeScript passe**

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur.

- [ ] **Step 5 : Commit**

```bash
git add next.config.ts .gitignore package.json package-lock.json
git commit -m "chore: install prisma + react-pdf, add next.config.ts"
```

---

## Task 2 : Prisma schema + migration Neon

**Files:**
- Create: `prisma/schema.prisma`
- Modify: `.env.local`

- [ ] **Step 1 : Initialiser Prisma**

```bash
npx prisma init
```

Cela crée `prisma/schema.prisma` et ajoute `DATABASE_URL` dans `.env` (pas `.env.local` — voir étape 2).

- [ ] **Step 2 : Ajouter DATABASE_URL dans .env.local**

Connecte-toi sur [console.neon.tech](https://console.neon.tech), crée un projet, copie la connection string.

Ajoute dans `.env.local` :

```bash
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
```

Supprime le fichier `.env` créé par `prisma init` (il ne doit pas exister dans ce projet) :

```bash
rm prisma/.env 2>/dev/null; rm .env 2>/dev/null; echo "done"
```

- [ ] **Step 3 : Écrire le schéma Prisma**

Remplace intégralement `prisma/schema.prisma` :

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DATABASE_URL")
}

model ContractSession {
  id                String    @id @default(cuid())
  token             String    @unique @default(cuid())

  email             String
  nom               String?

  signatureData     String    @db.Text
  ip                String
  userAgent         String
  signedAt          DateTime

  checkoutSessionId String?   @unique
  stripeCustomerId  String?
  paid              Boolean   @default(false)
  paidAt            DateTime?

  createdAt         DateTime  @default(now())
}
```

- [ ] **Step 4 : Lancer la migration**

```bash
npx prisma migrate dev --name init
```

Résultat attendu :
```
✔ Generated Prisma Client
The following migration(s) have been applied: 20260524000000_init
```

- [ ] **Step 5 : Vérifier que la table existe**

```bash
npx prisma studio
```

Ouvre http://localhost:5555 — tu dois voir le modèle `ContractSession`. Ferme avec Ctrl+C.

- [ ] **Step 6 : Commit**

```bash
git add prisma/ .env.local
git commit -m "chore: prisma schema ContractSession + neon migration"
```

---

## Task 3 : Prisma client singleton

**Files:**
- Create: `src/lib/db.ts`

- [ ] **Step 1 : Créer le singleton**

Le pattern globalThis évite de créer plusieurs instances PrismaClient en dev (Next.js recharge les modules en hot-reload).

```ts
// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur.

- [ ] **Step 3 : Commit**

```bash
git add src/lib/db.ts
git commit -m "feat: prisma client singleton"
```

---

## Task 4 : Contenu du contrat (source unique)

**Files:**
- Create: `src/lib/contract-content.ts`

Ce fichier est la source de vérité partagée entre le composant HTML `StepContract` et la génération PDF.

- [ ] **Step 1 : Créer le fichier**

```ts
// src/lib/contract-content.ts

export const CONTRACT_CLAUSES = [
  {
    id: "objet",
    title: "1. Objet du contrat",
    content:
      "BiDigital s'engage à concevoir, développer et maintenir un site web professionnel pour le Client dans le cadre d'un abonnement mensuel. Les prestations comprennent : design sur-mesure, intégration du contenu fourni par le Client, optimisation SEO de base, conformité RGPD, hébergement et nom de domaine.",
  },
  {
    id: "prix",
    title: "2. Prix et modalités de paiement",
    content:
      "L'abonnement est fixé à 100 € TTC par mois, prélevé automatiquement par carte bancaire via la plateforme sécurisée Stripe. Le premier prélèvement intervient à la date de signature du présent contrat. L'abonnement est sans engagement de durée minimale.",
  },
  {
    id: "livraison",
    title: "3. Délai de livraison",
    content:
      "BiDigital s'engage à livrer le site web dans un délai de 15 jours ouvrés à compter de la réception de l'ensemble des éléments nécessaires communiqués par le Client (textes, images, logo, identité visuelle). Tout retard de fourniture des éléments par le Client suspend ce délai.",
  },
  {
    id: "propriete",
    title: "4. Propriété intellectuelle",
    content:
      "Le Client conserve l'intégralité de ses droits sur les contenus qu'il fournit (textes, images, logo, marque). BiDigital conserve la propriété du code source et de l'infrastructure technique. En cas de résiliation, le Client reçoit l'export de ses contenus (textes, images) dans un délai de 30 jours.",
  },
  {
    id: "resiliation",
    title: "5. Résiliation",
    content:
      "Chaque partie peut résilier le présent contrat à tout moment, sans motif, par simple notification écrite à l'adresse contact@bidigital.fr, avec un préavis de 30 jours calendaires. La résiliation prend effet à l'expiration du préavis. Aucun remboursement n'est effectué pour la période en cours.",
  },
  {
    id: "responsabilite",
    title: "6. Responsabilité",
    content:
      "BiDigital s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la disponibilité du site (objectif 99,5 % par mois). BiDigital ne saurait être tenu responsable des dommages indirects, perte de chiffre d'affaires ou manque à gagner. La responsabilité totale de BiDigital est limitée au montant d'un mois d'abonnement en cours.",
  },
  {
    id: "donnees",
    title: "7. Protection des données personnelles",
    content:
      "BiDigital traite les données personnelles du Client conformément au Règlement Général sur la Protection des Données (RGPD). Les données collectées sont utilisées uniquement dans le cadre de l'exécution du présent contrat et ne sont pas transmises à des tiers. Le Client dispose d'un droit d'accès, de rectification et de suppression auprès de contact@bidigital.fr.",
  },
  {
    id: "loi",
    title: "8. Loi applicable et juridiction",
    content:
      "Le présent contrat est soumis au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord amiable dans un délai de 30 jours, le tribunal compétent sera celui du siège social de BiDigital (Chaville, Île-de-France).",
  },
] as const;

export const CONTRACT_META = {
  prestataire: "BiDigital",
  email: "contact@bidigital.fr",
  adresse: "Chaville, Île-de-France, 92370",
  // ⚠️ Remplacer par ton vrai SIRET avant mise en production
  siret: "XXX XXX XXX XXXXX",
};
```

- [ ] **Step 2 : Commit**

```bash
git add src/lib/contract-content.ts
git commit -m "feat: contract clauses content (shared between HTML + PDF)"
```

---

## Task 5 : Génération PDF (@react-pdf/renderer)

**Files:**
- Create: `src/lib/pdf.tsx`

- [ ] **Step 1 : Créer le générateur PDF**

Ce fichier est **server-side uniquement** — ne jamais l'importer dans un Client Component.

```tsx
// src/lib/pdf.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  renderToBuffer,
} from "@react-pdf/renderer";
import { CONTRACT_CLAUSES, CONTRACT_META } from "@/lib/contract-content";

const styles = StyleSheet.create({
  page: { fontFamily: "Helvetica", fontSize: 10, padding: 44, color: "#1D2939" },
  header: { marginBottom: 20, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: "#E1EAF5" },
  logo: { fontSize: 20, fontFamily: "Helvetica-Bold", color: "#007AFF", marginBottom: 3 },
  headerSub: { fontSize: 8.5, color: "#64748B" },
  title: { fontSize: 15, fontFamily: "Helvetica-Bold", color: "#1D2939", marginBottom: 4, textAlign: "center" },
  subtitle: { fontSize: 9, color: "#64748B", textAlign: "center", marginBottom: 22 },
  sectionTitle: { fontSize: 10.5, fontFamily: "Helvetica-Bold", color: "#007AFF", marginBottom: 5, marginTop: 14 },
  sectionText: { fontSize: 9.5, lineHeight: 1.65, color: "#374151" },
  signatureBlock: {
    marginTop: 28,
    padding: 16,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E1EAF5",
    borderRadius: 6,
  },
  signatureTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", marginBottom: 10, color: "#1D2939" },
  signatureMeta: { fontSize: 9, color: "#64748B", marginBottom: 4 },
  signatureImage: { width: 220, height: 80, marginTop: 10, borderWidth: 1, borderColor: "#E1EAF5" },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 44,
    right: 44,
    textAlign: "center",
    fontSize: 7.5,
    color: "#94A3B8",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingTop: 7,
  },
});

interface ContractPDFData {
  email: string;
  nom: string | null;
  signatureData: string;
  ip: string;
  signedAt: Date;
}

function ContractDocument({ email, nom, signatureData, ip, signedAt }: ContractPDFData) {
  const dateStr = signedAt.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>{CONTRACT_META.prestataire}</Text>
          <Text style={styles.headerSub}>
            {CONTRACT_META.email} · {CONTRACT_META.adresse} · SIRET {CONTRACT_META.siret}
          </Text>
        </View>

        <Text style={styles.title}>Contrat de Prestation de Services</Text>
        <Text style={styles.subtitle}>Abonnement mensuel — Site web professionnel · 100 € TTC / mois</Text>

        {CONTRACT_CLAUSES.map((clause) => (
          <View key={clause.id}>
            <Text style={styles.sectionTitle}>{clause.title}</Text>
            <Text style={styles.sectionText}>{clause.content}</Text>
          </View>
        ))}

        <View style={styles.signatureBlock}>
          <Text style={styles.signatureTitle}>Signature électronique du Client</Text>
          <Text style={styles.signatureMeta}>Nom : {nom ?? "Non renseigné"}</Text>
          <Text style={styles.signatureMeta}>Email : {email}</Text>
          <Text style={styles.signatureMeta}>Date et heure : {dateStr}</Text>
          <Text style={styles.signatureMeta}>Adresse IP : {ip}</Text>
          <Image style={styles.signatureImage} src={signatureData} />
        </View>

        <Text style={styles.footer}>
          {CONTRACT_META.prestataire} · {CONTRACT_META.adresse} · {CONTRACT_META.email} —
          Document généré automatiquement le {new Date().toLocaleDateString("fr-FR")}
        </Text>
      </Page>
    </Document>
  );
}

export async function generateContractPDF(data: ContractPDFData): Promise<Buffer> {
  const buffer = await renderToBuffer(<ContractDocument {...data} />);
  return Buffer.from(buffer);
}
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur.

- [ ] **Step 3 : Commit**

```bash
git add src/lib/pdf.tsx
git commit -m "feat: contract PDF generation with @react-pdf/renderer"
```

---

## Task 6 : Templates et envoi d'emails (Resend)

**Files:**
- Create: `src/lib/email/templates.ts`
- Create: `src/lib/email/send.ts`

- [ ] **Step 1 : Créer les templates HTML**

```ts
// src/lib/email/templates.ts

const FEATURES = [
  "Site vitrine sur-mesure",
  "SEO intégré dès le 1er jour",
  "Hébergement + nom de domaine inclus",
  "Mises à jour illimitées",
  "Conformité RGPD complète",
];

export function clientConfirmationHTML(
  nom: string | null,
  email: string,
  signedAt: Date
): string {
  const prenom = nom?.split(" ")[0] ?? "cher client";
  const dateStr = signedAt.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F0F4FA;font-family:'Helvetica Neue',Arial,sans-serif;">
<div style="max-width:580px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

  <!-- Header gradient -->
  <div style="background:linear-gradient(135deg,#00B4D8 0%,#007AFF 55%,#0044CC 100%);padding:32px 40px;">
    <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.02em;">BiDigital</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:4px;">Agence Web — Votre contrat est signé</div>
  </div>

  <!-- Body -->
  <div style="padding:36px 40px;">
    <h1 style="font-size:22px;font-weight:800;color:#1D2939;margin:0 0 12px;letter-spacing:-0.02em;">
      Bienvenue, ${prenom} !
    </h1>
    <p style="font-size:15px;color:#475467;line-height:1.7;margin:0 0 24px;">
      Votre contrat a bien été signé le <strong style="color:#1D2939;">${dateStr}</strong> et votre premier paiement est confirmé. Je suis ravi de vous compter parmi mes clients.
    </p>

    <!-- Offre box -->
    <div style="background:#F0F9FF;border:1px solid rgba(0,122,255,0.15);border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <div style="font-size:11px;font-weight:700;color:#007AFF;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;">Votre abonnement · 100€/mois</div>
      ${FEATURES.map(
        (f) =>
          `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">
            <span style="color:#007AFF;font-weight:700;font-size:13px;">✓</span>
            <span style="font-size:13px;color:#1D2939;">${f}</span>
          </div>`
      ).join("")}
    </div>

    <p style="font-size:15px;color:#475467;line-height:1.7;margin:0 0 24px;">
      Je vous contacte dans les <strong style="color:#1D2939;">24 heures</strong> pour recueillir vos informations et lancer la création de votre site. Préparez vos contenus (textes, logo, photos).
    </p>

    <p style="font-size:13px;color:#94A3B8;margin:0;">
      Votre contrat signé est joint à cet email en pièce jointe PDF.
    </p>
  </div>

  <!-- Footer -->
  <div style="padding:20px 40px;background:#F8FAFC;border-top:1px solid #E1EAF5;text-align:center;">
    <p style="font-size:12px;color:#94A3B8;margin:0;line-height:1.6;">
      BiDigital · Chaville, Île-de-France · 
      <a href="mailto:contact@bidigital.fr" style="color:#007AFF;text-decoration:none;">contact@bidigital.fr</a>
    </p>
  </div>

</div>
</body>
</html>`;
}

export function internalAlertHTML(
  nom: string | null,
  email: string,
  ip: string,
  userAgent: string,
  signedAt: Date,
  stripeCustomerId: string | null
): string {
  const dateStr = signedAt.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:24px;background:#0F172A;font-family:monospace;">
<div style="max-width:580px;margin:0 auto;color:#e2e8f0;">
  <div style="font-size:18px;font-weight:700;color:#00B4D8;margin-bottom:16px;">Nouveau client signé + payé</div>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:7px 0;color:#94a3b8;width:130px;vertical-align:top;">Nom</td><td style="padding:7px 0;color:#f1f5f9;">${nom ?? "Non renseigné"}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;">Email</td><td style="padding:7px 0;color:#f1f5f9;">${email}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;">Signé le</td><td style="padding:7px 0;color:#f1f5f9;">${dateStr}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;vertical-align:top;">IP</td><td style="padding:7px 0;color:#f1f5f9;">${ip}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;vertical-align:top;">User-agent</td><td style="padding:7px 0;color:#f1f5f9;font-size:11px;word-break:break-all;">${userAgent}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;">Stripe ID</td><td style="padding:7px 0;color:#f1f5f9;">${stripeCustomerId ?? "—"}</td></tr>
  </table>
  ${
    stripeCustomerId
      ? `<div style="margin-top:16px;"><a href="https://dashboard.stripe.com/customers/${stripeCustomerId}" style="color:#00B4D8;text-decoration:none;">→ Voir dans Stripe Dashboard</a></div>`
      : ""
  }
</div>
</body>
</html>`;
}
```

- [ ] **Step 2 : Créer les fonctions d'envoi**

```ts
// src/lib/email/send.ts
import { Resend } from "resend";
import { clientConfirmationHTML, internalAlertHTML } from "./templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailSessionData {
  email: string;
  nom: string | null;
  ip: string;
  userAgent: string;
  signedAt: Date;
  stripeCustomerId: string | null;
}

export async function sendClientConfirmationEmail(
  session: EmailSessionData,
  pdfBuffer: Buffer
): Promise<void> {
  const dateTag = session.signedAt
    .toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })
    .replace(/\//g, "-");
  const nomSlug = (session.nom ?? "client").toLowerCase().replace(/\s+/g, "-");

  await resend.emails.send({
    from: "BiDigital <contact@bidigital.fr>",
    to: [session.email],
    subject: "Votre contrat BiDigital signé — bienvenue !",
    html: clientConfirmationHTML(session.nom, session.email, session.signedAt),
    attachments: [
      {
        filename: `contrat-bidigital-${nomSlug}-${dateTag}.pdf`,
        content: pdfBuffer.toString("base64"),
      },
    ],
  });
}

export async function sendInternalAlertEmail(
  session: EmailSessionData
): Promise<void> {
  await resend.emails.send({
    from: "BiDigital <contact@bidigital.fr>",
    to: ["contact@bidigital.fr"],
    subject: `Nouveau client signé — ${session.nom ?? session.email}`,
    html: internalAlertHTML(
      session.nom,
      session.email,
      session.ip,
      session.userAgent,
      session.signedAt,
      session.stripeCustomerId
    ),
  });
}
```

- [ ] **Step 3 : Vérifier le typage**

```bash
npx tsc --noEmit
```

- [ ] **Step 4 : Commit**

```bash
git add src/lib/email/
git commit -m "feat: email templates (client confirmation + internal alert)"
```

---

## Task 7 : API route — POST /api/tunnel/sign

**Files:**
- Create: `src/app/api/tunnel/sign/route.ts`

- [ ] **Step 1 : Créer la route**

```ts
// src/app/api/tunnel/sign/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 500);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans une heure." },
      { status: 429 }
    );
  }

  let body: { email?: string; nom?: string; signatureData?: string; consent?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { email, nom, signatureData, consent } = body;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consentement requis." }, { status: 400 });
  }
  if (!signatureData || !signatureData.startsWith("data:image/png;base64,")) {
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  const session = await db.contractSession.create({
    data: {
      email: sanitize(email),
      nom: nom ? sanitize(nom) : null,
      signatureData,
      ip,
      userAgent: req.headers.get("user-agent") ?? "unknown",
      signedAt: new Date(),
    },
  });

  return NextResponse.json({ token: session.token });
}
```

- [ ] **Step 2 : Tester la route manuellement**

Lance le serveur de dev :
```bash
npm run dev
```

Dans un autre terminal, envoie une requête de test :
```bash
curl -X POST http://localhost:3000/api/tunnel/sign \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","nom":"Jean Test","signatureData":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==","consent":true}'
```

Résultat attendu : `{"token":"cl..."}` (CUID)

- [ ] **Step 3 : Commit**

```bash
git add src/app/api/tunnel/sign/
git commit -m "feat: POST /api/tunnel/sign — save signature to DB"
```

---

## Task 8 : API route — POST /api/tunnel/create-checkout

**Files:**
- Create: `src/app/api/tunnel/create-checkout/route.ts`

- [ ] **Step 1 : Créer la route**

```ts
// src/app/api/tunnel/create-checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export async function POST(req: NextRequest) {
  let body: { token?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { token } = body;

  if (!token) {
    return NextResponse.json({ error: "Token manquant." }, { status: 400 });
  }

  const contractSession = await db.contractSession.findUnique({
    where: { token },
  });

  if (!contractSession) {
    return NextResponse.json({ error: "Session introuvable." }, { status: 404 });
  }

  if (contractSession.paid) {
    return NextResponse.json({ error: "Déjà payé." }, { status: 409 });
  }

  const origin =
    req.headers.get("origin") ??
    req.headers.get("referer")?.replace(/\/$/, "") ??
    "https://bidigital.fr";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer_email: contractSession.email,
    line_items: [{ price: process.env.STRIPE_PRICE_VITRINE!, quantity: 1 }],
    success_url: `${origin}/paiement/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/tunnel`,
    allow_promotion_codes: true,
    metadata: { token },
    subscription_data: { metadata: { token } },
  });

  await db.contractSession.update({
    where: { token },
    data: { checkoutSessionId: checkoutSession.id },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
```

- [ ] **Step 2 : Vérifier le typage**

```bash
npx tsc --noEmit
```

- [ ] **Step 3 : Commit**

```bash
git add src/app/api/tunnel/create-checkout/
git commit -m "feat: POST /api/tunnel/create-checkout — Stripe CheckoutSession"
```

---

## Task 9 : Webhook Stripe post-paiement

**Files:**
- Create: `src/app/api/stripe/tunnel-webhook/route.ts`
- Modify: `.env.local`

- [ ] **Step 1 : Ajouter le secret webhook dans .env.local**

Dans Stripe Dashboard → Developers → Webhooks → Add endpoint :
- URL : `https://bidigital.fr/api/stripe/tunnel-webhook`
- Event : `checkout.session.completed`
- Copie le signing secret.

Ajoute dans `.env.local` :
```bash
STRIPE_TUNNEL_WEBHOOK_SECRET="whsec_..."
```

Pour les tests locaux, installe Stripe CLI :
```bash
stripe listen --forward-to localhost:3000/api/stripe/tunnel-webhook
```

- [ ] **Step 2 : Créer la route webhook**

```ts
// src/app/api/stripe/tunnel-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";
import { generateContractPDF } from "@/lib/pdf";
import {
  sendClientConfirmationEmail,
  sendInternalAlertEmail,
} from "@/lib/email/send";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Signature manquante." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_TUNNEL_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Webhook invalide." }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const checkoutSession = event.data.object as Stripe.Checkout.Session;
  const token = checkoutSession.metadata?.token;

  if (!token) {
    return NextResponse.json({ error: "Token manquant dans metadata." }, { status: 400 });
  }

  const contractSession = await db.contractSession.findUnique({
    where: { token },
  });

  if (!contractSession || contractSession.paid) {
    return NextResponse.json({ received: true });
  }

  await db.contractSession.update({
    where: { token },
    data: {
      paid: true,
      paidAt: new Date(),
      stripeCustomerId: checkoutSession.customer as string | null,
    },
  });

  const pdfBuffer = await generateContractPDF({
    email: contractSession.email,
    nom: contractSession.nom,
    signatureData: contractSession.signatureData,
    ip: contractSession.ip,
    signedAt: contractSession.signedAt,
  });

  const sessionData = {
    email: contractSession.email,
    nom: contractSession.nom,
    ip: contractSession.ip,
    userAgent: contractSession.userAgent,
    signedAt: contractSession.signedAt,
    stripeCustomerId: checkoutSession.customer as string | null,
  };

  await Promise.all([
    sendClientConfirmationEmail(sessionData, pdfBuffer),
    sendInternalAlertEmail(sessionData),
  ]);

  return NextResponse.json({ received: true });
}
```

- [ ] **Step 3 : Vérifier le typage**

```bash
npx tsc --noEmit
```

- [ ] **Step 4 : Commit**

```bash
git add src/app/api/stripe/tunnel-webhook/ .env.local
git commit -m "feat: Stripe webhook — generate PDF + send emails on payment"
```

---

## Task 10 : Composant SignatureCanvas

**Files:**
- Create: `src/components/tunnel/SignatureCanvas.tsx`

- [ ] **Step 1 : Créer le composant canvas natif**

```tsx
// src/components/tunnel/SignatureCanvas.tsx
"use client";
import { useRef, useEffect, useCallback } from "react";

interface SignatureCanvasProps {
  onChange: (dataUrl: string | null) => void;
}

export default function SignatureCanvas({ onChange }: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  const getPos = (e: PointerEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const isEmpty = useCallback((canvas: HTMLCanvasElement): boolean => {
    const ctx = canvas.getContext("2d")!;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    return !Array.from(data).some((v, i) => i % 4 === 3 && v > 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.strokeStyle = "#1D2939";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      isDrawing.current = true;
      canvas.setPointerCapture(e.pointerId);
      const { x, y } = getPos(e, canvas);
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const onMove = (e: PointerEvent) => {
      if (!isDrawing.current) return;
      e.preventDefault();
      const { x, y } = getPos(e, canvas);
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const onUp = (e: PointerEvent) => {
      if (!isDrawing.current) return;
      isDrawing.current = false;
      const { x, y } = getPos(e, canvas);
      ctx.lineTo(x, y);
      ctx.stroke();
      onChange(isEmpty(canvas) ? null : canvas.toDataURL("image/png"));
    };

    canvas.addEventListener("pointerdown", onDown, { passive: false });
    canvas.addEventListener("pointermove", onMove, { passive: false });
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    return () => {
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, [onChange, isEmpty]);

  const clear = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange(null);
  }, [onChange]);

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        width={480}
        height={160}
        style={{
          width: "100%",
          height: 160,
          border: "1.5px dashed #CBD5E1",
          borderRadius: 12,
          background: "#FAFBFC",
          touchAction: "none",
          cursor: "crosshair",
          display: "block",
        }}
      />
      <button
        type="button"
        onClick={clear}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          padding: "4px 10px",
          fontSize: 11,
          fontWeight: 600,
          color: "#94A3B8",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid #E1EAF5",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Effacer
      </button>
    </div>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/tunnel/SignatureCanvas.tsx
git commit -m "feat: SignatureCanvas — native pointer events (mouse + touch)"
```

---

## Task 11 : TunnelShell — wrapper avec barre de progression

**Files:**
- Create: `src/components/tunnel/TunnelShell.tsx`

- [ ] **Step 1 : Créer le composant**

```tsx
// src/components/tunnel/TunnelShell.tsx
"use client";
import { motion } from "framer-motion";

interface TunnelShellProps {
  step: number;
  children: React.ReactNode;
}

const TOTAL = 4;

export default function TunnelShell({ step, children }: TunnelShellProps) {
  const progress = (step / TOTAL) * 100;

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #F0F4FA 0%, #F5F8FC 40%, #FFFFFF 100%)",
        backgroundAttachment: "fixed",
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
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 28px 16px",
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <a
              href="/"
              style={{
                fontWeight: 800,
                fontSize: 18,
                fontFamily: "var(--font-heading)",
                background:
                  "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
              }}
            >
              BiDigital
            </a>
            <span
              style={{
                fontSize: 12,
                color: "#94A3B8",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
              }}
            >
              Étape {step} / {TOTAL}
            </span>
          </div>

          <div
            style={{
              height: 3,
              background: "#F1F5F9",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #00B4D8, #007AFF)",
                borderRadius: 2,
              }}
              initial={{ width: `${((step - 1) / TOTAL) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "28px" }}>{children}</div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/tunnel/TunnelShell.tsx
git commit -m "feat: TunnelShell — progress bar + BiDigital header"
```

---

## Task 12 : StepOffer — étape 1

**Files:**
- Create: `src/components/tunnel/StepOffer.tsx`

- [ ] **Step 1 : Créer le composant**

```tsx
// src/components/tunnel/StepOffer.tsx
import { ArrowRight, Check } from "lucide-react";

const INCLUS = [
  "Site vitrine sur-mesure",
  "Design premium + copywriting",
  "SEO intégré dès le 1er jour",
  "Hébergement + nom de domaine inclus",
  "Mises à jour illimitées",
  "Conformité RGPD complète",
];

interface StepOfferProps {
  nom: string;
  onNext: () => void;
}

export default function StepOffer({ nom, onNext }: StepOfferProps) {
  const prenom = nom.split(" ")[0];

  return (
    <div>
      <h1
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: "#1D2939",
          fontFamily: "var(--font-heading)",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
        }}
      >
        {prenom ? `Bonjour ${prenom} !` : "Votre site web professionnel"}
      </h1>
      <p
        style={{
          fontSize: 14,
          color: "#475467",
          fontFamily: "var(--font-body)",
          margin: "0 0 24px",
          lineHeight: 1.6,
        }}
      >
        Récapitulatif de votre offre avant de commencer
      </p>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#F8FAFC",
          borderRadius: 12,
          border: "1px solid #F1F5F9",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#1D2939",
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.03em",
          }}
        >
          100€
        </div>
        <div
          style={{
            fontSize: 13,
            color: "#94A3B8",
            fontWeight: 500,
            fontFamily: "var(--font-body)",
          }}
        >
          par mois · tout inclus · sans engagement
        </div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
        {INCLUS.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 0",
              fontSize: 14,
              color: "#1D2939",
              fontFamily: "var(--font-body)",
              borderBottom: "1px solid #F8FAFC",
            }}
          >
            <Check size={15} color="#007AFF" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={onNext}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          padding: "14px",
          background:
            "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
          color: "#FFFFFF",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "var(--font-heading)",
          border: "none",
          borderRadius: 12,
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,122,255,0.25)",
        }}
      >
        Continuer <ArrowRight size={18} />
      </button>
    </div>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/tunnel/StepOffer.tsx
git commit -m "feat: StepOffer — étape 1 résumé offre"
```

---

## Task 13 : StepContract — étape 2

**Files:**
- Create: `src/components/tunnel/StepContract.tsx`

- [ ] **Step 1 : Créer le composant**

```tsx
// src/components/tunnel/StepContract.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CONTRACT_CLAUSES } from "@/lib/contract-content";

const ACCENT_COLORS = [
  "#007AFF", "#00B4D8", "#0044CC", "#5B8DEF",
  "#007AFF", "#00B4D8", "#0044CC", "#5B8DEF",
];

interface StepContractProps {
  onNext: () => void;
  onBack: () => void;
}

export default function StepContract({ onNext, onBack }: StepContractProps) {
  return (
    <div>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#1D2939",
          fontFamily: "var(--font-heading)",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
        }}
      >
        Contrat de prestation
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "#94A3B8",
          fontFamily: "var(--font-body)",
          margin: "0 0 20px",
        }}
      >
        Lisez attentivement les conditions avant de signer
      </p>

      <div
        style={{
          maxHeight: 360,
          overflowY: "auto",
          marginBottom: 20,
          paddingRight: 4,
        }}
      >
        {CONTRACT_CLAUSES.map((clause, i) => (
          <div
            key={clause.id}
            style={{
              borderLeft: `3px solid ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`,
              paddingLeft: 14,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#1D2939",
                fontFamily: "var(--font-heading)",
                marginBottom: 6,
              }}
            >
              {clause.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#475467",
                fontFamily: "var(--font-body)",
                lineHeight: 1.7,
              }}
            >
              {clause.content}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "13px 18px",
            background: "transparent",
            color: "#007AFF",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            border: "1.5px solid #E1EAF5",
            borderRadius: 12,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <ArrowLeft size={16} /> Retour
        </button>
        <button
          onClick={onNext}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px",
            background:
              "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)",
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          J&apos;ai lu le contrat <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2 : Commit**

```bash
git add src/components/tunnel/StepContract.tsx
git commit -m "feat: StepContract — contrat HTML scrollable avec sections"
```

---

## Task 14 : StepSignature — étape 3

**Files:**
- Create: `src/components/tunnel/StepSignature.tsx`

- [ ] **Step 1 : Créer le composant**

```tsx
// src/components/tunnel/StepSignature.tsx
"use client";
import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import SignatureCanvas from "./SignatureCanvas";

interface StepSignatureProps {
  email: string;
  nom: string;
  onBack: () => void;
  onSuccess: (token: string) => void;
}

export default function StepSignature({
  email,
  nom,
  onBack,
  onSuccess,
}: StepSignatureProps) {
  const [consent, setConsent] = useState(false);
  const [signatureData, setSignatureData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = consent && signatureData !== null && !loading;

  const handleSubmit = async () => {
    if (!canSubmit || !signatureData) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/tunnel/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nom, signatureData, consent }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        return;
      }
      onSuccess(data.token as string);
    } catch {
      setError("Impossible de contacter le serveur. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#1D2939",
          fontFamily: "var(--font-heading)",
          margin: "0 0 6px",
          letterSpacing: "-0.02em",
        }}
      >
        Signature électronique
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "#94A3B8",
          fontFamily: "var(--font-body)",
          margin: "0 0 20px",
        }}
      >
        Dessinez votre signature ci-dessous
      </p>

      {/* Checkbox consentement */}
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          background: "#F8FAFC",
          border: `1px solid ${consent ? "rgba(0,122,255,0.3)" : "#E1EAF5"}`,
          borderRadius: 10,
          padding: "12px 14px",
          marginBottom: 16,
          cursor: "pointer",
          transition: "border-color 0.2s",
        }}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{
            marginTop: 2,
            accentColor: "#007AFF",
            width: 15,
            height: 15,
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <span
          style={{
            fontSize: 13,
            color: "#475467",
            fontFamily: "var(--font-body)",
            lineHeight: 1.5,
          }}
        >
          Je reconnais avoir lu et accepté les termes du contrat de prestation
          BiDigital.
        </span>
      </label>

      {/* Zone signature */}
      <div style={{ marginBottom: 12 }}>
        <SignatureCanvas onChange={setSignatureData} />
      </div>

      {/* Métadonnées légales */}
      <div
        style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}
      >
        {["IP sauvegardée", "Horodatage", "Email lié", "User-agent"].map(
          (label) => (
            <span
              key={label}
              style={{
                fontSize: 11,
                background: "#F0F9FF",
                color: "#007AFF",
                border: "1px solid rgba(0,122,255,0.15)",
                borderRadius: 20,
                padding: "3px 10px",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
              }}
            >
              {label}
            </span>
          )
        )}
      </div>

      {error && (
        <p
          style={{
            fontSize: 13,
            color: "#EF4444",
            marginBottom: 12,
            fontFamily: "var(--font-body)",
          }}
        >
          {error}
        </p>
      )}

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={onBack}
          disabled={loading}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "13px 18px",
            background: "transparent",
            color: "#007AFF",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            border: "1.5px solid #E1EAF5",
            borderRadius: 12,
            cursor: "pointer",
            flexShrink: 0,
            opacity: loading ? 0.5 : 1,
          }}
        >
          <ArrowLeft size={16} /> Retour
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "13px",
            background: canSubmit
              ? "linear-gradient(135deg, #00B4D8 0%, #007AFF 55%, #0044CC 100%)"
              : "#E1EAF5",
            color: canSubmit ? "#FFFFFF" : "#94A3B8",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
            border: "none",
            borderRadius: 12,
            cursor: canSubmit ? "pointer" : "not-allowed",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          {loading ? (
            <>
              <Loader2
                size={16}
                style={{ animation: "spin 1s linear infinite" }}
              />{" "}
              Envoi...
            </>
          ) : (
            "Signer & Payer →"
          )}
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2 : Ajouter le keyframe spin dans globals.css**

Ouvre `src/app/globals.css` et ajoute à la fin :

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

- [ ] **Step 3 : Commit**

```bash
git add src/components/tunnel/StepSignature.tsx src/app/globals.css
git commit -m "feat: StepSignature — checkbox + canvas + POST /api/tunnel/sign"
```

---

## Task 15 : Tunnel layout + page orchestrateur

**Files:**
- Create: `src/app/tunnel/layout.tsx`
- Create: `src/app/tunnel/page.tsx`
- Modify: `src/components/ui/MobileStickyCTA.tsx`

- [ ] **Step 1 : Créer le layout tunnel**

```tsx
// src/app/tunnel/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace signature — BiDigital",
  robots: { index: false, follow: false },
};

export default function TunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

- [ ] **Step 2 : Masquer MobileStickyCTA sur /tunnel**

Ouvre `src/components/ui/MobileStickyCTA.tsx`. Ajoute en haut du composant (avant le `return`) :

```tsx
"use client";
// ajouter cet import avec les imports existants
import { usePathname } from "next/navigation";

// ajouter au début du composant, avant le return
const pathname = usePathname();
if (pathname.startsWith("/tunnel")) return null;
```

Si le fichier n'est pas encore `"use client"`, ajoute la directive en tête de fichier.

- [ ] **Step 3 : Créer la page orchestrateur**

```tsx
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

function TunnelContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const nom = searchParams.get("nom") ?? "";

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
        return <StepOffer nom={nom} onNext={next} />;
      case 2:
        return <StepContract onNext={next} onBack={back} />;
      case 3:
        return (
          <StepSignature
            email={email}
            nom={nom}
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
```

- [ ] **Step 4 : Vérifier le typage**

```bash
npx tsc --noEmit
```

Résultat attendu : aucune erreur.

- [ ] **Step 5 : Commit**

```bash
git add src/app/tunnel/ src/components/ui/MobileStickyCTA.tsx
git commit -m "feat: tunnel page + layout — orchestrateur 4 étapes"
```

---

## Task 16 : Vérification complète + test manuel

- [ ] **Step 1 : Build de production**

```bash
npm run build
```

Résultat attendu : aucune erreur de build. Les routes `/tunnel`, `/api/tunnel/sign`, `/api/tunnel/create-checkout`, `/api/stripe/tunnel-webhook` doivent apparaître dans la liste.

- [ ] **Step 2 : Test manuel du tunnel complet**

Lance le serveur :
```bash
npm run dev
```

Ouvre : `http://localhost:3000/tunnel?email=ton@email.fr&nom=Ton+Nom`

Checklist :
- [ ] Étape 1 : ton prénom s'affiche dans le titre, prix affiché, bouton Continuer fonctionne
- [ ] Étape 2 : toutes les clauses sont lisibles, scroll fonctionne sur mobile, boutons Retour / J'ai lu fonctionne
- [ ] Étape 3 : checkbox requis avant activation du bouton, canvas fonctionne à la souris, bouton Effacer fonctionne, signature détectée (bouton devient bleu)
- [ ] Barre de progression avance à chaque étape
- [ ] Transitions Framer Motion fonctionnent (glissement latéral)

- [ ] **Step 3 : Test du webhook en local avec Stripe CLI**

Dans un terminal séparé :
```bash
stripe listen --forward-to localhost:3000/api/stripe/tunnel-webhook
```

Déclenche un événement de test :
```bash
stripe trigger checkout.session.completed
```

Résultat attendu dans les logs : `received: true` — et un email envoyé sur ton compte Resend.

- [ ] **Step 4 : Vérifier l'email de confirmation**

Vérifie dans Resend Dashboard → Logs que l'email client a bien été envoyé avec le PDF en pièce jointe.

- [ ] **Step 5 : Commit final**

```bash
git add -A
git commit -m "feat: tunnel signature + paiement — MVP complet"
```

---

## Notes de déploiement

Avant de passer en production :

1. **Remplace le SIRET** dans `src/lib/contract-content.ts`
2. **Crée le webhook Stripe production** sur dashboard.stripe.com → Developers → Webhooks avec l'URL `https://bidigital.fr/api/stripe/tunnel-webhook`
3. **Ajoute les variables d'env sur Vercel** : `DATABASE_URL`, `STRIPE_TUNNEL_WEBHOOK_SECRET`
4. **Active les factures automatiques Stripe** : Dashboard → Settings → Billing → Customer emails → "Send an invoice to customers automatically"
5. **Teste avec une vraie carte** en mode test Stripe avant de passer en mode live
