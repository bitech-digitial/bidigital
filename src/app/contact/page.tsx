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
  title: "Contact — Discutons de votre projet web",
  description:
    "Contactez BiDigital pour créer ou refondre votre site internet. Formulaire de contact, adresse Chaville (92). Réponse sous 24h.",
  alternates: {
    canonical: "https://www.bidigital.fr/contact",
  },
  openGraph: {
    title: "Contact — BiDigital Agence Web",
    description:
      "Décrivez votre projet à notre équipe. Réponse sous 24h.",
    url: "https://www.bidigital.fr/contact",
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
