"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const values = [
  {
    id: "pursue-god",
    title: "Pursue God",
    tagline: "The hunger that starts the journey.",
    summary: "We pursue God by seeking His presence and aligning our lives with His truth.",
    items: [
      { label: "Read His Word", description: "We grow through disciplined engagement with Scripture.", scripture: "2 Timothy 3:16–17" },
      { label: "Pray Continually", description: "We cultivate a life of prayer and communication with God.", scripture: "1 Thessalonians 5:17" },
      { label: "Worship Fully", description: "We honor God with wholehearted worship and devotion.", scripture: "Psalm 95:6" },
    ],
  },
  {
    id: "love-like-jesus",
    title: "Love Like Jesus",
    tagline: "The posture that shapes the journey.",
    summary: "We love others the way Jesus loved — with compassion, empathy, and the good news of the gospel.",
    items: [
      { label: "Share the Gospel", description: "We love people by pointing them to the hope found in Jesus.", scripture: "Matthew 28:19" },
      { label: "Practice Empathy", description: "Like Jesus with Mary and Martha, we enter into the pain and struggles of others with compassion.", scripture: "John 11:35" },
      { label: "See People Rightly", description: "We love the way Jesus loved — seeing people not for who they are but for who they are becoming.", scripture: "John 4:1–26" },
    ],
  },
  {
    id: "sacrifice-for-purpose",
    title: "Sacrifice for Purpose",
    tagline: "The cost that completes the journey.",
    summary: "God placed specific purpose inside every person — and unlocking it always costs something. We sacrifice comfort, convenience, and self-reliance to step fully into who God created us to become.",
    items: [
      { label: "Surrender to Become", description: "We cannot become who God created us to be while holding onto who we used to be.", scripture: "John 12:24–25" },
      { label: "Use Your Gifts", description: "We serve with the abilities God has uniquely placed in us.", scripture: "1 Peter 4:10" },
      { label: "Run Your Race", description: "We pursue the specific assignment God has written for our lives with endurance and focus.", scripture: "Hebrews 12:1" },
    ],
  },
];

export default function CoreValues() {
  return (
    <section className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-4">Our Core Values</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-delta-stone mb-4 max-w-lg leading-tight">
          Discipleship Pathway
        </h2>
        <p className="text-delta-stone/60 text-lg mb-16 max-w-xl">
          Sacramento Tabernacle is a place of becoming where people pursue God, love like Jesus, and sacrifice for purpose.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-16">
          {["Pursue God", "Love Like Jesus", "Sacrifice for Purpose"].map((v, i) => (
            <div key={v} className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-delta-stone/15 rounded-full px-4 py-1.5">
                <span className="text-golden-valley/60 text-xs font-mono">0{i + 1}</span>
                <span className="text-delta-stone/60 text-xs tracking-widest uppercase">{v}</span>
              </div>
              {i < 2 && <span className="text-delta-stone/20 text-sm">→</span>}
            </div>
          ))}
        </div>

        <Accordion multiple={false} className="space-y-2">
          {values.map((value) => (
            <AccordionItem
              key={value.id}
              value={value.id}
              className="border border-delta-stone/10 rounded-xl px-6 bg-delta-stone/[5%] data-[state=open]:bg-delta-stone/5"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div>
                  <div className="text-delta-stone font-heading font-bold text-xl">{value.title}</div>
                  <div className="text-delta-stone/50 text-sm font-normal mt-0.5">{value.tagline}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-delta-stone/70 mb-6 leading-relaxed">{value.summary}</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {value.items.map((item) => (
                    <div key={item.label} className="bg-sage-cream border border-delta-stone/10 rounded-lg p-4">
                      <h4 className="font-semibold text-delta-stone mb-1">{item.label}</h4>
                      <p className="text-delta-stone/60 text-sm leading-relaxed mb-2">{item.description}</p>
                      <p className="text-accent text-xs font-medium">{item.scripture}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
