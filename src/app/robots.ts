import type { MetadataRoute } from "next";
import { portfolioContent } from "@/content/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL(
      "/sitemap.xml",
      portfolioContent.seo.canonicalUrl,
    ).toString(),
  };
}
