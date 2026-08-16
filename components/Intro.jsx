"use client";

import Image from "next/image";

export default function Intro() {
  function scrollToHero() {
    document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative h-[100svh] w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="relative h-full w-full max-w-3xl">
        <Image
          src="/office-is-fine.png"
          alt="Your office is fine. Until you see what your office could be."
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain"
        />
      </div>

      <button
        onClick={scrollToHero}
        aria-label="Scroll to see the space"
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors focus-ring rounded"
      >
        <span className="font-mono text-[11px] tracking-widest2">SEE THE SPACE</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-bounce"
          aria-hidden
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
