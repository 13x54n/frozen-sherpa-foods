// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Frozen Sherpa Foods | Authentic Sherpa & Nepali Frozen Meals",
        description:
          "Learn the story behind Frozen Sherpa Foods—authentic Sherpa and Nepali frozen meals made in Scarborough, Toronto, and the GTA.",
        url: "https://www.frozensherpafoods.ca/about",
        isPartOf: {
          "@type": "WebSite",
          name: "Frozen Sherpa Foods",
          url: "https://www.frozensherpafoods.ca",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: heroImage,
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
        <section className="mx-auto max-w-6xl px-6 py-10" aria-labelledby="about-heading">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>
          </div>

          <header className="overflow-hidden">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src={heroImage}
                alt="Frozen Sherpa Foods – Authentic Sherpa and Nepali frozen meals in Scarborough and Toronto"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 sm:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">
                About Us
              </p>
              <h1 id="about-heading" className="mt-3 text-3xl font-semibold sm:text-5xl">
                About Frozen Sherpa Foods
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
                Frozen Sherpa Foods is built on family, heritage, and the belief that
                traditional Sherpa and Nepali food should still fit modern life. From our
                kitchen in Scarborough, we transform Himalayan-inspired dishes into
                ready-to-eat frozen meals that are comforting, authentic, and convenient for
                families across Toronto and the GTA.
              </p>
            </div>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <section aria-labelledby="our-story-heading">
              <h2 id="our-story-heading" className="text-2xl font-semibold text-yellow-300">
                Our Story
              </h2>
              <p className="mt-4 text-base leading-8 text-white/70">
                Frozen Sherpa Foods began from a deep love for Sherpa cuisine and the memories
                that come with it. Growing up around home-cooked meals, family recipes, and
                the traditions of the Himalayas, we learned that food is more than fuel — it
                is identity, comfort, and connection.
                <br />
                <br />
                That inspiration led us to create frozen meals that preserve the flavors of
                Sherpa cooking while making them easier to enjoy on busy days in Scarborough,
                Toronto, and across Ontario.
              </p>
            </section>

            <section aria-labelledby="what-we-make-heading">
              <h2
                id="what-we-make-heading"
                className="text-2xl font-semibold text-yellow-300"
              >
                What We Make
              </h2>
              <p className="mt-4 text-base leading-8 text-white/70">
                Our products are designed to bring Himalayan comfort food into a modern
                format. From momo to riki kur–inspired dishes and other Sherpa and Nepali
                favorites, we focus on meals that are filling, flavorful, and easy to prepare.
                <br />
                <br />
                Every recipe is crafted with care so customers in the GTA can enjoy a taste of
                home without spending hours in the kitchen.
              </p>
            </section>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="p-6">
              <h3 className="text-xl font-semibold text-yellow-200">
                Authentic Flavor
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                We stay true to Sherpa and Nepali traditions while making food approachable
                for today’s kitchens in Scarborough and Toronto.
              </p>
            </article>

            <article className="p-6">
              <h3 className="text-xl font-semibold text-yellow-200">
                Convenient Meals
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Frozen meals make it easier to enjoy real Himalayan food even on the busiest
                days in the GTA.
              </p>
            </article>

            <article className="p-6">
              <h3 className="text-xl font-semibold text-yellow-200">
                Made with Care
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                We value quality, warmth, and the cultural story behind every dish we serve
                in Ontario and beyond.
              </p>
            </article>
          </div>

          <section className="mt-12 p-6 sm:p-10" aria-labelledby="our-mission-heading">
            <h2 id="our-mission-heading" className="text-2xl font-semibold text-yellow-300">
              Our Mission
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-white/70">
              Our mission is to share Sherpa and Nepali food with more people in a way that
              feels genuine and practical. We want to honor the culture, protect the flavors
              we grew up with, and make nourishing meals available for modern households in
              Scarborough, Toronto, and the GTA.
              <br />
              <br />
              Frozen Sherpa Foods is our way of bringing warmth, tradition, and convenience
              together in one place.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}