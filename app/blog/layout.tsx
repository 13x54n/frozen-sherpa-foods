import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/constants/blogPosts";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentSlug: typeof blogPosts[number]["slug"] | null = null;
//   const otherBlogs = blogPosts.filter((post) => post.slug !== currentSlug);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back
          </Link>
          <div className="text-sm text-white/50">Blog</div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        {children}
      </section>
    </main>
  );
}