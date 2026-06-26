import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const RefonteSiteContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Refonte Site Internet — Modernisation & SEO Garanti | BiDigital",
  description:
    "Modernisez votre site internet avec BiDigital : nouveau design, SEO boosté, RGPD mis à jour et performances optimisées. Audit gratuit. Résultats visibles dès la mise en ligne.",
  alternates: {
    canonical: "https://www.bidigital.fr/refonte-site-internet",
  },
  openGraph: {
    title: "Refonte Site Internet Professionnel — Design, SEO & Performance | BiDigital",
    description:
      "Votre site est lent, vieillissant ou mal référencé ? Découvrez notre service de refonte complète : design moderne, SEO renforcé, RGPD inclus. Devis gratuit sous 24h.",
    url: "https://www.bidigital.fr/refonte-site-internet",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function RefonteSiteInternetPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <RefonteSiteContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
