"use client";

import { useEffect } from "react";

export default function AOSProvider() {
  useEffect(() => {
    let isMounted = true;

    async function initializeAOS() {
      const { default: AOS } = await import("aos");

      if (!isMounted) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      AOS.init({
        duration: 400,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
        disable: prefersReducedMotion,
      });

      document.documentElement.classList.add("aos-ready");
    }

    void initializeAOS();

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
}
