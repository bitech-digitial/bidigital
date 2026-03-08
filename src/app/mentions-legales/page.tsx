import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales — BiDigital, agence web.",
};

export default function MentionsLegales() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-bold text-[#0f172a] mb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Mentions légales
      </h1>

      <div style={{ fontFamily: "var(--font-body)" }}>
        <p className="text-[#475569] text-sm mb-8">
          Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance
          dans l&apos;économie numérique.
        </p>

        <Section title="1. Éditeur du site">
          <p>
            <strong>BiDigital</strong>
            <br />
            Agence web — Création de sites professionnels
            <br />
            Adresse : Chaville, 92370 Hauts-de-Seine, France
            <br />
            Téléphone :{" "}
            <a href="tel:+33695597767" className="text-[#2563eb] underline">
              +33 6 95 59 77 67
            </a>
            <br />
            E-mail :{" "}
            <a href="mailto:contact@bidigital.fr" className="text-[#2563eb] underline">
              contact@bidigital.fr
            </a>
            <br />
            Site web : https://bidigital.fr
            <br />
            Date de création : 2025
          </p>
        </Section>

        <Section title="2. Directeur de la publication">
          <p>
            Le directeur de la publication du site bidigital.fr est le
            responsable de l&apos;entreprise BiDigital, joignable à l&apos;adresse{" "}
            <a href="mailto:contact@bidigital.fr" className="text-[#2563eb] underline">
              contact@bidigital.fr
            </a>
            .
          </p>
        </Section>

        <Section title="3. Hébergement">
          <p>
            Le site BiDigital est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis
            <br />
            Site web : https://vercel.com
          </p>
        </Section>

        <Section title="4. Propriété intellectuelle">
          <p>
            L&apos;ensemble du contenu du site BiDigital (textes, images, logos,
            graphismes, code source) est protégé par le droit d&apos;auteur et
            constitue la propriété exclusive de BiDigital.
          </p>
          <p>
            Toute reproduction, distribution, modification ou utilisation, même
            partielle, sans autorisation écrite préalable de BiDigital est
            strictement interdite.
          </p>
        </Section>

        <Section title="5. Responsabilité">
          <p>
            BiDigital s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
            informations publiées sur ce site. Toutefois, BiDigital ne peut
            garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations
            diffusées.
          </p>
          <p>
            BiDigital décline toute responsabilité pour tout dommage résultant
            de l&apos;utilisation du site ou de l&apos;impossibilité d&apos;y accéder.
          </p>
        </Section>

        <Section title="6. Données personnelles">
          <p>
            La gestion des données personnelles collectées via ce site est
            détaillée dans notre{" "}
            <a href="/politique-de-confidentialite" className="text-[#2563eb] underline">
              Politique de confidentialité
            </a>
            , conformément au RGPD.
          </p>
        </Section>

        <Section title="7. Droit applicable">
          <p>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="text-xl font-bold text-[#0f172a] mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <div className="text-[#475569] text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
