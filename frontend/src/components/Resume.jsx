import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">

      <div className="resume-card">

        <div className="resume-icon">
          <FileText size={30} />
        </div>

        <span className="section-label">
          CURRICULUM VITAE
        </span>

        <h2>
          Want the complete picture?
        </h2>

        <p>
          Take a closer look at my experience,
          technical skills and projects.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          className="resume-button"
        >
          <Download size={18} />
          View & Download Resume
        </a>

      </div>
      <div className="resume-actions">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="resume-download-btn"
  >
    View Resume
  </a>

  <a
    href="/resume.pdf"
    download="Hariprasaath_Sridhar_Resume.pdf"
    className="resume-download-btn secondary"
  >
    Download Resume
  </a>
</div>

    </section>
  );
}