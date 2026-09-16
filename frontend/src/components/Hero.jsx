// import { ArrowDown, GitBranch, Mail } from "lucide-react";
// import { motion } from "framer-motion";
// import { personalInfo } from "../data/portfolio";

// export default function Hero() {
//   return (
//     <section className="hero" id="home">

//       <div className="hero-glow glow-one" />
//       <div className="hero-glow glow-two" />

//       <motion.div
//         className="hero-content"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >

//         <p className="eyebrow">
//           Hello, world! 👋
//         </p>
// <img
//   src="/profile.jpg"
//   alt="Hariprasaath Sridhar"
//   className="profile-photo"
// />
//         <h1>
//           Hariprasaath
//           <span>Sridhar.</span>
//         </h1>

//         <h2>
//           {personalInfo.role}
//         </h2>

//         <p className="hero-description">
//           {personalInfo.tagline}
//         </p>

//         <div className="hero-buttons">

//           <a href="#projects" className="primary-btn">
//             Explore My Work
//           </a>

//           <a
//             href="/resume.pdf"
//             target="_blank"
//             className="secondary-btn"
//           >
//             Download Resume
//           </a>

//         </div>

//         <div className="social-links">

//   <a
//     href={personalInfo.github}
//     target="_blank"
//     rel="noreferrer"
//     aria-label="GitHub"
//   >
//     <GitBranch size={20} />
//   </a>

//   <a
//     href={personalInfo.linkedin}
//     target="_blank"
//     rel="noreferrer"
//     aria-label="LinkedIn"
//   >
//     <span className="linkedin-icon">in</span>
//   </a>

//   <a
//     href={`mailto:${personalInfo.email}`}
//     aria-label="Email"
//   >
//     <Mail size={20} />
//   </a>

// </div>  

//       </motion.div>


//       <motion.div
//         className="code-card"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >

//         <div className="code-header">
//           <span />
//           <span />
//           <span />
//         </div>

//         <pre>
// {`const engineer = {
//   name: "Hariprasaath",
//   role: "AI Engineer",

//   stack: [
//     "Python",
//     "FastAPI",
//     "LangChain",
//     "React"
//   ],

//   focus: "Generative AI",
//   status: "Open to opportunities"
// };`}
//         </pre>

//       </motion.div>


//       <a href="#about" className="scroll-indicator">
//         <ArrowDown size={18} />
//         scroll
//       </a>

//     </section>
//   );
// }

import { ArrowDown, GitBranch, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="eyebrow">
          Hello, world! 👋
        </p>

        {/* Profile Photo */}
        <img
          src="/profile.jpg"
          alt="Hariprasaath Sridhar"
          className="profile-photo"
          onError={(e) => {
            console.error("Profile image failed to load:", e.currentTarget.src);
          }}
        />

        <h1>
          Hariprasaath
          <span>Sridhar.</span>
        </h1>

        <h2>{personalInfo.role}</h2>

        <p className="hero-description">
          {personalInfo.tagline}
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            Explore My Work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={20} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="linkedin-icon">in</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="code-card"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="code-header">
          <span />
          <span />
          <span />
        </div>

        <pre>
{`const engineer = {
  name: "Hariprasaath",
  role: "AI Engineer",

  stack: [
    "Python",
    "FastAPI",
    "LangChain",
    "React"
  ],

  focus: "Generative AI",
  status: "Open to opportunities"
};`}
        </pre>

      </motion.div>

      <a href="#about" className="scroll-indicator">
        <ArrowDown size={18} />
        scroll
      </a>

    </section>
  );
}