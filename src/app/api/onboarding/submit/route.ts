import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface OnboardingAnswers {
  objectif?: string;
  styleVisuel?: string;
  couleurs?: { primaire: string; secondaire: string; notes: string };
  logoUrl?: string;
  inspirations?: string[];
  pages?: string[];
  photosUrls?: string[];
}

function buildRecapHTML(nom: string | null, email: string, offre: string | null, a: OnboardingAnswers): string {
  const label = offre === "ecommerce" ? "Site E-commerce Pro" : "Site Vitrine Pro";
  const pagesStr = (a.pages ?? []).join(", ") || "—";
  const inspirationsStr = (a.inspirations ?? []).filter(Boolean).join("\n") || "—";
  const photosStr = (a.photosUrls ?? []).map((u, i) => `<a href="${u}">Photo ${i + 1}</a>`).join(" · ") || "—";

  return `
    <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#1D2939">
      <h2 style="color:#007AFF">Onboarding complété — ${nom ?? email}</h2>
      <p><strong>Offre :</strong> ${label}</p>
      <p><strong>Email :</strong> ${email}</p>
      <hr/>
      <p><strong>Objectif principal :</strong> ${a.objectif ?? "—"}</p>
      <p><strong>Style visuel :</strong> ${a.styleVisuel ?? "—"}</p>
      <p><strong>Couleurs :</strong> ${a.couleurs?.primaire ?? "—"} · ${a.couleurs?.secondaire ?? "—"}<br/>
        Notes : ${a.couleurs?.notes || "—"}</p>
      <p><strong>Logo :</strong> ${a.logoUrl ? `<a href="${a.logoUrl}">Télécharger</a>` : "—"}</p>
      <p><strong>Sites inspirants :</strong><br/><pre>${inspirationsStr}</pre></p>
      <p><strong>Pages souhaitées :</strong> ${pagesStr}</p>
      <p><strong>Photos :</strong> ${photosStr}</p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  let body: { token?: string } & OnboardingAnswers;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { token, objectif, styleVisuel, couleurs, logoUrl, inspirations, pages, photosUrls } = body;

  if (!token) {
    return NextResponse.json({ error: "Token manquant." }, { status: 400 });
  }

  const session = await db.onboardingSession.findUnique({ where: { token } });
  if (!session) {
    return NextResponse.json({ error: "Session introuvable." }, { status: 404 });
  }
  if (session.completedAt) {
    return NextResponse.json({ error: "Déjà soumis." }, { status: 409 });
  }

  await db.onboardingSession.update({
    where: { token },
    data: {
      objectif: objectif ?? null,
      styleVisuel: styleVisuel ?? null,
      couleurs: couleurs ? JSON.stringify(couleurs) : null,
      logoUrl: logoUrl ?? null,
      inspirations: inspirations ? JSON.stringify(inspirations) : null,
      pages: pages ? JSON.stringify(pages) : null,
      photosUrls: photosUrls ? JSON.stringify(photosUrls) : null,
      completedAt: new Date(),
    },
  });

  await resend.emails.send({
    from: "BiDigital <contact@bidigital.fr>",
    to: ["contact@bidigital.fr"],
    subject: `Onboarding complété — ${session.nom ?? session.email}`,
    html: buildRecapHTML(session.nom, session.email, session.offre, {
      objectif, styleVisuel, couleurs, logoUrl, inspirations, pages, photosUrls,
    }),
  });

  return NextResponse.json({ success: true });
}
