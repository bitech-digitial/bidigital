import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ConversionPopup from "@/components/ui/ConversionPopup";
import CookieBanner from "@/components/ui/CookieBanner";

const Stats = dynamic(() => import("@/components/sections/Stats"), { ssr: true });
const Solutions = dynamic(() => import("@/components/sections/Solutions"), { ssr: true });
const Examples = dynamic(() => import("@/components/sections/Examples"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const Values = dynamic(() => import("@/components/sections/Values"), { ssr: true });
const Process = dynamic(() => import("@/components/sections/Process"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: "hidden" }}>
        <Hero />
        <Stats />
        <Solutions />
        <Examples />
        <Services />
<Values />
        <Process />
        <ContactForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ConversionPopup />
      <CookieBanner />
    </>
  );
}
