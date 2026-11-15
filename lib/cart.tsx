// lib/cart.tsx
// Cart state, persisted in the browser's localStorage so it survives
// a page refresh. Prices and stock always come from the Square catalog
// (via /api/menu); the local list in lib/menu.ts is only a fallback
// while that loads or if Square is unreachable.
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  FALLBACK_MENU_ITEMS,
  type MenuItem,
} from "./menu";

export type CartLine = { slug: string; qty: number };

export type CatalogSource = "square" | "local";

type CartContextValue = {
  lines: CartLine[];
  items: MenuItem[];
  catalogSource: CatalogSource;
  catalogLoading: boolean;
  getItem: (slug: string) => MenuItem | undefined;
  count: number;
  subtotalCents: number;
  hydrated: boolean;
  addItem: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "frozen-sherpa-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [items, setItems] = useState<MenuItem[]>(FALLBACK_MENU_ITEMS);
  const [catalogSource, setCatalogSource] =
    useState<CatalogSource>("local");
  const [catalogLoading, setCatalogLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) {
          setLines(
            parsed.filter(
              (line) =>
                FALLBACK_MENU_ITEMS.some((i) => i.slug === line.slug) &&
                line.qty > 0,
            ),
          );
        }
      }
    } catch {
      // Corrupt saved cart — start empty.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
      } catch {
        // Storage full or unavailable — cart still works for this visit.
      }
    }
  }, [lines, hydrated]);

  // Load the menu (name, price, stock) from Square on every visit.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        if (!cancelled && res.ok && Array.isArray(data.items)) {
          setItems(data.items as MenuItem[]);
          setCatalogSource(data.source === "square" ? "square" : "local");
        }
      } catch {
        // Keep the local fallback — the cart still works.
      }
      if (!cancelled) setCatalogLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const getItem = (slug: string) => items.find((i) => i.slug === slug);
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const subtotalCents = lines.reduce(
      (sum, line) => sum + (getItem(line.slug)?.priceCents ?? 0) * line.qty,
      0,
    );
    const maxQtyFor = (slug: string) => {
      const item = getItem(slug);
      if (!item) return 99;
      if (item.stockCount != null) return Math.max(0, item.stockCount);
      return 99;
    };
    return {
      lines,
      items,
      catalogSource,
      catalogLoading,
      getItem,
      count,
      subtotalCents,
      hydrated,
      addItem: (slug, qty = 1) => {
        const max = maxQtyFor(slug);
        if (max <= 0) return;
        setLines((prev) => {
          const found = prev.find((line) => line.slug === slug);
          if (found) {
            return prev.map((line) =>
              line.slug === slug
                ? { ...line, qty: Math.min(max, line.qty + qty) }
                : line,
            );
          }
          return [...prev, { slug, qty: Math.min(max, qty) }];
        });
      },
      setQty: (slug, qty) =>
        setLines((prev) => {
          const capped = Math.min(maxQtyFor(slug), qty);
          if (capped <= 0) {
            return prev.filter((line) => line.slug !== slug);
          }
          return prev.map((line) =>
            line.slug === slug ? { ...line, qty: capped } : line,
          );
        }),
      removeItem: (slug) =>
        setLines((prev) => prev.filter((line) => line.slug !== slug)),
      clearCart: () => setLines([]),
    };
  }, [lines, hydrated, items, catalogSource, catalogLoading]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
