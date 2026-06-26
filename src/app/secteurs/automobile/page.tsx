import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AutomobileContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Garage & Automobile — RDV En Ligne & SEO Local | BiDigital",
  description:
    "Créez le site de votre garage, carrosserie ou concession avec BiDigital : prise de RDV en ligne, catalogue véhicules, SEO local. Transformez chaque recherche Google en client.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/automobile",
  },
  openGraph: {
    title: "Site Web Garage & Automobile — Plus de Clients Via Google | BiDigital",
    description:
      "80 % des automobilistes cherchent un garage en ligne avant de se déplacer. BiDigital crée votre site avec catalogue, RDV en ligne et SEO local — devis gratuit sous 24h.",
    url: "https://www.bidigital.fr/secteurs/automobile",
    siteName: "BiDigital — Agence Web",
    locale: "fr_FR",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pourquoi un garage ou un concessionnaire a besoin d'un site web ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plus de 80 % des automobilistes cherchent un garage ou un vendeur en ligne avant de se déplacer. Sans site web professionnel, vous perdez ces clients au profit de la concurrence. Un site bien référencé génère des appels, des demandes de devis et des prises de RDV en continu — même le week-end."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on afficher un catalogue de véhicules sur le site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous intégrons une galerie de véhicules ou de fiches techniques avec photos, caractéristiques et prix. Vous pouvez gérer votre stock en direct depuis un back-office simple, sans aucune compétence technique. Chaque fiche est optimisée pour le SEO."
      }
    },
    {
      "@type": "Question",
      "name": "Comment la prise de RDV en ligne fonctionne-t-elle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous intégrons un module de réservation directement sur votre site : vos clients choisissent le service souhaité (vidange, révision, contrôle, devis…), sélectionnent un créneau disponible et reçoivent une confirmation automatique. Vous gérez tout depuis votre agenda numérique."
      }
    },
    {
      "@type": "Question",
      "name": "Le SEO local est-il efficace pour l'automobile ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Les recherches comme « garage [ville] », « carrosserie pas chère [quartier] » ou « contrôle technique près de moi » génèrent un trafic très qualifié. Nous optimisons votre fiche Google My Business, vos balises locales et vos pages pour que vous apparaissiez en tête de ces recherches."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte un site web pour garage ou concessionnaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous établissons un devis gratuit et personnalisé selon votre activité et votre zone. Contactez-nous pour une estimation sous 24h, sans engagement."
      }
    }
  ]
};

export default function AutomobilePage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <AutomobileContent />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
