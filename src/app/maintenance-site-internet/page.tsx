import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

const MaintenanceContent = dynamic(() => import("./_content"), { ssr: true });

export const metadata: Metadata = {
  title: "Maintenance Site Internet Sans Engagement | BiDigital",
  description:
    "Confiez la maintenance de votre site à BiDigital : mises à jour, sécurité, sauvegardes et support prioritaire. Sans engagement. Devis personnalisé gratuit.",
  alternates: {
    canonical: "https://www.bidigital.fr/maintenance-site-internet",
  },
  openGraph: {
    title: "Maintenance Site Internet Mensuelle — Sécurité & Performances | BiDigital",
    description:
      "Votre site est-il vraiment sécurisé et à jour ? BiDigital prend en charge toute la maintenance : corrections, sauvegardes, SEO continu. Devis personnalisé gratuit.",
    url: "https://www.bidigital.fr/maintenance-site-internet",
    type: "website",
    locale: "fr_FR",
    siteName: "BiDigital — Agence Web",
  },
};

export default function MaintenanceSiteInternetPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <MaintenanceContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
