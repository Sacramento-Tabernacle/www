"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-delta-stone/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logos/logo-black.png" alt="Sacramento Tabernacle" width={160} height={40} className="h-8 w-auto invert" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => document.getElementById("join-team")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sage-cream/80 hover:text-sage-cream text-sm tracking-wide transition-colors"
          >
            Join the Team
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sage-cream/80 hover:text-sage-cream text-sm tracking-wide transition-colors"
          >
            About
          </button>
          <Link
            href="/give"
            className="text-sage-cream/80 hover:text-sage-cream text-sm tracking-wide transition-colors"
          >
            Give Online
          </Link>
        </div>

        <button
          className="md:hidden text-sage-cream p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-px bg-current transition-transform ${open ? "translate-y-2.5 rotate-45" : ""}`} />
            <span className={`block h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-transform ${open ? "-translate-y-2.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-delta-stone border-t border-sage-cream/10 px-6 py-4 flex flex-col gap-4">
          <button onClick={() => { document.getElementById("join-team")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }} className="text-sage-cream/80 text-sm text-left">Join the Team</button>
          <button onClick={() => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setOpen(false); }} className="text-sage-cream/80 text-sm text-left">About</button>
          <Link href="/give" className="text-sage-cream/80 text-sm">Give Online</Link>
        </div>
      )}
    </header>
  );
}
