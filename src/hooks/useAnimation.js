import { useState, useEffect, useCallback } from 'react';

const useAnimation = (options = {}) => {
  const {
    initialDelay = 0,
    duration = 800,
    easing = 'ease',
    triggerOnce = false,
    triggerElement = null
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Function to start animation
  const startAnimation = useCallback(() => {
    if (triggerOnce && hasAnimated) return;
    
    setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, initialDelay);
  }, [initialDelay, triggerOnce, hasAnimated]);
  
  // Function to reset animation
  const resetAnimation = useCallback(() => {
    setIsVisible(false);
  }, []);
  
  // Setup observer if triggerElement is provided
  useEffect(() => {
    if (!triggerElement) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else if (!triggerOnce) {
          resetAnimation();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(triggerElement);
    
    return () => {
      if (triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerElement, startAnimation, resetAnimation, triggerOnce]);
  
  // Create animation style
  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transition: `opacity ${duration}ms ${easing}, transform ${duration}ms ${easing}`,
    willChange: 'opacity, transform'
  };
  
  return {
    isVisible,
    startAnimation,
    resetAnimation,
    animationStyle,
    setIsVisible
  };
};

export default useAnimation; 