export const CONTRACT_CLAUSES = [
  {
    id: "objet",
    title: "1. Objet du contrat",
    content:
      "BiDigital s'engage à concevoir, développer et maintenir un site web professionnel pour le Client dans le cadre d'un abonnement mensuel. Les prestations comprennent : design sur-mesure, intégration du contenu fourni par le Client, optimisation SEO de base, conformité RGPD, hébergement et nom de domaine.",
  },
  {
    id: "prix",
    title: "2. Prix et modalités de paiement",
    content:
      "L'abonnement est fixé à 100 € TTC par mois, prélevé automatiquement par carte bancaire via la plateforme sécurisée Stripe. Le premier prélèvement intervient à la date de signature du présent contrat. L'abonnement est sans engagement de durée minimale.",
  },
  {
    id: "livraison",
    title: "3. Délai de livraison",
    content:
      "BiDigital s'engage à livrer le site web dans un délai de 15 jours ouvrés à compter de la réception de l'ensemble des éléments nécessaires communiqués par le Client (textes, images, logo, identité visuelle). Tout retard de fourniture des éléments par le Client suspend ce délai.",
  },
  {
    id: "propriete",
    title: "4. Propriété intellectuelle",
    content:
      "Le Client conserve l'intégralité de ses droits sur les contenus qu'il fournit (textes, images, logo, marque). BiDigital conserve la propriété du code source et de l'infrastructure technique. En cas de résiliation, le Client reçoit l'export de ses contenus (textes, images) dans un délai de 30 jours.",
  },
  {
    id: "resiliation",
    title: "5. Résiliation",
    content:
      "Chaque partie peut résilier le présent contrat à tout moment, sans motif, par simple notification écrite à l'adresse contact@bidigital.fr, avec un préavis de 30 jours calendaires. La résiliation prend effet à l'expiration du préavis. Aucun remboursement n'est effectué pour la période en cours.",
  },
  {
    id: "responsabilite",
    title: "6. Responsabilité",
    content:
      "BiDigital s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la disponibilité du site (objectif 99,5 % par mois). BiDigital ne saurait être tenu responsable des dommages indirects, perte de chiffre d'affaires ou manque à gagner. La responsabilité totale de BiDigital est limitée au montant d'un mois d'abonnement en cours.",
  },
  {
    id: "donnees",
    title: "7. Protection des données personnelles",
    content:
      "BiDigital traite les données personnelles du Client conformément au Règlement Général sur la Protection des Données (RGPD). Les données collectées sont utilisées uniquement dans le cadre de l'exécution du présent contrat et ne sont pas transmises à des tiers. Le Client dispose d'un droit d'accès, de rectification et de suppression auprès de contact@bidigital.fr.",
  },
  {
    id: "loi",
    title: "8. Loi applicable et juridiction",
    content:
      "Le présent contrat est soumis au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord amiable dans un délai de 30 jours, le tribunal compétent sera celui du siège social de BiDigital (Chaville, Île-de-France).",
  },
] as const;

export const CONTRACT_META = {
  prestataire: "BiDigital",
  email: "contact@bidigital.fr",
  adresse: "Chaville, Île-de-France, 92370",
  siret: "947 796 967 00026",
};
