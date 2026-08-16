const stats = [
  {
    value: "~50%",
    label: "Energy use vs. comparable downtown buildings",
  },
  {
    value: "$1 / SF",
    label: "Annual electric cost per square foot",
  },
  {
    value: "12 YRS",
    label: "Real estate tax abatement for tenants",
  },
  {
    value: "18,000 SF",
    label: "Typical floor plate, column-light layouts",
  },
];

export default function DataStrip() {
  return (
    <section id="sustainability" className="bg-graphite py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
          <h2 className="font-display font-semibold text-paper text-2xl md:text-3xl">
            Efficient by design, not by accident
          </h2>
          <span className="font-mono text-xs tracking-widest2 text-leed">
            LEED &middot; USGBC CERTIFIED
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10 rounded-sm overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-graphite px-5 py-8 md:px-6 md:py-10">
              <div className="font-mono text-3xl md:text-4xl text-leed mb-3">
                {s.value}
              </div>
              <p className="text-paper/70 text-sm leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-paper/50 text-xs mt-6 max-w-2xl leading-relaxed">
          Efficiency figures reflect building performance relative to
          comparable downtown Cincinnati office stock, driven by
          high-performance glazing, upgraded building envelope, and
          efficient mechanical and lighting systems.
        </p>
      </div>
    </section>
  );
}
