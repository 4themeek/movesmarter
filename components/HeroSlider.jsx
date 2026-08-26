"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Must match the `7.5s` baked into the kb-a..kb-e entries in
// tailwind.config.js — if you change one, change the other.
const SLIDE_DURATION = 7500;

// Ken Burns variants, cycled by slide index so consecutive slides never
// repeat the same zoom origin / pan direction.
const VARIANTS = [
  { origin: "origin-top-left", animate: "animate-kb-a" },
  { origin: "origin-bottom-right", animate: "animate-kb-b" },
  { origin: "origin-center", animate: "animate-kb-c" },
  { origin: "origin-top-right", animate: "animate-kb-d" },
  { origin: "origin-bottom-left", animate: "animate-kb-e" },
];

export default function HeroSlider({ images, overlay = false, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  // Per-slide "activation key" — only the slide entering view gets a new
  // value, which remounts just its zoom layer so the Ken Burns animation
  // restarts from 0% every time that slide comes back around. Slides that
  // are merely fading out keep their existing key (no remount) — the
  // animate-kb-* class must stay applied unconditionally (not gated on
  // isActive) so animation-fill-mode: forwards holds the zoomed end state
  // while it fades out, instead of the transform snapping back to
  // scale(1) the instant the class would otherwise be removed.
  const [activationKeys, setActivationKeys] = useState(() =>
    images.map((_, i) => (i === 0 ? 0 : -1))
  );
  const tickRef = useRef(0);

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const timer = setTimeout(() => {
      const next = (activeIndex + 1) % images.length;
      tickRef.current += 1;
      const tick = tickRef.current;

      setActivationKeys((keys) => {
        const copy = [...keys];
        copy[next] = tick;
        return copy;
      });
      setActiveIndex(next);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeIndex, images.length]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {images.map((img, i) => {
        const isActive = i === activeIndex;
        const isNext = i === (activeIndex + 1) % images.length;
        const variant = VARIANTS[i % VARIANTS.length];

        return (
          <div
            key={img.src}
            className={`kb-fade absolute inset-0 transition-opacity duration-[1300ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              key={`${i}-${activationKeys[i]}`}
              className={`kb-zoom absolute inset-0 ${variant.origin} ${variant.animate}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : isActive || isNext ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}

      {overlay && <div className="absolute inset-0 bg-black/15" />}
    </div>
  );
}
