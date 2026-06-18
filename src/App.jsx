


import { useState, useEffect } from 'react';
import Header from './components/Header';
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
import AppDownloadBanner from './components/AppDownloadBanner';
import WhyChooseUs from './components/WhyChooseUs';
import BookBanner from './components/BookBanner';
import ExpandingFootprints from './components/ExpandingFootprints';
import Footer from './components/Footer';
import HaemoglobinTestPage from './components/HaemoglobinTestPage';
import BetaHCGTestPage from './components/BetaHCGTestPage';
import MakeYourOwnPackagePage from './components/MakeYourOwnPackagePage';
import LabTestsPage from './components/LabTestsPage';

const App = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    if (currentHash === '#/haemoglobin-estimation') {
      return <HaemoglobinTestPage />;
    } else if (currentHash === '#/beta-hcg') {
      return <BetaHCGTestPage />;
    } else if (currentHash === '#/make-package') {
      return <MakeYourOwnPackagePage />;
    } else if (currentHash === '#/lab-tests') {
      return <LabTestsPage />;
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
        <AppDownloadBanner />
        <ContactBanners />
        <VitalOrgansSlider />
        <LifestyleDiseaseSlider />
        <RequestCallbackBanner />
        <WhyChooseUs />
        <BookBanner />
        <ExpandingFootprints />
      </>
    );
  };

  return (
    <div className="app-container">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default App;