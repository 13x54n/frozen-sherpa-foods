// app/api/square-config/route.ts
// Returns the public Square settings the checkout page needs:
// application ID, location ID, and environment. The access token
// is never exposed here.
import { NextResponse } from "next/server";
import { getLocationId, getSquareEnvironmentName } from "@/lib/square";

export async function GET() {
  const applicationId = process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID;
  if (!applicationId) {
    return NextResponse.json(
      {
        error:
          "Square application ID is not configured. Add NEXT_PUBLIC_SQUARE_APPLICATION_ID to .env.local.",
      },
      { status: 500 },
    );
  }
  try {
    const locationId = await getLocationId();
    return NextResponse.json({
      applicationId,
      locationId,
      environment: getSquareEnvironmentName(),
    });
  } catch (error) {
    console.error("Square config failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Could not load Square configuration.",
      },
      { status: 500 },
    );
  }
}
