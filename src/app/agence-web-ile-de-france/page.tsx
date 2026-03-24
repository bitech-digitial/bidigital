import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agence Web Île-de-France | BiDigital — Création Site Web",
  description:
    "BiDigital, agence web en Île-de-France. Création de sites web professionnels livrés rapidement. SEO, UX/UI, hébergement inclus. Devis gratuit pour Paris et toute l'IDF.",
  alternates: {
    canonical: "https://bidigital.fr/agence-web-ile-de-france",
  },
};

export default function AgenceWebIleDeFrance() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-bold text-[#0f172a] mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Agence Web en Île-de-France
      </h1>

      <h2
        className="text-xl font-semibold text-[#2563eb] mb-6"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Création de site web professionnel — Paris &amp; IDF
      </h2>

      <div
        className="text-[#475569] leading-relaxed space-y-4 mb-10"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <p>
          BiDigital est une <strong>agence web en Île-de-France</strong>,
          spécialisée dans la création de sites web professionnels pour les
          entreprises, artisans et indépendants de la région. Basée dans les{" "}
          <strong>Hauts-de-Seine (92)</strong>, nous intervenons sur{" "}
          <strong>Paris</strong> et toute l&apos;Île-de-France.
        </p>
        <p>
          Notre agence digitale conçoit des sites vitrines, boutiques
          e-commerce et applications mobiles <strong>livrés rapidement</strong>.
          Chaque projet inclut un <strong>design UX/UI</strong> sur-mesure,
          une optimisation <strong>SEO local</strong> pour apparaître sur
          Google, le copywriting, l&apos;hébergement haute performance et
          l&apos;identité visuelle complète — sans frais cachés.
        </p>
        <p>
          De <strong>Paris</strong> à Versailles, de Nanterre à Créteil, nous
          accompagnons les professionnels d&apos;Île-de-France dans leur
          transformation digitale. Notre approche : écouter votre projet,
          livrer vite, et vous garantir des résultats. <strong>Devis
          gratuit et personnalisé sous 24h.</strong> Satisfait ou remboursé.
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
