import Link from "next/link";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles["not-found"]}>
      <span className={styles["not-found__watermark"]} aria-hidden="true">
        404
      </span>

      <section
        className={styles["not-found__panel"]}
        aria-labelledby="not-found-title"
      >
        <p className={styles["not-found__eyebrow"]}>
          <span aria-hidden="true">✳</span> Route not found
        </p>

        <p className={styles["not-found__code"]}>404 error</p>

        <h1 className={styles["not-found__title"]} id="not-found-title">
          We couldn’t find that page.
        </h1>

        <p className={styles["not-found__message"]}>
          The address may be incorrect, or the page may have moved. Choose
          somewhere below to get back on track.
        </p>

        <nav
          className={styles["not-found__actions"]}
          aria-label="Where to go next"
        >
          <Link className={styles["not-found__button-primary"]} href="/">
            Back to home
          </Link>
          <Link className={styles["not-found__button"]} href="/projects">
            Explore projects
          </Link>
          <Link className={styles["not-found__button"]} href="/contact">
            Contact Emmanuel
          </Link>
        </nav>

        <p className={styles["not-found__hint"]}>
          Check the URL for a typo, or use one of the links above.
        </p>
      </section>
    </main>
  );
}
