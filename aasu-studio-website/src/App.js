import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import WorkLibrary from './pages/WorkLibrary';
import Contact from './pages/Contact';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Styles
import './styles/globals.css';
import './styles/animations.css';

function App() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/work-library" element={<WorkLibrary />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 