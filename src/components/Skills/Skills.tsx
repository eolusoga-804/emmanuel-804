import { portfolioContent } from "@/content/portfolio";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section
      className={styles.skills}
      id="skills"
      data-section-spacing="standard"
      aria-labelledby="skills-title"
    >
      <div className={styles["skills__content"]}>
        <header
          className={styles["skills__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["skills__eyebrow"]}>
            {portfolioContent.skillsSection.eyebrow}
          </p>
          <h2 className={styles["skills__title"]} id="skills-title">
            {portfolioContent.skillsSection.title}
          </h2>
          <p className={styles["skills__intro"]}>
            {portfolioContent.skillsSection.intro}
          </p>
        </header>

        <div className={styles["skills__groups"]}>
          {portfolioContent.skillsMarquees.map((group, groupIndex) => (
            <section
              className={styles["skills__group"]}
              data-hover-surface="true"
              key={group.title}
              aria-labelledby={`skills-group-${groupIndex}`}
            >
              <h3
                className={styles["skills__group-title"]}
                id={`skills-group-${groupIndex}`}
              >
                {group.title}
              </h3>

              <div className={styles["skills__viewport"]}>
                <div
                  className={`${styles["skills__track"]} ${
                    groupIndex % 2 === 1 ? styles["skills__track--reverse"] : ""
                  }`}
                >
                  <ul className={styles["skills__list"]}>
                    {group.items.map((item) => (
                      <li className={styles["skills__item"]} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className={styles["skills__list"]} aria-hidden="true">
                    {group.items.map((item) => (
                      <li className={styles["skills__item"]} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
