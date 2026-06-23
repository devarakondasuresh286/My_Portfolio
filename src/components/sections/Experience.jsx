import React from "react";
import "./Experience.css";
import ScrollButton from "../common/ScrollButton.jsx";

/**
 * Experience component - displays work experience with animated vertical timeline
 */
function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Delivery",
      year: "2023",
      description: "Worked as a Full Stack Developer Intern, contributing to web application development, API integration, and database management."
    },
    {
      id: 2,
      title: "AboutThePeople",
      year: "2024",
      description: "Contributed to full-stack web development, building responsive applications and supporting backend services as part of a development team."
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2>My Experience</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
            >
              <div className="timeline-card">
                <div className="card-content">
                  <h3 className="card-title">{exp.title}</h3>
                  <span className="card-year">{exp.year}</span>
                  <p className="card-description">{exp.description}</p>
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
      <ScrollButton targetId="projects" />
    </section>
  );
}

export default Experience;
