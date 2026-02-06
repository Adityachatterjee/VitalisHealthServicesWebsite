import './Physiotherapy.css';

const Physiotherapy = () => {
  const treatments = [
    'Lower back pain',
    'Frozen shoulder',
    'Knee pain',
    'Muscle pain',
    'Neck pain',
    'Sciatica',
    'Paralysis',
    'Cerebral palsy',
    'Arthritis',
    'Post fracture rehabilitation',
    'Post surgery rehabilitation',
    'Slip disc',
    'Joint stiffness',
    'Muscle strain',
    'Tennis elbow',
    'Post TKR (Total Knee Replacement)',
    'Brain injury rehabilitation',
    'Post THR (Total Hip Replacement)'
  ];

  return (
    <section id="physiotherapy" className="section physio-section" aria-labelledby="physio-heading">
      <div className="container">
        <header className="section-title">
          <h2 id="physio-heading">Dr. Shankara's Physio Rehabilitation Clinic</h2>
          <p>Professional physiotherapy treatment at your home in Lucknow</p>
        </header>
        
        <div className="physio-content">
          <div className="physio-info">
            <h3>24/7 Physiotherapy Services at Home</h3>
            <p>
              Dr. Shankara C. Maurya (PT., DPT. BPT) provides expert physiotherapy treatment 
              for various conditions in the comfort of your home. Our services are available 
              24 hours, 7 days a week across Lucknow.
            </p>
            
            <div className="physio-director" style={{ margin: '2rem 0', padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius)' }}>
              <h4>Director: Pooja Yadav</h4>
              <p>Ensuring quality care and patient satisfaction</p>
            </div>
            
            <div className="physio-contact" style={{ marginTop: '2rem' }}>
              <div className="contact-item" style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>
                <i className="fas fa-user-md" style={{ fontSize: '1.5rem', marginRight: '1rem' }}></i>
                <div>
                  <strong>Dr. Shankara C. Maurya</strong><br />
                  PT., DPT. BPT<br />
                  <a href="tel:+917860287024" style={{ color: 'white', textDecoration: 'none' }}>
                    <i className="fas fa-phone"></i> +91 7860287024
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="physio-treatments-container">
            <h3>Conditions We Treat</h3>
            <div className="physio-treatments" role="list" aria-label="Physiotherapy treatments">
              {treatments.map((treatment, index) => (
                <div key={index} className="treatment-item" role="listitem">
                  <i className="fas fa-heartbeat" style={{ marginRight: '0.5rem' }}></i>
                  {treatment}
                </div>
              ))}
            </div>
            
            <div className="physio-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a 
                href="https://wa.me/917860287024?text=Hi%20Dr.%20Shankara%2C%20I%20need%20physiotherapy%20treatment%20at%20home"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'white', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                aria-label="Book physiotherapy appointment via WhatsApp"
              >
                <i className="fab fa-whatsapp"></i> Book Physio Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Physiotherapy;