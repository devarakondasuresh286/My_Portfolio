import React from 'react';

/**
 * ScrollButton component - renders a button that smoothly scrolls to a target section
 * @param {string} targetId - The ID of the section to scroll to
 */
function ScrollButton({ targetId }) {
  /**
   * Scrolls to the target section smoothly
   */
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="scroll-button" onClick={scrollToSection} aria-label={`Scroll to ${targetId}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default ScrollButton;
