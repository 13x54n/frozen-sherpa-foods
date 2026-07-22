// app/page.tsx
import Image from "next/image";
import rikikur from "../public/rikikur.webp";

const featuredItems = [
  {
    name: "Momo",
    price: "CAD$34.99 - 50 Pieces",
    description:
      "Handcrafted dumplings filled with juicy chicken, herbs, ginger, garlic, and traditional spices, served with our signature house-made achar.",
    image:
      "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg",
  },

  {
    name: "Riki Kur",
    price: "CAD$4.99 - 5 Pieces",
    description:
      "A traditional Sherpa potato pancake made from grated potatoes, flour, and eggs, pan-fried until golden and served with chutney or achar.",
    image:
      rikikur.src,
  },
  {
    name: "Pork Sekuwa",
    price: "CAD$11.99 - 600g",
    description:
      "Marinated pork grilled over charcoal or wood fire for a smoky flavor, served with chiura, achar, and sliced vegetables.",
    image:
      "https://images.unsplash.com/photo-1776766237026-47ced47d3779?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sandwich",
    price: "CAD$19.99 - 5 Pieces",
    description:
      "Grilled chicken breast with a perfectly cooked egg, crisp veggies, and zesty chipotle mayo served on hearty sourdough bread.",
    image:
      "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?q=80&w=1025&auto=format&fit=crop",
  },
  {
    name: "Keema Noodles",
    price: "CAD$7.99",
    description:
      "A flavorful dish of minced meat cooked with aromatic spices, served over a bed of gluten-free noodles, garnished with fresh herbs and a homemade chilli sauce.",
    image:
      "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
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
    title: "The Story Behind Sherpa Momo",
    excerpt:
      "Discover the origins of momo and how this beloved dumpling became a staple in Sherpa cuisine.",
    date: "July 10, 2026",
    image:
      "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg",
    slug: "/blog/sherpa-momo-story",
  },
  {
    title: "Healthy Eating with Frozen Sherpa Foods",
    excerpt:
      "How our frozen meals are designed to be both convenient and nutritious for busy lifestyles.",
    date: "June 28, 2026",
    image:
      "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?q=80&w=1025&auto=format&fit=crop",
    slug: "/blog/healthy-eating",
  },
  {
    title: "5 Ways to Use Riki Kur Beyond Breakfast",
    excerpt:
      "From snacks to mini-meals, explore creative ways to enjoy this traditional Sherpa potato pancake.",
    date: "June 15, 2026",
    image:
      rikikur.src,
    slug: "/blog/riki-kur-ideas",
  },
  {
    title: "Spices of the Himalayas",
    excerpt:
      "A deep dive into the key spices that define Sherpa cooking and how to use them at home.",
    date: "May 30, 2026",
    image:
      "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
    slug: "/blog/spices-of-himalayas",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04070c] text-white">
      {/* Hero / Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,183,63,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(18,120,110,0.25),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
              Frozen Sherpa Foods
            </p>
            <h1 className="mt-6 max-w-xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Sherpa tradition meets healthy & hearty food!
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              At Frozen Sherpa Foods, we offer a unique blend of flavors and ingredients that
              have been passed down through generations. Our menu is designed to be
              convenient, nutritious, and delicious for busy lifestyles.
            </p>
          </div>

          <div className="relative z-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {bannerImages.map((image) => (
                <article
                  key={image}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt="Banner Image"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Our Menu</h2>
          <p className="mt-2 text-white/60">
            Explore our diverse menu of traditional Sherpa dishes,<br /> crafted with care and
            passion to bring you the authentic flavors.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredItems.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0a111a] transition hover:border-yellow-400/30"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-yellow-300">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-right text-yellow-300">{item.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Blogs Carousel */}
       <section
        id="blog"
        className="mx-10 px-6 py-10 mb-15  backdrop-blur-md border border-white/10 "
        style={{
          background:
            "radial-gradient(120deg, rgba(245,183,63,0.08), transparent 40%), radial-gradient(240deg, rgba(18,120,110,0.12), transparent 45%)",
          borderRadius: "1.5rem",
        }}
      >
        
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">From the Blog</h2>
          <p className="mt-2 text-white/60">
            Stories, recipes, and tips from the world of Sherpa cuisine.
          </p>
        </div>

        {/* Infinite scrolling wrapper */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll-left w-max">
            {/* Original set */}
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={post.slug}
                className="max-w-[clamp(16rem,45vw,22rem)]"
              >
                <article className="group  overflow-hidden">
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
                    <p className="mt-4 text-sm text-yellow-300">
                      Read more →
                    </p>
                  </div>
                </article>
              </a>
            ))}

            {/* Duplicate set for seamless loop */}
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={post.slug}
                className="max-w-[clamp(16rem,45vw,22rem)]"
              >
                <article className="group  overflow-hidden">
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
                    <p className="mt-4 text-sm text-yellow-300">
                      Read more →
                    </p>
                  </div>
                </article>
              </a>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
            <div className="h-full w-16 bg-gradient-to-r from-[#04070c] to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
            <div className="h-full w-16 bg-gradient-to-l from-[#04070c] to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}