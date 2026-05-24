const FEATURES: Record<string, string[]> = {
  vitrine: [
    "Site vitrine sur-mesure",
    "Design premium + copywriting",
    "SEO intégré dès le 1er jour",
    "Hébergement + nom de domaine inclus",
    "Mises à jour illimitées",
    "Conformité RGPD complète",
  ],
  ecommerce: [
    "Boutique en ligne sur-mesure",
    "Design premium + copywriting",
    "SEO e-commerce intégré",
    "Hébergement + nom de domaine inclus",
    "Paiement en ligne Stripe intégré",
    "Mises à jour illimitées",
    "Conformité RGPD complète",
  ],
};

const OFFRE_LABELS: Record<string, { label: string; prix: string }> = {
  vitrine: { label: "Site Vitrine Pro", prix: "99 €/mois" },
  ecommerce: { label: "Site E-commerce Pro", prix: "199 €/mois" },
};

export function clientConfirmationHTML(
  nom: string | null,
  email: string,
  signedAt: Date,
  onboardingUrl?: string,
  offre?: string
): string {
  const prenom = nom?.split(" ")[0] ?? "cher client";
  const dateStr = signedAt.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const key = offre === "ecommerce" ? "ecommerce" : "vitrine";
  const { label, prix } = OFFRE_LABELS[key];
  const features = FEATURES[key];

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F0F4FA;font-family:'Helvetica Neue',Arial,sans-serif;">
<div style="max-width:580px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
  <div style="background:linear-gradient(135deg,#00B4D8 0%,#007AFF 55%,#0044CC 100%);padding:32px 40px;">
    <div style="font-size:26px;font-weight:800;color:#fff;letter-spacing:-0.02em;">BiDigital</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.75);margin-top:4px;">Agence Web — Votre contrat est signé</div>
  </div>
  <div style="padding:36px 40px;">
    <h1 style="font-size:22px;font-weight:800;color:#1D2939;margin:0 0 12px;letter-spacing:-0.02em;">Merci pour votre confiance, ${prenom} !</h1>
    <p style="font-size:15px;color:#475467;line-height:1.7;margin:0 0 24px;">
      Votre contrat a bien été signé le <strong style="color:#1D2939;">${dateStr}</strong> et votre premier paiement est confirmé. La création de votre site commence dès maintenant.
    </p>
    <div style="background:#F0F9FF;border:1px solid rgba(0,122,255,0.15);border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <div style="font-size:11px;font-weight:700;color:#007AFF;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;">${label} · ${prix}</div>
      ${features.map((f) => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:#007AFF;font-weight:700;font-size:13px;">✓</span><span style="font-size:13px;color:#1D2939;">${f}</span></div>`).join("")}
    </div>
    <p style="font-size:15px;color:#475467;line-height:1.7;margin:0 0 24px;">
      Je vous contacte dans les <strong style="color:#1D2939;">24 heures</strong> pour recueillir vos informations et lancer la création de votre site.
    </p>
    ${onboardingUrl ? `
    <div style="background:#F0FFF4;border:1px solid rgba(34,197,94,0.25);border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <div style="font-size:13px;font-weight:700;color:#16A34A;margin-bottom:8px;">Une dernière étape — 5 minutes</div>
      <p style="font-size:14px;color:#475467;margin:0 0 16px;line-height:1.6;">Remplissez ce court questionnaire pour qu&apos;on puisse créer votre site exactement comme vous le souhaitez.</p>
      <a href="${onboardingUrl}" style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg,#00B4D8,#007AFF);color:#fff;font-weight:700;font-size:14px;border-radius:10px;text-decoration:none;">Remplir le questionnaire →</a>
    </div>` : ""}
    <p style="font-size:13px;color:#94A3B8;margin:0;">Votre contrat signé est joint à cet email en pièce jointe PDF.</p>
  </div>
  <div style="padding:20px 40px;background:#F8FAFC;border-top:1px solid #E1EAF5;text-align:center;">
    <p style="font-size:12px;color:#94A3B8;margin:0;line-height:1.6;">
      BiDigital · Chaville, Île-de-France · <a href="mailto:contact@bidigital.fr" style="color:#007AFF;text-decoration:none;">contact@bidigital.fr</a>
    </p>
  </div>
</div>
</body>
</html>`;
}

export function internalAlertHTML(
  nom: string | null,
  email: string,
  ip: string,
  userAgent: string,
  signedAt: Date,
  stripeCustomerId: string | null
): string {
  const dateStr = signedAt.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:24px;background:#0F172A;font-family:monospace;">
<div style="max-width:580px;margin:0 auto;color:#e2e8f0;">
  <div style="font-size:18px;font-weight:700;color:#00B4D8;margin-bottom:16px;">Nouveau client signé + payé</div>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:7px 0;color:#94a3b8;width:130px;vertical-align:top;">Nom</td><td style="padding:7px 0;color:#f1f5f9;">${nom ?? "Non renseigné"}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;">Email</td><td style="padding:7px 0;color:#f1f5f9;">${email}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;">Signé le</td><td style="padding:7px 0;color:#f1f5f9;">${dateStr}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;vertical-align:top;">IP</td><td style="padding:7px 0;color:#f1f5f9;">${ip}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;vertical-align:top;">User-agent</td><td style="padding:7px 0;color:#f1f5f9;font-size:11px;word-break:break-all;">${userAgent}</td></tr>
    <tr><td style="padding:7px 0;color:#94a3b8;">Stripe ID</td><td style="padding:7px 0;color:#f1f5f9;">${stripeCustomerId ?? "—"}</td></tr>
  </table>
  ${stripeCustomerId ? `<div style="margin-top:16px;"><a href="https://dashboard.stripe.com/customers/${stripeCustomerId}" style="color:#00B4D8;text-decoration:none;">→ Voir dans Stripe Dashboard</a></div>` : ""}
</div>
</body>
</html>`;
}
