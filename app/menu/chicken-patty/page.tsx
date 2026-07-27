import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1676887451694-713019c9031f?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1654491462841-c8acb0de47d2?q=80&w=1545&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1609806838045-ead77bbe70e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522244451342-a41bf8a13d73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D",
];

export default function ChickenPattyPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <FoodHero image={images[2]}>
        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                Frozen Sherpa Foods
              </p>

              <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight sm:text-7xl">
                CHICKEN PATTY
              </h1>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                Crispy, juicy chicken patty with bold seasoning and a golden fried finish.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  CAD$13.99 - 5 Pieces
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Crispy & Juicy
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Ingredients
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Chicken, breadcrumbs, spices, herbs, salt, pepper, and oil.
                  </p>
                </div>

                <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Taste profile
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Savory, lightly spiced, with a satisfying crunch and juicy interior.
                  </p>
                </div>

                <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Serving
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Great with buns, wraps, chutney, or fries.
                  </p>
                </div>

                <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Good for
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Quick snacks, burgers, or a protein-packed bite on the go.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/#menu"
                  className="inline-flex rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-200"
                >
                  Back to Menu
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
              <div className="overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1756845527600-29e31404bd2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Chicken patty hero"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-6">
              <p className="text-sm text-yellow-300">👏 Why people love it</p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                It is crispy on the outside, juicy on the inside, and full of flavor. Easy to enjoy as a snack, in a burger, or as part of a bigger meal.
              </p>
            </div>

            <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-6">
              <p className="text-sm text-yellow-300">📦 Storage</p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Keep refrigerated for up to 2 days or frozen for longer storage. Reheat in an oven, air fryer, or pan until hot and crispy throughout.
              </p>
            </div>

            <div className="border border-white/10 duration-300 hover:border-yellow-400/30 p-6">
              <p className="text-sm text-yellow-300">👨‍🍳 Chef’s note</p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Serve with chutney, mayo, or your favorite hot sauce. Add sliced onions, lettuce, and tomato for a simple homemade burger.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {images.map((src, index) => (
              <article
                key={src}
                className="overflow-hidden border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Chicken patty image ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </FoodHero>
    </main>
  );
}