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
      description: "A home-exchange platform with secure user workflows and responsive web interfaces.",
      image: "/images/NestChange.png",
      technologies: ["JavaScript", "HTML", "CSS", "PHP", "SQL"],
      showLiveDemo: false,
      liveDemo: "https://nestchange-production-5182.up.railway.app/",
      github: "https://github.com/devarakondasuresh286/NestChange"
    },
    {
      id: 2,
      title: "Onride Rentals",
      description: "A full-stack vehicle rental platform with authentication, booking management, reviews, and an admin dashboard.",
      image: "/images/Onriderentals.png",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Python", "FastAPI", "MySQL"],
      showLiveDemo: false,
      liveDemo: "#",
      github: "https://github.com/devarakondasuresh286/Onride_rentals"
    },
    {
      id: 3,
      title: "Invoice VAT System",
      description: "A backend REST API for invoice and VAT management with CRUD operations and tax calculation.",
      image: "/images/invoice_vat_system.png",
      technologies: ["Java", "Spring Boot", "Spring Security", "REST API", "Postman", "MySQL", "PostgreSQL"],
      showLiveDemo: false,
      liveDemo: "#",
      github: "https://github.com/devarakondasuresh286/invoicehub-backend"
    },
    {
      id: 4,
      title: "My Portfolio",
      description: "A responsive portfolio website showcasing projects, technical skills, and professional experience.",
      image: "/images/portfolio.png",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
      showLiveDemo: true,
      liveDemo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Smart Trip Planner",
      description: "A desktop application for itinerary planning and route optimization with an interactive JavaFX interface.",
      image: "/images/smarttripplanner.png",
      technologies: ["Java", "JavaFX", "Maven", "SQLite"],
      showLiveDemo: false,
      liveDemo: "#",
      github: "https://github.com/devarakondasuresh286/smart-trip-planner"
    },
    {
      id: 6,
      title: "About the People",
      description: "A news publishing platform where users can browse and manage articles through a scalable full-stack architecture.",
      image: "/images/about the people.png",
      imageClass: "contain-image",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Express.js", "Node.js", "MongoDB"],
      showLiveDemo: false,
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
                {project.showLiveDemo && (
                  <a href={project.liveDemo} className="project-btn live-demo" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
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
