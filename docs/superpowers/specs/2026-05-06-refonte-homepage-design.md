# Spec — Refonte Homepage bidigital.fr

**Date :** 2026-05-06  
**Inspiration :** local.fr  
**Stack :** Next.js 15 · TypeScript · Tailwind · Framer Motion

---

## Objectif

Refonte de la page d'accueil de bidigital.fr pour améliorer la conversion des TPE/PME, artisans et commerçants. La structure s'inspire de local.fr : réassurance par les chiffres, présentation claire des services, navigation professionnelle avec menus déroulants.

---

## 1. Navbar

### Comportement
- Identique à l'existant : transparente au départ, pill blanche au scroll (backdrop blur)
- Transition douce `max-width`, `border-radius`, `background`

### Structure desktop (remplacement des 4 liens plats)

| Élément | Type | Détail |
|---------|------|--------|
| Logo BiDigital | Lien → `#` | Inchangé |
| **Nos expertises** | Dropdown hover | 2 colonnes : Création de sites (Vitrine / E-commerce / Réservation) + Visibilité (SEO / SEA) |
| **Votre secteur** | Dropdown hover | Grille 3×3 : Bâtiment · Commerce · Restauration · Agriculture · Hébergement · Beauté/Santé · Taxi/VTC · Automobile · Services |
| **Nos réalisations** | Lien direct | `href="#exemples"` |
| **Lancer mon projet** | Bouton CTA | CalButton — inchangé |

### Dropdowns
- Apparition : fade + slide-down (Framer Motion, `duration: 0.2`)
- Fond blanc `#FFFFFF`, bordure `1px solid #e1eaf5`, ombre `0 8px 32px rgba(0,0,0,0.08)`
- Liens : couleur `#1a2a4a`, hover → `#0077B6`
- Fermeture : clic extérieur ou sortie de zone
- Tous les liens secteur/sous-service : `href="#"` (placeholder — pages à créer ultérieurement)

### Mobile
- Burger existant conservé
- Chaque entrée dropdown devient un accordéon dépliable (AnimatePresence)
- CTA WhatsApp + CalButton en bas — inchangés

---

## 2. Hero

### Layout
- Fond blanc avec blobs animés + grille de points — inchangés
- Contenu centré, pleine hauteur viewport

### Texte

**H1 (3 lignes) :**
```
Propulsez votre activité
avec une stratégie digitale
sur mesure.
```
- Ligne 1 : noir `#03045E`
- Ligne 2 : dégradé `#03045E → #0077B6 → #90E0EF`
- Ligne 3 : noir `#03045E`
- Pas de TypewriterWord — texte fixe

**Sous-titre :**
```
Nous accompagnons les artisans, commerçants et dirigeants de PME
dans leur croissance numérique.
```
- Couleur `#4a6080`, sans mention de prix

### CTAs
- "Prendre rendez-vous" (CalButton) — inchangé
- "Nous écrire" (WhatsApp) — inchangé

### Badges de réassurance (sous les CTAs, en ligne)
1. Google ★★★★★ 5/5 — existant, conservé
2. `✓ Satisfait ou remboursé · Livraison en 7 jours`
3. `🔒 Paiement sécurisé · Sans engagement`

### Scroll indicator
- Flèche animée en bas — inchangée

---

## 3. Section Expertises (NOUVEAU)

**Positionnement :** 1ère section après le Hero  
**Fichier :** `src/components/sections/Expertises.tsx`

### Layout
- Fond blanc `#FFFFFF`
- Badge label "NOS EXPERTISES" en haut centré
- H2 : *"Notre savoir-faire digital"*
- Grille 3 colonnes (1 col mobile, 3 col desktop)

### Cartes

| Service | Icône | Description |
|---------|-------|-------------|
| Création de site | `Globe` | "Conception de sites internet performants, adaptés à tous les écrans, pour transformer vos visiteurs en clients." |
| Référencement SEO/SEA | `Search` | "Optimisez votre visibilité sur Google pour apparaître là où vos clients vous cherchent." |
| Réseaux Sociaux | `Share2` | "Animez votre communauté et développez votre notoriété sur les plateformes incontournables." |

Chaque carte : icône + titre + description + lien "En savoir plus →" (`href="#"`)

---

## 4. Section Stats / Chiffres Clés (NOUVEAU)

