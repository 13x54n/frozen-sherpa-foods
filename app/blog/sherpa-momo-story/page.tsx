import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function SherpaMomoStoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <BlogHeader
        date="July 22, 2026"
        title="The story behind Frozen Sherpa Foods."
        description="My family had a restaurant in Nepal, and from a very young age I grew up helping my mom prepare dinner and learning to honor Sherpa dishes. Those early experiences shaped my love for the food and the culture behind it. Today, I’m passionate about transforming Sherpa cuisine into ready-to-eat frozen meals for busy individuals who still want something authentic, comforting, and nourishing. For me, food is not just something you eat — it is part of who you are, because you are what you eat."
        bannerImage={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <article className="overflow-hidden ">

          <div className="p-6 sm:p-10">
            <div className="grid gap-10 ">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    How Frozen Sherpa Foods started?
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    One of the biggest inspirations behind Frozen Sherpa Foods is momo, a dish that represents warmth, sharing, and family. Alongside momo, dishes like riki kur and keema noodles reflect the variety and richness of Sherpa-inspired meals. Each product carries a memory of home, but is designed for today’s fast-paced lifestyle.
                    <br /><br />
                    While selling momo, I saw an opportunity to present Sherpa foods in a more modern and approachable way. That inspired me to start researching, developing, and testing new food ideas. Because Sherpa cuisine is naturally wholesome and nourishing, I wanted to share it with the world as a way for people to find health through food — and that purpose is what makes me happiest.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    From Himalayan Traditions to Modern Tables
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    Sherpa cuisine is deeply seasonal and rooted in tradition. In the winter, our meals include comforting dishes like shyakpa, thenduk, and rildok, while summer brings simpler foods such as boiled potatoes served with a homemade sauce made from fermented milk and peppers. Beyond the seasons, our food is also tied to cultural celebrations — during Sherpa New Year, we prepare khapseys as part of the tradition.
                    <br /><br />
                    With my father’s experience as a trek guide and food enthusiast, and my mother’s skill as a cook, I grew up surrounded by recipes, stories, and the flavors of the Himalayas. Their influence inspired me to preserve Sherpa traditions while presenting them in a modern way for today’s world.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://imgs.search.brave.com/6E9wctsQUq3cxKue7g7tRzYMjYpnS8ZmTrJVzPjTztQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ay1yZWNpcGVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wMS9ubjFuczNu/eGFjdHI2bWd4eGFr/cS53ZWJw"
                          alt="Traditional winter Sherpa dish"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </article>

                    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://imgs.search.brave.com/kneQRL4gKO1S0YRrTrWU9e1G2JRkBM3jJt_2PHk8Lik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGZyb250LXVzLWVh/c3QtMS5pbWFnZXMu/YXJjcHVibGlzaGlu/Zy5jb20vYWR2YW5j/ZWxvY2FsLzJMM0hT/U1ZMSEZCWjdOV1RK/REZJR0tTTFZBLkpQ/Rw"
                          alt="Summer Sherpa food"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </article>

                    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src="https://imgs.search.brave.com/xI5XtFiz0N7J2BIOvGqrKmheNDHy3BXfml4rRc8aepA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LXByb2R1Y3Rpb24u/d2Ntcy5hYmMtY2Ru/Lm5ldC5hdS83Mzdh/ZTNhZWViYTM1ZDAy/YTUxZTgwYzM0ZWI4/Njk1Mz9pbXBvbGlj/eT13Y21zX2Nyb3Bf/cmVzaXplJmNyb3BI/PTIwMDAmY3JvcFc9/Mjk5NyZ4UG9zPTEm/eVBvcz0wJndpZHRo/PTg2MiZoZWlnaHQ9/NTc1"
                          alt="Sherpa New Year khapseys"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </article>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    Finishing Notes: A Taste of Home revolutionized as a Frozen Meal
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    Frozen Sherpa Foods brings the comfort of home-cooked Sherpa cuisine into a modern form that fits today’s busy lifestyle. By turning traditional recipes into ready-to-eat frozen meals, we preserve the authentic flavors, warmth, and heritage of each dish while making them more convenient and accessible. Every meal is crafted to feel familiar, wholesome, and satisfying — a way to enjoy the taste of home, even on the busiest days.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}