import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const SeoContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Référencement Naturel SEO — 1ère Page Google Garantie | BiDigital",
  description:
    "Boostez votre visibilité sur Google avec BiDigital : audit SEO, optimisation technique, contenu et netlinking. Résultats durables pour PME et artisans. Audit offert.",
  alternates: {
    canonical: "https://www.bidigital.fr/referencement-naturel-seo",
  },
  openGraph: {
    title: "Agence SEO & Référencement Naturel — Trafic Qualifié Garanti | BiDigital",
    description:
      "Comment apparaître en 1ère page de Google ? BiDigital conçoit votre stratégie SEO sur-mesure : audit technique, mots-clés longue traîne, contenu et netlinking.",
    url: "https://www.bidigital.fr/referencement-naturel-seo",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function ReferencementNaturelSeoPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <SeoContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
