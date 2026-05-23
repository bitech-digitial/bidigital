import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

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
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      payment_settings: { save_default_payment_method: "on_subscription" },
      expand: ["latest_invoice"],
    });

    // Le SDK Stripe v17 expose confirmation_secret.client_secret sur Invoice
    const invoice = subscription.latest_invoice as Stripe.Invoice;
    const clientSecret = invoice?.confirmation_secret?.client_secret ?? null;

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
