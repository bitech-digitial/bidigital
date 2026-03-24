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
    default: "BiDigital — Agence Web | Site Conforme, SEO & Maintenance 19,99€/mois",
    template: "%s | BiDigital",
  },
  description:
    "BiDigital crée votre site vitrine 100% conforme RGPD, optimisé SEO, avec maintenance incluse à 19,99€/mois sans engagement. Conforme, visible, inoubliable.",
  keywords: [
    "agence web",
    "création site internet",
    "site vitrine",
    "RGPD conformité",
    "maintenance site web",
    "SEO",
    "site internet professionnel",
    "agence web France",
    "agence web Chaville",
    "agence web Île-de-France",
    "création site web Chaville",
    "création site web Île-de-France",
    "agence digitale Chaville",
    "SEO Île-de-France",
    "conformité légale site web",
    "mentions légales site web",
    "bandeau cookies CNIL",
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
    title: "BiDigital — Agence Web | Site Conforme, SEO & Maintenance 19,99€/mois",
    description:
      "Site vitrine professionnel 100% conforme RGPD, SEO optimisé, maintenance à 19,99€/mois. Devis personnalisé gratuit.",
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
    title: "BiDigital — Site Conforme, SEO & Maintenance Incluse",
    description:
      "Agence web française. Votre site conforme, visible et inoubliable. Devis gratuit.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bidigital.fr",
    languages: {
      "fr-FR": "https://bidigital.fr",
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
    "Agence web — création de sites vitrines conformes RGPD, SEO inclus, maintenance à partir de 19,99€/mois",
  url: "https://www.bidigital.fr",
  logo: "https://bidigital.fr/favicon.svg",
  image: "https://bidigital.fr/og-image.jpg",
  telephone: "+33759748383",
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
  areaServed: "FR",
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  serviceType: [
    "Création de site web",
    "Site vitrine",
    "SEO",
    "Conformité RGPD",
    "Maintenance web",
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
          name: "Site Vitrine Conforme",
          description: "Site web professionnel, 100% conforme RGPD, SEO optimisé",
        },
      },
      {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "19.99",
          priceCurrency: "EUR",
          billingIncrement: 1,
          unitText: "MONTH",
        },
        itemOffered: {
          "@type": "Service",
          name: "Maintenance & Évolution Continue",
          description:
            "Hébergement, domaine, mises à jour légales, SEO continu, modifications rapides",
        },
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33759748383",
    contactType: "customer service",
    availableLanguage: "French",
    contactOption: "TollFree",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "23",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marie L." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Un site professionnel conforme RGPD et déjà positionné sur Google. Mes prises de RDV ont augmenté de 40%.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Thomas C." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Avant, j'avais aucune présence en ligne. Maintenant j'apparais en première page sur Google. Les appels ont triplé.",
    },
  ],
  sameAs: ["https://wa.me/33759748383"],
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
