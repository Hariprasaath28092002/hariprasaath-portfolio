import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Certifications />

        <Resume />

        <Contact />

      </main>

      <footer>

        <p>
          © 2026 Hariprasaath Sridhar
        </p>

        <p>
          Built with React + FastAPI
        </p>

      </footer>

    </div>
  );
}

export default App;