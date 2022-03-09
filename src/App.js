import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Nav from './components/Navbar/Nav';
import TechStack from './components/TechStack/TechStack';
function App() {
  return (
    <div className='App'>
      <Nav />
      <AboutMe />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;

{
  /* <div id="home-route" className="home-container">
      <img
        className="headshot-img"
        src={Headshot}
        alt="construction-sign"
      />
      <div className="about-me-section">
        <AboutMe />
      </div>
      <div className="tech-stack-section">
        <TechStack />
      </div>
      <div id="project-route" className="projects-section">
        <Projects />
      </div>
      <div id="contact-route" className="contact-section">
        <Contact />
      </div>
    </div> */
}
