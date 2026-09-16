import { skills } from "../data/portfolio";

const labels = {
  programming: "Programming",
  ai: "AI / Generative AI",
  machineLearning: "Machine Learning",
  backend: "Backend & Web",
  devops: "DevOps & Cloud",
  databases: "Databases",
};

export default function Skills() {
  return (
    <section className="section" id="skills">

      <div className="section-label">
        TECHNICAL ARSENAL
      </div>

      <h2 className="section-heading">
        My <span>toolkit.</span>
      </h2>

      <div className="skills-grid">

        {Object.entries(skills).map(([category, items]) => (

          <div className="skill-card" key={category}>

            <h3>
              {labels[category]}
            </h3>

            <div className="skill-list">

              {items.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}