const steps = [
  {
    number: "01",
    label: "Pray",
    description: "Cover the church and city in prayer before we ever open our doors.",
  },
  {
    number: "02",
    label: "Serve",
    description: "Use your gifts to build something from the ground up.",
  },
  {
    number: "03",
    label: "Gather",
    description: "Join us for pre-launch gatherings as we build community together.",
  },
];

export default function JoinTeam() {
  return (
    <section id="join-team" className="bg-delta-stone">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-start">
        <div className="md:sticky md:top-32">
          <p className="text-sage-cream/40 text-xs tracking-[0.2em] uppercase mb-6">Join the Team</p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold text-sage-cream leading-tight mb-6">
            Help us plant<br />a church.
          </h2>
          <p className="text-sage-cream/60 text-lg leading-relaxed mb-10 max-w-md">
            We're gathering a launch team of people who'll pray, serve, and gather with us before our first public Sunday. If God is stirring something in you, we'd love to hear from you.
          </p>
          <a
            href="https://people.planningcenteronline.com/forms/YOUR_FORM_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:bg-accent/90 transition-colors"
          >
            Join The Team
            <span className="text-base">→</span>
          </a>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`py-8 ${i < steps.length - 1 ? "border-b border-sage-cream/10" : ""}`}
            >
              <span className="text-river-sage/50 text-xs font-mono tracking-widest mb-3 block">{step.number}</span>
              <h3 className="text-sage-cream font-heading font-bold text-2xl mb-2">{step.label}</h3>
              <p className="text-sage-cream/50 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
