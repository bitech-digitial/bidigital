import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const EcommerceContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Création Boutique En Ligne E-commerce — Vendez 24h/24 | BiDigital",
  description:
    "Lancez votre boutique en ligne avec BiDigital : paiement sécurisé, fiches produits illimitées, SEO e-commerce et Google Shopping. Vendez partout en France. Devis gratuit.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/ecommerce",
  },
  openGraph: {
    title: "Boutique E-commerce Sur-Mesure — Paiement Sécurisé & SEO | BiDigital",
    description:
      "Comment vendre en ligne sans dépendre des marketplaces ? BiDigital crée votre boutique e-commerce clé-en-main : CB, PayPal, Apple Pay, Google Shopping inclus. Devis gratuit.",
    url: "https://www.bidigital.fr/secteurs/ecommerce",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte la création d'une boutique en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif varie selon vos besoins (nombre de produits, fonctionnalités, livraison, gestion des stocks) et votre secteur d'activité. Nous établissons un devis personnalisé gratuit pour chaque projet."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je vendre un nombre illimité de produits ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, absolument. Votre boutique en ligne BiDigital vous permet de mettre en ligne autant de produits que nécessaire, classés par catégories et sous-catégories. Chaque fiche produit peut intégrer photos, descriptions, prix, variantes (taille, couleur) et stock disponible."
      }
    },
    {
      "@type": "Question",
      "name": "Quels moyens de paiement puis-je proposer à mes clients ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intégrons tous les moyens de paiement sécurisés : carte bancaire (Visa, Mastercard), PayPal, Apple Pay, Google Pay et virement bancaire. Chaque transaction est sécurisée par un protocole SSL — vos clients paient en toute confiance."
      }
    },
    {
      "@type": "Question",
      "name": "Comment mes produits apparaissent-ils sur Google ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous optimisons chaque fiche produit pour le SEO : balises title, meta descriptions, données structurées Schema.org, URLs propres, images avec balises alt. Vos produits peuvent aussi apparaître dans Google Shopping. Résultat : un trafic organique qualifié, sans payer la publicité."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je gérer ma boutique depuis mon téléphone ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, votre espace d'administration est entièrement responsive. Vous ajoutez des produits, modifiez les prix, traitez les commandes et consultez vos statistiques depuis votre smartphone — à n'importe quel moment. Nous vous formons à l'utilisation lors de la livraison."
      }
    }
  ]
};

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <EcommerceContent />
      </main>
      <Footer />
      <CookieBanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
