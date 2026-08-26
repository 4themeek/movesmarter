export default function Pillars() {
  return (
    <section id="space" className="bg-concrete py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          <div>
            <span className="font-mono text-xs tracking-widest2 text-glass">
              01 &mdash; SUSTAINABILITY
            </span>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mt-4 mb-5">
              A building that lowers your operating costs
            </h3>
            <p className="text-graphite/75 leading-relaxed mb-6">
              The building was renovated top to bottom with energy
              performance in mind &mdash; high-performance glazing, an
              upgraded envelope, and efficient systems that cut utility
              spend and environmental impact together. That efficiency
              shows up directly on your P&amp;L, backed by LEED
              certification.
            </p>
            <ul className="space-y-3">
              {[
                "Floor-to-ceiling glass with high-performance glazing",
                "Efficient lighting and mechanical systems throughout",
                "Reduced water consumption, healthier indoor air",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-graphite/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-leed shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-xs tracking-widest2 text-glass">
              02 &mdash; CUSTOMIZATION
            </span>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mt-4 mb-5">
              Built around your team, before you move in
            </h3>
            <p className="text-graphite/75 leading-relaxed mb-6">
              Every tenant works directly with designers and architects to
              shape their space before day one &mdash; not around a
              standard spec suite. Column-light, 18,000-square-foot floor
              plates and 11&ndash;15&rsquo; ceilings give you room to lay
              out the space your way, with a tenant improvement allowance
              built into the deal from the start.
            </p>
            <ul className="space-y-3">
              {[
                "Tenant improvement allowance set at lease signing",
                "Direct access to the building's design and architecture team",
                "Column-light floor plates, 11\u201315\u2019 ceilings",
                "Layouts shaped around your workflow, not a template suite",
                "Suites that scale as your headcount grows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-graphite/80">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-glass shrink-0" />
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
