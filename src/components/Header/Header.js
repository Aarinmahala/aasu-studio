import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef(null);
  const location = useLocation();

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Logo component with red 'a' letters
  const Logo = () => (
    <div className="logo" onClick={() => scrollToSection('home')}>
      <span className="logo-text">
        <span className="red-letter">a</span>a
        <span className="red-letter">u</span> STUDIO
      </span>
    </div>
  );

  return (
    <header 
      ref={headerRef}
      className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="header-container">
        <Logo />
        
        <nav className="desktop-nav">
          {['Home', 'About', 'Services', 'Portfolio', 'Work Library', 'Contact'].map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item.toLowerCase().replace(' ', '') ? 'active' : ''}`}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
            >
              {item}
            </button>
          ))}
        </nav>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {['Home', 'About', 'Services', 'Portfolio', 'Work Library', 'Contact'].map((item) => (
          <button
            key={item}
            className="mobile-nav-link"
            onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header; 