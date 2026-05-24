export const CONTRACT_CLAUSES = [
  {
    id: "objet",
    title: "1. Objet du contrat",
    content:
      "BiDigital (SIRET 947 796 967 00026 RCS Nanterre, TVA non applicable — Art. 293B CGI) s'engage à concevoir, développer et maintenir un site web vitrine professionnel pour le Client dans le cadre d'un abonnement mensuel sans engagement. Les prestations comprennent : design sur-mesure, intégration du contenu fourni par le Client, optimisation SEO locale, conformité RGPD, hébergement et nom de domaine inclus.",
  },
  {
    id: "prix",
    title: "2. Prix et modalités de paiement",
    content:
      "L'abonnement est fixé à 100 € HT par mois (TVA non applicable — Art. 293B CGI), prélevé automatiquement par carte bancaire via la plateforme sécurisée Stripe. Le premier prélèvement intervient à la date de signature du présent contrat, avant tout démarrage des travaux. En cas de non-paiement, le site est suspendu sous 5 jours ouvrés après relance écrite. Les mensualités restent dues pendant la période de suspension.",
  },
  {
    id: "livraison",
    title: "3. Délai de livraison",
    content:
      "BiDigital s'engage à livrer le site web dans un délai de 15 jours ouvrés à compter de la réception de l'ensemble des éléments nécessaires communiqués par le Client (textes, images, logo, identité visuelle). Tout retard de fourniture des éléments par le Client suspend ce délai. Une version de validation sera soumise au Client avant mise en ligne définitive.",
  },
  {
    id: "retractation",
    title: "4. Droit de rétractation",
    content:
      "Conformément à l'article L221-18 du Code de la consommation, pour tout contrat conclu à distance, le Client dispose d'un délai de 14 jours calendaires à compter de la date de signature pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités. La rétractation doit être notifiée par écrit à contact@bidigital.fr. Passé ce délai, aucune rétractation n'est possible.",
  },
  {
    id: "propriete",
    title: "5. Propriété intellectuelle",
    content:
      "Le site reste la propriété de BiDigital pendant la durée du contrat. À l'issue du contrat et après paiement intégral de toutes les mensualités dues, la propriété complète du site est transférée au Client sans frais supplémentaires. Les contenus fournis par le Client (textes, images, logo, marque) restent sa propriété exclusive. En cas de résiliation, le Client reçoit l'export de ses contenus dans un délai de 30 jours.",
  },
  {
    id: "resiliation",
    title: "6. Résiliation",
    content:
      "Chaque partie peut résilier le présent contrat à tout moment, sans motif, par notification écrite à contact@bidigital.fr, avec un préavis de 30 jours calendaires. La résiliation prend effet à l'expiration du préavis. Aucun remboursement n'est effectué pour la période en cours. En cas de faute grave de BiDigital (indisponibilité prolongée supérieure à 7 jours consécutifs non justifiée), le Client peut résilier sans préavis.",
  },
  {
    id: "responsabilite",
    title: "7. Responsabilité",
    content:
      "BiDigital s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la disponibilité du site (objectif 99,5 % par mois hors maintenance planifiée). BiDigital ne saurait être tenu responsable des dommages indirects, perte de chiffre d'affaires ou manque à gagner résultant d'une indisponibilité du site. La responsabilité totale de BiDigital est limitée au montant d'un mois d'abonnement en cours.",
  },
  {
    id: "donnees",
    title: "8. Protection des données personnelles",
    content:
      "BiDigital traite les données personnelles du Client conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679). Les données collectées sont utilisées uniquement dans le cadre de l'exécution du présent contrat et ne sont pas transmises à des tiers. Le Client dispose d'un droit d'accès, de rectification, de suppression et de portabilité de ses données auprès de contact@bidigital.fr.",
  },
  {
    id: "loi",
    title: "9. Loi applicable et juridiction",
    content:
      "Le présent contrat est soumis au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord amiable dans un délai de 30 jours, le tribunal compétent sera le Tribunal de Commerce de Nanterre (siège social de BiDigital — 1 Rue du Gros Chêne, 92370 Chaville).",
  },
] as const;

export const CONTRACT_META = {
  prestataire: "BiDigital",
  email: "contact@bidigital.fr",
  adresse: "1 Rue du Gros Chêne, 92370 Chaville",
  siret: "947 796 967 00026",
  rcs: "RCS Nanterre",
  tva: "TVA non applicable — Art. 293B CGI",
};
