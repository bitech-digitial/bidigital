import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const HebergementContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Hôtel, Gîte & Hébergement — Réservations Directes | BiDigital",
  description:
    "Créez le site de votre hôtel, gîte ou camping avec BiDigital : réservation en ligne, channel manager Booking/Airbnb, SEO tourisme. Réduisez vos commissions OTA. Devis gratuit.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/hebergement",
  },
  openGraph: {
    title: "Site Web Hébergement Touristique — Plus de Réservations Directes | BiDigital",
    description:
      "Comment réduire vos commissions Booking et Airbnb ? BiDigital crée votre site hôtel ou gîte avec moteur de réservation, channel manager et SEO tourisme intégrés.",
    url: "https://www.bidigital.fr/secteurs/hebergement",
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
      "name": "Quelle est la durée de création d'un site d'hébergement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous réalisons votre site vitrine clé-en-main en 14 jours à compter de la réception de vos éléments (photos, textes, tarifs). Après la mise en ligne, nous configurons ensemble votre module de réservation selon vos disponibilités et vos offres spéciales."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je intégrer un système de réservation en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Nous intégrons un moteur de réservation directement sur votre site : vos visiteurs consultent les disponibilités, sélectionnent leurs dates et paient en ligne en toute sécurité. Vous recevez une confirmation automatique et gérez votre planning depuis votre espace d'administration."
      }
    },
    {
      "@type": "Question",
      "name": "Mon site sera-t-il connecté à Booking.com et Airbnb ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Grâce à un channel manager intégré, votre planning est synchronisé en temps réel avec les principales plateformes OTA (Booking, Airbnb, Expedia). Plus de risque de double réservation — une gestion centralisée depuis un seul écran."
      }
    },
    {
      "@type": "Question",
      "name": "Comment augmenter mes réservations directes et réduire les commissions ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En combinant un site optimisé SEO, un comparateur \"meilleur prix garanti\", un bouton de réservation bien visible et des avis Google mis en avant, vous incitez vos visiteurs à réserver directement. Résultat : moins de commissions OTA, plus de marge et une relation client directe."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je gérer mes disponibilités depuis mon téléphone ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, votre espace d'administration est entièrement responsive. Ajoutez des disponibilités, modifiez vos tarifs, répondez aux demandes et consultez votre planning depuis votre smartphone — depuis votre établissement ou en déplacement."
      }
    }
  ]
};

export default function HebergementPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <HebergementContent />
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
