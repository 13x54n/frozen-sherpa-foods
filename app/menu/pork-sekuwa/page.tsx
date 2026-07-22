import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1776766237026-47ced47d3779?q=80&w=1470&auto=format&fit=crop",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/55decd736d395748e1ccfb23faea291c5249ca63.jpg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/837f08e0d820377ccd9bc1301a94894cc2806d21.jpg",
  "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/6cff6da5f77c430a1307e23495533596beb28351.jpg",
];

export default function PorkSekuwaPage() {
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
              PORK SEKUWA
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
              Char-grilled pork marinated in traditional spices for a smoky, savory,
              and deeply satisfying flavor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                CAD$11.99
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                600g
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                Smoky & Tender
              </span>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                  Ingredients
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Pork, garlic, ginger, chili, cumin, salt, and aromatic Sherpa spices.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                  Serving
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Serve hot with chiura, achar, and fresh vegetables.
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
              <Image src={images[0]} alt="Pork Sekuwa" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {images.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
              <Image src={src} alt="Pork Sekuwa detail" fill className="object-cover hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </section>
      </FoodHero>
    </main>
  );
}