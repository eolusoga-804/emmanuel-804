"use client";

import { useEffect, useState, useRef } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Hero.module.css";

export default function Hero() {
  const titles = portfolioContent.identity.titles;
  const [titleIndex, setTitleIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(titles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const resumeDialogRef = useRef<HTMLDialogElement>(null);

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
    const { typingDelays } = portfolioContent.hero;
    const delay = isDeleting
      ? typingDelays.deleteCharacterMs
      : isTitleComplete
        ? typingDelays.completedTitleMs
        : typingDelays.typeCharacterMs;

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
    <section
      className={styles.hero}
      data-section-spacing="hero"
      aria-labelledby="hero-title"
    >
      <div className={styles["hero__content"]}>
        <p className={styles["hero__eyebrow"]}>
          <span
            className={styles["hero__availability-dot"]}
            aria-hidden="true"
          />
          {portfolioContent.hero.availabilityPrefix}{" "}
          {portfolioContent.identity.availability.join(" · ")}
        </p>

        <h1 className={styles["hero__title"]} id="hero-title">
          {portfolioContent.hero.roleLead} {portfolioContent.identity.fullName}
        </h1>

        <p className={styles["hero__role"]}>
          <span className={styles["hero__role-label"]}>
            {portfolioContent.hero.roleLead}{" "}
          </span>
          <span aria-label={portfolioContent.identity.primaryTitle}>
            <span aria-hidden="true">{visibleTitle}</span>
            <span className={styles["hero__caret"]} aria-hidden="true">
              |
            </span>
          </span>
        </p>

        <p className={styles["hero__summary"]}>
          {portfolioContent.heroSummary}
        </p>

        <div className={styles["hero__actions"]}>
          <a className={styles["hero__button--primary"]} href="#contact">
            {portfolioContent.hero.contactAction}
          </a>

          <div className={styles["hero__cv-action"]}>
            <button
              className={styles["hero__button--secondary"]}
              type="button"
              onClick={() => resumeDialogRef.current?.showModal()}
            >
              {portfolioContent.hero.resumePreviewAction}
            </button>
          </div>

          <a className={styles["hero__button--secondary"]} href="#projects">
            {portfolioContent.hero.projectsAction}
          </a>
        </div>

        <dialog
          ref={resumeDialogRef}
          className={styles["hero__cv-dialog"]}
          aria-labelledby="hero-cv-title"
        >
          <header className={styles["hero__cv-header"]}>
            <div>
              <p className={styles["hero__cv-label"]}>
                {portfolioContent.hero.cvLabel}
              </p>
              <h2 className={styles["hero__cv-title"]} id="hero-cv-title">
                {portfolioContent.identity.fullName}
              </h2>
            </div>

            <div className={styles["hero__cv-controls"]}>
              <a
                className={styles["hero__button--secondary"]}
                href={portfolioContent.resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                {portfolioContent.hero.openResumeLabel}
              </a>

              <a
                className={styles["hero__button--secondary"]}
                href={portfolioContent.resumePath}
                download
              >
                {portfolioContent.hero.downloadResumeLabel}
              </a>

              <button
                className={styles["hero__button--secondary"]}
                type="button"
                aria-label="Close CV preview"
                onClick={() => resumeDialogRef.current?.close()}
              >
                {portfolioContent.hero.closeResumeLabel}
              </button>
            </div>
          </header>

          <iframe
            className={styles["hero__cv-frame"]}
            title={`{portfolioContent.hero.cvFrameTitlePrefix} ${portfolioContent.identity.fullName}`}
            src={portfolioContent.resumePath}
          />
        </dialog>
      </div>
    </section>
  );
}
