import React from "react";
import "./AboutMe.css";
import ScrollButton from "./ScrollButton.jsx";

/**
 * AboutMe component - displays personal introduction and skills highlights
 */
function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2>Hey there, I'm Suresh</h2>
      <div className="about-content">
        <p>
          I'm a full-stack developer who enjoys building clean, scalable applications from frontend to backend.
          On the frontend, I work with <span className="highlight-frontend">React</span> to create responsive and user-friendly interfaces.
          On the backend, I use <span className="highlight-backend">Java</span> with <span className="highlight-backend">Spring Boot</span>, designing APIs backed by <span className="highlight-database">SQL</span> and <span className="highlight-database">MongoDB</span> databases.
          Alongside coding, I also enjoy <span className="highlight-skill">content writing</span> and <span className="highlight-skill">SEO</span>, making sure not only the code works—but the content reaches the right audience.
        </p>
        <div className="decorative-bar"></div>
        
        <h3 className="why-work-title">Why Work With Me?</h3>
        <div className="why-work-grid">
          <div className="why-work-item">
            <span className="checkmark">✔</span>
            <span>Strong problem-solving mindset</span>
          </div>
          <div className="why-work-item">
            <span className="checkmark">✔</span>
            <span>Clean and readable code</span>
          </div>
          <div className="why-work-item">
            <span className="checkmark">✔</span>
            <span>Frontend & backend understanding</span>
          </div>
          <div className="why-work-item">
            <span className="checkmark">✔</span>
            <span>Detail-oriented approach</span>
          </div>
          <div className="why-work-item">
            <span className="checkmark">✔</span>
            <span>Consistent and reliable</span>
          </div>
        </div>
      </div>
      <ScrollButton targetId="experience" />
    </section>
  );
}

export default AboutMe;
