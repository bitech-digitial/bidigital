# BiDigital — Fichier de contexte complet pour Claude

> Créé le 2026-06-28. À mettre à jour après chaque session importante.
> En cas de nouvelle session : lire ce fichier en PREMIER pour avoir tout le contexte.

---

## 1. Présentation du projet

**BiDigital** est une agence web basée à Chaville (92), Île-de-France.
- Site vitrine + commercial en **Next.js 15 (App Router)**
- Propriétaire : Bilel Moussa
- Contact : bilel.moussa.sagemcom@gmail.com
- Téléphone : 07 49 99 94 25
- URL prod : https://bidigital.fr
- Dev local : http://localhost:3000 (ou 3001/3002)

---

## 2. Stack technique

| Élément | Détail |
|---|---|
| Framework | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS v4 + inline styles (design system) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Variable via `next/font` — heading + body |
| Images | WebP manuels dans `public/images/` (pas next/image) |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Cal.com | Intégration réservation |
| Déploiement | Vercel |

---

## 3. Design System (tokens)

```
Navy (titres)   : #191e4f
Blue (accent)   : #0055FF
Cyan (gradient) : #00D2FF
Body (texte)    : #474667
Muted           : #9b9fb9
Background      : #f8faff (sections alternées)
White           : #ffffff (sections principales)

Gradient brand  : linear-gradient(90deg, #0055FF 0%, #00D2FF 100%)
Gradient hero   : linear-gradient(180deg, #f8faff 0%, #eef3ff 60%, #ffffff 100%)

Font heading    : var(--font-heading) — Syne ou similaire
Font body       : var(--font-body) — Inter ou similaire

Border radius cards  : 20px
Border radius badges : 50px (pill)
Section padding : 80px 24px (desktop), adaptatif mobile
```

---

## 4. Pages du site

### Pages principales
| URL | Fichier | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Page d'accueil |
| `/agence` | `src/app/agence/_content.tsx` | Page agence / à propos |
| `/contact` | `src/app/contact/page.tsx` | Contact |
| `/creation-site-internet` | `src/app/creation-site-internet/_content.tsx` | Création site web |
| `/hebergement-web` | `src/app/hebergement-web/_content.tsx` | Hébergement web |
| `/maintenance-site-internet` | `src/app/maintenance-site-internet/_content.tsx` | Maintenance |
| `/referencement-naturel-seo` | `src/app/referencement-naturel-seo/_content.tsx` | SEO |
| `/refonte-site-internet` | `src/app/refonte-site-internet/_content.tsx` | Refonte |
| `/maquette` | `src/app/maquette/` | Maquette gratuite |
| `/mentions-legales` | `src/app/mentions-legales/page.tsx` | Mentions légales |
| `/politique-de-confidentialite` | `src/app/politique-de-confidentialite/page.tsx` | RGPD |

### Pages secteurs (`/secteurs/...` → route `/automobile` etc.)
| URL | Fichier | Description |
|---|---|---|
| `/automobile` | `src/app/secteurs/automobile/_content.tsx` | Secteur automobile |
| `/batiment` | `src/app/secteurs/batiment/_content.tsx` | BTP / artisans |
| `/beaute` | `src/app/secteurs/beaute/_content.tsx` | Beauté & bien-être |
| `/ecommerce` | `src/app/secteurs/ecommerce/_content.tsx` | E-commerce |
| `/hebergement` | `src/app/secteurs/hebergement/_content.tsx` | Hébergement / hôtels |
| `/restauration` | `src/app/secteurs/restauration/_content.tsx` | Restauration |
| `/services` | `src/app/secteurs/services/_content.tsx` | Secteur services |
| `/taxi` | `src/app/secteurs/taxi/_content.tsx` | Taxi / VTC |

### Pages SEO locales (simples)
| URL | Fichier |
|---|---|
| `/agence-web-ile-de-france` | `src/app/agence-web-ile-de-france/page.tsx` |
| `/page-chaville` | `src/app/page-chaville/page.tsx` |

### Pages internes (tunnel, paiement)
- `/nouveau` — onboarding client
- `/paiement` — page de paiement
- `/merci` — confirmation
- `/tunnel` — tunnel de conversion

---

## 5. Composants principaux

