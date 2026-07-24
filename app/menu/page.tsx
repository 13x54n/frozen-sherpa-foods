import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Menu | Frozen Sherpa Foods - Authentic Himalayan Meals Toronto",
    description: "Explore our menu of authentic Sherpa frozen meals. Momo, riki kur, keema noodles, and more. Ready-to-heat Himalayan cuisine delivered across Toronto.",
    keywords: [
        "Frozen Sherpa Foods menu",
        "frozen momo Toronto",
        "Sherpa food menu",
        "Himalayan frozen meals",
        "riki kur Toronto",
        "keema noodles frozen",
        "Nepali food delivery Toronto",
        "authentic Sherpa cuisine",
        "frozen dumplings Toronto",
        "Toronto ethnic food menu",
        "ready-to-heat Himalayan meals",
        "Sherpa restaurant Toronto"
    ],
    openGraph: {
        title: "Menu | Frozen Sherpa Foods - Authentic Himalayan Meals Toronto",
        description: "Explore our menu of authentic Sherpa frozen meals. Momo, riki kur, keema noodles, and more. Ready-to-heat Himalayan cuisine delivered across Toronto.",
        type: "website",
        locale: "en_CA",
        siteName: "Frozen Sherpa Foods",
    },
    twitter: {
        card: "summary_large_image",
        title: "Menu | Frozen Sherpa Foods",
        description: "Authentic Sherpa frozen meals: momo, riki kur, keema noodles, and more. Ready-to-heat Himalayan cuisine in Toronto.",
    },
    alternates: {
        canonical: "https://frozensherpafoods.com/menu",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const menuCategories = [
    {
        id: "momo",
        name: "Momo (Dumplings)",
        description: "Hand-folded dumplings filled with seasoned meat or vegetables, served with traditional achaar",
        items: [
            {
                name: "Chicken Momo",
                description: "Juicy chicken filling with ginger, garlic, and traditional spices",
                price: "$14.99",
                servings: "12 pieces",
                image: "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1123&auto=format&fit=crop",
                spicy: true,
                popular: true,
            },
            {
                name: "Vegetable Momo",
                description: "Fresh seasonal vegetables with aromatic herbs and spices",
                price: "$13.99",
                servings: "12 pieces",
                image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=1170&auto=format&fit=crop",
                spicy: false,
                popular: false,
            },
            {
                name: "Buff Momo",
                description: "Traditional buffalo meat with authentic Sherpa spices",
                price: "$15.99",
                servings: "12 pieces",
                image: "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1123&auto=format&fit=crop",
                spicy: true,
                popular: true,
            },
        ],
    },
    {
        id: "pancakes",
        name: "Riki Kur (Potato Pancakes)",
        description: "Traditional Sherpa potato pancakes, perfect for breakfast or any meal",
        items: [
            {
                name: "Classic Riki Kur",
                description: "Golden potato pancakes made with grated potatoes and traditional spices",
                price: "$12.99",
                servings: "6 pieces",
                image: "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop",
                spicy: false,
                popular: true,
            },
            {
                name: "Cheese Riki Kur",
                description: "Traditional potato pancakes with melted cheese filling",
                price: "$13.99",
                servings: "6 pieces",
                image: "https://images.unsplash.com/photo-1727342472818-8a85b93b0116?q=80&w=735&auto=format&fit=crop",
                spicy: false,
                popular: false,
            },
        ],
    },
    {
        id: "noodles",
        name: "Keema Noodles",
        description: "Stir-fried noodles with seasoned ground meat and vegetables",
        items: [
            {
                name: "Chicken Keema Noodles",
                description: "Wok-tossed noodles with spiced chicken, vegetables, and aromatic herbs",
                price: "$16.99",
                servings: "2-3 servings",
                image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1170&auto=format&fit=crop",
                spicy: true,
                popular: true,
            },
            {
                name: "Vegetable Keema Noodles",
                description: "Fresh vegetables with aromatic spices tossed with noodles",
                price: "$15.99",
                servings: "2-3 servings",
                image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1170&auto=format&fit=crop",
                spicy: false,
                popular: false,
            },
        ],
    },
    {
        id: "soups",
        name: "Traditional Soups",
        description: "Warming Himalayan soups perfect for cold days",
        items: [
            {
                name: "Shyakpa (Thenthuk)",
                description: "Hand-pulled noodle soup with vegetables and meat in rich broth",
                price: "$17.99",
                servings: "3-4 servings",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1170&auto=format&fit=crop",
                spicy: false,
                popular: true,
            },
            {
                name: "Thukpa",
                description: "Tibetan-style noodle soup with vegetables and aromatic broth",
                price: "$16.99",
                servings: "3-4 servings",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1170&auto=format&fit=crop",
                spicy: true,
                popular: false,
            },
        ],
    },
];

export default function MenuPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1123&auto=format&fit=crop"
                    alt="Frozen Sherpa Foods menu - authentic Himalayan cuisine momo riki kur keema noodles"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-300 mb-4">
                        Our Menu
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        Authentic Sherpa cuisine, ready to heat and enjoy. From hand-folded momo to traditional riki kur, every meal carries the warmth of Himalayan traditions.
                    </p>
                </div>
            </section>

            {/* Menu Categories */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
                <div className="space-y-16">
                    {menuCategories.map((category, categoryIndex) => (
                        <article
                            key={category.id}
                            id={category.id}
                            className="scroll-mt-24"
                        >
                            {/* Category Header */}
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">
                                    {category.name}
                                </h2>
                                <p className="mt-2 text-sm sm:text-base text-white/70">
                                    {category.description}
                                </p>
                            </div>

                            {/* Menu Items Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={item.name}
                                        className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d1118] hover:border-yellow-300/50 transition-all duration-300"
                                    >
                                        {/* Item Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={`${item.name} - ${item.description} - authentic Sherpa frozen meal Toronto`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                loading={itemIndex < 2 ? "eager" : "lazy"}
                                            />
                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                {item.popular && (
                                                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-300 text-black rounded-full">
                                                        Popular
                                                    </span>
                                                )}
                                                {item.spicy && (
                                                    <span className="px-2 py-1 text-xs font-semibold bg-red-600 text-white rounded-full">
                                                        🌶 Spicy
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Item Details */}
                                        <div className="p-4 sm:p-5">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white">
                                                {item.name}
                                            </h3>
                                            <p className="mt-2 text-sm sm:text-base text-white/70 line-clamp-2">
                                                {item.description}
                                            </p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <span className="text-sm sm:text-base text-white/60">
                                                    {item.servings}
                                                </span>
                                                <span className="text-xl sm:text-2xl font-bold text-yellow-300">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <button className="mt-4 w-full py-2 sm:py-3 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-colors duration-200">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0d1118] border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">
                            Ready to Taste the Himalayas?
                        </h2>
                        <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
                            All our meals are frozen fresh and ready to heat in minutes. Perfect for busy professionals, students, and families who want authentic, nourishing food without the wait.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 sm:py-4 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-colors duration-200">
                                Order Now
                            </button>
                            <Link
                                href="/contact"
                                className="px-8 py-3 sm:py-4 border border-white/30 hover:border-yellow-300 text-white hover:text-yellow-300 font-semibold rounded-lg transition-all duration-200"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}