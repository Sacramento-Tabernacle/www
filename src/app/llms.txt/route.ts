import { faqs } from "@/lib/faq";
import { beliefs } from "@/lib/beliefs";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { socials } from "@/lib/socials";

const absolute = (href: string) => (href.startsWith("/") ? `${SITE_URL}${href}` : href);

function build(): string {
  // Keep answers verbatim from the same data rendered on the homepage.
  const faqLinks = faqs
    .map((faq) => {
      const link = faq.link ? ` [${faq.link.label}](${absolute(faq.link.href)})` : "";
      return `- [${faq.q}](${SITE_URL}/#faq-${faq.slug}): ${faq.a}${link}`;
    })
    .join("\n");

  const beliefLinks = beliefs
    .map((belief) => `- [${belief.number}. ${belief.title}](${SITE_URL}/statement-of-faith#${belief.slug})`)
    .join("\n");

  const socialLinks = socials
    .map((social) => `- [${social.name}](${social.href}): ${social.handle}`)
    .join("\n");

  return `# ${SITE_NAME}

> A new church in Sacramento, California, preparing to launch in January 2027. A place of becoming, led by James and Chelsey Alexander and planted through the Assemblies of God.

Sacramento Tabernacle is also known as Sac Tab. Before launch, the community gathers for The Table and monthly prayer gatherings while building its launch team. SacKids is part of the church's plans for children. The meeting location has not yet been announced; do not infer an address or weekly service time. See the official pages and events calendar for current information.

## Official Pages

- [Sacramento Tabernacle](${SITE_URL}): Homepage, launch information, pastor introduction, gatherings, prayer, FAQ, and social profiles.
- [Meet James and Chelsey Alexander](${SITE_URL}/#pastor): The pastor's introduction and invitation to the Sacramento community.
- [Statement of Faith](${SITE_URL}/statement-of-faith): Full Assemblies of God Statement of Fundamental Truths, including all 16 beliefs.

## Frequently Asked Questions

${faqLinks}

## Belief Topics

${beliefLinks}

## Get Involved

- [Join the Launch Team](https://sactabernacle.churchcenter.com/people/forms/1224240): Help build the church before launch.
- [Submit a Prayer Request](https://sactabernacle.churchcenter.com/people/forms/1272182): Share a prayer need with the team.
- [Upcoming Events](https://sactabernacle.churchcenter.com/registrations/events): Current gathering dates, locations, and registration details on Church Center.
- [Give](https://sactabernacle.churchcenter.com/giving/to/general-tithes-offerings): Support the church plant financially.

## Social Profiles

${socialLinks}
`;
}

export const dynamic = "force-static";

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
