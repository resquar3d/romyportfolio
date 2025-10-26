import React, { useState, useEffect } from "react";
import profileImage from "../assets/profilecard.jpg";

const Hero = ({ scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Add keyframes and @property to document for animated border
  useEffect(() => {
    const styleId = "gradient-border-animation-hero";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        
        @keyframes rotateAngle {
          0% { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        
        .interactive-profile-card {
          position: relative;
          border: 3px solid transparent;
          border-radius: 24px;
          background: 
            linear-gradient(white, white) padding-box,
            conic-gradient(
              from var(--angle) at 50% 50%,
              transparent 0deg,
              #00d4ff 60deg,
              #00ffb3 120deg,
              #00d4ff 180deg,
              transparent 240deg,
              transparent 360deg
            ) border-box;
          animation: rotateAngle 3s linear infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const socialLinks = [
    {
      icon: "fas fa-globe",
      url: "https://twinsparks.dev",
      label: "TwinSparks Website",
      hoverColor: "#00d4ff", // cyan
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/reespino",
      label: "LinkedIn",
      hoverColor: "#3b82f6", // blue-500
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/resquar3d",
      label: "GitHub",
      hoverColor: "#e5e7eb", // gray-200
    },
    {
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/reespino",
      label: "Facebook",
      hoverColor: "#2563eb", // blue-600
    },
    {
      icon: "fab fa-twitter",
      url: "https://twitter.com/resquar3d",
      label: "Twitter",
      hoverColor: "#38bdf8", // sky-400
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:resquar3d@gmail.com",
      label: "Email",
      hoverColor: "#ec4899", // pink-500
    },
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "4", label: "Organizations" },
    { value: "100%", label: "Dedication" },
  ];

  return (
    <section
      className='hero'
      id='home'
    >
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>
            <span className='name'>Romeo Estrada Espino</span>
          </h1>
          <div className='tagline'>
            <span>Frontend Developer</span>
            <div className='tagline-divider'></div>
            <span>Service Professional</span>
          </div>
          <p className='bio'>
            Freelance Frontend Developer since 2024, combining 25+ years of
            customer service excellence with modern web development skills.
            Creating responsive, user-friendly applications while maintaining
            dedication to quality service across diverse industries in the
            Netherlands.
          </p>
          <div className='hero-actions'>
            <button
              className='btn btn-primary'
              onClick={() => scrollToSection("projects")}
            >
              <i className='fas fa-laptop-code'></i> View Projects
            </button>
            <button
              className='btn btn-secondary'
              onClick={() => scrollToSection("contact")}
            >
              <i className='fas fa-envelope'></i> Get in Touch
            </button>
          </div>
        </div>

        <div className='hero-visual'>
          {/* Container for card and stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {/* Interactive Profile Card */}
            <div
              className={isHovered ? "interactive-profile-card" : ""}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                position: "relative",
                width: "420px",
                height: "520px",
                borderRadius: "24px",
                overflow: "hidden",
                backgroundColor: "white",
                boxShadow: isHovered
                  ? "0 70px 80px -40px rgba(0, 212, 255, 0.5)"
                  : "0 20px 40px rgba(0, 0, 0, 0.2)",
                transform: isHovered ? "translateY(-15px)" : "translateY(0)",
                transition: "all 0.5s ease",
              }}
            >
              {/* Profile Image with Zoom Effect */}
              <img
                src={profileImage}
                alt='Romeo Estrada Espino'
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  transform: isHovered
                    ? "scale(1.4) translateX(12%)"
                    : "scale(1)",
                  transformOrigin: "center center",
                  transition: "transform 0.7s ease",
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Dark Overlay - Only visible on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 80%)",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  pointerEvents: "none",
                }}
              />

              {/* Name and Title Overlay - Only visible on hover */}
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "2rem",
                  right: "2rem",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.5s ease",
                  zIndex: 10,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #00ffb3 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Romeo Estrada Espino
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8))",
                  }}
                >
                  Frontend Developer | Service Professional
                </p>
              </div>

              {/* Social Icons - Vertical on left side - Only visible on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.5s ease 0.2s",
                  zIndex: 10,
                }}
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                    rel='noopener noreferrer'
                    aria-label={link.label}
                    style={{
                      color: "white",
                      fontSize: "1.75rem",
                      transition: "all 0.3s ease",
                      filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8))",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: "1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.25)";
                      e.currentTarget.style.color = link.hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats Section - Below the card */}
            <div style={{ width: "420px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2rem",
                  textAlign: "center",
                }}
              >
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        background:
                          "linear-gradient(135deg, #00d4ff 0%, #00ffb3 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        fontWeight: "500",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
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
