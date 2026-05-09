import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://sactabernacle.com";
const SITE_NAME = "Sacramento Tabernacle";
const TITLE = "Sacramento Tabernacle — A New Church in Sacramento, Launching 2027";
const DESCRIPTION =
  "Sacramento Tabernacle is a new church plant in Sacramento, California, launching January 2027. A place of becoming — join the launch team.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Sacramento Tabernacle",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Sacramento Tabernacle",
    "church in Sacramento",
    "new church Sacramento",
    "Sacramento church plant",
    "churches in Sacramento California",
    "Sacramento churches 2027",
    "place of becoming",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "religion",
};

const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: SITE_NAME,
  alternateName: ["Sac Tab", "Sacramento Tab"],
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-black.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: DESCRIPTION,
  slogan: "A place of becoming",
  foundingDate: "2027-01",
  areaServed: {
    "@type": "City",
    name: "Sacramento",
    containedInPlace: {
      "@type": "State",
      name: "California",
    },
  },
  // TODO: add `address` (PostalAddress) and `geo` once a meeting location is confirmed.
  // TODO: add `sameAs` URLs once social profiles exist (Instagram, Facebook, YouTube, etc).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
