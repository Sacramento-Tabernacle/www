import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sactabernacle.com/sitemap.xml",
    host: "https://sactabernacle.com",
  };
}
