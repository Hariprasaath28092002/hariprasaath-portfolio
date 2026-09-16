import { stats, personalInfo } from "../data/portfolio";

export default function About() {
  return (
    <section className="section about" id="about">

      <div className="section-label">
        ABOUT ME
      </div>

      <div className="section-title">
        <h2>
          Building things
          <span>that matter.</span>
        </h2>
      </div>

      <div className="about-grid">

        <div className="about-text">

          <p>
            I'm Hariprasaath, an AI/ML & Python Engineer
            focused on building production-grade backend
            systems and intelligent applications.
          </p>

          <p>
            My work spans Generative AI, Retrieval-Augmented
            Generation, Agentic AI, FastAPI, React,
            PostgreSQL and DevOps.
          </p>

          <p>
            I enjoy turning complex problems into reliable,
            scalable and user-focused software.
          </p>

          <div className="location">
            📍 {personalInfo.location}
          </div>

        </div>


        <div className="stats-grid">

          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>

              <strong>{stat.value}</strong>

              <span>{stat.label}</span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}