import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles["home-page"]} id="home">
      <div className={styles["home-page__content"]}>
        <h1 className={styles["home-page__title"]}>Emmanuel#804 Portfolio</h1>
        <p className={styles["home-page__status"]}>
          Portfolio setup in progress.
        </p>
      </div>
    </main>
  );
}
