import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-glass py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <h3 className="font-display font-semibold text-paper text-2xl md:text-4xl leading-tight mb-6">
          Let&rsquo;s talk about the space you actually need.
        </h3>
        <p className="text-paper/80 max-w-xl mx-auto mb-9 leading-relaxed">
          Tell us your square footage, timeline, and what matters most to
          your team &mdash; we&rsquo;ll follow up with availability and a
          tenant improvement estimate.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-leed text-paper font-medium px-7 py-3.5 rounded-sm hover:bg-leed/90 transition-colors focus-ring"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
