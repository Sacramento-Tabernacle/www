import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Pastors from "@/components/sections/Pastors";
import FAQ from "@/components/sections/FAQ";
import Events from "@/components/sections/Events";
import Connect from "@/components/sections/Connect";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/faq";
import { SITE_URL } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  name: "Sacramento Tabernacle — Frequently Asked Questions",
  inLanguage: "en-US",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Pastors />
        <Events />
        <FAQ />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
