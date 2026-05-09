import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-sage-cream flex items-end pt-16 overflow-hidden">
      {/* Ambient washes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ocean-mist/30 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-golden-valley/20 rounded-full blur-[120px]" />
      </div>

      {/* Faded fingerprint icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] translate-x-1/4">
        <Image src="/logos/icon-black.png" alt="" width={700} height={700} loading="eager" style={{ width: "700px", height: "auto" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-32 w-full">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 border border-delta-stone/20 rounded-full px-4 py-1.5 mb-16">
          <span className="w-1.5 h-1.5 rounded-full bg-sycamore animate-pulse" />
          <span className="text-delta-stone/50 text-xs tracking-[0.2em] uppercase">Launching January 2027</span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-heading font-bold leading-[0.92] text-delta-stone mb-4 max-w-4xl">
          A place of{" "}
          <em className="text-sycamore" style={{ fontStyle: "italic" }}>
            becoming
          </em>
          .
        </h1>

        {/* Subline */}
        <p className="text-delta-stone/40 text-sm tracking-widest uppercase mb-16 ml-1">
          Sacramento Tabernacle
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-delta-stone/15 mb-10" />

        {/* CTA */}
        <a
          href="https://sactabernacle.churchcenter.com/people/forms/1224240"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-delta-stone text-sage-cream text-sm font-semibold rounded-full hover:bg-sycamore transition-colors duration-200"
        >
          Join The Team
          <span className="text-base">→</span>
        </a>
      </div>
    </section>
  );
}
