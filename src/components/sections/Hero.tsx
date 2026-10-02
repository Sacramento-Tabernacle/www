import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-sage-cream flex items-center pt-16 overflow-hidden">
      {/* Ambient washes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="wash absolute bottom-0 left-0 w-[1100px] h-[1100px] bg-ocean-mist/20 translate-y-2/3 -translate-x-1/2" />
        <div className="wash absolute top-1/3 right-0 w-[880px] h-[880px] bg-golden-valley/20" />
      </div>

      {/* Faded fingerprint icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] translate-x-1/4">
        {/*
          Decorative only, and sitting at 6% opacity. It previously declared a
          square 700x700 for a 979x1278 source, so the reserved box was the wrong
          shape and the hero shifted once the real image arrived. `loading="eager"`
          also had Next preload it at up to 1920w, putting a 109KB background
          flourish in front of the headline font in the network queue.
        */}
        <Image
          src="/logos/icon-black.png"
          alt=""
          width={700}
          height={914}
          quality={40}
          sizes="700px"
          style={{ width: "700px", height: "auto" }}
        />
      </div>

      <div className="relative max-w-7xl max-lg:max-w-2xl mx-auto px-6 py-10 sm:py-16 lg:py-24 w-full grid lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 lg:gap-x-16 lg:gap-y-0 items-center">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 border border-delta-stone/20 rounded-full px-4 py-1.5 mb-6 lg:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-sycamore animate-pulse" />
            <span className="text-delta-stone/50 text-xs tracking-[0.2em] uppercase">Launching January 2027</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(3rem,12vw,3.5rem)] lg:text-[clamp(3.5rem,8vw,7rem)] font-heading font-bold leading-[0.92] text-delta-stone mb-4 max-w-4xl">
            A place of{" "}
            <em className="text-sycamore" style={{ fontStyle: "italic" }}>
              becoming
            </em>
            .
          </h1>

          {/* Subline */}
          <p className="text-delta-stone/60 text-xs lg:text-sm tracking-widest uppercase lg:mb-8 ml-1">
            Sacramento Tabernacle
          </p>
        </div>

        <figure className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[4/5] w-full lg:max-w-lg mx-auto overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-lg rounded-bl-lg lg:rounded-3xl lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <Image
            src="/photos/community-conversation.webp"
            alt="People smiling and talking together at a Sacramento Tabernacle gathering"
            fill
            preload
            sizes="(max-width: 672px) calc(100vw - 48px), (max-width: 1024px) 624px, (max-width: 1280px) 45vw, 512px"
            className="object-cover object-[center_40%] lg:object-center"
          />
          <figcaption className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-sage-cream/95 text-delta-stone text-xs font-medium lg:hidden">
            There&rsquo;s room for you.
          </figcaption>
        </figure>

        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="text-delta-stone/70 text-base lg:text-lg leading-relaxed max-w-lg mb-6 lg:mb-10">
            A new church in Sacramento. We&rsquo;re gathering, building friendships,
            and making room for you as we prepare to launch in January 2027.
          </p>

          {/* Divider */}
          <div className="hidden lg:block w-16 h-px bg-delta-stone/15 mb-10" />

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="https://sactabernacle.churchcenter.com/people/forms/1224240"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-delta-stone text-sage-cream text-sm font-semibold rounded-full hover:bg-sycamore transition-colors duration-200"
            >
              Join The Team
              <span className="text-base">→</span>
            </a>
            <a
              href="https://sactabernacle.churchcenter.com/people/forms/1272182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 px-3 lg:px-7 py-3.5 border border-delta-stone/20 text-delta-stone lg:border-transparent lg:bg-delta-stone lg:text-sage-cream text-sm font-semibold rounded-full hover:bg-delta-stone/5 lg:hover:bg-sycamore transition-colors duration-200"
            >
              Prayer Request
              <span className="hidden sm:inline text-base">→</span>
            </a>
            <a
              href="https://sactabernacle.churchcenter.com/giving/to/general-tithes-offerings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 px-3 lg:px-7 py-3.5 border border-delta-stone/20 text-delta-stone lg:border-transparent lg:bg-delta-stone lg:text-sage-cream text-sm font-semibold rounded-full hover:bg-delta-stone/5 lg:hover:bg-sycamore transition-colors duration-200"
            >
              Give
              <span className="hidden sm:inline text-base">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
