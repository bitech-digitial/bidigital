import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const TaxiContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Taxi & VTC — Simulateur Trajet & Google Maps | BiDigital",
  description:
    "Créez votre site taxi ou VTC avec BiDigital : simulateur de trajet, tarifs jour/nuit, devis en ligne et SEO local Google Maps. Gagnez 30 à 50 % de courses supplémentaires.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/taxi",
  },
  openGraph: {
    title: "Site Web Taxi & VTC — Plus de Courses Grâce à Google | BiDigital",
    description:
      "Comment trouver plus de clients taxi ou VTC ? Simulateur de trajet, fiche Google My Business, SEO local — BiDigital crée votre site professionnel clé-en-main. Devis gratuit.",
    url: "https://www.bidigital.fr/secteurs/taxi",
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
      "name": "Puis-je intégrer un simulateur de prix sur mon site ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous intégrons un simulateur de trajet personnalisé à vos tarifs réels — zone géographique, forfaits aéroport/gare, supplément nuit. Le client reçoit une estimation immédiate et peut soumettre une demande de course en un clic."
      }
    },
    {
      "@type": "Question",
      "name": "Mon site sera-t-il visible sur Google Maps et les GPS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Chaque site BiDigital est accompagné d'une optimisation Google My Business complète : fiche vérifiée, photos, catégories, horaires d'ouverture. Résultat : vous apparaissez dans les recherches locales et sur les cartes GPS dès les premières semaines."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte un site internet pour taxi ou VTC ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous établissons un devis personnalisé gratuit selon votre activité (taxi, VTC, navette). Hébergement, maintenance et mises à jour sont inclus. Contactez-nous pour une estimation sous 24h."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je modifier mes tarifs et mes horaires moi-même ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, votre site est livré avec un espace d'administration simple. Vous mettez à jour vos tarifs jour/nuit, vos forfaits et vos disponibilités en quelques minutes, sans aucune compétence technique requise."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce qu'un site web m'apporte vraiment plus de courses ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos clients taxi et VTC constatent en moyenne 30 à 50 % de nouvelles courses via leur site dans les 3 premiers mois. La clé : un simulateur bien visible, un numéro de téléphone cliquable et une fiche Google optimisée. Ensemble, ils créent un tunnel complet de demande de course."
      }
    }
  ]
};

export default function TaxiPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <TaxiContent />
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
