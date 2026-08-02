// app/blog/spices-of-himalayas/page.tsx
import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const heroImage =
  "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D";

const siteUrl = "https://www.frozensherpafoods.ca";
const postUrl = `${siteUrl}/blog/spices-of-himalayas`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Spices of the Himalayas | Sherpa Cooking Spices & Herbs Guide in Scarborough & Toronto",
  description:
    "Discover the key spices that define Sherpa cooking. Learn about ginger, garlic, cumin, turmeric, jimbu, timur and how to use Himalayan spices at home in Scarborough, Toronto, and the GTA.",
  keywords: [
    "Himalayan spices",
    "Sherpa cooking spices",
    "jimbu herb Toronto",
    "jimbu herb Scarborough",
    "timur Sichuan pepper Nepal",
    "adúwa ginger lasun garlic",
    "Nepali spice guide",
    "Himalayan herbs guide",
    "Sherpa kitchen spices",
    "cumin coriander turmeric Nepal",
    "khursani chilies Himalayan",
    "garam masala Nepal",
    "authentic Sherpa recipes Toronto",
    "authentic Sherpa recipes Scarborough",
    "Himalayan spices GTA",
  ],
  authors: [{ name: "Frozen Sherpa Foods" }],

  openGraph: {
    title: "Spices of the Himalayas | Sherpa Cooking Spices & Herbs Guide",
    description:
      "A deep dive into the key spices that define Sherpa cooking and how to use them at home in Scarborough, Toronto, and the GTA. From ginger and garlic to wild Himalayan herbs like jimbu and timur.",
    images: [heroImage],
    type: "article",
    locale: "en_CA",
    url: postUrl,
    siteName: "Frozen Sherpa Foods",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spices of the Himalayas",
    description:
      "Essential spices in Sherpa cooking: ginger, garlic, cumin, coriander, turmeric, chilies, jimbu, and timur. Learn how to use them at home in the GTA.",
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

export default function SpicesOfHimalayasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "Spices of the Himalayas",
        description:
          "Discover the key spices that define Sherpa cooking. Learn about ginger, garlic, cumin, turmeric, jimbu, timur and how to use Himalayan spices at home in Scarborough, Toronto, and the GTA.",
        url: postUrl,
        datePublished: "2026-05-30",
        dateModified: "2026-05-30",
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
          date="May 30, 2026"
          title="Spices of the Himalayas"
          description="A deep dive into the key spices that define Sherpa cooking and how to use them at home in Scarborough, Toronto, and the GTA."
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
                  {/* Intro */}
                  <section aria-labelledby="soul-sherpa-cooking">
                    <h2
                      id="soul-sherpa-cooking"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      The soul of Sherpa cooking
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Sherpa cuisine is known for its comforting, soulful flavors that come
                      from simple ingredients and carefully chosen spices. In the high
                      Himalayas, herbs and spices are valued not just for taste, but also for
                      their warming and medicinal qualities.
                      <br />
                      <br />
                      Everyday cooking relies on a core set of aromatics — ginger, garlic,
                      onion, cumin, coriander, turmeric, and chilies — while special dishes
                      may include wild Himalayan herbs like jimbu (aromatic leaf garlic) and
                      timur (Sichuan pepper). These spices create depth without overwhelming
                      the palate, letting the natural flavors of potatoes, grains, and
                      vegetables shine in meals enjoyed across Scarborough, Toronto, and the
                      GTA.
                    </p>
                  </section>

                  {/* Images 2 columns - responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a8b7b5de7e895debc1a80027a08a0155e242ea40.jpg"
                          alt="Platter of assorted Himalayan and Nepalese dishes with spices ginger garlic cumin turmeric herbs in Toronto"
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
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/852b55e51d81c00cc81f7f41cea97c8d0ebfa2ca.jpg"
                          alt="Traditional Himalayan flatbread with butter and green paste – Sherpa cooking with jimbu timur spices in the GTA"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Core spices */}
                  <section aria-labelledby="core-spices">
                    <h2
                      id="core-spices"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      Core spices in Sherpa kitchens
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      In Sherpa households, the spice shelf is small but powerful. A few key
                      ingredients show up again and again, forming the flavor backbone of
                      dal, soups, stir-fries, and dumplings.
                    </p>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Ginger (aduwa) and garlic (lasun)
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Fresh ginger and garlic are the starting point for many curries and
                          soups. They’re sautéed in oil or butter to build aroma, then layered
                          with other spices. Ginger adds warmth and brightness, while garlic
                          brings depth and savory richness to dishes enjoyed in Toronto and
                          beyond.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Cumin (jeera) and coriander (dhaniya)
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Cumin seeds are often crackled in hot oil at the beginning of
                          cooking to release their nutty scent. Ground coriander and cumin
                          together form a gentle, earthy base for many vegetable and lentil
                          dishes, supporting but never hiding the main ingredients.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Turmeric (besar / nyu nan)
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Turmeric is used for its golden color and subtle bitterness, as
                          well as its traditional reputation as a “cleanser of the body.” It
                          appears in lentils, vegetable curries, and rice dishes, adding
                          warmth and a gentle earthy note.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Chilies (khursani)
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Fresh and dried chilies bring heat and brightness. In Sherpa
                          cooking, heat is usually balanced rather than extreme, designed to
                          warm the body in cold climates. Chilies also show up in achaar
                          (pickles) and dipping sauces served alongside momo, riki kur, and
                          other staples in the GTA.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Images 2 columns - responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/24229f3b5b5a9a75813c295f414e1e58b95749e8.jpg"
                          alt="Plate of Nepali fritters with green and dark dipping sauces – achaar somar sauce Sherpa condiments in Toronto"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d6a3715bee432e85d6f620330852b7fd827cb00d.jpg"
                          alt="Plate of momo dumplings with orange dipping sauce and cilantro – traditional Sherpa momo with spices in Scarborough"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Wild Himalayan herbs */}
                  <section aria-labelledby="wild-herbs">
                    <h2
                      id="wild-herbs"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      Wild Himalayan herbs: jimbu, timur, and more
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Beyond the everyday spices, Sherpa and other hilly cuisines make use of
                      distinctive wild herbs that are hard to find outside the region. These
                      give Himalayan food its unique signature in kitchens across
                      Scarborough, Toronto, and the GTA.
                    </p>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Jimbu (aromatic leaf garlic)
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Jimbu is an aromatic allium with a strong, herbal garlic-onion
                          scent. It’s often used to temper lentil dishes and curries,
                          especially in Thakali and Sherpa cooking. When fried briefly in oil
                          or ghee, jimbu releases an intense fragrance that lifts the whole
                          pot.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Timur (Sichuan pepper)
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Timur is not a true pepper but a berry that creates a tingling,
                          citrusy sensation on the tongue. It adds a lively buzz and fresh
                          aroma to meats, vegetables, and chutneys. A little goes a long way,
                          and it’s often used alongside ginger and chilies for layered heat.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Garam masala and blends
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Garam masala in Nepal is typically a blend of coriander, cumin,
                          fenugreek, turmeric, cardamom, cinnamon, black pepper, bay leaf,
                          clove, nutmeg, and mace. In Sherpa kitchens, such blends are used
                          sparingly to enrich meat and festive dishes, balancing warmth,
                          sweetness, and spice.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Images 2 columns - responsive */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a1c15a7ce48b5e300da1c4f24d6967f4f356cc38.jpg"
                          alt="Bowl of Himalayan noodle soup with herbs and spices – thenduk shyakpa Sherpa soup in Toronto"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="overflow-hidden border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/38c56e608711dd0744e4de3046f32ddcd0aef1fc.jpg"
                          alt="Step-by-step photos of cooking a green Sherpa pancake with spices – riki kur with jimbu timur herbs in the GTA"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* How to use at home */}
                  <section aria-labelledby="use-at-home">
                    <h2
                      id="use-at-home"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      How to use Himalayan spices at home
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      You don’t need a large collection of spices to cook in a Sherpa-inspired
                      way. Start with a small, versatile set and build from there — perfect
                      for home cooks in Scarborough, Toronto, and the GTA.
                    </p>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Build a basic spice kit
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          A good starter kit includes: cumin seeds, ground coriander,
                          turmeric, dried red chilies or chili powder, and fresh ginger and
                          garlic. If you can find them, add timur and jimbu for a more
                          authentically Himalayan profile.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Layer your spices
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Begin by heating oil or butter, then add whole spices like cumin
                          until they sizzle. Follow with ginger and garlic, then ground
                          spices like turmeric and coriander. This order helps each spice
                          bloom without burning, creating a deep, rounded flavor.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Use spices to support, not dominate
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Sherpa cooking is about balance. Let potatoes, lentils, greens, and
                          noodles remain the stars, using spices to add warmth and
                          complexity. Taste as you go, and remember that a little chili or
                          timur can change a dish dramatically.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-yellow-200">
                          Finish with fresh herbs and chilies
                        </h3>
                        <p className="mt-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                          Chopped spring onions, cilantro, and fresh green chilies are common
                          finishing touches. A spoonful of homemade achaar or a side of somar
                          sauce can turn a simple dal or noodle soup into a full-flavored
                          Himalayan meal at home in the GTA.
                        </p>
                      </div>
                    </div>
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
                      The spices of the Himalayas tell a story of high-altitude life, where
                      food must be warming, nourishing, and deeply satisfying. By
                      understanding how Sherpa cooks use ginger, garlic, cumin, turmeric,
                      chilies, and wild herbs like jimbu and timur, you can bring a piece of
                      that mountain kitchen into your own home in Scarborough, Toronto, and
                      beyond.
                      <br />
                      <br />
                      Start with simple dishes, taste often, and let these spices guide you
                      toward your own version of Himalayan comfort food.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to all blog posts
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}