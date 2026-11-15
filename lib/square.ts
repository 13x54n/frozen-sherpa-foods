// lib/square.ts
// Server-only Square client. The access token never leaves the server.
import "server-only";
import { SquareClient, SquareEnvironment } from "square";

export function getSquareEnvironment(): SquareEnvironment {
  return process.env.SQUARE_ENVIRONMENT === "production"
    ? SquareEnvironment.Production
    : SquareEnvironment.Sandbox;
}

export function getSquareEnvironmentName(): "production" | "sandbox" {
  return process.env.SQUARE_ENVIRONMENT === "production"
    ? "production"
    : "sandbox";
}

export function getSquareClient(): SquareClient {
  const token = process.env.SQUARE_ACCESS_TOKEN;
  if (!token) {
    throw new Error(
      "SQUARE_ACCESS_TOKEN is not set. Add it to .env.local (see .env.example).",
    );
  }
  return new SquareClient({ token, environment: getSquareEnvironment() });
}

let cachedLocationId: string | null = null;

// The location ID is needed for every order and payment. If it is not set
// in .env.local, look it up once from Square and reuse it.
export async function getLocationId(): Promise<string> {
  if (process.env.SQUARE_LOCATION_ID) return process.env.SQUARE_LOCATION_ID;
  if (cachedLocationId) return cachedLocationId;
  const client = getSquareClient();
  const { locations } = await client.locations.list();
  const first = locations?.[0];
  if (!first?.id) {
    throw new Error(
      "No Square location found for this account. Set SQUARE_LOCATION_ID in .env.local.",
    );
  }
  cachedLocationId = first.id;
  return first.id;
}
