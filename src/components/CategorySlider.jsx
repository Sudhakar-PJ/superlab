import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const CategorySlider = () => {
  const baseCategories = [
    { name: 'FULL BODY', img: '/tests/Full body test.png' },
    { name: 'PREGNANCY TEST', img: '/tests/pregnancy test.png' },
    { name: 'HEART TEST', img: '/tests/heart test.png' },
    { name: 'HIV TEST', img: '/tests/HIV test.png' },
    { name: 'FEVER TEST', img: '/tests/fever test.png' },
    { name: 'HORMONE TEST', img: '/tests/hormone test.png' },
    { name: 'ALLERGY TEST', img: '/tests/allergy test.png' },
    { name: 'TUBERCULOSIS TEST', img: '/tests/Tuberculosis test.png' },
    { name: 'DIABETES TEST', img: '/tests/diabetes 4.png' },
    { name: 'THYROID TEST', img: '/tests/Thyroid test.png' },
    { name: 'BONE HEALTH TEST', img: '/tests/bone health test.png' },
    { name: 'LIVER TEST', img: '/tests/Liver Test.png' },
    { name: 'CANCER TEST', img: '/tests/cancer test.png' },
    { name: 'INFERTILITY TEST', img: '/tests/infertility test.png' },
    { name: 'VITAMIN TEST', img: '/tests/vitamin test.png' },
    { name: 'LUNG TEST', img: '/tests/lung test.png' },
    { name: 'KIDNEY TEST', img: '/tests/kidney test.png' },
    { name: 'STD TEST', img: '/tests/STD test.png' },
    { name: 'ORTHOPEDICS TEST', img: '/tests/Orthopedic test.png' },
    { name: 'OBESITY', img: '/tests/Obesity.png' },
    { name: 'NUTRITION FITNESS AND ENERGY TEST', img: '/tests/nutrition fitness and energy test.png' },
    { name: 'PHYSICIAN', img: '/tests/physician.png' },
    { name: 'POLLUTION HEALTH CHECKUP', img: '/tests/pollution health checkup.png' },
    { name: 'NEPHROLOGY', img: '/tests/Nephrology.png' },
    { name: 'PROSTATE TEST', img: '/tests/Prostate test.png' },
    { name: 'SENIOR CITIZEN TEST', img: '/tests/senior citizen test.png' },
    { name: 'SEXUAL AND INTIMATE WELLNESS TEST', img: '/tests/sexual and intimate wellness test.png' },
    { name: 'WOMEN HEALTH TEST', img: '/tests/women health test.png' },
    { name: 'LIFESTYLE AND CHRONIC CONDITIONS TEST', img: '/tests/lifestyle and chronic conditions test.jpeg' },
    { name: 'HYPERTENSION', img: '/tests/Hypertension.png' },
    { name: 'FATIGUE', img: '/tests/Fatigue.png' },
    { name: 'ANEMIA TEST', img: '/tests/anemia test.png' },
    { name: 'AUTO IMMUNE', img: '/tests/Auto immune.png' },
    { name: 'BEAUTY AND WELLNESS TEST', img: '/tests/beauty and wellness test.jpeg' },
    { name: 'BLOOD DISORDER', img: '/tests/blood disorders.png' },
    { name: 'CANCER SCREENING TEST', img: '/tests/cancer screening test.png' },
    { name: 'CARDIOLOGY TEST', img: '/tests/cardiology test.png' },
    { name: 'COVID 19 IL 6', img: '/tests/covid-19 il-6 icon.png' },
    { name: 'DENGUE TEST', img: '/tests/dengue test.png' },
    { name: 'DEPRESSION', img: '/tests/Depression.png' },
    { name: 'IRON TEST', img: '/tests/iron test.png' },
    { name: 'FEMALE CANCER', img: '/tests/female cancer.png' },
    { name: 'GASTRO TEST', img: '/tests/Gastor test_1.png' },
    { name: 'GASTROINTESTINAL', img: '/tests/Gastrointestinal.png' },
    { name: 'GYNAECOLOGY TEST', img: '/tests/Gynaecology.png' },
    { name: 'HORMONAL AND REPRODUCTIVE HEALTH TEST', img: '/tests/hormonal and reproductive health test.png' },
    { name: 'IMMUNITY TEST', img: '/tests/immunity test.png' },
    { name: 'INFECTIOUS DISEASE', img: '/tests/Infectious disease.png' },
    { name: 'INFLUENZA TEST', img: '/tests/influenza test.png' }
  ];

  const itemsVisible = 7;
  const categories = baseCategories;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
      
      const cardWidthAndGap = 180 + 16;
      const index = Math.min(
        Math.round(scrollLeft / cardWidthAndGap),
        categories.length - 1
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
  }, []);

  const handleNext = () => {
    if (scrollRef.current) {
      // scroll by roughly 2 items: (180 + 16) * 2 = 392
      scrollRef.current.scrollBy({ left: 392, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -392, behavior: 'smooth' });
    }
  };

  return (
    <section className="category-slider-section">
      <div className="category-slider-container">
        
        {/* Header Row */}
        <div className="section-header-row">
          <h2 className="section-main-title">Popular Health-Checkup Categories</h2>
          <button className="btn-view-all-packages" onClick={() => alert('Viewing all categories!')}>
            View All
          </button>
        </div>

        {/* Viewport & Controls */}
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

          {/* Track container */}
          <div className="featured-checkups-grid" ref={scrollRef} style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div 
              className="featured-checkups-track"
              style={{
                display: 'flex',
                gap: '16px'
              }}
            >
              {categories.map((cat, index) => (
                <div key={index} className="category-card-item">
                  <div className="category-card-icon">
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="category-img-icon"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="category-card-name">{cat.name}</span>
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
        <div className="slider-dots-container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px', flexWrap: 'wrap', padding: '0 20px' }}>
          {categories.map((_, index) => {
            // Since there are 50 categories, rendering 50 dots might be too many.
            // Let's render a dot for every 2 items to keep it clean and readable.
            if (index % 2 !== 0) return null;
            const dotIndex = Math.floor(index / 2);
            const activeDotIndex = Math.floor(activeDot / 2);
            return (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: index * (180 + 16), behavior: 'smooth' });
                  }
                }}
                style={{
                  width: activeDotIndex === dotIndex ? '12px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: activeDotIndex === dotIndex ? 'var(--orange)' : 'var(--line)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s',
                  marginBottom: '6px'
                }}
                title={`Go to category ${index + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CategorySlider;
