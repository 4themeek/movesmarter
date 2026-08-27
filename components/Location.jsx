const points = [
  {
    label: "Riverfront setting",
    detail: "Steps from Sawyer Point and the Purple People Bridge.",
  },
  {
    label: "Walkable downtown",
    detail: "Restaurants, the art museum, the stadium, and hotels, all on foot.",
  },
  {
    label: "Easy regional access",
    detail: "Direct routes via I-71, I-471, and Ft. Washington Way.",
  },
  {
    label: "On-site parking",
    detail: "Garage and surface parking available, with free visitor parking.",
  },
];

export default function Location() {
  return (
    <section className="bg-paper py-20 md:py-28 border-t border-steel/20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <span className="font-mono text-xs tracking-widest2 text-glass">
          04 &mdash; LOCATION
        </span>
        <h3 className="font-display font-semibold text-2xl md:text-3xl mt-4 mb-12 max-w-xl">
          Downtown Cincinnati, near the river
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {points.map((p) => (
            <div key={p.label}>
              <div className="font-display font-medium text-lg mb-2">
                {p.label}
              </div>
              <p className="text-graphite/70 text-sm leading-relaxed">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
