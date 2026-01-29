import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">Suresh</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
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
    </div>
  );
}

export default App;
