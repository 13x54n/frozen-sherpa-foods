// lib/menu.ts
// The LOCAL menu list mirrors Square's 7 items (names, prices, units and
// descriptions as in the Square catalog, Nov 14, 2026). It is only a
// fallback so the site never goes blank if Square is unreachable.
// Square's catalog is the source of truth for name, description, price
// (the item's first variation) and stock. Change prices, descriptions
// and photos in the Square Dashboard, not here.

export type MenuItem = {
  slug: string;
  name: string;
  priceCents: number;
  unit: string;
  description: string;
  image: string;
  spicy?: boolean;
  popular?: boolean;
  squareItemId?: string;
  squareVariationId?: string;
  /** null = Square does not track stock for this item; treat as available. */
  stockCount: number | null;
  inStock: boolean;
};

export const CURRENCY = "CAD";

// Used when a Square item has no image of its own. Real images should
// be added in the Square Dashboard; this just keeps the page from
// rendering a broken <Image>.
export const PLACEHOLDER_IMAGE =
  "https://ik.imagekit.io/qd2adfgrv/momo-cover.avif";

// Free delivery on orders of $99.99+, matching the site's current promise.
export const FREE_DELIVERY_MIN_CENTS = 9999;
// Flat delivery fee for orders under $99.99 — confirm this amount with Laxman.
export const DELIVERY_FEE_CENTS = 999;

// Order matches the menu as shown Nov 14, 2026; the catalog mapper also
// sorts Square items by this order.
export const FALLBACK_MENU_ITEMS: MenuItem[] = [
  {
    slug: "pork-sekuwa",
    name: "Pork Sekuwa",
    priceCents: 1199,
    unit: "Regular - 400g",
    description:
      "Pork Sekuwa is a traditional Nepalese dish consisting of pork marinated in a blend of spices, herbs, ginger, garlic, and yogurt, then grilled over an open wood fire or charcoal to achieve a smoky, charred flavor. It is a popular street food and festival dish, particularly in Kathmandu and the Sunsari District of Eastern Nepal, and is typically served with chiura(beaten rice), achaar (spicy pickle), and sliced vegetables.",
    image:
      "https://images.unsplash.com/photo-1776766237026-47ced47d3779?q=80&w=1470&auto=format&fit=crop",
    stockCount: null,
    inStock: true,
  },
  {
    slug: "sandwich",
    name: "Sandwich",
    priceCents: 1999,
    unit: "Regular - 5 pieces",
    description:
      "Grilled chicken breast, topped with a perfectly cooked egg, crisp veggies, and a zesty chipotle mayo, all served on hearty sourdough bread.",
    image:
      "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?q=80&w=1025&auto=format&fit=crop",
    stockCount: null,
    inStock: true,
  },
  {
    slug: "chicken-momo",
    name: "Chicken Momo",
    priceCents: 3499,
    unit: "Regular - 50 pieces",
    description:
      "At Frozen Sherpa Foods, our chicken momos are handcrafted with care, bringing the authentic taste of the Himalayas straight to your plate. Each dumpling is filled with juicy, finely seasoned chicken, mixed with fresh herbs, ginger, garlic, and traditional spices, then delicately wrapped in soft, thin dough. Served with our signature house-made achar (spicy dipping sauce), these momos offer the perfect balance of savory, spicy, and comforting goodness—just like the streets of Nepal and Tibet. Whether you’re craving a quick bite or a satisfying meal, our chicken momos are a must-try favorite.",
    image: "https://ik.imagekit.io/qd2adfgrv/momo-cover.avif",
    stockCount: null,
    inStock: true,
  },
  {
    slug: "achar",
    name: "Achar",
    priceCents: 599,
    unit: "Regular - 8oz",
    description:
      "Achar is a traditional Nepali condiment characterized by its spicy and tangy flavors, crafted from a blend of fresh chilies, garlic, ginger, and lemon juice. Often paired with momo sauce, it adds a vibrant kick to any dish.",
    image: PLACEHOLDER_IMAGE,
    stockCount: null,
    inStock: true,
  },
  {
    slug: "momo-jhol",
    name: "Momo Jhol",
    priceCents: 599,
    unit: "Regular - 8oz",
    description:
      "Spicy, soupy Nepali-style sauce served with momos, and the peanuts give it a rich, nutty flavor and a slightly thicker texture. It’s usually made by roasting peanuts with sesame seeds, then blending them with tomatoes, onion, garlic, ginger, chilies, and spices before thinning it with water to a pourable gravy.",
    image: PLACEHOLDER_IMAGE,
    stockCount: null,
    inStock: true,
  },
  {
    slug: "pork-momo",
    name: "Pork Momo",
    priceCents: 3499,
    unit: "Regular - 50 pieces",
    description:
      "Pork momo is a popular Nepali dumpling known for its juicy, flavorful filling and soft, delicate wrapper. Made with finely minced pork mixed with aromatic ingredients like garlic, ginger, onions, and spices, each bite delivers a rich and savory taste that’s both comforting and satisfying. The dumplings are typically steamed to keep them tender and moist, allowing the natural flavors of the pork to shine through.",
    image: "https://ik.imagekit.io/qd2adfgrv/momo-cover.avif",
    stockCount: null,
    inStock: true,
  },
  {
    slug: "riki-kur-potato-pancake",
    name: "Riki Kur (Potato Pancake)",
    priceCents: 499,
    unit: "Regular - 5 pieces",
    description:
      "Riki kur is a traditional Sherpa potato pancake from Nepal, made from grated potatoes mixed with flour and often eggs, then pan-fried until golden. It’s usually served warm with a flavorful chutney or achar, often made with chili, spring onion, and yogurt or cheese, giving it a savory, comforting taste.",
    image: "/rikikur.webp",
    stockCount: null,
    inStock: true,
  },
];

/** Backwards-compatible alias: the local list is the fallback, not the truth. */
export const MENU_ITEMS = FALLBACK_MENU_ITEMS;

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getMenuItem(slug: string): MenuItem | undefined {
  return FALLBACK_MENU_ITEMS.find((item) => item.slug === slug);
}

export function getFallbackMenuItem(slug: string): MenuItem | undefined {
  return getMenuItem(slug);
}

export function formatCAD(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

/** Menu cards show the first sentence of a description only. Returns the
 *  text up to and including the first sentence-ending mark (. ! ?) that
 *  is followed by a space or the end of the text; a description with no
 *  such mark is returned whole. */
export function firstSentence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0].trim() : trimmed;
}
