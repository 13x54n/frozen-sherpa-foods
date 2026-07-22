import { FoodHero } from "@/components/FoodHero";
import Image from "next/image";
import Link from "next/link";

const images = [
    "https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?q=80&w=1025&auto=format&fit=crop",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/3b653fa6424bb9955028f78056db6dd5f7335260.jpg",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/88b62a8c16a907034c572bb1f145b79bdce59f78.jpg",
    "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/99a7f8960e4bd13bd9744d33e1b6edb76e5885c8.jpg",
];

export default function SandwichPage() {
    return (
        <main className="min-h-screen bg-[#05070b] text-white">
            <FoodHero image={images[0]}>
                <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                            <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                                Frozen Sherpa Foods
                            </p>
                            <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">
                                SANDWICH
                            </h1>
                            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                                Grilled chicken breast with egg, crisp veggies, and zesty chipotle mayo on hearty sourdough bread.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                                    CAD$19.99
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                                    5 Pieces
                                </span>
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                                    Hearty & Fresh
                                </span>
                            </div>
                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Ingredients</h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Chicken breast, egg, lettuce, tomato, cucumber, sourdough, and chipotle mayo.
                                    </p>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-[#0d1118] p-5">
                                    <h2 className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Serving</h2>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Best served warm with a side of fries or salad.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Link href="/#menu" className="inline-flex rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-black">
                                    Back to Menu
                                </Link>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1118] shadow-2xl">
                            <div className="relative aspect-[4/5]">
                                <Image src={images[0]} alt="Sandwich" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {images.map((src) => (
                            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                                <Image src={src} alt="Sandwich detail" fill className="object-cover hover:scale-105 transition duration-500" />
                            </div>
                        ))}
                    </div>
                </section>
            </FoodHero>
        </main>
    );
}