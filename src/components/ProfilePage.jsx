
import {
  User, Mail, Phone, Clock, Download, ArrowLeft, Shield, MapPin,
  Activity, Award, UserCheck
} from 'lucide-react';

const ProfilePage = () => {
  // Simulated patient data
  const patient = {
    id: "SL-90823",
    name: "Jayakumar B",
    email: "test098ac@gmail.com",
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
    <div className="profile-page-container">
      <div className="profile-page-wrapper">
        
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <a href="#/" className="profile-back-link">
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>

        {/* Profile Grid */}
        <div className="profile-grid-container">
          
          {/* Main Hero Header Card */}
          <div className="profile-hero-card">
            <div className="profile-avatar-wrapper">
              {/* User Avatar Circle */}
              <div className="profile-avatar-circle">
                <User size={40} style={{ color: '#ffffff' }} />
              </div>
              
              <div className="profile-user-info">
                <div className="profile-user-name-row">
                  <h1 className="profile-user-name">{patient.name}</h1>
                  <span className="profile-patient-id">
                    ID: {patient.id}
                  </span>
                </div>
                
                <p className="profile-member-since">
                  <UserCheck size={16} /> Member Since {patient.memberSince}
                </p>
              </div>
            </div>

            {/* Quick Details Badges */}
            <div className="profile-quick-details">
              <div className="profile-quick-badge">
                <span className="profile-quick-badge-label">Blood</span>
                <span className="profile-quick-badge-value orange">{patient.bloodGroup}</span>
              </div>
              <div className="profile-quick-badge">
                <span className="profile-quick-badge-label">Age</span>
                <span className="profile-quick-badge-value">{patient.age} Yrs</span>
              </div>
              <div className="profile-quick-badge">
                <span className="profile-quick-badge-label">Gender</span>
                <span className="profile-quick-badge-value">{patient.gender}</span>
              </div>
            </div>
          </div>

          {/* Two Columns for Info & History */}
          <div className="profile-columns-layout">
            
            {/* Left Column: Personal info & Health metrics */}
            <div className="profile-left-column">
              
              {/* Patient Contact & Emergency Info */}
              <div className="profile-card">
                <h3 className="profile-card-title-border">
                  Contact Information
                </h3>
                
                <div className="profile-info-list">
                  <div className="profile-info-item">
                    <div className="profile-info-icon-wrapper">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="profile-info-label">Phone Number</span>
                      <span className="profile-info-value">{patient.phone}</span>
                    </div>
                  </div>

                  <div className="profile-info-item">
                    <div className="profile-info-icon-wrapper">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="profile-info-label">Email Address</span>
                      <span className="profile-info-value">{patient.email}</span>
                    </div>
                  </div>

                  <div className="profile-info-item">
                    <div className="profile-info-icon-wrapper">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className="profile-info-label">Residential Address</span>
                      <span className="profile-info-value address">{patient.address}</span>
                    </div>
                  </div>

                  <div className="profile-info-item" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginTop: '4px' }}>
                    <div className="profile-info-icon-wrapper emergency">
                      <Shield size={16} />
                    </div>
                    <div>
                      <span className="profile-info-label">Emergency Contact</span>
                      <span className="profile-info-value">{patient.emergencyContact.name}</span>
                      <span className="profile-info-value emergency-phone">{patient.emergencyContact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Metrics Card */}
              <div className="profile-card">
                <div className="profile-card-header">
                  <h3 className="profile-card-title">
                    Recent Lab Metrics
                  </h3>
                  <Activity size={18} style={{ color: 'var(--teal)' }} />
                </div>

                <div className="profile-metrics-list">
                  {vitals.map((vit, idx) => (
                    <div key={idx} className="profile-metric-item" style={{ borderLeft: `4px solid ${vit.color}` }}>
                      <div>
                        <span className="profile-metric-name">{vit.name}</span>
                        <span className="profile-metric-range">Normal: {vit.range}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="profile-metric-value">
                          {vit.value} <span className="profile-metric-unit">{vit.unit}</span>
                        </span>
                        <span className="profile-metric-status">
                          {vit.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

            {/* Right Column: Bookings and Dealings History */}
            <div className="profile-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="profile-card-header">
                <h3 className="profile-card-title">
                  Previous Dealings & Lab History
                </h3>
                <Award size={20} style={{ color: 'var(--orange)' }} />
              </div>

              <div className="profile-bookings-list">
                {bookings.map((booking, idx) => (
                  <div key={idx} className="profile-booking-card">
                    {/* Header Row */}
                    <div className="profile-booking-header">
                      <div>
                        <span className="profile-booking-id">ORDER ID: {booking.id}</span>
                        <h4 className="profile-booking-name">{booking.testName}</h4>
                      </div>
                      <span className="profile-booking-status" style={{ backgroundColor: booking.badgeColor }}>
                        {booking.status}
                      </span>
                    </div>

                    <p className="profile-booking-desc">
                      {booking.description}
                    </p>

                    {/* Footer Row */}
                    <div className="profile-booking-footer">
                      <div className="profile-booking-meta-group">
                        <div>
                          <span className="profile-booking-meta-label">DATE</span>
                          <span className="profile-booking-meta-value">{booking.date}</span>
                        </div>
                        <div>
                          <span className="profile-booking-meta-label">AMOUNT PAID</span>
                          <span className="profile-booking-meta-value">{booking.amount}</span>
                        </div>
                      </div>

                      {booking.canDownload ? (
                        <button 
                          onClick={() => handleDownloadReport(booking.testName)}
                          className="btn-profile-download"
                        >
                          <Download size={14} />
                          Download Report
                        </button>
                      ) : (
                        <span className="profile-awaiting-badge">
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
