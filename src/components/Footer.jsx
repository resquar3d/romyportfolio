import React from "react";

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/resquar3d" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/reespino" },
    { icon: "fab fa-facebook", url: "https://facebook.com/reespino" },
    { icon: "fab fa-instagram", url: "https://instagram.com/resquar3d" },
    { icon: "fab fa-youtube", url: "https://www.youtube.com/@resquar3d534" },
    { icon: "fab fa-twitter", url: "https://twitter.com/resquar3d" },
  ];

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-social'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className='social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.icon.replace("fab fa-", "")}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <p className='footer-text'>
          Bridging Administrative and Technology | Creating Digital Solutions
          with Purpose
        </p>

        <div className='footer-copyright'>
          © Developer 2025 • R.E. Espino • TwinSparks Developement • All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
