import React, { useState } from 'react';

const Journey = () => {
  const [expandedCards, setExpandedCards] = useState([0]); // First card expanded by default

  const timelineData = [
    {
      date: '2024 - Present',
      title: 'Freelance Frontend Developer',
      organization: 'Self-Employed',
      description: 'Transitioned into web development, specializing in modern frontend technologies. Creating responsive web applications, portfolio sites, and management systems for various clients while continuing service role.',
      tags: ['React', 'JavaScript', 'Responsive Design', 'Web Development']
    },
    {
      date: 'Mar 2020 - Present',
      title: 'Service Employee',
      organization: 'TotalEnergies Zandvoort, Servauto Nederland B.V',
      description: 'Full-time cashier position providing customer service excellence at fuel station. Handling transactions, inventory management, and maintaining service standards in a fast-paced retail environment.',
      tags: ['Customer Service', 'Retail Operations', 'Cash Management']
    },
    {
      date: 'Oct 2011 - Feb 2020',
      title: 'Service Employee',
      organization: 'BP Zandvoort, Commandeur Tankstations B.V',
      description: 'Managed centralized tasks and cashiering responsibilities for 8+ years. Developed strong communication and salesmanship skills while ensuring smooth daily operations and customer satisfaction.',
      tags: ['Communication', 'Salesmanship', 'Office Equipment']
    },
    {
      date: '2004 - 2009',
      title: 'Proprietor Owner',
      organization: "Maro's Garden and Ornamentals",
      description: 'Founded and managed landscaping business specializing in garden design and ornamental plants. Handled all aspects of business ownership including client relations, project management, and financial operations.',
      tags: ['Business Management', 'Landscaping', 'Entrepreneurship']
    },
    {
      date: 'Jan 2003 - Dec 2005',
      title: 'Administrative Employee',
      organization: 'David Life and None-Life Insurance Agency',
      description: 'Provided comprehensive customer service and technical support assistance. Managed office administration tasks, handled telephonic communications, and processed insurance documentation.',
      tags: ['Office Administration', 'Customer Service', 'Technical Support']
    },
    {
      date: '1999 - 2008',
      title: 'Freelance Computer Technician',
      organization: 'Self-Employed',
      description: 'Provided technical services including computer repair, software installation, and system management. Built client base through reliable service and technical expertise in hardware and software solutions.',
      tags: ['Computer Repair', 'Software Installation', 'IT Support']
    },
    {
      date: 'Jan 1999 - Dec 2002',
      title: 'Administrative Employee',
      organization: 'Satelite Office National Bureau Of Investigation',
      description: 'Contract position handling administrative duties for government agency. Managed public service documentation, cahiering responsibilities, and supported investigative operations through clerical assistance.',
      tags: ['Public Service', 'Government', 'Documentation']
    }
  ];

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter(i => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };

  return (
    <section className="journey" id="journey">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Over 25 Years of Service Excellence & Technical Expertise</p>
        </div>
        
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-dot"></div>
              <div className={`timeline-content ${expandedCards.includes(index) ? 'expanded' : 'collapsed'}`}>
                <div 
                  className="timeline-header"
                  onClick={() => toggleCard(index)}
                >
                  <div>
                    <h3>{item.title}</h3>
                    <p className="organization">{item.organization}</p>
                  </div>
                  <button className="expand-btn" aria-label="Toggle details">
                    <i className={`fas fa-chevron-${expandedCards.includes(index) ? 'up' : 'down'}`}></i>
                  </button>
                </div>
                
                <div className="timeline-body">
                  <p>{item.description}</p>
                  <div className="timeline-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
