import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-20">
        <Logo />
        <nav className="flex items-center gap-8">
          <a
            href="/#sustainability"
            className="hidden sm:inline text-sm text-paper/85 hover:text-paper transition-colors focus-ring rounded"
          >
            Sustainability
          </a>
          <a
            href="/#space"
            className="hidden sm:inline text-sm text-paper/85 hover:text-paper transition-colors focus-ring rounded"
          >
            The Space
          </a>
          <a
            href="/#amenities"
            className="hidden sm:inline text-sm text-paper/85 hover:text-paper transition-colors focus-ring rounded"
          >
            Amenities
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium bg-leed text-paper px-4 py-2 rounded-sm hover:bg-leed/90 transition-colors focus-ring"
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
