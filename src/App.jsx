
import React, { useEffect, useRef } from 'react';
import './App.css';

import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import ScrollButton from './ScrollButton.jsx';

/**
 * Main App component - renders the complete portfolio with navigation and sections
 */
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
        <div className="hero-container">
          <div className="hero-left">
            <p className="hero-greeting">Hi, I'm Suresh</p>
            <h1 className="hero-subtitle">Software Engineer & Web Developer</h1>
            <p className="hero-description">Transforming ideas into elegant solutions through code</p>
            <div className="hero-actions">
              <a className="hero-btn primary" href="#contact">Hire Me</a>
              <a className="hero-btn secondary" href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="profile-image-container">
              <img src="/images/profile.png" alt="Suresh" className="profile-image" />
            </div>
          </div>
        </div>
        <ScrollButton targetId="about-me" />
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
