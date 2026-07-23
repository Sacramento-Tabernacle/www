import Image from "next/image";
import { socials } from "@/lib/socials";

export default function Footer() {
  return (
    <footer className="bg-sage-cream border-t border-delta-stone/8">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-6">
        <Image src="/logos/logo-black.png" alt="Sacramento Tabernacle" width={120} height={30} className="h-7 w-auto" />

        <nav aria-label="Sacramento Tabernacle on social media" className="flex items-center gap-2 order-last w-full justify-center sm:order-none sm:w-auto sm:justify-end">
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

        <p className="text-delta-stone/40 text-xs">© 2026 Sacramento Tabernacle. Becoming like Jesus.</p>
      </div>
    </footer>
  );
}
