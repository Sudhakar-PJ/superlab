import { useState, useEffect } from 'react';
import { 
  Trash2, 
  ShieldCheck, 
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const CartPage = () => {
  // Read and listen to the global cart state
  const [cartItems, setCartItems] = useState(() => {
    return window.getSuperlabCart ? window.getSuperlabCart() : [];
  });

  useEffect(() => {
    const handleCartUpdate = () => {
      if (window.getSuperlabCart) {
        setCartItems(window.getSuperlabCart());
      }
    };
    window.addEventListener('superlab_cart_update', handleCartUpdate);
    return () => window.removeEventListener('superlab_cart_update', handleCartUpdate);
  }, []);

  // Form states
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('Male');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, checkout, success

  // Calculation helpers
  const getSubtotal = () => Math.round(cartItems.reduce((acc, item) => acc + item.originalPrice, 0));
  const getDiscount = () => {
    if (!couponApplied) return 0;
    return Math.round(cartItems.reduce((acc, item) => acc + (item.originalPrice - item.price), 0));
  };
  const getGrandTotal = () => getSubtotal() - getDiscount();

  const handleRemoveItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    localStorage.setItem('superlab_cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('superlab_cart_update'));
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'SUPER25') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code. Try SUPER25');
    }
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !patientAge || !selectedDate || !selectedSlot || !address || !pincode) {
      alert('Please fill out all patient and scheduling fields.');
      return;
    }
    setCheckoutStep('success');
  };

  if (checkoutStep === 'success') {
    return (
      <div style={{ backgroundColor: '#f8fafc', minHeight: '80vh', padding: '60px 20px', fontFamily: 'var(--sans)' }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          border: '1px solid var(--line)',
          borderRadius: '24px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#e8f5e9', color: '#2e7d32', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle size={44} />
            </div>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--blue)', margin: '0 0 12px 0' }}>
            Order Placed Successfully!
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.6', margin: '0 0 30px 0' }}>
            Thank you, <strong>{patientName}</strong>. Your home sample collection has been scheduled for <strong>{selectedDate}</strong> between <strong>{selectedSlot}</strong>. Our certified phlebotomist will contact you shortly.
          </p>
          <div style={{
            backgroundColor: 'var(--teal-soft)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'left',
            marginBottom: '30px',
            border: '1px solid rgba(0, 163, 173, 0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95rem', fontWeight: '800', color: 'var(--blue)' }}>Appointment Summary</h3>
            <div style={{ fontSize: '0.9rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div><strong>Patient:</strong> {patientName} ({patientAge} Yrs, {patientGender})</div>
              <div><strong>Date & Time:</strong> {selectedDate} • {selectedSlot}</div>
              <div><strong>Address:</strong> {address}, PIN: {pincode}</div>
              <div><strong>Amount Paid:</strong> ₹ {getGrandTotal()}</div>
            </div>
          </div>
          <a 
            href="#/" 
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--blue)',
              color: '#ffffff',
              padding: '14px 40px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
          >
            Go Back Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '90vh', padding: '40px 20px', fontFamily: 'var(--sans)' }}>
      <style>{`
        .cart-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
        }
        .cart-card {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 24px;
          box-shadow: var(--shadow-sm);
        }
        .item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid var(--line);
        }
        .item-row:last-child {
          border-bottom: none;
        }
        .qty-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--blue);
          transition: all 0.2s;
        }
        .qty-btn:hover {
          border-color: var(--teal);
          color: var(--teal);
        }
        .form-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--line);
          border-radius: 10px;
          font-size: 0.95rem;
          margin-top: 6px;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: var(--teal);
        }
        .checkout-btn {
          width: 100%;
          background: var(--blue);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          padding: 14px 20px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .checkout-btn:hover {
          background-color: #002c54;
        }
        @media (max-width: 968px) {
          .cart-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Main Container */}
      <div className="cart-grid">
        
        {/* Left Column: Cart items & Checkout Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {checkoutStep === 'cart' ? (
            <div className="cart-card">
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--blue)', marginTop: 0, marginBottom: '20px', textAlign: 'left' }}>
                Shopping Cart ({cartItems.length} items)
              </h2>

              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <AlertCircle size={48} color="var(--muted)" style={{ marginBottom: '16px' }} />
                  <p style={{ color: 'var(--muted)', fontSize: '1.1rem', margin: '0 0 20px 0' }}>Your cart is empty.</p>
                  <a href="#/lab-tests" style={{ display: 'inline-block', backgroundColor: 'var(--teal)', color: 'white', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
                    Browse Tests
                  </a>
                </div>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="item-row">
                      <div style={{ textAlign: 'left', flex: 1, paddingRight: '16px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--teal)', fontWeight: '700', textTransform: 'uppercase' }}>
                          {item.category}
                        </span>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--blue)', margin: '4px 0 0 0' }}>
                          {item.name}
                        </h4>
                      </div>
                      
                      {/* Pricing & Trash */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--teal)' }}>
                            ₹ {couponApplied ? item.price : item.originalPrice}
                          </span>
                          {couponApplied && (
                            <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--muted)', textDecoration: 'line-through' }}>
                              ₹ {item.originalPrice}
                            </span>
                          )}
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center' }}
                          title="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Proceed to checkout button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
                    <button className="checkout-btn" style={{ maxWidth: '300px' }} onClick={() => setCheckoutStep('checkout')}>
                      Proceed to Patient Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="cart-card">
              {/* Back Button */}
              <button 
                onClick={() => setCheckoutStep('cart')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: 'var(--teal)', fontWeight: '700', cursor: 'pointer', marginBottom: '20px', padding: 0 }}
              >
                <ArrowLeft size={16} /> Back to Cart
              </button>

              <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--blue)', marginTop: 0, marginBottom: '24px', textAlign: 'left' }}>
                Patient & Appointment Details
              </h2>

              <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                
                {/* Patient details section */}
                <div>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '1rem', fontWeight: '800', color: 'var(--blue)' }}>
                    Patient Info
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)' }}>Patient Name</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="Enter full name" 
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)' }}>Age (Years)</label>
                      <input 
                        type="number" 
                        required 
                        className="form-input" 
                        placeholder="Enter age" 
                        value={patientAge}
                        onChange={(e) => setPatientAge(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '14px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>Gender</span>
                    <div style={{ display: 'flex', gap: '14px' }}>
                      {['Male', 'Female', 'Other'].map(g => (
                        <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', cursor: 'pointer' }}>
                          <input 
                            type="radio" 
                            name="gender" 
                            checked={patientGender === g}
                            onChange={() => setPatientGender(g)}
                          />
                          <span>{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '10px 0' }} />

                {/* Scheduling Details */}
                <div>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '1rem', fontWeight: '800', color: 'var(--blue)' }}>
                    Home Collection Schedule
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)' }}>Preferred Date</label>
                      <input 
                        type="date" 
                        required 
                        className="form-input" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)' }}>Preferred Time Slot</label>
                      <select 
                        required 
                        className="form-input" 
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                      >
                        <option value="">Select Time Slot</option>
                        <option value="06:00 AM - 08:00 AM">06:00 AM - 08:00 AM</option>
                        <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
                        <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                        <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                        <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '10px 0' }} />

                {/* Address details */}
                <div>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '1rem', fontWeight: '800', color: 'var(--blue)' }}>
                    Collection Address
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)' }}>Complete Address</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="House No, Street, Locality" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--muted)' }}>Pincode</label>
                      <input 
                        type="text" 
                        required 
                        maxLength="6"
                        className="form-input" 
                        placeholder="Pincode" 
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="checkout-btn" style={{ marginTop: '20px' }}>
                  <ShieldCheck size={20} /> Complete Secure Booking
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right Column: Bill Details Summary Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="cart-card" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--blue)', margin: '0 0 20px 0' }}>
              Payment details
            </h3>

            {/* Coupons box */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                APPLY PROMO CODE
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  style={{ margin: 0, textTransform: 'uppercase' }} 
                  value={couponCode}
                  placeholder="Enter Coupon"
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button 
                  onClick={handleApplyCoupon}
                  style={{
                    backgroundColor: 'var(--teal)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0 20px',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Apply
                </button>
              </div>
              {couponApplied && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#2e7d32', fontSize: '0.82rem', fontWeight: '700', marginTop: '6px' }}>
                  <span>✓ Code SUPER25 Applied (25% Savings)</span>
                  <button 
                    onClick={() => { setCouponApplied(false); setCouponCode(''); }}
                    style={{ background: 'none', border: 'none', color: '#ef4444', textDecoration: 'underline', cursor: 'pointer', fontWeight: '700', padding: 0 }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#64748b' }}>
                <span>Subtotal (original MRP)</span>
                <span>₹ {getSubtotal()}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#2e7d32', fontWeight: '600' }}>
                <span>Special Promo Discount</span>
                <span>- ₹ {getDiscount()}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#64748b' }}>
                <span>Home Collection Charges</span>
                <span style={{ color: '#2e7d32', fontWeight: '600' }}>FREE</span>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '800', color: 'var(--blue)' }}>
                <span>Total Amount</span>
                <span style={{ color: 'var(--teal)' }}>₹ {getGrandTotal()}</span>
              </div>
            </div>

            {/* Inclusions trust points */}
            <div style={{
              backgroundColor: 'var(--teal-soft)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#00808a', fontWeight: '700' }}>
                <ShieldCheck size={16} />
                <span>NABL Accredited Lab Partners</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#00808a', fontWeight: '700' }}>
                <CheckCircle size={16} />
                <span>Free Doctor Consult Included</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
