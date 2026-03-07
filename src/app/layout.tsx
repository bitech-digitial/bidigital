import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BiDigital — Ton site web professionnel en 72h",
  description:
    "Agence web qui livre des sites professionnels de A à Z en 72h. Design sur-mesure, SEO inclus, hébergement inclus. À partir de 597€ TTC.",
  keywords:
    "agence web, site web professionnel, artisans, restaurants, coachs, 72h, France",
  openGraph: {
    title: "BiDigital — Ton site web professionnel en 72h",
    description:
      "Site web sur-mesure livré en 72h. À partir de 597€ TTC, hébergement inclus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
