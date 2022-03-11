import './App.css';
import Nav from './components/Navbar/Nav';
import AboutMe from './components/AboutMe/AboutMe';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import HEADSHOT from './assets/headshot.jpg';
function App() {
  return (
    <div id='home' className='App'>
      <Nav />
      <h1>Hello</h1>
      <div className='app-container'>
        <div className='picture'>
          <img src={HEADSHOT} />
        </div>
        <AboutMe />
        <TechStack />
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
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
