"use client";

import { useEffect, useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Footer.module.css";

type FormFeedback = {
  type: "success" | "error";
  message: string;
};

const socialIcons: Record<string, IconDefinition> = {
  LinkedIn: faLinkedin,
  X: faXTwitter,
  GitHub: faGithub,
};

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const [formFeedback, setFormFeedback] = useState<FormFeedback | null>(null);

  const { contact } = portfolioContent;
  const phoneHref = contact.phone.replace(/[^\d+]/g, "");
  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(
    "Hi Emmanuel, I’d like to discuss a project.",
  )}`;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  function handleEmailCollection(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      setFormFeedback({
        type: "error",
        message: "Enter a valid email address to prepare your request.",
      });
      return;
    }

    const formData = new FormData(form);
    const email = String(formData.get("subscriber-email") ?? "").trim();
    const subject = encodeURIComponent("Portfolio email updates");
    const body = encodeURIComponent(
      `Please contact me about portfolio updates.\n\nMy email address: ${email}`,
    );

    setFormFeedback({
      type: "success",
      message:
        "Your email app should open with a draft. Send it to complete your request.",
    });

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <footer className={styles.footer}>
      <span className={styles["footer__watermark"]} aria-hidden="true">
        {portfolioContent.identity.displayName.toUpperCase()}
      </span>

      <div className={styles["footer__content"]}>
        <div className={styles["footer__intro"]}>
          <p className={styles["footer__brand"]}>
            {portfolioContent.identity.displayName}
          </p>
          <p className={styles["footer__message"]}>
            Frontend development informed by a background in UI/UX and graphic
            design.
          </p>
          <p className={styles["footer__copyright"]}>
            © {year ? `${year} ` : ""}
            {portfolioContent.identity.fullName}
          </p>
        </div>

        <div className={styles["footer__details"]}>
          <a
            className={styles["footer__contact-link"]}
            href={`mailto:${contact.email}`}
          >
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <span>{contact.email}</span>
          </a>

          <a
            className={styles["footer__contact-link"]}
            href={`tel:${phoneHref}`}
          >
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            <span>{contact.phone}</span>
          </a>

          <a
            className={styles["footer__contact-link"]}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <a
            className={styles["footer__work-link"]}
            href={portfolioContent.resumePath}
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé
          </a>

          <nav
            className={styles["footer__socials"]}
            aria-label="Social profiles"
          >
            {contact.links.map((link) => {
              if (!link.href) return null;

              const icon = socialIcons[link.label];

              return (
                <a
                  className={styles["footer__social-link"]}
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {icon ? (
                    <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  ) : (
                    link.label
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <form
          className={styles["footer__form"]}
          onSubmit={handleEmailCollection}
          noValidate
        >
          <label
            className={styles["footer__form-label"]}
            htmlFor="footer-email"
          >
            Get in touch about portfolio updates
          </label>
          <p className={styles["footer__form-help"]}>
            Your email app will prepare a request for you to review and send.
          </p>

          <div className={styles["footer__form-row"]}>
            <input
              className={styles["footer__input"]}
              id="footer-email"
              name="subscriber-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
            <button className={styles["footer__submit"]} type="submit">
              Prepare email
            </button>
          </div>

          <p
            className={`${styles["footer__feedback"]} ${
              formFeedback?.type === "error"
                ? styles["footer__feedback--error"]
                : ""
            }`}
            role={formFeedback?.type === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {formFeedback?.message ?? ""}
          </p>
        </form>
      </div>
    </footer>
  );
}
