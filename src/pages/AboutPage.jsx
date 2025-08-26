import React from 'react';

// About পেজের জন্য তৈরি করা নতুন কম্পোনেন্টগুলো ইম্পোর্ট করুন
import AboutHero from '../components/uiux/AboutHero';
import MissionSection from '../components/uiux/MissionSection';
import CultureMarquee from '../components/uiux/CultureMarquee';
import AchievementsSection from '../components/uiux/AchievementsSection';
import LocationSection from '../components/uiux/LocationSection';

// পুরনো কম্পোনেন্টগুলো পুনরায় ব্যবহার করুন
import { Testimonials, Faq } from '../components/uiux/FinalSections';

const AboutPage = () => {
    return (
        <div>
            <AboutHero />
            <MissionSection />
            <CultureMarquee />
            <AchievementsSection />
            <LocationSection />
            <Testimonials />
            <Faq />
        </div>
    );
};

export default AboutPage;