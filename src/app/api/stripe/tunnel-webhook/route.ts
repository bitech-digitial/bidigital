import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";
import { generateContractPDF } from "@/lib/pdf";
import {
  sendClientConfirmationEmail,
  sendInternalAlertEmail,
} from "@/lib/email/send";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Signature manquante." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_TUNNEL_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Webhook invalide." }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const checkoutSession = event.data.object as Stripe.Checkout.Session;
  const token = checkoutSession.metadata?.token;

  if (!token) {
    return NextResponse.json({ error: "Token manquant dans metadata." }, { status: 400 });
  }

  const contractSession = await db.contractSession.findUnique({
    where: { token },
  });

  if (!contractSession || contractSession.paid) {
    return NextResponse.json({ received: true });
  }

  await db.contractSession.update({
    where: { token },
    data: {
      paid: true,
      paidAt: new Date(),
      stripeCustomerId: checkoutSession.customer as string | null,
    },
  });

  const pdfBuffer = await generateContractPDF({
    email: contractSession.email,
    nom: contractSession.nom,
    signatureData: contractSession.signatureData,
    ip: contractSession.ip,
    signedAt: contractSession.signedAt,
  });

  const sessionData = {
    email: contractSession.email,
    nom: contractSession.nom,
    ip: contractSession.ip,
    userAgent: contractSession.userAgent,
    signedAt: contractSession.signedAt,
    stripeCustomerId: checkoutSession.customer as string | null,
  };

  await Promise.all([
    sendClientConfirmationEmail(sessionData, pdfBuffer),
    sendInternalAlertEmail(sessionData),
  ]);

  return NextResponse.json({ received: true });
}
