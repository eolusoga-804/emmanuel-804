"use client";

import { useEffect, useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const { contact } = portfolioContent;

  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles["footer__content"]}>
        <p className={styles["footer__brand"]}>
          {portfolioContent.identity.displayName}
        </p>

        <p className={styles["footer__copyright"]}>
          © {year ? `${year} ` : ""}
          {portfolioContent.identity.fullName}
        </p>

        <div className={styles["footer__actions"]}>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a
            href={`${contact.whatsappUrl}?text=${encodeURIComponent(
              "Hi Emmanuel, I’d like to discuss a project.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          {contact.links.map((link) =>
            link.href ? (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : null,
          )}
        </div>
      </div>
    </footer>
  );
}
