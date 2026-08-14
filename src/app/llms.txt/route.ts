import { faqs } from "@/lib/faq";
import { beliefs } from "@/lib/beliefs";

const SITE_URL = "https://sactabernacle.com";

const absolute = (href: string) => (href.startsWith("/") ? `${SITE_URL}${href}` : href);

function build(): string {
  const faqSection = faqs
    .map((faq) => {
      const link = faq.link ? ` [${faq.link.label}](${absolute(faq.link.href)})` : "";
      return `### ${faq.q}\n\n${faq.a}${link}`;
    })
    .join("\n\n");

  const beliefsList = beliefs
    .map((belief) => `${belief.number}. ${belief.title} — ${SITE_URL}/statement-of-faith#${belief.slug}`)
    .join("\n");

  return `# Sacramento Tabernacle

> Sacramento Tabernacle is a new church plant in Sacramento, California, launching January 2027. Our vision is "a place of becoming" — a community for people who are on a journey: searching, starting over, or ready to go deeper in their faith. Led by Pastors James and Chelsey Alexander. We are planted through the Assemblies of God.

Sacramento Tabernacle ("Sac Tab") is a pre-launch church in Sacramento, CA. Long before the January 2027 launch, we are gathering, praying, and building a launch team together. If you are looking for a new church in Sacramento, this is a place for people who are in the middle of something — becoming who God made them to be.

## About

- Name: Sacramento Tabernacle (also known as Sac Tab / Sacramento Tab)
- Location: Sacramento, California
- Launch date: January 2027
- Vision: "A place of becoming" — building a Tabernacle where God can dwell among His people
- Pastors: James and Chelsey Alexander, church planters and Sacramento residents
- Denomination: Assemblies of God (Pentecostal, Spirit-filled, evangelical)
- Children's ministry: SacKids

## Frequently Asked Questions

${faqSection}

## What We Believe

Sacramento Tabernacle holds to the historic Christian faith and adheres to the Assemblies of God Statement of Fundamental Truths — 16 doctrines that are non-negotiable beliefs for all Assemblies of God churches. The full text is published at ${SITE_URL}/statement-of-faith.

${beliefsList}

## Get Involved

- [Join the Launch Team](https://sactabernacle.churchcenter.com/people/forms/1224240): Volunteer and help build the church before launch.
- [Give](https://sactabernacle.churchcenter.com/giving/to/general-tithes-offerings): Support the church plant financially.
- [Submit a Prayer Request](https://sactabernacle.churchcenter.com/people/forms/1272182): Share a prayer need with our team.
- [Upcoming Events](https://sactabernacle.churchcenter.com/registrations/events): Gatherings, prayer nights, and launch-team meetups.

## Connect

- Website: ${SITE_URL}
- Statement of Faith: ${SITE_URL}/statement-of-faith
- Instagram: https://www.instagram.com/sactabernacle/
- Facebook: https://www.facebook.com/profile.php?id=61591153104635
`;
}

export const dynamic = "force-static";

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
