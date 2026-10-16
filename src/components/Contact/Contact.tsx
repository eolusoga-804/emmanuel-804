"use client";

import { useState, type FormEvent } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formNotice, setFormNotice] = useState("");

  const { contact } = portfolioContent;
  const phoneHref = contact.phone.replace(/[^\d+]/g, "");
  const secondaryPhoneHref = contact.secondaryPhone.replace(/[^\d+]/g, "");
  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(
    "Hi Emmanuel, I’d like to discuss a project.",
  )}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    );

    setFormNotice(
      "Your email app should open with a draft. Send it there to complete your message.",
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className={styles.contact}
      id="contact"
      data-section-spacing="standard"
      aria-labelledby="contact-title"
    >
      <div className={styles["contact__content"]}>
        <header
          className={styles["contact__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["contact__eyebrow"]}>Contact</p>
          <h2 className={styles["contact__title"]} id="contact-title">
            Let’s talk about your project
          </h2>
          <p className={styles["contact__intro"]}>
            Send a message or contact me through one of the channels below.
          </p>
        </header>

        <div className={styles["contact__layout"]}>
          <form className={styles["contact__form"]} onSubmit={handleSubmit}>
            <div className={styles["contact__field"]}>
              <label
                className={styles["contact__label"]}
                htmlFor="contact-name"
              >
                Name
              </label>
              <input
                className={styles["contact__input"]}
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles["contact__field"]}>
              <label
                className={styles["contact__label"]}
                htmlFor="contact-email"
              >
                Email
              </label>
              <input
                className={styles["contact__input"]}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles["contact__field"]}>
              <label
                className={styles["contact__label"]}
                htmlFor="contact-service"
              >
                Service
              </label>
              <select
                className={styles["contact__input"]}
                id="contact-service"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {portfolioContent.services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles["contact__field"]}>
              <label
                className={styles["contact__label"]}
                htmlFor="contact-message"
              >
                Message
              </label>
              <textarea
                className={styles["contact__textarea"]}
                id="contact-message"
                name="message"
                rows={5}
                required
              />
            </div>

            <button className={styles["contact__submit"]} type="submit">
              Prepare email draft
            </button>

            <p
              className={styles["contact__notice"]}
              role="status"
              aria-live="polite"
            >
              {formNotice}
            </p>
          </form>

          <aside
            className={styles["contact__details"]}
            aria-label="Other contact details"
            data-aos="zoom-in"
            suppressHydrationWarning
          >
            <a
              className={styles["contact__link"]}
              href={`mailto:${contact.email}`}
            >
              <span className={styles["contact__link-label"]}>Email</span>
              <span>{contact.email}</span>
            </a>

            <a className={styles["contact__link"]} href={`tel:${phoneHref}`}>
              <span className={styles["contact__link-label"]}>Phone</span>
              <span>{contact.phone}</span>
            </a>

            <a
              className={styles["contact__link"]}
              href={`tel:${secondaryPhoneHref}`}
            >
              <span className={styles["contact__link-label"]}>
                Second phone / WhatsApp
              </span>
              <span>{contact.secondaryPhone}</span>
            </a>

            <a
              className={styles["contact__link"]}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles["contact__link-label"]}>WhatsApp</span>
              <span>Start a conversation</span>
            </a>

            <div className={styles["contact__location"]}>
              <span className={styles["contact__link-label"]}>Location</span>
              <span>{portfolioContent.identity.location}</span>
            </div>

            <nav
              className={styles["contact__socials"]}
              aria-label="Social links"
            >
              {contact.links.map((link) =>
                link.href ? (
                  <a
                    className={styles["contact__social-link"]}
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : null,
              )}
            </nav>
          </aside>
        </div>
      </div>
    </section>
  );
}
