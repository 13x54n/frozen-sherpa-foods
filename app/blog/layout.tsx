// app/blog/layout.tsx
import Link from "next/link";
import { BackButton } from "@/components/BackButton";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <BackButton />
          <nav aria-label="Blog navigation">
            <Link
              href="/blog"
              className="text-sm text-white/70 transition hover:text-yellow-300"
            >
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-6 pb-16 pt-6"
        aria-label="Blog articles"
      >
        {children}

        {/* Optional: small local SEO footer for blog posts */}
        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>
            Stories, recipes, and tips about Sherpa and Nepali cuisine from
            Frozen Sherpa Foods — crafted in Scarborough, Toronto, for families
            across the GTA.
          </p>
        </div>
      </section>
    </main>
  );
}