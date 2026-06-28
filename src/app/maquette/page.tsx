import type { Metadata } from "next";
import MaquetteContent from "./_content";

export const metadata: Metadata = {
  title: "Demandez votre maquette gratuite — BiDigital",
  description: "Obtenez une maquette de site internet personnalisée, gratuitement et sans engagement. Notre équipe vous répond sous 72h.",
  robots: { index: false },
};

export default function MaquettePage() {
  return <MaquetteContent />;
}
