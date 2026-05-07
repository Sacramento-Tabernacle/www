"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="bg-delta-stone border-t border-sage-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <Image src="/logos/logo-black.png" alt="Sacramento Tabernacle" width={160} height={40} className="h-10 w-auto invert mb-4" />
          <p className="text-sage-cream/40 text-xs tracking-[0.15em] uppercase mt-1">Becoming like Jesus.</p>
        </div>

        <div>
          <h3 className="text-sage-cream text-2xl font-heading font-bold mb-2">Stay in Touch</h3>
          <p className="text-sage-cream/50 text-sm mb-6">Get occasional updates as we move toward launch.</p>

          {submitted ? (
            <p className="text-accent text-sm">Thanks! We'll be in touch.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 bg-sage-cream/5 border border-sage-cream/15 rounded-full px-5 py-3 text-sage-cream placeholder-sage-cream/30 text-sm focus:outline-none focus:border-sage-cream/40"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-sage-cream/10 flex flex-wrap justify-between items-center gap-4">
        <p className="text-sage-cream/30 text-xs">© 2026 Sacramento Tabernacle. Becoming like Jesus.</p>
        <Link href="/give" className="text-sage-cream/30 hover:text-sage-cream/60 text-xs transition-colors">Give Online</Link>
      </div>
    </footer>
  );
}
