import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ReviewsSection = ({ testName }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Daksh",
      rating: 4,
      text: `I got my ${testName} done through Super Lab and I must say the whole process was very smooth. The home collection service was so convenient, and when I got my results back they were clear and easy to understand. Thanks to Super Lab, I feel confident that my health tracking is in good hands.`
    },
    {
      id: 2,
      name: "Atharv",
      rating: 4,
      text: `Super Lab has the best ${testName} available. Their home collection service is incredibly convenient and their supporting staff are so informative that I always feel confident knowing my results are accurate and up to date. Highly recommend them for anyone needing this test done!`
    },
    {
      id: 3,
      name: "Karan",
      rating: 5,
      text: `Excellent service! The phlebotomist arrived right on time, collected the sample painlessly, and I received my report via WhatsApp and email on the same day. Extremely satisfied with the professionalism.`
    },
    {
      id: 4,
      name: "Sneha",
      rating: 4,
      text: `Very reliable and convenient service. Super Lab's portal made booking easy, and the transparency of the pricing is great. The reports are structured very well and are easy to read.`
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRating, setFormRating] = useState(1);
  const [formComments, setFormComments] = useState('');

  const extendedReviews = [...reviews, ...reviews.slice(0, 2)];

  const nextReview = () => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevReview = () => {
    if (!transitionEnabled) return;
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(reviews.length);
      setTimeout(() => {
        setTransitionEnabled(true);
        setCurrentIndex(reviews.length - 1);
      }, 20);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (currentIndex === reviews.length) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, reviews.length]);

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 2000);
    return () => clearInterval(timer);
  }, [transitionEnabled, reviews.length]);

  const handlePostReview = () => {
    if (!formName.trim() || !formComments.trim()) {
      alert('Please fill out both Name and Comments.');
      return;
    }
    const newRev = {
      id: Date.now(),
      name: formName,
      rating: formRating,
      text: formComments
    };
    setReviews((prev) => [newRev, ...prev]);
    setFormName('');
    setFormRating(1);
    setFormComments('');
    setShowForm(false);
  };

  // Helper to render stars
  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={16}
            fill={s <= rating ? "#ff9f1c" : "none"}
            stroke={s <= rating ? "#ff9f1c" : "#cbd5e1"}
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="page-section-container text-left" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'stretch' }}>
        
        {/* Left Side: Summary Card */}
        <div style={{
          flex: '0 0 280px',
          backgroundColor: '#ffffff',
          border: '1px solid var(--line)',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '280px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--blue)', margin: '0 0 8px 0' }}>
              Customer Reviews
            </h3>
            
            {/* Average Rating Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                <Star size={18} fill="#ff9f1c" stroke="#ff9f1c" />
                <Star size={18} fill="#ff9f1c" stroke="#ff9f1c" />
                <Star size={18} fill="#ff9f1c" stroke="#ff9f1c" />
                {/* 4th star half filled */}
                <div style={{ position: 'relative', display: 'inline-block', width: '18px', height: '18px' }}>
                  <Star size={18} stroke="#ff9f1c" fill="none" style={{ position: 'absolute' }} />
                  <div style={{ width: '67%', overflow: 'hidden', position: 'absolute' }}>
                    <Star size={18} fill="#ff9f1c" stroke="#ff9f1c" />
                  </div>
                </div>
                <Star size={18} stroke="#cbd5e1" fill="none" />
              </div>
            </div>
            
            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--blue)', marginBottom: '20px' }}>
              3.67 out of 5
            </div>

            {/* Rating Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {/* 5 star */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)' }}>
                <span style={{ width: '40px' }}>5 star</span>
                <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '0%', height: '100%', backgroundColor: '#ff9f1c' }}></div>
                </div>
              </div>
              {/* 4 star */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)' }}>
                <span style={{ width: '40px' }}>4 star</span>
                <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '67%', height: '100%', backgroundColor: '#ff9f1c' }}></div>
                </div>
              </div>
              {/* 3 star */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', fontWeight: '700', color: 'var(--blue)' }}>
                <span style={{ width: '40px' }}>3 star</span>
                <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '33%', height: '100%', backgroundColor: '#ff9f1c' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ paddingBottom: showForm ? '10px' : '0' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--blue)', margin: '0 0 2px 0' }}>
              Review this test
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: '0 0 12px 0' }}>
              Share your thoughts with others
            </p>
            <button style={{
              width: '100%',
              padding: '10px',
              border: '1px solid var(--blue)',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
              color: 'var(--blue)',
              fontWeight: '700',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              outline: 'none',
              marginBottom: showForm ? '12px' : '0'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--blue-soft)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ffffff';
            }}
            onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancel" : "Write a review"}
            </button>

            {showForm && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px', textAlign: 'left' }}>
                {/* Rating Selector */}
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={24}
                      fill={s <= formRating ? "#ff9f1c" : "none"}
                      stroke={s <= formRating ? "#ff9f1c" : "#cbd5e1"}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setFormRating(s)}
                    />
                  ))}
                </div>

                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Name"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    color: 'var(--blue)',
                    boxSizing: 'border-box'
                  }}
                />

                {/* Comment Textarea */}
                <textarea
                  placeholder="Enter your comments"
                  value={formComments}
                  onChange={(e) => setFormComments(e.target.value)}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'inherit',
                    color: 'var(--blue)',
                    boxSizing: 'border-box'
                  }}
                />

                {/* Post Button */}
                <button
                  onClick={handlePostReview}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: '#003c71',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    outline: 'none',
                    boxSizing: 'border-box',
                    textAlign: 'center'
                  }}
                >
                  Post
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Scrollable Reviews Row */}
        <div style={{
          flex: '1',
          minWidth: 'min(500px, 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          
          {/* Left Arrow */}
          <button 
            onClick={prevReview}
            style={{
              position: 'absolute',
              left: '10px',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--blue)',
              outline: 'none'
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Cards track wrapper */}
          <div style={{
            width: '100%',
            overflow: 'hidden',
            padding: '10px'
          }}>
            {/* Sliding Track */}
            <div style={{
              display: 'flex',
              gap: '20px',
              transition: transitionEnabled ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              transform: `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 10}px))`,
              width: '100%'
            }}>
              {extendedReviews.map((review, idx) => (
                <div 
                  key={idx}
                  style={{
                    flex: '0 0 calc(50% - 10px)',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxSizing: 'border-box'
                  }}
                >
                  {/* Review Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* User Icon Circle */}
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#e6f7f8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--teal)',
                      flexShrink: 0
                    }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    
                    {/* Name and Stars */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', textAlign: 'left' }}>
                      <span style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--blue)', lineHeight: 1.1 }}>
                        {review.name}
                      </span>
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p style={{
                    fontSize: '0.86rem',
                    lineHeight: '1.5',
                    color: '#475569',
                    margin: 0,
                    textAlign: 'left',
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextReview}
            style={{
              position: 'absolute',
              right: '-20px',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid var(--line)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--blue)',
              outline: 'none'
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ReviewsSection;
