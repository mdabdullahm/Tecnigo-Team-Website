// src/components/uiux/AchievementsSection.jsx
import React from 'react';
import CountUp from 'react-countup';

const StatCard = ({ end, suffix, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"></div>
        <p className="text-5xl md:text-6xl font-bold text-gray-800">
            <CountUp end={end} duration={3} enableScrollSpy />
            {suffix}
        </p>
        <h4 className="mt-4 font-semibold text-gray-700">{title}</h4>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
);

const AchievementsSection = () => {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Crafting Impactful Designs for Leading Global Brands
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard end={120} suffix="m+" title="Combined VC investment" description="in products we've helped our partners design." />
                    <StatCard end={40} suffix="m+" title="Design awards" description="from Webby, Awwwards, Adobe, Behance." />
                    <StatCard end={90} suffix="%" title="of clients are coming back" description="to us for a second project." />
                    <StatCard end={7} title="Early stage startups" description="that successfully scaled." />
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;