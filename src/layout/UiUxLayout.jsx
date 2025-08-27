// src/layout/UiUxLayout.jsx

import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import UiUxNavbar from '../components/uiux/UiUxNavbar';
// --- পরিবর্তন: UiUxFooter এর পরিবর্তে Footer ইম্পোর্ট করুন ---
import Footer from '../components/common/Footer';
import AnimatedScrollButton from '../components/common/AnimatedScrollButton';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageLoadSpinner from '../components/common/PageLoadSpinner';

import { AppContext } from '../AppContext';
import CalendlyPopup from '../components/common/CalendlyPopup';
import CompanyProfilePopup from '../components/common/CompanyProfilePopup';
import ContactPopup from '../components/common/ContactPopup';

const UiUxLayout = () => {
  const navigation = useNavigation();
  const [isPageLoading, setIsPageLoading] = useState(true);

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    setIsCalendlyOpen,
    setIsProfilePopupOpen,
    setIsContactPopupOpen,
  };

  if (isPageLoading) {
    return <PageLoadSpinner />;
  }

  return (
    <AppContext.Provider value={value}>
      <div className="bg-white text-gray-800">
        {navigation.state === 'loading' && <LoadingSpinner />}
        
        <UiUxNavbar />
        <main>
          <Outlet /> 
        </main>
        {/* --- পরিবর্তন: UiUxFooter এর পরিবর্তে Footer ব্যবহার করুন --- */}
        <Footer />

        <AnimatedScrollButton />

        <CalendlyPopup isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
        <CompanyProfilePopup isOpen={isProfilePopupOpen} onClose={() => setIsProfilePopupOpen(false)} />
        <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
      </div>
    </AppContext.Provider>
  );
};

export default UiUxLayout;