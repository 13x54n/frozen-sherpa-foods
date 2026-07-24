import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";

const heroImage =
  "https://images.unsplash.com/photo-1716816211590-c15a328a5ff0?q=80&w=1123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function SpicesOfHimalayasPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <BlogHeader
        date="May 30, 2026"
        title="Spices of the Himalayas"
        description="A deep dive into the key spices that define Sherpa cooking and how to use them at home."
        bannerImage={heroImage}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <article className="overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="grid gap-10">
              <div className="space-y-8">
                {/* Intro */}
                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    The soul of Sherpa cooking
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    Sherpa cuisine is known for its comforting, soulful flavors that come from simple ingredients and carefully chosen spices. In the high Himalayas, herbs and spices are valued not just for taste, but also for their warming and medicinal qualities.
                    <br />
                    <br />
                    Everyday cooking relies on a core set of aromatics — ginger, garlic, onion, cumin, coriander, turmeric, and chilies — while special dishes may include wild Himalayan herbs like jimbu (aromatic leaf garlic) and timur (Sichuan pepper). These spices create depth without overwhelming the palate, letting the natural flavors of potatoes, grains, and vegetables shine.
                  </p>
                </section>

                {/* Images 2 columns */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a8b7b5de7e895debc1a80027a08a0155e242ea40.jpg"
                        alt="Platter of assorted Himalayan and Nepalese dishes with spices and herbs"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/852b55e51d81c00cc81f7f41cea97c8d0ebfa2ca.jpg"
                        alt="Traditional Himalayan flatbread with butter and green paste on a plate"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Core spices */}
                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    Core spices in Sherpa kitchens
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    In Sherpa households, the spice shelf is small but powerful. A few key ingredients show up again and again, forming the flavor backbone of dal, soups, stir-fries, and dumplings.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Ginger (aduwa) and garlic (lasun)
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Fresh ginger and garlic are the starting point for many curries and soups. They’re sautéed in oil or butter to build aroma, then layered with other spices. Ginger adds warmth and brightness, while garlic brings depth and savory richness.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Cumin (jeera) and coriander (dhaniya)
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Cumin seeds are often crackled in hot oil at the beginning of cooking to release their nutty scent. Ground coriander and cumin together form a gentle, earthy base for many vegetable and lentil dishes, supporting but never hiding the main ingredients.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Turmeric (besar / nyu nan)
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Turmeric is used for its golden color and subtle bitterness, as well as its traditional reputation as a “cleanser of the body.” It appears in lentils, vegetable curries, and rice dishes, adding warmth and a gentle earthy note.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Chilies (khursani)
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Fresh and dried chilies bring heat and brightness. In Sherpa cooking, heat is usually balanced rather than extreme, designed to warm the body in cold climates. Chilies also show up in achaar (pickles) and dipping sauces served alongside momo, riki kur, and other staples.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Images 2 columns */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/24229f3b5b5a9a75813c295f414e1e58b95749e8.jpg"
                        alt="Plate of Nepali fritters with green and dark dipping sauces"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d6a3715bee432e85d6f620330852b7fd827cb00d.jpg"
                        alt="Plate of momo dumplings with orange dipping sauce and cilantro"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Wild Himalayan herbs */}
                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    Wild Himalayan herbs: jimbu, timur, and more
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    Beyond the everyday spices, Sherpa and other hilly cuisines make use of distinctive wild herbs that are hard to find outside the region. These give Himalayan food its unique signature.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Jimbu (aromatic leaf garlic)
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Jimbu is an aromatic allium with a strong, herbal garlic-onion scent. It’s often used to temper lentil dishes and curries, especially in Thakali and Sherpa cooking. When fried briefly in oil or ghee, jimbu releases an intense fragrance that lifts the whole pot.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Timur (Sichuan pepper)
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Timur is not a true pepper but a berry that creates a tingling, citrusy sensation on the tongue. It adds a lively buzz and fresh aroma to meats, vegetables, and chutneys. A little goes a long way, and it’s often used alongside ginger and chilies for layered heat.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Garam masala and blends
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Garam masala in Nepal is typically a blend of coriander, cumin, fenugreek, turmeric, cardamom, cinnamon, black pepper, bay leaf, clove, nutmeg, and mace. In Sherpa kitchens, such blends are used sparingly to enrich meat and festive dishes, balancing warmth, sweetness, and spice.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Images 2 columns */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/a1c15a7ce48b5e300da1c4f24d6967f4f356cc38.jpg"
                        alt="Bowl of Himalayan noodle soup with herbs and spices"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/38c56e608711dd0744e4de3046f32ddcd0aef1fc.jpg"
                        alt="Step-by-step photos of cooking a green Sherpa pancake with spices"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* How to use at home */}
                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    How to use Himalayan spices at home
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    You don’t need a large collection of spices to cook in a Sherpa-inspired way. Start with a small, versatile set and build from there.
                  </p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Build a basic spice kit
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        A good starter kit includes: cumin seeds, ground coriander, turmeric, dried red chilies or chili powder, and fresh ginger and garlic. If you can find them, add timur and jimbu for a more authentically Himalayan profile.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Layer your spices
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Begin by heating oil or butter, then add whole spices like cumin until they sizzle. Follow with ginger and garlic, then ground spices like turmeric and coriander. This order helps each spice bloom without burning, creating a deep, rounded flavor.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Use spices to support, not dominate
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Sherpa cooking is about balance. Let potatoes, lentils, greens, and noodles remain the stars, using spices to add warmth and complexity. Taste as you go, and remember that a little chili or timur can change a dish dramatically.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-yellow-200">
                        Finish with fresh herbs and chilies
                      </h3>
                      <p className="mt-2 text-base leading-8 text-white/70">
                        Chopped spring onions, cilantro, and fresh green chilies are common finishing touches. A spoonful of homemade achaar or a side of somar sauce can turn a simple dal or noodle soup into a full-flavored Himalayan meal.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Finishing notes */}
                <section>
                  <h2 className="text-2xl font-semibold text-yellow-300">
                    Finishing notes
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    The spices of the Himalayas tell a story of high-altitude life, where food must be warming, nourishing, and deeply satisfying. By understanding how Sherpa cooks use ginger, garlic, cumin, turmeric, chilies, and wild herbs like jimbu and timur, you can bring a piece of that mountain kitchen into your own home.
                    <br />
                    <br />
                    Start with simple dishes, taste often, and let these spices guide you toward your own version of Himalayan comfort food.
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