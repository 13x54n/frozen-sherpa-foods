// components/SiteHeader.tsx
import Link from "next/link";
import { CartButton } from "./CartButton";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white transition hover:text-yellow-300"
        >
          Frozen Sherpa Foods
        </Link>
        <nav className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/menu"
            className="text-sm text-white/80 transition hover:text-yellow-300"
          >
            Menu
          </Link>
          <CartButton />
        </nav>
      </div>
    </header>
  );
}
