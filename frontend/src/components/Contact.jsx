import { useState } from "react";
import {
  GitBranch,
  Mail,
  Send,
} from "lucide-react";

import { personalInfo } from "../data/portfolio";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("Sending...");

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {

        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {
        setStatus("Something went wrong.");
      }

    } catch (error) {

      console.error(error);

      setStatus(
        "Unable to send message. Please contact me directly."
      );
    }
  };

  return (
    <section className="section contact" id="contact">

      <div className="section-label">
        GET IN TOUCH
      </div>

      <div className="contact-grid">

        <div className="contact-info">

          <h2>
            Let's build
            <span> something.</span>
          </h2>

          <p>
            I'm always interested in discussing AI,
            Generative AI, backend engineering and
            interesting software projects.
          </p>

          <div className="contact-links">

            <a href={`mailto:${personalInfo.email}`}>
              <Mail size={19} />
              {personalInfo.email}
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
            >
              <span className="linkedin-icon">in</span>
              LinkedIn
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
            >
              <GitBranch size={19} />
              GitHub
            </a>

          </div>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="input-group">

            <label>Message</label>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />

          </div>


          <button type="submit">
            Send Message
            <Send size={17} />
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}