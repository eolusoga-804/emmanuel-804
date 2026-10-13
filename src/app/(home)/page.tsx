import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["home-page"]} id="home">
      <Hero />
    </main>
  );
}
