import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const ServicesContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Site Internet Entreprise de Services — Devis En Ligne & SEO | BiDigital",
  description:
    "Créez votre site vitrine pour entreprise de services avec BiDigital : portfolio, formulaire de devis, avis clients et SEO local. Plombier, consultant, coach… Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.bidigital.fr/secteurs/services",
  },
  openGraph: {
    title: "Site Web Entreprise de Services — Générez Plus de Devis | BiDigital",
    description:
      "Comment obtenir plus de clients pour votre entreprise de services ? Portfolio en ligne, formulaire de devis, SEO local et avis Google — BiDigital crée votre vitrine clé-en-main.",
    url: "https://www.bidigital.fr/secteurs/services",
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
      "name": "Quel type de site convient à mon entreprise de services ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour une entreprise de services, un site vitrine professionnel est idéal : il présente vos services, affiche vos réalisations et photos de chantier, collecte des demandes de devis et intègre vos avis Google. BiDigital crée chaque site sur-mesure selon votre activité — plombier, consultant, coach ou juriste, le résultat est toujours adapté à votre cible."
      }
    },
    {
      "@type": "Question",
      "name": "Mon site sera-t-il visible sur Google pour mes services locaux ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Chaque site BiDigital est optimisé pour le référencement local : mots-clés \"[service] [ville]\", balises SEO techniques, Google My Business configuré, fiche Waze et Apple Maps. Résultat : vous apparaissez quand un client cherche votre activité dans votre zone géographique."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je afficher mes réalisations et témoignages clients ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolument. Votre site intègre une galerie de réalisations (photos avant/après, projets terminés) et vos avis Google sont automatiquement affichés. Ces éléments sont les plus puissants pour convaincre un prospect de vous contacter plutôt qu'un concurrent."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte un site internet pour une entreprise de services ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous établissons un devis personnalisé gratuit selon vos besoins. Tout est livré clé en main — hébergement, mises à jour illimitées et support inclus. Contactez-nous pour une estimation sous 24h."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps faut-il pour mettre mon site en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En général entre 2 et 4 semaines selon la complexité du projet. Vous validez le design avant la mise en ligne et bénéficiez d'un accompagnement personnalisé du brief jusqu'au lancement. Pas de mauvaise surprise, pas de délai caché."
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <ServicesContent />
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
