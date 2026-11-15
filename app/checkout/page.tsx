// app/checkout/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart";
import { formatCAD } from "@/lib/menu";
import {
  deliveryFeeCents,
  priceCart,
  type Fulfillment,
} from "@/lib/checkout";
import { loadSquareSdk, type SquareCard } from "@/lib/square-web";

type SquareConfig = {
  applicationId: string;
  locationId: string;
  environment: "sandbox" | "production";
};

const inputClass =
  "w-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-yellow-400/60 focus:outline-none";

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, subtotalCents, clearCart, hydrated, items, getItem } =
    useCart();

  const [config, setConfig] = useState<SquareConfig | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);
  const [cardReady, setCardReady] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [notes, setNotes] = useState("");

  const cardRef = useRef<SquareCard | null>(null);

  // Fulfillment choice made on the cart page carries over.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("frozen-sherpa-fulfillment");
      if (saved === "delivery" || saved === "pickup") setFulfillment(saved);
    } catch {
      // Ignore — pickup is the default.
    }
  }, []);

  // Load the Square Web Payments SDK and attach the card form.
  // NOTE: in development React StrictMode runs this effect twice
  // (setup -> cleanup -> setup). Setup must therefore be safe to repeat:
  // a cancelled run destroys any card it created, and the next run
  // attaches a fresh one. The previous version used a ref guard that
  // blocked the second run entirely, which left the form stuck at
  // "Loading secure card form…" forever.
  useEffect(() => {
    let cancelled = false;
    let card: SquareCard | null = null;
    (async () => {
      try {
        const res = await fetch("/api/square-config");
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error ?? "Could not load Square configuration.");
        }
        const cfg = data as SquareConfig;
        if (cancelled) return;
        setConfig(cfg);
        await loadSquareSdk(cfg.environment);
        if (cancelled || !window.Square) return;
        const payments = await window.Square.payments(
          cfg.applicationId,
          cfg.locationId,
        );
        card = await payments.card();
        if (cancelled) {
          card.destroy?.();
          return;
        }
        await card.attach("#card-container");
        if (cancelled) {
          card.destroy?.();
          return;
        }
        cardRef.current = card;
        setCardReady(true);
      } catch (e) {
        console.error("Square card setup failed:", e);
        if (!cancelled) {
          setConfigError(
            e instanceof Error
              ? e.message
              : "Could not set up card payments.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
      const current = cardRef.current ?? card;
      if (current) {
        current.destroy?.();
        cardRef.current = null;
      }
      setCardReady(false);
    };
  }, []);

  let pricedSubtotal = subtotalCents;
  try {
    if (lines.length > 0) pricedSubtotal = priceCart(lines, items).subtotalCents;
  } catch {
    pricedSubtotal = subtotalCents;
  }
  const deliveryCents = deliveryFeeCents(fulfillment, pricedSubtotal);
  const totalCents = pricedSubtotal + deliveryCents;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!cardRef.current || !config) {
      setError("Card payments are not ready yet. Please wait a moment and try again.");
      return;
    }
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in your name, email and phone.");
      return;
    }
    if (
      fulfillment === "delivery" &&
      (!address.trim() || !city.trim() || !postalCode.trim())
    ) {
      setError("Please fill in the full delivery address.");
      return;
    }
    setProcessing(true);
    try {
      const tokenResult = await cardRef.current.tokenize({
        amount: (totalCents / 100).toFixed(2),
        billingContact: {
          givenName: firstName.trim(),
          familyName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          ...(fulfillment === "delivery"
            ? {
                addressLines: [address.trim()],
                city: city.trim(),
                postalCode: postalCode.trim(),
              }
            : {}),
          countryCode: "CA",
        },
        currencyCode: "CAD",
        intent: "CHARGE",
        customerInitiated: true,
        sellerKeyedIn: false,
      });
      if (tokenResult.status !== "OK" || !tokenResult.token) {
        const detail = tokenResult.errors
          ?.map((err) => err.message ?? err.detail ?? err.code)
          .filter(Boolean)
          .join("; ");
        throw new Error(
          detail
            ? `Card could not be verified: ${detail}`
            : `Card could not be verified (${tokenResult.status}).`,
        );
      }
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceId: tokenResult.token,
          items: lines,
          customer: {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phone.trim(),
          },
          fulfillment,
          deliveryAddress:
            fulfillment === "delivery"
              ? {
                  address: address.trim(),
                  city: city.trim(),
                  postalCode: postalCode.trim(),
                }
              : undefined,
          notes: notes.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? "Payment failed. Please try again.");
      }
      clearCart();
      router.push(
        `/checkout/success?paymentId=${encodeURIComponent(data.paymentId)}&orderId=${encodeURIComponent(data.orderId)}&total=${data.totalCents}`,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Payment failed. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (hydrated && lines.length === 0) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold">Nothing to check out</h1>
          <p className="mt-3 text-white/60">Your cart is empty.</p>
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
        <h1 className="text-3xl font-semibold">Checkout</h1>
        <p className="mt-2 text-sm text-white/60">
          Secure card payment by Square. Your card details go straight to
          Square — they never touch our server.
        </p>

        {config?.environment === "sandbox" && (
          <p className="mt-4 border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm text-yellow-300">
            Sandbox test mode — use a Square test card. No real money moves.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]"
        >
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold">Your details</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  className={inputClass}
                  placeholder="First name"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className={inputClass}
                  placeholder="Last name"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  className={inputClass}
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={inputClass}
                  placeholder="Phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold">Pickup or delivery</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                      Free on orders $99.99+, otherwise $9.99.
                    </span>
                  </span>
                </label>
              </div>
              {fulfillment === "delivery" && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <input
                    className={`${inputClass} sm:col-span-2`}
                    placeholder="Street address"
                    autoComplete="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className={inputClass}
                    placeholder="City"
                    autoComplete="address-level2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    className={inputClass}
                    placeholder="Postal code"
                    autoComplete="postal-code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              )}
              <textarea
                className={`${inputClass} mt-4 min-h-20 resize-y`}
                placeholder="Anything we should know? (optional — e.g. gate code, preferred pickup time)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </section>

            <section>
              <h2 className="text-lg font-semibold">Card payment</h2>
              {configError ? (
                <div className="mt-4 border border-red-400/40 bg-red-400/10 px-4 py-3">
                  <p className="text-sm text-red-300">{configError}</p>
                  <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="mt-3 border border-red-400/40 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-400/10"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <>
                  <div
                    id="card-container"
                    className="mt-4 min-h-24 border border-white/20 bg-white/5 p-4"
                  />
                  {!cardReady && (
                    <p className="mt-2 text-sm text-white/50">
                      Loading secure card form…
                    </p>
                  )}
                </>
              )}
            </section>

            {error && (
              <p className="border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={processing || !cardReady || lines.length === 0}
              className="w-full bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing
                ? "Processing…"
                : `Pay ${formatCAD(totalCents)}`}
            </button>
          </div>

          <aside className="h-fit border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {lines.map((line) => {
                const item = getItem(line.slug);
                if (!item) return null;
                return (
                  <li key={line.slug} className="flex justify-between gap-3">
                    <span className="text-white/80">
                      {item.name} × {line.qty}
                    </span>
                    <span>{formatCAD(item.priceCents * line.qty)}</span>
                  </li>
                );
              })}
            </ul>
            <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-white/60">Subtotal</dt>
                <dd>{formatCAD(pricedSubtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/60">
                  {fulfillment === "pickup" ? "Pickup" : "Delivery"}
                </dt>
                <dd>{deliveryCents === 0 ? "Free" : formatCAD(deliveryCents)}</dd>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 text-base font-semibold">
                <dt>Total</dt>
                <dd className="text-yellow-300">{formatCAD(totalCents)}</dd>
              </div>
            </dl>
            <Link
              href="/cart"
              className="mt-4 block text-center text-sm text-white/60 transition hover:text-yellow-300"
            >
              ← Back to cart
            </Link>
          </aside>
        </form>
      </div>
    </main>
  );
}
