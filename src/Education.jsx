import React from "react";
import "./Education.css";
import ScrollButton from "./ScrollButton.jsx";

/**
 * Education component - displays academic background and qualifications
 */
function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <span className="education-year">2025 - 2027</span>
          <h3>Master's in ISEP</h3>
          <p>Currently pursuing, France</p>
        </div>
        <div className="education-item">
          <span className="education-year">2019 - 2023</span>
          <h3>Bachelor's</h3>
          <p>SRKR Engineering College, Bhimavaram, India</p>
        </div>
        <div className="education-item">
          <span className="education-year">2017 - 2019</span>
          <h3>Intermediate</h3>
          <p>NRI Junior College, India</p>
        </div>
        <div className="education-item">
          <span className="education-year">2017</span>
          <h3>SSC</h3>
          <p>St. Johns, India</p>
        </div>
      </div>
      <ScrollButton targetId="projects" />
    </section>
  );
}

export default Education;
