// app/api/menu/route.ts
// Public menu data: name, description, price and stock, all from Square.
// `source` is "square" once the catalog has items, "local" while the
// site is still running on the fallback list (before the first sync).
import { NextResponse } from "next/server";
import { getCatalogMenu } from "@/lib/square-catalog";

export async function GET() {
  const { items, source } = await getCatalogMenu();
  return NextResponse.json({ source, items });
}
