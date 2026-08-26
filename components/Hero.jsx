import Link from "next/link";
import Nav from "./Nav";
import HeroSlider from "./HeroSlider";

const specs = [
  { label: "5 FLOORS" },
  { label: "100,000 SF" },
  { label: "11\u2013 15\u2019 CLG HT" },
  { label: "LEED CERTIFIED" },
];

const heroImages = [
  {
    src: "/hero/Front1.png",
    alt: "Front exterior of the LEED-certified office loft building, downtown Cincinnati",
  },
  {
    src: "/hero/SkyLoftViewWest.png",
    alt: "Street-level entrance at 310 Culvert Street",
  },
  {
    src: "/hero/livrm1.png",
    alt: "Upward view of the building facade above the Living Room creative meeting space",
  },
  {
    src: "/hero/MtAdam1.png",
    alt: "View of the Cincinnati riverfront and hillside from the building",
  },
  {
    src: "/hero/OfficeCMA.png",
    alt: "Interior office space with floor-to-ceiling windows overlooking the riverfront",
  },
  {
    src: "/hero/SKYloft-EDGE-3new.png",
    alt: "Team collaborating on the rooftop terrace at The Edge",
  },
];

export default function Hero() {
  return (
    <section
      id="explore"
      className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-graphite"
    >
      <Nav />

      <HeroSlider images={heroImages} />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/25 to-graphite/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-graphite/40 via-transparent to-transparent"
      />

      {/* Signature: architectural spec rail */}
      <div
        aria-hidden
        className="hidden md:flex flex-col justify-center gap-10 absolute right-10 top-1/2 -translate-y-1/2 z-10"
      >
        {specs.map((s) => (
          <div key={s.label} className="tick pl-6">
            <span className="font-mono text-[11px] tracking-widest2 text-paper/90">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-20">
        <p className="font-mono text-xs tracking-widest2 text-leed mb-4">
          DOWNTOWN CINCINNATI &middot; LEED CERTIFIED OFFICE LOFT
        </p>
        <h1 className="font-display font-semibold text-paper text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">
          Space that pays you back.
        </h1>
        <p className="text-paper/85 text-lg md:text-xl max-w-xl mt-5 leading-relaxed">
          A LEED-certified loft building on the riverfront, built out around
          how your team actually works &mdash; from the first day you sign.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <Link
            href="/contact"
            className="bg-leed text-paper font-medium px-6 py-3.5 rounded-sm hover:bg-leed/90 transition-colors focus-ring"
          >
            Schedule a Tour
          </Link>
          <a
            href="#sustainability"
            className="text-paper/90 font-medium px-2 py-3.5 hover:text-paper transition-colors focus-ring rounded"
          >
            See the numbers &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
