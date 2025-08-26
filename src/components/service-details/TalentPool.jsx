// src/components/service-details/TalentPool.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // --- পরিবর্তন ১: NavLink ইম্পোর্ট করা হলো ---
import { Globe, Smartphone, Monitor } from 'lucide-react';

// --- পরিবর্তন ২: প্রতিটি আইটেমের সাথে path যোগ করা হলো ---
const talentData = {
    'team-augmentation': [
        { title: 'Hire Front-End Developers', path: '/services/hire-front-end-developers' },
        { title: 'Hire Back-end Developers', path: '/services/hire-back-end-developers' },
        { title: 'Hire UI/UX Developers', path: '/services/hire-ui-ux-developers' },
        { title: 'Hire SQA Engineers', path: '/services/hire-sqa-engineers' },
        { title: 'Hire Mobile App Developers', path: '/services/hire-mobile-app-developers' },
        { title: 'Explore All Resources', path: '/services/resources' }
    ],
    'end-to-end': [
        { title: 'Web Development', path: '/services/web-development' },
        { title: 'Mobile Application Development', path: '/services/mobile-app-development' },
        { title: 'MVP Development', path: '/services/mvp-development' }
    ],
    'ui-ux': [
        { title: 'Service Design', path: '/services/service-design' },
        { title: 'User Research', path: '/services/user-research' },
        { title: 'Interaction Design', path: '/services/interaction-design' }
    ]
};

const TalentPool = () => {
    const [activeTab, setActiveTab] = useState('team-augmentation');

    const tabs = [
        { id: 'team-augmentation', title: 'Team Augmentation', icon: <Globe size={20} /> },
        { id: 'end-to-end', title: 'End to End Development', icon: <Smartphone size={20} /> },
        { id: 'ui-ux', title: 'UI UX Design', icon: <Monitor size={20} /> },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Explore Our Diverse Talent Pool
                    </h2>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center border-b border-gray-200">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-4 font-semibold text-lg transition-colors duration-300 relative ${
                                activeTab === tab.id
                                ? 'text-blue-600'
                                : 'text-gray-500 hover:text-blue-600'
                            }`}
                        >
                            {tab.icon}
                            <span>{tab.title}</span>
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div className="py-12">
                    {/* --- পরিবর্তন ৩: div-কে NavLink দিয়ে প্রতিস্থাপন করা হলো --- */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl mx-auto">
                        {talentData[activeTab].map((talentItem) => (
                            <NavLink
                                key={talentItem.path}
                                to={talentItem.path}
                                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <span className="text-blue-600">❖</span>
                                <span>{talentItem.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <NavLink 
                        to="/contact" 
                        className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                    >
                        Get Started with Outstuffing
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default TalentPool;