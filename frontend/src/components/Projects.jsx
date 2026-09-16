import { GitBranch, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="projects">

      <div className="section-label">
        FEATURED WORK
      </div>

      <h2 className="section-heading">
        Things I've <span>built.</span>
      </h2>

      <div className="projects-container">

        {projects.map((project) => (

          <article
            className={`project-card ${
              project.featured ? "featured" : ""
            }`}
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-content">

              <span className="project-category">
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-links">

                {project.github !== "#" && (
                  <a href={project.github}>
                    <GitBranch size={18} />
                    GitHub
                  </a>
                )}

                <a href="#contact">
                  <ExternalLink size={18} />
                  Discuss Project
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}