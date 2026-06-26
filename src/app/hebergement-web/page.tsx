import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const HebergementContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Hébergement Web Rapide & Sécurisé — Uptime 99,9 % | BiDigital",
  description:
    "Hébergez votre site avec BiDigital : serveurs rapides, uptime 99,9 %, SSL, sauvegardes quotidiennes et support réactif. Inclus dans notre forfait maintenance. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.bidigital.fr/hebergement-web",
  },
  openGraph: {
    title: "Hébergement Web Professionnel — Sécurisé & Haute Performance | BiDigital",
    description:
      "Votre site mérite un hébergement fiable : SSL inclus, sauvegardes quotidiennes, uptime 99,9 % et surveillance 24h/24. BiDigital gère tout pour vous.",
    url: "https://www.bidigital.fr/hebergement-web",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function HebergementWebPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <HebergementContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
