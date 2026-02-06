import './EquipmentRental.css';
const EquipmentRental = () => {
  const equipment = [
    {
      name: 'Ventilators',
      icon: 'fas fa-lungs',
      description: 'ICU-grade ventilators for respiratory support'
    },
    {
      name: 'Oxygen Concentrators',
      icon: 'fas fa-wind',
      description: 'Portable oxygen delivery systems'
    },
    {
      name: 'Hospital Beds',
      icon: 'fas fa-bed',
      description: 'Electric/manual beds with side rails'
    },
    {
      name: 'Wheelchairs',
      icon: 'fas fa-wheelchair',
      description: 'Manual and electric wheelchairs'
    },
    {
      name: 'Patient Monitors',
      icon: 'fas fa-heartbeat',
      description: 'Multi-parameter vital sign monitors'
    },
    {
      name: 'Suction Machines',
      icon: 'fas fa-tint',
      description: 'Portable suction units for airway management'
    },
    {
      name: 'Nebulizers',
      icon: 'fas fa-cloud',
      description: 'Portable nebulization machines'
    },
    {
      name: 'BP Monitors',
      icon: 'fas fa-stethoscope',
      description: 'Digital blood pressure monitors'
    }
  ];

  return (
    <section id="equipment" className="section" aria-labelledby="equipment-heading">
      <div className="container">
        <header className="section-title">
          <h2 id="equipment-heading">Medical Equipment on Rent/Sale</h2>
          <p>High-quality medical equipment available for rent or purchase with delivery across Lucknow</p>
        </header>
        
        <div className="equipment-grid" role="list" aria-label="Medical equipment available">
          {equipment.map((item, index) => (
            <div key={index} className="equipment-card" role="listitem">
              <div className="equipment-icon" aria-hidden="true">
                <i className={item.icon}></i>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="equipment-actions" style={{ marginTop: '1rem' }}>
                <a 
                  href="tel:+918009979128"
                  className="service-cta"
                  style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                  aria-label={`Inquire about ${item.name}`}
                >
                  <i className="fas fa-phone-alt"></i> Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="equipment-notice" style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--light)', borderRadius: 'var(--border-radius)' }}>
          <h3>Advance Life Support (ACLS) Ambulance - ICCU on Wheels</h3>
          <p style={{ marginBottom: '1rem' }}>
            Our fully equipped ICU ambulance is available 24/7 with trained paramedics, 
            ventilator support, cardiac monitor, and emergency medications.
          </p>
          <div className="ambulance-contact">
            <a 
              href="tel:+918009979128"
              className="btn-primary"
              style={{ background: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              aria-label="Call for ambulance service"
            >
              <i className="fas fa-ambulance"></i> Call Ambulance: +91 8009979128
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRental;