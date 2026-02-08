import React from "react";
import "./Projects.css";
import ScrollButton from "./ScrollButton.jsx";

/**
 * Projects component - showcases completed projects and portfolio work
 */
function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/images/project2.jpg",
      technologies: ["React", "Spring Boot", "MySQL", "WebSocket"],
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      image: "/images/project3.jpg",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
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
              <img src={project.image} alt={project.title} />
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
