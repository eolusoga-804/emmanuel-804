import type { MetadataRoute } from "next";
import { portfolioContent } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const { canonicalUrl } = portfolioContent.seo;

  return [
    {
      url: new URL("/", canonicalUrl).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/projects", canonicalUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/contact", canonicalUrl).toString(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
