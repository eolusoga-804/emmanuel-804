import { portfolioContent } from "@/content/portfolio";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles["loading-screen"]}>
      <section
        className={styles["loading-screen__card"]}
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <span className={styles["loading-screen__brand"]}>
          {portfolioContent.identity.displayName}
        </span>

        <div className={styles["loading-screen__spinner"]} aria-hidden="true">
          <span className={styles["loading-screen__ring"]} />
          <span className={styles["loading-screen__center"]} />
        </div>

        <p className={styles["loading-screen__eyebrow"]}>
          {portfolioContent.loadingScreen.eyebrow}
        </p>
        <h1 className={styles["loading-screen__title"]}>
          {portfolioContent.loadingScreen.title}
        </h1>
        <p className={styles["loading-screen__message"]}>
          {portfolioContent.loadingScreen.message}
        </p>

        <div className={styles["loading-screen__activity"]} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>
    </main>
  );
}
