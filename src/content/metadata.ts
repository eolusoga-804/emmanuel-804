import type { Metadata } from "next";
import { portfolioContent } from "@/content/portfolio";

type PageMetadataOptions = {
  title?: string;
  description?: string;
  pathname?: string;
};

export function createPageMetadata(
  options: PageMetadataOptions = {},
): Metadata {
  const { identity, seo } = portfolioContent;
  const title = options.title ?? seo.title;
  const description = options.description ?? seo.description;
  const pathname = options.pathname ?? "/";
  const canonicalUrl = new URL(pathname, seo.canonicalUrl).toString();

  return {
    metadataBase: new URL(seo.canonicalUrl),
    applicationName: identity.displayName,
    title,
    description,
    authors: [{ name: identity.fullName }],
    creator: identity.fullName,
    publisher: identity.displayName,
    alternates: {
      canonical: canonicalUrl,
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
    openGraph: {
      type: "website",
      locale: seo.openGraphLocale,
      url: canonicalUrl,
      siteName: identity.displayName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      creator: seo.twitterCreator,
      title,
      description,
    },
  };
}
