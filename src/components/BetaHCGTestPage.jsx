import { useState, useEffect } from 'react';
import { 
  Home, 
  ShoppingCart, 
  Info, 
  Phone, 
  FileText, 
  Droplet, 
  Users, 
  Calendar, 
  Layers, 
  Check, 
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const BetaHCGTestPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      if (window.getSuperlabCart) {
        const cart = window.getSuperlabCart();
        setIsAdded(cart.some(item => item.name === 'Beta HCG Test'));
      }
    };
    checkCart();
    window.addEventListener('superlab_cart_update', checkCart);
    return () => window.removeEventListener('superlab_cart_update', checkCart);
  }, []);

  const faqs = [
    {
      q: "What is a Beta HCG Test?",
      a: "A Beta HCG test measures the amount of human chorionic gonadotropin (HCG) in your blood. This hormone is produced during pregnancy."
    },
    {
      q: "What is the Purpose of Beta HCG Test?",
      a: "It is primarily used to confirm pregnancy, estimate the gestational age of the fetus, diagnose potential ectopic pregnancies, or monitor a miscarriage."
    },
    {
      q: "Why do I need a Beta HCG test?",
      a: "You may need this test to confirm pregnancy, if you are experiencing abnormal symptoms like vaginal bleeding or severe abdominal pain, or as part of prenatal screenings."
    },
    {
      q: "What happens during a Beta HCG test?",
      a: "A healthcare provider will draw a small sample of blood from a vein in your arm."
    },
    {
      q: "Do I Need To Prepare for Anything For the test?",
      a: "No special preparation or fasting is required for the Beta HCG blood test."
    },
    {
      q: "What do the Beta HCG test results mean?",
      a: "An elevated level confirms pregnancy. Extremely high levels may indicate multiple pregnancies (twins/triplets) or molar pregnancy. Low levels for gestational age could point to an ectopic pregnancy or potential miscarriage."
    }
  ];

  return (
    <div className="test-detail-page-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--sans)' }}>
      <style>{`
        .test-grid-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 30px;
          align-items: start;
        }
        .trust-badge-card {
          display: flex;
          align-items: center;
          background-color: #ffffff;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 16px 20px;
          flex: 1;
          min-width: 220px;
          box-shadow: var(--shadow-sm);
          gap: 14px;
        }
        @media (max-width: 1024px) {
          .test-grid-layout {
            grid-template-columns: 1fr !important;
          }
          .test-detail-page-wrapper {
            padding: 0 !important;
          }
        }
      `}</style>
      
      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--line)', padding: '14px 40px' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <a href="#/" style={{ color: 'var(--blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Home size={14} /> Home
          </a>
          <span>&gt;</span>
          <a href="#/" style={{ color: 'var(--blue)', fontWeight: 600 }}>Lab Tests</a>
          <span>&gt;</span>
          <span style={{ color: 'var(--muted)' }}>Beta HCG Test</span>
        </div>
      </div>

      <div style={{ maxWidth: '100%', margin: '40px auto', padding: '0 40px' }}>
        {/* Title, Price and Add Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--blue)', margin: 0, textTransform: 'capitalize' }}>
              Beta HCG Test
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '12px' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--teal)' }}>₹ 290</span>
            </div>
          </div>
          <button 
            onClick={() => {
              if (isAdded) {
                if (window.getSuperlabCart) {
                  const cart = window.getSuperlabCart();
                  const updated = cart.filter(item => item.name !== 'Beta HCG Test');
                  localStorage.setItem('superlab_cart', JSON.stringify(updated));
                  window.dispatchEvent(new Event('superlab_cart_update'));
                }
              } else {
                window.addToSuperlabCart({ id: 2, name: 'Beta HCG Test', category: 'Pregnancy Test', price: 290, originalPrice: 387 });
              }
            }}
            style={{
              backgroundColor: isAdded ? '#fff3e0' : 'var(--orange)',
              color: isAdded ? 'var(--orange-dark)' : '#ffffff',
              border: isAdded ? '1px solid var(--orange)' : 'none',
              borderRadius: '8px',
              padding: '12px 36px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: isAdded ? 'none' : 'var(--shadow-sm)',
              transition: 'background-color 0.2s',
              minWidth: '120px'
            }}
          >
            {isAdded ? 'ADDED' : 'ADD'}
          </button>
        </div>

        {/* Promo Banner */}
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

        {/* Main Content Grid */}
        <div className="test-grid-layout">
          
          {/* Left Column: Test Details Card */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow-sm)',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '24px' }}>
              {/* Row 1: Test Name */}
              <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <FileText size={18} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Test Name</span>
                  <span style={{ color: '#334155', fontWeight: '500' }}>: Beta HCG Test</span>
                </div>
              </div>

              {/* Row 2: Also Known as */}
              <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <Layers size={18} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Also Known as</span>
                  <span style={{ color: '#334155', fontWeight: '500' }}>: Free Beta HCG Test</span>
                </div>
              </div>

              {/* Row 3: Sample Type */}
              <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <Droplet size={18} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Sample Type</span>
                  <span style={{ color: '#334155', fontWeight: '500' }}>: Blood</span>
                </div>
              </div>

              {/* Row 4: Gender */}
              <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <Users size={18} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Gender</span>
                  <span style={{ color: '#334155', fontWeight: '500' }}>: Female Only</span>
                </div>
              </div>

              {/* Row 5: Age group */}
              <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <Calendar size={18} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Age group</span>
                  <span style={{ color: '#334155', fontWeight: '500' }}>: All Age Groups</span>
                </div>
              </div>

              {/* Row 6: Test Components */}
              <div style={{ display: 'flex', padding: '16px 0', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <FileText size={18} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Test Components</span>
                  <span>
                    : <span style={{ color: 'var(--teal)', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => alert('Showing Test Components!')}>View</span>
                  </span>
                </div>
              </div>

              {/* Row 7: Price */}
              <div style={{ display: 'flex', padding: '16px 0', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', marginRight: '16px', flexShrink: 0 }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', flex: 1, fontSize: '1rem' }}>
                  <span style={{ fontWeight: '700', color: 'var(--blue)' }}>Price</span>
                  <span style={{ color: 'var(--teal)', fontWeight: '800' }}>: ₹ 680</span>
                </div>
              </div>
            </div>

            {/* Card Footer: Home Sample Collection Available */}
            <div style={{
              backgroundColor: '#e8f5e9',
              borderTop: '1px solid #c8e6c9',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#2e7d32',
              fontWeight: '700',
              fontSize: '0.95rem'
            }}>
              <Home size={18} />
              <span>Home Sample Collection Available</span>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Sample Report Card */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--teal)', marginTop: 0, marginBottom: '12px', letterSpacing: '0.5px' }}>
                BETA HCG TEST SAMPLE REPORT
              </h3>
              <p style={{ color: 'var(--blue)', fontWeight: '700', fontSize: '0.95rem', marginBottom: '20px', lineHeight: '1.4' }}>
                Track and manage your health better with SAMPLE REPORT
              </p>
              <button 
                onClick={() => alert('Downloading Sample Report PDF...')}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--orange)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--orange-dark)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--orange)'}
              >
                <FileText size={18} />
                <span>View Sample Report</span>
              </button>
            </div>

            {/* Recommended Tests & FAQs links */}
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
                boxShadow: 'var(--shadow-sm)'
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
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)' }}>
                  <HelpCircle size={14} />
                </div>
                <span>FAQs</span>
              </a>
            </div>

            {/* Quick Summary box */}
            <div style={{
              backgroundColor: '#e6f2ff',
              borderLeft: '5px solid #0056b3',
              borderRadius: '0 8px 8px 0',
              padding: '16px 20px',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: '#003c71',
              textAlign: 'left'
            }}>
              <strong>Quick Summary:</strong> The Beta HCG test is a qualitative or quantitative blood analysis measuring human chorionic gonadotropin levels to establish or monitor fetal health during early pregnancy.
            </div>

          </div>
        </div>
      </div>

      {/* Test Components Section */}
      <div style={{ maxWidth: '100%', margin: '40px auto 0 auto', padding: '0 40px' }}>
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
            <button 
              onClick={() => alert('Showing Test Components!')}
              style={{
                backgroundColor: 'var(--orange)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              View
            </button>
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
            The number of tests listed under each panel/package is indicative and may vary based on the patient's age, gender, clinical condition, medical history, and the treating doctor's advice. Accordingly, certain parameters may be added, excluded, or modified.
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
          {/* Badge 1 */}
          <div className="trust-badge-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--teal)', color: '#ffffff', flexShrink: 0 }}>
              <span style={{ fontSize: '1.4rem' }}>★</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.2' }}>
              <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>Certified</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Phlebotomist</span>
            </div>
          </div>

          {/* Badge 2 */}
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

          {/* Badge 3 */}
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

          {/* Badge 4 */}
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

          {/* Badge 5 */}
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

        {/* Description & Table of Contents Card */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid var(--line)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '40px',
          textAlign: 'left',
          marginTop: '40px'
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
                'Overview of the Beta HCG Test',
                'Why Doctors Recommend Beta HCG Test',
                'Preparations Before the Beta HCG Test',
                'What to Expect During the Procedure',
                'Understanding the Test Results'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx}`} style={{ color: 'var(--teal)', fontWeight: '600', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--blue)'} onMouseLeave={(e) => e.target.style.color = 'var(--teal)'}>
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
              Human chorionic gonadotropin (HCG) is a glycoprotein hormone produced by the developing placenta shortly after fertilization. It helps maintain the corpus luteum and triggers progesterone secretion. HCG levels rise rapidly in early pregnancy, making it an excellent biomarker.
              <span style={{ color: 'var(--teal)', fontWeight: '700', cursor: 'pointer', marginLeft: '4px' }} onClick={() => alert('Read More clicked!')}>Read More</span>
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: '100%', margin: '40px auto 0 auto', padding: '0 40px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--blue)', marginBottom: '24px' }}>
          Frequently Asked Questions (FAQ's) About Beta HCG Test
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px 32px', boxShadow: 'var(--shadow-sm)' }}>
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
      <div style={{ maxWidth: '100%', margin: '60px auto 0 auto', padding: '0 40px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--blue)', marginBottom: '40px' }}>
          How Does Home Sample Collection work?
        </h2>
        
        {/* Steps container */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '30px', backgroundColor: '#f0f9fa', borderRadius: '24px', padding: '40px 30px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          
          {/* Wave connector line */}
          <div style={{
            position: 'absolute',
            top: '110px',
            left: '8%',
            right: '8%',
            height: '2px',
            borderTop: '2px dashed #00a3ad',
            opacity: 0.3,
            zIndex: 1
          }} />

          {/* Circles row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, position: 'relative', gap: '10px', flexWrap: 'wrap' }}>
            {[
              {
                num: "01.",
                icon: (
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3h8" />
                    <path d="M9 3v13a3 3 0 0 0 6 0V3" />
                    <path d="M9 9h6v7a3 3 0 0 1-6 0V9z" fill="currentColor" opacity="0.2" stroke="none" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                  </svg>
                )
              },
              {
                num: "02.",
                icon: (
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                )
              },
              {
                num: "03.",
                icon: (
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" ry="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                )
              },
              {
                num: "04.",
                icon: (
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                    <path d="M3 17h12v-5l-3-4H9l-2 4H3v5z"/>
                  </svg>
                )
              },
              {
                num: "05.",
                icon: (
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v7.31M14 2v7.31M8.5 2h7M14 11.5a4 4 0 1 1-4 0M12 15h.01M6.5 12a10.5 10.5 0 0 0 11 0M12 2v20"/>
                  </svg>
                )
              },
              {
                num: "06.",
                icon: (
                  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                )
              }
            ].map((step, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', minWidth: '120px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--blue)', marginBottom: '12px' }}>{step.num}</span>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '6px solid #e0f2f1',
                  boxShadow: '0 8px 16px rgba(0, 163, 173, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--ink)'
                }}>
                  {step.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Colored banner row */}
          <div style={{ display: 'flex', borderRadius: '16px', overflow: 'hidden', marginTop: '20px', flexWrap: 'wrap' }}>
            {[
              { text: "Select Your Test", bg: "#74b9d0" },
              { text: "Select Home Collection Option", bg: "#5a9cb8" },
              { text: "Select Time, Date & Pay Online", bg: "#4680a3" },
              { text: "Our Collection Agent Visits You", bg: "#25638c" },
              { text: "Testing Done At Lab", bg: "#104975" },
              { text: "View/ Download Your Report Online", bg: "#003c71" }
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  flex: '1', 
                  minWidth: '150px',
                  backgroundColor: item.bg, 
                  color: '#ffffff', 
                  padding: '14px 10px', 
                  textAlign: 'center', 
                  fontWeight: '700', 
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky/Banner Call Back Row */}
      <div style={{
        backgroundColor: '#00a3ad',
        color: '#ffffff',
        padding: '16px 24px',
        marginTop: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.5px' }}>
          Get a Call Back from our Health Advisor
        </span>
        <button 
          onClick={() => alert('Call Back Requested!')}
          style={{
            backgroundColor: 'var(--orange)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '24px',
            padding: '10px 24px',
            fontSize: '1rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--orange-dark)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--orange)'}
        >
          <Phone size={16} fill="#ffffff" />
          <span>Call me now</span>
        </button>
      </div>

    </div>
  );
};

export default BetaHCGTestPage;
