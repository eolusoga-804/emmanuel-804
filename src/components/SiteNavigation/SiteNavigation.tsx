"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./SiteNavigation.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNavigation() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstPanelLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isPanelOpen) return;

    firstPanelLinkRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPanelOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        !panelRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsPanelOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [isPanelOpen]);

  const closePanel = () => setIsPanelOpen(false);

  return (
    <>
      <header className={styles["site-nav"]}>
        <div
          className={`${styles["site-nav__bar"]} ${
            isScrolled ? styles["site-nav__bar--compact"] : ""
          }`}
        >
          <a
            className={styles["site-nav__brand"]}
            href="#home"
            onClick={closePanel}
          >
            {portfolioContent.identity.displayName.toUpperCase()}
          </a>

          <nav
            className={styles["site-nav__desktop"]}
            aria-label="Main navigation"
          >
            <ul className={styles["site-nav__list"]}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className={styles["site-nav__link"]} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            className={styles["site-nav__menu-button"]}
            type="button"
            aria-label={
              isPanelOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isPanelOpen}
            aria-controls="site-navigation-panel"
            onClick={() => setIsPanelOpen((open) => !open)}
          >
            <span aria-hidden="true">{isPanelOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </header>

      {isPanelOpen && (
        <>
          <div className={styles["site-nav__backdrop"]} aria-hidden="true" />

          <aside
            ref={panelRef}
            id="site-navigation-panel"
            className={styles["site-nav__panel"]}
            aria-label="Navigation menu"
          >
            <div className={styles["site-nav__panel-heading"]}>
              <span>Navigate</span>
              <button
                className={styles["site-nav__close-button"]}
                type="button"
                aria-label="Close navigation menu"
                onClick={closePanel}
              >
                ×
              </button>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className={styles["site-nav__panel-list"]}>
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={index === 0 ? firstPanelLinkRef : undefined}
                      className={styles["site-nav__panel-link"]}
                      href={item.href}
                      onClick={closePanel}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles["site-nav__panel-contact"]}>
              <span className={styles["site-nav__availability"]}>
                Available for work
              </span>
              <a href={`mailto:${portfolioContent.contact.email}`}>
                {portfolioContent.contact.email}
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
