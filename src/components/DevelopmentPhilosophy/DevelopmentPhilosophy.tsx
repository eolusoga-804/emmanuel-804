import { portfolioContent } from "@/content/portfolio";
import styles from "./DevelopmentPhilosophy.module.css";

export default function DevelopmentPhilosophy() {
  return (
    <section
      className={styles.philosophy}
      id="development-philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className={styles["philosophy__layout"]}>
        <header
          className={styles["philosophy__panel"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["philosophy__eyebrow"]}>How I work</p>
          <h2 className={styles["philosophy__title"]} id="philosophy-title">
            Development Philosophy
          </h2>
          <p className={styles["philosophy__intro"]}>
            Purpose, clarity, accessibility, maintainability, and quality guide
            my approach to digital work.
          </p>
        </header>

        <ol className={styles["philosophy__list"]}>
          {portfolioContent.philosophy.map((principle, index) => (
            <li className={styles["philosophy__item"]} key={principle.title}>
              <span className={styles["philosophy__number"]} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className={styles["philosophy__item-title"]}>
                  {principle.title}
                </h3>
                <p className={styles["philosophy__description"]}>
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
