import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Examples from "@/components/sections/Examples";
import ValueAnchor from "@/components/sections/ValueAnchor";
import ForWho from "@/components/sections/ForWho";
import Process from "@/components/sections/Process";
import Offer from "@/components/sections/Offer";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import StickyBar from "@/components/ui/StickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Examples />
        <ValueAnchor />
        <ForWho />
        <Process />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
