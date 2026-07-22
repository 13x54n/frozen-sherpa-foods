import Image from "next/image";
import type { ReactNode } from "react";

export function FoodHero({
  image,
  children,
}: {
  image: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 min-h-[60vh]">
        <Image
          src={image}
          alt="Food hero"
          fill
          className="object-cover blur-2xl scale-110 opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-[#05070b]" />
      </div>

      <div className="relative z-10">{children}</div>

    </section>
  );
}