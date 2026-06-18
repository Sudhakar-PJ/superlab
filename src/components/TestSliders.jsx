import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CircularTestSlider = ({ title, items }) => {
  // Prepend last 4 and append first 4 to achieve seamless circular loop
  const paddedItems = [
    ...items.slice(-4),
    ...items,
    ...items.slice(0, 4)
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
    if (startIndex >= items.length + 4) {
      setIsTransitioning(false);
      setStartIndex(4);
    }
    // If we reach the duplicated last elements at the start, snap to the actual last elements
    else if (startIndex <= 0) {
      setIsTransitioning(false);
      setStartIndex(items.length);
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
    <div className="test-slider-category-wrapper">
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
        <button className="grid-arrow-left-floating" onClick={handlePrev}>
          <ChevronLeft size={20} />
        </button>

        {/* Sliding Grid */}
        <div className="featured-checkups-grid">
          <div
            className="featured-checkups-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: 'flex',
              gap: '20px',
              transform: `translateX(-${startIndex * (280 + 20)}px)`,
              transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
            }}
          >
            {paddedItems.map((item, index) => (
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
                      onClick={() => alert(`${item.name} added to cart!`)}
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
        <button className="grid-arrow-right-floating" onClick={handleNext}>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const TestSliders = () => {
  const pregnancyTests = [
    { name: 'Haemoglobin Estimation Test', price: 130 },
    { name: 'Beta HCG Test', price: 680 },
    { name: 'Urine Culture Test', price: 810 },
    { name: 'Prolactin Test', price: 600 },
    { name: 'Haemoglobin HPLC Test', price: 550 },
    { name: 'STD Panel Test', price: 1800 },
    { name: 'Double Marker Test', price: 2200 },
    { name: 'LH-Luteinizing Hormone , Serum Test', price: 500 },
    { name: 'Estradiol Test', price: 650 },
    { name: 'Progesterone Test', price: 700 },
    { name: 'AFP Test', price: 800 },
    { name: 'Glucose Tolerance Test - (GTT 2 Specimens) After 75gm', price: 350 },
    { name: 'Quadruple Marker Test', price: 3500 },
    { name: 'Bile Acid Test', price: 1200 },
    { name: 'Viral Marker Profile (Elisa) Test', price: 1500 },
    { name: 'Torch IgG IgM Test', price: 1600 },
    { name: 'Urine Pregnancy Test', price: 150 },
    { name: 'Free Testosterone Test', price: 1100 }
  ];

  const vitaminTests = [
    { name: 'Vitamin D, 25 - Hydroxy Test (Vit. D3)', price: 1500 },
    { name: 'Vitamin B12 (Vit- B12), (Cyanocobalamin) Test', price: 1000 },
    { name: 'Folate , Serum Test', price: 1300 },
    { name: 'Vitamin B12 & Folate, Serum Test', price: 1600 },
    { name: 'Vitamin D3 & B12 Combo', price: 2100 },
    { name: 'Active Vitamin B12 Test', price: 1450 },
    { name: 'Vitamin A (Retinol) Serum Test', price: 2800 },
    { name: 'Vitamin E (Tocopherol) Serum Test', price: 2500 }
  ];

  const hivTests = [
    { name: 'HIV Rapid Test', price: 350 },
    { name: 'HIV 1 & 2 Test', price: 500 },
    { name: 'STD Panel Test', price: 1800 },
    { name: 'HIV RNA PCR Quantitative Test', price: 3200 },
    { name: 'CD4 And CD8 Count Test', price: 1650 },
    { name: 'Western Blot HIV Test', price: 1800 },
    { name: 'HIV Genotype Test', price: 8500 }
  ];

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
