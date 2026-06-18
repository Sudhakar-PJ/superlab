import { useState, useRef } from 'react';
import { Phone, MapPin, User, ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react';

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: '#25D366', display: 'inline-block', verticalAlign: 'middle' }}>
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.371a9.936 9.936 0 004.777 1.219h.005c5.505 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.18-2.92-7.061A9.925 9.925 0 0012.012 2zM12 18.254h-.005a8.21 8.21 0 01-4.19-1.155l-.301-.18-3.117.818.833-3.042-.196-.314a8.2 8.2 0 01-1.258-4.397c.002-4.53 3.693-8.217 8.225-8.217a8.17 8.17 0 015.82 2.41 8.18 8.18 0 012.41 5.812c-.003 4.532-3.694 8.22-8.227 8.22zm4.512-6.164c-.247-.124-1.464-.722-1.692-.805-.227-.082-.393-.124-.558.124-.166.248-.641.805-.786.969-.145.165-.29.185-.538.062a6.792 6.792 0 01-2.003-1.233 7.487 7.487 0 01-1.385-1.724c-.145-.247-.015-.381.109-.504.111-.11.248-.29.372-.434.124-.145.165-.248.248-.413.083-.165.042-.31-.02-.434-.063-.124-.558-1.343-.765-1.838-.2-.486-.403-.42-.558-.428-.145-.008-.31-.01-.476-.01a.916.916 0 00-.662.31c-.227.248-.868.847-.868 2.065 0 1.22.888 2.396.987 2.53.1.134 1.747 2.668 4.233 3.74.59.255 1.053.408 1.41.52.595.19 1.137.163 1.565.1.477-.07 1.464-.598 1.67-.176.207-.421.207-.784 0-1.105z" />
  </svg>
);

