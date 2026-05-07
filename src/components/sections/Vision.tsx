export default function Vision() {
  const brandArchitecture = [
    {
      label: "A Place of Becoming",
      description: "Step into who God made you to be.",
    },
    {
      label: "John 1:12",
      description: "God gives you the right to become.",
    },
    {
      label: "You Are Uniquely Made",
      description: "No one else carries your fingerprint.",
    },
  ];

  return (
    <section className="bg-sycamore">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <p className="text-sage-cream/50 text-sm tracking-widest uppercase mb-8">Our Vision</p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-heading font-bold text-sage-cream leading-tight max-w-3xl">
          A place of{" "}
          <em className="text-golden-valley" style={{ fontStyle: "italic" }}>
            becoming
          </em>
          .
        </h2>

        <div className="mt-16 pt-16 border-t border-sage-cream/10">
          <p className="text-sage-cream/60 text-sm tracking-widest uppercase mb-4">Mission</p>
          <p className="text-sage-cream/80 text-lg leading-relaxed max-w-2xl">
            The mission of Sacramento Tabernacle is to be a place of becoming for all who long to know and serve the Lord. Becoming takes place as we pursue God, love like Jesus, and sacrifice for purpose.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-0 border-t border-sage-cream/10">
          {brandArchitecture.map((item, i) => (
            <div
              key={item.label}
              className={`pt-8 pb-4 ${i < brandArchitecture.length - 1 ? "sm:border-r border-sage-cream/10 sm:pr-10 sm:mr-10" : ""}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-river-sage/60" />
                <h4 className="text-river-sage text-xs tracking-widest uppercase font-sans">{item.label}</h4>
              </div>
              <p className="text-sage-cream/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
