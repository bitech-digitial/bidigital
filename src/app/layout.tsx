import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bidigital.fr"),
  title: {
    default: "Création Site Internet Professionnel | BiDigital — Agence Web",
    template: "%s | BiDigital — Agence Web",
  },
  description:
    "BiDigital crée votre site internet professionnel : site vitrine sur-mesure, conforme RGPD, optimisé SEO et livré en 14 jours. Artisans, TPE & PME. Devis gratuit.",
  keywords: [
    "BiDigital",
    "agence web",
    "création site internet",
    "site vitrine professionnel",
    "création site internet professionnel",
    "agence web France",
    "création site web artisan",
    "site internet artisan",
    "site vitrine artisan",
    "agence web artisan",
    "création site internet TPE PME",
    "site web TPE PME",
    "agence web pas cher",
    "site vitrine pas cher",
    "refonte site web",
    "site web sur mesure",
    "maintenance site internet",
    "SEO référencement naturel",
    "conformité RGPD site web",
    "site web conforme CNIL",
    "agence web Chaville",
    "création site internet Chaville",
    "agence web Hauts-de-Seine",
    "agence web 92",
    "création site internet Hauts-de-Seine",
    "agence web Versailles",
    "agence web Île-de-France",
    "création site web Île-de-France",
    "site vitrine plombier",
    "site vitrine électricien",
    "site vitrine restaurant",
    "site vitrine salon coiffure",
    "site vitrine auto entrepreneur",
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
    title: "Création Site Internet Professionnel | BiDigital — Agence Web",
    description:
      "Site vitrine sur-mesure livré en 14 jours — SEO inclus, 100% conforme RGPD, maintenance sans engagement. Pour artisans, TPE & PME. Devis gratuit.",
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
      "Site vitrine professionnel, 100% conforme RGPD, SEO inclus, maintenance sans engagement.",
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
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.bidigital.fr/#organization",
      name: "BiDigital",
      alternateName: ["Bi Digital", "BiDigital agence web", "bidigital.fr"],
      url: "https://www.bidigital.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bidigital.fr/favicon.svg",
        width: 512,
        height: 512,
      },
      image: "https://www.bidigital.fr/opengraph-image",
      telephone: "+33749999425",
      email: "contact@bidigital.fr",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Virement, Carte bancaire",
      description:
        "Agence web spécialisée en création de site internet professionnel pour artisans, TPE et PME. Site vitrine sur-mesure, SEO, conformité RGPD et maintenance. Intervention en France entière.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Chaville",
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
        { "@type": "Country", name: "France" },
        { "@type": "City", name: "Chaville" },
        { "@type": "City", name: "Versailles" },
        { "@type": "City", name: "Sèvres" },
        { "@type": "City", name: "Meudon" },
        { "@type": "City", name: "Clamart" },
        { "@type": "AdministrativeArea", name: "Hauts-de-Seine" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33-7-49-99-94-25",
        contactType: "customer service",
        availableLanguage: "French",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
      },
      sameAs: [
        "https://wa.me/33749999425",
        "https://www.bidigital.fr",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services BiDigital",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Création site vitrine professionnel",
            description: "Site vitrine sur-mesure, 100% conforme RGPD, SEO optimisé, copywriting inclus. Pour artisans, TPE et PME.",
            url: "https://www.bidigital.fr/creation-site-internet",
          },
          {
            "@type": "Offer",
            name: "Refonte de site internet",
            description: "Modernisation complète de votre site existant : design, performances, conformité RGPD et SEO.",
            url: "https://www.bidigital.fr/refonte-site-internet",
          },
          {
            "@type": "Offer",
            name: "Référencement naturel SEO",
            description: "Optimisation SEO technique et éditoriale pour améliorer votre positionnement sur Google.",
            url: "https://www.bidigital.fr/referencement-naturel-seo",
          },
          {
            "@type": "Offer",
            name: "Maintenance site internet",
            description: "Maintenance mensuelle, hébergement, mises à jour légales et sécurité. Sans engagement.",
            url: "https://www.bidigital.fr/maintenance-site-internet",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bidigital.fr/#website",
      url: "https://www.bidigital.fr",
      name: "BiDigital — Agence Web | Création Site Internet Professionnel",
      description:
        "Création de site internet professionnel pour artisans, TPE et PME. SEO, conformité RGPD, maintenance. Devis gratuit.",
      publisher: { "@id": "https://www.bidigital.fr/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.bidigital.fr/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte la création d'un site internet ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif dépend de vos besoins. Un site vitrine professionnel commence généralement à partir de 1 200 €. Nous proposons aussi des formules avec hébergement et maintenance inclus. Contactez-nous pour un devis personnalisé gratuit.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il pour créer un site internet ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous livrons votre maquette en 72h et votre site en ligne en 14 jours en moyenne. Le délai dépend de la complexité du projet et de la rapidité de vos retours.",
          },
        },
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
          name: "Que comprend l'abonnement de maintenance ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'hébergement, le nom de domaine, les mises à jour légales et de sécurité, la surveillance SEO et toutes vos modifications. Sans engagement. Contactez-nous pour un devis personnalisé.",
          },
        },
        {
          "@type": "Question",
          name: "Intervenez-vous partout en France ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. BiDigital intervient dans toute la France. Nous sommes basés à Chaville (Hauts-de-Seine, 92) mais travaillons à distance avec des clients partout en France.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je garder mon nom de domaine existant ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument. Nous pouvons utiliser votre domaine actuel et migrer votre contenu existant.",
          },
        },
        {
          "@type": "Question",
          name: "Faites-vous des sites internet pour les artisans ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, c'est notre spécialité. Nous créons des sites internet pour plombiers, électriciens, peintres, coiffeurs, restaurateurs et tous types d'artisans et indépendants. Devis gratuit sous 24h.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://app.cal.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://challenges.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
