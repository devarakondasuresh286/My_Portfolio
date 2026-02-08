import React, { useEffect, useState } from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-me', 'experience', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="brand">Suresh</div>
        <div className="nav-links">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about-me" className={activeSection === 'about-me' ? 'active' : ''}>About Me</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
      </nav>
      <section className="hero" id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Suresh. Explore my work, experience, and skills. Scroll down to know more about me!</p>
      </section>
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
