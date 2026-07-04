import {
  User, Mail, Phone, Clock, Download, ArrowLeft, Shield, MapPin,
  Activity, Award, UserCheck
} from 'lucide-react';

const ProfilePage = () => {
  // Simulated patient data
  const patient = {
    id: "SL-90823",
    name: "Jayakumar B",
    email: "[EMAIL_ADDRESS]",
    phone: "+91 98765 43210",
    age: 28,
    gender: "Male",
    bloodGroup: "O+",
    address: "123, Health Avenue, Adyar, Chennai - 600020",
    memberSince: "May 2026",
    emergencyContact: {
      name: "Radhika (Spouse)",
      phone: "+91 98765 43211"
    }
  };

  // Simulated health metric history
  const vitals = [
    { name: "Haemoglobin", value: "14.2", unit: "g/dL", range: "13.5 - 17.5", status: "Normal", color: "#10b981" },
    { name: "Blood Sugar (Fasting)", value: "92", unit: "mg/dL", range: "70 - 100", status: "Normal", color: "#10b981" },
    { name: "Total Cholesterol", value: "185", unit: "mg/dL", range: "< 200", status: "Normal", color: "#10b981" },
    { name: "HbA1c", value: "5.6", unit: "%", range: "< 5.7", status: "Normal", color: "#10b981" }
  ];

  // Simulated previous transactions & dealings
  const bookings = [
    {
      id: "BK-7092",
      testName: "Thyroid Profile (T3, T4, TSH) Test",
      date: "July 05, 2026",
      amount: "₹399",
      status: "Scheduled",
      badgeColor: "#f59e0b",
      description: "Home sample collection scheduled between 7:00 AM - 8:30 AM",
      canDownload: false
    },
    {
      id: "BK-6421",
      testName: "Wellwise Total Profile",
      date: "June 12, 2026",
      amount: "₹2,279",
      status: "Completed",
      badgeColor: "#10b981",
      description: "Sample collected at home. Report generated & verified.",
      canDownload: true
    },
    {
      id: "BK-5190",
      testName: "Haemoglobin Estimation",
      date: "May 05, 2026",
      amount: "₹180",
      status: "Completed",
      badgeColor: "#10b981",
      description: "Walk-in lab test. Report generated.",
      canDownload: true
    }
  ];

  const handleDownloadReport = (testName) => {
    alert(`Downloading medical report for: ${testName}\nFile: Report_${testName.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <a 
            href="#/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: 'var(--teal)', 
              textDecoration: 'none', 
              fontWeight: '700',
              fontSize: '0.95rem',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--teal-dark)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--teal)'}
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>

        {/* Profile Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          
          {/* Main Hero Header Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #003c71 0%, #002244 100%)', 
            borderRadius: '20px', 
            padding: '30px', 
            color: '#ffffff',
            boxShadow: '0 10px 25px rgba(0, 60, 113, 0.15)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {/* User Avatar Circle */}
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                border: '3px solid rgba(255, 255, 255, 0.2)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}>
                <User size={40} style={{ color: '#ffffff' }} />
              </div>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <h1 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-0.5px' }}>{patient.name}</h1>
                  <span style={{ 
                    backgroundColor: 'rgba(0, 163, 173, 0.2)', 
                    color: '#00d2de', 
                    padding: '4px 10px', 
                    borderRadius: '30px', 
                    fontSize: '0.75rem', 
                    fontWeight: '700',
                    border: '1px solid rgba(0, 163, 173, 0.4)'
                  }}>
                    ID: {patient.id}
                  </span>
                </div>
                
                <p style={{ margin: '6px 0 0 0', opacity: 0.8, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <UserCheck size={16} /> Member Since {patient.memberSince}
                </p>
              </div>
            </div>

            {/* Quick Details Badges */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '12px 18px', textAlign: 'center', minWidth: '70px' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 'bold' }}>Blood</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#ff6b00' }}>{patient.bloodGroup}</span>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '12px 18px', textAlign: 'center', minWidth: '70px' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 'bold' }}>Age</span>
                <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>{patient.age} Yrs</span>
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '12px 18px', textAlign: 'center', minWidth: '70px' }}>
                <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.7, textTransform: 'uppercase', fontWeight: 'bold' }}>Gender</span>
                <span style={{ fontSize: '1.15rem', fontWeight: '800' }}>{patient.gender}</span>
              </div>
            </div>
          </div>

          {/* Two Columns for Info & History */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 2fr)', gap: '30px', flexWrap: 'wrap' }}>
            
            {/* Left Column: Personal info & Health metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Patient Contact & Emergency Info */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <h3 style={{ margin: '0 0 20px 0', color: '#003c71', fontSize: '1.2rem', fontWeight: '750', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                  Contact Information
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ backgroundColor: '#f0fdfa', color: 'var(--teal)', borderRadius: '8px', padding: '8px' }}>
                      <Phone size={16} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>Phone Number</span>
                      <span style={{ fontWeight: '600', color: '#1e293b' }}>{patient.phone}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ backgroundColor: '#f0fdfa', color: 'var(--teal)', borderRadius: '8px', padding: '8px' }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>Email Address</span>
                      <span style={{ fontWeight: '600', color: '#1e293b' }}>{patient.email}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ backgroundColor: '#f0fdfa', color: 'var(--teal)', borderRadius: '8px', padding: '8px' }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>Residential Address</span>
                      <span style={{ fontWeight: '600', color: '#1e293b', fontSize: '0.88rem' }}>{patient.address}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: '4px' }}>
                    <div style={{ backgroundColor: '#fff5f5', color: '#ef4444', borderRadius: '8px', padding: '8px' }}>
                      <Shield size={16} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>Emergency Contact</span>
                      <span style={{ fontWeight: '600', color: '#1e293b' }}>{patient.emergencyContact.name}</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: '#ef4444', fontWeight: '600' }}>{patient.emergencyContact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Metrics Card */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                  <h3 style={{ margin: 0, color: '#003c71', fontSize: '1.2rem', fontWeight: '750' }}>
                    Recent Lab Metrics
                  </h3>
                  <Activity size={18} style={{ color: 'var(--teal)' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {vitals.map((vit, idx) => (
                    <div key={idx} style={{ 
                      backgroundColor: '#f8fafc', 
                      borderRadius: '12px', 
                      padding: '12px 16px', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      borderLeft: `4px solid ${vit.color}`
                    }}>
                      <div>
                        <span style={{ display: 'block', fontWeight: '700', color: '#1e293b', fontSize: '0.9rem' }}>{vit.name}</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Normal: {vit.range}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'block', fontWeight: '800', color: '#003c71', fontSize: '1.1rem' }}>{vit.value} <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b' }}>{vit.unit}</span></span>
                        <span style={{ fontSize: '0.72rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '2px 8px', borderRadius: '20px', fontWeight: 'bold' }}>
                          {vit.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

            {/* Right Column: Bookings and Dealings History */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                <h3 style={{ margin: 0, color: '#003c71', fontSize: '1.25rem', fontWeight: '750' }}>
                  Previous Dealings & Lab History
                </h3>
                <Award size={20} style={{ color: 'var(--orange)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {bookings.map((booking, idx) => (
                  <div key={idx} style={{ 
                    border: '1.5px solid #e2e8f0', 
                    borderRadius: '16px', 
                    padding: '20px', 
                    transition: 'all 0.2s',
                    position: 'relative'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--teal)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                  >
                    {/* Header Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                      <div>
                        <span style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--muted)', display: 'block' }}>ORDER ID: {booking.id}</span>
                        <h4 style={{ margin: '4px 0 0 0', color: '#003c71', fontSize: '1.05rem', fontWeight: '750' }}>{booking.testName}</h4>
                      </div>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '750', 
                        padding: '4px 10px', 
                        borderRadius: '20px', 
                        color: '#ffffff',
                        backgroundColor: booking.badgeColor 
                      }}>
                        {booking.status}
                      </span>
                    </div>

                    <p style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>
                      {booking.description}
                    </p>

                    {/* Footer Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px', marginTop: '12px' }}>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <div>
                          <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', fontWeight: 'bold' }}>DATE</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#475569' }}>{booking.date}</span>
                        </div>
                        <div>
                          <span style={{ display: 'block', fontSize: '0.7rem', color: '#94a3b8', fontWeight: 'bold' }}>AMOUNT PAID</span>
                          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#475569' }}>{booking.amount}</span>
                        </div>
                      </div>

                      {booking.canDownload ? (
                        <button 
                          onClick={() => handleDownloadReport(booking.testName)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: 'transparent',
                            color: 'var(--teal)',
                            border: '1.5px solid var(--teal)',
                            borderRadius: '8px',
                            padding: '8px 14px',
                            fontSize: '0.82rem',
                            fontWeight: '750',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--teal)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'var(--teal)';
                          }}
                        >
                          <Download size={14} />
                          Download Report
                        </button>
                      ) : (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#94a3b8', fontWeight: '600' }}>
                          <Clock size={14} />
                          Awaiting Sample
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
