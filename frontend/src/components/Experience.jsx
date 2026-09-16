import { Briefcase, ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">

      <div className="section-label">
        EXPERIENCE
      </div>

      <h2 className="section-heading">
        Where I've <span>worked.</span>
      </h2>

      <div className="experience-container">

        {experience.map((item, index) => (

          <article className="experience-item" key={item.period}>

            <div className="experience-line">

              <div className="experience-dot">
                <Briefcase size={15} />
              </div>

              {index !== experience.length - 1 && (
                <div className="timeline-line" />
              )}

            </div>

            <div className="experience-content">

              <div className="experience-top">

                <div>
                  <span className="experience-period">
                    {item.period}
                  </span>

                  <h3>{item.role}</h3>

                  <p className="company">
                    {item.company}
                    <span> · {item.location}</span>
                  </p>
                </div>

                <ArrowUpRight size={22} />

              </div>

              <ul>

                {item.description.map((point) => (
                  <li key={point}>
                    {point}
                  </li>
                ))}

              </ul>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}