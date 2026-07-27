import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const heroImage =
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const metadata: Metadata = {
    title: "Healthy Eating with Frozen Sherpa Foods | Nutritious Himalayan Meals Toronto",
    description: "Discover convenient, nutritious frozen meals rooted in authentic Sherpa traditions. Perfect for busy professionals in Toronto. Wholesome ingredients, balanced macros, ready in minutes.",
    keywords: [
        "frozen Sherpa foods",
        "healthy frozen meals Toronto",
        "nutritious Himalayan food",
        "convenient healthy meals",
        "frozen momo Toronto",
        "Sherpa cuisine",
        "healthy meal prep",
        "busy lifestyle meals",
        "Toronto frozen food delivery",
        "authentic Nepali food"
    ],
    openGraph: {
        title: "Healthy Eating with Frozen Sherpa Foods | Nutritious Himalayan Meals",
        description: "Our frozen meals are designed to be both convenient and nutritious for busy lifestyles. Rooted in Himalayan traditions and built for modern life.",
        images: [heroImage],
        type: "article",
        locale: "en_CA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Healthy Eating with Frozen Sherpa Foods",
        description: "Convenient, nutritious frozen meals rooted in authentic Sherpa traditions for busy lifestyles in Toronto.",
        images: [heroImage],
    },
    alternates: {
        canonical: "https://frozensherpafoods.com/blog/healthy-eating",
    },
};

export default function HealthyEatingPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <BlogHeader
                date="July 24, 2026"
                title="Healthy Eating with Frozen Sherpa Foods"
                description="Our frozen meals are designed to be both convenient and nutritious for busy lifestyles. Rooted in Himalayan traditions and built for modern life, each dish balances authentic Sherpa flavors with wholesome, feel-good nutrition."
                bannerImage={heroImage}
            />


            <section className="mx-auto max-w-6xl pb-16">

                <article className="overflow-hidden">
                    <div className="">
                        <div className="grid gap-10">
                            <div className="space-y-8">
                                {/* Why healthy eating matters */}
                                <section aria-labelledby="healthy-eating-matters">
                                    <h2 id="healthy-eating-matters" className="text-xl sm:text-2xl font-semibold text-yellow-300">
                                        Why healthy eating matters — even when you're busy
                                    </h2>
                                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        Healthy eating doesn't have to mean hours in the kitchen. For busy professionals, students, and parents, the real challenge is finding meals that are quick, satisfying, and actually nourishing.
                                        <br /><br />
                                        Nutritionists generally recommend looking for meals with a good balance of protein and fiber, moderate sodium, and recognizable whole-food ingredients. That's exactly the lens we use when developing Frozen Sherpa Foods: authentic recipes, reimagined to support your health without sacrificing flavor or culture.
                                    </p>
                                </section>


                                {/* How our meals are designed */}
                                <section aria-labelledby="meal-design">
                                    <h2 id="meal-design" className="text-xl sm:text-2xl font-semibold text-yellow-300">
                                        How our frozen meals are designed to be both convenient and nutritious
                                    </h2>
                                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        Every Frozen Sherpa Foods meal starts with a traditional recipe — like momo, riki kur, or keema noodles — and then we thoughtfully adapt it for modern, health-conscious lifestyles.
                                        <br /><br />
                                        We focus on:
                                    </p>
                                    <ul className="ml-4 sm:ml-6 mt-2 list-disc space-y-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        <li>
                                            <strong>Wholesome ingredients:</strong> We prioritize ingredients you can recognize and pronounce — whole grains, vegetables, legumes, and quality proteins.
                                        </li>
                                        <li>
                                            <strong>Balanced macros:</strong> Our recipes aim for a satisfying mix of protein and fiber to help you feel full and energized, similar to what nutritionists suggest for satiety and steady energy.
                                        </li>
                                        <li>
                                            <strong>Mindful sodium:</strong> We keep sodium in check so you can enjoy bold Sherpa flavors without overdoing it, drawing on guidance to choose lower-sodium frozen options when possible.
                                        </li>
                                        <li>
                                            <strong>Convenience first:</strong> Ready-to-heat meals mean you can go from freezer to table in minutes, making it easier to eat well on busy days — a key benefit highlighted by experts on frozen meals for busy people.
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        The result is food that feels like home, but fits your schedule and supports your health goals.
                                    </p>
                                </section>


                                {/* Busy-lifestyle friendly */}
                                <section aria-labelledby="busy-lifestyle">
                                    <h2 id="busy-lifestyle" className="text-xl sm:text-2xl font-semibold text-yellow-300">
                                        Built for busy lifestyles
                                    </h2>
                                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        Healthy eating routines often fall apart when life gets hectic. Frozen meals, when chosen thoughtfully, can help you stay on track by reducing decision fatigue and cooking time.
                                        <br /><br />
                                        With Frozen Sherpa Foods, you can:
                                    </p>
                                    <ul className="ml-4 sm:ml-6 mt-2 list-disc space-y-2 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        <li>Keep a few meals in the freezer for late nights, study sessions, or long workdays.</li>
                                        <li>Skip takeout and still get a hot, flavorful meal in minutes.</li>
                                        <li>Enjoy culturally rich food that feels comforting and nourishing, not like a "diet" meal.</li>
                                    </ul>
                                </section>


                                {/* Finishing notes */}
                                <section aria-labelledby="finishing-notes">
                                    <h2 id="finishing-notes" className="text-xl sm:text-2xl font-semibold text-yellow-300">
                                        Finishing notes: A taste of home, revolutionized as a frozen meal
                                    </h2>
                                    <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-white/70">
                                        Frozen Sherpa Foods brings the comfort of home-cooked Sherpa cuisine into a modern form that fits today's busy lifestyle. By turning traditional recipes into ready-to-eat frozen meals, we preserve the authentic flavors, warmth, and heritage of each dish while making them more convenient and accessible.
                                        <br /><br />
                                        Every meal is crafted to feel familiar, wholesome, and satisfying — a way to enjoy the taste of home, even on the busiest days.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <article className="overflow-hidden border border-white/10 bg-[#0d1118]">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1631379578550-7038263db699?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D"
                                alt="Fresh cheese ingredients for healthy Sherpa frozen meals"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority
                            />
                        </div>
                    </article>


                    <article className="overflow-hidden border border-white/10 bg-[#0d1118]">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1636947112949-8fa88a394e65?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D"
                                alt="Summer Sherpa food - traditional Himalayan cuisine"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </article>


                    <article className="overflow-hidden border border-white/10 bg-[#0d1118]">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1705475388190-775066fd69a5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHVufDB8fHx8fA%3D%3D"
                                alt="Sherpa New Year khapseys - authentic Nepali celebration food"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}