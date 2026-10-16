"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioContent } from "@/types/portfolio";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Testimonials.module.css";

const testimonials: PortfolioContent["testimonials"] =
  portfolioContent.testimonials;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (testimonials.length === 0) {
    return (
      <section
        className={styles.testimonials}
        id="testimonials"
        data-section-spacing="standard"
        aria-labelledby="testimonials-title"
      >
        <div className={styles["testimonials__content"]}>
          <header
            className={styles["testimonials__header"]}
            data-aos="zoom-in"
            suppressHydrationWarning
          >
            <p className={styles["testimonials__eyebrow"]}>
              {portfolioContent.testimonialSection.eyebrow}
            </p>
            <h2
              className={styles["testimonials__title"]}
              id="testimonials-title"
            >
              {portfolioContent.testimonialSection.title}
            </h2>
          </header>

          <div className={styles["testimonials__empty"]} role="status">
            <span
              className={styles["testimonials__empty-mark"]}
              aria-hidden="true"
            >
              “
            </span>
            <p className={styles["testimonials__empty-title"]}>
              {portfolioContent.testimonialSection.emptyTitle}
            </p>
            <p className={styles["testimonials__empty-copy"]}>
              {portfolioContent.testimonialSection.emptyMessage}
            </p>
            <a
              className={styles["testimonials__contact-link"]}
              href={portfolioContent.testimonialSection.contactHref}
            >
              {portfolioContent.testimonialSection.contactAction}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section
      className={styles.testimonials}
      id="testimonials"
      data-section-spacing="standard"
      aria-labelledby="testimonials-title"
    >
      <div className={styles["testimonials__content"]}>
        <header
          className={styles["testimonials__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["testimonials__eyebrow"]}>
            {portfolioContent.testimonialSection.eyebrow}
          </p>
          <h2 className={styles["testimonials__title"]} id="testimonials-title">
            {portfolioContent.testimonialSection.title}
          </h2>
        </header>

        <div
          className={styles["testimonials__carousel"]}
          role="region"
          aria-roledescription="carousel"
          aria-label={portfolioContent.testimonialSection.carouselLabel}
        >
          <article
            className={styles["testimonials__slide"]}
            role="group"
            aria-roledescription="slide"
            aria-label={portfolioContent.testimonialSection.slidePositionTemplate
              .replace("{current}", String(activeIndex + 1))
              .replace("{total}", String(testimonials.length))}
            aria-live="polite"
          >
            <div className={styles["testimonials__author"]}>
              {activeTestimonial.image ? (
                <Image
                  className={styles["testimonials__image"]}
                  src={activeTestimonial.image}
                  alt={`${portfolioContent.testimonialSection.portraitAltTemplate.replace(
                    "{author}",
                    activeTestimonial.author,
                  )}`}
                  width={72}
                  height={72}
                />
              ) : (
                <span
                  className={styles["testimonials__image-fallback"]}
                  aria-hidden="true"
                >
                  “
                </span>
              )}

              <div>
                <p className={styles["testimonials__author-name"]}>
                  {activeTestimonial.author}
                </p>
                <p className={styles["testimonials__author-role"]}>
                  {activeTestimonial.role} · {activeTestimonial.organization}
                </p>
              </div>
            </div>

            <blockquote className={styles["testimonials__quote"]}>
              <p>{activeTestimonial.quote}</p>
            </blockquote>
          </article>

          <div className={styles["testimonials__controls"]}>
            <button
              className={styles["testimonials__arrow"]}
              type="button"
              aria-label={`${portfolioContent.testimonialSection.previousLabel}`}
              onClick={showPrevious}
            >
              <span aria-hidden="true">←</span>
            </button>

            <div
              className={styles["testimonials__indicators"]}
              role="group"
              aria-label={
                portfolioContent.testimonialSection.indicatorGroupLabel
              }
            >
              {testimonials.map((testimonial, index) => (
                <button
                  className={`${styles["testimonials__indicator"]} ${
                    index === activeIndex
                      ? styles["testimonials__indicator--active"]
                      : ""
                  }`}
                  key={`${testimonial.author}-${testimonial.organization}`}
                  type="button"
                  aria-label={portfolioContent.testimonialSection.indicatorLabelTemplate.replace(
                    "{author}",
                    testimonial.author,
                  )}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <button
              className={styles["testimonials__arrow"]}
              type="button"
              aria-label={portfolioContent.testimonialSection.nextLabel}
              onClick={showNext}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
