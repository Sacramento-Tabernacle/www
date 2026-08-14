import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { beliefs, preamble, closingNote } from "@/lib/beliefs";
import { SITE_URL } from "@/lib/site";

const PAGE_PATH = "/statement-of-faith";
const TITLE = "Statement of Faith";
const DESCRIPTION =
  "What Sacramento Tabernacle believes. Our full Statement of Faith — the Assemblies of God Statement of Fundamental Truths, the 16 doctrines that ground our church in Sacramento, California.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Sacramento Tabernacle statement of faith",
    "what we believe",
    "Assemblies of God beliefs",
    "Statement of Fundamental Truths",
    "Pentecostal church Sacramento",
    "Spirit-filled church Sacramento",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Sacramento Tabernacle",
    title: `${TITLE} | Sacramento Tabernacle`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Sacramento Tabernacle`,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_PATH}`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: `${TITLE} — Sacramento Tabernacle`,
      description: DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@type": "WebSite", "@id": SITE_URL, name: "Sacramento Tabernacle", url: SITE_URL },
      about: {
        "@type": "Church",
        name: "Sacramento Tabernacle",
        url: SITE_URL,
        memberOf: { "@type": "Organization", name: "The General Council of the Assemblies of God" },
      },
      significantLink: beliefs.map((b) => `${SITE_URL}${PAGE_PATH}#${b.slug}`),
      hasPart: beliefs.map((b) => ({
        "@type": "WebPageElement",
        name: `${b.number}. ${b.title}`,
        url: `${SITE_URL}${PAGE_PATH}#${b.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: TITLE, item: `${SITE_URL}${PAGE_PATH}` },
      ],
    },
  ],
};

export default function StatementOfFaithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative bg-sage-cream overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-ocean-mist/20 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-golden-valley/20 rounded-full blur-[130px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-20">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-delta-stone/50">
                <li>
                  <Link href="/" className="hover:text-sycamore transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-delta-stone/70">Statement of Faith</li>
              </ol>
            </nav>

            <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-6">
              What We Believe
            </p>
            <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-heading font-bold leading-[0.95] text-delta-stone mb-8 max-w-3xl">
              Statement of{" "}
              <em className="text-sycamore" style={{ fontStyle: "italic" }}>
                Faith
              </em>
            </h1>

            <div className="max-w-2xl space-y-5 text-delta-stone/70 text-lg leading-relaxed">
              <p>
                Sacramento Tabernacle is a new church in Sacramento, California, planted through the{" "}
                <span className="text-delta-stone font-medium">Assemblies of God</span>. We hold to
                the historic Christian faith, and we believe what the Church has always believed:
                that everyone who receives Jesus is given the right to become a child of God.
              </p>
              <p>
                What follows is the Assemblies of God Statement of Fundamental Truths &mdash; the 16
                doctrines that ground everything we teach, sing, and build here.
              </p>
            </div>

            <div className="mt-10 max-w-2xl rounded-2xl border border-ocean-mist/30 bg-ocean-mist/5 p-8">
              <p className="text-delta-stone/70 leading-relaxed">{preamble}</p>
            </div>
          </div>
        </section>

        {/* Doctrines */}
        <section className="bg-sage-cream">
          <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-32 grid md:grid-cols-[minmax(0,15rem)_1fr] gap-12 md:gap-16 items-start">
            {/* Table of contents */}
            <nav
              aria-label="The 16 fundamental truths"
              className="hidden md:block md:sticky md:top-28"
            >
              <p className="text-delta-stone/50 text-xs tracking-widest uppercase mb-5">
                The 16 Truths
              </p>
              <ol className="space-y-2.5">
                {beliefs.map((belief) => (
                  <li key={belief.slug} className="flex gap-3 text-sm leading-snug">
                    <span className="text-delta-stone/30 tabular-nums w-4 flex-none text-right">
                      {belief.number}
                    </span>
                    <a
                      href={`#${belief.slug}`}
                      className="text-delta-stone/60 hover:text-sycamore transition-colors duration-200"
                    >
                      {belief.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Content */}
            <div className="max-w-3xl">
              {beliefs.map((belief) => (
                <article
                  key={belief.slug}
                  id={belief.slug}
                  className="scroll-mt-24 border-t border-delta-stone/10 pt-10 pb-12 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-heading text-2xl text-delta-stone/25 tabular-nums leading-none">
                      {String(belief.number).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-delta-stone leading-tight">
                      {belief.title}
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {belief.blocks.map((block, i) => (
                      <div key={i} className="space-y-4">
                        {block.heading && (
                          <h3 className="text-delta-stone font-semibold tracking-wide">
                            {block.heading}
                          </h3>
                        )}
                        {block.paragraphs?.map((paragraph, j) => (
                          <p key={j} className="text-delta-stone/70 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                        {block.items && (
                          <ul className="space-y-2.5 pl-1">
                            {block.items.map((item, j) => (
                              <li
                                key={j}
                                className="relative pl-6 text-delta-stone/70 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:w-2 before:h-px before:bg-sycamore/50"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}

              <p className="border-t border-delta-stone/10 pt-10 text-delta-stone/50 text-sm leading-relaxed italic">
                {closingNote}
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-sage-cream">
          <div className="max-w-7xl mx-auto px-6 pb-28 md:pb-32">
            <div className="relative overflow-hidden rounded-3xl border border-delta-stone/10 bg-sycamore px-8 py-16 md:px-16 md:py-20 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-1/4 right-0 w-[400px] h-[400px] bg-golden-valley/20 rounded-full blur-[110px]" />
                <div className="absolute -bottom-1/3 left-0 w-[400px] h-[400px] bg-ocean-mist/20 rounded-full blur-[110px]" />
              </div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-sage-cream mb-6 leading-[1.05]">
                  Still have questions?
                </h2>
                <p className="text-sage-cream/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  We&rsquo;re not building this for people who already have it figured out. Bring
                  your questions &mdash; the curious, the skeptical, and the burned out all belong
                  here.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/#faq"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-cream text-delta-stone text-sm font-semibold rounded-full hover:bg-golden-valley transition-colors duration-200"
                  >
                    Read the FAQ
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <a
                    href="https://sactabernacle.churchcenter.com/people/forms/1224240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-sage-cream/30 text-sage-cream text-sm font-semibold rounded-full hover:bg-sage-cream/10 transition-colors duration-200"
                  >
                    Join The Team
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
