// src/layout/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import CalendlyPopup from '../components/common/CalendlyPopup';
import CompanyProfilePopup from '../components/common/CompanyProfilePopup';
import ContactPopup from '../components/common/ContactPopup'; // নতুন পপ-আপ ইম্পোর্ট
import { AppContext } from '../AppContext';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageLoadSpinner from '../components/common/PageLoadSpinner';

const Layout = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false); // নতুন state
  const navigation = useNavigation();
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const value = {
    setIsCalendlyOpen,
    setIsProfilePopupOpen,
    setIsContactPopupOpen, // context এ যোগ করা হলো
  };

  if (isPageLoading) {
    return <PageLoadSpinner />;
  }

  return (
    <AppContext.Provider value={value}>
      {navigation.state === 'loading' && <LoadingSpinner />}
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTopButton />
        <CalendlyPopup isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
        <CompanyProfilePopup isOpen={isProfilePopupOpen} onClose={() => setIsProfilePopupOpen(false)} />
        <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} /> {/* নতুন পপ-আপ রেন্ডার */}
      </div>
    </AppContext.Provider>
  );
};

export default Layout;