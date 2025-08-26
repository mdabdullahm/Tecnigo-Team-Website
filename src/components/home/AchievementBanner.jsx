// src/components/home/AchievementBanner.jsx

import React from 'react';
import { FaStar } from 'react-icons/fa';

// নতুন গুডফার্মস লোগো (টেক্সট-ভিত্তিক SVG)
const GoodFirmsLogo = () => (
    <svg width="90" height="18" viewBox="0 0 90 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#0D1F3C">GoodFirms</text>
    </svg>
);

// নতুন ক্লাচ লোগো (টেক্সট-ভিত্তিক SVG)
const ClutchLogo = (props) => (
     <svg width="70" height="18" viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="0" y="14" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#0D1F3C">Clutch</text>
    </svg>
);

const InfoCard = ({ title, description, rating, reviewSource, children, className, isCircular = false }) => (
    <div className={`
        bg-white/20 backdrop-blur-xl p-6 shadow-lg border border-white/30 text-center flex flex-col items-center 
        transition-all duration-300 transform hover:-translate-y-2
        ${isCircular ? 'rounded-full aspect-square justify-center' : 'rounded-3xl'}
        ${className}
    `}>
        {reviewSource && (
            <div className="flex items-center gap-2 mb-3">
                {reviewSource}
                {rating && (
                    <div className="flex items-center gap-1.5">
                        <span className="text-yellow-400 flex">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={14}/>
                            ))}
                        </span>
                        <span className="font-semibold text-gray-800 text-sm">{rating}</span>
                    </div>
                )}
            </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{title}</h3>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
        {children}
    </div>
);

const AchievementBanner = () => {
    return (
        <section className="relative -mt-20 pt-20 pb-12 overflow-hidden">
            {/* Background Image & Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://i.ibb.co.com/v4BjhQVL/pexels-thisisengineering-3861972.jpg')"}}
            >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* --- flex justify-center items-stretch ব্যবহার করে Alignment ঠিক করা হয়েছে --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
                    {/* Clutch Review */}
                    <InfoCard
                        reviewSource={<ClutchLogo />}
                        rating="4.5"
                        title="ZAAG Systems"
                        description="Innovative, user-focused solutions..."
                    />

                    {/* Experience */}
                    <InfoCard
                        title="7+ Years Experience"
                        description="We have 7+ years of solid experience."
                        isCircular={true}
                    />

                    {/* Center Image */}
                    <div className="hidden lg:flex justify-center items-center">
                        <img 
                            src="https://i.ibb.co.com/PzVkBWxt/images-10.jpg" // নতুন ছবি
                            alt="Team member" 
                            className="w-40 h-40 object-cover rounded-3xl shadow-2xl transform hover:scale-110 transition-transform duration-300 border-4 border-white"
                        />
                    </div>

                    {/* Projects */}
                    <InfoCard
                        title="140+ SC. Projects"
                        description="Trusted by people from every corner of the world."
                        isCircular={true}
                    />

                    {/* GoodFirms Review */}
                    <InfoCard
                        reviewSource={<GoodFirmsLogo />}
                        rating="4.5"
                        title="Exceptional design"
                        description="expertise: ZAA..."
                    />
                </div>
            </div>
        </section>
    );
};

export default AchievementBanner;