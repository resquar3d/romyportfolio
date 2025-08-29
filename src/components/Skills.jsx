import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      skills: [
        'HTML5, CSS3, JavaScript',
        'React, Responsive Design',
        'UI/UX Implementation',
        'Modern Web Standards'
      ]
    },
    {
      icon: 'fas fa-laptop-medical',
      title: 'Technical Support',
      skills: [
        'Computer Repair & Maintenance',
        'Software Installation',
        'System Management',
        'Hardware Troubleshooting'
      ]
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Business Management',
      skills: [
        'Entrepreneurship',
        'Client Relations',
        'Project Management',
        'Financial Operations'
      ]
    },
    {
      icon: 'fas fa-users',
      title: 'Customer Service',
      skills: [
        'Communication Excellence',
        'Salesmanship',
        'Cash Management',
        'Retail Operations'
      ]
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Administrative',
      skills: [
        'Office Administration',
        'Documentation Management',
        'Data Entry & Processing',
        'Government Procedures'
      ]
    },
    {
      icon: 'fas fa-seedling',
      title: 'Specialized Skills',
      skills: [
        'Landscaping Design',
        'Garden Management',
        'Insurance Processing',
        'Multi-lingual Communication'
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Skills</h2>
          <p className="section-subtitle">25+ Years of Diverse Expertise Across Multiple Industries</p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <div className="skill-list">
                {skill.skills.map((item, i) => (
                  <React.Fragment key={i}>
                    {item}
                    {i < skill.skills.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;