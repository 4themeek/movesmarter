import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-graphite py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-semibold text-sm tracking-wideish text-paper/80">
          SMARTER MOVE
        </span>
        <p className="text-paper/40 text-xs text-center sm:text-left">
          310 Culvert Street, Downtown Cincinnati, Ohio 45202
        </p>
        <Link
          href="/contact"
          className="text-paper/70 text-sm hover:text-paper transition-colors focus-ring rounded"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
