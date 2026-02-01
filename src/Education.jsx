import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>XYZ University</p>
          <span>2020 - 2024</span>
        </div>
        <div className="education-item">
          <h3>High School</h3>
          <p>ABC Senior Secondary School</p>
          <span>2018 - 2020</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