### Layout
- `src/components/layout/Navbar.tsx` — Navbar avec menu mobile
- `src/components/layout/Footer.tsx` — Footer (si existe)

### Sections page d'accueil
- `src/components/sections/Hero.tsx` — Hero principal (100vh, centré)
- `src/components/sections/Services.tsx` — Services proposés
- `src/components/sections/Offer.tsx` — Offres / tarifs aperçu
- `src/components/sections/Process.tsx` — Processus de travail
- `src/components/sections/Examples.tsx` — Carrousel réalisations
- `src/components/sections/FAQ.tsx` — FAQ
- `src/components/sections/Expertises.tsx` — Expertises
- `src/components/sections/Values.tsx` — Valeurs
- `src/components/sections/FinalCTA.tsx` — CTA final
- `src/components/sections/ColorBlock.tsx`
- `src/components/sections/ContactForm.tsx`
- `src/components/sections/ContactPageContent.tsx`
- `src/components/sections/LegalCompliance.tsx`
- `src/components/sections/Referencement.tsx`
- `src/components/sections/Solutions.tsx`

### Pricing
- `src/components/sections/Pricing.tsx` — Tableaux de tarifs (Vitrine + E-commerce)

### UI
- `src/components/ui/MobileStickyCTA.tsx` — Barre sticky mobile (WhatsApp + Cal)
- `src/components/ui/CalButton.tsx` — Bouton Cal.com
- `src/components/ui/BackgroundBeams.tsx` — Effet faisceaux lumineux
- `src/components/ui/FloatingShapesLayer.tsx` — Formes flottantes décoratives
- `src/components/ui/SpotlightCard.tsx` — Carte avec spotlight hover

---

## 6. Images utilisées (public/images/)

Toutes en **WebP, max 1920px, qualité 80-90**.

### Génériques (polyvalentes)
| Fichier | Utilisé dans |
|---|---|
| `agence-hero.webp` | `/agence` — section hero |
| `google.webp` | batiment, hebergement — section SEO |
| `google-1.webp` | services — section présence en ligne |
| `confiance.webp` | services — section confiance |
| `photo.webp` | Pricing.tsx — shooting photo offert |

### Secteurs
| Fichier | Utilisé dans |
|---|---|
| `salon-beaute.webp` | beauté — hero |
| `salon-beaute-2.webp` | beauté — réservation |
| `hotel.webp` | hébergement — booking widget |
| `hotel-1.webp` | hébergement — hero |
| `restaurent.webp` | restauration — section 2 |
| `restaurent-1.webp` | restauration — hero |
| `chantier.webp` | batiment — hero |
| `automobile.webp` | automobile — hero |
| `taxi.webp` | taxi — hero |
| `consultant.webp` | services — hero |
| `commerce.webp` | ecommerce — hero |
| `ecommerce.webp` | ecommerce — boutique |
| `hebergement-hero.webp` | hebergement-web — hero page service |
| `hebergement-web-1.webp` | hebergement-web — section 2 |

### Services
| Fichier | Utilisé dans |
|---|---|
| `web-design-new.webp` | refonte — hero section |
| `maintenance-site.webp` | maintenance + refonte — section 2 |
| `maintenance-site-2.webp` | maintenance — section 3 |
| `maintenance.webp` | creation-site-internet — section process |
| `seo.webp` | referencement-seo — section 3 |
| `seo-analytics.webp` | referencement-seo — section 2 |
| `site-internet-2.webp` | referencement-seo — hero |
| `site-internet-new.webp` | creation-site-internet — hero |

### Réalisations
| Fichier | Utilisé dans |
|---|---|
| `realisations/site-1.webp` à `site-13.webp` | `Examples.tsx` — carrousel double |

### Illustrations SVG
- `illustrations/undraw_*.svg` (6 fichiers) — `creation-site-internet/_content.tsx`
- `logos/google.svg` — Navbar ou footer

---

## 7. Classes CSS responsive (globals.css)

Les grilles 2 colonnes créées en inline styles utilisent des classes CSS pour les breakpoints mobiles :

```css
/* Classes à ajouter si manquantes : */
@media (max-width: 767px) {
  .grid-bat-intro,
  .grid-heb-seo,
  .grid-svc-intro,
  .grid-svc-confiance { 
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
}
```

