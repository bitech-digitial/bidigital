import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const AgenceContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Agence Web BiDigital — Création Site & Stratégie Digitale PME",
  description:
    "Découvrez BiDigital, agence web à taille humaine spécialisée TPE, artisans et PME. Création de site internet, SEO, webdesign et maintenance. Plus de 50 projets livrés en France.",
  alternates: {
    canonical: "https://www.bidigital.fr/agence",
  },
  openGraph: {
    title: "L'Agence BiDigital — Experts Web pour PME, Artisans & Commerçants",
    description:
      "Qui sommes-nous ? Une agence web passionnée, spécialisée dans la réussite digitale des TPE/PME : site internet, SEO, design et maintenance. Échangeons sur votre projet.",
    url: "https://www.bidigital.fr/agence",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function AgencePage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <AgenceContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
