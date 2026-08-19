import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const body = await request.json();

  const customer = body?.customer ?? {};
  const items = Array.isArray(body?.items) ? body.items : [];

  if (
    !customer?.name ||
    !customer?.email ||
    !customer?.address ||
    items.length === 0
  ) {
    return NextResponse.json(
      { message: "Invalid checkout payload" },
      { status: 400 }
    );
  }

  if (!stripe) {
    return NextResponse.json(
      {
        message:
          "Stripe is not configured. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_APP_URL."
      },
      { status: 503 }
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: String(customer.email),
    success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/checkout`,
    line_items: items.map((item: any) => ({
      price_data: {
        currency: "sgd",
        unit_amount: Math.round(Number(item.unitPrice) * 100),
        product_data: {
          name: String(item.name)
        }
      },
      quantity: Number(item.quantity) || 1
    })),
    metadata: {
      customerName: String(customer.name),
      customerAddress: String(customer.address),
      itemCount: String(items.length)
    }
  });

  return NextResponse.json({ url: session.url }, { status: 200 });
}
