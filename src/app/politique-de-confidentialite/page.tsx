import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — BiDigital.",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-bold text-[#0f172a] mb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Politique de confidentialité
      </h1>

      <div style={{ fontFamily: "var(--font-body)" }}>
        <p className="text-[#475569] text-sm mb-8">
          Dernière mise à jour : mars 2026
        </p>

        <Section title="1. Données collectées">
          <p>
            Dans le cadre de nos services, BiDigital collecte les données
            suivantes lorsque vous remplissez notre formulaire de contact ou
            prenez rendez-vous :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone (si fourni)</li>
            <li>Message et informations relatives à votre projet</li>
          </ul>
          <p>
            Nous collectons également des données de navigation anonymisées via
            des outils d&apos;analyse (cookies analytiques) avec votre consentement
            préalable.
          </p>
        </Section>

        <Section title="2. Finalité du traitement">
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Répondre à vos demandes de contact et de devis</li>
            <li>Gérer la relation commerciale et le suivi de votre projet</li>
            <li>Améliorer nos services (données analytiques anonymisées)</li>
          </ul>
          <p>
            Vos données ne sont jamais vendues, louées ou transmises à des tiers
            à des fins commerciales.
          </p>
        </Section>

        <Section title="3. Durée de conservation">
          <p>
            Vos données personnelles sont conservées pendant 3 ans à compter du
            dernier contact. Les données de navigation anonymisées sont
            conservées 13 mois maximum.
          </p>
        </Section>

        <Section title="4. Vos droits (RGPD)">
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD — article 13), vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Droit d&apos;accès</strong> : obtenir une copie de vos données
            </li>
            <li>
              <strong>Droit de rectification</strong> : corriger vos données inexactes
            </li>
            <li>
              <strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données
            </li>
            <li>
              <strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données
            </li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à :{" "}
            <a href="mailto:contact@bidigital.fr" className="text-[#2563eb] underline">
              contact@bidigital.fr
            </a>
          </p>
        </Section>

        <Section title="5. Cookies">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience de
            navigation. Vous pouvez accepter ou refuser les cookies via la
            bannière affichée lors de votre première visite. Les cookies
            strictement nécessaires au fonctionnement du site ne nécessitent pas
            votre consentement.
          </p>
        </Section>

        <Section title="6. Contact">
          <p>
            Pour toute question relative à cette politique ou à vos données
            personnelles :
          </p>
          <p>
            <strong>BiDigital</strong>
            <br />
            E-mail :{" "}
            <a href="mailto:contact@bidigital.fr" className="text-[#2563eb] underline">
              contact@bidigital.fr
            </a>
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la CNIL
            (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
            <span className="text-[#64748b]">www.cnil.fr</span>
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
