import { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  ArrowUpDown, 
  BookOpen, 
  Check} from 'lucide-react';
import { testDatabase } from '../data/testDatabase';

const LabTestsPage = () => {

  // States
  const [viewType, setViewType] = useState('all'); // 'all', 'test', 'package'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity'); // 'popularity', 'low-to-high', 'high-to-low'
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  
  // Accordion toggle states
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  // Sync addedItems state with localStorage cart on load & updates
  useEffect(() => {
    const syncAddedItems = () => {
      if (window.getSuperlabCart) {
        const cart = window.getSuperlabCart();
        const dbIdsInCart = testDatabase
          .filter(dbItem => cart.some(cartItem => cartItem.name === dbItem.name))
          .map(dbItem => dbItem.id);
        setAddedItems(dbIdsInCart);
      }
    };
    window.addEventListener('superlab_cart_update', syncAddedItems);
    syncAddedItems();
    return () => window.removeEventListener('superlab_cart_update', syncAddedItems);
  }, []);

  // Sync search query from global header search redirect
  useEffect(() => {
    const syncSearchQuery = () => {
      const query = sessionStorage.getItem('superlab_search_query');
      if (query) {
        setSearchQuery(query);
        sessionStorage.removeItem('superlab_search_query');
      }
    };
    window.addEventListener('superlab_search_trigger', syncSearchQuery);
    syncSearchQuery();
    return () => window.removeEventListener('superlab_search_trigger', syncSearchQuery);
  }, []);

  // Extract unique categories for filter list
  const categoriesList = [...new Set(testDatabase.map(item => item.category))];

  // Filter and sort logic
  const getFilteredItems = () => {
    let items = [...testDatabase];

    // Filter by type (Test vs Package)
    if (viewType === 'test') {
      items = items.filter(item => item.type === 'test');
    } else if (viewType === 'package') {
      items = items.filter(item => item.type === 'package');
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected categories checkboxes
    if (selectedCategories.length > 0) {
      items = items.filter(item => selectedCategories.includes(item.category));
    }

    // Sorting
    if (sortBy === 'low-to-high') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-to-low') {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
      items.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  const handleCategoryCheckboxChange = (catName) => {
    if (selectedCategories.includes(catName)) {
      setSelectedCategories(selectedCategories.filter(c => c !== catName));
    } else {
      setSelectedCategories([...selectedCategories, catName]);
    }
  };

  const handleItemToggle = (itemId) => {
    const item = testDatabase.find(t => t.id === itemId);
    if (!item) return;

    const cartId = item.id || item.name.toLowerCase().replace(/\s+/g, '-');
    const cart = window.getSuperlabCart ? window.getSuperlabCart() : [];
    const exists = cart.some(i => i.id === cartId);

    if (exists) {
      const updated = cart.filter(i => i.id !== cartId);
      localStorage.setItem('superlab_cart', JSON.stringify(updated));
      window.dispatchEvent(new Event('superlab_cart_update'));
    } else {
      const newItem = {
        id: cartId,
        name: item.name,
        category: item.category,
        price: item.price,
        originalPrice: item.originalPrice || Math.round(item.price / 0.75),
        quantity: 1
      };
      cart.push(newItem);
      localStorage.setItem('superlab_cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('superlab_cart_update'));
      alert(`${item.name} added to your cart!`);
    }
  };

  return (
    <div className="test-detail-page-wrapper" style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'var(--sans)' }}>
      <style>{`
        .lab-tests-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 30px;
          align-items: start;
        }
        .filter-sidebar {
          background-color: #ffffff;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 20px;
          box-shadow: var(--shadow-sm);
        }
        .filter-section {
          border-bottom: 1px solid var(--line);
          padding-bottom: 16px;
          margin-bottom: 16px;
        }
        .filter-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .filter-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border: none;
          background: none;
          font-weight: 700;
          color: var(--blue);
          font-size: 1rem;
          padding: 0;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .view-type-toggle-bar {
          display: flex;
          background-color: #e2edf6;
          border-radius: 8px;
          padding: 4px;
          margin-bottom: 24px;
          width: max-content;
        }
        .view-type-toggle-btn {
          flex: 1;
          border: none;
          background: none;
          padding: 10px 24px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .view-type-toggle-btn.active {
          background-color: #ffffff;
          color: var(--blue);
          box-shadow: var(--shadow-sm);
        }
        .lab-tests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .lab-test-card {
          background: linear-gradient(135deg, var(--blue-soft) 0%, #e3f0fc 100%);
          border: 1.5px solid var(--line);
          border-radius: 16px;
          padding: 20px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .lab-test-card:hover {
          transform: translateY(-2px);
          background: #ffffff;
          box-shadow: var(--shadow-lg);
          border-color: var(--teal);
        }
        .discount-badge {
          background-color: var(--orange);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 12px;
          align-self: flex-start;
          margin-bottom: 10px;
        }
        .category-pill {
          background-color: var(--teal-soft);
          color: var(--teal-dark);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 12px;
          align-self: flex-start;
          margin-bottom: 10px;
        }
        @media (max-width: 992px) {
          .lab-tests-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ backgroundColor: 'transparent', padding: '16px 40px 0 40px', textAlign: 'left' }}>
        <div className="ribbon-breadcrumbs">
          <a href="#/" className="ribbon-breadcrumb-item">HOME</a>
          <div className="ribbon-breadcrumb-item active">CATALOG</div>
        </div>
      </div>

      <div style={{ maxWidth: '100%', margin: '40px auto', padding: '0 40px' }}>
        
        {/* Header Section */}
        {/* Header Section */}
        <div style={{ marginBottom: '32px', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--blue)', margin: 0 }}>
            Book Lab Tests & Health Packages
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginTop: '8px', margin: '8px 0 0 0' }}>
            Select from our curated list of tests and body checkups with home sample collection.
          </p>
        </div>

        {/* Layout */}
        <div className="lab-tests-layout">
          
          {/* Left Panel: Sidebar Filters */}
          <aside className="filter-sidebar" style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid var(--line)', paddingBottom: '10px' }}>
              <span style={{ fontWeight: '800', color: 'var(--blue)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Filter size={18} /> Filters
              </span>
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setSortBy('popularity');
                }}
                style={{ border: 'none', background: 'none', color: 'var(--teal)', fontWeight: '700', fontSize: '0.85rem', cursor: 'pointer', padding: 0 }}
              >
                Clear All
              </button>
            </div>

            {/* Sort Section */}
            <div className="filter-section">
              <button className="filter-section-header" onClick={() => setIsSortOpen(!isSortOpen)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><ArrowUpDown size={16} /> Sort By</span>
                {isSortOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isSortOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  {[
                    { label: 'Popularity', value: 'popularity' },
                    { label: 'Price: Low to High', value: 'low-to-high' },
                    { label: 'Price: High to Low', value: 'high-to-low' }
                  ].map((opt) => (
                    <label key={opt.value} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: '#475569' }}>
                      <input 
                        type="radio" 
                        name="sort" 
                        value={opt.value} 
                        checked={sortBy === opt.value}
                        onChange={() => setSortBy(opt.value)}
                        style={{ accentColor: 'var(--teal)' }}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Section */}
            <div className="filter-section">
              <button className="filter-section-header" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><BookOpen size={16} /> Categories</span>
                {isCategoryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isCategoryOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', maxHeight: '250px', overflowY: 'auto', paddingRight: '6px' }}>
                  {categoriesList.map((cat) => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: '#475569' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryCheckboxChange(cat)}
                        style={{ accentColor: 'var(--teal)' }}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Right Panel: Content Grid */}
          <main style={{ textAlign: 'left' }}>
            
            {/* View Type Toggle and Search Bar row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', width: '100%', flexWrap: 'wrap' }}>
              {/* View Type Toggle */}
              <div className="view-type-toggle-bar" style={{ marginBottom: 0 }}>
                <button 
                  className={`view-type-toggle-btn ${viewType === 'all' ? 'active' : ''}`}
                  onClick={() => setViewType('all')}
                >
                  All
                </button>
                <button 
                  className={`view-type-toggle-btn ${viewType === 'test' ? 'active' : ''}`}
                  onClick={() => setViewType('test')}
                >
                  Individual Tests
                </button>
                <button 
                  className={`view-type-toggle-btn ${viewType === 'package' ? 'active' : ''}`}
                  onClick={() => setViewType('package')}
                >
                  Health Packages
                </button>
              </div>

              {/* Inner Search bar */}
              <div style={{ position: 'relative', flex: 1, minWidth: '280px' }}>
                <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }} size={18} />
                <input 
                  type="text" 
                  placeholder="Search tests or packages..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    border: '1px solid var(--line)',
                    borderRadius: '8px',
                    outline: 'none',
                    fontSize: '0.95rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Result Stats */}
            <div style={{ marginBottom: '20px', color: 'var(--muted)', fontSize: '0.95rem', fontWeight: '500' }}>
              Showing {filteredItems.length} results
            </div>

            {/* Cards Grid */}
            <div className="lab-tests-grid">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const isAdded = addedItems.includes(item.id);
                  return (
                    <div key={item.id} className="lab-test-card">
                      <div>
                        {item.type === 'package' ? (
                          <span className="discount-badge">{item.discount}</span>
                        ) : (
                          <span className="category-pill">{item.category}</span>
                        )}
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--blue)', margin: '0 0 8px 0', minHeight: '44px', lineHeight: '1.4' }}>
                          {item.name}
                        </h3>
                        {item.type === 'package' && (
                          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', margin: '0 0 12px 0' }}>
                            Includes {item.testsIncluded} tests
                          </p>
                        )}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
                        <div>
                          {item.type === 'package' && (
                            <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'var(--muted)', display: 'block' }}>
                              ₹ {item.originalPrice}
                            </span>
                          )}
                          <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--teal)' }}>
                            ₹ {item.price}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <a 
                            href={item.hash || '#'} 
                            onClick={(e) => {
                              if (!item.hash) {
                                e.preventDefault();
                                alert(`Detailed page for ${item.name} is coming soon!`);
                              }
                            }}
                            style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: '600', textDecoration: 'underline' }}
                          >
                            Know More
                          </a>
                          <button
                            onClick={() => handleItemToggle(item.id)}
                            style={{
                              backgroundColor: isAdded ? '#fff3e0' : 'var(--orange)',
                              color: isAdded ? 'var(--orange-dark)' : '#ffffff',
                              border: isAdded ? '1px solid var(--orange)' : 'none',
                              borderRadius: '8px',
                              padding: '8px 16px',
                              fontWeight: '700',
                              fontSize: '0.85rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            {isAdded ? (
                              <>
                                <Check size={14} /> ADDED
                              </>
                            ) : (
                              item.type === 'package' ? 'BOOK NOW' : 'ADD'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ gridColumn: '1 / -1', backgroundColor: '#ffffff', border: '1px solid var(--line)', borderRadius: '16px', padding: '60px 24px', textAlign: 'center', color: 'var(--muted)' }}>
                  No tests or packages found matching your criteria.
                </div>
              )}
            </div>

          </main>

        </div>
      </div>
    </div>
  );
};

export default LabTestsPage;
