"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "When and where do you meet?",
    a: "We are launching our first public Sunday on June 1, 2026. Location details will be announced soon. Sign up below to be the first to know.",
  },
  {
    q: "What should I expect on a Sunday?",
    a: "Expect a warm, Spirit-led gathering centered on worship and the Word. We believe Sundays should be a place where people encounter God and are equipped to live for Him throughout the week.",
  },
  {
    q: "Do you have anything for kids?",
    a: "Yes! SacKids is our children's ministry for kids from birth through 5th grade. We believe kids are a vital part of the church family, and we're building a program designed to disciple the next generation.",
  },
  {
    q: "Where do you stand theologically?",
    a: "Sacramento Tabernacle is an evangelical, Spirit-filled church. We are Word-centered, believing Scripture is the inspired, authoritative guide for faith and life. We welcome the fullness of the Holy Spirit and believe in the power of prayer.",
  },
  {
    q: "How can I get involved before launch?",
    a: "Join our launch team! We're looking for people who will pray, serve, and gather with us before our first public Sunday. Fill out the interest form and we'll reach out to connect.",
  },
  {
    q: "How do I give?",
    a: "You can give online through our giving page. Your generosity directly supports the planting of Sacramento Tabernacle and the mission to see our city transformed by Jesus.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-delta-stone">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-sage-cream/40 text-sm tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-sage-cream mb-16">
            Frequently Asked
          </h2>

          <Accordion multiple={false} className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-sage-cream/10 last:border-b-0"
              >
                <AccordionTrigger className="text-sage-cream text-left py-6 hover:no-underline hover:text-golden-valley transition-colors font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sage-cream/60 leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
