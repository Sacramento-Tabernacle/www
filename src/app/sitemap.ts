import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Omit lastModified until each page has a reliable content revision date.
// A rebuild is not necessarily a content update.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/statement-of-faith`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
