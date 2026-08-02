// app/page.tsx
import Image from "next/image";
import rikikur from "../public/rikikur.webp";
import Link from "next/link";

const featuredItems = [
  {
    name: "Momo",
    slug: "momo",
    price: "CAD$34.99 - 50 Pieces",
    description:
      "Handcrafted Nepali-style dumplings filled with juicy chicken, herbs, ginger, garlic, and traditional Sherpa spices. Served with house-made achar. Perfect frozen momo for quick meals in Scarborough and Toronto.",
    image:
      "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg",
  },
  {
    name: "Riki Kur",
    slug: "riki-kur",
    price: "CAD$4.99 - 5 Pieces",
    description:
      "Traditional Sherpa potato pancake made from grated potatoes, flour, and eggs, pan-fried until golden. A hearty Himalayan breakfast or snack, now available as frozen food in Scarborough and the GTA.",
    image:
      rikikur.src,
  },
  {
    name: "Keema Noodles",
    slug: "keema-noodles",
    price: "CAD$8.99 - 1 Serving",
    description:
      "Flavorful minced meat cooked with aromatic Himalayan spices, served over gluten-free noodles and garnished with fresh herbs and homemade chilli sauce. A quick, healthy frozen meal in Scarborough and Toronto.",
    image:
      "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
  },
  {
    name: "Chicken Patty",
    slug: "chicken-patty",
    price: "CAD$14.99 - 5 Pieces",
    description:
      "Savory chicken patties made with ground chicken, herbs, and spices, encased in a flaky pastry crust. Ideal for busy families in Scarborough and across the GTA looking for easy, tasty snacks.",
    image:
      "https://images.unsplash.com/photo-1654491462841-c8acb0de47d2?q=80&w=1545&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const bannerImages = [
  "https://images.unsplash.com/photo-1667984849405-9d779b049d74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
  "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg",
  "https://images.unsplash.com/photo-1615801626674-7147f40de968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const blogPosts = [
  {
    title: "The Story Behind Frozen Sherpa Foods",
    excerpt:
      "Discover the origins of momo and how this beloved Himalayan dumpling became a staple in Sherpa cuisine and now a convenient frozen meal in Scarborough and Toronto.",
    date: "July 22, 2026",
    image:
      "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "/blog/sherpa-momo-story",
  },
  {
    title: "Healthy Eating with Frozen Sherpa Foods",
    excerpt:
      "How our frozen Nepali and Sherpa meals are designed to be both convenient and nutritious for busy lifestyles in Scarborough and the GTA.",
    date: "June 28, 2026",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "/blog/healthy-eating",
  },
  {
    title: "5 Ways to Use Riki Kur Beyond Breakfast",
    excerpt:
      "From snacks to mini-meals, explore creative ways to enjoy this traditional Sherpa potato pancake at home in Scarborough and Toronto.",
    date: "June 15, 2026",
    image:
      rikikur.src,
    slug: "/blog/riki-kur-ideas",
  },
  {
    title: "Spices of the Himalayas",
    excerpt:
      "A deep dive into the key spices that define Sherpa cooking and how to use them in your own kitchen in Scarborough and the GTA.",
    date: "May 30, 2026",
    image:
      "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
    slug: "/blog/spices-of-himalayas",
  },
];

const reviews = [
  {
    name: "Nima Drakto",
    rating: 5,
    date: "4 days ago",
    text:
      "Ordered keema noodles, potato pancake, pork momo, and chicken momo and every dish was absolutely delicious! The young chef who delivered the food was so enthusiastic and added a really personal touch to the experience. Service was quick, food was fresh and flavorful, and everything exceeded expectations. Overall, a 100/10 experience, I highly recommend!",
  },
  {
    name: "Mingma Sherpa",
    rating: 5,
    date: "2 weeks ago",
    text:
      "Authentic taste, juicy filling, and reminded me so much of Nepal 🙏🏻 My go-to place from now on 🙂‍↔️",
  },
  {
    name: "Rahul Dhakal",
    rating: 5,
    date: "2 weeks ago",
    text:
      "MoMo was very delicious and well packaged. Service was also very fast, reliable and affordable must try🤝🎉",
  },
  {
    name: "Albina Adhikari",
    rating: 5,
    date: "2 weeks ago",
    text:
      "Absolutely amazing momos! The quality was excellent, fresh, juicy, and full of flavor.",
  },
];

const googleReviewsUrl =
  "https://www.google.com/maps/place/Frozen+Sherpa+Foods/@43.7191687,-79.2530675,827m/data=!3m1!1e3!4m8!3m7!1s0x89d4cf10c4f172f3:0x7db64aaea65f180c!8m2!3d43.7191649!4d-79.2504926!9m1!1b1!16s%2Fg%2F11nr353nt5?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
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
    sameAs: [googleReviewsUrl],
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Frozen Sherpa Menu",
      itemListElement: featuredItems.map((item) => ({
        "@type": "Product",
        name: item.name,
        description: item.description,
        image: item.image,
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          price: item.price.split(" ")[0].replace("CAD$", ""),
          availability: "https://schema.org/InStock",
        },
      })),
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: r.date,
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#000] text-white">
        {/* Hero / Banner */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,183,63,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(18,120,110,0.25),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="relative z-10">
              <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                Frozen Sherpa Foods – Scarborough, Toronto
              </p>
              <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Authentic Sherpa & Nepali Frozen Foods in Scarborough
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
                Handcrafted momo, riki kur, keema noodles, and more—inspired by Himalayan
                traditions and made for busy families across Scarborough and the GTA. Healthy,
                hearty, and ready when you are.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <a
                  href="tel:+14167258527"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 transition hover:border-yellow-400/40 hover:bg-white/10"
                >
                  <span aria-hidden="true">📞</span>
                  <span>(416) 725-8527</span>
                </a>
                <span className="text-white/50">•</span>
                <span>Open daily 9:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                {bannerImages.map((image, i) => (
                  <article
                    key={image}
                    className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`Himalayan and Sherpa food: ${["momo", "riki kur", "keema noodles", "chicken patty"][i] || "traditional dish"}`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition duration-300"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Menu */}
        <section id="menu" className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="menu-heading">
          <div className="mb-8 text-center">
            <h2 id="menu-heading" className="text-3xl font-semibold">
              Our Frozen Sherpa Menu in Scarborough
            </h2>
            <p className="mt-2 text-white/60">
              Traditional Sherpa and Nepali dishes, crafted in Scarborough with authentic
              Himalayan flavors and high-quality ingredients.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredItems.map((item) => (
              <Link
                key={item.slug}
                href={`/menu/${item.slug}`}
                className="group overflow-hidden border border-white/10 transition duration-300 hover:border-yellow-400/30"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={`${item.name} – Sherpa frozen food in Scarborough, Toronto`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-yellow-300">
                      {item.name}
                    </h3>
                    <p className="text-right text-yellow-300">{item.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.description}
                  </p>
                  <p className="mt-4 inline-block text-sm text-yellow-300 hover:text-yellow-400">
                    Learn More →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Blogs */}
        <section id="blog" className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="blog-heading">
          <div className="mb-8 text-center">
            <h2 id="blog-heading" className="text-3xl font-semibold">
              From the Blog
            </h2>
            <p className="mt-2 text-white/60">
              Stories, recipes, and tips about Sherpa and Nepali cuisine, from our kitchen in
              Scarborough to homes across Toronto and the GTA.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={post.slug}
                className="group overflow-hidden border border-white/10 transition hover:border-yellow-400/30"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-white/50">{post.date}</p>
                  <h3 className="mt-2 text-xl font-semibold group-hover:text-yellow-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-sm text-yellow-300">Read more →</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section
          id="reviews"
          className="mx-auto max-w-7xl px-6 py-16"
          aria-labelledby="reviews-heading"
        >
          <div className="mb-8 text-center">
            <h2 id="reviews-heading" className="text-3xl font-semibold">
              What Our Scarborough Customers Say
            </h2>
            <p className="mt-2 text-white/60">
              Real reviews from people who love our Sherpa and Nepali flavors across Scarborough,
              Toronto, and the GTA.
            </p>
          </div>

          {/* Mobile carousel, desktop grid */}
          <div className="md:block">
            {/* Mobile: horizontal scroll carousel */}
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:hidden"
              role="region"
              aria-label="Customer reviews carousel"
            >
              {reviews.map((review, index) => (
                <article
                  key={index}
                  className="min-w-[85vw] snap-center overflow-hidden border border-white/10 bg-white/5 p-5 transition hover:border-yellow-400/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-1 text-xs text-white/50">{review.date}</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    “{review.text}”
                  </p>
                </article>
              ))}
            </div>

            {/* Desktop: 4-column grid */}
            <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-5">
              {reviews.map((review, index) => (
                <article
                  key={index}
                  className="overflow-hidden border border-white/10 bg-white/5 p-5 transition hover:border-yellow-400/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="mt-1 text-xs text-white/50">{review.date}</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    “{review.text}”
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* See more reviews on Google */}
          <div className="mt-8 text-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2.5 text-sm font-medium text-yellow-300 transition hover:bg-yellow-400/20"
              aria-label="See more Frozen Sherpa Foods reviews on Google"
            >
              See more reviews on Google
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}