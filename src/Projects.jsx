import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio website built with React and Vite.</p>
        </div>
        <div className="project-item">
          <h3>Todo App</h3>
          <p>A simple todo list application using React Hooks and local storage.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
