import { portfolioContent } from "@/content/portfolio";
import { createPageMetadata } from "@/content/metadata";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  ...portfolioContent.seo.pages.projects,
  pathname: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <main className={styles["projects-page"]} aria-label="Project showcase">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
