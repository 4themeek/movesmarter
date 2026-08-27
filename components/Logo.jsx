import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center rounded-sm bg-paper px-3 py-1.5 shadow-sm focus-ring ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Smarter Move — Right Space. Brighter Future."
        width={1047}
        height={300}
        priority
        className="h-9 sm:h-10 w-auto"
      />
    </Link>
  );
}
