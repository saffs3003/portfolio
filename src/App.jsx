import "./App.css";
// import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

import Nav from "./sections/NavBar/Nav";
import Hero from "./sections/Hero/Hero";
import Experience from "./sections/Experience/Experience";
import AboutMe from "./sections/AboutMe/AboutMe";
import Glow from "./common/Glow";

function App() {
  return (
    <>
      <div className="layout">
        <Glow />
        <aside className="sidebar">
          <Nav />
        </aside>

        <main className="content">
          <Hero />
          <AboutMe />
          <Experience />
          <Skills />
          <Projects />

          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
