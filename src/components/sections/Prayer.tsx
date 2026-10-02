import Image from "next/image";

export default function Prayer() {
  return (
    <section id="prayer" className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src="/photos/prayer-gathering.webp"
            alt="A quiet moment of prayer at a Sacramento Tabernacle gathering"
            fill
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) 50vw, 584px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-6">Prayer Request</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-delta-stone mb-6 leading-[1.05]">
            Let&rsquo;s pray{" "}
            <em className="text-sycamore" style={{ fontStyle: "italic" }}>
              together
            </em>
            .
          </h2>
          <p className="text-delta-stone/70 text-lg leading-relaxed max-w-lg mb-10">
            Whatever you&rsquo;re walking through, you don&rsquo;t have to carry it
            alone. Share a prayer request with us. We&rsquo;d love to pray with you.
          </p>
          <a
            href="https://sactabernacle.churchcenter.com/people/forms/1272182"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-delta-stone text-sage-cream text-sm font-semibold rounded-full hover:bg-sycamore transition-colors duration-200"
          >
            Request Prayer
            <span className="text-base" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
