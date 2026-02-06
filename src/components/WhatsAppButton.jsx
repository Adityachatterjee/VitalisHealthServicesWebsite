const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/918009979128?text=Hi%20VITALIS%20Healthcare%2C%20I%20need%20information%20about%20your%20services"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;