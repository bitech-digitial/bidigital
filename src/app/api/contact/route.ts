import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiter: 5 requests per hour per IP
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600_000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim().slice(0, 2000);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // CORS restriction
  const origin = req.headers.get("origin") ?? "";
  const allowed = origin.startsWith("https://bidigital.fr") || origin.startsWith("https://www.bidigital.fr") || origin.startsWith("http://localhost");
  if (origin && !allowed) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de demandes. Réessayez dans une heure." },
      { status: 429 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, activity, message, consent } = body;

    // Required fields
    if (!name || !email || !activity) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // RGPD consent
    if (!consent) {
      return NextResponse.json(
        { error: "Le consentement au traitement des données est requis." },
        { status: 400 }
      );
    }

    // Email validation
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    // Message length
    if (message && message.length > 2000) {
      return NextResponse.json(
        { error: "Le message ne peut pas dépasser 2000 caractères." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const safeName = sanitize(String(name));
    const safeEmail = sanitize(String(email));
    const safePhone = phone ? sanitize(String(phone)) : "Non renseigné";
    const safeActivity = sanitize(String(activity));
    const safeMessage = message ? sanitize(String(message)) : "Aucun";

    const { error } = await resend.emails.send({
      from: "BiDigital <contact@bidigital.fr>",
      to: ["contact@bidigital.fr"],
      subject: `Nouveau projet — ${safeActivity} — ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouveau projet reçu</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Nom</td><td style="padding: 8px;">${safeName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Téléphone</td><td style="padding: 8px;">${safePhone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Activité</td><td style="padding: 8px;">${safeActivity}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Message</td><td style="padding: 8px;">${safeMessage}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Consentement RGPD</td><td style="padding: 8px;">Oui</td></tr>
          </table>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
