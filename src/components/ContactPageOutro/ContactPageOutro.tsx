import { portfolioContent } from "@/content/portfolio";
import styles from "./ContactPageOutro.module.css";

export default function ContactPageOutro() {
  const { contactOutro, contact } = portfolioContent;
  const subject = encodeURIComponent("Let's build something together");

  return (
    <section className={styles.outro} aria-labelledby="contact-outro-title">
      <div className={styles["outro__panel"]}>
        <span className={styles["outro__spark"]} aria-hidden="true">
          ✳
        </span>

        <header
          className={styles["outro__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["outro__eyebrow"]}>{contactOutro.eyebrow}</p>
          <h2 className={styles["outro__title"]} id="contact-outro-title">
            {contactOutro.title}
          </h2>
          <p className={styles["outro__message"]}>{contactOutro.message}</p>
        </header>

        <a
          className={styles["outro__link"]}
          href={`mailto:${contact.email}?subject=${subject}`}
        >
          {contactOutro.actionLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
