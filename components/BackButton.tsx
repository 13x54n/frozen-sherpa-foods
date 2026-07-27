// components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
      type="button"
    >
      <span aria-hidden="true">←</span>
      Back
    </button>
  );
}