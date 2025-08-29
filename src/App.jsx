import React, { useState, useEffect } from 'react';
import './styles/globals.css';

// Import components (we'll create these separately)
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [particles, setParticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Generate particles on mount
  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 20
    }));
    setParticles(particleArray);

    // Remove loading screen after delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (currentScroll / scrollHeight) * 100;
      
      setScrollProgress(scrolled);
      setIsScrolled(currentScroll > 50);
      setShowBackToTop(currentScroll > 500);

      // Update active section
      const sections = ['home', 'journey', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Console easter egg
  useEffect(() => {
    console.log('%c👋 Hello, fellow developer!', 'font-size: 24px; font-weight: bold; color: #00c2ff;');
    console.log('%c🚀 Like what you see? Let\'s connect and build something amazing together!', 'font-size: 14px; color: #00ffa3;');
    console.log('%c📧 Contact: romeo.estrada@example.com', 'font-size: 12px; color: #9da8b6;');
    console.log('%c🔗 LinkedIn: https://linkedin.com/in/romeoestradaespino', 'font-size: 12px; color: #9da8b6;');
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <div className="loading-text">Loading Portfolio...</div>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Particles Background */}
      <div className="particles" id="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s linear ${particle.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation 
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Journey />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top visible"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;