**Positionnement :** après Expertises  
**Fichier :** `src/components/sections/Stats.tsx`

### Layout
- Fond navy `#03045E`
- 4 compteurs animés au scroll (CountUp déclenché par IntersectionObserver)
- Disposition : 4 colonnes desktop, 2×2 mobile

### Chiffres (placeholders crédibles)

| Chiffre | Libellé |
|---------|---------|
| `100%` | Clients satisfaits |
| `7 jours` | Délai de livraison moyen |
| `3 ans` | D'expertise digitale |
| `24h` | Délai de réponse garanti |

- Chiffres en blanc `#FFFFFF`, grands (`clamp(2.5rem, 5vw, 4rem)`)
- Libellés en `rgba(255,255,255,0.6)`

---

## 5. Section Solutions (NOUVEAU)

**Positionnement :** après Stats  
**Fichier :** `src/components/sections/Solutions.tsx`

### Layout
- Fond blanc `#FFFFFF`
- 2 blocs en alternance image/texte (feature section)
- Animation fade-in au scroll (Framer Motion `whileInView`)

### Bloc 1 — Création de sites
- **Texte à gauche** — titre, description, liste de points, CTA "Découvrir nos réalisations →"
- **Image à droite** — mockup navigateur avec `/images/realisations/site-2.webp`
- Texte : *"Plus qu'un simple site, nous créons votre vitrine numérique. Un design moderne, une navigation fluide et un contenu optimisé pour garantir une expérience utilisateur irréprochable et un taux de conversion maximal."*
- Points : Responsive · SEO inclus · RGPD conforme · Livré en 7 jours

### Bloc 2 — Référencement
- **Image à gauche** — illustration ou `/images/realisations/site-1.webp`
- **Texte à droite** — titre, description, liste de points, CTA "Optimiser ma visibilité →"
- Texte : *"Apparaissez en tête des résultats Google là où vos clients vous cherchent. SEO technique, contenu optimisé et suivi de positions inclus."*
- Points : Audit SEO · Mots-clés ciblés · Rapports mensuels · SEA optionnel

---

## 6. Sections conservées (ordre mis à jour)

| Ordre | Section | Fichier | Modification |
|-------|---------|---------|--------------|
| 6 | Nos Références | `Examples.tsx` | Label badge : "NOS RÉFÉRENCES" (au lieu de "RÉALISATIONS") |
| 7 | Services | `Services.tsx` | Inchangé |
| 8 | Process | `Process.tsx` | Inchangé |
| 9 | Offer | `Offer.tsx` | Inchangé |
| 10 | Contact | `ContactForm.tsx` | Inchangé |
| 11 | FAQ | `FAQ.tsx` | Inchangé |
| 12 | TrustBar | `TrustBar.tsx` | Inchangé |
| 13 | FinalCTA | `FinalCTA.tsx` | Inchangé |

---

## 7. Footer

Modification mineure : ajout des liens de navigation principaux dans la colonne de nav existante.

- Accueil
- Nos expertises (lien vers `#expertises`)
- Nos réalisations (lien vers `#exemples`)
- Services
- FAQ
- Mentions légales · Politique de confidentialité · RGPD — inchangés

---

## 8. Ordre final dans `page.tsx`

```tsx
<Navbar />
<main>
  <Hero />
  <Expertises />       {/* NOUVEAU */}
  <Stats />            {/* NOUVEAU */}
  <Solutions />        {/* NOUVEAU */}
  <Examples />         {/* label mis à jour */}
  <Services />
  <LegalCompliance />
  <Values />
  <Process />
  <Offer />
  <ContactForm />
  <FAQ />
  <TrustBar />
  <FinalCTA />
</main>
<Footer />
<ConversionPopup />
<CookieBanner />
```

---

## Contraintes techniques

- Tous les nouveaux composants sont des `"use client"` avec Framer Motion
- Les dropdowns utilisent `useState` pour l'état hover + `AnimatePresence`
- Les compteurs Stats utilisent un `useEffect` avec `IntersectionObserver` (pas de lib externe)
- Les images Solutions utilisent le composant `Image` de Next.js avec `fill` + `sizes`
- Palette de couleurs : navy `#03045E`, bleu `#0077B6`, fond clair `#F0F9FF`, blanc `#FFFFFF`
- Typographie : `var(--font-heading)` pour titres, `var(--font-body)` pour textes
