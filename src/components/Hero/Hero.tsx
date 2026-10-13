"use client";

import { useEffect, useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  const titles = portfolioContent.identity.titles;
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(titles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  // Cycle through the supplied titles; keep a static title for reduced-motion users.
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (motionPreference.matches) {
      setTitleIndex(0);
      setVisibleCharacters(titles[0].length);
      setIsDeleting(false);
      return;
    }

    if (isDeleting && visibleCharacters === 0) {
      setIsDeleting(false);
      setTitleIndex((currentIndex) => (currentIndex + 1) % titles.length);
      return;
    }

    const isTitleComplete = visibleCharacters === currentTitle.length;
    const delay = isDeleting ? 45 : isTitleComplete ? 1300 : 85;

    const timeoutId = window.setTimeout(() => {
      if (isTitleComplete && !isDeleting) {
        setIsDeleting(true);
      } else {
        setVisibleCharacters((count) => count + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, titleIndex, titles, visibleCharacters]);

  const visibleTitle = titles[titleIndex].slice(0, visibleCharacters);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles["hero__content"]}>
        <p className={styles["hero__eyebrow"]}>
          <span
            className={styles["hero__availability-dot"]}
            aria-hidden="true"
          />
          Available for {portfolioContent.identity.availability.join(" · ")}
        </p>

        <h1 className={styles["hero__title"]} id="hero-title">
          I’m {portfolioContent.identity.fullName}
        </h1>

        <p className={styles["hero__role"]}>
          <span className={styles["hero__role-label"]}>I work as a </span>
          <span aria-label={portfolioContent.identity.primaryTitle}>
            <span aria-hidden="true">{visibleTitle}</span>
            <span className={styles["hero__caret"]} aria-hidden="true">
              |
            </span>
          </span>
        </p>

        <p className={styles["hero__summary"]}>{portfolioContent.summary}</p>

        <div className={styles["hero__actions"]}>
          <a className={styles["hero__button--primary"]} href="#contact">
            Contact Me
          </a>

          <div className={styles["hero__cv-action"]}>
            <a
              className={styles["hero__button--secondary"]}
              href={portfolioContent.resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>

            <div className={styles["hero__cv-preview"]} aria-hidden="true">
              <iframe
                title="Resume preview"
                src={`${portfolioContent.resumePath}#toolbar=0&navpanes=0`}
                tabIndex={-1}
              />
            </div>
          </div>

          <a className={styles["hero__button--secondary"]} href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
