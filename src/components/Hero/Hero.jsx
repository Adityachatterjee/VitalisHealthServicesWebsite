import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            Professional Home Healthcare Services in Lucknow
          </h1>
          
          <p className="hero-subtitle">
            VITALIS - Your Trusted Partner for 24/7 Medical Care at Home
          </p>
          
          <p className="hero-description">
            ICU nursing care, physiotherapy, medical equipment rental, ambulance services, 
            and doctor home visits. Certified professionals providing compassionate care 
            at your doorstep in Lucknow.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Patients Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Service Hours</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Trained Staff</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a 
              href="https://wa.me/918009979128?text=Hi%20VITALIS%2C%20I%20need%20home%20healthcare%20services%20in%20Lucknow"
              className="hero-btn primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book services via WhatsApp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp Booking
            </a>
            <a 
              href="tel:+918009979128" 
              className="hero-btn secondary"
              aria-label="Call for immediate assistance"
            >
              <i className="fas fa-phone-alt" aria-hidden="true"></i> Emergency Call
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature">
              <i className="fas fa-shield-alt" aria-hidden="true"></i>
              <span>Certified Professionals</span>
            </div>
            <div className="feature">
              <i className="fas fa-home" aria-hidden="true"></i>
              <span>At-Home Service</span>
            </div>
            <div className="feature">
              <i className="fas fa-rupee-sign" aria-hidden="true"></i>
              <span>Affordable Pricing</span>
            </div>
            <div className="feature">
              <i className="fas fa-ambulance" aria-hidden="true"></i>
              <span>Emergency Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;