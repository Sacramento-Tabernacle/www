import Image from "next/image";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sactabernacle/",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591153104635",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
];

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
