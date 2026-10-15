"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioContent } from "@/content/portfolio";
import styles from "./About.module.css";

// Build the carousel from centralized portfolio content.
const slides = [
  ...portfolioContent.aboutSlides,
  {
    title: "Experience",
    body: portfolioContent.experience
      .map(
        ({ period, title, organization, description }) =>
          `${title}\n${organization} | ${period}\n${description}`,
      )
      .join("\n\n"),
  },
  {
    title: "Education",
    body: portfolioContent.education
      .map(
        ({ period, title, organization, description }) =>
          `${title}\n${organization} | ${period}\n${description}`,
      )
      .join("\n\n"),
  },
  {
    title: "Certificates and Languages",
    body: [
      ...portfolioContent.certificates.map((certificate) => `• ${certificate}`),
      `Languages: ${portfolioContent.languages.join(" · ")}`,
    ].join("\n"),
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPreviousSlide = () => {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles["about__layout"]}>
        <figure className={styles["about__portrait"]}>
          <div className={styles["about__portrait-frame"]}>
            <Image
              className={styles["about__portrait-image"]}
              src="/images/professional-headshot.webp"
              alt={`Professional headshot of ${portfolioContent.identity.fullName}`}
              fill
              sizes="(max-width: 760px) 80vw, 340px"
            />
          </div>

          <figcaption className={styles["about__caption"]} data-aos="zoom-in">
            <strong>{portfolioContent.identity.fullName}</strong>
            <span>{portfolioContent.identity.location}</span>
          </figcaption>
        </figure>

        <div className={styles["about__content"]}>
          <p className={styles["about__eyebrow"]}>About Me</p>
          <h2 className={styles["about__title"]} id="about-title">
            Design thinking meets frontend development.
          </h2>

          <div
            className={styles["about__carousel"]}
            role="region"
            aria-roledescription="carousel"
            aria-label="About Emmanuel"
          >
            <article
              className={styles["about__slide"]}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${slides.length}: ${activeSlide.title}`}
              aria-live="polite"
            >
              <span className={styles["about__slide-count"]}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>

              <h3 className={styles["about__slide-title"]}>
                {activeSlide.title}
              </h3>
              <p className={styles["about__slide-body"]}>{activeSlide.body}</p>
            </article>

            <div className={styles["about__carousel-controls"]}>
              <button
                className={styles["about__arrow"]}
                type="button"
                aria-label="Previous About slide"
                onClick={showPreviousSlide}
              >
                <span aria-hidden="true">←</span>
              </button>

              <div
                className={styles["about__indicators"]}
                role="group"
                aria-label="Choose an About slide"
              >
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    className={`${styles["about__indicator"]} ${
                      index === activeIndex
                        ? styles["about__indicator--active"]
                        : ""
                    }`}
                    type="button"
                    aria-label={`Show ${slide.title}`}
                    aria-pressed={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <button
                className={styles["about__arrow"]}
                type="button"
                aria-label="Next About slide"
                onClick={showNextSlide}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
