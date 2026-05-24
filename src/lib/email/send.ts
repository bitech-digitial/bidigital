import { Resend } from "resend";
import { clientConfirmationHTML, internalAlertHTML } from "./templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailSessionData {
  email: string;
  nom: string | null;
  ip: string;
  userAgent: string;
  signedAt: Date;
  stripeCustomerId: string | null;
}

export async function sendClientConfirmationEmail(
  session: EmailSessionData,
  pdfBuffer: Buffer
): Promise<void> {
  const dateTag = session.signedAt
    .toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" })
    .replace(/\//g, "-");
  const nomSlug = (session.nom ?? "client").toLowerCase().replace(/\s+/g, "-");

  await resend.emails.send({
    from: "BiDigital <contact@bidigital.fr>",
    to: [session.email],
    subject: "Votre contrat BiDigital signé — bienvenue !",
    html: clientConfirmationHTML(session.nom, session.email, session.signedAt),
    attachments: [
      {
        filename: `contrat-bidigital-${nomSlug}-${dateTag}.pdf`,
        content: pdfBuffer.toString("base64"),
      },
    ],
  });
}

export async function sendInternalAlertEmail(
  session: EmailSessionData
): Promise<void> {
  await resend.emails.send({
    from: "BiDigital <contact@bidigital.fr>",
    to: ["contact@bidigital.fr"],
    subject: `Nouveau client signé — ${session.nom ?? session.email}`,
    html: internalAlertHTML(
      session.nom,
      session.email,
      session.ip,
      session.userAgent,
      session.signedAt,
      session.stripeCustomerId
    ),
  });
}
