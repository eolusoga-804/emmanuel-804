"use client";

import { useState, type FormEvent } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Contact.module.css";

export default function Contact() {
  const { contactPage } = portfolioContent;

  const [formNotice, setFormNotice] = useState("");

  const { contact } = portfolioContent;
  const phoneHref = contact.phone.replace(/[^\d+]/g, "");
  const secondaryPhoneHref = contact.secondaryPhone.replace(/[^\d+]/g, "");
  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(
    contactPage.emailDraft.whatsappMessage,
  )}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();

    const subject = encodeURIComponent(
      `${contactPage.emailDraft.subjectPrefix} ${name}`,
    );
    const body = encodeURIComponent(
      `${contactPage.emailDraft.nameLabel}: ${name}\n${contactPage.emailDraft.emailLabel}: ${email}\n${contactPage.emailDraft.serviceLabel}: ${service}\n\n${message}`,
    );

    setFormNotice(contactPage.form.notice);

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
            {contactPage.title}
          </h2>
          <p className={styles["contact__intro"]}>{contactPage.intro}</p>
        </header>

        <div className={styles["contact__layout"]}>
          <form className={styles["contact__form"]} onSubmit={handleSubmit}>
            <div className={styles["contact__field"]}>
              <label
                className={styles["contact__label"]}
                htmlFor="contact-name"
              >
                {contactPage.form.nameLabel}
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
                {contactPage.form.emailLabel}
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
                {contactPage.form.serviceLabel}
              </label>
              <select
                className={styles["contact__input"]}
                id="contact-service"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  {contactPage.form.servicePlaceholder}
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
                {contactPage.form.messageLabel}
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
              {contactPage.form.submitLabel}
            </button>

            <p
              className={styles["contact__notice"]}
              role="status"
              aria-live="polite"
            >
              {contactPage.form.notice}
            </p>
          </form>

          <aside
            className={styles["contact__details"]}
            aria-label={contactPage.details.ariaLabel}
            data-aos="zoom-in"
            suppressHydrationWarning
          >
            <a
              className={styles["contact__link"]}
              href={`mailto:${contact.email}`}
            >
              <span className={styles["contact__link-label"]}>
                {contactPage.details.emailLabel}
              </span>
              <span>{contact.email}</span>
            </a>

            <a className={styles["contact__link"]} href={`tel:${phoneHref}`}>
              <span className={styles["contact__link-label"]}>
                {contactPage.details.phoneLabel}
              </span>
              <span>{contact.phone}</span>
            </a>

            <a
              className={styles["contact__link"]}
              href={`tel:${secondaryPhoneHref}`}
            >
              <span className={styles["contact__link-label"]}>
                {contactPage.details.secondaryPhoneLabel}
              </span>
              <span>{contact.secondaryPhone}</span>
            </a>

            <a
              className={styles["contact__link"]}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles["contact__link-label"]}>
                {contactPage.details.whatsappLabel}
              </span>
              <span>{contactPage.details.whatsappAction}</span>
            </a>

            <div className={styles["contact__location"]}>
              <span className={styles["contact__link-label"]}>
                {contactPage.details.locationLabel}
              </span>
              <span>{portfolioContent.identity.location}</span>
            </div>

            <nav
              className={styles["contact__socials"]}
              aria-label={contactPage.details.socialsLabel}
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
