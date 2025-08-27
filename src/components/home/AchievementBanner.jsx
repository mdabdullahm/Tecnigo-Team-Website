// src/components/home/AchievementBanner.jsx
import React from 'react';
import CountUp from 'react-countup';
import { Briefcase, Smile, Users, Clock } from 'lucide-react';

const StatCard = ({ icon, end, suffix, title }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
        <div className="inline-block bg-red-100 text-red-600 p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-4xl font-extrabold text-gray-800">
            <CountUp end={end} duration={3} enableScrollSpy />
            {suffix}
        </h3>
        <p className="text-gray-500 mt-2 font-medium">{title}</p>
    </div>
);

const AchievementBanner = () => {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Our Proven Track Record
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        We believe in results. Here's a glimpse of what we've accomplished for our partners.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard icon={<Briefcase size={32} />} end={150} suffix="+" title="Projects Completed" />
                    <StatCard icon={<Smile size={32} />} end={98} suffix="%" title="Client Satisfaction" />
                    <StatCard icon={<Users size={32} />} end={50} suffix="+" title="Expert Team Members" />
                    <StatCard icon={<Clock size={32} />} end={8} suffix="+" title="Years in Business" />
                </div>
            </div>
        </section>
    );
};

export default AchievementBanner;