import React from 'react';
import profileImage from '../assets/20250728_110021.png';

const Hero = ({ scrollToSection }) => {
  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/romeoestradaespino', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/resquar3d', label: 'GitHub' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/resquar3d', label: 'Twitter' },
    { icon: 'fas fa-envelope', url: 'mailto:resquar3d@gmail.com', label: 'Email' }
  ];

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '4', label: 'Organizations' },
    { value: '100%', label: 'Dedication' }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="name">Romeo Estrada Espino</span>
          </h1>
          <div className="tagline">
            <span>Frontend Developer</span>
            <div className="tagline-divider"></div>
            <span>Service Professional</span>
          </div>
          <p className="bio">
            Freelance Frontend Developer since 2024, combining 25+ years of customer service excellence 
            with modern web development skills. Creating responsive, user-friendly applications while 
            maintaining dedication to quality service across diverse industries in the Netherlands.
          </p>
          <div className="hero-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              <i className="fas fa-laptop-code"></i> View Projects
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              <i className="fas fa-envelope"></i> Get in Touch
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-image-container">
              <img 
                src={profileImage} 
                alt="Romeo Estrada Espino" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-image-fallback" style={{ display: 'none', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--gradient-brand)', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
                RE
              </div>
            </div>
            <div className="profile-info">
              <h3>Romeo Estrada Espino</h3>
              <p className="role">Freelance Frontend Developer | Service Professional</p>
              
              <div className="profile-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="social-link" 
                    target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;