import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-content">
        <a href="/" className="logo" aria-label="VITALIS Home Healthcare Services">
          <div className="logo-image">
            <img 
              src="/images/logo.png" 
              alt="VITALIS Home Healthcare Services Logo" 
              width="180"
              height="50"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="logo-text">
                    <span class="logo-main">VITALIS</span>
                    <span class="logo-sub">HOME HEALTHCARE SERVICES</span>
                  </div>
                `;
              }}
            />
          </div>
        </a>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#physiotherapy" onClick={closeMobileMenu}>Physiotherapy</a></li>
          <li><a href="#equipment" onClick={closeMobileMenu}>Equipment</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>

        <a 
          href="tel:+918009979128" 
          className="nav-cta"
          aria-label="Call emergency number"
        >
          <i className="fas fa-phone-alt"></i> Emergency Call
        </a>
      </div>
    </nav>
  );
};

export default Navbar;