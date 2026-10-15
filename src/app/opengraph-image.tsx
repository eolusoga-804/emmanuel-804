import { ImageResponse } from "next/og";
import SocialPreviewImage from "@/components/SocialPreviewImage/SocialPreviewImage";
import { portfolioContent } from "@/content/portfolio";

export const alt = `${portfolioContent.identity.displayName} — ${portfolioContent.identity.primaryTitle} portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialPreviewImage />, size);
}
