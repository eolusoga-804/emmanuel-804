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
        aria-labelledby="testimonials-title"
      >
        <div className={styles["testimonials__content"]}>
          <header className={styles["testimonials__header"]}>
            <p className={styles["testimonials__eyebrow"]}>Feedback</p>
            <h2
              className={styles["testimonials__title"]}
              id="testimonials-title"
            >
              Testimonials
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
              This space is ready for feedback.
            </p>
            <p className={styles["testimonials__empty-copy"]}>
              Testimonials will appear here when approved feedback is available.
            </p>
            <a className={styles["testimonials__contact-link"]} href="/contact">
              Get in touch
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
      aria-labelledby="testimonials-title"
    >
      <div className={styles["testimonials__content"]}>
        <header className={styles["testimonials__header"]}>
          <p className={styles["testimonials__eyebrow"]}>Feedback</p>
          <h2 className={styles["testimonials__title"]} id="testimonials-title">
            Testimonials
          </h2>
        </header>

        <div
          className={styles["testimonials__carousel"]}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client and collaborator testimonials"
        >
          <article
            className={styles["testimonials__slide"]}
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} of ${testimonials.length}`}
            aria-live="polite"
          >
            <div className={styles["testimonials__author"]}>
              {activeTestimonial.image ? (
                <Image
                  className={styles["testimonials__image"]}
                  src={activeTestimonial.image}
                  alt={`Portrait of ${activeTestimonial.author}`}
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
              aria-label="Previous testimonial"
              onClick={showPrevious}
            >
              <span aria-hidden="true">←</span>
            </button>

            <div
              className={styles["testimonials__indicators"]}
              role="group"
              aria-label="Choose a testimonial"
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
                  aria-label={`Show testimonial from ${testimonial.author}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <button
              className={styles["testimonials__arrow"]}
              type="button"
              aria-label="Next testimonial"
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
