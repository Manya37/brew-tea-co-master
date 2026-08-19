"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/first.png",
    alt: "Premium green tea leaf raw material for extract manufacturing",
  },
  {
    src: "/second.png",
    alt: "Tea compounds and botanical extract manufacturing",
  },
  {
    src: "/third.png",
    alt: "Indian tea plantation — reliable all-year raw material supply",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-4 lg:right-grid-margin flex gap-2 z-[2]">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === active ? "w-8 bg-primary" : "w-2 bg-on-surface/30 hover:bg-on-surface/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
