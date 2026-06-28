import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "BiDigital — Agence Web | Création Site Internet PME & Artisans",
  description:
    "Créez votre site internet professionnel avec BiDigital, agence web en France. Site vitrine, e-commerce, SEO et maintenance sur-mesure. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.bidigital.fr",
  },
  openGraph: {
    title: "BiDigital — Agence Web | Création Site Internet Professionnel",
    description:
      "Boostez votre visibilité en ligne avec BiDigital : site vitrine sur-mesure, SEO local, RGPD inclus et maintenance sans engagement. Obtenez un devis gratuit en 24h.",
    url: "https://www.bidigital.fr",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

const Examples = dynamic(() => import("@/components/sections/Examples"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });
const Reviews = dynamic(() => import("@/components/sections/Reviews"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <Examples />
        <Services />
        <Pricing />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
