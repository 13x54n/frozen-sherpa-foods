// app/blog/riki-kur-ideas/page.tsx
import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";
import { Metadata } from "next";

const heroImage =
  "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D";

const siteUrl = "https://www.frozensherpafoods.ca";
const postUrl = `${siteUrl}/blog/riki-kur-ideas`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "5 Ways to Use Riki Kur Beyond Breakfast | Sherpa Potato Pancake Recipes in Scarborough & Toronto",
  description:
    "Discover creative ways to enjoy traditional Sherpa riki kur potato pancakes. From snacks to mini-meals, explore 5 versatile recipes for busy lifestyles in Scarborough, Toronto, and the GTA.",
  keywords: [
    "riki kur recipes",
    "Sherpa potato pancake",
    "rikikur beyond breakfast",
    "traditional Sherpa food Scarborough",
    "traditional Sherpa food Toronto",
    "potato pancake ideas",
    "Nepali breakfast recipes",
    "Sherpa cuisine Toronto",
    "Sherpa cuisine Scarborough",
    "frozen riki kur GTA",
    "Himalayan food recipes",
    "quick Sherpa snacks",
    "Toronto ethnic food",
    "authentic momo restaurant Toronto",
    "authentic Nepali food Scarborough",
  ],
  authors: [{ name: "Frozen Sherpa Foods" }],

  openGraph: {
    title:
      "5 Ways to Use Riki Kur Beyond Breakfast | Sherpa Potato Pancake Recipes",
    description:
      "From snacks to mini-meals, explore creative ways to enjoy this traditional Sherpa potato pancake. Riki kur is more than a morning staple — it's a versatile base for quick, flavorful bites any time of day in the GTA.",
    images: [heroImage],
    type: "article",
    locale: "en_CA",
    url: postUrl,
    siteName: "Frozen Sherpa Foods",
  },

  twitter: {
    card: "summary_large_image",
    title: "5 Ways to Use Riki Kur Beyond Breakfast",
    description:
      "Traditional Sherpa potato pancakes reimagined for modern meals. 5 creative recipes for busy professionals and families in Scarborough, Toronto, and the GTA.",
    images: [heroImage],
  },

  alternates: {
    canonical: postUrl,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RikiKurIdeasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "5 Ways to Use Riki Kur Beyond Breakfast",
        description:
          "Discover creative ways to enjoy traditional Sherpa riki kur potato pancakes. From snacks to mini-meals, explore 5 versatile recipes for busy lifestyles in Scarborough, Toronto, and the GTA.",
        url: postUrl,
        datePublished: "2026-06-15",
        dateModified: "2026-06-15",
        author: {
          "@type": "Organization",
          name: "Frozen Sherpa Foods",
        },
        publisher: {
          "@type": "Organization",
          name: "Frozen Sherpa Foods",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`, // update if you have a real logo path
          },
        },
        image: heroImage,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
      },
      {
        "@type": "LocalBusiness",
        name: "Frozen Sherpa Foods",
        description:
          "Authentic frozen Sherpa and Nepali foods including momo, riki kur, keema noodles, and chicken patties. Handcrafted, healthy, and convenient for busy families in Scarborough, Toronto, and the GTA.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Scarborough",
          addressRegion: "ON",
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.7191649,
          longitude: -79.2504926,
        },
        telephone: "+14167258527",
        servesCuisine: "Sherpa, Nepali, Himalayan",
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "21:00",
        },
        sameAs: [
          "https://www.google.com/maps/place/Frozen+Sherpa+Foods/@43.7191687,-79.2530675,827m/data=!3m1!1e3!4m8!3m7!1s0x89d4cf10c4f172f3:0x7db64aaea65f180c!8m2!3d43.7191649!4d-79.2504926!9m1!1b1!16s%2Fg%2F11nr353nt5?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black text-white">
        <BlogHeader
          date="June 15, 2026"
          title="5 Ways to Use Riki Kur Beyond Breakfast"
          description="From snacks to mini-meals, explore creative ways to enjoy this traditional Sherpa potato pancake. Riki kur is more than a morning staple — it's a versatile base for quick, flavorful bites any time of day in Scarborough, Toronto, and the GTA."
          bannerImage={heroImage}
        />

        <section
          className="mx-auto max-w-6xl px-6 pb-16"
          aria-label="Blog content"
        >
          <article className="overflow-hidden">
            <div className="">
              <div className="grid gap-10">
                <div className="space-y-8">
                  {/* Intro: what is riki kur */}
                  <section aria-labelledby="what-is-riki-kur">
                    <h2
                      id="what-is-riki-kur"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      What is riki kur?
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Riki kur (also spelled rikikur) is a traditional Sherpa potato pancake.
                      In the Sherpa language, “riki” means potato and “kur” means bread or
                      roti. It’s made from finely grated potatoes mixed with a little flour
                      (and often egg) to form a batter, then pan-fried until golden.
                      <br />
                      <br />
                      Traditionally a nourishing breakfast for Sherpa communities in the
                      Khumbu region, riki kur is typically served warm with yak butter and a
                      spicy achaar or somar sauce made from fermented milk/cheese, green
                      chilies, and spring onions. The result is a soft, filling, and deeply
                      comforting dish that’s both simple and satisfying — and now available
                      as a convenient frozen option for families in Scarborough, Toronto, and
                      the GTA.
                    </p>
                  </section>

                  {/* Images after intro (responsive grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/aba75546c70af4f434fd992a8dc829c6a6e0f7d4.jpg"
                          alt="Plate of golden-brown Sherpa riki kur potato pancakes with creamy cheese sauce – traditional Nepali breakfast in Toronto"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    </div>
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b1f6ddd2068386cded66fa4e3648d7cf8085269d.jpg"
                          alt="Hand flipping a golden-brown riki kur potato pancake in a pan – cooking Sherpa food in the GTA"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Why it works beyond breakfast */}
                  <section aria-labelledby="why-beyond-breakfast">
                    <h2
                      id="why-beyond-breakfast"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      Why riki kur works beyond breakfast
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Because riki kur is essentially a savory potato cake, it behaves like a
                      flexible canvas: it can be a snack, a side, or even the star of a
                      mini-meal. Its mild potato flavor pairs well with bold Sherpa
                      condiments, but also adapts easily to modern toppings and fillings.
                      <br />
                      <br />
                      For busy days in Scarborough and Toronto, pre-cooked or frozen riki kur
                      can be quickly reheated and transformed into something new in minutes —
                      perfect for after-school snacks, late-night bites, or light dinners in
                      the GTA.
                    </p>
                  </section>

                  {/* 5 ways section */}
                  <section aria-labelledby="five-ways-riki-kur">
                    <h2
                      id="five-ways-riki-kur"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      5 ways to use riki kur beyond breakfast
                    </h2>
                    <br />
                    <div className="space-y-6">
                      {/* 1 */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          1. Snack-sized riki kur bites with somar dip
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Cut warm riki kur into small wedges or squares and serve them as
                          finger food with a side of traditional somar or a yogurt-based dip.
                          Add extra heat with sliced green chilies and chopped spring onions
                          for a snack that feels authentic yet easy to share at home or at
                          gatherings in Toronto.
                        </p>
                      </div>

                      {/* 2 */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          2. Riki kur “slider” buns for mini sandwiches
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Use small, thick riki kur pancakes as buns for mini sandwiches or
                          sliders. Fill them with spiced keema, shredded chicken, or even a
                          fried egg and cheese for a hearty, potato-based “burger” that’s
                          uniquely Sherpa-inspired and great for busy weeknight meals in the
                          GTA.
                        </p>
                      </div>

                      {/* 3 */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          3. Loaded riki kur nachos
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Break cooled riki kur into chunks, spread them on a tray, and top
                          with cheese, beans, sautéed veggies, and a drizzle of chili sauce
                          or somar. Bake or broil until the cheese melts for a Himalayan
                          twist on nachos — ideal for game nights or casual gatherings in
                          Scarborough and Toronto.
                        </p>
                      </div>

                      {/* 4 */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          4. Riki kur hash bowls
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Tear riki kur into bite-sized pieces and toss them into a skillet
                          with onions, peppers, spinach, and any leftover protein. Top with a
                          fried or poached egg and a spoonful of achaar for a quick hash bowl
                          that works for brunch, lunch, or a light dinner at home in the GTA.
                        </p>
                      </div>

                      {/* 5 */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          5. Sweet-or-savory riki kur toast
                        </h3>
                        <p className="mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Treat a thick riki kur pancake like a slice of toast. Go savory
                          with butter, cheese, and chili flakes, or slightly sweet with a
                          thin layer of honey, nuts, and a pinch of cinnamon for a comforting
                          snack that bridges tradition and modern cravings in Toronto and
                          beyond.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Tips for best results */}
                  <section aria-labelledby="tips-best-results">
                    <h2
                      id="tips-best-results"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      Tips for best results
                    </h2>
                    <ul className="ml-4 sm:ml-6 mt-4 list-disc space-y-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      <li>
                        Reheat riki kur in a pan or oven to restore crispness instead of
                        microwaving, which can make it soggy.
                      </li>
                      <li>
                        Keep traditional flavors alive by serving with somar, yak butter, or
                        a simple green chili–spring onion sauce.
                      </li>
                      <li>
                        Experiment with toppings, but let the potato flavor shine — riki kur
                        doesn’t need heavy sauces to be delicious.
                      </li>
                    </ul>
                  </section>

                  {/* Finishing notes */}
                  <section aria-labelledby="finishing-notes">
                    <h2
                      id="finishing-notes"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      Finishing notes
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Riki kur is more than a breakfast dish — it’s a versatile piece of
                      Sherpa food culture that can adapt to your day. Whether you enjoy it as
                      a quick snack, a creative mini-meal, or a comforting late-night bite,
                      it carries the same warmth and tradition that make Sherpa cuisine so
                      special — now easy to enjoy at home in Scarborough, Toronto, and the
                      GTA.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-10">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to all blog posts
            </a>
          </div>
        </section>
      </main>
    </>
  );
}