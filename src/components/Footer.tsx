import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-sage-cream">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-between items-center gap-4">
        <Image src="/logos/logo-black.png" alt="Sacramento Tabernacle" width={120} height={30} className="h-7 w-auto" />
        <p className="text-delta-stone/40 text-xs">© 2026 Sacramento Tabernacle. Becoming like Jesus.</p>
      </div>
    </footer>
  );
}
