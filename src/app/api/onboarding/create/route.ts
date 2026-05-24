import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  let body: { email?: string; nom?: string; offre?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { email, nom, offre } = body;
  if (!email) {
    return NextResponse.json({ error: "Email requis." }, { status: 400 });
  }

  const session = await db.onboardingSession.create({
    data: {
      email,
      nom: nom ?? null,
      offre: offre ?? null,
    },
  });

  const baseUrl =
    req.headers.get("origin") ??
    req.headers.get("referer")?.replace(/\/$/, "") ??
    "https://www.bidigital.fr";

  return NextResponse.json({
    token: session.token,
    url: `${baseUrl}/onboarding/${session.token}`,
  });
}
