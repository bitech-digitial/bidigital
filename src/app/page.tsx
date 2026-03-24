import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ConversionPopup from "@/components/ui/ConversionPopup";
import CookieBanner from "@/components/ui/CookieBanner";

const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });
const Examples = dynamic(() => import("@/components/sections/Examples"), { ssr: true });
const PunchlineQuote = dynamic(() => import("@/components/sections/PunchlineQuote"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const LegalCompliance = dynamic(() => import("@/components/sections/LegalCompliance"), { ssr: true });
const Values = dynamic(() => import("@/components/sections/Values"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const Offer = dynamic(() => import("@/components/sections/Offer"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const TrustBar = dynamic(() => import("@/components/ui/TrustBar"), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <Examples />
        <PunchlineQuote />
        <Testimonials />
        <Services />
        <LegalCompliance />
        <Values />
        <Process />
        <Offer />
        <ContactForm />
        <FAQ />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
      <ConversionPopup />
      <CookieBanner />
    </>
  );
}
