// app/api/checkout/route.ts
// Server-side checkout: re-prices the cart from the Square catalog (never
// trusts the browser's totals), checks stock, creates a Square order,
// then charges the card token from the Web Payments SDK. Card details
// never touch this server.
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getLocationId, getSquareClient } from "@/lib/square";
import { getCatalogMenu } from "@/lib/square-catalog";
import {
  deliveryFeeCents,
  priceCart,
  validateStock,
  type Fulfillment,
} from "@/lib/checkout";

type CheckoutBody = {
  sourceId?: string;
  items?: Array<{ slug: string; qty: number }>;
  customer?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  fulfillment?: Fulfillment;
  deliveryAddress?: {
    address?: string;
    city?: string;
    postalCode?: string;
  };
  notes?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CheckoutBody;

    if (!body.sourceId || typeof body.sourceId !== "string") {
      return NextResponse.json(
        { error: "Missing payment token. Please try again." },
        { status: 400 },
      );
    }
    const customer = body.customer ?? {};
    if (
      !customer.firstName?.trim() ||
      !customer.lastName?.trim() ||
      !customer.email?.trim() ||
      !customer.phone?.trim()
    ) {
      return NextResponse.json(
        { error: "Name, email and phone are required." },
        { status: 400 },
      );
    }
    if (body.fulfillment !== "pickup" && body.fulfillment !== "delivery") {
      return NextResponse.json(
        { error: "Choose pickup or delivery." },
        { status: 400 },
      );
    }
    if (body.fulfillment === "delivery") {
      const address = body.deliveryAddress ?? {};
      if (!address.address?.trim() || !address.city?.trim() || !address.postalCode?.trim()) {
        return NextResponse.json(
          { error: "Delivery address, city and postal code are required." },
          { status: 400 },
        );
      }
    }

    // Price and stock are checked against the Square catalog, never
    // against numbers sent by the browser.
    const { items: catalogItems } = await getCatalogMenu();
    let priced;
    try {
      priced = priceCart(body.items ?? [], catalogItems);
      validateStock(body.items ?? [], catalogItems);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid cart." },
        { status: 400 },
      );
    }
    const deliveryCents = deliveryFeeCents(
      body.fulfillment,
      priced.subtotalCents,
    );
    const totalCents = priced.subtotalCents + deliveryCents;

    const client = getSquareClient();
    const locationId = await getLocationId();

    const orderResponse = await client.orders.create({
      idempotencyKey: randomUUID(),
      order: {
        locationId,
        lineItems: [
          ...priced.lines.map((line) => ({
            name: `${line.item.name} (${line.item.unit})`,
            quantity: String(line.qty),
            // Link the line to the Square catalog variation so Square
            // tracks the sale against catalog inventory.
            ...(line.item.squareVariationId
              ? { catalogObjectId: line.item.squareVariationId }
              : {}),
            basePriceMoney: {
              amount: BigInt(line.item.priceCents),
              currency: "CAD",
            },
          })),
          ...(deliveryCents > 0
            ? [
                {
                  name: "Delivery (GTA)",
                  quantity: "1",
                  basePriceMoney: {
                    amount: BigInt(deliveryCents),
                    currency: "CAD",
                  },
                },
              ]
            : []),
        ],
      },
    });
    const order = orderResponse.order;
    if (!order?.id) {
      throw new Error("Square did not return an order ID.");
    }

    const noteParts = [
      "Frozen Sherpa Foods",
      body.fulfillment === "delivery" ? "Delivery" : "Pickup (Scarborough)",
      `${customer.firstName.trim()} ${customer.lastName.trim()}`,
      customer.phone.trim(),
    ];
    if (body.fulfillment === "delivery" && body.deliveryAddress) {
      noteParts.push(
        `${body.deliveryAddress.address?.trim()}, ${body.deliveryAddress.city?.trim()} ${body.deliveryAddress.postalCode?.trim()}`.trim(),
      );
    }
    if (body.notes?.trim()) noteParts.push(`Note: ${body.notes.trim()}`);
    const note = noteParts.join(" · ").slice(0, 500);

    const paymentResponse = await client.payments.create({
      sourceId: body.sourceId,
      idempotencyKey: randomUUID(),
      amountMoney: { amount: BigInt(totalCents), currency: "CAD" },
      orderId: order.id,
      locationId,
      buyerEmailAddress: customer.email.trim(),
      note,
      autocomplete: true,
    });
    const payment = paymentResponse.payment;
    if (!payment?.id) {
      throw new Error("Square did not return a payment ID.");
    }

    return NextResponse.json({
      paymentId: payment.id,
      orderId: order.id,
      status: payment.status,
      totalCents,
    });
  } catch (error) {
    console.error("Checkout failed:", error);
    const message =
      error instanceof Error ? error.message : "Checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
