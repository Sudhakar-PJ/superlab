import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testDatabase } from '../data/testDatabase';

const CircularTestSlider = ({ title, items }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      
      const cardWidthAndGap = 280 + 20;
      const index = Math.min(
        Math.round(scrollLeft / cardWidthAndGap),
        items.length - 1
      );
      setActiveDot(index);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      const timer = setTimeout(checkScroll, 300);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, [items]);

  const handleNext = () => {
    if (scrollRef.current) {
      // scroll by roughly 1 item card: 280 + 20 = 300
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className="test-slider-category-wrapper" style={{ marginBottom: '32px' }}>
      {/* Header Row */}
      <div className="section-header-row">
        <h2 className="section-main-title">{title}</h2>
        <button className="btn-view-all-packages" onClick={() => alert(`Viewing all ${title}!`)}>
          View All
        </button>
      </div>

      {/* Slider viewport */}
      <div className="featured-checkups-grid-wrapper">
        {/* Left Arrow */}
        <button 
          className="grid-arrow-left-floating" 
          onClick={handlePrev}
          disabled={!canScrollLeft}
          style={{ opacity: !canScrollLeft ? 0.3 : 1, cursor: !canScrollLeft ? 'not-allowed' : 'pointer' }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Sliding Grid */}
        <div className="featured-checkups-grid" ref={scrollRef} style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div
            className="featured-checkups-track"
            style={{
              display: 'flex',
              gap: '20px'
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="test-item-card">
                <h3 className="test-card-title">{item.name}</h3>
                
                <div className="test-card-bottom">
                  <span className="test-card-price">₹ {item.price}</span>
                  <div className="test-card-actions">
                    <a 
                      href={
                        item.name === 'Haemoglobin Estimation Test' ? '#/haemoglobin-estimation' :
                        item.name === 'Beta HCG Test' ? '#/beta-hcg' :
                        '#/know-more'
                      } 
                      className="test-link-know-more"
                    >
                      Know More
                    </a>
                    <button
                      className="btn-add-test"
                      onClick={() => window.addToSuperlabCart({ 
                        id: item.id || item.name.toLowerCase().replace(/\s+/g, '-'), 
                        name: item.name, 
                        category: item.category || 'Diagnostic Test', 
                        price: item.price || 150, 
                        originalPrice: item.originalPrice || Math.round((item.price || 150) / 0.75) 
                      })}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
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
      <div className="slider-dots-container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ left: index * (280 + 20), behavior: 'smooth' });
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
  );
};

const TestSliders = () => {
  const pregnancyTests = testDatabase.filter(item => item.category === 'Pregnancy Test' && item.type === 'test');
  const vitaminTests = testDatabase.filter(item => item.category === 'Vitamin Test' && item.type === 'test');
  const hivTests = testDatabase.filter(item => item.category === 'HIV Test' && item.type === 'test');

  return (
    <section className="test-sliders-section">
      <div className="test-sliders-container">
        <CircularTestSlider title="Pregnancy Tests" items={pregnancyTests} />
        <CircularTestSlider title="Vitamin Tests" items={vitaminTests} />
        <CircularTestSlider title="HIV Tests" items={hivTests} />
      </div>
    </section>
  );
};

export default TestSliders;
