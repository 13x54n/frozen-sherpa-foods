import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const images = [
    "https://images.pexels.com/photos/4223948/pexels-photo-4223948.jpeg",
    "https://imgs.search.brave.com/1NjI-XslwU95bOtnoWYsQZ2DsH54nW6bFByJuE7GgsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFmLzEz/L2EwLzFmMTNhMDJk/MDZhYjBhZjBhMGU0/YTJlOTIwYTIwMDFl/LmpwZw",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/1b5410d795214c41abf0aae96fd9293706d20820.jpg",
    "https://imgs.search.brave.com/OLVwSIH28CGCiiszoRMUZ-TzO0tsqlficHvUIMu6mEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odW5n/ZXJlbmQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAy/L0NoaWNrZW4tS2Vl/bWEtTm9vZGxlcy1E/ZWxpdmVyeS5qcGc",
];

export default function KeemaNoodlesPage() {
    return (
        <main className="min-h-screen bg-[#05070b] text-white">
            <FoodHero
                image="https://images.unsplash.com/photo-1603661688298-870c8958ebf8?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
                <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="relative">
                            <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />
                            <div className="overflow-hidden border border-white/10 \ shadow-2xl">
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src="https://imgs.search.brave.com/or8oMxqWCO-XIkdw5aCBRCk_NkHpwoz6FjU2PZ5gD9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA0LzIz/Lzg4LzA0MjM4ODkw/NWE0NjM5NjZlMDMy/NGVmMTYyYTBmYjY0/LmpwZw"
                                        alt="Keema noodles hero"
                                        fill
                                        className="object-cover transition duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
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
                                    Rich & Savory
                                </span>
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Ingredients
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Minced meat, noodles, onion, garlic, ginger, herbs, spices, and chili sauce.
                                    </p>
                                </div>

                                <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Taste profile
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Bold, warm, and comforting with a spicy finish.
                                    </p>
                                </div>

                                <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">
                                        Serving
                                    </h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Best served hot with fresh herbs and extra sauce.
                                    </p>
                                </div>

                                <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-5">
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


                    </div>



                    <div className="mt-12 grid gap-4 lg:grid-cols-3">
                        <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-6">
                            <p className="text-sm text-yellow-300">👏 Why people love it</p>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                It is hearty, flavorful, and easy to enjoy any time of day. Savory minced meat is cooked with warm spices and tossed with noodles for a satisfying balance of comfort and bold taste. Each bite delivers a rich, slightly spiced depth that feels both familiar and exciting.
                            </p>
                        </div>

                        <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-6">
                            <p className="text-sm text-yellow-300">📦 Storage</p>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                Keep refrigerated for up to 3 days or frozen for longer storage. Reheat thoroughly until steaming hot before serving. For best texture, reheat on a pan or stovetop rather than a microwave.
                            </p>
                        </div>

                        <div className=" border border-white/10 duration-300 hover:border-yellow-400/30 p-6">
                            <p className="text-sm text-yellow-300">👨‍🍳 Chef’s note</p>
                            <p className="mt-3 text-sm leading-7 text-white/70">
                                Finish with fresh herbs, chili oil, or extra chutney to elevate the flavors. A squeeze of lime or a sprinkle of crispy fried onions adds a bright and crunchy contrast. Quick lunches, late-night cravings, or a hearty meal on the go. It is equally satisfying as a standalone dish or paired with a light side.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {images.map((src, index) => (
                            <article
                                key={src}
                                className="overflow-hidden border border-white/10 \"
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
                </section>
            </FoodHero>
        </main>
    );
}