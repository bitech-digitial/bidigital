import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const WebdesignContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Webdesign Sur-Mesure — Interface Moderne & Conversion | BiDigital",
  description:
    "Découvrez notre agence webdesign : interfaces modernes, 100 % responsive, optimisées SEO et conçues pour convertir. Votre image de marque mérite mieux. Devis gratuit.",
  alternates: {
    canonical: "https://www.bidigital.fr/webdesign",
  },
  openGraph: {
    title: "Agence Webdesign — Design Web Professionnel Qui Convertit | BiDigital",
    description:
      "Un design web à votre image : moderne, responsive, optimisé pour Google et pensé pour transformer vos visiteurs en clients. Obtenez votre maquette gratuite.",
    url: "https://www.bidigital.fr/webdesign",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function WebdesignPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <WebdesignContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
