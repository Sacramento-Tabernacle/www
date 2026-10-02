import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Pastors from "@/components/sections/Pastors";
import FAQ from "@/components/sections/FAQ";
import Events from "@/components/sections/Events";
import Prayer from "@/components/sections/Prayer";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/faq";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const faqJsonLd = {
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  name: "Sacramento Tabernacle — Frequently Asked Questions",
  inLanguage: "en-US",
  isPartOf: { "@id": `${SITE_URL}/#webpage` },
  about: { "@id": `${SITE_URL}/#church` },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    "@id": `${SITE_URL}/#faq-${faq.slug}`,
    url: `${SITE_URL}/#faq-${faq.slug}`,
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.link
        ? `${faq.a} <a href="${
            faq.link.href.startsWith("/") ? `${SITE_URL}${faq.link.href}` : faq.link.href
          }">${faq.link.label}</a>`
        : faq.a,
    },
  })),
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} — A New Church in Sacramento, Launching 2027`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#church` },
      publisher: { "@id": `${SITE_URL}/#church` },
      hasPart: { "@id": `${SITE_URL}/#faq` },
    },
    faqJsonLd,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Pastors />
        <Events />
        <Prayer />
        <FAQ />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
