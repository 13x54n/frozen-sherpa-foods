// app/blog/sherpa-momo-story/page.tsx
import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const heroImage =
  "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D";

const siteUrl = "https://www.frozensherpafoods.ca";
const postUrl = `${siteUrl}/blog/sherpa-momo-story`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "The Story Behind Frozen Sherpa Foods | Authentic Himalayan Cuisine in Scarborough & Toronto",
  description:
    "Discover the family story behind Frozen Sherpa Foods. From a Nepal restaurant to modern frozen meals, bringing authentic Sherpa cuisine like momo and riki kur to Scarborough, Toronto, and the GTA.",
  keywords: [
    "Frozen Sherpa Foods story",
    "authentic Sherpa cuisine Scarborough",
    "authentic Sherpa cuisine Toronto",
    "Himalayan food Toronto",
    "Himalayan food Scarborough",
    "traditional momo recipe",
    "Sherpa family restaurant Nepal",
    "frozen Nepali food GTA",
    "frozen Nepali food Toronto",
    "riki kur Toronto",
    "keema noodles recipe",
    "Sherpa food heritage",
    "Toronto ethnic frozen meals",
    "authentic Himalayan restaurant",
    "Sherpa New Year khapseys",
  ],
  authors: [{ name: "Frozen Sherpa Foods" }],

  openGraph: {
    title:
      "The Story Behind Frozen Sherpa Foods | Authentic Himalayan Cuisine",
    description:
      "My family had a restaurant in Nepal, and from a very young age I grew up helping my mom prepare dinner and learning to honor Sherpa dishes. Today, transforming Sherpa cuisine into ready-to-eat frozen meals for busy individuals in Scarborough, Toronto, and the GTA.",
    images: [heroImage],
    type: "article",
    locale: "en_CA",
    url: postUrl,
    siteName: "Frozen Sherpa Foods",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Story Behind Frozen Sherpa Foods",
    description:
      "From Himalayan traditions to modern tables. A family story of preserving Sherpa cuisine through ready-to-eat frozen meals in Scarborough, Toronto, and the GTA.",
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

export default function SherpaMomoStoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: "The Story Behind Frozen Sherpa Foods",
        description:
          "Discover the family story behind Frozen Sherpa Foods. From a Nepal restaurant to modern frozen meals, bringing authentic Sherpa cuisine like momo and riki kur to Scarborough, Toronto, and the GTA.",
        url: postUrl,
        datePublished: "2026-07-22",
        dateModified: "2026-07-22",
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
          date="July 22, 2026"
          title="The story behind Frozen Sherpa Foods."
          description="My family had a restaurant in Nepal, and from a very young age I grew up helping my mom prepare dinner and learning to honor Sherpa dishes. Those early experiences shaped my love for the food and the culture behind it. Today, I'm passionate about transforming Sherpa cuisine into ready-to-eat frozen meals for busy individuals in Scarborough, Toronto, and the GTA who still want something authentic, comforting, and nourishing. For me, food is not just something you eat — it is part of who you are, because you are what you eat."
          bannerImage={heroImage}
        />

        <section
          className="mx-auto max-w-7xl px-6 pb-16"
          aria-label="Blog content"
        >
          <article className="overflow-hidden">
            <div className="">
              <div className="grid gap-10">
                <div className="space-y-8">
                  <section aria-labelledby="how-started">
                    <h2
                      id="how-started"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      How Frozen Sherpa Foods started
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      One of the biggest inspirations behind Frozen Sherpa Foods is momo, a
                      dish that represents warmth, sharing, and family. Alongside momo,
                      dishes like riki kur and keema noodles reflect the variety and richness
                      of Sherpa-inspired meals. Each product carries a memory of home, but is
                      designed for today's fast-paced lifestyle in the GTA.
                      <br />
                      <br />
                      While selling momo, I saw an opportunity to present Sherpa foods in a
                      more modern and approachable way. That inspired me to start researching,
                      developing, and testing new food ideas. Because Sherpa cuisine is
                      naturally wholesome and nourishing, I wanted to share it with the world
                      as a way for people to find health through food — and that purpose is
                      what makes me happiest.
                    </p>
                  </section>

                  <section aria-labelledby="himalayan-traditions">
                    <h2
                      id="himalayan-traditions"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      From Himalayan Traditions to Modern Tables
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Sherpa cuisine is deeply seasonal and rooted in tradition. In the
                      winter, our meals include comforting dishes like shyakpa, thenduk, and
                      rildok, while summer brings simpler foods such as boiled potatoes served
                      with a homemade sauce made from fermented milk and peppers. Beyond the
                      seasons, our food is also tied to cultural celebrations — during Sherpa
                      New Year, we prepare khapseys as part of the tradition.
                      <br />
                      <br />
                      With my father's experience as a trek guide and food enthusiast, and my
                      mother's skill as a cook, I grew up surrounded by recipes, stories, and
                      the flavors of the Himalayas. Their influence inspired me to preserve
                      Sherpa traditions while presenting them in a modern way for today's
                      world — and now bringing those flavors to families in Scarborough,
                      Toronto, and across the GTA.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <article className="overflow-hidden transition duration-300 hover:scale-105 border border-white/10 bg-[#0d1118]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src="https://imgs.search.brave.com/6E9wctsQUq3cxKue7g7tRzYMjYpnS8ZmTrJVzPjTztQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ay1yZWNpcGVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wMS9ubnMxeGd4/eGFjdHI2bWd4eGFr/cS53ZWJw"
                            alt="Traditional winter Sherpa dish – shyakpa thenduk rildok Himalayan comfort food in Toronto"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority
                          />
                        </div>
                      </article>

                      <article className="overflow-hidden transition duration-300 hover:scale-105 border border-white/10 bg-[#0d1118]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src="https://images.unsplash.com/photo-1665830749221-bcef0fd8a6cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Summer Sherpa food – boiled potatoes with fermented milk sauce traditional Nepali in the GTA"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </article>

                      <article className="overflow-hidden transition duration-300 hover:scale-105 border border-white/10 bg-[#0d1118]">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src="https://imgs.search.brave.com/xI5XtFiz0N7J2BIOvGqrKmheNDHy3BXfml4rRc8aepA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS83Mzdh/ZTNhZWViYTM1ZDAy/YTUxZTgwYzM0ZWI4/Njk1Mz9pbXBvbGlj/L3k9d2Ntc19jcm9w/X3Jlc2l6ZSZjcm9w/SD2MDAmY3JvcFc9/Mjk5NyZ4UG9zPTAm/eVBvcz0wJndpZHRo/PTg2MiZoZWlnaHQ9/NTc1"
                            alt="Sherpa New Year khapseys – traditional Himalayan celebration food for Nepali festivals in Toronto"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      </article>
                    </div>
                  </section>

                  <section aria-labelledby="finishing-notes">
                    <h2
                      id="finishing-notes"
                      className="text-xl sm:text-2xl font-semibold text-yellow-300"
                    >
                      Finishing Notes: A Taste of Home, Revolutionized as a Frozen Meal
                    </h2>
                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                      Frozen Sherpa Foods brings the comfort of home-cooked Sherpa cuisine
                      into a modern form that fits today's busy lifestyle. By turning
                      traditional recipes into ready-to-eat frozen meals, we preserve the
                      authentic flavors, warmth, and heritage of each dish while making them
                      more convenient and accessible for families in Scarborough, Toronto,
                      and the GTA. Every meal is crafted to feel familiar, wholesome, and
                      satisfying — a way to enjoy the taste of home, even on the busiest days.
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