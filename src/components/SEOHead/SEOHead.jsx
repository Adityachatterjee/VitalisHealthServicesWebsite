import { Helmet } from 'react-helmet-async';
import './SEOHead.css';
const SEOHead = ({ 
  title = "VITALIS Home Healthcare Services | 24/7 Nursing & Physiotherapy in Lucknow",
  description = "VITALIS Home Healthcare Services: 24/7 ICU nursing, physiotherapy, medical equipment rental, ambulance service in Lucknow. Call +91 8009979128",
  keywords = "home healthcare, nursing services Lucknow, physiotherapy at home, ICU setup at home, medical equipment rental, ambulance service, Dr. Shankara physio, 24/7 nursing care",
  canonical = "https://vitalishealthcare.com",
  ogImage = "https://vitalishealthcare.com/images/og-banner.jpg"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VITALIS Home Healthcare Services" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="VITALIS Home Healthcare Services" />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "VITALIS Home Healthcare Services",
          "description": description,
          "url": canonical,
          "telephone": "+918009979128",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rathindra Nagar, Near Bal Vikas School Kumar Mandi Road Telibagh",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226002",
            "addressCountry": "IN"
          },
          "openingHours": "24/7",
          "priceRange": "₹",
          "sameAs": [
            "https://facebook.com/vitalishealthcare",
            "https://instagram.com/vitalishealthcare"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;