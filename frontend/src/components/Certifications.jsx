import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section className="section" id="certifications">

      <div className="section-label">
        CERTIFICATIONS
      </div>

      <h2 className="section-heading">
        Always <span>learning.</span>
      </h2>

      <div className="cert-grid">

        {certifications.map((cert, index) => (

          <div className="cert-card" key={cert}>

            <div className="cert-icon">
              <Award size={22} />
            </div>

            <div>
              <span className="cert-number">
                0{index + 1}
              </span>

              <h3>{cert}</h3>

              {cert.includes("In Progress") ? (
                <span className="cert-progress">
                  In Progress
                </span>
              ) : (
                <span className="cert-complete">
                  <CheckCircle2 size={14} />
                  Completed
                </span>
              )}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}