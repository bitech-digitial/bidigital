import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export async function POST(req: NextRequest) {
  let body: { token?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { token } = body;

  if (!token) {
    return NextResponse.json({ error: "Token manquant." }, { status: 400 });
  }

  const contractSession = await db.contractSession.findUnique({
    where: { token },
  });

  if (!contractSession) {
    return NextResponse.json({ error: "Session introuvable." }, { status: 404 });
  }

  if (contractSession.paid) {
    return NextResponse.json({ error: "Déjà payé." }, { status: 409 });
  }

  const origin =
    req.headers.get("origin") ??
    req.headers.get("referer")?.replace(/\/$/, "") ??
    "https://bidigital.fr";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer_email: contractSession.email,
    line_items: [
      {
        price:
          contractSession.offre === "ecommerce"
            ? process.env.STRIPE_PRICE_ECOMMERCE!
            : process.env.STRIPE_PRICE_VITRINE!,
        quantity: 1,
      },
    ],
    success_url: `${origin}/paiement/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/tunnel`,
    allow_promotion_codes: true,
    metadata: { token },
    subscription_data: { metadata: { token } },
  });

  await db.contractSession.update({
    where: { token },
    data: { checkoutSessionId: checkoutSession.id },
  });

  return NextResponse.json({ url: checkoutSession.url });
}
