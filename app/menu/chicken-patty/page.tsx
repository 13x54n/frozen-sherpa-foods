import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://images.pexels.com/photos/7262906/pexels-photo-7262906.jpeg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/0ce9a511095825d01082bc35143f4e5db3e71af9.jpg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/9b0a794390b52c67a1bab5ce3dabb06f942c8961.jpg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/232fbbcaa8fb54f636e66abccd64895f42aa90be.jpg",
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
            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">
              CHICKEN PATTY
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
              Crispy, juicy chicken patty with bold seasoning and a golden fried finish.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                CAD$?
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                ? Pieces
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                Crispy & Juicy
              </span>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Ingredients</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Chicken, breadcrumbs, spices, herbs, salt, pepper, and oil.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Serving</h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Great with buns, wraps, chutney, or fries.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/#menu" className="inline-flex rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-black">
                Back to Menu
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1118] shadow-2xl">
            <div className="relative aspect-[4/5]">
              <Image src={images[0]} alt="Chicken patty" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {images.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
              <Image src={src} alt="Chicken patty detail" fill className="object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </section>
        </FoodHero>
    </main>
  );
}