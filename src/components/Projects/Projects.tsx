import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Projects.module.css";

const portfolioRequestUrl = `${
  portfolioContent.contact.whatsappUrl
}?text=${encodeURIComponent("Hi Emmanuel, please share your full portfolio.")}`;

export default function Projects() {
  return (
    <section
      className={styles.projects}
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className={styles["projects__content"]}>
        <header
          className={styles["projects__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["projects__eyebrow"]}>Selected work</p>
          <h2 className={styles["projects__title"]} id="projects-title">
            Projects
          </h2>
          <p className={styles["projects__intro"]}>
            A selection of projects from my portfolio.
          </p>
        </header>

        <div className={styles["projects__grid"]}>
          {portfolioContent.projects.map((project) => (
            <article className={styles["projects__card"]} key={project.title}>
              <div className={styles["projects__mockup"]} aria-hidden="true">
                <div className={styles["projects__browser-bar"]}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles["projects__mockup-content"]}>
                  <span className={styles["projects__mockup-block"]} />
                  <span className={styles["projects__mockup-line"]} />
                  <span className={styles["projects__mockup-line"]} />
                  <span className={styles["projects__mockup-button"]} />
                </div>
              </div>

              <p className={styles["projects__preview-note"]}>
                Visual preview not supplied
              </p>

              <div className={styles["projects__badges"]}>
                {project.favorite && (
                  <span className={styles["projects__badge"]}>Featured</span>
                )}
                {project.verificationNeeded && (
                  <span className={styles["projects__badge"]}>
                    Details to confirm
                  </span>
                )}
              </div>

              <h3 className={styles["projects__card-title"]}>
                {project.title}
              </h3>
              <p className={styles["projects__summary"]}>{project.summary}</p>

              <div className={styles["projects__technologies"]}>
                {project.technologies.length > 0 ? (
                  project.technologies.map((technology) => (
                    <span
                      className={styles["projects__technology"]}
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))
                ) : (
                  <span className={styles["projects__placeholder"]}>
                    Technology details not provided
                  </span>
                )}
              </div>

              <div className={styles["projects__links"]}>
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Case study
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                  </a>
                )}
                {!project.caseStudyUrl &&
                  !project.liveUrl &&
                  !project.githubUrl && (
                    <span className={styles["projects__placeholder"]}>
                      Project links not provided
                    </span>
                  )}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles["projects__footer"]}>
          <p>Would you like to see more work?</p>
          <Link className={styles["projects__portfolio-link"]} href="/projects">
            Open project showcase
          </Link>
          <a
            className={styles["projects__portfolio-link"]}
            href={portfolioRequestUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Request the full portfolio
          </a>
        </footer>
      </div>
    </section>
  );
}
