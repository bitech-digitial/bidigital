import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const RestaurationContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Restaurant — Menu, Réservation & SEO Local | BiDigital",
  description:
    "Créez le site de votre restaurant avec BiDigital : menu en ligne, réservation intégrée, click & collect et SEO local. Plus de couverts, moins de commissions. Devis gratuit.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/restauration",
  },
  openGraph: {
    title: "Site Web Restaurant — Attirez Plus de Clients & Réservations | BiDigital",
    description:
      "Comment remplir votre restaurant grâce à Google ? BiDigital crée votre site avec menu en ligne, réservation directe et SEO local optimisé. Devis gratuit sous 24h.",
    url: "https://www.bidigital.fr/secteurs/restauration",
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
      "name": "Combien coûte un site web pour restaurant ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chaque projet est unique — nous établissons un devis personnalisé gratuit selon vos besoins (menu en ligne, réservation, click & collect) avant tout engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je mettre à jour mon menu moi-même ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Nous intégrons un back-office simple qui vous permet de modifier vos plats, prix et disponibilités en quelques clics — sans aucune compétence technique. Vous gardez le contrôle total de votre contenu."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour créer mon site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un site vitrine est généralement livré en 2 à 3 semaines. Un site avec des fonctionnalités avancées (réservation, click & collect) prend 4 à 6 semaines. Nous vous accompagnons à chaque étape."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que le SEO local est inclus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Chaque site que nous créons est optimisé pour le référencement local dès la mise en ligne : balises sémantiques, données structurées (Schema.org Restaurant), Google My Business synchronisé et performances techniques optimales."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il après la livraison du site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous proposons des forfaits de maintenance mensuelle pour gérer les mises à jour, la sécurité et les sauvegardes. Vous pouvez aussi opter pour la maintenance autonome — votre site vous appartient entièrement."
      }
    }
  ]
};

export default function RestaurationPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <RestaurationContent />
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
