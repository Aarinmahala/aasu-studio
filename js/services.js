// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                gsap.to(otherItem.querySelector('.faq-answer'), {
                    height: 0,
                    duration: 0.3,
                    ease: 'power2.inOut'
                });
            }
        });

        // Toggle current item
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
            gsap.to(item.querySelector('.faq-answer'), {
                height: 'auto',
                duration: 0.3,
                ease: 'power2.inOut'
            });
        } else {
            gsap.to(item.querySelector('.faq-answer'), {
                height: 0,
                duration: 0.3,
                ease: 'power2.inOut'
            });
        }
    });
});

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// Pricing Cards Animation
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out'
    });
});

// Service Icons Animation
const serviceIcons = document.querySelectorAll('.service-icon i');

serviceIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.transform = `scaleX(${progress / 100})`;
});

// Parallax Effect for Services Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.services-header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Service Features Animation
const serviceFeatures = document.querySelectorAll('.service-features li');

serviceFeatures.forEach((feature, index) => {
    gsap.from(feature, {
        scrollTrigger: {
            trigger: feature,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Pricing Card Hover Effect
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Contact CTA Animation
const contactCTA = document.querySelector('.contact-cta');

gsap.from(contactCTA, {
    scrollTrigger: {
        trigger: contactCTA,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Mobile Menu Animation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    if (navMenu.classList.contains('active')) {
        gsap.from(navMenu.querySelectorAll('li'), {
            y: 20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 