import { portfolioContent } from "@/content/portfolio";
import styles from "./Workflow.module.css";

export default function Workflow() {
  return (
    <section
      className={styles.workflow}
      id="workflow"
      aria-labelledby="workflow-title"
    >
      <div className={styles["workflow__content"]}>
        <header className={styles["workflow__header"]}>
          <p className={styles["workflow__eyebrow"]}>From brief to delivery</p>
          <h2 className={styles["workflow__title"]} id="workflow-title">
            Workflow
          </h2>
          <p className={styles["workflow__intro"]}>
            A six-step process, from understanding requirements to reviewing and
            improving the finished work.
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
