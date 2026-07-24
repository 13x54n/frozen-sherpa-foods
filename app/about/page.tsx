import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
          <div className="relative aspect-[16/7] w-full">
            <Image
              src={heroImage}
              alt="Frozen Sherpa Foods"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 sm:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-300">
              About us
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Frozen Sherpa Foods
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
              Frozen Sherpa Foods is built on family, heritage, and the belief
              that traditional food should still fit modern life. We transform
              Sherpa-inspired dishes into ready-to-eat frozen meals that are
              comforting, authentic, and convenient.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-semibold text-yellow-300">
              Our story
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Frozen Sherpa Foods began from a deep love for Sherpa cuisine and
              the memories that come with it. Growing up around home-cooked
              meals, family recipes, and the traditions of the Himalayas, we
              learned that food is more than fuel — it is identity, comfort, and
              connection.
              <br />
              <br />
              That inspiration led us to create frozen meals that preserve the
              flavors of Sherpa cooking while making them easier to enjoy on
              busy days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-300">
              What we make
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Our products are designed to bring Himalayan comfort food into a
              modern format. From momo to riki kur-inspired dishes and other
              Sherpa favorites, we focus on meals that are filling, flavorful,
              and easy to prepare.
              <br />
              <br />
              Every recipe is crafted with care so customers can enjoy a taste
              of home without spending hours in the kitchen.
            </p>
          </section>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
            <h3 className="text-xl font-semibold text-yellow-200">
              Authentic flavor
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              We stay true to Sherpa traditions while making food approachable
              for today’s kitchens.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
            <h3 className="text-xl font-semibold text-yellow-200">
              Convenient meals
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Frozen meals make it easier to enjoy real food even on the busiest
              days.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
            <h3 className="text-xl font-semibold text-yellow-200">
              Made with care
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              We value quality, warmth, and the cultural story behind every
              dish.
            </p>
          </article>
        </div>

        <section className="mt-12 rounded-3xl border border-white/10 bg-[#0d1118] p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-yellow-300">
            Our mission
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-white/70">
            Our mission is to share Sherpa food with more people in a way that
            feels genuine and practical. We want to honor the culture, protect
            the flavors we grew up with, and make nourishing meals available for
            modern households.
            <br />
            <br />
            Frozen Sherpa Foods is our way of bringing warmth, tradition, and
            convenience together in one place.
          </p>
        </section>
      </section>
    </main>
  );
}