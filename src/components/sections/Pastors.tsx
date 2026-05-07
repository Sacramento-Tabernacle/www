export default function Pastors() {
  return (
    <section className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] bg-ocean-mist/40 rounded-2xl overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-delta-stone/30 text-sm">Pastor photo</p>
          </div>
        </div>

        <div>
          <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-6">Our Pastors</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-delta-stone mb-6">
            John &amp; Jane Doe
          </h2>
          <div className="space-y-4 text-delta-stone/70 leading-relaxed">
            <p>
              <strong className="text-delta-stone">John</strong> and <strong className="text-delta-stone">Jane Doe</strong> are the founding pastors of Sacramento Tabernacle. After a decade of ministry across California, they felt a clear calling to plant a church in Sacramento.
            </p>
            <p>
              They are passionate about the local church, the formation of disciples, and the renewal of cities. Together with a growing launch team, John and Jane are praying for a community that becomes more like Jesus — one person at a time.
            </p>
          </div>
          <a
            href="#join-team"
            className="mt-8 inline-flex items-center px-7 py-3.5 border border-delta-stone/30 text-delta-stone text-sm font-semibold rounded-full hover:border-delta-stone transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
