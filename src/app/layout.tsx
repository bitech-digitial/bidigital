import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bidigital.fr"),
  title: {
    default: "BiDigital — Agence Web | Site Vitrine Conforme RGPD, SEO & Maintenance",
    template: "%s | BiDigital — Agence Web",
  },
  description:
    "BiDigital, agence web création de site vitrine professionnel. 100% conforme RGPD, SEO optimisé pour apparaître en 1ère page Google. Maintenance, hébergement et nom de domaine inclus. 19,99€/mois sans engagement.",
  keywords: [
    "BiDigital",
    "bidigital",
    "agence web",
    "agence web France",
    "création site internet",
    "site vitrine professionnel",
    "agence création site web",
    "site internet professionnel",
    "conformité RGPD site web",
    "mise en conformité site internet",
    "maintenance site internet",
    "SEO référencement naturel",
    "création site web artisan",
    "site web TPE PME",
    "amende RGPD site web",
    "site web conforme CNIL",
    "agence web pas cher",
    "site vitrine pas cher",
    "refonte site web",
    "site web sur mesure",
    "agence web Chaville",
    "agence web Île-de-France",
    "création site web Chaville",
    "SEO Île-de-France",
    "bandeau cookies CNIL",
    "mentions légales site web",
  ],
  authors: [{ name: "BiDigital", url: "https://www.bidigital.fr" }],
  creator: "BiDigital",
  publisher: "BiDigital",
  category: "technology",
  classification: "Agence web, Création de site internet",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.bidigital.fr",
    siteName: "BiDigital — Agence Web",
    title: "BiDigital — Agence Web | Site Conforme, SEO & Maintenance",
    description:
      "Création de site vitrine professionnel, 100% conforme RGPD, SEO inclus, maintenance 19,99€/mois sans engagement.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BiDigital — Agence web création de site vitrine professionnel",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BiDigital — Agence Web | Site Conforme & SEO",
    description:
      "Site vitrine professionnel, 100% conforme RGPD, SEO inclus, maintenance 19,99€/mois.",
    images: ["/opengraph-image"],
    creator: "@bidigital",
  },
  alternates: {
    canonical: "https://www.bidigital.fr",
    languages: { "fr-FR": "https://www.bidigital.fr" },
  },
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.bidigital.fr/#organization",
      name: "BiDigital",
      alternateName: ["bidigital", "Bi Digital", "BiDigital agence web"],
      url: "https://www.bidigital.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bidigital.fr/favicon.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-7-59-74-83-83",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: ["https://wa.me/33759748383"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bidigital.fr/#website",
      url: "https://www.bidigital.fr",
      name: "BiDigital — Agence Web",
      description:
        "Agence web création de site vitrine, conformité RGPD, SEO, maintenance.",
      publisher: { "@id": "https://www.bidigital.fr/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.bidigital.fr/#service",
      name: "BiDigital",
      description:
        "Agence web spécialisée en création de site vitrine professionnel, conformité RGPD, SEO et maintenance mensuelle.",
      url: "https://www.bidigital.fr",
      telephone: "+33759748383",
      email: "contact@bidigital.fr",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      areaServed: { "@type": "Country", name: "France" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chaville",
        addressRegion: "Île-de-France",
        postalCode: "92370",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "48.8167",
        longitude: "2.1833",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services BiDigital",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Création site vitrine professionnel",
            description:
              "Site vitrine sur-mesure, 100% conforme RGPD, SEO optimisé, copywriting inclus",
          },
          {
            "@type": "Offer",
            name: "Maintenance & Évolution",
            price: "19.99",
            priceCurrency: "EUR",
            description:
              "Maintenance mensuelle, SEO continu, mises à jour légales, sans engagement",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Mon site est-il vraiment conforme RGPD ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Chaque site BiDigital est livré avec mentions légales, politique de confidentialité, gestion des cookies conforme CNIL et CGU si nécessaire.",
          },
        },
        {
          "@type": "Question",
          name: "Que comprend l'abonnement à 19,99€/mois ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'hébergement, le nom de domaine, les mises à jour légales et de sécurité, la surveillance SEO et toutes vos modifications. Sans engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je garder mon nom de domaine existant ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument. Nous pouvons utiliser votre domaine actuel.",
          },
        },
      ],
    },
  ],
};

import MobileStickyCTA from "@/components/ui/MobileStickyCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://app.cal.com" />
      </head>
      <body className="antialiased">
        {children}
        <MobileStickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
