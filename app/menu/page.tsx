import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import rikikur from "@/public/rikikur.webp";

export const metadata: Metadata = {
  title: "Menu | Frozen Sherpa Foods - Authentic Himalayan Meals Toronto",
  description:
    "Explore our menu of authentic Sherpa frozen meals. Momo, riki kur, keema noodles, and chicken patty. Ready-to-heat Himalayan cuisine delivered across Toronto.",
  keywords: [
    "Frozen Sherpa Foods menu",
    "frozen momo Toronto",
    "Sherpa food menu",
    "Himalayan frozen meals",
    "riki kur Toronto",
    "keema noodles frozen",
    "Nepali food delivery Toronto",
    "authentic Sherpa cuisine",
    "frozen dumplings Toronto",
    "Toronto ethnic food menu",
    "ready-to-heat Himalayan meals",
    "Sherpa restaurant Toronto",
  ],
  openGraph: {
    title: "Menu | Frozen Sherpa Foods - Authentic Himalayan Meals Toronto",
    description:
      "Explore our menu of authentic Sherpa frozen meals. Momo, riki kur, keema noodles, and chicken patty. Ready-to-heat Himalayan cuisine delivered across Toronto.",
    type: "website",
    locale: "en_CA",
    siteName: "Frozen Sherpa Foods",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Frozen Sherpa Foods",
    description:
      "Authentic Sherpa frozen meals: momo, riki kur, keema noodles, and chicken patty. Ready-to-heat Himalayan cuisine in Toronto.",
  },
  alternates: {
    canonical: "https://frozensherpafoods.com/menu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const featuredItems = [
  {
    name: "Momo",
    slug: "momo",
    price: "CAD$34.99 - 50 Pieces",
    description:
      "Handcrafted dumplings filled with juicy chicken, herbs, ginger, garlic, and traditional spices, served with our signature house-made achar.",
    image: "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg",
    spicy: true,
    popular: true,
  },
  {
    name: "Riki Kur",
    slug: "riki-kur",
    price: "CAD$4.99 - 5 Pieces",
    description:
      "A traditional Sherpa potato pancake made from grated potatoes, flour, and eggs, pan-fried until golden and served with chutney or achar.",
    image: rikikur.src,
    spicy: false,
    popular: true,
  },
  {
    name: "Keema Noodles",
    slug: "keema-noodles",
    price: "CAD$7.99",
    description:
      "A flavorful dish of minced meat cooked with aromatic spices, served over a bed of gluten-free noodles, garnished with fresh herbs and a homemade chilli sauce.",
    image:
      "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
    spicy: true,
    popular: true,
  },
  {
    name: "Chicken Patty",
    slug: "chicken-patty",
    price: "CAD$14.99",
    description:
      "A savory chicken patty made with ground chicken, herbs, and spices, encased in a flaky pastry crust, perfect for a quick snack or meal.",
    image:
      "https://images.unsplash.com/photo-1654491462841-c8acb0de47d2?q=80&w=1545&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    spicy: false,
    popular: false,
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[50vh] overflow-hidden sm:h-[60vh] md:h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1511215579272-6192432f83bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Frozen Sherpa Foods menu"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-yellow-300 sm:text-5xl md:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
            Authentic Sherpa cuisine, ready to heat and enjoy. From hand-folded momo to traditional riki kur, every meal carries the warmth of Himalayan traditions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item, index) => (
            <Link
              key={item.slug}
              href={`/menu/${item.slug}`}
              className="group overflow-hidden border border-white/10 transition duration-300 hover:border-yellow-400/30"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  {item.popular && (
                    <span className="rounded-full bg-yellow-300 px-2 py-1 text-xs font-semibold text-black">
                      Popular
                    </span>
                  )}
                  {item.spicy && (
                    <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                      🌶 Spicy
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-yellow-300">
                      {item.name}
                    </h3>
                  </div>
                </div>
                  <p className="text-yellow-300">{item.price}</p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.description}
                </p>

                <p className="mt-4 text-sm text-yellow-300">View item →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}