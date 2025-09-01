// src/pages/Home.jsx

import React from 'react';

// সব কম্পোনেন্ট ইম্পোর্ট করা হচ্ছে
import HeroSection from '../components/home/HeroSection';
// HeroServices আর প্রয়োজন নেই
import AchievementBanner from '../components/home/AchievementBanner';
import CaseStudies from '../components/home/CaseStudies';
import DevServices from '../components/home/DevServices';
import WhyTecnigo from '../components/home/WhyTecnigo';
import ProvenProcess from '../components/home/ProvenProcess';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import Industries from '../components/home/Industries';
import FinalCta from '../components/home/FinalCta';
// ClientLogos আলাদাভাবে প্রয়োজন নেই কারণ এটি এখন CaseStudies এর অংশ

const Home = () => {
  return (
    <div>
      <HeroSection />
      
      {/* --- সমাধান: CaseStudies এখন Hero Section-এর ঠিক নিচে --- */}
      {/* এর ভেতরেই ক্লায়েন্ট লোগো এবং পোর্টফোলিও দুটিই আছে */}
      <CaseStudies /> 
      
      <AchievementBanner />
      <DevServices />
      <WhyTecnigo />
      <ProvenProcess />
      <Testimonials />
      <Faq />
      <Industries />
      <FinalCta />
    </div>
  );
};

export default Home;