import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { skillDetails } from "../data/skillDetails";
import "./SkillDetailPage.css";

function SkillDetailPage() {
  const navigate = useNavigate();
  const { skillId } = useParams();
  const details = skillDetails[skillId];

  const handleBack = () => {
    sessionStorage.setItem("scroll-target", "skills");
    navigate("/");
  };

  if (!details) {
    return (
      <section className="skill-detail-page">
        <div className="skill-detail-shell page-transition">
          <button className="skill-back-btn" onClick={handleBack}>Back to Skills</button>
          <h1 className="skill-detail-title">Skill not found</h1>
          <p className="skill-detail-overview">This skill detail page is not available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="skill-detail-page">
      <div className="skill-detail-shell page-transition">
        <button className="skill-back-btn" onClick={handleBack}>Back to Skills</button>

        <header className="skill-detail-header">
          <h1 className="skill-detail-title">{details.name}</h1>
          <p className="skill-detail-overview">{details.overview}</p>
        </header>

        <div className="skill-detail-grid">
          <article className="detail-card">
            <h2>Projects Used</h2>
            <ul>
              {details.projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <h2>Challenges Faced</h2>
            <ul>
              {details.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <h2>How I Solved Them</h2>
            <ul>
              {details.solutions.map((solution) => (
                <li key={solution}>{solution}</li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <h2>Key Learnings</h2>
            <ul>
              {details.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SkillDetailPage;
