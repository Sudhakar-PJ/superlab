import { useState } from 'react';
import { 
  Activity, 
  CheckCircle, 
  Clock, 
  Database, 
  FileText,  
  LogOut, 
  ShieldAlert, 
  Sliders 
} from 'lucide-react';

const LISPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRole, setSelectedRole] = useState('doctor'); // doctor, tech, phleb
  const [activeTab, setActiveTab] = useState('worklist'); // overview, worklist, collections
  const [activeTestEdit, setActiveTestEdit] = useState(null); // holds test details being edited
  
  // Form states for test values
  const [testValues, setTestValues] = useState({
    hb: '14.2',
    rbc: '4.7',
    wbc: '6800',
    glucose: '95',
    tsh: '2.4'
  });

  // Mock employee profiles
  const profiles = {
    doctor: {
      name: "Dr. Vikram Malhotra",
      id: "EMP-SL-26-0941",
      role: "Chief Pathologist & Lab Director",
      dept: "Hematology & Pathology",
      shift: "General (09:00 AM - 05:30 PM)",
      status: "Clocked In",
      sig: "Verified (GMC-89421)",
      avatarColor: "#0284c7"
    },
    tech: {
      name: "Amit Sharma",
      id: "EMP-SL-26-1182",
      role: "Senior Lab Technologist",
      dept: "Clinical Biochemistry",
      shift: "Morning (07:00 AM - 03:00 PM)",
      status: "Clocked In",
      sig: "N/A (Analyst)",
      avatarColor: "#0f766e"
    },
    phleb: {
      name: "Suresh Kumar",
      id: "EMP-SL-26-2489",
      role: "Lead Field Phlebotomist",
      dept: "Mobile Health Services",
      shift: "Day (06:00 AM - 02:00 PM)",
      status: "On Field",
      sig: "N/A (Collector)",
      avatarColor: "#b45309"
    }
  };

  // Mock worklist data (simulated LIS queue)
  const [samples, setSamples] = useState([
    {
      id: "SL-2026-9412",
      patientName: "Sunita Sharma",
      ageGender: "45 Y / Female",
      testName: "Haemoglobin Estimation Test",
      barcode: "SLBC90412",
      urgency: "Routine",
      status: "Pending Entry", // Pending Entry, Review, Approved
      collectedAt: "13-Jul-2026 08:30 AM",
      results: { hb: '' }
    },
    {
      id: "SL-2026-9413",
      patientName: "Karan Johar",
      ageGender: "51 Y / Male",
      testName: "Wellwise Total Profile",
      barcode: "SLWW90413",
      urgency: "Stat / Urgent",
      status: "Pending Authorization",
      collectedAt: "13-Jul-2026 09:15 AM",
      results: { hb: '12.1', rbc: '4.2', wbc: '8500', glucose: '135', tsh: '6.8' }
    },
    {
      id: "SL-2026-9414",
      patientName: "Megha Gupta",
      ageGender: "29 Y / Female",
      testName: "Wellwise Total Profile",
      barcode: "SLWW90414",
      urgency: "Routine",
      status: "Pending Entry",
      collectedAt: "13-Jul-2026 10:00 AM",
      results: { hb: '', rbc: '', wbc: '', glucose: '', tsh: '' }
    },
    {
      id: "SL-2026-9415",
      patientName: "Rohan Verma",
      ageGender: "34 Y / Male",
      testName: "Haemoglobin Estimation Test",
      barcode: "SLBC90415",
      urgency: "Routine",
      status: "Approved",
      collectedAt: "13-Jul-2026 07:45 AM",
      results: { hb: '15.4' }
    }
  ]);

  const activeEmp = profiles[selectedRole];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTestEdit(null);
  };

  const handlePostResults = () => {
    if (!activeTestEdit) return;
    
    // Update the local sample state with entered results and advance status
    setSamples(prev => prev.map(sample => {
      if (sample.id === activeTestEdit.id) {
        return {
          ...sample,
          results: { ...testValues },
          status: selectedRole === 'doctor' ? 'Approved' : 'Pending Authorization'
        };
      }
      return sample;
    }));

    alert(selectedRole === 'doctor' ? 'Report approved and digitally signed!' : 'Results submitted to Pathologist for authorization.');
    setActiveTestEdit(null);
  };

  // Render Login Screen
  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--sans)',
        padding: '20px',
        color: '#f8fafc'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: '#1e293b',
          borderRadius: '16px',
          border: '1px solid #334155',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)',
          padding: '40px 32px'
        }}>
          {/* System Branding Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              marginBottom: '16px'
            }}>
              <Database size={32} />
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
              SuperLab LIS Portal
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
              Laboratory Information System & Staff Access
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Role Select Quick Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: '700', color: '#94a3b8', textAlign: 'left' }}>
                Select Employee Role
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['doctor', 'tech', 'phleb'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    style={{
                      flex: 1,
                      padding: '10px 8px',
                      borderRadius: '8px',
                      border: '1px solid ' + (selectedRole === role ? '#0284c7' : '#334155'),
                      backgroundColor: selectedRole === role ? '#0c4a6e' : '#1e293b',
                      color: selectedRole === role ? '#38bdf8' : '#cbd5e1',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      textTransform: 'capitalize',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {role === 'doctor' ? 'Pathologist' : role === 'tech' ? 'Technician' : 'Phlebotomist'}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                  Employee ID / Email
                </label>
                <input 
                  type="text" 
                  value={profiles[selectedRole].id} 
                  readOnly 
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: '#94a3b8', marginBottom: '6px' }}>
                  Password
                </label>
                <input 
                  type="password" 
                  value="••••••••" 
                  readOnly 
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: '#0f172a',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginTop: '10px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0369a1'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0284c7'}
            >
              Sign In to LIS Dashboard
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.75rem', color: '#64748b' }}>
            Authorized Access Only. All transactions and reports are logged and audit-compliant.
          </div>
        </div>
      </div>
    );
  }

  // Render Logged-in Private Dashboard (LIS Dashboard Layout)
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      fontFamily: 'var(--sans)',
      color: '#1e293b',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* LIS Dashboard Top Header Bar */}
      <header style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Database size={24} style={{ color: '#38bdf8' }} />
          <span style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.3px' }}>SuperLab LIS v2.6</span>
          <span style={{
            fontSize: '0.72rem',
            backgroundColor: '#1e293b',
            color: '#38bdf8',
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: 'bold',
            border: '1px solid #334155'
          }}>SECURE</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'inline-block'
            }}></span>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '500' }}>Lab Network Online</span>
          </div>
          <button 
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '0.8rem',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Dashboard Container */}
      <div style={{ display: 'flex', flex: 1, width: '100%', flexWrap: 'wrap' }}>
        
        {/* Left Side: Sidebar & Employee Profile Badge */}
        <aside style={{
          flex: '0 0 280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxSizing: 'border-box'
        }}>
          {/* Employee Profile Badge Card */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'left'
          }}>
            {/* Avatar Circle with initials */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: activeEmp.avatarColor,
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {activeEmp.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontWeight: '800', fontSize: '0.95rem', color: '#0f172a' }}>{activeEmp.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{activeEmp.id}</div>
              </div>
            </div>

            {/* Profile fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.76rem', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
              <div>
                <span style={{ color: '#64748b', fontWeight: '500' }}>Designation:</span>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>{activeEmp.role}</div>
              </div>
              <div>
                <span style={{ color: '#64748b', fontWeight: '500' }}>Department:</span>
                <div style={{ fontWeight: '700', color: '#0f172a' }}>{activeEmp.dept}</div>
              </div>
              <div>
                <span style={{ color: '#64748b', fontWeight: '500' }}>Shift Status:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '700', color: '#10b981', marginTop: '2px' }}>
                  <Clock size={12} />
                  {activeEmp.status}
                </div>
              </div>
              <div>
                <span style={{ color: '#64748b', fontWeight: '500' }}>E-Signature Approval:</span>
                <div style={{ fontWeight: '700', color: selectedRole === 'doctor' ? '#0284c7' : '#64748b' }}>{activeEmp.sig}</div>
              </div>
            </div>
          </div>

          {/* LIS Navigation Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <button 
              onClick={() => setActiveTab('overview')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'overview' ? '#e2e8f0' : 'transparent',
                color: activeTab === 'overview' ? '#0f172a' : '#64748b',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <Activity size={16} />
              LIS Overview
            </button>

            <button 
              onClick={() => setActiveTab('worklist')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'worklist' ? '#e2e8f0' : 'transparent',
                color: activeTab === 'worklist' ? '#0f172a' : '#64748b',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <FileText size={16} />
              Sample Worklist ({samples.filter(s => s.status !== 'Approved').length})
            </button>

            <button 
              onClick={() => setActiveTab('qc')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'qc' ? '#e2e8f0' : 'transparent',
                color: activeTab === 'qc' ? '#0f172a' : '#64748b',
                fontWeight: '700',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <Sliders size={16} />
              Quality Control & Cal
            </button>
          </div>
        </aside>

        {/* Right Side: Main Workboard Panel */}
        <main style={{
          flex: 1,
          padding: '30px',
          boxSizing: 'border-box',
          minWidth: '350px'
        }}>
          
          {/* Top KPI Stats widgets */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#e0f2fe', color: '#0284c7', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Database size={20} />
              </div>
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>Samples Logged</span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', color: '#0f172a' }}>142</h4>
              </div>
            </div>
            
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#fef3c7', color: '#d97706', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={20} />
              </div>
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>In Analysis</span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', color: '#0f172a' }}>{samples.filter(s => s.status === 'Pending Entry').length}</h4>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldAlert size={20} />
              </div>
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>Pending Doc Auth</span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', color: '#0f172a' }}>{samples.filter(s => s.status === 'Pending Authorization').length}</h4>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#dcfce7', color: '#16a34a', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={20} />
              </div>
              <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>Approved & Sent</span>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', margin: '4px 0 0 0', color: '#0f172a' }}>{samples.filter(s => s.status === 'Approved').length}</h4>
              </div>
            </div>
          </div>

          {/* ACTIVE VIEW TAB */}
          {activeTab === 'worklist' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Sample Worklist Table Card */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-sm)',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '20px 24px',
                  borderBottom: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--blue)', margin: 0 }}>
                    Active Patient Samples Worklist
                  </h3>
                  <div style={{
                    fontSize: '0.75rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontWeight: '600'
                  }}>
                    Total Queue: {samples.length} cases
                  </div>
                </div>

                {/* Table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: '700' }}>
                        <th style={{ padding: '14px 20px' }}>Sample Barcode</th>
                        <th style={{ padding: '14px 20px' }}>Patient Details</th>
                        <th style={{ padding: '14px 20px' }}>Investigation Requested</th>
                        <th style={{ padding: '14px 20px' }}>Urgency</th>
                        <th style={{ padding: '14px 20px' }}>Current Status</th>
                        <th style={{ padding: '14px 20px', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {samples.map((sample) => (
                        <tr 
                          key={sample.id}
                          style={{
                            borderBottom: '1px solid #e2e8f0',
                            backgroundColor: sample.urgency.includes('Urgent') ? '#fffbeb' : 'transparent',
                            transition: 'background-color 0.2s'
                          }}
                        >
                          <td style={{ padding: '16px 20px' }}>
                            <span style={{
                              fontFamily: 'monospace',
                              fontWeight: 'bold',
                              fontSize: '0.9rem',
                              backgroundColor: '#e2edf6',
                              color: '#003c71',
                              padding: '2px 8px',
                              borderRadius: '4px'
                            }}>{sample.barcode}</span>
                          </td>
                          <td style={{ padding: '16px 20px' }}>
                            <div style={{ fontWeight: '700', color: '#0f172a' }}>{sample.patientName}</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>{sample.ageGender}</div>
                          </td>
                          <td style={{ padding: '16px 20px', fontWeight: '500' }}>{sample.testName}</td>
                          <td style={{ padding: '16px 20px' }}>
                            <span style={{
                              fontSize: '0.75rem',
                              fontWeight: '800',
                              color: sample.urgency.includes('Urgent') ? '#b45309' : '#475569',
                              backgroundColor: sample.urgency.includes('Urgent') ? '#fef3c7' : '#f1f5f9',
                              padding: '2px 8px',
                              borderRadius: '4px'
                            }}>{sample.urgency}</span>
                          </td>
                          <td style={{ padding: '16px 20px' }}>
                            <span style={{
                              fontSize: '0.76rem',
                              fontWeight: '700',
                              color: sample.status === 'Approved' ? '#16a34a' : sample.status.includes('Auth') ? '#d97706' : '#2563eb',
                              backgroundColor: sample.status === 'Approved' ? '#dcfce7' : sample.status.includes('Auth') ? '#fef3c7' : '#dbeafe',
                              padding: '4px 10px',
                              borderRadius: '12px'
                            }}>{sample.status}</span>
                          </td>
                          <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                            {sample.status === 'Approved' ? (
                              <span style={{ color: '#16a34a', fontWeight: '700', fontSize: '0.8rem', paddingRight: '12px' }}>
                                Released ✓
                              </span>
                            ) : (
                              <button
                                onClick={() => {
                                  setActiveTestEdit(sample);
                                  // Pre-populate entered fields if present
                                  setTestValues({
                                    hb: sample.results.hb || '14.2',
                                    rbc: sample.results.rbc || '4.7',
                                    wbc: sample.results.wbc || '6800',
                                    glucose: sample.results.glucose || '95',
                                    tsh: sample.results.tsh || '2.4'
                                  });
                                }}
                                style={{
                                  padding: '6px 12px',
                                  backgroundColor: sample.status.includes('Auth') && selectedRole === 'doctor' ? '#003c71' : '#0284c7',
                                  color: '#ffffff',
                                  border: 'none',
                                  borderRadius: '6px',
                                  fontSize: '0.8rem',
                                  fontWeight: '700',
                                  cursor: 'pointer',
                                  transition: 'background-color 0.2s'
                                }}
                              >
                                {sample.status.includes('Auth') && selectedRole === 'doctor' ? 'Approve & E-Sign' : 'Edit / Input'}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TEST INPUT MODAL / BOX */}
              {activeTestEdit && (
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #0284c7',
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-md)',
                  textAlign: 'left'
                }}>
                  <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--blue)', margin: 0 }}>
                        {activeTestEdit.status.includes('Auth') && selectedRole === 'doctor' ? 'Clinical Sign-Off & Verification' : 'Result Entry Workspace'}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        Patient: <strong>{activeTestEdit.patientName}</strong> | Barcode: <strong>{activeTestEdit.barcode}</strong>
                      </span>
                    </div>
                    <button 
                      onClick={() => setActiveTestEdit(null)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#64748b',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        cursor: 'pointer'
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  {/* Dynamic Test Fields Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                    
                    {/* Hb Estimation field */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)', marginBottom: '6px' }}>
                        Haemoglobin (Hb) (g/dL)
                      </label>
                      <input 
                        type="text" 
                        value={testValues.hb}
                        onChange={(e) => setTestValues(prev => ({ ...prev, hb: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid #cbd5e1',
                          borderRadius: '8px',
                          fontSize: '0.9rem',
                          outline: 'none',
                          color: '#0f172a'
                        }}
                      />
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Ref Range: 12.0 - 16.0</span>
                    </div>

                    {/* Wellwise specific fields */}
                    {activeTestEdit.testName.includes('Wellwise') && (
                      <>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)', marginBottom: '6px' }}>
                            RBC Count (million/uL)
                          </label>
                          <input 
                            type="text" 
                            value={testValues.rbc}
                            onChange={(e) => setTestValues(prev => ({ ...prev, rbc: e.target.value }))}
                            style={{
                              width: '100%',
                              padding: '10px 12px',
                              border: '1px solid #cbd5e1',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: '#0f172a'
                            }}
                          />
                          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Ref: 3.80 - 5.20</span>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)', marginBottom: '6px' }}>
                            WBC Count (cells/cumm)
                          </label>
                          <input 
                            type="text" 
                            value={testValues.wbc}
                            onChange={(e) => setTestValues(prev => ({ ...prev, wbc: e.target.value }))}
                            style={{
                              width: '100%',
                              padding: '10px 12px',
                              border: '1px solid #cbd5e1',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: '#0f172a'
                            }}
                          />
                          <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Ref: 4000 - 11000</span>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)', marginBottom: '6px' }}>
                            Fasting Glucose (mg/dL)
                          </label>
                          <input 
                            type="text" 
                            value={testValues.glucose}
                            onChange={(e) => setTestValues(prev => ({ ...prev, glucose: e.target.value }))}
                            style={{
                              width: '100%',
                              padding: '10px 12px',
                              border: '1px solid #cbd5e1',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: parseInt(testValues.glucose) > 125 ? '#ef4444' : '#0f172a',
                              fontWeight: parseInt(testValues.glucose) > 125 ? '700' : 'normal'
                            }}
                          />
                          <span style={{ fontSize: '0.7rem', color: parseInt(testValues.glucose) > 125 ? '#ef4444' : '#64748b' }}>
                            {parseInt(testValues.glucose) > 125 ? 'ALERT: Diabetic Range (>125)' : 'Ref: 70 - 100'}
                          </span>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)', marginBottom: '6px' }}>
                            TSH Thyroid (uIU/mL)
                          </label>
                          <input 
                            type="text" 
                            value={testValues.tsh}
                            onChange={(e) => setTestValues(prev => ({ ...prev, tsh: e.target.value }))}
                            style={{
                              width: '100%',
                              padding: '10px 12px',
                              border: '1px solid #cbd5e1',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: parseFloat(testValues.tsh) > 5.5 ? '#ef4444' : '#0f172a',
                              fontWeight: parseFloat(testValues.tsh) > 5.5 ? '700' : 'normal'
                            }}
                          />
                          <span style={{ fontSize: '0.7rem', color: parseFloat(testValues.tsh) > 5.5 ? '#ef4444' : '#64748b' }}>
                            {parseFloat(testValues.tsh) > 5.5 ? 'ALERT: High TSH (>5.5)' : 'Ref: 0.40 - 5.50'}
                          </span>
                        </div>
                      </>
                    )}

                  </div>

                  {/* Submission row */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button
                      onClick={() => setActiveTestEdit(null)}
                      style={{
                        padding: '10px 18px',
                        border: '1px solid #cbd5e1',
                        backgroundColor: '#ffffff',
                        color: '#475569',
                        borderRadius: '8px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePostResults}
                      style={{
                        padding: '10px 22px',
                        backgroundColor: selectedRole === 'doctor' ? '#0f172a' : '#0284c7',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                      }}
                    >
                      {selectedRole === 'doctor' ? 'Approve & Digital Sign' : 'Submit to Pathologist'}
                    </button>
                  </div>

                </div>
              )}
            </div>
          )}

          {activeTab === 'overview' && (
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '30px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--blue)', margin: '0 0 14px 0' }}>
                System Activity Overview
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                SuperLab Laboratory Information System acts as the clinical record keeper for biochemistry, hematology, and clinical microbiology departments.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                  <h4 style={{ fontWeight: '800', color: 'var(--blue)', margin: '0 0 8px 0', fontSize: '0.95rem' }}>LIS Audit Compliance</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    All result entry actions are logged. Modifications to reports after Pathologist sign-off will automatically generate a revised report flag.
                  </p>
                </div>
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                  <h4 style={{ fontWeight: '800', color: 'var(--blue)', margin: '0 0 8px 0', fontSize: '0.95rem' }}>QC Flags & Calibration</h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    Analyzers must run daily control serums before verifying clinical results. Next calibration scheduled for: <strong>14-Jul-2026 06:00 AM</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'qc' && (
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '30px', border: '1px solid #e2e8f0', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--blue)', margin: '0 0 14px 0' }}>
                Daily Analyzer Quality Control (QC)
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', margin: '0 0 20px 0' }}>
                Verify quality control serum runs for Hematology & Chemiluminescence analyzers.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#dcfce7', borderRadius: '8px', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: '700', color: '#16a34a' }}>✓ Sysmex XN-1000 (Hematology)</span>
                  <span style={{ fontWeight: '700', color: '#16a34a' }}>QC Normal / Calibration Ok</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#dcfce7', borderRadius: '8px', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: '700', color: '#16a34a' }}>✓ Roche Cobas e411 (Immunoassay)</span>
                  <span style={{ fontWeight: '700', color: '#16a34a' }}>QC Normal / Calibration Ok</span>
                </div>
              </div>
            </div>
          )}

        </main>

      </div>

    </div>
  );
};

export default LISPortal;
