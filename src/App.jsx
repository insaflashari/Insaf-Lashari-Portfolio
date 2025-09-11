import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import TopBanner from "./sections/TopBanner/TopBanner";


function App() {
  return (
    <>
      <TopBanner />
      <Hero />
      
      {/* New paragraph section */}
      <section className="bioSection">
        <div className="bioContainer">
          <p>
            Hi, my name is Insaf Lashari! I'm a 2nd-year Computer Engineering student at the University of Waterloo.
            I’m passionate about building innovative software, exploring cybersecurity, and creating apps and games. I love learning new technologies and collaborating on projects that challenge me to grow and make an impact.
          </p>
        </div>

      </section>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
