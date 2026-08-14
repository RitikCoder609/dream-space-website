"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const categories = {
  Flat: [
    "/flat/WhatsApp Image 2026-08-10 at 4.47.50 PM (1).jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.50 PM.jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.53 PM.jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.54 PM (1).jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.54 PM (2).jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.54 PM.jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.55 PM (1).jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.47.55 PM.jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.48.00 PM (1).jpeg",
    "/flat/WhatsApp Image 2026-08-10 at 4.48.00 PM.jpeg",
  ],
  Plot: ["/plot/plot1.jpeg", "/plot/plot2.jpeg", "/plot/plot3.jpeg"],
  Makan: [
    "/flat/WhatsApp Image 2026-08-10 at 4.47.55 PM.jpeg",
  ],
  Commercial: [
   
    "/commercial/WhatsApp Image 2026-08-10 at 4.48.06 PM (1).jpeg",
  ],
};

type Category = keyof typeof categories;

export default function ImageSlider() {
  const [activeCategory, setActiveCategory] = useState<Category>("Flat");
  const [current, setCurrent] = useState(0);

  const images = categories[activeCategory];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrent(0);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [activeCategory, images.length]);

  return (
    <section  id="properties" className="w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-5 md:px-8">
        <div
          role="tablist"
          aria-label="Property categories"
          className="no-scrollbar mb-7 flex w-full snap-x snap-mandatory items-center justify-start gap-1 overflow-x-auto pb-1 sm:justify-center sm:gap-2 md:mb-8 md:gap-4"
        >
          {(Object.keys(categories) as Category[]).map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => handleCategoryChange(category)}
              className={`shrink-0 snap-start whitespace-nowrap border-b-2 px-4 py-2 text-sm font-semibold transition-all duration-300 md:px-7 md:text-base ${
                activeCategory === category
                  ? "border-gold text-gold"
                  : "border-transparent text-navy-deep hover:border-gold hover:text-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-paper sm:aspect-[16/9] md:rounded-xl">
          {images.map((image, index) => (
            <div
              key={image}
              aria-hidden={index !== current}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`${activeCategory} property ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 92vw, 1200px"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
