// lib/square-web.ts
// Minimal types + loader for the Square Web Payments SDK (browser side).
// The SDK is loaded from Square's CDN — card details never touch our server.
export type SquareCard = {
  attach: (selector: string) => Promise<void>;
  destroy?: () => void;
  tokenize: (details?: Record<string, unknown>) => Promise<{
    status: string;
    token?: string;
    errors?: Array<{ code?: string; message?: string; detail?: string }>;
  }>;
};

export type SquarePayments = {
  card: () => Promise<SquareCard>;
};

export type SquareWebSdk = {
  payments: (applicationId: string, locationId: string) => Promise<SquarePayments>;
};

declare global {
  interface Window {
    Square?: SquareWebSdk;
  }
}

const SDK_URLS = {
  sandbox: "https://sandbox.web.squarecdn.com/v1/square.js",
  production: "https://web.squarecdn.com/v1/square.js",
} as const;

export function loadSquareSdk(
  environment: "sandbox" | "production",
): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Square SDK can only load in the browser."),
    );
  }
  if (window.Square) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SDK_URLS[environment];
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error("Failed to load the Square Web Payments SDK."));
    document.head.appendChild(script);
  });
}
