

const RequestCallbackBanner = () => {
  return (
    <section className="request-callback-section">
      <div className="request-callback-container">
        
        {/* Left Side: Overlapping Call Operator image */}
        <div className="callback-image-wrapper">
          <img 
            src="/call_operator.png" 
            alt="Customer Support Operator" 
            className="callback-operator-img"
          />
        </div>

        {/* Middle: Content details */}
        <div className="callback-content-wrapper">
          <h4 className="callback-title">Unable to Find the right test ?</h4>
          <span className="callback-hours">7:00 AM - 11:00 PM</span>
        </div>

        {/* Right Side: Button */}
        <div className="callback-btn-wrapper">
          <button className="btn-request-callback" onClick={() => alert('Callback requested successfully!')}>
            Request A Call Back
          </button>
        </div>

      </div>
    </section>
  );
};

export default RequestCallbackBanner;
