import { socials } from "@/lib/socials";

export default function Connect() {
  return (
    <section id="connect" className="relative bg-sage-cream overflow-hidden">
      {/* Ambient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="wash absolute top-0 right-1/4 w-[940px] h-[940px] bg-golden-valley/20 -translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-28 md:pb-32">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-6">Stay Connected</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-delta-stone mb-6 leading-[1.05]">
            Follow the{" "}
            <em className="text-sycamore" style={{ fontStyle: "italic" }}>
              journey
            </em>
          </h2>
          <p className="text-delta-stone/70 text-lg leading-relaxed">
            We&rsquo;re building in the open. Follow along for updates, prayer, and glimpses of what God is doing as we count down to January 2027.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Sacramento Tabernacle on ${social.name}`}
              className="group flex items-center gap-4 rounded-2xl border border-delta-stone/12 bg-sage-cream/60 px-6 py-5 hover:border-sycamore/40 transition-colors duration-200"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 flex-none rounded-full bg-delta-stone text-sage-cream group-hover:bg-sycamore transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-delta-stone font-semibold">{social.name}</span>
                <span className="block text-delta-stone/50 text-sm truncate">{social.handle}</span>
              </span>
              <span className="text-delta-stone/30 text-lg group-hover:text-sycamore group-hover:translate-x-0.5 transition duration-200" aria-hidden="true">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
