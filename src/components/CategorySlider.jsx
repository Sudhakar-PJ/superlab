import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Prepend last 7 and append first 7 to achieve seamless circular loop for visible items
  const itemsVisible = 7;
  const categories = [
    ...baseCategories.slice(-itemsVisible),
    ...baseCategories,
    ...baseCategories.slice(0, itemsVisible)
  ];

  const [startIndex, setStartIndex] = useState(itemsVisible); // Start at the real first element
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
    if (startIndex >= baseCategories.length + itemsVisible) {
      setIsTransitioning(false);
      setStartIndex(itemsVisible);
    }
    else if (startIndex <= 0) {
      setIsTransitioning(false);
      setStartIndex(baseCategories.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

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
          <button className="grid-arrow-left-floating" onClick={handlePrev}>
            <ChevronLeft size={20} />
          </button>

          {/* Track container */}
          <div className="featured-checkups-grid">
            <div 
              className="featured-checkups-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                display: 'flex',
                gap: '16px',
                transform: `translateX(-${startIndex * (180 + 16)}px)`,
                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
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
                        // Fallback in case there is any typo or load error
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
          <button className="grid-arrow-right-floating" onClick={handleNext}>
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CategorySlider;
