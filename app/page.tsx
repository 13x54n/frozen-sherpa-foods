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
      "Handcrafted dumplings filled with juicy chicken, herbs, ginger, garlic, and traditional spices, served with our signature house-made achar.",
    image:
      "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg",
  },
  {
    name: "Riki Kur",
    slug: "riki-kur",
    price: "CAD$4.99 - 5 Pieces",
    description:
      "A traditional Sherpa potato pancake made from grated potatoes, flour, and eggs, pan-fried until golden and served with chutney or achar.",
    image:
      rikikur.src,
  },
  {
    name: "Keema Noodles",
    slug: "keema-noodles",
    price: "CAD$7.99",
    description:
      "A flavorful dish of minced meat cooked with aromatic spices, served over a bed of gluten-free noodles, garnished with fresh herbs and a homemade chilli sauce.",
    image:
      "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
  },
  {
    name: "Chicken Patty",
    slug: "chicken-patty",
    price: "CAD$14.99",
    description:
      "A savory chicken patty made with ground chicken, herbs, and spices, encased in a flaky pastry crust, perfect for a quick snack or meal.",
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
    title: "The story behind Frozen Sherpa Foods.",
    excerpt:
      "Discover the origins of momo and how this beloved dumpling became a staple in Sherpa cuisine.",
    date: "July 22, 2026",
    image:
      "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "/blog/sherpa-momo-story",
  },
  {
    title: "Healthy Eating with Frozen Sherpa Foods",
    excerpt:
      "How our frozen meals are designed to be both convenient and nutritious for busy lifestyles.",
    date: "June 28, 2026",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <main className="min-h-screen bg-[#000] text-white">
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
                  className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
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
            Explore our diverse menu of traditional Sherpa dishes, crafted with care and
            passion to bring you the authentic flavors.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item) => (
            <Link
              key={item.slug}
              href={`/menu/${item.slug}`}
              className="group overflow-hidden  border border-white/10 transition duration-300 hover:border-yellow-400/30"
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
            </Link>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section id="blog" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">From the Blog</h2>
          <p className="mt-2 text-white/60">
            Stories, recipes, and tips from the world of Sherpa cuisine.
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
                <p className="mt-4 text-sm text-yellow-300">
                  Read more →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}