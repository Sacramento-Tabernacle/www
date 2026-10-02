import Image from "next/image";

export default function Events() {
  return (
    <section id="events" className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-delta-stone/10 bg-sycamore grid md:grid-cols-2 items-stretch">
          {/* Ambient wash */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="wash absolute -top-1/4 right-0 w-[750px] h-[750px] bg-golden-valley/20" />
            <div className="wash absolute -bottom-1/3 left-0 w-[750px] h-[750px] bg-ocean-mist/20" />
          </div>

          <div className="relative row-start-2 md:row-start-1 md:col-start-1 px-8 py-10 md:px-12 md:py-20 flex flex-col items-start justify-center">
            <p className="text-sage-cream/60 text-sm tracking-widest uppercase mb-6">Gather With Us</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-sage-cream mb-6 leading-[1.05]">
              Upcoming Events
            </h2>
            <p className="text-sage-cream/80 text-lg leading-relaxed max-w-xl mb-10">
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

          <div className="relative row-start-1 md:col-start-2 aspect-[4/3] md:aspect-auto md:min-h-[540px]">
            <Image
              src="/photos/community-gathering.webp"
              alt="People getting to know each other at a Sacramento Tabernacle outdoor gathering"
              fill
              sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) 50vw, 616px"
              className="object-cover object-[center_30%] md:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
