import { portfolioContent } from "@/content/portfolio";
import styles from "./WhyWorkWithMe.module.css";

export default function WhyWorkWithMe() {
  return (
    <section
      className={styles["why-work"]}
      id="why-work-with-me"
      aria-labelledby="why-work-title"
    >
      <div className={styles["why-work__content"]}>
        <header
          className={styles["why-work__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["why-work__eyebrow"]}>Working together</p>
          <h2 className={styles["why-work__title"]} id="why-work-title">
            Why Work With Me
          </h2>
          <p className={styles["why-work__intro"]}>
            A mix of analytical thinking, design experience, and a focus on
            useful digital experiences.
          </p>
        </header>

        <div className={styles["why-work__grid"]}>
          {portfolioContent.strengths.map((strength, index) => (
            <details
              className={styles["why-work__card"]}
              key={strength.title}
              name="why-work-items"
            >
              <summary className={styles["why-work__summary"]}>
                <span className={styles["why-work__number"]} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles["why-work__card-title"]}>
                  {strength.title}
                </span>

                <span className={styles["why-work__toggle"]} aria-hidden="true">
                  +
                </span>
              </summary>

              <p className={styles["why-work__description"]}>
                {strength.description}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
