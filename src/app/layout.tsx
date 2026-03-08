import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "BiDigital — Agence Web | Sites Professionnels Livrés en 72h",
    template: "%s | BiDigital",
  },
  description:
    "BiDigital, agence web France, Belgique, Suisse, Luxembourg. Sites vitrines livrés en 72h. Design UX/UI, SEO, copywriting, hébergement et identité visuelle inclus. Devis gratuit.",
  keywords: [
    "agence web",
    "création site web",
    "site vitrine 72h",
    "site web professionnel",
    "agence digitale France",
    "création site web Belgique",
    "agence web Suisse",
    "site web Luxembourg",
    "SEO",
    "UX UI design",
    "application mobile",
    "SaaS",
    "e-commerce",
    "site vitrine artisan",
    "site web restaurant",
    "site web coach",
    "devis gratuit site web",
    "BiDigital",
  ],
  authors: [{ name: "BiDigital", url: "https://bidigital.fr" }],
  creator: "BiDigital",
  publisher: "BiDigital",
  category: "technology",
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
    url: "https://bidigital.fr",
    siteName: "BiDigital",
    title: "BiDigital — Agence Web | Sites Livrés en 72h",
    description:
      "Votre site web professionnel livré en 72h. Design, SEO, copywriting, hébergement et identité visuelle inclus. Devis personnalisé gratuit.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BiDigital — Agence Web Professionnelle",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BiDigital — Sites Web Professionnels en 72h",
    description: "Agence web France, Belgique, Suisse, Luxembourg. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bidigital.fr",
    languages: {
      "fr-FR": "https://bidigital.fr",
      "fr-BE": "https://bidigital.fr",
      "fr-CH": "https://bidigital.fr",
      "fr-LU": "https://bidigital.fr",
    },
  },
  metadataBase: new URL("https://bidigital.fr"),
  verification: {
    google: "REMPLACER_PAR_GOOGLE_SEARCH_CONSOLE_ID",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BiDigital",
  description:
    "Agence web spécialisée dans la création de sites professionnels livrés en 72h. Design UX/UI, SEO, copywriting, hébergement inclus.",
  url: "https://bidigital.fr",
  logo: "https://bidigital.fr/logo.png",
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "Suisse" },
    { "@type": "Country", name: "Luxembourg" },
  ],
  serviceType: [
    "Création de site web",
    "Site vitrine",
    "Application mobile",
    "SEO",
    "UX UI Design",
    "E-commerce",
    "Identité visuelle",
  ],
  priceRange: "Sur devis",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services BiDigital",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine",
          description: "Site web professionnel livré en 72h",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Application Mobile",
          description: "Application iOS et Android sur-mesure",
        },
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "French",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      <body className="antialiased">
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </body>
    </html>
  );
}
