import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import dynamic from "next/dynamic";
import CookieBanner from "@/components/ui/CookieBanner";

const ContactPageContent = dynamic(
  () => import("@/components/sections/ContactPageContent"),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/layout/Footer"),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit Création Site Internet | BiDigital",
  description:
    "Contactez BiDigital pour votre projet de site internet. Formulaire en ligne, réponse garantie sous 24h. Devis gratuit et sans engagement pour PME et artisans partout en France.",
  alternates: {
    canonical: "https://www.bidigital.fr/contact",
  },
  openGraph: {
    title: "Contactez BiDigital — Devis Site Web Gratuit Sous 24h",
    description:
      "Décrivez votre projet web à notre équipe. Réponse personnalisée sous 24h, devis gratuit, sans engagement. BiDigital accompagne PME et artisans dans toute la France.",
    url: "https://www.bidigital.fr/contact",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <ContactPageContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
