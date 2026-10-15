import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import styles from "./page.module.css";

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
