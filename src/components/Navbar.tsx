import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-6 focus:z-[100] focus:rounded-full focus:bg-delta-stone focus:text-sage-cream focus:px-6 focus:py-3"
      >
        Skip to content
      </a>
      <header className="fixed top-0 left-0 right-0 z-50 bg-sage-cream/90 backdrop-blur-sm border-b border-delta-stone/8">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex min-h-[44px] items-center gap-3">
            <Image src="/logos/logo-black.png" alt="Sacramento Tabernacle" width={160} height={40} className="h-8 w-auto" />
          </Link>
        </nav>
      </header>
    </>
  );
}
