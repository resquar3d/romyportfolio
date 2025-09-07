import React, { useState } from 'react';

const Navigation = ({ isScrolled, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Journey', id: 'journey' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <a 
        href="#home" 
        className="logo" 
        onClick={(e) => handleNavClick(e, 'home')}
      >
        <span className="logo-icon">🧑‍💻</span>
        <span>R.E. Espino</span>
      </a>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            {item.name}
          </a>
        ))}
        <a 
          href="https://www.facebook.com/reespino" 
          className="nav-cta" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i> Facebook
        </a>
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navigation;