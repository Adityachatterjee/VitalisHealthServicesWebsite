import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = `New Inquiry from VITALIS Website:%0A%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Email: ${formData.email}%0A
Service Needed: ${formData.service}%0A
Message: ${formData.message}%0A%0A
Location: Lucknow`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918009979128?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Show confirmation
    alert('Thank you! Opening WhatsApp to send your inquiry.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <header className="section-title">
          <h2 id="contact-heading">Contact VITALIS Healthcare</h2>
          <p>Get in touch for immediate assistance or to book our services</p>
        </header>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Our Location</h4>
                <address>
                  Rathindra Nagar, Near Bal Vikas School<br />
                  Kumar Mandi Road, Telibagh<br />
                  Lucknow - 226002, Uttar Pradesh
                </address>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Emergency Numbers</h4>
                <p>
                  <a href="tel:+918009979128" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>
                    +91 8009979128 (24/7)
                  </a>
                </p>
                <p>
                  <a href="tel:+917860287024" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    <i className="fas fa-phone" style={{ marginRight: '0.5rem' }}></i>
                    +91 7860287024 (Physiotherapy)
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-details">
                <h4>Service Hours</h4>
                <p>24 Hours, 7 Days a Week</p>
                <p>Emergency Services Available Round the Clock</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true">
                <i className="fas fa-ambulance"></i>
              </div>
              <div className="contact-details">
                <h4>Ambulance Service</h4>
                <p>Advance Life Support (ACLS) Ambulance Available</p>
                <p>ICCU on Wheels with Ventilator Support</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Quick Inquiry</h3>
            <form onSubmit={handleSubmit} aria-label="Contact form">
              <div className="form-group">
                <label htmlFor="name" className="visually-hidden">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="visually-hidden">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service" className="visually-hidden">Service Needed</label>
                <select 
                  id="service"
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-required="true"
                >
                  <option value="">Select Service Needed *</option>
                  <option value="icu-nursing">ICU Nursing Care</option>
                  <option value="elder-care">Elder Care</option>
                  <option value="physiotherapy">Physiotherapy</option>
                  <option value="medical-equipment">Medical Equipment</option>
                  <option value="ambulance">Ambulance Service</option>
                  <option value="doctor-visit">Doctor Home Visit</option>
                  <option value="other">Other Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="visually-hidden">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Patient condition, address, and requirements *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              
              <button type="submit" className="submit-btn" aria-label="Submit inquiry via WhatsApp">
                <i className="fab fa-whatsapp"></i> Send via WhatsApp
              </button>
            </form>
            
            <div className="whatsapp-direct" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p>Or contact us directly on WhatsApp:</p>
              <a 
                href="https://wa.me/918009979128"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;