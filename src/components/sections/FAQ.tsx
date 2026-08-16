import Link from "next/link";
import { faqs } from "@/lib/faq";

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-sage-cream overflow-hidden scroll-mt-16">
      {/* Ambient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="wash absolute bottom-0 right-0 w-[940px] h-[940px] bg-ocean-mist/20 translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pb-28 md:pb-32 grid md:grid-cols-[1fr_1.25fr] gap-12 md:gap-16 items-start">
        {/* Intro */}
        <div className="md:sticky md:top-28">
          <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-6">Questions</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-delta-stone mb-6 leading-[1.05]">
            Frequently{" "}
            <em className="text-sycamore" style={{ fontStyle: "italic" }}>
              asked
            </em>
          </h2>
          <p className="text-delta-stone/70 text-lg leading-relaxed">
            Everything people ask us about Sacramento Tabernacle &mdash; when we launch, where
            we&rsquo;ll meet, what we believe, and how to be part of a new church in Sacramento
            before the doors open.
          </p>

          <Link
            href="/statement-of-faith"
            className="inline-flex items-center gap-2 mt-8 text-delta-stone font-semibold border-b border-delta-stone/25 pb-0.5 hover:text-sycamore hover:border-sycamore transition-colors duration-200"
          >
            Read our Statement of Faith
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Questions */}
        <div className="border-t border-delta-stone/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-delta-stone/10">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-delta-stone text-lg font-semibold leading-snug group-hover:text-sycamore transition-colors duration-200">
                  {faq.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 flex-none text-delta-stone/40 text-xl leading-none transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="pb-7 -mt-1 pr-10">
                <p className="text-delta-stone/70 leading-relaxed">{faq.a}</p>
                {faq.link &&
                  (faq.link.external ? (
                    <a
                      href={faq.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm text-sycamore font-semibold border-b border-sycamore/30 pb-0.5 hover:border-sycamore transition-colors duration-200"
                    >
                      {faq.link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : (
                    <Link
                      href={faq.link.href}
                      className="inline-flex items-center gap-1.5 mt-4 text-sm text-sycamore font-semibold border-b border-sycamore/30 pb-0.5 hover:border-sycamore transition-colors duration-200"
                    >
                      {faq.link.label}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
