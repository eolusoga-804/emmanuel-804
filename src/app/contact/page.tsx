import { portfolioContent } from "@/content/portfolio";
import { createPageMetadata } from "@/content/metadata";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  ...portfolioContent.seo.pages.contact,
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <main className={styles["contact-page"]}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
