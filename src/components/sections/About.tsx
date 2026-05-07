export default function About() {
  return (
    <section id="about" className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-delta-stone/70 text-sm tracking-widest uppercase mb-6">Who We Are</p>
          <p className="text-delta-stone text-xl md:text-2xl leading-relaxed font-light max-w-xl">
            The mission of Sacramento Tabernacle is to be a place of becoming for all who long to know and serve the Lord. Becoming takes place as we pursue God, love like Jesus, and sacrifice for purpose.
          </p>
        </div>

        <div className="rounded-2xl p-10 border border-ocean-mist/30 bg-ocean-mist/5">
          <p className="text-delta-stone/50 text-xs tracking-[0.2em] uppercase mb-6">Anchor Scripture</p>
          <div className="text-ocean-mist/40 text-6xl font-heading leading-none mb-2 -ml-1">"</div>
          <blockquote className="text-delta-stone text-lg leading-relaxed font-heading italic mb-4 -mt-4">
            Yet to all who did receive Him, to those who believed in His name, He gave the right to become children of God.
          </blockquote>
          <p className="text-delta-stone/50 text-sm font-medium">— John 1:12</p>

          <div className="mt-10">
            <h2 className="text-delta-stone text-2xl font-heading font-bold mb-4">Tell us you're interested.</h2>
            <a
              href="#join-team"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              I'm Interested
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
