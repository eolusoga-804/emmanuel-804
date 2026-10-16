import { portfolioContent } from "@/content/portfolio";
import styles from "./CareerJourney.module.css";

export default function CareerJourney() {
  return (
    <section
      className={styles["career-journey"]}
      id="career-journey"
      data-section-spacing="standard"
      aria-labelledby="career-journey-title"
    >
      <div className={styles["career-journey__content"]}>
        <header
          className={styles["career-journey__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["career-journey__eyebrow"]}>Education & work</p>
          <h2
            className={styles["career-journey__title"]}
            id="career-journey-title"
          >
            Career Journey
          </h2>
          <p className={styles["career-journey__intro"]}>
            Education and professional experience from the supplied portfolio
            history.
          </p>
        </header>

        <ol className={styles["career-journey__timeline"]}>
          {portfolioContent.careerTimeline.map((entry, index) => (
            <li
              className={styles["career-journey__entry"]}
              key={`${entry.period}-${entry.title}`}
            >
              <article className={styles["career-journey__card"]}>
                <p className={styles["career-journey__period"]}>
                  {entry.period}
                </p>
                <h3 className={styles["career-journey__entry-title"]}>
                  {entry.title}
                </h3>
                <p className={styles["career-journey__organization"]}>
                  {entry.organization}
                </p>
                <p className={styles["career-journey__description"]}>
                  {entry.description}
                </p>
              </article>

              <span
                className={styles["career-journey__marker"]}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
