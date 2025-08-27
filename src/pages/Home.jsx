// src/pages/Home.jsx

import React from 'react';

// সব কম্পোনেন্ট ইম্পোর্ট করা হচ্ছে
import HeroSection from '../components/home/HeroSection';
import AchievementBanner from '../components/home/AchievementBanner';
import CaseStudies from '../components/home/CaseStudies';
import DevServices from '../components/home/DevServices';
import WhyTecnigo from '../components/home/WhyTecnigo';
import ProvenProcess from '../components/home/ProvenProcess';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import Industries from '../components/home/Industries';
// import ProjectIdeaCta from '../components/home/ProjectIdeaCta'; // <-- এই লাইনটি ডিলিট করুন
import FinalCta from '../components/home/FinalCta';
// import GetInTouch from '../components/home/GetInTouch';        // <-- এই লাইনটি ডিলিট করুন

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AchievementBanner />
      <DevServices />
      <CaseStudies />
      <WhyTecnigo />
      <ProvenProcess />
      <Testimonials />
      <Faq />
      <Industries />
      {/* <ProjectIdeaCta /> */} {/* <-- এই লাইনটি ডিলিট বা কমেন্ট আউট করুন */}
      <FinalCta />
      {/* <GetInTouch /> */}      {/* <-- এই লাইনটি ডিলিট বা কমেন্ট আউট করুন */}
    </div>
  );
};

export default Home;