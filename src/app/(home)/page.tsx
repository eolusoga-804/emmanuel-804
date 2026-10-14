import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["home-page"]} id="home">
      <Hero />
      <About />
    </main>
  );
}
