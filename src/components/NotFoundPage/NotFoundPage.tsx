import Link from "next/link";
import styles from "./NotFoundPage.module.css";
import { portfolioContent } from "@/content/portfolio";

export default function NotFoundPage() {
  return (
    <main className={styles["not-found"]}>
      <span className={styles["not-found__watermark"]} aria-hidden="true">
        {portfolioContent.notFoundPage.watermark}
      </span>

      <section
        className={styles["not-found__panel"]}
        aria-labelledby="not-found-title"
      >
        <p className={styles["not-found__eyebrow"]}>
          <span aria-hidden="true">✳</span>{" "}
          {portfolioContent.notFoundPage.eyebrow}
        </p>

        <p className={styles["not-found__code"]}>
          {portfolioContent.notFoundPage.codeLabel}
        </p>

        <h1 className={styles["not-found__title"]} id="not-found-title">
          {portfolioContent.notFoundPage.title}
        </h1>

        <p className={styles["not-found__message"]}>
          {portfolioContent.notFoundPage.message}
        </p>

        <nav
          className={styles["not-found__actions"]}
          aria-label={portfolioContent.notFoundPage.navigationLabel}
        >
          <Link
            className={styles["not-found__button-primary"]}
            href={portfolioContent.notFoundPage.homeHref}
          >
            {portfolioContent.notFoundPage.homeLabel}
          </Link>
          <Link
            className={styles["not-found__button"]}
            href={portfolioContent.notFoundPage.projectsHref}
          >
            {portfolioContent.notFoundPage.projectsLabel}
          </Link>
          <Link
            className={styles["not-found__button"]}
            href={portfolioContent.notFoundPage.contactHref}
          >
            {portfolioContent.notFoundPage.contactLabel}
          </Link>
        </nav>

        <p className={styles["not-found__hint"]}>
          {portfolioContent.notFoundPage.hint}
        </p>
      </section>
    </main>
  );
}
