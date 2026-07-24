import rikikur from "@/public/rikikur.webp";

export const blogPosts = [
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
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90byJwYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "/blog/healthy-eating",
  },
  {
    title: "5 Ways to Use Riki Kur Beyond Breakfast",
    excerpt:
      "From snacks to mini-meals, explore creative ways to enjoy this traditional Sherpa potato pancake.",
    date: "June 15, 2026",
    image: rikikur.src,
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
] as const;