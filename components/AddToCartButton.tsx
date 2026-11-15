// components/AddToCartButton.tsx
"use client";

import { useState } from "react";
import { formatCAD } from "@/lib/menu";
import { useCart } from "@/lib/cart";

export function AddToCartButton({ slug }: { slug: string }) {
  const { addItem, getItem } = useCart();
  const item = getItem(slug);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  // Items not in the purchasable catalog (e.g. expired Tihar combos)
  // get no button.
  if (!item) return null;

  if (!item.inStock) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex cursor-not-allowed items-center gap-2 border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/40"
      >
        Out of stock
      </button>
    );
  }

  const maxQty = item.stockCount != null ? Math.max(1, item.stockCount) : 99;

  const handleAdd = () => {
    addItem(slug, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex items-center border border-white/20">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-3 py-2 text-lg text-white/80 transition hover:text-yellow-300"
        >
          −
        </button>
        <span className="min-w-8 text-center text-sm font-semibold">{qty}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
          className="px-3 py-2 text-lg text-white/80 transition hover:text-yellow-300"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex items-center gap-2 bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
      >
        {added ? "Added ✓" : `Add to cart · ${formatCAD(item.priceCents * qty)}`}
      </button>
      {item.stockCount != null && item.stockCount <= 5 && (
        <span className="text-xs text-yellow-300">
          Only {item.stockCount} left
        </span>
      )}
    </div>
  );
}
