import { NextResponse } from "next/server";
import { createOrder, getOrders } from "@/lib/orders";

export async function GET() {
  const orders = await getOrders();
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (
    !body?.customer?.name ||
    !body?.customer?.email ||
    !body?.customer?.address ||
    !Array.isArray(body?.items) ||
    body.items.length === 0
  ) {
    return NextResponse.json(
      { message: "Invalid order payload" },
      { status: 400 }
    );
  }

  const order = await createOrder(body);
  return NextResponse.json(order, { status: 201 });
}
