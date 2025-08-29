import React from 'react';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/resquar3d' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/romeoestradaespino' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/reespino' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/resquar3d' },
    { icon: 'fab fa-youtube', url: 'https://youtube.com/@romeoestrada' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/resquar3d' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              className="social-link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.icon.replace('fab fa-', '')}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        
        <p className="footer-text">
          Bridging Administrative and Technology | Creating Digital Solutions with Purpose
        </p>
        
        <div className="footer-copyright">
          © Developed 2025 • Romeo Estrada Espino • TwinSparks Developer • All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;