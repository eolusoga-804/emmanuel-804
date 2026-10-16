"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faFilePdf,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Footer.module.css";

const socialIcons: Record<string, IconDefinition> = {
  LinkedIn: faLinkedin,
  X: faXTwitter,
  GitHub: faGithub,
};

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  const { contact, footer } = portfolioContent;
  const phoneHref = contact.phone.replace(/[^\d+]/g, "");
  const secondaryPhoneHref = contact.secondaryPhone.replace(/[^\d+]/g, "");
  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(
    footer.whatsappMessage,
  )}`;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

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
          <p className={styles["footer__message"]}>{footer.message}</p>
          <p className={styles["footer__copyright"]}>
            © {year ? `${year} ` : ""}
            {portfolioContent.identity.fullName}
          </p>
        </div>

        <div className={styles["footer__details"]}>
          <nav className={styles["footer__contact-icons"]} aria-label="Contact">
            <a
              className={styles["footer__icon-link"]}
              href={`mailto:${contact.email}`}
              aria-label={footer.emailLabel}
              title={footer.emailLabel}
            >
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            </a>

            <a
              className={styles["footer__icon-link"]}
              href={`tel:${phoneHref}`}
              aria-label={footer.phoneLabel.replace("{phone}", contact.phone)}
              title={footer.phoneLabel.replace("{phone}", contact.phone)}
            >
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            </a>

            <a
              className={styles["footer__icon-link"]}
              href={`tel:${secondaryPhoneHref}`}
              aria-label={footer.phoneLabel.replace(
                "{phone}",
                contact.secondaryPhone,
              )}
              title={footer.phoneLabel.replace(
                "{phone}",
                contact.secondaryPhone,
              )}
            >
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            </a>

            <a
              className={styles["footer__icon-link"]}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.whatsappLabel}
              title={footer.whatsappTitle}
            >
              <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            </a>

            <a
              className={styles["footer__icon-link"]}
              href={portfolioContent.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.resumeLabel}
              title={footer.resumeTitle}
            >
              <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
            </a>
          </nav>

          <nav
            className={styles["footer__socials"]}
            aria-label="Social profiles"
          >
            {contact.links.map((link) => {
              if (!link.href) return null;

              const icon = socialIcons[link.label];
              if (!icon) return null;

              return (
                <a
                  className={styles["footer__icon-link"]}
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </div>

        <div
          className={styles["footer__legal"]}
          role="group"
          aria-label="Legal information"
        >
          <span>{footer.termsLabel}</span>
          <span>{footer.privacyLabel}</span>
        </div>
      </div>
    </footer>
  );
}
