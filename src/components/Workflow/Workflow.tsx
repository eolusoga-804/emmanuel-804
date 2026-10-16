import { portfolioContent } from "@/content/portfolio";
import styles from "./Workflow.module.css";

export default function Workflow() {
  return (
    <section
      className={styles.workflow}
      id="workflow"
      data-section-spacing="standard"
      aria-labelledby="workflow-title"
    >
      <div className={styles["workflow__content"]}>
        <header
          className={styles["workflow__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["workflow__eyebrow"]}>
            {portfolioContent.workflowSection.eyebrow}
          </p>
          <h2 className={styles["workflow__title"]} id="workflow-title">
            {portfolioContent.workflowSection.title}
          </h2>
          <p className={styles["workflow__intro"]}>
            {portfolioContent.workflowSection.introTemplate.replace(
              "{count}",
              String(portfolioContent.workflow.length),
            )}
          </p>
        </header>

        <ol className={styles["workflow__list"]}>
          {portfolioContent.workflow.map((step) => (
            <li className={styles["workflow__item"]} key={step.number}>
              <article className={styles["workflow__card"]}>
                <h3 className={styles["workflow__step-title"]}>{step.title}</h3>
                <p className={styles["workflow__description"]}>
                  {step.description}
                </p>
              </article>

              <span className={styles["workflow__marker"]} aria-hidden="true">
                {step.number}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
