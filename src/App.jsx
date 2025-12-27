import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Links from "./sections/Links/Links";
import Nav from "./sections/NavBar/Nav";
import Hero from "./sections/Hero/Hero";
import Experience from "./sections/Experience/Experience";

function App() {
  return (
    <>
      <div className="layout">
        <aside className="sidebar">
          <Nav />
        </aside>

        <main className="content">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
