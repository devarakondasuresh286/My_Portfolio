import React from "react";
import "./Skills.css";
import ScrollButton from "./ScrollButton.jsx";

/**
 * Skills component - lists technical skills and competencies
 */
function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { 
          name: "HTML", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <path fill="#E34C26" d="M20 10L15 90L50 100L85 90L80 10Z"/>
              <path fill="#EF652A" d="M50 15V94L76 84L80 16Z"/>
              <path fill="white" d="M30 30h40v15H30zm0 20h35v15H30zm0 20h30v15H30z"/>
            </svg>
          )
        },
        { 
          name: "CSS", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <path fill="#264DE4" d="M20 10L15 90L50 100L85 90L80 10Z"/>
              <path fill="#2965F1" d="M50 15V94L76 84L80 16Z"/>
              <path fill="white" d="M35 40h30v12H35zm0 16h25v12H35zm0 16h20v12H35z"/>
            </svg>
          )
        },
        { 
          name: "JavaScript", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <rect fill="#F1DB4F" width="100" height="100" rx="10"/>
              <text x="50" y="60" textAnchor="middle" fontSize="56" fontWeight="bold" fill="#333">JS</text>
            </svg>
          )
        },
        { 
          name: "React", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#61DAFB" strokeWidth="3"/>
              <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
              <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="#61DAFB" strokeWidth="3"/>
              <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 50 50)"/>
              <ellipse cx="50" cy="50" rx="25" ry="10" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 50 50)"/>
            </svg>
          )
        }
      ]
    },
    {
      category: "Backend",
      skills: [
        { 
          name: "Java", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <path fill="#007396" d="M35 70c-5 0-8-3-8-8v-30c0-5 3-8 8-8h30c5 0 8 3 8 8v30c0 5-3 8-8 8H35z"/>
              <path fill="#fff" d="M45 55c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5zm15 0c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5z"/>
              <path fill="#007396" d="M50 15c0-5 3-8 8-8h15c5 0 8 3 8 8v10h-5v-8h-8v8h-5v-5h-13z"/>
            </svg>
          )
        },
        { 
          name: "Spring Boot", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#6DB33F" strokeWidth="3"/>
              <path fill="#6DB33F" d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"/>
              <path fill="#6DB33F" d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"/>
            </svg>
          )
        }
      ]
    },
    {
      category: "Database",
      skills: [
        { 
          name: "SQL", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <path fill="#336791" d="M20 30h60v40H20z"/>
              <path fill="#559DB3" d="M20 40h60v5H20zm0 10h60v5H20zm0 10h60v5H20z"/>
              <text x="50" y="70" textAnchor="middle" fontSize="28" fontWeight="bold" fill="white">SQL</text>
            </svg>
          )
        },
        { 
          name: "MongoDB", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <defs>
                <linearGradient id="mongoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#13AA52"/>
                  <stop offset="100%" stopColor="#0B6623"/>
                </linearGradient>
              </defs>
              <path fill="url(#mongoGrad)" d="M50 15c0 0-25 10-25 35s12 35 25 50c13-15 25-25 25-50s-25-35-25-35z"/>
              <circle cx="50" cy="50" r="8" fill="white"/>
            </svg>
          )
        }
      ]
    },
    {
      category: "Tools",
      skills: [
        { 
          name: "Git", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <circle cx="35" cy="35" r="8" fill="none" stroke="#F1502F" strokeWidth="2"/>
              <circle cx="65" cy="35" r="8" fill="none" stroke="#F1502F" strokeWidth="2"/>
              <circle cx="50" cy="65" r="8" fill="none" stroke="#F1502F" strokeWidth="2"/>
              <line x1="35" y1="43" x2="50" y2="57" stroke="#F1502F" strokeWidth="2"/>
              <line x1="65" y1="43" x2="50" y2="57" stroke="#F1502F" strokeWidth="2"/>
            </svg>
          )
        },
        { 
          name: "GitHub", 
          logo: (
            <svg viewBox="0 0 100 100" className="skill-logo">
              <path fill="#181717" d="M50 15c-19.3 0-35 15.7-35 35 0 15.5 10 28.6 23.8 33.2 1.7.3 2.3-.7 2.3-1.6v-5.7c-9.7 2.1-11.8-4.7-11.8-4.7-1.6-4-3.8-5-3.8-5-3.1-2.1.2-2.1.2-2.1 3.4.2 5.2 3.5 5.2 3.5 3 5.2 7.9 3.7 9.8 2.8.3-2.2 1.2-3.7 2.1-4.6-7.5-.8-15.4-3.8-15.4-16.8 0-3.7 1.3-6.8 3.5-9.2-.4-1-.1-2.3.3-5.6-1.1-.3-3.7 1.2-3.7 1.2-1.1-.3-2.3-.5-3.5-.5s-2.4.2-3.5.5c0 0-2.6-1.5-3.7-1.2.4 3.2.7 4.6.3 5.6 2.2 2.4 3.5 5.5 3.5 9.2 0 13-7.9 16-15.4 16.8 1 .8 1.9 2.3 1.9 4.6v6.8c0 .9.6 1.9 2.3 1.6C75 78.6 85 65.5 85 50c0-19.3-15.7-35-35-35z"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      
      <div className="skills-container">
        {skillsData.map((group, groupIndex) => (
          <div key={groupIndex} className="skill-category">
            <h3 className="category-title">{group.category}</h3>
            <div className="skills-grid">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <div className="skill-logo-wrapper">
                    {skill.logo}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <ScrollButton targetId="contact" />
    </section>
  );
}

export default Skills;
