export default function Amenities() {
  return (
    <section id="amenities" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          <div>
            <span className="font-mono text-xs tracking-widest2 text-glass">
              03 &mdash; AMENITIES
            </span>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mt-4 mb-5">
              The SkyLoft rooftop deck
            </h3>
            <p className="text-graphite/75 leading-relaxed mb-6">
              A private rooftop terrace above the skyline &mdash; steps from
              your desk, not a rental across town. Host client meetings, run
              a team offsite, or just get outside without leaving the
              building.
            </p>
            <ul className="space-y-3">
              {[
                "Skyline and riverfront views",
                "Space for team offsites and client meetings",
                "Available to every tenant, every floor",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-graphite/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rust shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span aria-hidden className="font-mono text-xs tracking-widest2 text-glass">
              &nbsp;
            </span>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mt-4 mb-5">
              Concierge at your front desk
            </h3>
            <p className="text-graphite/75 leading-relaxed mb-6">
              A staffed front desk handles the day-to-day so your team
              doesn&rsquo;t have to &mdash; packages, visitors, and building
              access, covered.
            </p>
            <ul className="space-y-3">
              {[
                "Package acceptance and secure storage",
                "Visitor check-in and building access",
                "Modern, move-in-ready common areas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-graphite/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-leed shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
