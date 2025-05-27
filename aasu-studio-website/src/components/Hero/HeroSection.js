import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  // Background images/videos array
  const backgroundMedia = [
    {
      type: 'image',
      src: '/assets/images/wedding-hero-1.jpg',
      alt: 'Wedding Photography'
    },
    {
      type: 'image', 
      src: '/assets/images/event-hero-2.jpg',
      alt: 'Event Photography'
    },
    {
      type: 'video',
      src: '/assets/videos/wedding-highlight.mp4',
      alt: 'Wedding Videography'
    }
  ];

  // Typewriter text options
  const typewriterTexts = [
    "Capturing Life's Beautiful Moments",
    "Creating Timeless Wedding Memories",
    "Professional Event Photography",
    "Your Story, Our Artistry"
  ];

  // Auto slideshow effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundMedia.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [backgroundMedia.length]);

  // Typewriter effect
  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout;

    const typewriterEffect = () => {
      const currentFullText = typewriterTexts[currentTextIndex];
      
      if (isDeleting) {
        setTypewriterText(currentFullText.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
          timeout = setTimeout(typewriterEffect, 500);
        } else {
          timeout = setTimeout(typewriterEffect, 50);
        }
      } else {
        setTypewriterText(currentFullText.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentFullText.length) {
          timeout = setTimeout(() => {
            isDeleting = true;
            typewriterEffect();
          }, 2000);
        } else {
          timeout = setTimeout(typewriterEffect, 100);
        }
      }
    };

    timeout = setTimeout(typewriterEffect, 1000);
    
    return () => clearTimeout(timeout);
  }, [typewriterTexts]);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Particle animation effect
  useEffect(() => {
    if (particlesRef.current) {
      createParticles();
    }
  }, []);

  const createParticles = () => {
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
    
    // Handle window resize for canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  const handleBookingClick = () => {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handlePortfolioClick = () => {
    document.getElementById('portfolio').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className={`hero-section ${isVisible ? 'visible' : ''}`}
      ref={heroRef}
    >
      <canvas 
        ref={particlesRef} 
        className="particles-canvas"
      ></canvas>
      
      <div className="background-slider">
        {backgroundMedia.map((media, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {media.type === 'image' ? (
              <img 
                src={media.src} 
                alt={media.alt}
                className="background-media"
              />
            ) : (
              <video 
                src={media.src}
                autoPlay
                muted
                loop
                className="background-media"
              />
            )}
          </div>
        ))}
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="logo-text">
              <span className="red-letter">a</span>AS
              <span className="red-letter">u</span> STUDIO
            </span>
          </h1>
          
          <h2 className="hero-subtitle">
            {typewriterText}
            <span className="cursor">|</span>
          </h2>
          
          <p className="hero-description">
            Professional Photography & Videography for Weddings, Events & Personal Sessions
            <br />
            Transforming your precious moments into timeless memories
          </p>
          
          <div className="hero-buttons">
            <button 
              className="cta-button primary"
              onClick={handleBookingClick}
            >
              Book Your Session
              <span className="button-icon">📷</span>
            </button>
            
            <button 
              className="cta-button secondary"
              onClick={handlePortfolioClick}
            >
              View Our Work
              <span className="button-icon">🎬</span>
            </button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to Explore</span>
        </div>
      </div>

      <div className="slide-indicators">
        {backgroundMedia.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 