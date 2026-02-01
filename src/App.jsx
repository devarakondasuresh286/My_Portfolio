
import React, { useEffect, useRef } from 'react';
import './App.css';

import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';


function App() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7 && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="brand">Suresh</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <section className="hero" id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Suresh. Explore my work, experience, and skills. Scroll down to know more about me!</p>
      </section>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
