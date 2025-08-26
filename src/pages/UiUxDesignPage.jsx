// src/pages/UiUxDesignPage.jsx
import React from 'react';
import UiUxHero from '../components/uiux/UiUxHero';
import ClientLogos from '../components/uiux/ClientLogos';
import DesignServicesSection from '../components/uiux/DesignServicesSection';
import PortfolioSection from '../components/uiux/PortfolioSection';
import ProvenProcess from '../components/uiux/ProvenProcess'; // <-- নতুন
import PricingSection from '../components/uiux/PricingSection'; // <-- নতুন
import { Testimonials, Faq } from '../components/uiux/FinalSections'; // <-- নতুন

const UiUxDesignPage = () => {
  return (
    <div className="bg-white">
      <UiUxHero />
      <ClientLogos />
      <DesignServicesSection />
      <PortfolioSection />
      <ProvenProcess />
      <PricingSection />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default UiUxDesignPage;