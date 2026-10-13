"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./FloatingControls.module.css";

type Theme = "light" | "dark";

const whatsappMessage = encodeURIComponent(
  "Hi Emmanuel, I’d like to discuss working with you.",
);

export default function FloatingControls() {
  const [theme, setTheme] = useState<Theme>("light");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("emmanuel804-theme");
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
    window.localStorage.setItem("emmanuel804-theme", nextTheme);
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
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        aria-pressed={theme === "dark"}
        onClick={toggleTheme}
      >
        <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
      </button>

      <a
        className={`${styles["floating-controls__button"]} ${styles["floating-controls__whatsapp"]}`}
        href={`${portfolioContent.contact.whatsappUrl}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Emmanuel on WhatsApp"
      >
        <span aria-hidden="true">WA</span>
      </a>

      <button
        className={`${styles["floating-controls__button"]} ${styles["floating-controls__progress"]}`}
        style={progressStyle}
        type="button"
        aria-label={`Back to top, ${Math.round(scrollProgress)}% scrolled`}
        onClick={scrollToTop}
        disabled={scrollProgress < 0.5}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}
