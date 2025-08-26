// src/components/service-details/FeaturePoints.jsx

import React, { useContext } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AppContext } from '../../AppContext';

// FeatureCard কম্পোনেন্ট: একটি সিঙ্গেল ফিচার পয়েন্ট দেখানোর জন্য
const FeatureCard = ({ title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
            <CheckCircle2 className="w-8 h-8 text-white bg-blue-600 rounded-full p-1.5" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);

// মূল FeaturePoints কম্পোনেন্ট
const FeaturePoints = ({ title, features = [] }) => {
    // AppContext থেকে পপ-আপ খোলার ফাংশনটি নেওয়া হলো
    const { setIsContactPopupOpen } = useContext(AppContext);

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            title={feature.title} 
                            description={feature.description} 
                        />
                    ))}
                </div>
                 <div className="text-center mt-16">
                    {/* বাটনটিতে onClick ইভেন্ট যোগ করা হয়েছে */}
                    <button 
                        onClick={() => setIsContactPopupOpen(true)}
                        className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                    >
                        Get Started with Outstuffing
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturePoints;