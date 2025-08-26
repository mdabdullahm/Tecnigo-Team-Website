// src/pages/Home.jsx
import React from 'react';

// সব কম্পোনেন্ট ইম্পোর্ট করা হচ্ছে
import HeroSection from '../components/home/HeroSection';
import AchievementBanner from '../components/home/AchievementBanner';
import ServiceList from '../components/home/ServiceList';
import CaseStudies from '../components/home/CaseStudies';
import DevServices from '../components/home/DevServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProvenProcess from '../components/home/ProvenProcess';
import TechStack from '../components/home/TechStack';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import Industries from '../components/home/Industries';
import ProjectIdeaCta from '../components/home/ProjectIdeaCta';
import FinalCta from '../components/home/FinalCta';
import GetInTouch from '../components/home/GetInTouch'; // <-- নতুন ইম্পোর্ট

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AchievementBanner />
      <ServiceList />
      <CaseStudies />
      <DevServices />
      <WhyChooseUs />
      <ProvenProcess />
      <TechStack />
      <Testimonials />
      <Faq />
      <Industries />
      <ProjectIdeaCta />
      <FinalCta />
      <GetInTouch /> {/* <-- নতুন কম্পোনেন্ট যুক্ত করা হলো */}

      {/* আমাদের হোমপেজ এখন সত্যিই, সত্যিই সম্পূর্ণ! */}
    </div>
  );
};

export default Home;