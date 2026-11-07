import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

export default function TiharCombo1Page() {
  return (
    <main className="min-h-screen bg-[#000] text-white">
      <FoodHero image="https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg">
        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-10 -top-8 h-40 w-40 bg-yellow-500/20 blur-3xl" />
              <div className="overflow-hidden border border-white/10 bg-[#0d1118] shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg"
                    alt="Tihar Combo 1 - 50 momos and keema noodles"
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="inline-flex mt-8 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                Frozen Sherpa Foods — Tihar Special Offer
              </p>
              <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight sm:text-7xl">
                TIHAR COMBO 1
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                Limited-time Tihar offer: 50 handcrafted momos with house-made achar, plus
                1 serving of keema noodles. Perfect for a family feast at home.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  CAD$39.99
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  50 Momos + 1 Keema Noodles
                </span>
                <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
                  Nov 7-11, while stock lasts
                </span>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/10 p-5 transition duration-300 hover:border-yellow-400/30">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    What&apos;s included
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    50 pieces of handcrafted chicken momo with house-made achar, and 1 serving
                    of keema noodles with minced meat, Himalayan spices and homemade chilli sauce.
                  </p>
                </div>
                <div className="border border-white/10 p-5 transition duration-300 hover:border-yellow-400/30">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                    How to order
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Pre-order yours today at sherpafoods.ca or call (416) 725-8527. Open daily
                    9:00 AM – 9:00 PM in Scarborough, Toronto.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/menu"
                  className="inline-flex bg-yellow-400 text-black text-sm font-semibold py-2 px-4 transition hover:bg-yellow-200"
                >
                  Back to Menu
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FoodHero>
    </main>
  );
}