const Header = () => {
  const [selectedLocation, setSelectedLocation] = useState('Chennai');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCheckupMenuOpen, setIsCheckupMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Pregnancy Test');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const leaveTimeoutRef = useRef(null);
  const checkupTimeoutRef = useRef(null);

  const locations = [
    'Chennai',
    'New Delhi',
    'Noida',
    'Gurugram',
    'Mumbai',
    'Bengaluru',
    'Kolkata',
    'Hyderabad'
  ];

  const categoryData = {
    'Pregnancy Test': {
      title: 'Pregnancy Test',
      tests: [
        'Haemoglobin Estimation Test', 'Beta HCG Test', 'Urine Culture Test',
        'Prolactin Test', 'Haemoglobin HPLC Test', 'STD Panel Test',
        'Double Marker Test', 'LH-Luteinizing Hormone , Serum Test', 'Estradiol Test',
        'Progesterone Test', 'AFP Test', 'Glucose Tolerance Test - (GTT 2 Specimens) After 75gm',
        'Quadruple Marker Test', 'Bile Acid Test', 'Viral Marker Profile (Elisa) Test',
        'Torch IgG IgM Test', 'Urine Pregnancy Test', 'Free Testosterone Test'
      ]
    },
    'Heart Test': {
      title: 'Heart Test',
      tests: [
        'Lipid Profile Test',
        'Troponin I Test',
        'CPK Test',
        'NT ProBNP Test',
        'CK MB Test',
        'Ionized Calcium Test',
        'Lipoprotein (LP A) Test',
        'LDL Cholesterol Test',
        'HDL Cholesterol Test',
        'Apolipoprotein Test',
        'SAAG (Serum-Ascites Albumin Gradient) Test',
        'Nt Pro Bnp Test',
        'Plasma Aldosterone Test',
        'Lipid Profile Extended Panel Test',
        'Myoglobin, Urine(M) Test',
        'Aldosterone Test',
        'Chylomicron Qualitative (Specimen-Fluid) (C) Test',
        'CPK Isoenzyme Electrophoresis (L) Test'
      ]
    },
    'HIV Test': {
      title: 'HIV Test',
      tests: [
        'HIV Rapid Test',
        'HIV 1 & 2 Test',
        'STD Panel Test',
        'HIV RNA PCR Quantitative Test',
        'CD4 And CD8 Count Test',
        'Western Blot HIV Test',
        'HIV Genotype Test'
      ]
    },
    'Fever Test': {
      title: 'Fever Test',
      tests: [
        'Dengue Test',
        'Typhidot Test',
        'Max Fever Panel Advance Test',
        'Max Fever Panel Basic Test',
        'Monsoon Fever Panel Test',
        'Max Fever Panel Comprehensive Test',
        'Malaria Test',
        'Urine Culture Test',
        'Widal Test',
        'Malaria Antigen Test',
        'Dengue Fever Panel (Elisa) Test',
        'Widal Test (Tube Method)',
        'Dengue IgM Test',
        'H1N1 Test',
        'Chikungunya PCR Test',
        'Max Fever Panel Fever More Than 1 Week Test',
        'Chikungunya IgM Test',
        'H1N1 Test'
      ]
    },
    'Hormone Test': {
      title: 'Hormone Test',
      tests: [
        'FSH Test',
        'LH-Luteinizing Hormone , Serum Test',
        'Estradiol Test',
        'Progesterone Test',
        'Cortisol (Morning Sample), Serum Test',
        'FSH Test',
        'Free Testosterone Test',
        'Testosterone Test',
        'Max Fertility Hormonal Followup Profile Test',
        '17 - Hydroxyprogesterone (17-OHP) Test',
        'Di Hydro Testosterone',
        'Free Beta HCG Test',
        'Growth Hormone Test',
        'Sex Hormone Binding Globulin (SHBG)(L) Test',
        'IGF - I (Somatomedin-C) Test',
        'AMH Profile Test',
        'PCOD Test',
        'Estrogen Test'
      ]
    },
    'Allergy Test': {
      title: 'Allergy Test',
      tests: [
        'IgE Test',
        'Allergy Profile Test',
        'Allergy Screening Test',
        'PhadiaTop Allergy Test',
        'ABPA Test',
        'Milk Allergy Test',
        'Sputum Fungal Culture Test',
        'Hypersensitivity Pneumonitis (HP) Panel, Serum Test',
        'Phadiatop Test',
        'Food Allergy Test',
        'Phadiatop Infant Test',
        'Allergy Individual Marker Test',
        '12 Panel Drug Panel Test',
        'Wheat Allergy Test',
        'Allergy Panel Test',
        'Allergen M3, Aspergillus Fumigatus Test',
        'Gluten Allergy Test',
        'Interstitial Lung Disease ( ILD Advanced) Test'
      ]
    },
    'Tuberculosis Test': {
      title: 'Tuberculosis Test',
      tests: [
        'Sputum-AFB Stain Test',
        'Sputum Test',
        'TB Gold Test',
        'GeneXpert MTB/RIF Ultra Test',
        'AFB Culture Test',
        'AFB Stain Test',
        'Sputum-GeneXpert MTB/RIF Ultra Test',
        'Pleural Fluid - ADA Test',
        'Tuberculosis Test',
        'Sputum AFB Test',
        'BAL AFB Stain Test',
        'BAL AFB Culture Test',
        'BAL GeneXpert MTB RIF Ultra Test',
        'Pleural Fluid - Grams Stain Test',
        'Pleural Fluid - AFB Stain Test',
        'Pleural Fluid-GeneXpert MTB/RIF Ultra Test',
        'Max Tuberculosis Profile II Test',
        'Endometrial Tissue-GeneXpert MTB/RIF Ultra Test'
      ]
    },
    'Diabetes Test': {
      title: 'Diabetes Test',
      tests: [
        'RBS Test',
        'PPBS Blood Test',
        'Potassium Serum Test',
        'Health Screen Test',
        'Glucose Challenge Test (GCT) 75g,Fluoride Plasma',
        'Insulin Level (Fasting) Test',
        'Glucose Challenge Test (GCT)',
        'PPBS After Lunch Test',
        'Insulin Level Test',
        'C Peptide Fasting Test',
        'Max Insulin Profile Test',
        'C Peptide Test',
        'Osmolality, Random Urine Test',
        'Fructosamine Test',
        'Homa-IR Insulin Resistance Index Test',
        'Osmolality, Serum Test',
        'Blood Sugar Glucometer Test',
        'Insulin Level (Random) Test'
      ]
    },
    'Thyroid Test': {
      title: 'Thyroid Test',
      tests: [
        'Total Thyroid Test',
        'Health Screen Test',
        'Anti TPO Test',
        'Free T4 Test',
        'Total T4 ,Serum Test',
        'Total T3 ,Serum Test',
        'Free T3 Test',
        'Anti Thyroid Antibody Test',
        'TSH Antibody Receptor Test',
        'Urine Drug Assay Panel Test',
        'TSH + FT4 Test',
        'Thyroid Profile Cord Blood Test',
        'Thyroxine Binding Globulin ; TBG (M) Test',
        'Thyroid Profile Advance Test',
        'Thyroid Stimulating Immunoglobulin (TSI) (L) Test',
        'REVERSE T3 (L) Test',
        'Extensive Thyroid Profile Test'
      ]
    },
    'Bone Health Test': {
      title: 'Bone Health Test',
      tests: [
        'Test'
      ]
    },
    'Liver Test': {
      title: 'Liver Test',
      tests: [
        'LFT Test',
        'SGOT Test',
        'Bilirubin Test',
        'ANA By Immunofluorescence Test',
        'Liver Function Test (LFT) With LDH Profile',
        'Alkaline Phosphatase Test',
        'Bile Acid Test',
        'Anti HBs Test',
        'SGOT & SGPT Test',
        'GGTP (Gamma GT), Serum Test',
        'Ceruloplasmin,Serum Test',
        'ASMA Test',
        'Autoimmune Hepatitis Test',
        'LKM Antibody,Serum Test',
        'Anti HEV IgG Test',
        'LKM Antibody By IF Test',
        'Anti Mitochondrial Antibody By IF Test',
        'Anti Soluble Liver Antigen Sla Test'
      ]
    },
    'Cancer Test': {
      title: 'Cancer Test',
      tests: [
        'PSA (Prostate Specific Antigen) Test',
        'CA-125 (Ovarian Cancer) Test',
        'CEA (Carcinoembryonic Antigen) Test',
        'AFP (Alpha-Fetoprotein) Test',
        'CA 19-9 (Pancreatic Cancer) Test',
        'Pap Smear Test'
      ]
    }
  };

  const getTestHash = (testName) => {
    if (testName === 'Haemoglobin Estimation Test') return '#/haemoglobin-estimation';
    if (testName === 'Beta HCG Test') return '#/beta-hcg';
    return `#test-${encodeURIComponent(testName.toLowerCase().replace(/\s+/g, '-'))}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const handleCheckupEnter = () => {
    if (checkupTimeoutRef.current) clearTimeout(checkupTimeoutRef.current);
    setIsCheckupMenuOpen(true);
  };

  const handleCheckupLeave = () => {
    checkupTimeoutRef.current = setTimeout(() => {
      setIsCheckupMenuOpen(false);
    }, 200);
  };

  return (
    <header style={{ width: '100%', fontFamily: 'var(--sans)', position: 'relative', zIndex: 1000 }}>
      {/* 1. TOP ROW: Brand Soft Background */}
      <div className="header-top-bar">
        {/* Top Left: WhatsApp & Phone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="https://wa.me/917982100200" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <WhatsAppIcon />
          </a>
          <span style={{ height: '16px', width: '1px', backgroundColor: 'var(--line)' }}></span>
          <a href="tel:7982100200" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--blue)', fontWeight: 'bold', fontSize: '1.05rem', textDecoration: 'none' }}>
            <Phone size={18} fill="var(--blue)" style={{ color: 'var(--blue)' }} />
            <span>7982100200</span>
          </a>
        </div>

        {/* Top Center: Long Search Bar with Search Icon inside on the Right */}
        <form onSubmit={handleSearch} className="header-top-search">
          <div className="header-search-wrapper">
            <input
              type="text"
              placeholder="Search for tests, packages, symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header-search-input"
            />
            <button type="submit" className="header-search-btn">
              <Search size={18} />
            </button>
          </div>
        </form>

        {/* Top Right: Book a Test Action Button */}
        <div>
          <button 
            onClick={() => { window.location.hash = '#/lab-tests'; }}
            className="btn-book-test-header"
          >
            Book a Test
          </button>
        </div>
      </div>

      {/* 2. BOTTOM ROW: White Background */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 24px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Bottom Left: Brand Logo Block (MAX Lab style) */}
        <a href="#/" className="header-logo-link">
          <img
            src="/super-lab-logo.jpeg"
            alt="Super Lab Logo"
            style={{ height: '60px', objectFit: 'contain', borderRadius: '4px', display: 'block', transform: 'scale(2.2)' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </a>

        {/* Bottom Center: Navigation Links */}
        <nav className="nav-menu">
          {/* Find A Test Wrapper with Hover Handler */}
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ 
              display: 'inline-block',
              paddingBottom: '20px',
              marginBottom: '-20px'
            }}
          >
            <a 
              href="#find-test" 
              className="nav-item" 
              style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                color: '#003c71', 
                textDecoration: 'none',
                padding: '12px 0',
                display: 'inline-block'
              }}
            >
              Find A Test
            </a>

            {/* MEGA MENU CONTAINER - Nested inside the hover-trigger wrapper */}
            <div 
              className={`mega-menu-container ${isMegaMenuOpen ? 'open' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mega-menu-content" style={{ display: 'flex', minHeight: '380px' }}>
                {/* Left Column: Categories List */}
                <div className="mega-menu-left" style={{ width: '260px', backgroundColor: '#f8fafc', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px', borderRight: '1px solid #f1f5f9' }}>
                  {Object.keys(categoryData).map((cat) => (
                    <button
                      key={cat}
                      className={`mega-menu-category-btn ${activeCategory === cat ? 'active' : ''}`}
                      onMouseEnter={() => setActiveCategory(cat)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: '10px 16px',
                        border: 'none',
                        background: 'none',
                        borderRadius: '6px',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: activeCategory === cat ? '#00a3ad' : '#475569',
                        backgroundColor: activeCategory === cat ? '#e6f7f8' : 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <span>{cat}</span>
                      <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
                    </button>
                  ))}
                  
                  <a href="#all-categories" className="mega-menu-test-link" style={{ 
                    color: '#003c71', 
                    fontWeight: 'bold', 
                    marginTop: 'auto',
                    padding: '10px 16px',
                    display: 'inline-block',
                    fontSize: '0.9rem',
                    textDecoration: 'none'
                  }}>
                    View All Categories
                  </a>
                </div>

                {/* Vertical Divider */}
                <div className="mega-menu-divider" style={{ width: '1.5px', backgroundColor: '#003c71', opacity: 0.15, alignSelf: 'stretch', margin: '20px 0' }} />

                {/* Right Column: Tests List Grid & Features */}
                <div className="mega-menu-right" style={{ flex: '1', padding: '24px 24px 16px 24px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
                  <h3 className="mega-menu-title" style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#00a3ad', marginBottom: '16px', textAlign: 'left', flexShrink: 0 }}>
                    {categoryData[activeCategory].title}
                  </h3>
                  
                  {/* Scrollable Tests Grid */}
                  <div className="mega-menu-tests-scroll-wrapper" style={{ flex: '1', overflowY: 'auto', paddingRight: '10px', marginBottom: '16px' }}>
                    <div className="mega-menu-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px 24px', textAlign: 'left' }}>
                      {categoryData[activeCategory].tests.map((test, idx) => (
                        <a 
                          key={idx} 
                          href={getTestHash(test)} 
                          onClick={() => setIsMegaMenuOpen(false)} 
                          className="mega-menu-test-link" 
                          style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'none', transition: 'color 0.15s', cursor: 'pointer', lineHeight: '1.4' }}
                        >
                          {test}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Divider line */}
                  <div style={{ height: '1.5px', backgroundColor: '#f1f5f9', width: '100%', flexShrink: 0, marginBottom: '16px' }} />

                  {/* Features Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flexShrink: 0 }}>
                    {/* Item 1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2f5f6', color: '#00828a', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-14 0c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm15-6h-2.18L16 5.86V3h-2v2.86l-2.18 3.14H5c-1.1 0-2 .9-2 2v3h18v-3c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.15' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Home Sample</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Collection</span>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2f5f6', color: '#00828a', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.15' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Same Day</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Reports Over Email</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2f5f6', color: '#00828a', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.15' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Highly Trained</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Staff & Doctors</span>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e2f5f6', color: '#00828a', flexShrink: 0 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.15' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>Zero Contamination</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#003c71' }}>QualiCare Kit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Body Health Checkup Wrapper with Hover Handler */}
          <div 
            onMouseEnter={handleCheckupEnter}
            onMouseLeave={handleCheckupLeave}
            style={{ 
              display: 'inline-block',
              paddingBottom: '20px',
              marginBottom: '-20px',
              position: 'relative'
            }}
          >
            <a 
              href="#health-checkup" 
              className="nav-item" 
              style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                color: '#003c71', 
                textDecoration: 'none',
                padding: '12px 0',
                display: 'inline-block'
              }}
            >
              Full Body Health Checkup
            </a>

            {/* CHECKUP DROPDOWN CONTAINER */}
            <div className={`checkup-dropdown-container ${isCheckupMenuOpen ? 'open' : ''}`}>
              <div className="checkup-package-row">
                <div className="package-left">
                  <span className="package-name">Wellwise Total Profile</span>
                  <span className="package-badge-green">Most Booked</span>
                </div>
                <span className="package-tests-count">Includes 91 Tests</span>
                <button className="package-details-btn" onClick={() => alert('Wellwise Total Profile Details')}>See Details</button>
                <button className="package-book-outline-btn" onClick={() => alert('Total Profile Booked!')}>Book Now</button>
                <span className="package-price-text">₹2279</span>
              </div>

              <div className="checkup-package-row">
                <div className="package-left">
                  <span className="package-name">WellWise Exclusive Profile</span>
                </div>
                <span className="package-tests-count">Includes 95 Tests</span>
                <button className="package-details-btn" onClick={() => alert('WellWise Exclusive Profile Details')}>See Details</button>
                <button className="package-book-outline-btn" onClick={() => alert('Exclusive Profile Booked!')}>Book Now</button>
                <span className="package-price-text">₹3119</span>
              </div>

              <div className="checkup-package-row">
                <div className="package-left">
                  <span className="package-name">Wellwise Platinum</span>
                </div>
                <span className="package-tests-count">Includes 103 Tests</span>
                <button className="package-details-btn" onClick={() => alert('Wellwise Platinum Details')}>See Details</button>
                <button className="package-book-outline-btn" onClick={() => alert('Platinum Booked!')}>Book Now</button>
                <span className="package-price-text">₹4499</span>
              </div>

              <div className="checkup-package-row">
                <div className="package-left">
                  <span className="package-name">Wellwise Advanced Profile</span>
                </div>
                <span className="package-tests-count">Includes 81 Tests</span>
                <button className="package-details-btn" onClick={() => alert('Wellwise Advanced Profile Details')}>See Details</button>
                <button className="package-book-outline-btn" onClick={() => alert('Advanced Profile Booked!')}>Book Now</button>
                <span className="package-price-text">₹1799</span>
              </div>

              <button className="checkup-view-all-btn" onClick={() => { window.location.hash = '#/lab-tests'; setIsCheckupMenuOpen(false); }}>
                VIEW ALL PACKAGES
              </button>
            </div>
          </div>

          <a href="#download-report" className="nav-item" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#003c71', textDecoration: 'none' }}>Download Report</a>
          <a href="#/make-package" className="nav-item" style={{ fontSize: '1rem', fontWeight: 'bold', color: '#003c71', textDecoration: 'none' }}>Make Your Own Package</a>
        </nav>

        {/* Bottom Right: Location Picker, User Account, Shopping Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Location Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#003c71' }}>
            <MapPin size={18} style={{ color: '#00a3ad' }} />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#003c71',
                cursor: 'pointer',
                outline: 'none',
                paddingRight: '4px'
              }}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* User Account Circular Icon */}
          <button 
            title="User Account" 
            onClick={() => setIsLoginOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '2px solid #00a3ad',
              color: '#00a3ad',
              background: 'transparent',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <User size={18} />
          </button>

          {/* Shopping Cart Icon */}
          <a href="#cart" title="Shopping Cart" style={{ color: '#00a3ad', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <ShoppingCart size={24} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: 'var(--orange)',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>0</span>
          </a>

          {/* Mobile Menu Icon */}
          <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-backdrop ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span className="brand-name" style={{ color: '#003c71' }}>
            SUPER<span style={{ color: '#00a3ad' }}>LAB</span>
          </span>
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
          <a href="#find-test" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Find A Test</a>
          <a href="#health-checkup" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Full Body Health Checkup</a>
          <a href="#download-report" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Download Report</a>
          <a href="#/make-package" className="mobile-nav-item" onClick={() => setIsMobileMenuOpen(false)}>Make Your Own Package</a>
          
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '16px', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
              <MapPin size={18} style={{ color: '#00a3ad' }} />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                style={{ fontSize: '1rem', border: 'none', background: 'none', fontWeight: 'bold', color: '#003c71' }}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
            
            <button 
              className="mobile-nav-item" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: '8px 0', cursor: 'pointer', color: 'inherit', font: 'inherit' }} 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsLoginOpen(true);
              }}
            >
              <User size={18} style={{ color: '#00a3ad' }} />
              <span>User Account</span>
            </button>
            
            <a href="#cart" className="mobile-nav-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingCart size={18} style={{ color: '#00a3ad' }} />
              <span>Shopping Cart (0)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Login / Sign Up Modal */}
      {isLoginOpen && (
        <div className="login-modal-backdrop" onClick={() => setIsLoginOpen(false)}>
          <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="login-modal-header">
              <h3 className="login-modal-title">Login/Sign Up</h3>
              <button className="login-modal-close-btn" onClick={() => setIsLoginOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <p className="login-modal-subtitle">Please enter your Mobile Number to proceed</p>
            
            <div className="login-input-group">
              <div className="login-country-code">
                <span>+91</span>
                <ChevronDown size={14} />
              </div>
              <input 
                type="tel" 
                placeholder="Enter Mobile Number" 
                className="login-mobile-input" 
                maxLength="10"
              />
            </div>
            
            <label className="login-whatsapp-consent">
              <input type="checkbox" defaultChecked />
              <span className="consent-checkbox-custom"></span>
              <span className="consent-text">Share health tips, appointment details and offers with me on Whatsapp</span>
            </label>
            
            <p className="login-terms-text">
              By clicking Continue, you agree to Super Lab's <a href="#privacy">Privacy Policy</a> & <a href="#terms">Terms and Conditions</a>
            </p>
            
            <button className="btn-login-submit" onClick={() => alert('OTP Sent!')}>
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
