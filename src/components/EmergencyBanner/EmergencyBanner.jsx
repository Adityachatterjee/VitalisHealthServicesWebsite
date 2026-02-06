const EmergencyBanner = () => {
  return (
    <div className="emergency-banner" role="alert" aria-label="Emergency services available">
      <div className="container">
        <div className="emergency-content">
          <div className="emergency-text">
            <i className="fas fa-ambulance"></i> 24/7 Emergency Services Available
          </div>
          <div className="emergency-phone">
            <i className="fas fa-phone"></i>
            <a href="tel:+918009979128" aria-label="Emergency phone number">+91 8009979128</a>
          </div>
          <div className="emergency-phone">
            <i className="fas fa-phone"></i>
            <a href="tel:+917860287024" aria-label="Secondary emergency phone number">+91 7860287024</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;