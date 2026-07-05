import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { testDatabase } from '../data/testDatabase';

const FeaturedCheckups = () => {
  const baseCheckups = testDatabase
    .filter(item => item.type === 'package')
    .map(pkg => ({
      id: pkg.id,
      name: pkg.name,
      testCount: pkg.testsIncluded,
      originalPrice: pkg.originalPrice,
      discountedPrice: pkg.price,
      discount: pkg.discount,
      badge: pkg.popular ? 'Most Booked' : null,
      link: pkg.hash
    }));

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      
      const cardWidthAndGap = 300 + 20;
      const index = Math.min(
        Math.round(scrollLeft / cardWidthAndGap),
        baseCheckups.length - 1
      );
      setActiveDot(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      // Wait for layout/images load
      const timer = setTimeout(checkScroll, 300);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleViewAll = () => {
    sessionStorage.setItem('superlab_selected_category', 'Full Body Health');
    window.location.hash = '#/lab-tests';
  };

  return (
    <section className="featured-checkups-section">
      <div className="featured-checkups-container">
        {/* Header Row */}
        <div className="section-header-row">
          <h2 className="section-main-title">Full Body Health Checks</h2>
          <button className="btn-view-all-packages" onClick={handleViewAll}>
            View All
          </button>
        </div>

        {/* Cards Row Grid Wrapper */}
        <div className="featured-checkups-grid-wrapper">
          {/* Left Floating Arrow */}
          <button 
            className="grid-arrow-left-floating" 
            onClick={handlePrev}
            disabled={!canScrollLeft}
            style={{ opacity: !canScrollLeft ? 0.3 : 1, cursor: !canScrollLeft ? 'not-allowed' : 'pointer' }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Sliding Grid Viewport */}
          <div className="featured-checkups-grid" ref={scrollRef} style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div 
              className="featured-checkups-track"
              style={{
                display: 'flex',
                gap: '20px'
              }}
            >
              {baseCheckups.map((check, index) => (
                <div key={index} className="checkup-card premium-tilt-card">
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
                      onClick={() => window.addToSuperlabCart({ 
                        id: check.id || check.name.toLowerCase().replace(/\s+/g, '-'), 
                        name: check.name, 
                        category: 'Health Checkup', 
                        price: check.discountedPrice || 999, 
                        originalPrice: check.originalPrice || Math.round((check.discountedPrice || 999) / 0.75) 
                      })}
                    >
                  ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Floating Arrow */}
          <button 
            className="grid-arrow-right-floating" 
            onClick={handleNext}
            disabled={!canScrollRight}
            style={{ opacity: !canScrollRight ? 0.3 : 1, cursor: !canScrollRight ? 'not-allowed' : 'pointer' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="slider-dots-container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {baseCheckups.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({ left: index * (300 + 20), behavior: 'smooth' });
                }
              }}
              style={{
                width: activeDot === index ? '12px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: activeDot === index ? 'var(--orange)' : 'var(--line)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s'
              }}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCheckups;
