import Image from "next/image";
import Link from "next/link";
import rikikur from "@/public/rikikur.webp";
import { FoodHero } from "@/components/FoodHero";

const rikiKurImages = [
  rikikur.src,
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/6240d4866f7caab2e5b9fa4b6372504bf33d73c8.jpg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/26195f57b17a15272ae3526252fae8335571a0ba.jpg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a2e24949f7b800734dbb35b6893235641dbe90c4.jpg",
];

export default function RikiKurPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
        <FoodHero image={rikiKurImages[0]}>
      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
              Frozen Sherpa Foods
            </p>

            <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight sm:text-7xl">
              RIKI KUR
            </h1>

            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
              A traditional Sherpa potato pancake made from grated potatoes, flour,
              and eggs, pan-fried until golden and served with chutney or achar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                CAD$4.99
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                5 Pieces
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                Crispy & Golden
              </span>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                  Ingredients
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Potatoes, flour, eggs, salt, spices, and oil for pan frying.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                  Taste profile
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Crispy outside, soft inside, with a comforting savory flavor.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                  Serving
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Best served warm with chutney, achar, or a side of tea.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                  Good for
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Breakfast, snack time, or a light comforting meal.
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
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1118] shadow-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={rikiKurImages[0]}
                  alt="Riki Kur hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {rikiKurImages.map((src, index) => (
            <article
              key={src}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Riki Kur image ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
            <p className="text-sm text-yellow-300">Why people love it</p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Simple, hearty, and nostalgic with a rich homemade feel.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
            <p className="text-sm text-yellow-300">Storage</p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Keep frozen until ready to cook, then heat until crisp and hot.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
            <p className="text-sm text-yellow-300">Chef’s note</p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Pairs well with spicy achar and a warm drink.
            </p>
          </div>
        </div>
      </section>
        </FoodHero>
    </main>
  );
}