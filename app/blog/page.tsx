import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/constants/blogPosts";

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">
            Blog
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            All blog posts
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
            Explore Sherpa food stories, recipes, and ideas from Frozen Sherpa Foods.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118] transition hover:border-yellow-300/40"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="text-sm text-white/50">{post.date}</div>
                <h2 className="mt-2 text-xl font-semibold text-white">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-sm text-yellow-300">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}