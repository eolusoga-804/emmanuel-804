"use client";

import { useEffect, useRef } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./BackgroundEffects.module.css";

const orbClasses = [
  styles["background-effects__orb--one"],
  styles["background-effects__orb--two"],
  styles["background-effects__orb--three"],
  styles["background-effects__orb--four"],
  styles["background-effects__orb--five"],
  styles["background-effects__orb--six"],
  styles["background-effects__orb--seven"],
];

const ornamentClasses = [
  styles["background-effects__ornament--one"],
  styles["background-effects__ornament--two"],
  styles["background-effects__ornament--three"],
  styles["background-effects__ornament--four"],
  styles["background-effects__ornament--five"],
  styles["background-effects__ornament--six"],
  styles["background-effects__ornament--seven"],
  styles["background-effects__ornament--eight"],
  styles["background-effects__ornament--nine"],
  styles["background-effects__ornament--ten"],
  styles["background-effects__ornament--eleven"],
];

export default function BackgroundEffects() {
  const pointerGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = pointerGlowRef.current;
    if (!glow) return;

    const viewport = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)",
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (
        !viewport.matches ||
        reducedMotion.matches ||
        event.pointerType === "touch"
      ) {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        glow.style.setProperty("--pointer-x", `${pointerX}px`);
        glow.style.setProperty("--pointer-y", `${pointerY}px`);
        glow.dataset.active = "true";
        frameId = 0;
      });
    };

    const handlePointerLeave = () => {
      glow.dataset.active = "false";
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className={styles["background-effects"]} aria-hidden="true">
      <div className={styles["background-effects__grid"]} />

      <div className={styles["background-effects__orbs"]}>
        {orbClasses.map((className, index) => (
          <span
            key={`orb-${index + 1}`}
            className={`${styles["background-effects__orb"]} ${className}`}
          />
        ))}
      </div>

      <div className={styles["background-effects__ornaments"]}>
        {portfolioContent.backgroundEffects.ornamentSymbols.map(
          (ornament, index) => (
            <span
              key={`ornament-${index + 1}`}
              className={`${styles["background-effects__ornament"]} ${ornamentClasses[index]}`}
            >
              {ornament}
            </span>
          ),
        )}
      </div>

      <div
        ref={pointerGlowRef}
        className={styles["background-effects__cursor-glow"]}
        data-active="false"
      />
    </div>
  );
}
