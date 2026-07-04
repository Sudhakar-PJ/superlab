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

const HaemoglobinTestPage = ({ setIsIsoModalOpen }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const checkCart = () => {
      if (window.getSuperlabCart) {
        const cart = window.getSuperlabCart();
        setIsAdded(cart.some(item => item.name === 'Haemoglobin Estimation Test'));
      }
    };
    checkCart();
    window.addEventListener('superlab_cart_update', checkCart);
    return () => window.removeEventListener('superlab_cart_update', checkCart);
  }, []);

  const faqs = [
    {
      q: "What is a Hemoglobin Test?",
      a: "A hemoglobin test measures the amount of hemoglobin in your red blood cells. Hemoglobin is a protein that carries oxygen from your lungs to the rest of your body."
    },
    {
      q: "What is the Purpose of Haemoglobin Test?",
      a: "It helps diagnose conditions like anemia, polycythemia, or track response to treatments for blood-related diseases."
    },
    {
      q: "Why do I need a haemoglobin test?",
      a: "You may need it as part of a routine checkup, or if you have symptoms like fatigue, weakness, dizziness, cold hands and feet, or pale skin."
    },
    {
      q: "What happens during a haemoglobin test?",
      a: "A healthcare professional will take a blood sample from a vein in your arm or via a finger prick."
    },
    {
      q: "Do I Need To Prepare for Anything For the haemoglobin test?",
      a: "No special preparation or fasting is required unless you are having other tests at the same time."
    },
    {
      q: "What do the haemoglobin test results mean?",
      a: "Low hemoglobin levels indicate anemia, while high levels might indicate erythrocytosis, dehydration, lung disease, or smoking."
    },
    {
      q: "What is a normal haemoglobin level?",
      a: "For adult males: 13.8 to 17.2 g/dL. For adult females: 12.1 to 15.1 g/dL."
    },
    {
      q: "What happens if haemoglobin is low?",
      a: "Low levels mean your body isn't getting enough oxygen, causing fatigue, shortness of breath, or headache."
    },
    {
      q: "How Can I Increase my Haemoglobin Level?",
      a: "Eat iron-rich foods, increase vitamin C intake (to improve iron absorption), and avoid iron-blocking foods/drinks like tea and coffee during meals."
    },
    {
      q: "What are the Foods to Increase Haemoglobin Level?",
      a: "Spinach, red meat, poultry, seafood, beans, lentils, fortified cereals, dried fruits (raisins, apricots), and citrus fruits."
    },
    {
      q: "What is the Haemoglobin Test Price in Cities?",
      a: "The price for a Haemoglobin Estimation Test starts at ₹130 and may vary slightly based on the location and home collection charges."
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
        
        /* Dashboard Spec Cards */
        .spec-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        .spec-item-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .spec-item-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);
          border-color: var(--teal);
        }
        .spec-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--teal-soft);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Sticky Booking Summary Card */
        .sticky-summary-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 20px;
          text-align: left;
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
      
      {/* ========================================================= */}
      {/* METHOD A: Minimalist Modern with ChevronRight separator & interactive hover transitions (COMMENTED OUT) */}
      {/* 
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--line)', padding: '14px 40px' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <a href="#/" style={{ color: '#003c71', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#00a3ad'} onMouseOut={(e) => e.currentTarget.style.color = '#003c71'}>
            <Home size={14} /> Home
          </a>
          <ChevronRight size={12} style={{ color: '#cbd5e1' }} />
          <a href="#/lab-tests" style={{ color: '#003c71', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#00a3ad'} onMouseOut={(e) => e.currentTarget.style.color = '#003c71'}>Lab Tests</a>
          <ChevronRight size={12} style={{ color: '#cbd5e1' }} />
          <span style={{ color: '#64748b', fontWeight: 500 }}>Haemoglobin Estimation Test</span>
        </div>
      </div>
      */}

      {/* METHOD B: Soft Pill Badge Backgrounds (COMMENTED OUT) */}
      {/* 
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--line)', padding: '14px 40px' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <a href="#/" style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '20px', backgroundColor: '#f1f5f9', color: '#003c71', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#e2edf6'; e.currentTarget.style.color = '#00a3ad'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#003c71'; }}>
            <Home size={13} /> Home
          </a>
          <ChevronRight size={12} style={{ color: '#94a3b8' }} />
          <a href="#/lab-tests" style={{ padding: '6px 12px', borderRadius: '20px', backgroundColor: '#f1f5f9', color: '#003c71', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#e2edf6'; e.currentTarget.style.color = '#00a3ad'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; e.currentTarget.style.color = '#003c71'; }}>
            Lab Tests
          </a>
          <ChevronRight size={12} style={{ color: '#94a3b8' }} />
          <span style={{ padding: '6px 14px', borderRadius: '20px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b', fontWeight: 500 }}>
            Haemoglobin Estimation Test
          </span>
        </div>
      </div>
      */}

      {/* METHOD C: Glassmorphic floating bar with active status dot (COMMENTED OUT) */}
      {/* 
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(226, 237, 246, 0.8)', padding: '14px 40px' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', fontSize: '0.88rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <a href="#/" style={{ color: '#003c71', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <Home size={14} /> Home
          </a>
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>/</span>
          <a href="#/lab-tests" style={{ color: '#003c71', fontWeight: 600, textDecoration: 'none' }}>Lab Tests</a>
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>/</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00a3ad' }}></span>
            <span style={{ color: '#1e293b', fontWeight: 600 }}>Haemoglobin Estimation Test</span>
          </div>
        </div>
      </div>
      */}
      {/* METHOD D: Glowing Tech Stepper Track (COMMENTED OUT - REUSABLE) */}
      {/* 
      <div style={{ padding: '20px 40px 0 40px', textAlign: 'left' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 60, 113, 0.03)', 
          border: '1px solid rgba(0, 163, 173, 0.15)',
          borderRadius: '30px', 
          padding: '6px 16px',
          gap: '12px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
        }}>
          <a href="#/" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#003c71', fontWeight: '800', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#003c71', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 'bold' }}>H</span>
            Home
          </a>
          
          <div style={{ width: '20px', height: '2px', backgroundColor: 'rgba(0, 163, 173, 0.3)' }} />
          
          <a href="#/lab-tests" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#003c71', fontWeight: '800', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#003c71', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 'bold' }}>T</span>
            Tests
          </a>
          
          <div style={{ width: '20px', height: '2px', backgroundColor: '#00a3ad' }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: '800', color: '#00a3ad', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <span style={{ 
              width: '22px', 
              height: '22px', 
              borderRadius: '50%', 
              backgroundColor: '#00a3ad', 
              color: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '0.72rem', 
              fontWeight: 'bold', 
              boxShadow: '0 0 8px rgba(0,163,173,0.5)'
            }}>H</span>
            Hemoglobin Test
          </div>
        </div>
      </div>
      */}

      {/* METHOD E: Futuristic Overlapping Chevron Ribbons (COMMENTED OUT - REUSABLE) */}
      {/* 
      <div style={{ backgroundColor: 'transparent', padding: '16px 40px 0 40px', textAlign: 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', maxWidth: '100%', overflowX: 'auto', paddingBottom: '4px' }}>
          <a href="#/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 24px 10px 18px', backgroundColor: '#003c71', color: '#ffffff', fontWeight: 'bold', fontSize: '0.82rem', borderRadius: '8px 0 0 8px', clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)', textDecoration: 'none' }}>
            <Home size={14} /> Home
          </a>
          <a href="#/lab-tests" style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 24px 10px 24px', backgroundColor: '#e2edf6', color: '#003c71', fontWeight: 'bold', fontSize: '0.82rem', clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%, 10% 0%)', textDecoration: 'none', marginLeft: '-8px' }}>
            Lab Tests
          </a>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '10px 24px 10px 24px', backgroundColor: '#f0fdfa', color: '#00a3ad', fontWeight: 'bold', fontSize: '0.82rem', borderRadius: '0 8px 8px 0', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 50%)', marginLeft: '-8px' }}>
            Haemoglobin Test
          </div>
        </div>
      </div>
      */}

      {/* METHOD F: Rounded-Cap Interlocking Chevron Ribbons (ACTIVE) */}
      <div style={{ backgroundColor: 'transparent', padding: '16px 40px 0 40px', textAlign: 'left' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', maxWidth: '100%', overflowX: 'auto', padding: '10px 0' }}>
          {/* Segment 1: HOME */}
          <a href="#/" style={{ 
            position: 'relative', 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '12px 0', 
            color: '#ffffff', 
            fontWeight: '900', 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            textDecoration: 'none',
            width: '125px',
            justifyContent: 'center',
            marginRight: '-10px',
            isolation: 'isolate'
          }}>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
              {/* White outer stroke path */}
              <path d="M12,1 h78 l10,19 l-10,19 h-78 a19,19 0 0,1 0,-38 z" fill="#ffffff" />
              {/* Brand blue filled path */}
              <path d="M12,3 h76 l9,17 l-9,17 h-76 a17,17 0 0,1 0,-34 z" fill="#003c71" />
            </svg>
            HOME
          </a>

          {/* Segment 2: CATALOG */}
          <a href="#/lab-tests" style={{ 
            position: 'relative', 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '12px 0', 
            color: '#ffffff', 
            fontWeight: '900', 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            textDecoration: 'none',
            width: '125px',
            justifyContent: 'center',
            marginRight: '-12px',
            isolation: 'isolate'
          }}>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
              {/* White outer stroke path */}
              <path d="M2,1 h86 l10,19 l-10,19 h-86 l10,-19 z" fill="#ffffff" />
              {/* Brand blue filled path */}
              <path d="M3,3 h83 l9,17 l-9,17 h-83 l9,-17 z" fill="#003c71" />
            </svg>
            CATALOG
          </a>

          {/* Segment 3: PRODUCT */}
          <div style={{ 
            position: 'relative', 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '12px 0', 
            color: '#ffffff', 
            fontWeight: '900', 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            width: '125px',
            justifyContent: 'center',
            isolation: 'isolate'
          }}>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
              {/* White outer stroke path */}
              <path d="M2,1 h86 a19,19 0 0,1 0,38 h-86 l10,-19 z" fill="#ffffff" />
              {/* Brand teal filled path */}
              <path d="M3,3 h80 a17,17 0 0,1 0,34 h-80 l9,-17 z" fill="#00a3ad" />
            </svg>
            PRODUCT
          </div>
        </div>
      </div>
      {/* ========================================================= */}

      <div style={{ maxWidth: '100%', margin: '40px auto', padding: '0 40px' }}>
        
        {/* Unified Hero Section */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          border: '1px solid var(--line)',
          padding: '28px 32px',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'var(--teal-soft)', color: 'var(--teal)', padding: '6px 14px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '800', marginBottom: '14px' }}>
              <span>Diagnostic Blood Test</span>
            </div>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--blue)', margin: 0, letterSpacing: '-0.3px', lineHeight: 1.2 }}>
              Haemoglobin Estimation Test
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', margin: '6px 0 0 0', fontWeight: '500' }}>
              Also known as HB Test • Measures oxygen-carrying protein capacity
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Starting from</span>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--teal)', lineHeight: 1 }}>₹ 130</span>
            </div>
            <button 
              onClick={() => {
                if (isAdded) {
                  if (window.getSuperlabCart) {
                    const cart = window.getSuperlabCart();
                    const updated = cart.filter(item => item.name !== 'Haemoglobin Estimation Test');
                    localStorage.setItem('superlab_cart', JSON.stringify(updated));
                    window.dispatchEvent(new Event('superlab_cart_update'));
                  }
                } else {
                  window.addToSuperlabCart({ id: 1, name: 'Haemoglobin Estimation Test', category: 'Anemia Test', price: 130, originalPrice: 173 });
                }
              }}
              style={{
                backgroundColor: isAdded ? '#fff3e0' : 'var(--orange)',
                color: isAdded ? 'var(--orange-dark)' : '#ffffff',
                border: isAdded ? '1px solid var(--orange)' : 'none',
                borderRadius: '10px',
                padding: '10px 36px',
                fontSize: '1.05rem',
                fontWeight: '800',
                cursor: 'pointer',
                boxShadow: isAdded ? 'none' : '0 4px 10px rgba(255, 107, 0, 0.2)',
                transition: 'all 0.2s ease',
                minWidth: '130px'
              }}
            >
              {isAdded ? 'ADDED' : 'ADD'}
            </button>
          </div>
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
          
          {/* Left Column: Test Specifications Dashboard Grid */}
          <div>
            <div className="spec-card-grid">
              
              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <FileText size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Test Name</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Haemoglobin Estimation</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <Layers size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Also Known as</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>HB Test</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <Droplet size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Sample Type</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Blood</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <Users size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Gender</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Both</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <Calendar size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Age group</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>All Age Groups</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <Info size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Fasting Required</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>No Fasting Required</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <Clock size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Turnaround Time</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--blue)' }}>Within 24 Hours</span>
                </div>
              </div>

              <div className="spec-item-card">
                <div className="spec-icon-wrapper">
                  <FileText size={18} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', fontWeight: '700', textTransform: 'uppercase' }}>Test Components</span>
                  <span 
                    style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--teal)', cursor: 'pointer', textDecoration: 'underline' }} 
                    onClick={() => alert('Showing Test Components!')}
                  >
                    View (1 Parameter)
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
                    'Overview of the Haemoglobin Estimation Test',
                    'Why Doctors Recommend Haemoglobin Estimation Test',
                    'Preparations Before the Haemoglobin Estimation Test',
                    'What to Expect During the Procedure',
                    'Understanding the Test Results',
                    'Factors That Can Influence Haemoglobin Levels in the Body?',
                    'Ways to Improve Haemoglobin Levels Naturally and Safely'
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
                  Haemoglobin, also known as Hgb or Hb, is a crucial protein that transports iron and is a major component of the red blood cells in the body. As this iron can store oxygen, transporting it from the lungs to other parts of the body, haemoglobin is a crucial component of blood. If the haemoglobin levels are low, it can indicate anaemia, and in the case of high levels, it can indicate the body needs an increased capacity to carry oxygen. It is extremely convenient.
                  <span style={{ color: 'var(--teal)', fontWeight: '700', cursor: 'pointer', marginLeft: '4px' }} onClick={() => alert('Read More clicked!')}>Read More</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar containing Sticky Summary Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
            
            {/* Sticky Booking Summary Card */}
            <div className="sticky-summary-card">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--blue)', margin: '0 0 16px 0' }}>
                Booking Summary
              </h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)', paddingBottom: '14px', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Price per test</span>
                  <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '800', color: 'var(--teal)', marginTop: '2px' }}>₹ 130</span>
                </div>
                <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 10px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: '700' }}>
                  Best Deal
                </span>
              </div>

              {/* Package Inclusions */}
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
                  <span>Quality reports in 24 hours</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  if (isAdded) {
                    if (window.getSuperlabCart) {
                      const cart = window.getSuperlabCart();
                      const updated = cart.filter(item => item.name !== 'Haemoglobin Estimation Test');
                      localStorage.setItem('superlab_cart', JSON.stringify(updated));
                      window.dispatchEvent(new Event('superlab_cart_update'));
                    }
                  } else {
                    window.addToSuperlabCart({ id: 1, name: 'Haemoglobin Estimation Test', category: 'Anemia Test', price: 130, originalPrice: 173 });
                  }
                }}
                style={{
                  width: '100%',
                  backgroundColor: isAdded ? '#fff3e0' : 'var(--orange)',
                  color: isAdded ? 'var(--orange-dark)' : '#ffffff',
                  border: isAdded ? '1px solid var(--orange)' : 'none',
                  borderRadius: '10px',
                  padding: '12px 20px',
                  fontSize: '0.98rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  boxShadow: isAdded ? 'none' : 'var(--shadow-sm)',
                  transition: 'all 0.2s'
                }}
              >
                {isAdded ? 'ADDED (REMOVE)' : 'Add to Cart'}
              </button>
            </div>
            
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
                HAEMOGLOBIN ESTIMATION TEST SAMPLE REPORT
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
              textAlign: 'left',
              flexGrow: 1
            }}>
              <strong>Quick Summary:</strong> The Haemoglobin Estimation is a diagnostic test, for both men and women across all age groups, with reports available within 24hrs * — currently offered at ₹130 . Home Sample Collection is available. This test is essential for checking your overall health, diagnosing anemia or polycythemia, and monitoring how well your body is transporting oxygen to vital tissues. With Superlab's highly certified phlebotomists collecting samples right from your doorstep, you get absolute safety, reliability, and digital reports delivered directly to your device within 24 hours.
            </div>

          </div>
        </div>
      </div>

      {/* Test Components Section (Full Width) */}
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
      <div style={{ maxWidth: '100%', margin: '40px auto 0 auto', padding: '0 40px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--blue)', marginBottom: '24px' }}>
          Frequently Asked Questions (FAQ's) About Haemoglobin Estimation
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

    </div>
  );
};

export default HaemoglobinTestPage;
