import React from 'react';

const Projects = () => {
  const projectsData = [
    {
      title: 'TwinSparks Trail',
      type: 'Travel Blog Platform',
      description: 'A sophisticated, fully-featured travel blog application that runs entirely in the browser. Features rich markdown editing, local storage, and beautiful dark theme design.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      gradient: 'linear-gradient(135deg, #00c2ff, #00ffa3)',
      demo: '#',
      github: 'https://github.com/resquar3d'
    },
    {
      title: 'Portfolio Designer Pro',
      type: 'Portfolio Design System',
      description: 'Modern portfolio templates and design system for professionals. Features responsive layouts, multiple themes, and customizable components for showcasing work and achievements.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      demo: '#',
      github: '#'
    },
    {
      title: 'Cake Recipe Generator',
      type: 'Cake Recipe Management',
      description: 'Comprehensive recipe management system for bakers. Organize cake recipes, calculate ingredients, manage costs, and share creations with a community of baking enthusiasts.',
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
      demo: '#',
      github: '#'
    },
    {
      title: 'Healthy Recipe Management',
      type: 'Healthy Recipe Management',
      description: 'Smart recipe platform focused on nutrition and health. Track calories, manage meal plans, generate shopping lists, and discover healthy recipes tailored to dietary preferences.',
      tech: ['React', 'Python', 'PostgreSQL', 'Nutrition API'],
      gradient: 'linear-gradient(135deg, #00ff88, #00d4ff)',
      demo: '#',
      github: '#'
    },
    {
      title: 'Wincked Date',
      type: 'Dating Site Management',
      description: 'Full-featured dating platform with advanced matching algorithms, real-time chat, profile verification, and admin dashboard for site management and user safety.',
      tech: ['Next.js', 'Firebase', 'WebRTC', 'AI Matching'],
      gradient: 'linear-gradient(135deg, #ff6b6b, #ff00e5)',
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Diverse Web Applications Showcasing Technical Versatility</p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div 
                className="project-image" 
                style={{ background: project.gradient }}
              ></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-type">{project.type}</p>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} className="project-link">
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;