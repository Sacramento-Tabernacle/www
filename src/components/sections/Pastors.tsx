import Image from "next/image";

export default function Pastors() {
  return (
    <section id="pastor" className="relative bg-sage-cream overflow-hidden">
      {/* Ambient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-ocean-mist/20 rounded-full blur-[130px] -translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Scripture + photo */}
        <div className="md:sticky md:top-28">
          <div className="rounded-2xl p-8 border border-ocean-mist/30 bg-ocean-mist/5">
            <div className="text-ocean-mist/50 text-5xl font-heading leading-none mb-1 -ml-0.5">&ldquo;</div>
            <blockquote className="text-delta-stone text-lg leading-relaxed font-heading italic -mt-3">
              But to all who received him, who believed in his name, he gave power to become children of God.
            </blockquote>
            <p className="text-delta-stone/50 text-sm font-medium mt-4">&mdash; John 1:12</p>
          </div>

          <div className="mt-8 aspect-[3/2] relative rounded-2xl overflow-hidden">
            <Image
              src="/alexanders.jpeg"
              alt="Pastor James Alexander with his wife Chelsey and their family"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Narrative */}
        <div>
          <p className="text-delta-stone/60 text-sm tracking-widest uppercase mb-6">Meet Your Pastor</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-delta-stone mb-8 leading-[1.05]">
            James &amp; Chelsey{" "}
            <em className="text-sycamore" style={{ fontStyle: "italic" }}>
              Alexander
            </em>
          </h2>

          <div className="space-y-5 text-delta-stone/70 text-lg leading-relaxed">
            <p>
              My wife Chelsey and I met while in college, and shortly thereafter got married. We have spent the last ten years doing life and ministry together across multiple states, different cities, and different communities. That journey has shaped us and prepared us for church planting. Sacramento is our home. This is our city. And we have a deep burden to build something for God that will genuinely serve the people here.
            </p>
            <p>
              Sacramento Tabernacle is the church we felt called to build, as we believe Sacramento is full of people who are on a journey. People in the middle of something, people searching, people starting over, people ready to go deeper. That is exactly who this place is for. We call it{" "}
              <span className="text-delta-stone font-medium">a place of becoming</span>.
            </p>
            <p>
              Chelsey and I, along with our four kids, want to invite you. We are not just building a church. We are building a Tabernacle where God can dwell among His people. We are building a home for people who are ready to step into everything God has for them &mdash; and we want you here!
            </p>
          </div>

          <p className="mt-10 font-heading text-2xl text-delta-stone">Pastor James Alexander</p>
        </div>
      </div>
    </section>
  );
}
