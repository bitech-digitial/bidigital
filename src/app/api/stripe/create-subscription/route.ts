import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// In-memory rate limiter: 3 requêtes par heure par IP
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

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

const PRICE_MAP: Record<string, string | undefined> = {
  vitrine: process.env.STRIPE_PRICE_VITRINE,
  ecommerce: process.env.STRIPE_PRICE_ECOMMERCE,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
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

    const body = await req.json();
    const { email, offre } = body as { email: string; offre: string };

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 });
    }

    const priceId = PRICE_MAP[offre];
    if (!priceId) {
      return NextResponse.json({ error: "Offre invalide." }, { status: 400 });
    }

    // Cherche ou crée le Customer Stripe
    const existing = await stripe.customers.list({ email, limit: 1 });
    const customer =
      existing.data[0] ?? (await stripe.customers.create({ email }));

    // Crée la Subscription en mode "incomplete" pour capturer le paiement
    // On demande les deux expand possibles selon la version de l'API Stripe
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
        payment_method_types: ["card"],
      },
      expand: [
        "latest_invoice.payment_intent",
        "latest_invoice.confirmation_secret",
      ],
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const invoiceRaw = subscription.latest_invoice as any;
    const invoiceId: string | undefined = invoiceRaw?.id;

    // Tentative 1 : payment_intent (API classique)
    let clientSecret: string | null =
      invoiceRaw?.payment_intent?.client_secret ?? null;

    // Tentative 2 : confirmation_secret (API Stripe v17 dahlia)
    if (!clientSecret) {
      clientSecret = invoiceRaw?.confirmation_secret?.client_secret ?? null;
    }

    // Tentative 3 : récupérer l'invoice séparément avec les deux expands
    if (!clientSecret && invoiceId) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inv = await stripe.invoices.retrieve(invoiceId, {
        expand: ["payment_intent", "confirmation_secret"],
      }) as any;
      clientSecret =
        inv?.payment_intent?.client_secret ??
        inv?.confirmation_secret?.client_secret ??
        null;
    }

    if (!clientSecret) {
      return NextResponse.json(
        { error: "Impossible de créer le paiement." },
        { status: 500 }
      );
    }

    return NextResponse.json({ clientSecret });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur serveur.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
