"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { portfolioContent } from "@/content/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./FloatingControls.module.css";

type Theme = "light" | "dark";

const whatsappMessage = encodeURIComponent(
  portfolioContent.floatingControls.whatsappMessage,
);

export default function FloatingControls() {
  const [theme, setTheme] = useState<Theme>("light");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(
      portfolioContent.floatingControls.themeStorageKey,
    );
    const initialTheme: Theme = savedTheme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

        setScrollProgress(Math.min(100, Math.max(0, progress)));
        frameId = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(
      portfolioContent.floatingControls.themeStorageKey,
      nextTheme,
    );
    setTheme(nextTheme);
  };

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  const progressStyle = {
    "--scroll-progress": `${scrollProgress}%`,
  } as CSSProperties;

  return (
    <div className={styles["floating-controls"]}>
      <button
        className={styles["floating-controls__button"]}
        type="button"
        aria-label={portfolioContent.floatingControls.themeLabelTemplate.replace(
          "{theme}",
          theme,
        )}
        aria-pressed={theme === "dark"}
        onClick={toggleTheme}
      >
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          aria-hidden="true"
        />
      </button>

      <a
        className={`${styles["floating-controls__button"]} ${styles["floating-controls__whatsapp"]}`}
        href={`${portfolioContent.contact.whatsappUrl}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={portfolioContent.floatingControls.whatsappLabel}
      >
        <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
      </a>

      <button
        className={`${styles["floating-controls__button"]} ${styles["floating-controls__progress"]}`}
        style={progressStyle}
        type="button"
        aria-label={portfolioContent.floatingControls.backToTopLabelTemplate.replace(
          "{progress}",
          String(Math.round(scrollProgress)),
        )}
        onClick={scrollToTop}
        disabled={
          scrollProgress <
          portfolioContent.floatingControls.backToTopThresholdPercent
        }
      >
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}
