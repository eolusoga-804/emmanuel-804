import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import NotFoundPage from "@/components/NotFoundPage/NotFoundPage";
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

export const metadata: Metadata = {
  title: "Page Not Found | Emmanuel#804",
  description: "The page you requested could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}
