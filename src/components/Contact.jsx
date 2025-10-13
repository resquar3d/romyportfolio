import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "resquar3d@gmail.com",
      link: "mailto:resquar3d@gmail.com",
    },
    {
      icon: "fab fa-phone",
      label: "Phone",
      value: "+31 (06) 41723115",
      link: "tel:+31641723115",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "/in/romeoestradaespino",
      link: "https://www.linkedin.com/in/reespino",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Available for Remote & Hybrid",
      link: null,
    },
  ];

  return (
    <section
      className='contact'
      id='contact'
    >
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title'>Let's Connect</h2>
          <p className='section-subtitle'>
            Ready to innovate at the intersection of administrative support and
            technology
          </p>
          <p className='section-subtitle'>
            Accepting New Opportunities, Collaborations and Freelances
          </p>
        </div>

        <div className='contact-content'>
          <div className='contact-info'>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className='contact-item'
              >
                <div className='contact-icon'>
                  <i className={item.icon}></i>
                </div>
                <div className='contact-text'>
                  <div className='contact-label'>{item.label}</div>
                  {item.link ? (
                    <a
                      href={item.link}
                      className='contact-value'
                      target={
                        item.link.startsWith("mailto") ? "_self" : "_blank"
                      }
                      rel='noopener noreferrer'
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className='contact-value'>{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='contact-cta'>
            <a
              href='mailto:resquar3d@gmail.com'
              className='btn btn-primary'
            >
              <i className='fas fa-paper-plane'></i> Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
