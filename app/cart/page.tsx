// app/cart/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatCAD, FREE_DELIVERY_MIN_CENTS } from "@/lib/menu";
import { deliveryFeeCents, type Fulfillment } from "@/lib/checkout";

export default function CartPage() {
  const { lines, setQty, removeItem, subtotalCents, hydrated, getItem } =
    useCart();
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("frozen-sherpa-fulfillment");
      if (saved === "delivery" || saved === "pickup") setFulfillment(saved);
    } catch {
      // Ignore — pickup is the default.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("frozen-sherpa-fulfillment", fulfillment);
    } catch {
      // Ignore — checkout still works, it just defaults to pickup.
    }
  }, [fulfillment]);

  const deliveryCents = deliveryFeeCents(fulfillment, subtotalCents);
  const totalCents = subtotalCents + deliveryCents;

  if (hydrated && lines.length === 0) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold">Your cart is empty</h1>
          <p className="mt-3 text-white/60">
            Add some momo, riki kur, or keema noodles to get started.
          </p>
          <Link
            href="/menu"
            className="mt-8 inline-flex bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Browse the menu →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        <p className="mt-2 text-sm text-white/60">
          Frozen meals from Scarborough — pickup or delivery across the GTA.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-4">
            {lines.map((line) => {
              const item = getItem(line.slug);
              if (!item) return null;
              return (
                <article
                  key={line.slug}
                  className="flex gap-4 border border-white/10 bg-white/5 p-4"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-sm text-white/60">
                          {formatCAD(item.priceCents)} · {item.unit}
                        </p>
                      </div>
                      <p className="font-semibold text-yellow-300">
                        {formatCAD(item.priceCents * line.qty)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex items-center border border-white/20">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => setQty(line.slug, line.qty - 1)}
                          className="px-3 py-1.5 text-white/80 transition hover:text-yellow-300"
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => setQty(line.slug, line.qty + 1)}
                          className="px-3 py-1.5 text-white/80 transition hover:text-yellow-300"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.slug)}
                        className="text-sm text-white/50 transition hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                    {!item.inStock && (
                      <p className="mt-2 text-xs text-red-300">
                        Out of stock — remove this item to check out.
                      </p>
                    )}
                    {item.inStock &&
                      item.stockCount != null &&
                      item.stockCount < line.qty && (
                        <p className="mt-2 text-xs text-yellow-300">
                          Only {item.stockCount} left in stock.
                        </p>
                      )}
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="h-fit border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">How would you like it?</h2>
            <div className="mt-4 space-y-3">
              <label className="flex cursor-pointer items-start gap-3 border border-white/10 p-4 transition hover:border-yellow-400/40">
                <input
                  type="radio"
                  name="fulfillment"
                  checked={fulfillment === "pickup"}
                  onChange={() => setFulfillment("pickup")}
                  className="mt-1 accent-yellow-400"
                />
                <span>
                  <span className="block font-medium">Pickup — Scarborough</span>
                  <span className="block text-sm text-white/60">
                    Free. We&apos;ll call to confirm a pickup time.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 border border-white/10 p-4 transition hover:border-yellow-400/40">
                <input
                  type="radio"
                  name="fulfillment"
                  checked={fulfillment === "delivery"}
                  onChange={() => setFulfillment("delivery")}
                  className="mt-1 accent-yellow-400"
                />
                <span>
                  <span className="block font-medium">Delivery — GTA</span>
                  <span className="block text-sm text-white/60">
                    Free on orders {formatCAD(FREE_DELIVERY_MIN_CENTS)}+, otherwise{" "}
                    {formatCAD(deliveryCents)}.
                  </span>
                </span>
              </label>
            </div>

            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-white/60">Subtotal</dt>
                <dd>{formatCAD(subtotalCents)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/60">Delivery</dt>
                <dd>{deliveryCents === 0 ? "Free" : formatCAD(deliveryCents)}</dd>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 text-base font-semibold">
                <dt>Total</dt>
                <dd className="text-yellow-300">{formatCAD(totalCents)}</dd>
              </div>
            </dl>

            <Link
              href="/checkout"
              className="mt-6 block bg-yellow-400 px-6 py-3 text-center text-sm font-semibold text-black transition hover:bg-yellow-300"
            >
              Proceed to checkout →
            </Link>
            <Link
              href="/menu"
              className="mt-3 block text-center text-sm text-white/60 transition hover:text-yellow-300"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
