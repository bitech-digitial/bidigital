import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const CreationSiteContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Création Site Internet Professionnel Sur-Mesure | BiDigital",
  description:
    "Créez votre site internet professionnel avec BiDigital : site vitrine, e-commerce, SEO local et RGPD inclus. Livraison en 2-3 semaines. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.bidigital.fr/creation-site-internet",
  },
  openGraph: {
    title: "Création Site Internet Professionnel — Vitrine & E-commerce | BiDigital",
    description:
      "Obtenez un site web sur-mesure livré en 2-3 semaines : design moderne, SEO optimisé, 100 % conforme RGPD, maintenance incluse. Devis gratuit sous 24h.",
    url: "https://www.bidigital.fr/creation-site-internet",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function CreationSiteInternetPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <CreationSiteContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
