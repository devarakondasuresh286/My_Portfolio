import React from "react";
import "./Experience.css";
import ScrollButton from "./ScrollButton.jsx";

/**
 * Experience component - displays work experience with animated vertical timeline
 */
function Experience() {
  const experiences = [
    {
      id: 1,
      title: "My Portfolio",
      year: "2026",
      description: "Designed and developed my personal portfolio using React and Vite to showcase projects, skills, and professional work"
    },
    {
      id: 2,
      title: "About the People",
      year: "2023",
      description: "Worked on a news posting website, contributed as a team member, and developed key parts of the platform."
    },
    {
      id: 3,
      title: "Cafe Crew Member",
      year: "2022",
      description: "Prepared orders and maintained hygiene standards"
    },
    {
      id: 4,
      title: "Sales Intern",
      year: "2021",
      description: "Assisted sales team and managed customer inquiries"
    },
    {
      id: 5,
      title: "Warehouse Helper",
      year: "2020",
      description: "Organized inventory and supported logistics operations"
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
