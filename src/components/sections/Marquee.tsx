const items = [
  "A Place of Becoming",
  "Becoming Like Jesus",
  "Pursue God",
  "Love Like Jesus",
  "Sacrifice for Purpose",
  "Welcome",
  "Sacramento Tabernacle",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <section className="bg-sycamore overflow-hidden py-5 border-t border-b border-sage-cream/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 mx-8 text-sage-cream/70 text-xs tracking-[0.2em] uppercase font-sans">
            {item}
            <span className="text-river-sage/60 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
