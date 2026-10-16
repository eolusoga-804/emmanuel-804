import Script from "next/script";
import { portfolioContent } from "@/content/portfolio";
import { createPageMetadata } from "@/content/metadata";
import { Inter, Poppins } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects/BackgroundEffects";
import FloatingControls from "@/components/FloatingControls/FloatingControls";
import SiteNavigation from "@/components/SiteNavigation/SiteNavigation";

import "aos/dist/aos.css";
import AOSProvider from "@/components/AOSProvider/AOSProvider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = createPageMetadata();

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioContent.identity.fullName,
  url: portfolioContent.seo.canonicalUrl,
  jobTitle: portfolioContent.identity.primaryTitle,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: portfolioContent.contact.links.flatMap((link) =>
    link.href ? [link.href] : [],
  ),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            const savedTheme = localStorage.getItem("${portfolioContent.floatingControls.themeStorageKey}");
            if (savedTheme === "light" || savedTheme === "dark") {
              document.documentElement.dataset.theme = savedTheme;
            }
          } catch {
            // Keep the default light theme when storage is unavailable.
          }`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LoadingScreen />
        <AOSProvider />
        <div className="site-shell">
          <BackgroundEffects />
          <div className="site-shell__content">
            <SiteNavigation />
            {children}
          </div>
          <FloatingControls />
        </div>
      </body>
    </html>
  );
}
