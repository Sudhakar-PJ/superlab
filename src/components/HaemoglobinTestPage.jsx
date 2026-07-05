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


const HaemoglobinTestPage = ({ setIsIsoModalOpen }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [openCategories, setOpenCategories] = useState({ 0: true });
  const [isAdded, setIsAdded] = useState(false);

  const toggleCategory = (idx) => {
    setOpenCategories(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const categories = [
    {
      name: "Primary Parameter - 1 test",
      tests: [
        "Haemoglobin (Hb) - Measures the concentration of the oxygen-binding protein in blood."
      ]
    },
    {
      name: "Why it is measured (Clinical Significance)",
      tests: [
        "Detecting and monitoring Anemia (low hemoglobin levels)",
        "Checking for Polycythemia (abnormally high red blood cell counts)",
        "Evaluating general wellness, nutrition levels, and oxygen-carrying capacity",
        "Monitoring response to iron supplements or erythropoietin treatment"
      ]
    }
  ];


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
    }
  ];

  return (
    <div className="test-detail-page-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--sans)' }}>
      
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

      <div style={{ backgroundColor: 'transparent', padding: '16px 40px 0 40px', textAlign: 'left' }}>
        <div className="ribbon-breadcrumbs">
          <a href="#/" className="ribbon-breadcrumb-item">HOME</a>
          <a href="#/lab-tests" className="ribbon-breadcrumb-item">CATALOG</a>
          <div className="ribbon-breadcrumb-item active">HAEMOGLOBIN ESTIMATION</div>
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
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'linear-gradient(135deg, #00b2b2 0%, #008080 100%)', color: 'white', padding: '6px 14px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '800', marginBottom: '14px' }}>
              <span>Diagnostic Blood Test</span>
            </div>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--blue)', margin: 0, letterSpacing: '-0.3px', lineHeight: 1.2 }}>
              Haemoglobin Estimation Test
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.98rem', margin: '6px 0 0 0', fontWeight: '500' }}>
              Also known as HB Test • Measures oxygen-carrying protein capacity
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600' }}>Starting from</span>
              <span style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--teal)', lineHeight: 1 }}>₹ 130</span>
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
                <span style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700' }}>
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
                className={`btn-action-block ${isAdded ? 'added' : ''}`}
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
                onClick={() => window.open('/sample_blood_report.pdf', '_blank')}
                className="btn-action-block"
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
                    <div className="category-body" style={{ gridTemplateColumns: '1fr' }}>
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
      <HomeCollectionWorkflow />

    </div>
  );
};

export default HaemoglobinTestPage;
