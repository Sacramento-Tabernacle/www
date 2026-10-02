import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/socials";

const footerLinks = [
  { label: "Join the launch team", href: "https://sactabernacle.churchcenter.com/people/forms/1224240", external: true },
  { label: "Frequently Asked Questions", href: "/#faq", external: false },
  { label: "Statement of Faith", href: "/statement-of-faith", external: false },
  { label: "Upcoming Events", href: "https://sactabernacle.churchcenter.com/registrations/events", external: true },
  { label: "Request prayer", href: "https://sactabernacle.churchcenter.com/people/forms/1272182", external: true },
  { label: "Give Online", href: "https://sactabernacle.churchcenter.com/giving/to/general-tithes-offerings", external: true },
];
const linkClassName = "inline-flex min-h-[44px] items-center justify-center px-2 text-delta-stone/70 hover:text-sycamore transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="bg-sage-cream border-t border-delta-stone/8">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <nav
          aria-label="Sacramento Tabernacle site links"
          className="grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-x-8 gap-y-1 pb-8 text-sm"
        >
          {footerLinks.map((link) => link.external ? (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              {link.label}
            </a>
          ) : (
            <Link key={link.href} href={link.href} className={linkClassName}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="grid grid-cols-1 gap-6 border-t border-delta-stone/8 pt-8 text-center sm:grid-cols-3 sm:items-center">
          <div className="flex justify-center sm:justify-start">
            <Image src="/logos/logo-black.png" alt="Sacramento Tabernacle" width={120} height={30} className="h-7 w-auto" />
          </div>

          <nav aria-label="Sacramento Tabernacle on social media" className="flex items-center justify-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Sacramento Tabernacle on ${social.name}`}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full text-delta-stone/70 hover:text-sage-cream hover:bg-delta-stone transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </nav>

          <p className="text-delta-stone/60 text-xs sm:text-right">© 2026 Sacramento Tabernacle. Becoming like Jesus.</p>
        </div>
      </div>
    </footer>
  );
}
