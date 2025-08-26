// src/layout/UiUxLayout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import UiUxNavbar from '../components/uiux/UiUxNavbar';
import UiUxFooter from '../components/uiux/UiUxFooter';
import AnimatedScrollButton from '../components/common/AnimatedScrollButton';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageLoadSpinner from '../components/common/PageLoadSpinner';

const UiUxLayout = () => {
  const navigation = useNavigation();
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000); // 1-second delay for initial load

    return () => clearTimeout(timer);
  }, []);

  // Show page load spinner on initial load
  if (isPageLoading) {
    return <PageLoadSpinner />;
  }

  return (
    <div className="bg-white text-gray-800">
      {/* Show route transition spinner */}
      {navigation.state === 'loading' && <LoadingSpinner />}
      
      <UiUxNavbar />
      <main>
        <Outlet /> 
      </main>
      <UiUxFooter />

      {/* Only the animated Scroll To Top button remains */}
      <AnimatedScrollButton />
    </div>
  );
};

export default UiUxLayout;