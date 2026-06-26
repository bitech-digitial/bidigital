import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const BatimentContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Artisan Bâtiment — Devis en Ligne & SEO Local | BiDigital",
  description:
    "Créez votre site vitrine pour artisan du bâtiment avec BiDigital : maçon, plombier, électricien, peintre. Formulaire de devis, galerie chantiers, SEO local. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/batiment",
  },
  openGraph: {
    title: "Site Web Artisan Bâtiment — Recevez des Devis 24h/24 | BiDigital",
    description:
      "Faites rentrer les demandes de devis pendant que vous êtes sur le chantier. Site vitrine clé-en-main, galerie réalisations, SEO local optimisé pour les artisans du BTP.",
    url: "https://www.bidigital.fr/secteurs/batiment",
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
      "name": "Pourquoi un artisan du bâtiment a besoin d'un site web ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aujourd'hui, 78% des consommateurs recherchent un artisan sur Google avant de contacter quiconque. Sans site web, vous perdez ces clients au profit de vos concurrents. Un site bien référencé génère des demandes de devis en continu, même quand vous êtes sur le chantier."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte un site web pour artisan du bâtiment ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous établissons un devis personnalisé gratuit selon vos besoins et votre zone géographique. Contactez-nous pour une estimation sous 24h, sans engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je ajouter mes photos de chantiers moi-même ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Chaque site intègre un back-office simple pour ajouter ou modifier vos photos de réalisations, vos témoignages clients et vos textes — sans aucune compétence technique. Votre site évolue au rythme de vos chantiers."
      }
    },
    {
      "@type": "Question",
      "name": "Le SEO local est-il vraiment efficace pour le bâtiment ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, et c'est particulièrement puissant pour les artisans car vos clients cherchent toujours à proximité (\"plombier [ville]\", \"électricien [quartier]\"). Nous optimisons votre fiche Google My Business, vos balises locales et vos pages pour dominer ces recherches de proximité."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour créer le site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un site vitrine artisan est généralement livré en 2 à 3 semaines après validation du brief et de vos contenus. Nous vous accompagnons pour collecter les photos, textes et informations nécessaires — aucune expérience technique requise de votre côté."
      }
    }
  ]
};

export default function BatimentPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <BatimentContent />
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
