import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Frontend Developer Intern</h3>
          <p>ABC Tech Solutions</p>
          <span>June 2024 - August 2024</span>
          <ul>
            <li>Developed responsive web pages using React and CSS.</li>
            <li>Collaborated with designers to improve UI/UX.</li>
            <li>Wrote unit tests for new features.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Web Development Bootcamp</h3>
          <p>Online Course</p>
          <span>March 2024 - May 2024</span>
          <ul>
            <li>Built several small projects using HTML, CSS, and JavaScript.</li>
            <li>Learned about REST APIs and asynchronous programming.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
