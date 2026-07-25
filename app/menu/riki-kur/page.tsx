import Image from "next/image";
import Link from "next/link";
import rikikur from "@/public/rikikur.webp";
import { FoodHero } from "@/components/FoodHero";

const rikiKurImages = [
  "https://imgs.search.brave.com/v2-QqeZUduh8G2rso5uIU3DDZfcb46HHOVghcZn68wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/b2s3N3Q0Nzk4eXI2/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9YmI4M2Y0YTQ1/MmMxMDYwYThjZGMw/MWUzZTJhYmUyNWFl/NjIzMDFiNQ",
  "https://imgs.search.brave.com/DTUWcxjstRdTH8taoKJeaxTgekbMOtX7rcfbSLLLGFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaWxs/c2hlcnBhdHJla2tp/bmcuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzAzLzIw/MjUwNDA1XzA5NTEz/NC05NDd4MTAyNC5q/cGc",
  "https://imgs.search.brave.com/jaPXRpuctv3MsxyUGyOAzthzPljrrVshzzivhkR4o1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtYXBpLmthdGht/YW5kdXBvc3QuY29t/L3RodW1iLnBocD9z/cmM9aHR0cHM6Ly9h/c3NldHMtY2RuLmth/dGhtYW5kdXBvc3Qu/Y29tL3VwbG9hZHMv/c291cmNlL25ld3Mv/MjAyMC9saWZlc3R5/bGUvS2FiaW4tQWRo/aWthcmktVEtQLmpw/ZyZ3PTkwMCZoZWln/aHQ9NjAx",
  "https://imgs.search.brave.com/L5jwrhyAUyZdWzJFFq9pYYcp8Gao4qY5VRz17s_0mrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZ3VuZHJ1ay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvUmlraWt1/ci1Cb3VkaGEuanBn",
];

export default function RikiKurPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
        <FoodHero image="https://imgs.search.brave.com/sz3kPnP5UL7VoC7M9MBRQ0hzkMCJ9JHkIJrWDZMzimw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qdW5p/Zm9vZHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA5/L1BvdGF0by1wYW5j/YWtlLXJpa2lrdXIt/YmF0dGVyLTQ0Mngx/MDI0LmpwZw">
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