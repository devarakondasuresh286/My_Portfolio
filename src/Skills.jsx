import React from "react";
import "./Skills.css";
import ScrollButton from "./ScrollButton.jsx";

/**
 * Skills component - lists technical skills and competencies
 */
function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Git & GitHub</li>
        <li>Node.js (Basics)</li>
      </ul>
      <ScrollButton targetId="contact" />
    </section>
  );
}

export default Skills;
