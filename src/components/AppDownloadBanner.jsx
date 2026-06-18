import React from 'react';

const AppDownloadBanner = () => {
  return (
    <section className="app-download-section">
      <div className="app-download-container">
        
        {/* Left Side text content */}
        <div className="app-download-left">
          <h2 className="app-download-title">Download Our App Now</h2>
          <p className="app-download-text">
            Download Super Lab App to place your order instantly, track your phlebotomist and get access to your reports on the go. Available on App store.
          </p>
          
          <div className="app-download-badges">
            {/* App Store Badge */}
            <a href="#app-store" className="download-badge-link">
              <svg width="140" height="42" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="135" height="40" rx="6" fill="black"/>
                <path d="M18.5 24C18.5 21.5 20.5 20.25 20.6 20.2C19.45 18.5 17.65 18.25 17.05 18.2C15.55 18.05 14.1 19.1 13.35 19.1C12.6 19.1 11.4 18.25 10.15 18.25C8.5 18.25 6.95 19.2 6.1 20.7C4.35 23.75 5.65 28.25 7.35 30.7C8.2 31.9 9.15 33.25 10.45 33.2C11.7 33.15 12.2 32.4 13.7 32.4C15.2 32.4 15.65 33.2 16.95 33.15C18.3 33.1 19.15 31.9 20 30.7C20.95 29.3 21.35 27.95 21.4 27.85C21.35 27.8 18.5 26.75 18.5 24Z" fill="white"/>
                <path d="M15.8 16.5C16.45 15.7 16.9 14.6 16.78 13.5C15.83 13.54 14.68 14.14 14 14.95C13.4 15.65 12.88 16.78 13.05 17.85C14.1 17.93 15.15 17.3 15.8 16.5Z" fill="white"/>
                <text x="32" y="16" fill="white" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="7.5" fontWeight="500" letterSpacing="0.2">Download on the</text>
                <text x="32" y="27" fill="white" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="0.2">App Store</text>
              </svg>
            </a>

            {/* Google Play Badge */}
            <a href="#google-play" className="download-badge-link">
              <svg width="140" height="42" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="135" height="40" rx="6" fill="black"/>
                <g transform="translate(10, 8)">
                  <path d="M1 1.3V22.7C1 23.2 1.3 23.5 1.7 23.5C1.9 23.5 2.1 23.4 2.2 23.3L12.5 13L2.2 0.7C2.1 0.6 1.9 0.5 1.7 0.5C1.3 0.5 1 0.8 1 1.3Z" fill="#00b0ff"/>
                  <path d="M15.2 10.6L12.5 13L2.2 23.3L12.9 23.7C13.8 23.7 14.6 23.2 14.9 22.4L17.5 12C17.7 11.2 16.8 10.6 15.2 10.6Z" fill="#ff2d55"/>
                  <path d="M12.5 13L15.2 15.4C16.8 15.4 17.7 14.8 17.5 14L14.9 3.6C14.6 2.8 13.8 2.3 12.9 2.3L2.2 0.7L12.5 13Z" fill="#00e676"/>
                  <path d="M12.5 13L2.2 0.7C2.1 0.6 1.9 0.5 1.7 0.5C1.3 0.5 1 0.8 1 1.3V1.5C1 1 1.3 0.7 1.7 0.7C1.9 0.7 2.1 0.8 2.2 0.9L12.5 13.2L12.5 13Z" fill="white" opacity="0.1"/>
                </g>
                <text x="32" y="16" fill="white" fontFamily="sans-serif" fontSize="7" fontWeight="500" letterSpacing="0.6">GET IT ON</text>
                <text x="32" y="27" fill="white" fontFamily="sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.2">Google Play</text>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side mockup graphics */}
        <div className="app-download-right">
          <div className="app-download-graphics-container">
            {/* Outer circles */}
            <div className="teal-bg-circle"></div>
            <div className="teal-bg-small-dot"></div>
            
            {/* Generated smartphone app screens */}
            <img 
              src="/app_download_mockup.png" 
              alt="Super Lab App Screens" 
              className="app-mockups-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppDownloadBanner;
