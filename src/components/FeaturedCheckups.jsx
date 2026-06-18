import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const FeaturedCheckups = () => {
  const baseCheckups = [
    // Group 1
    {
      name: 'Wellwise Total Profile',
      testCount: 91,
      originalPrice: 3799,
      discountedPrice: 2279,
      discount: '40% off',
      badge: 'Most Booked',
      link: '#details-total'
    },
    {
      name: 'WellWise Exclusive Profile- Male',
      testCount: 95,
      originalPrice: 5199,
      discountedPrice: 3119,
      discount: '40% off',
      badge: null,
      link: '#details-exclusive-male'
    },
    {
      name: 'Wellwise Platinum - Male',
      testCount: 103,
      originalPrice: 7499,
      discountedPrice: 4499,
      discount: '40% off',
      badge: null,
      link: '#details-platinum-male'
    },
    {
      name: 'Wellwise Advanced Profile',
      testCount: 81,
      originalPrice: 2999,
      discountedPrice: 1799,
      discount: '40% off',
      badge: null,
      link: '#details-advanced'
    },
    // Group 2
    {
      name: 'WellWise Exclusive Profile-Female',
      testCount: 95,
      originalPrice: 5199,
      discountedPrice: 3119,
      discount: '40% off',
      badge: null,
      link: '#details-exclusive-female'
    },
    {
      name: 'Wellwise Platinum - Female',
      testCount: 103,
      originalPrice: 7499,
      discountedPrice: 4499,
      discount: '40% off',
      badge: null,
      link: '#details-platinum-female'
    },
    {
      name: 'Wellwise Premium - Male',
      testCount: 111,
      originalPrice: 12999,
      discountedPrice: 7799,
      discount: '40% off',
      badge: null,
      link: '#details-premium-male'
    },
    {
      name: 'Wellwise Premium - Female',
      testCount: 111,
      originalPrice: 12999,
      discountedPrice: 7799,
      discount: '40% off',
      badge: null,
      link: '#details-premium-female'
    },
    // Group 3
    {
      name: 'Wellwise Essential Profile',
      testCount: 54,
      originalPrice: 1599,
      discountedPrice: 959,
      discount: '40% off',
      badge: null,
      link: '#details-essential'
    },
    {
      name: 'Max Care Health Check 2',
      testCount: 61,
      originalPrice: 2084,
      discountedPrice: 1250,
      discount: '40% off',
      badge: null,
      link: '#details-maxcare-2'
    },
    {
      name: 'Max Care Health Check 3',
      testCount: 62,
      originalPrice: 3750,
      discountedPrice: 2250,
      discount: '40% off',
      badge: null,
      link: '#details-maxcare-3'
    },
    {
      name: 'Max Care Health Check 4',
      testCount: 80,
      originalPrice: 4500,
      discountedPrice: 2700,
      discount: '40% off',
      badge: null,
      link: '#details-maxcare-4'
    }
  ];

  // Prepend last 4 and append first 4 to achieve seamless circular loop
  const checkups = [
    ...baseCheckups.slice(-4),
    ...baseCheckups,
    ...baseCheckups.slice(0, 4)
  ];

  const [startIndex, setStartIndex] = useState(4); // Start at the real first element
  const [isTransitioning, setIsTransitioning] = useState(true);

  const handleNext = () => {
    if (!isTransitioning) return;
    setStartIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setStartIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // If we reach the duplicated first elements at the end, snap back to the actual first elements (index 4)
    if (startIndex >= baseCheckups.length + 4) {
      setIsTransitioning(false);
      setStartIndex(4);
    }
    // If we reach the duplicated last elements at the start, snap to the actual last elements (index 12)
    else if (startIndex <= 0) {
      setIsTransitioning(false);
      setStartIndex(baseCheckups.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transitions on the next frame so the snap is invisible to the user
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="featured-checkups-section">
      <div className="featured-checkups-container">
        {/* Header Row */}
        <div className="section-header-row">
          <h2 className="section-main-title">Full Body Health Checks</h2>
          <button className="btn-view-all-packages" onClick={() => alert('Viewing all packages!')}>
            View All
          </button>
        </div>

        {/* Cards Row Grid Wrapper */}
        <div className="featured-checkups-grid-wrapper">
          {/* Left Floating Arrow */}
          <button className="grid-arrow-left-floating" onClick={handlePrev}>
            <ChevronLeft size={20} />
          </button>

          {/* Sliding Grid Viewport */}
          <div className="featured-checkups-grid">
            <div 
              className="featured-checkups-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                display: 'flex',
                gap: '20px',
                transform: `translateX(-${startIndex * (300 + 20)}px)`,
                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {checkups.map((check, index) => (
                <div key={index} className="checkup-card">
                  {/* Badges top bar */}
                  <div className="checkup-card-badges">
                    {check.badge ? (
                      <span className="badge-most-booked">{check.badge}</span>
                    ) : (
                      <span />
                    )}
                    {check.discount && (
                      <span className="badge-discount">{check.discount}</span>
                    )}
                  </div>

                  {/* Package Name */}
                  <h3 className="checkup-card-title">{check.name}</h3>

                  {/* Test Count */}
                  <p className="checkup-card-tests">Includes {check.testCount} tests</p>

                  {/* Pricing row */}
                  <div className="checkup-card-pricing">
                    <span className="price-original">₹ {check.originalPrice}</span>
                    <span className="price-discounted">₹ {check.discountedPrice}</span>
                  </div>

                  {/* Actions row */}
                  <div className="checkup-card-actions">
                    <a href={check.link} className="link-know-more">
                      Know More
                    </a>
                    <button 
                      className="btn-book-checkup" 
                      onClick={() => alert(`${check.name} added to booking request!`)}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Floating Arrow */}
          <button className="grid-arrow-right-floating" onClick={handleNext}>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCheckups;
