import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <span className="logo-text">
                <span className="red-letter">a</span>AS
                <span className="red-letter">u</span> STUDIO
              </span>
            </h3>
            <p className="footer-description">
              Professional photography and videography services for weddings, events, and personal sessions.
            </p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="social-icon">📷</i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="social-icon">📘</i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="social-icon">🎬</i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="social-icon">📱</i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Wedding Photography</a></li>
              <li><a href="#services">Event Photography</a></li>
              <li><a href="#services">Portrait Sessions</a></li>
              <li><a href="#services">Video Production</a></li>
              <li><a href="#services">Corporate Events</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <address className="contact-info">
              <p>📍 123 Photography Lane, Ahmedabad,<br />Gujarat 380001, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ contact@aasustudio.com</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AaSu STUDIO. All rights reserved.</p>
          <p className="footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 