Classes existantes dans globals.css :
- `.contact-main-grid` — grille contact page
- `.contact-form-grid-2` — grille form contact
- `.contact-footer-grid` — footer contact
- `.cards-track` / `.cards-container` — carrousel réalisations
- `.btn-glow` — bouton avec halo
- `.btn-rainbow-border` — bouton border animé
- `.wa-cta-btn` — WhatsApp glow animation
- `.aurora-blob` — blobs aurora hero

---

## 8. Pricing (tarifs actuels)

### Vitrine Essentiel
- Prix : 390€ (au lieu de 790€) + puis 79,90€/mois · sans engagement
- 7 features : Site jusqu'à 5 pages, responsive, SEO de base, RGPD, hébergement+domaine, support email, GMB

### Vitrine Booster
- Prix : 890€ + puis 79,90€/mois · sans engagement
- Tout Essentiel + features avancées (blog, catalogue, stats, copywriting, multi-langues, avis Google)

### Vitrine Sur mesure
- Prix : Sur devis — fonctionnalités personnalisées

### E-commerce Essentiel
- Prix : 790€ + puis 79,90€/mois · sans engagement

### E-commerce Booster
- Prix : 1 690€ + puis 169,90€/mois · sans engagement

### E-commerce Sur mesure
- Prix : Sur devis

### Shooting photo (standalone banner sous les cards)
- INCLUS GRATUITEMENT avec chaque forfait
- Image : `photo.webp`

---

## 9. Choses importantes à respecter

1. **Pas de classes Tailwind dynamiques** — utiliser des inline styles ou des classes fixes pour les valeurs conditionnelles (risque de purge au build)
2. **Titres responsives** — utiliser `clamp(min, vw, max)` pour fontSize
3. **Grilles 2 colonnes** — toujours ajouter une classe CSS avec breakpoint mobile dans `globals.css`
4. **Images** — format WebP, `loading="lazy"` + `decoding="async"` sauf hero (fetchPriority="high")
5. **Pas d'emojis** — utiliser des icons Lucide React à la place
6. **"Satisfait ou remboursé"** — SUPPRIMÉ de partout (mai 2026)
7. **Adresse Chaville** — SUPPRIMÉE des pages légales (confidentialité)
8. **Police téléphone** : 07 49 99 94 25

---

## 10. Dossiers de travail

```
BiDigital/
├── src/
│   ├── app/              — Pages (Next.js App Router)
│   └── components/       — Composants réutilisables
├── public/
│   └── images/           — Images WebP compressées (toutes <300KB)
├── images/
│   ├── new-image/        — Photos source originales (JPG haute résolution)
│   └── photos-site/      — Backup organisé (hero/, secteurs/, services/, generiques/, realisations/)
├── CLAUDE_CONTEXT.md     — CE FICHIER (contexte projet)
└── next.config.ts        — Config Next.js (cache 1an, AVIF+WebP, compression)
```

---

## 11. Dernières modifications importantes (juin 2026)

- Hero page accueil : 100vh, centré verticalement
- Pricing : plans réduits à 7 items max, shooting photo en banner standalone
- Agence : suppression CTA sombre, "Notre mission", 5 nouvelles valeurs
- Secteurs : titres h1/h2 réduits via clamp() sur batiment, restauration, beauté, ecommerce
- Beauté : marquee pills couleur navy (#191e4f) au lieu de blue
- Taxi : simulateur dark style Bolt/Uber (#0F0F1A, vert #34D058)
- Sections 2-col avec images : batiment (google.webp), hebergement (google.webp), services (google-1.webp + confiance.webp)
- Images : 36 inutilisées supprimées, toutes recompressées (−90 à −98%)
- Mentions légales + RGPD : adresse Chaville supprimée

---

## 12. Commandes utiles

```bash
# Démarrer le dev
npm run dev

# Build production
npm run build

# Convertir image en WebP (qualité 80, max 1600px)
node -e "import('sharp').then(async m => { var s = m.default; var fs = require('fs'); var buf = await s(fs.readFileSync('INPUT.jpg')).resize({width:1600,withoutEnlargement:true}).webp({quality:80}).toBuffer(); fs.writeFileSync('public/images/OUTPUT.webp', buf); console.log(Math.round(buf.length/1024)+'KB'); });"
```
