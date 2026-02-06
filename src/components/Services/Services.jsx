import './Services.css'
const Services = () => {
  const services = [
    {
      id: 'icu-nursing',
      icon: 'fas fa-hospital-user',
      title: 'ICU/ICU Trained Nursing Staff',
      description: 'Professional ICU-trained nurses for critical care at home with ventilator support and continuous monitoring.',
      features: [
        'Ventilator care specialists',
        'Critical care monitoring',
        'Medication administration',
        'Emergency response trained',
        '24/7 nurse availability'
      ],
      featured: true
    },
    {
      id: 'elder-care',
      icon: 'fas fa-user-friends',
      title: 'Elder Care & Baby Care Staff',
      description: 'Compassionate caregivers for senior citizens and infants with personalized care plans.',
      features: [
        'Daily assistance & companionship',
        'Medication management',
        'Personal hygiene care',
        'Feeding assistance',
        'Activity monitoring'
      ]
    },
    {
      id: 'neuro-care',
      icon: 'fas fa-brain',
      title: 'Neuro Patient Care at Home',
      description: 'Specialized care for stroke, paralysis, Parkinson’s, and other neurological conditions.',
      features: [
        'Stroke rehabilitation',
        'Paralysis care',
        'Mobility assistance',
        'Speech therapy support',
        'Cognitive exercises'
      ]
    },
    {
      id: 'tracheotomy',
      icon: 'fas fa-lungs',
      title: 'Tracheotomy Care',
      description: 'Expert care for tracheostomy patients including tube changing and suctioning.',
      features: [
        'Tracheostomy tube care',
        'Suctioning procedures',
        'Stoma site care',
        'Emergency protocol',
        'Infection prevention'
      ]
    },
    {
      id: 'attendants',
      icon: 'fas fa-users',
      title: 'Male & Female Attendants',
      description: 'Trained male and female attendants for patient care and assistance.',
      features: [
        'Personal care assistance',
        'Mobility support',
        'Household help',
        'Companionship',
        'Patient monitoring'
      ]
    },
    {
      id: 'doctor-visit',
      icon: 'fas fa-user-md',
      title: 'On-Call Doctor Visits',
      description: 'Qualified doctors available for home visits across Lucknow.',
      features: [
        'General physician visits',
        'Specialist consultations',
        'Health checkups',
        'Prescription services',
        'Follow-up care'
      ]
    }
  ];

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-title">
          <h2 id="services-heading">Our Home Healthcare Services</h2>
          <p>Comprehensive medical care services delivered at your home by certified professionals</p>
        </header>
        
        <div className="services-grid" role="list" aria-label="Healthcare services list">
          {services.map((service) => (
            <article 
              key={service.id} 
              className={`service-card ${service.featured ? 'featured' : ''}`}
              role="listitem"
              itemScope
              itemType="https://schema.org/MedicalService"
            >
              <meta itemProp="serviceType" content={service.title} />
              <div className="service-icon" aria-hidden="true">
                <i className={service.icon}></i>
              </div>
              <h3 itemProp="name">{service.title}</h3>
              <p itemProp="description">{service.description}</p>
              <ul className="service-features" aria-label={`Features of ${service.title}`}>
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle" aria-hidden="true"></i> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="service-actions">
                <a 
                  href={`https://wa.me/918009979128?text=I'm interested in ${encodeURIComponent(service.title)} service from VITALIS`}
                  className="service-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get quote for ${service.title}`}
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i> Get Quote
                </a>
                <a 
                  href="tel:+918009979128"
                  className="service-cta"
                  style={{ background: 'var(--primary)', marginLeft: '10px' }}
                  aria-label={`Call about ${service.title}`}
                >
                  <i className="fas fa-phone-alt" aria-hidden="true"></i> Call Now
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="additional-services" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3>Additional Services Available</h3>
          <div className="service-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
            {['IV Injection at Home', 'ICU Setup at Home', 'Medical Equipment Rental', 'X-Ray at Home', 'Lab Tests at Home'].map((tag) => (
              <span 
                key={tag}
                style={{
                  background: 'var(--light)',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '30px',
                  fontWeight: '500',
                  color: 'var(--primary)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;