import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";
import styles from "./Projects.module.css";

const portfolioRequestUrl = `${
  portfolioContent.contact.whatsappUrl
}?text=${encodeURIComponent(`${portfolioContent.projectsSection.portfolioRequestMessage}`)}`;

export default function Projects() {
  return (
    <section
      className={styles.projects}
      id="projects"
      data-section-spacing="standard"
      aria-labelledby="projects-title"
    >
      <div className={styles["projects__content"]}>
        <header
          className={styles["projects__header"]}
          data-aos="zoom-in"
          suppressHydrationWarning
        >
          <p className={styles["projects__eyebrow"]}>
            {portfolioContent.projectsSection.eyebrow}
          </p>
          <h2 className={styles["projects__title"]} id="projects-title">
            {portfolioContent.projectsSection.title}
          </h2>
          <p className={styles["projects__intro"]}>
            {portfolioContent.projectsSection.intro}
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
                {portfolioContent.projectsSection.previewUnavailableLabel}
              </p>

              <div className={styles["projects__badges"]}>
                {project.favorite && (
                  <span className={styles["projects__badge"]}>
                    {portfolioContent.projectsSection.featuredLabel}
                  </span>
                )}
                {project.verificationNeeded && (
                  <span className={styles["projects__badge"]}>
                    {portfolioContent.projectsSection.verificationLabel}
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
                    {
                      portfolioContent.projectsSection
                        .technologyUnavailableLabel
                    }
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
                    {portfolioContent.projectsSection.caseStudyLabel}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolioContent.projectsSection.liveProjectLabel}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {portfolioContent.projectsSection.sourceCodeLabel}
                  </a>
                )}
                {!project.caseStudyUrl &&
                  !project.liveUrl &&
                  !project.githubUrl && (
                    <span className={styles["projects__placeholder"]}>
                      {portfolioContent.projectsSection.linksUnavailableLabel}
                    </span>
                  )}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles["projects__footer"]}>
          <p>{portfolioContent.projectsSection.footerPrompt}</p>
          <Link className={styles["projects__portfolio-link"]} href="/projects">
            {portfolioContent.projectsSection.openShowcaseLabel}
          </Link>
          <a
            className={styles["projects__portfolio-link"]}
            href={portfolioRequestUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {portfolioContent.projectsSection.requestPortfolioLabel}
          </a>
        </footer>
      </div>
    </section>
  );
}
