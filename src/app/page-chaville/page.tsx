import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agence Web Chaville | BiDigital — Sites Web en 72h",
  description:
    "BiDigital, votre agence web à Chaville (92). Création de sites professionnels en 72h. Design UX/UI, SEO, hébergement inclus. Devis gratuit.",
  alternates: {
    canonical: "https://bidigital.fr/page-chaville",
  },
};

export default function PageChaville() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-bold text-[#0f172a] mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Agence Web à Chaville
      </h1>

      <h2
        className="text-xl font-semibold text-[#2563eb] mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Votre site web professionnel en 72h
      </h2>

      <div
        className="text-[#475569] leading-relaxed space-y-4 mb-10"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <p>
          BiDigital est une agence web basée à <strong>Chaville</strong>, dans
          les <strong>Hauts-de-Seine (92)</strong>, au cœur de l&apos;
          <strong>Île-de-France</strong>. Nous accompagnons les professionnels,
          artisans, commerçants et entrepreneurs de la région dans la
          création de leur présence digitale.
        </p>
        <p>
          Spécialisée dans la <strong>création de sites web professionnels</strong>,
          notre agence digitale conçoit des sites vitrines, boutiques
          e-commerce et applications mobiles <strong>livrés en 72h</strong>.
          Chaque projet inclut le design UX/UI, le SEO local, le copywriting,
          l&apos;hébergement et l&apos;identité visuelle — sans frais cachés.
        </p>
        <p>
          Que vous soyez à <strong>Chaville</strong>, Versailles, Meudon,
          Sèvres ou dans toute l&apos;Île-de-France, BiDigital est votre
          partenaire digital de confiance pour développer votre activité en
          ligne. <strong>Devis gratuit sous 24h.</strong> Satisfait ou remboursé.
        </p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Découvrir BiDigital →
      </Link>
    </main>
  );
}
