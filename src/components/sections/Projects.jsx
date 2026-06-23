import React from "react";
import "./Projects.css";
import ScrollButton from "../common/ScrollButton.jsx";

/**
 * Projects component - showcases completed projects and portfolio work
 */
function Projects() {
  const projects = [
    {
      id: 1,
      title: "NestChange",
      description: "A modern web application designed to simplify workflows, featuring responsive UI, real-time interactions, and scalable backend integration.",
      image: "/images/NestChange.png",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
      liveDemo: "https://nestchange-production-5182.up.railway.app/",
      github: "#"
    },
    {
      id: 2,
      title: "About the People",
      description: "A news posting website where fresh content is published regularly. I developed this website and also worked as a team member in building and maintaining it.",
      image: "/images/about the people.png",
      imageClass: "contain-image",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Express.js", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      image: "/images/portfolio.png",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Smart Trip Planner",
      description: "A desktop travel planner built with Java and JavaFX for itinerary planning, to-do tracking, budgeting, weather checks, and trip history in one clean app.",
      image: "/images/smarttripplanner.png",
      technologies: ["Java", "JavaFX", "Maven", "SQLite"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Expense Tracker",
      description: "A simple web application to track daily expenses, manage spending, and view real-time summaries with an easy-to-use dashboard.",
      image: "/images/expensive_tracker.png",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} className={project.imageClass || ""} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.liveDemo} className="project-btn live-demo" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.github} className="project-btn github" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollButton targetId="skills" />
    </section>
  );
}

export default Projects;
