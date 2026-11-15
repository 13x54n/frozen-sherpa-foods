// lib/square-catalog.ts
// Square's catalog is the source of truth for the menu: item name,
// description, price (the item's first variation) and stock
// (Inventory API, IN_STOCK counts at the store location).
// The local list in lib/menu.ts is only a fallback so the site never
// goes blank if Square is down or the catalog is still empty.
// Menu changes are made in the Square Dashboard — there is deliberately
// no local-to-Square sync anymore, so nothing in code can overwrite
// or duplicate the catalog.
import "server-only";

import type { Square } from "square";
import { getSquareClient, getLocationId } from "./square";
import {
  FALLBACK_MENU_ITEMS,
  PLACEHOLDER_IMAGE,
  firstSentence,
  getFallbackMenuItem,
  slugify,
  type MenuItem,
} from "./menu";

export type CatalogSource = "square" | "local";

type CachedCatalog = {
  items: MenuItem[];
  source: CatalogSource;
  fetchedAt: number;
};

let cache: CachedCatalog | null = null;
const CACHE_TTL_MS = 60_000;

export function invalidateCatalogCache(): void {
  cache = null;
}

export async function getCatalogMenu(): Promise<{
  items: MenuItem[];
  source: CatalogSource;
}> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return { items: cache.items, source: cache.source };
  }
  try {
    const items = await fetchCatalogFromSquare();
    const source: CatalogSource = items.length > 0 ? "square" : "local";
    const resolved = items.length > 0 ? items : FALLBACK_MENU_ITEMS;
    cache = { items: resolved, source, fetchedAt: Date.now() };
    return { items: resolved, source };
  } catch (error) {
    console.error("Square catalog fetch failed, using local menu:", error);
    cache = {
      items: FALLBACK_MENU_ITEMS,
      source: "local",
      fetchedAt: Date.now(),
    };
    return { items: FALLBACK_MENU_ITEMS, source: "local" };
  }
}

export async function getCatalogMenuItems(): Promise<MenuItem[]> {
  const { items } = await getCatalogMenu();
  return items;
}

// --- Reading from Square ---

async function listAllCatalogObjects(): Promise<Square.CatalogObject[]> {
  const client = getSquareClient();
  const all: Square.CatalogObject[] = [];
  let cursor: string | undefined;
  do {
    const res = await client.catalog.list(cursor ? { cursor } : {});
    const objects = (res as { objects?: Square.CatalogObject[] }).objects;
    if (Array.isArray(objects)) {
      all.push(...objects);
      cursor = (res as { cursor?: string }).cursor;
    } else if (
      typeof (res as AsyncIterable<Square.CatalogObject>)[
        Symbol.asyncIterator
      ] === "function"
    ) {
      // List responses in this SDK are also async-iterable.
      for await (const obj of res as AsyncIterable<Square.CatalogObject>) {
        all.push(obj);
      }
      cursor = undefined;
    } else {
      cursor = undefined;
    }
  } while (cursor);
  return all;
}

async function fetchCatalogFromSquare(): Promise<MenuItem[]> {
  const client = getSquareClient();
  const locationId = await getLocationId();
  const objects = await listAllCatalogObjects();
  const items = objects.filter((o) => o.type === "ITEM");
  if (items.length === 0) return [];

  const imageById = new Map<string, string>();
  for (const o of objects) {
    if (o.type === "IMAGE" && o.id && o.imageData?.url) {
      imageById.set(o.id, o.imageData.url);
    }
  }

  const variationIds = items.flatMap((o) =>
    (o.itemData?.variations ?? [])
      .map((v) => v.id)
      .filter((id): id is string => Boolean(id)),
  );
  const countsByVariation = new Map<string, number>();
  if (variationIds.length > 0) {
    try {
      const countsRes = await client.inventory.batchGetCounts({
        catalogObjectIds: variationIds,
        locationIds: [locationId],
      });
      // batchGetCounts returns a paginated Page, not a response with
      // a .counts array — it is async-iterable over the counts.
      for await (const count of countsRes) {
        if (count.state !== "IN_STOCK" || !count.catalogObjectId) continue;
        const qty = parseInt(count.quantity ?? "0", 10);
        countsByVariation.set(
          count.catalogObjectId,
          (countsByVariation.get(count.catalogObjectId) ?? 0) +
            (Number.isFinite(qty) ? qty : 0),
        );
      }
    } catch (error) {
      // Inventory is optional: without counts, items show as in stock.
      console.error(
        "Square inventory fetch failed, treating stock as untracked:",
        error,
      );
    }
  }

  const mapped = items
    .map((obj) => mapSquareItem(obj, imageById, countsByVariation))
    .filter((item): item is MenuItem => item !== null);

  // Keep the site's menu order for known items; new Square items go last.
  const order = new Map(
    FALLBACK_MENU_ITEMS.map((item, i) => [item.slug, i]),
  );
  mapped.sort(
    (a, b) => (order.get(a.slug) ?? 999) - (order.get(b.slug) ?? 999),
  );
  return mapped;
}

function mapSquareItem(
  obj: Square.CatalogObject,
  imageById: Map<string, string>,
  countsByVariation: Map<string, number>,
): MenuItem | null {
  if (obj.type !== "ITEM" || !obj.itemData) {
    return null;
  }
  const data = obj.itemData;
  const variation = data?.variations?.[0];
  if (
    !variation ||
    variation.type !== "ITEM_VARIATION" ||
    !variation.itemVariationData
  ) {
    return null;
  }
  const priceMoney = variation.itemVariationData?.priceMoney;
  if (!data?.name || !variation?.id || priceMoney?.amount == null) {
    return null;
  }
  const slug = slugify(data.name);
  const fallback = getFallbackMenuItem(slug);
  const stockCount = countsByVariation.has(variation.id)
    ? countsByVariation.get(variation.id)!
    : null;
  const imageId = data.imageIds?.[0];
  return {
    slug,
    name: data.name,
    priceCents: Number(priceMoney.amount),
    unit: variation.itemVariationData?.name ?? fallback?.unit ?? "",
    // Menu cards show the first sentence of the description only.
    description: firstSentence(data.description ?? fallback?.description ?? ""),
    // The product image comes from Square, like everything else. An item
    // with no Square image shows the placeholder — never a local image,
    // and never an empty string, which breaks <Image>. To change what
    // shows here, add the photo in the Square Dashboard.
    image:
      (imageId ? imageById.get(imageId) : undefined) ?? PLACEHOLDER_IMAGE,
    spicy: fallback?.spicy,
    popular: fallback?.popular,
    squareItemId: obj.id,
    squareVariationId: variation.id,
    stockCount,
    inStock: stockCount == null ? true : stockCount > 0,
  };
}
