import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AaSu STUDIO</h1>
          <p>Professional Photography & Videography Services</p>
          <Link to="/contact" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section className="services-preview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Wedding Photography</h3>
            <p>Capture your special moments with our professional wedding photography services.</p>
          </div>
          <div className="service-card">
            <h3>Event Photography</h3>
            <p>Professional coverage for all your events and celebrations.</p>
          </div>
          <div className="service-card">
            <h3>Portrait Sessions</h3>
            <p>Beautiful portraits for individuals, families, and corporate needs.</p>
          </div>
        </div>
        <Link to="/services" className="view-more">View All Services</Link>
      </section>
    </div>
  );
};

export default Home; 