import {
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Droplet,
  FileText,
  HelpCircle,
  Home,
  Info,
  Layers,
  ShoppingCart,
  Users
} from 'lucide-react';
import { useEffect, useState } from 'react';
import HomeCollectionWorkflow from './HomeCollectionWorkflow';


const WellwiseTotalProfilePage = ({ setIsIsoModalOpen }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [openCategories, setOpenCategories] = useState({ 0: true });

  const toggleCategory = (idx) => {
    setOpenCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const packageInfo = {
    id: 1001,
    name: 'Wellwise Total Profile',
    price: 2279,
    originalPrice: 4500,
    discount: '49% OFF',
    testsCount: 91
  };

  useEffect(() => {
    const checkCart = () => {
      if (window.getSuperlabCart) {
        const cart = window.getSuperlabCart();
        setIsAdded(cart.some(item => 
          (item.id != null && packageInfo.id != null && String(item.id).trim() === String(packageInfo.id).trim()) ||
          (item.name && packageInfo.name && item.name.toLowerCase().trim() === packageInfo.name.toLowerCase().trim())
        ));
      }
    };
    checkCart();
    window.addEventListener('superlab_cart_update', checkCart);
    return () => window.removeEventListener('superlab_cart_update', checkCart);
  }, [packageInfo.id, packageInfo.name]);

  const handleToggleCart = () => {
    if (isAdded) {
      if (window.removeFromSuperlabCart) {
        window.removeFromSuperlabCart(packageInfo);
      }
    } else {
      if (window.addToSuperlabCart) {
        window.addToSuperlabCart(packageInfo);
      }
    }
  };

  const categories = [
    {
      name: "Liver Function Test (LFT) - 11 parameters",
      tests: ["Bilirubin Total", "Bilirubin Direct", "Bilirubin Indirect", "SGOT (AST)", "SGPT (ALT)", "Alkaline Phosphatase (ALP)", "Total Protein", "Albumin", "Globulin", "A/G Ratio", "Gamma Glutamyl Transferase (GGT)"]
    },
    {
      name: "Kidney Function Test (KFT) - 10 parameters",
      tests: ["Urea", "Creatinine", "Uric Acid", "BUN (Blood Urea Nitrogen)", "BUN/Creatinine Ratio", "Calcium", "Phosphorus", "Sodium", "Potassium", "Chloride"]
    },
    {
      name: "Lipid Profile (Heart Health) - 8 parameters",
      tests: ["Total Cholesterol", "Triglycerides", "HDL Cholesterol", "LDL Cholesterol", "VLDL Cholesterol", "Non-HDL Cholesterol", "TC/HDL Ratio", "LDL/HDL Ratio"]
    },
    {
      name: "Thyroid Profile (Ultra-sensitive) - 3 parameters",
      tests: ["T3 (Triiodothyronine)", "T4 (Thyroxine)", "TSH (Thyroid Stimulating Hormone)"]
    },
    {
      name: "Complete Hemogram (Blood & Immunity) - 28 parameters",
      tests: ["Hemoglobin", "RBC Count", "WBC Count", "Platelet Count", "Packed Cell Volume (PCV)", "MCV", "MCH", "MCHC", "RDW", "Neutrophils", "Lymphocytes", "Monocytes", "Eosinophils", "Basophils", "Absolute Counts"]
    },
    {
      name: "Diabetes & Urine Parameters - 31 parameters",
      tests: ["Blood Glucose Fasting", "Urine Routine Analysis", "Urine Microscopic Examination", "Specific Gravity", "Urine pH", "Protein/Albumin", "Urine Glucose", "Ketone Bodies", "Urine Bilirubin", "Urobilinogen", "Pus Cells", "Epithelial Cells"]
    }
  ];

  const faqs = [
    {
      q: "What is the Wellwise Total Profile?",
      a: "The Wellwise Total Profile is a comprehensive full-body checkup package consisting of 91 test parameters. It covers major vital organs and body systems including your liver, kidneys, thyroid, heart, blood cells, and blood sugar levels."
    },
    {
      q: "Why do I need a full body health checkup?",
      a: "Routine full body checkups help in early detection of potential health risks or underlying medical conditions such as diabetes, high cholesterol, liver dysfunction, or kidney issues, even before any symptoms appear."
    },
    {
      q: "Is fasting required for the Wellwise Total Profile?",
      a: "Yes, a minimum of 10 to 12 hours of overnight fasting is mandatory for this package. You may drink normal water during the fasting period, but avoid coffee, tea, juices, or food."
    },
    {
      q: "How soon will I get my reports?",
      a: "At Super Lab, we process samples quickly. You will receive your digital reports via email and WhatsApp within 12 hours of sample collection (Same Day)."
    },
    {
      q: "What is included in the home collection service?",
      a: "A highly trained, certified phlebotomist will visit your home at your scheduled time slot to collect your blood and urine samples in a sterile, safe manner using our Zero-Contamination QualiCare Kit."
    }
  ];

  return (
    <div className="test-detail-page-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--sans)' }}>
      
      <div className="breadcrumbs-container">
        <div className="ribbon-breadcrumbs">
          <a href="#/" className="ribbon-breadcrumb-item">HOME</a>
          <a href="#/lab-tests" className="ribbon-breadcrumb-item">CATALOG</a>
          <div className="ribbon-breadcrumb-item active">WELLWISE TOTAL PROFILE</div>
        </div>
      </div>

      <div className="page-section-container">
        <div className="test-hero-card">
          <div style={{ flex: 1, minWidth: 'min(300px, 100%)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'linear-gradient(135deg, #00b2b2 0%, #008080 100%)', color: 'white', padding: '6px 14px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '800', marginBottom: '14px' }}>
              <span>BEST VALUE Full Body Checkup</span>
            </div>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--blue)', margin: 0, letterSpacing: '-0.3px', lineHeight: 1.2 }}>
              Wellwise Total Profile
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', margin: '6px 0 0 0', fontWeight: '500' }}>
              Comprehensive health screening package • Includes 91 vital parameters
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Starting from</span>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--teal)', lineHeight: 1 }}>₹ 2279</span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>All taxes included</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', color: '#2e7d32' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#2e7d32', borderRadius: '50%' }}></span>
                <span>NABL Accredited Lab Partner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: '#e0f7fa', border: '1px solid #b2ebf2', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '700', color: '#006064' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#006064', borderRadius: '50%' }}></span>
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--teal-soft)',
          border: '1px solid #b2ebf2',
          borderRadius: '8px',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--teal-dark)',
          fontWeight: '700',
          fontSize: '0.95rem',
          marginBottom: '30px'
        }}>
          <span>FLAT 25% OFF ON ALL TESTS- Book Today!*</span>
          <Info size={16} style={{ cursor: 'pointer' }} />
        </div>

        <div className="test-grid-layout">
          <div>
            <div className="spec-card-grid">
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><FileText size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Package Name</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Wellwise Total Profile</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><Layers size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Package Type</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Full Body checkup</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><Droplet size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Sample Type</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Blood & Urine</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><Users size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Gender</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Both</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><Calendar size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Age group</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>All Age Groups</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><Info size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Fasting Required</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>10-12 Hrs Fasting</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><Clock size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Turnaround Time</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Within 12 Hours</span>
                </div>
              </div>
              <div className="spec-item-card">
                <div className="spec-icon-wrapper"><FileText size={18} /></div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Test Components</span>
                  <span 
                    style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--teal)', cursor: 'pointer', textDecoration: 'underline' }} 
                    onClick={() => alert('Scroll down to view parameters!')}
                  >
                    View (91 Parameters)
                  </span>
                </div>
              </div>
            </div>

            {/* Collection Availability Badge */}
            <div className="shining-speciality-badge">
              <Home size={20} className="badge-icon-pulse" />
              <span style={{ position: 'relative', zIndex: 2 }}>Home Sample Collection Available</span>
            </div>

            {/* Description & Table of Contents Card */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '30px',
              textAlign: 'left'
            }}>
              {/* Trusted by Professionals Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '10px 20px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff' }}>
                  <Check size={16} strokeWidth={3} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '500' }}>Trusted by</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--blue)' }}>Professionals</span>
                </div>
              </div>

              {/* Table of Contents Box */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '32px'
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--blue)', marginTop: 0, marginBottom: '16px' }}>
                  Table of Contents
                </h3>
                <ul style={{ 
                  listStyleType: 'disc', 
                  paddingLeft: '20px', 
                  margin: 0, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '10px',
                  color: 'var(--teal)'
                }}>
                  {[
                    'Overview of the Wellwise Total Profile checkup',
                    'Key Test Parameters and Vital Organs Evaluated',
                    'Preparations Before the Wellwise Total Profile checkup',
                    'What to Expect During the Procedure',
                    'Understanding the Test Reports',
                    'Health Benefits of a Regular Full Body Checkup'
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a href={`#section-${idx}`} style={{ color: 'var(--teal)', fontWeight: '600', textDecoration: 'none', transition: 'color 0.2s' }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description Section */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--teal)', marginTop: 0, marginBottom: '16px' }}>
                  Description
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                  The Wellwise Total Profile is a premium, complete health screening profile designed to provide a comprehensive analysis of your overall health. It checks the health of your liver, kidneys, heart, thyroid, blood cells, and detects diabetes early. Perfect for all adults who want to proactively track their wellness, it helps you detect critical conditions before they display any symptoms.
                  <span style={{ color: 'var(--teal)', fontWeight: '700', cursor: 'pointer', marginLeft: '4px' }} onClick={() => alert('Read More clicked!')}>Read More</span>
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
            <div className="sticky-summary-card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue)', margin: '0 0 16px 0' }}>
                Booking Summary
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)', paddingBottom: '14px', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Price per package</span>
                  <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--teal)', marginTop: '2px' }}>₹ 2279</span>
                </div>
                <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700' }}>
                  Best Deal
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--muted)' }}>
                  <Check size={14} color="var(--teal)" strokeWidth={3} />
                  <span>Free home collection included</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--muted)' }}>
                  <Check size={14} color="var(--teal)" strokeWidth={3} />
                  <span>Certified phlebotomist visit</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--muted)' }}>
                  <Check size={14} color="var(--teal)" strokeWidth={3} />
                  <span>Quality reports in 12 hours</span>
                </div>
              </div>
              <button 
                onClick={handleToggleCart}
                className={`btn-action-block ${isAdded ? 'added' : ''}`}
              >
                {isAdded ? 'ADDED (REMOVE)' : 'Add to Cart'}
              </button>
            </div>
            
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--teal)', marginTop: 0, marginBottom: '12px', letterSpacing: '0.5px' }}>
                WELLWISE TOTAL PROFILE SAMPLE REPORT
              </h3>
              <p style={{ color: 'var(--blue)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.4' }}>
                Track and manage your health better with SAMPLE REPORT
              </p>
              <button 
                onClick={() => window.open('/sample_blood_report.pdf', '_blank')}
                className="btn-action-block"
              >
                <FileText size={18} />
                <span>View Sample Report</span>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
              <a href="#/recommended-tests" style={{
                flex: 1,
                backgroundColor: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--blue)',
                fontWeight: '700',
                fontSize: '0.9rem',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)' }}>
                  <ShoppingCart size={14} />
                </div>
                <span>Recommended Tests</span>
              </a>

              <a href="#/faqs" style={{
                flex: 1,
                backgroundColor: '#ffffff',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--blue)',
                fontWeight: '700',
                fontSize: '0.9rem',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)' }}>
                  <HelpCircle size={14} />
                </div>
                <span>FAQs</span>
              </a>
            </div>

            <div style={{
              backgroundColor: '#e6f2ff',
              borderLeft: '5px solid #0056b3',
              borderRadius: '0 8px 8px 0',
              padding: '16px 20px',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: '#003c71',
              textAlign: 'left',
              flexGrow: 1
            }}>
              <strong>Quick Summary:</strong> The Wellwise Total Profile is a comprehensive health screening package, for both men and women across all age groups, with reports available within 12hrs * — currently offered at ₹2279. Home Sample Collection is available. This package is ideal for regular health monitoring, ensuring that vital organs function optimally and detecting early warning signs of chronic illnesses like diabetes, kidney disease, or liver complications. With our certified phlebotomists and fast testing, you receive accurate reports delivered straight to your WhatsApp and email.
            </div>
          </div>
        </div>
      </div>

      {/* Test Components Section (Full Width) */}
      <div className="page-section-container no-margin-bottom">
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--line)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--teal)', margin: 0 }}>Test Components</h2>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            {categories.map((cat, idx) => {
              const isOpen = !!openCategories[idx];
              return (
                <div key={idx} className="category-accordion">
                  <button className="category-header" onClick={() => toggleCategory(idx)}>
                    <span>{cat.name}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="category-body">
                      {cat.tests.map((test, tIdx) => (
                        <div key={tIdx} className="test-parameter-item">
                          <span style={{ color: 'var(--teal)', display: 'flex' }}><Check size={14} strokeWidth={3} /></span>
                          <span>{test}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{
            backgroundColor: 'var(--blue-soft)',
            borderLeft: '4px solid var(--blue)',
            borderRadius: '0 8px 8px 0',
            padding: '16px 20px',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: 'var(--ink)'
          }}>
            The number of tests listed under each panel/package is indicative and may vary based on the patient's age, gender, clinical condition, medical history, and the treating doctor's advice. Accordingly, certain parameters may be added, excluded, or modified. For further clarity, the sample report format may also be referred to.
          </div>
        </div>

        {/* Quality/Trust Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          <div 
            onClick={() => setIsIsoModalOpen && setIsIsoModalOpen(true)}
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            className="trust-badge-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#f59e0b', color: '#ffffff', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>ISO 9001:2015</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Certified Lab</span>
            </div>
          </div>
          <div className="trust-badge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff', flexShrink: 0 }}>
              <span style={{ fontSize: '1.4rem' }}>★</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>Certified</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Phlebotomist</span>
            </div>
          </div>
          <div className="trust-badge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>Division of</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Super Healthcare</span>
            </div>
          </div>
          <div className="trust-badge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.25-2.5 3-2.5 4.5h20c0-1.5-1-3.25-2.5-4.5M12 2v14M9 5h6"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>Safe Sample</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Collection</span>
            </div>
          </div>
          <div className="trust-badge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>Accurate &</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Quality Reports</span>
            </div>
          </div>
          <div className="trust-badge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>Same Day</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Report*</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section (Full Width) */}
      <div className="page-section-container no-margin-bottom text-left">
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--blue)', marginBottom: '24px' }}>
          Frequently Asked Questions (FAQ's) About Wellwise Total Profile
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px 32px', boxShadow: 'var(--shadow-sm)', marginBottom: '40px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  borderBottom: idx === faqs.length - 1 ? 'none' : '1px solid var(--teal)', 
                  padding: '18px 0' 
                }}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: 'var(--teal)',
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {isOpen && (
                  <div style={{ 
                    marginTop: '12px', 
                    color: 'var(--muted)', 
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    paddingBottom: '8px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* How Does Home Sample Collection work? */}
      <HomeCollectionWorkflow />
    </div>
  );
};

export default WellwiseTotalProfilePage;
