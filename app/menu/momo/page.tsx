import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const momoImages = [
  "https://images.pexels.com/photos/28445591/pexels-photo-28445591.jpeg",
  "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg",
  "https://images.pexels.com/photos/6752827/pexels-photo-6752827.jpeg",
  "https://images.pexels.com/photos/7287723/pexels-photo-7287723.jpeg",
];

export default function MomoPage() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <FoodHero image={momoImages[0]}>
        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                Frozen Sherpa Foods
              </p>

              <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight sm:text-7xl">
                MOMO
              </h1>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                Soft, juicy Sherpa dumplings filled with minced meat option or vegetables, herbs, ginger, garlic,
                and traditional spices, served with house-made achar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  CAD$34.99 - 50 pieces
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Chicken, Pork, Beef or Vegetable
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Best Served Hot
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Ingredients
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Chicken, onion, garlic, ginger, coriander, mild spices, flour, and soy-sauce.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Taste profile
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Savory, aromatic, and comforting with a juicy texture.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Serving
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Steam for 12-15 minutes on boiled water or pan-fry steamed momo for 4-5 minutes until golden brown.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 p-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    Good for
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Family meals, quick dinners, and sharing with friends. Cater to gatherings and parties.
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
                    src="https://images.pexels.com/photos/36173247/pexels-photo-36173247.jpeg"
                    alt="Momo hero"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>



          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 p-6">
              <p className="text-sm text-yellow-300">👏 Why people love it</p>
              <p className="text-sm leading-7 text-white/70">
                Each momo is hand-folded with a tender, thin wrapper that stays soft after cooking. The spiced filling is juicy and flavorful.
              </p>
            </div>


            <div className="rounded-3xl border border-white/10 p-6">
              <p className="text-sm text-yellow-300">📦 Storage</p>
              <p className="text-sm leading-7 text-white/70">
                Keep frozen at -18°C or below until ready to cook. For best results, steam from frozen for 12–15 minutes, or pan-fry after steaming for a crispy bottom.
              </p>
            </div>


            <div className="rounded-3xl border border-white/10 p-6">
              <p className="text-sm text-yellow-300">👨‍🍳 Chef's note</p>
              <p className="text-sm leading-7 text-white/70">
                You can also pair it with a warming bowl of thuppa or shyakpa soup for a complete Himalayan meal.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {momoImages.map((src, index) => (
              <article
                key={src}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`Momo image ${index + 1}`}
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