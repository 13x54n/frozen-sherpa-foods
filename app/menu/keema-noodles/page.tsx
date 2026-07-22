import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const images = [
    "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/87429e2a21bcc0fd2544389e34485efb6a9c0f17.jpg",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1b5410d795214c41abf0aae96fd9293706d20820.jpg",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/b132ba34d992e3f1d9f940da301af81e27e62263.jpg",
];

export default function KeemaNoodlesPage() {
    return (
        <main className="min-h-screen bg-[#05070b] text-white">
            <FoodHero
                image={images[2]}
            >
                <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                            <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                                Frozen Sherpa Foods
                            </p>

                            <h1 className="mt-6 max-w-xl text-5xl font-black tracking-tight sm:text-7xl">
                                KEEMA NOODLES
                            </h1>

                            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                                A flavorful dish of minced meat cooked with aromatic spices and served
                                over noodles with a rich homemade chilli sauce.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                                    CAD$7.99
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                                    Single Serve
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                                    Rich & Savory
                                </span>
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Ingredients
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Minced meat, noodles, onion, garlic, ginger, herbs, spices, and chili sauce.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Taste profile
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Bold, warm, and comforting with a spicy finish.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Serving
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Best served hot with fresh herbs and extra sauce.
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Good for
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Lunch, dinner, or a filling quick meal.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href="/#menu"
                                    className="inline-flex rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-200"
                                >
                                    Back to Menu
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
                            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1118] shadow-2xl">
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src={images[0]}
                                        alt="Keema noodles hero"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {images.map((src, index) => (
                            <article
                                key={src}
                                className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]"
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={src}
                                        alt={`Keema noodles image ${index + 1}`}
                                        fill
                                        className="object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-4 lg:grid-cols-3">
                        <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
                            <p className="text-sm text-yellow-300">Why people love it</p>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                It is hearty, flavorful, and easy to enjoy any time of day.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
                            <p className="text-sm text-yellow-300">Storage</p>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                Keep refrigerated or frozen and reheat until steaming hot.
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-6">
                            <p className="text-sm text-yellow-300">Chef’s note</p>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                Finish with fresh herbs, chili oil, or extra chutney.
                            </p>
                        </div>
                    </div>
                </section>
            </FoodHero>
        </main>
    );
}