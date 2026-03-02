
import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import AboutMe from './components/sections/AboutMe.jsx';
import Experience from './components/sections/Experience.jsx';
import Education from './components/sections/Education.jsx';
import Projects from './components/sections/Projects.jsx';
import Skills from './components/sections/Skills.jsx';
import Contact from './components/sections/Contact.jsx';
import ScrollButton from './components/common/ScrollButton.jsx';
import SkillDetailPage from './pages/SkillDetailPage.jsx';

/**
 * Main App component - renders the complete portfolio with navigation and sections
 */
function PortfolioHome() {
  const aboutRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isTranslating, setIsTranslating] = useState(false);
  const [isTranslatorReady, setIsTranslatorReady] = useState(false);

  const heroSkills = [
    {
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61DAFB"
    },
    {
      name: "Java",
      logo: "https://cdn.simpleicons.org/openjdk/EA2D2E"
    },
    {
      name: "Spring Boot",
      logo: "https://cdn.simpleicons.org/springboot/6DB33F"
    },
    {
      name: "MongoDB",
      logo: "https://cdn.simpleicons.org/mongodb/47A248"
    },
    {
      name: "SQL",
      logo: "https://cdn.simpleicons.org/mysql/4479A1"
    },
    {
      name: "Git",
      logo: "https://cdn.simpleicons.org/git/F05032"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E"
    }
  ];

  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "Java Spring Boot Developer",
    "Content Creator",
    "SEO Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(75);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  useEffect(() => {
    const targetSection = sessionStorage.getItem("scroll-target");
    if (!targetSection) {
      return;
    }

    sessionStorage.removeItem("scroll-target");
    setTimeout(() => {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "bg,hr,cs,da,nl,en,et,fi,fr,de,el,hu,ga,it,lv,lt,mt,pl,pt,ro,sk,sl,es,sv",
            autoDisplay: false
          },
          "google_translate_element"
        );
        setIsTranslatorReady(true);
      }
    };

    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  const setGoogleTranslateCookie = (languageCode) => {
    const translationValue = `/en/${languageCode}`;
    document.cookie = `googtrans=${translationValue};path=/`;
    if (window.location.hostname && window.location.hostname !== "localhost") {
      document.cookie = `googtrans=${translationValue};path=/;domain=.${window.location.hostname}`;
    }
  };

  const forceReloadTranslation = (languageCode) => {
    sessionStorage.setItem("portfolio-force-translate", languageCode);
    window.location.reload();
  };

  const applyGoogleTranslateLanguage = (languageCode, retryCount = 0) => {
    setGoogleTranslateCookie(languageCode);
    const googleCombo = document.querySelector(".goog-te-combo");

    if (googleCombo) {
      googleCombo.value = languageCode;
      googleCombo.dispatchEvent(new Event("change", { bubbles: true }));
      setTimeout(() => setIsTranslating(false), 900);
      return;
    }

    if (retryCount < 15) {
      setTimeout(() => applyGoogleTranslateLanguage(languageCode, retryCount + 1), 200);
    } else {
      setIsTranslating(false);
      forceReloadTranslation(languageCode);
    }
  };

  useEffect(() => {
    const forcedLanguage = sessionStorage.getItem("portfolio-force-translate");
    if (forcedLanguage && forcedLanguage === selectedLanguage) {
      sessionStorage.removeItem("portfolio-force-translate");
    }
  }, [selectedLanguage]);

  useEffect(() => {
    if (!isTranslatorReady) {
      return;
    }

    setIsTranslating(true);
    localStorage.setItem("portfolio-language", selectedLanguage);
    document.documentElement.lang = selectedLanguage;
    applyGoogleTranslateLanguage(selectedLanguage);
  }, [selectedLanguage, isTranslatorReady]);

  const handleLanguageChange = (event) => {
    const languageCode = event.target.value;
    setSelectedLanguage(languageCode);
  };

  const handleContactClick = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div id="google_translate_element" className="google-translate-element"></div>
      <nav className="navbar">
        <div className="brand">Suresh</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <select
            className="language-select notranslate"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            disabled={isTranslating || !isTranslatorReady}
            aria-label="Select language"
            translate="no"
          >
            <option value="bg" translate="no">Bulgarian</option>
            <option value="hr" translate="no">Croatian</option>
            <option value="cs" translate="no">Czech</option>
            <option value="da" translate="no">Danish</option>
            <option value="nl" translate="no">Dutch</option>
            <option value="en" translate="no">English</option>
            <option value="et" translate="no">Estonian</option>
            <option value="fi" translate="no">Finnish</option>
            <option value="fr" translate="no">French</option>
            <option value="de" translate="no">German</option>
            <option value="el" translate="no">Greek</option>
            <option value="hu" translate="no">Hungarian</option>
            <option value="ga" translate="no">Irish</option>
            <option value="it" translate="no">Italian</option>
            <option value="lv" translate="no">Latvian</option>
            <option value="lt" translate="no">Lithuanian</option>
            <option value="mt" translate="no">Maltese</option>
            <option value="pl" translate="no">Polish</option>
            <option value="pt" translate="no">Portuguese</option>
            <option value="ro" translate="no">Romanian</option>
            <option value="sk" translate="no">Slovak</option>
            <option value="sl" translate="no">Slovenian</option>
            <option value="es" translate="no">Spanish</option>
            <option value="sv" translate="no">Swedish</option>
          </select>
          <span
            className={`language-status notranslate ${isTranslating ? "visible" : ""}`}
            aria-live="polite"
            translate="no"
          >
            {isTranslating ? "Translating..." : ""}
          </span>
        </div>
      </nav>
      <section className="hero" id="home">
        <div className="stars-background">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="hero-container">
          <div className="hero-left">
            <h5 className="hero-main-heading">Hi, I'm Suresh</h5>
            <div className="typing-wrapper notranslate" translate="no">
              <span className="typing-text">{displayedText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">Transforming ideas into elegant solutions through code</p>
            <div className="hero-actions">
              <a className="hero-btn primary" href="#contact">Download CV</a>
              <a className="hero-btn secondary" href="#contact" onClick={handleContactClick}>Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.048-8.814 0-9.737h3.554v1.377c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.736 1.395 3.736 4.393v5.577zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.768-1.715 1.959-1.715 1.188 0 1.914.76 1.938 1.715 0 .953-.75 1.715-1.982 1.715zm1.946 11.597H3.392V9.715h3.891v10.737zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://github.com/devarakondasuresh286" target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-link whatsapp" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961c0 1.927.619 3.71 1.756 5.179l-.921 2.762 2.831-.934a6.962 6.962 0 005.295 2.304h.005c3.846 0 6.962-3.121 6.962-6.961a6.961 6.961 0 00-6.962-6.961M2.399.581A11.9 11.9 0 000 12c0 6.657 5.343 12 11.907 12 2.534 0 4.843-.744 6.8-2.034l5.034 1.659-1.689-5.08c1.372-1.988 2.131-4.323 2.131-6.545C23.907 5.343 18.564 0 11.907 0 8.998 0 6.247 1.038 2.399.581z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-tech-visual" aria-label="Animated tech stack background">
              <div className="hero-gradient-blob blob-1" aria-hidden="true"></div>
              <div className="hero-gradient-blob blob-2" aria-hidden="true"></div>
              <div className="hero-gradient-blob blob-3" aria-hidden="true"></div>

              <div className="hero-floating-logos" aria-label="Floating technology and project logos">
                {heroSkills.map((skill) => (
                  <div key={skill.name} className="hero-logo-node skill-node" title={skill.name}>
                    <img src={skill.logo} alt={skill.name} className="hero-skill-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ScrollButton targetId="about-me" />
      </section>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/skills/:skillId" element={<SkillDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
