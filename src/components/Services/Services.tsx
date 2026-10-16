import { portfolioContent } from "@/content/portfolio";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section
      className={styles.services}
      id="services"
      data-section-spacing="standard"
      aria-labelledby="services-title"
    >
      <div className={styles["services__content"]}>
        <header
          className={styles["services__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["services__eyebrow"]}>
            {portfolioContent.servicesSection.eyebrow}
          </p>
          <h2 className={styles["services__title"]} id="services-title">
            {portfolioContent.servicesSection.title}
          </h2>
          <p className={styles["services__intro"]}>
            {portfolioContent.servicesSection.intro}
          </p>
        </header>

        <div className={styles["services__grid"]}>
          {portfolioContent.services.map((service, index) => (
            <article className={styles["services__card"]} key={service.title}>
              <span className={styles["services__number"]} aria-hidden="true">
                {String(index + 1).padStart(
                  portfolioContent.servicesSection.numberDigits,
                  "0",
                )}
              </span>

              <h3 className={styles["services__card-title"]}>
                {service.title}
              </h3>
              <p className={styles["services__description"]}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
