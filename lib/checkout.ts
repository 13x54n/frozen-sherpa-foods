// lib/checkout.ts
// Shared, client-safe pricing logic. The server re-runs this on every
// checkout against the Square catalog, so a tampered browser total can
// never change what is charged.
import {
  DELIVERY_FEE_CENTS,
  FREE_DELIVERY_MIN_CENTS,
  type MenuItem,
} from "./menu";

export type CartLineInput = { slug: string; qty: number };

export type PricedLine = {
  item: MenuItem;
  qty: number;
  lineTotalCents: number;
};

export type Fulfillment = "pickup" | "delivery";

export function priceCart(
  lines: CartLineInput[],
  items: MenuItem[],
): {
  lines: PricedLine[];
  subtotalCents: number;
} {
  if (!Array.isArray(lines) || lines.length === 0) {
    throw new Error("Cart is empty.");
  }
  const priced: PricedLine[] = lines.map((line) => {
    const item = items.find((i) => i.slug === line.slug);
    const qty = Math.floor(Number(line.qty));
    if (!item) throw new Error(`Unknown menu item: ${line.slug}`);
    if (!Number.isFinite(qty) || qty < 1 || qty > 99) {
      throw new Error(`Invalid quantity for ${item.name}.`);
    }
    return { item, qty, lineTotalCents: item.priceCents * qty };
  });
  return {
    lines: priced,
    subtotalCents: priced.reduce((sum, line) => sum + line.lineTotalCents, 0),
  };
}

export function validateStock(lines: CartLineInput[], items: MenuItem[]): void {
  for (const line of lines) {
    const item = items.find((i) => i.slug === line.slug);
    if (!item) throw new Error(`Unknown menu item: ${line.slug}`);
    if (!item.inStock) throw new Error(`${item.name} is out of stock.`);
    if (item.stockCount != null && line.qty > item.stockCount) {
      throw new Error(
        `Only ${item.stockCount} × ${item.name} left in stock.`,
      );
    }
  }
}

export function deliveryFeeCents(
  fulfillment: Fulfillment,
  subtotalCents: number,
): number {
  if (fulfillment === "pickup") return 0;
  if (subtotalCents >= FREE_DELIVERY_MIN_CENTS) return 0;
  return DELIVERY_FEE_CENTS;
}
