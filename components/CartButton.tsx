// components/CartButton.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export function CartButton() {
  const { count, hydrated } = useCart();
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-yellow-400/40 hover:text-yellow-300"
      aria-label={`View cart, ${count} items`}
    >
      <span aria-hidden="true">🛒</span>
      <span>Cart</span>
      {hydrated && count > 0 && (
        <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1.5 py-0.5 text-xs font-bold text-black">
          {count}
        </span>
      )}
    </Link>
  );
}
