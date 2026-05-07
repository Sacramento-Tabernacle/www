import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-delta-stone flex items-end pt-16 overflow-hidden">
      {/* Ambient color washes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sycamore/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-river-sage/5 rounded-full blur-[100px]" />
      </div>
      {/* Fingerprint brand icon — faded, large, right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04] translate-x-1/4">
        <Image src="/logos/icon-black.png" alt="" width={700} height={700} className="invert" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-32 w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 border border-sage-cream/20 rounded-full px-4 py-1.5 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-river-sage animate-pulse" />
          <span className="text-sage-cream/60 text-xs tracking-[0.2em] uppercase">Launching June 1, 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-heading font-bold leading-[0.92] text-sage-cream mb-4 max-w-4xl">
          A place of{" "}
          <em className="text-golden-valley" style={{ fontStyle: "italic" }}>
            becoming
          </em>
          .
        </h1>

        {/* Subline */}
        <p className="text-sage-cream/40 text-sm tracking-widest uppercase mb-16 ml-1">
          Sacramento Tabernacle
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-sage-cream/20 mb-10" />

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#join-team"
            className="inline-flex items-center px-7 py-3.5 bg-sage-cream text-delta-stone text-sm font-semibold rounded-full hover:bg-golden-valley transition-colors duration-200"
          >
            Join the Launch Team
          </a>
          <Link
            href="/give"
            className="inline-flex items-center px-7 py-3.5 border border-sage-cream/20 text-sage-cream/70 text-sm font-semibold rounded-full hover:border-sage-cream/50 hover:text-sage-cream transition-colors duration-200"
          >
            Give Online
          </Link>
        </div>
      </div>
    </section>
  );
}
