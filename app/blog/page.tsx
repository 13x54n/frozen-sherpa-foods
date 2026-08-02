// app/blog/page.tsx
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/constants/blogPosts";
import { Metadata } from "next";

const siteUrl = "https://www.frozensherpafoods.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Blog | Sherpa Food Stories, Recipes & Ideas in Scarborough, Toronto & the GTA",
  description:
    "Explore Sherpa and Nepali food stories, recipes, and ideas from Frozen Sherpa Foods. Learn about momo, riki kur, Himalayan spices, and healthy frozen meals in Scarborough, Toronto, and the GTA.",
  keywords: [
    "Frozen Sherpa Foods blog",
    "Sherpa food blog Toronto",
    "Sherpa food blog Scarborough",
    "Nepali food blog GTA",
    "momo recipes Toronto",
    "riki kur recipes",
    "Himalayan spices guide",
    "healthy frozen meals Toronto",
    "authentic Sherpa cuisine",
    "Toronto food blog",
  ],
  authors: [{ name: "Frozen Sherpa Foods" }],

  openGraph: {
    title: "Blog | Frozen Sherpa Foods",
    description:
      "Sherpa and Nepali food stories, recipes, and ideas from our kitchen in Scarborough to homes across Toronto and the GTA.",
    type: "website",
    locale: "en_CA",
    url: `${siteUrl}/blog`,
    siteName: "Frozen Sherpa Foods",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Frozen Sherpa Foods",
    description:
      "Sherpa and Nepali food stories, recipes, and ideas from Scarborough, Toronto, and the GTA.",
  },

  alternates: {
    canonical: `${siteUrl}/blog`,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Blog | Frozen Sherpa Foods",
        description:
          "Explore Sherpa and Nepali food stories, recipes, and ideas from Frozen Sherpa Foods. Learn about momo, riki kur, Himalayan spices, and healthy frozen meals in Scarborough, Toronto, and the GTA.",
        url: `${siteUrl}/blog`,
        isPartOf: {
          "@type": "WebSite",
          name: "Frozen Sherpa Foods",
          url: siteUrl,
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
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              All blog posts
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
              Explore Sherpa and Nepali food stories, recipes, and ideas from Frozen Sherpa
              Foods. From momo and riki kur to Himalayan spices and healthy frozen meals —
              all crafted in Scarborough for homes across Toronto and the GTA.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="group overflow-hidden border border-white/10 transition hover:border-yellow-300/40"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={`${post.title} – Sherpa and Nepali food blog from Toronto`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-white/50">{post.date}</div>
                  <div className="mt-4 text-sm text-yellow-300">
                    Read more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}