import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const BeauteContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Salon de Beauté — Agenda En Ligne & SEO Local | BiDigital",
  description:
    "Créez votre site beauté & bien-être avec BiDigital : instituts, salons, spas, ongleries. Agenda en ligne, présentation des soins, SEO local. Remplissez votre planning. Devis gratuit.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/beaute",
  },
  openGraph: {
    title: "Site Web Salon Beauté & Bien-Être — Réservation En Ligne | BiDigital",
    description:
      "80 % de vos futurs clients vous cherchent sur Google. BiDigital crée votre site beauté avec agenda en ligne, présentation des soins et SEO local pour remplir votre planning.",
    url: "https://www.bidigital.fr/secteurs/beaute",
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
      "name": "Pourquoi un salon de beauté a besoin d'un site web ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plus de 80% de vos futurs clients vous rechercheront sur Google avant de prendre rendez-vous. Sans site web, vous êtes invisible face à vos concurrents. Un site professionnel avec agenda en ligne génère des réservations 24h/24, même quand vous êtes en cabine."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on intégrer un agenda de réservation en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Nous intégrons un système de prise de rendez-vous directement sur votre site, personnalisé à votre planning et vos prestations. Vos clients réservent en quelques clics, vous recevez une confirmation automatique. Fini les appels manqués."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte un site web pour professionnel de la beauté ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous établissons un devis personnalisé gratuit selon vos prestations, votre univers et votre zone géographique. Contactez-nous pour une estimation sous 24h, sans engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Le SEO local est-il efficace pour les salons et instituts ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, particulièrement. Vos clients cherchent \"salon de coiffure [ville]\", \"massage bien-être [quartier]\" — des recherches très locales. Nous optimisons votre fiche Google My Business, vos pages services et vos balises locales pour que vous apparaissiez en tête de ces recherches."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps pour la création de mon site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un site beauté / bien-être est généralement livré en 2 à 3 semaines après validation du brief. Nous vous guidons pour collecter vos photos, textes et tarifs. Vous recevez un site clé-en-main, prêt à attirer de nouveaux clients dès le premier jour."
      }
    }
  ]
};

export default function BeautePage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <BeauteContent />
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
