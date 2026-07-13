


import { useState, useEffect } from 'react';
// import Header from './components/Header';
import UpdatedHeader from './components/Header_updated';
import HeroSlider from './components/HeroSlider';
import QuickActions from './components/QuickActions';
import CategorySlider from './components/CategorySlider';
import ContactBanners from './components/ContactBanners';
import VitalOrgansSlider from './components/VitalOrgansSlider';
import LifestyleDiseaseSlider from './components/LifestyleDiseaseSlider';
import RequestCallbackBanner from './components/RequestCallbackBanner';
import FeaturedCheckups from './components/FeaturedCheckups';
import CustomPackageBanner from './components/CustomPackageBanner';
import TestSliders from './components/TestSliders';
// import AppDownloadBanner from './components/AppDownloadBanner';
import WhyChooseUs from './components/WhyChooseUs';
import HomepageReviews from './components/HomepageReviews';
import ExpandingFootprints from './components/ExpandingFootprints';
import Footer from './components/Footer';
import HaemoglobinTestPage from './components/HaemoglobinTestPage';
// import BetaHCGTestPage from './components/BetaHCGTestPage';
import MakeYourOwnPackagePage from './components/MakeYourOwnPackagePage';
import LabTestsPage from './components/LabTestsPage';
import CartPage from './components/CartPage';
import WellwiseTotalProfilePage from './components/WellwiseTotalProfilePage';
import ProfilePage from './components/ProfilePage';

// Initialize global cart helper functions and localStorage setup
if (typeof window !== 'undefined') {
  if (!localStorage.getItem('superlab_cart')) {
    localStorage.setItem('superlab_cart', JSON.stringify([]));
  }

  window.getSuperlabCart = () => {
    try {
      return JSON.parse(localStorage.getItem('superlab_cart') || '[]');
    } catch {
      return [];
    }
  };

  window.showSuperlabToast = (message) => {
    const oldToast = document.querySelector('.superlab-toast');
    if (oldToast) {
      oldToast.remove();
    }
    const toast = document.createElement('div');
    toast.className = 'superlab-toast';
    toast.innerHTML = `
      <div class="superlab-toast-success-icon">✓</div>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);
    // force reflow
    toast.offsetHeight;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  window.addToSuperlabCart = (item) => {
    const cart = window.getSuperlabCart();
    const exists = cart.find(i => i.id === item.id || i.name === item.name);
    if (!exists) {
      cart.push({ ...item, quantity: 1 });
      localStorage.setItem('superlab_cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('superlab_cart_update'));
      window.showSuperlabToast(`${item.name} added to cart successfully!`);
    } else {
      window.showSuperlabToast(`${item.name} is already in your cart.`);
    }
  };

  window.removeFromSuperlabCart = (item) => {
    const cart = window.getSuperlabCart();
    const updated = cart.filter(i => {
      const idMatch = (i.id != null && item.id != null && String(i.id).trim() === String(item.id).trim());
      const nameMatch = (i.name && item.name && i.name.toLowerCase().trim() === item.name.toLowerCase().trim());
      return !(idMatch || nameMatch);
    });
    localStorage.setItem('superlab_cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('superlab_cart_update'));
    window.showSuperlabToast(`${item.name} removed from cart.`);
  };
}

const App = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isIsoModalOpen, setIsIsoModalOpen] = useState(false);
  useEffect(() => {
    // Force a dispatch to update components on mount
    window.dispatchEvent(new Event('superlab_cart_update'));

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isIsoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isIsoModalOpen]);

  const renderContent = () => {
    if (currentHash === '#/haemoglobin-estimation') {
      return <HaemoglobinTestPage setIsIsoModalOpen={setIsIsoModalOpen} />;
    } else if (currentHash === '#/make-package') {
      return <MakeYourOwnPackagePage />;
    } else if (currentHash === '#/lab-tests') {
      return <LabTestsPage />;
    } else if (currentHash === '#/cart' || currentHash === '#cart') {
      return <CartPage />;
    } else if (currentHash === '#/wellwise-total-profile') {
      return <WellwiseTotalProfilePage setIsIsoModalOpen={setIsIsoModalOpen} />;
    } else if (currentHash === '#/profile') {
      return <ProfilePage />;
    }

    // Default Home Page content
    return (
      <>
        <HeroSlider />
        <QuickActions />
        <CategorySlider />
        <FeaturedCheckups />
        <CustomPackageBanner />
        <TestSliders />
        {/* <AppDownloadBanner /> */}
        <ContactBanners />
        <VitalOrgansSlider />
        <LifestyleDiseaseSlider />
        <RequestCallbackBanner />
        <WhyChooseUs />
        <HomepageReviews />
        <ExpandingFootprints />
      </>
    );
  };

  return (
    <div className="app-container">
      {/* <Header isIsoModalOpen={isIsoModalOpen} setIsIsoModalOpen={setIsIsoModalOpen} /> */}
      <UpdatedHeader isIsoModalOpen={isIsoModalOpen} setIsIsoModalOpen={setIsIsoModalOpen} />
      {renderContent()}
      <Footer isIsoModalOpen={isIsoModalOpen} />
    </div>
  );
};

export default App;