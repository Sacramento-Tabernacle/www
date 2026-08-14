import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/socials";

export default function Footer() {
  return (
    <footer className="bg-sage-cream border-t border-delta-stone/8">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <nav
          aria-label="Sacramento Tabernacle site links"
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pb-8 text-sm"
        >
          <Link
            href="/#faq"
            className="text-delta-stone/60 hover:text-sycamore transition-colors duration-200"
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="/statement-of-faith"
            className="text-delta-stone/60 hover:text-sycamore transition-colors duration-200"
          >
            Statement of Faith
          </Link>
          <a
            href="https://sactabernacle.churchcenter.com/registrations/events"
            target="_blank"
            rel="noopener noreferrer"
            className="text-delta-stone/60 hover:text-sycamore transition-colors duration-200"
          >
            Upcoming Events
          </a>
          <a
            href="https://sactabernacle.churchcenter.com/giving/to/general-tithes-offerings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-delta-stone/60 hover:text-sycamore transition-colors duration-200"
          >
            Give Online
          </a>
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
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-delta-stone/60 hover:text-sage-cream hover:bg-delta-stone transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </nav>

          <p className="text-delta-stone/40 text-xs sm:text-right">© 2026 Sacramento Tabernacle. Becoming like Jesus.</p>
        </div>
      </div>
    </footer>
  );
}
