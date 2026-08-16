export default function Events() {
  return (
    <section id="events" className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-delta-stone/10 bg-sycamore px-8 py-16 md:px-16 md:py-20 text-center">
          {/* Ambient wash */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="wash absolute -top-1/4 right-0 w-[750px] h-[750px] bg-golden-valley/20" />
            <div className="wash absolute -bottom-1/3 left-0 w-[750px] h-[750px] bg-ocean-mist/20" />
          </div>

          <div className="relative">
            <p className="text-sage-cream/60 text-sm tracking-widest uppercase mb-6">Gather With Us</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-sage-cream mb-6 leading-[1.05]">
              Upcoming Events
            </h2>
            <p className="text-sage-cream/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Long before we launch, we&rsquo;re gathering, praying, and building together. Come be part of what God is doing in Sacramento.
            </p>
            <a
              href="https://sactabernacle.churchcenter.com/registrations/events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-cream text-delta-stone text-sm font-semibold rounded-full hover:bg-golden-valley transition-colors duration-200"
            >
              View Events
              <span className="text-base">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
