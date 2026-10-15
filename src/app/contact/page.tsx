import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

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
