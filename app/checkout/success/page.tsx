// app/checkout/success/page.tsx
"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/lib/cart";
import { formatCAD } from "@/lib/menu";

function SuccessContent() {
  const params = useSearchParams();
  const { clearCart } = useCart();
  const paymentId = params.get("paymentId") ?? "";
  const orderId = params.get("orderId") ?? "";
  const total = Number(params.get("total") ?? "0");

  // The cart was already cleared on the checkout page; this is a safety net
  // for refreshes and back-button visits.
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-5xl" aria-hidden="true">
          🎉
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Thank you — order confirmed!</h1>
        <p className="mt-3 text-white/70">
          Your payment went through. We&apos;ll call you to confirm your
          pickup or delivery time.
        </p>
        <div className="mx-auto mt-8 max-w-md border border-white/10 bg-white/5 p-6 text-left text-sm">
          {total > 0 && (
            <p className="flex justify-between">
              <span className="text-white/60">Total paid</span>
              <span className="font-semibold text-yellow-300">
                {formatCAD(total)}
              </span>
            </p>
          )}
          {orderId && (
            <p className="mt-2 flex justify-between gap-4">
              <span className="text-white/60">Order</span>
              <span className="break-all font-mono text-xs">{orderId}</span>
            </p>
          )}
          {paymentId && (
            <p className="mt-2 flex justify-between gap-4">
              <span className="text-white/60">Payment</span>
              <span className="break-all font-mono text-xs">{paymentId}</span>
            </p>
          )}
          <p className="mt-4 text-white/60">
            Questions? Call (416) 725-8527 or email
            frozensherpafoods@outlook.com.
          </p>
        </div>
        <Link
          href="/menu"
          className="mt-8 inline-flex bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
        >
          Back to the menu →
        </Link>
      </div>
    </main>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-black px-6 py-16 text-center text-white">
          <p className="text-white/60">Loading your confirmation…</p>
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
