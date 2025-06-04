import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo-text">
            <span className="red-letter">a</span>AS
            <span className="red-letter">u</span> STUDIO
          </span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1>Welcome to AaSu Studio</h1>
            <p>Professional Photography & Videography Services</p>
            <button className="cta-button">Book Now</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} AaSu Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
