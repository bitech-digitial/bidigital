import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 500);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans une heure." },
      { status: 429 }
    );
  }

  let body: { email?: string; nom?: string; signatureData?: string; consent?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { email, nom, signatureData, consent } = body;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consentement requis." }, { status: 400 });
  }
  if (!signatureData || !signatureData.startsWith("data:image/png;base64,")) {
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  const session = await db.contractSession.create({
    data: {
      email: sanitize(email),
      nom: nom ? sanitize(nom) : null,
      signatureData,
      ip,
      userAgent: req.headers.get("user-agent") ?? "unknown",
      signedAt: new Date(),
    },
  });

  return NextResponse.json({ token: session.token });
}
