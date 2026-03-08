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
    "BiDigital, agence web à Chaville (Île-de-France). Création de sites web professionnels livrés en 72h. Design UX/UI, SEO, copywriting, hébergement et identité visuelle inclus. Devis gratuit. France, Belgique, Suisse, Luxembourg.",
  keywords: [
    "BiDigital",
    "agence web",
    "agence web Chaville",
    "agence web Île-de-France",
    "agence web Hauts-de-Seine",
    "création site web Chaville",
    "création site web Île-de-France",
    "création site web 92",
    "création site web Paris",
    "site vitrine 72h",
    "site web professionnel",
    "agence digitale Chaville",
    "agence digitale Île-de-France",
    "création site web Belgique",
    "agence web Suisse",
    "site web Luxembourg",
    "SEO Île-de-France",
    "UX UI design Paris",
    "application mobile Île-de-France",
    "agence web pas cher Île-de-France",
    "site web artisan Île-de-France",
    "site web restaurant Paris",
    "devis gratuit site web",
  ],
  authors: [{ name: "BiDigital", url: "https://bidigital.fr" }],
  creator: "BiDigital",
  publisher: "BiDigital",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "16x16", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
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
    description: "Agence web Chaville, Île-de-France, France, Belgique, Suisse, Luxembourg. Devis gratuit.",
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
  alternateName: "BiDigital Agence Web",
  description:
    "Agence web à Chaville, Île-de-France. Création de sites web professionnels livrés en 72h. Design UX/UI, SEO, copywriting, hébergement inclus.",
  url: "https://bidigital.fr",
  logo: "https://bidigital.fr/favicon.svg",
  image: "https://bidigital.fr/og-image.jpg",
  telephone: "+33695597767",
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
  areaServed: [
    { "@type": "City", name: "Chaville" },
    { "@type": "State", name: "Île-de-France" },
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Belgique" },
    { "@type": "Country", name: "Suisse" },
    { "@type": "Country", name: "Luxembourg" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  priceRange: "Sur devis",
  serviceType: [
    "Création de site web",
    "Site vitrine",
    "Application mobile",
    "SEO",
    "UX UI Design",
    "E-commerce",
    "Identité visuelle",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services BiDigital",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Site Vitrine",
          description: "Site web professionnel livré en 72h, Chaville, Île-de-France",
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
    telephone: "+33695597767",
    contactType: "customer service",
    availableLanguage: "French",
    contactOption: "TollFree",
  },
  sameAs: ["https://wa.me/33695597767"],
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
        <link rel="dns-prefetch" href="https://app.cal.com" />
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
