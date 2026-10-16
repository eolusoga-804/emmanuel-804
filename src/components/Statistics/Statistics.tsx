import { portfolioContent } from "@/content/portfolio";
import styles from "./Statistics.module.css";

export default function Statistics() {
  const statistics = portfolioContent.statistics;

  // Keep the page free of placeholder or invented figures.
  if (statistics.length === 0) return null;

  return (
    <section
      className={styles.statistics}
      id="statistics"
      data-section-spacing="standard"
      aria-labelledby="statistics-title"
    >
      <div className={styles["statistics__content"]}>
        <header
          className={styles["statistics__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["statistics__eyebrow"]}>At a glance</p>
          <h2 className={styles["statistics__title"]} id="statistics-title">
            By the numbers
          </h2>
        </header>

        <ul className={styles["statistics__grid"]}>
          {statistics.map((statistic) => (
            <li className={styles["statistics__card"]} key={statistic.label}>
              <strong className={styles["statistics__value"]}>
                {new Intl.NumberFormat("en").format(statistic.value)}
              </strong>
              <h3 className={styles["statistics__label"]}>{statistic.label}</h3>
              <p className={styles["statistics__context"]}>
                {statistic.context}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
