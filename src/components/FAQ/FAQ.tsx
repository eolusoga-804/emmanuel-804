import { portfolioContent } from "@/content/portfolio";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <div className={styles["faq__content"]}>
        <header
          className={styles["faq__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["faq__eyebrow"]}>Questions</p>
          <h2 className={styles["faq__title"]} id="faq-title">
            Frequently Asked Questions
          </h2>
          <p className={styles["faq__intro"]}>
            Details about my services, availability, and portfolio.
          </p>
        </header>

        <div className={styles["faq__list"]}>
          {portfolioContent.faqs.map((item) => (
            <details
              className={styles["faq__item"]}
              key={item.question}
              name="faq-items"
            >
              <summary className={styles["faq__question"]}>
                <span>{item.question}</span>
                <span className={styles["faq__toggle"]} aria-hidden="true">
                  +
                </span>
              </summary>

              <div className={styles["faq__answer"]}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
