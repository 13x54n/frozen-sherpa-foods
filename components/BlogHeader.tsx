import Image from "next/image";

export function BlogHeader({date, title, description, bannerImage}: {date?: string, title?: string, description?: string, bannerImage?: string}) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 py-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden border border-white/10 bg-[#0d1118]">
          <div className="relative aspect-[3/4]">
            <Image
              src={bannerImage || "https://images.pexels.com/photos/18803174/pexels-photo-18803174.jpeg"}
              alt="Sherpa momo story"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            {date || "July 10, 2026"}
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {title || "The Sherpa Momo Story"}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/45">
            {description || "Discover the origins of momo and how this beloved dumpling became a staple in Sherpa cuisine, from home kitchens to modern frozen meals."}
          </p>

          <div className="mt-12 flex items-center justify-between gap-6 text-sm text-white/55">
            <span>Frozen Sherpa Foods / Blog</span>
            <span>Toronto, Ontario</span>
          </div>
        </div>
      </div>
    </section>
  );
}