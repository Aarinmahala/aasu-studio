import React, { useEffect } from 'react';
import HeroSection from '../components/Hero/HeroSection';

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      {/* Additional sections will be added here as they are developed */}
    </div>
  );
};

export default Home; 