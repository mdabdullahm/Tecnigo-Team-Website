// src/pages/ComingSoonPage.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const ComingSoonPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            
            {/* --- ভিডিওতে দেখানো নতুন এবং উন্নত ডিজাইন --- */}
            <div className="text-center mb-12">
                <h1 className="text-6xl md:text-8xl font-black uppercase tracking-widest text-white/90">
                    Coming Soon
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                    We are working hard to bring you something amazing. Stay tuned!
                </p>
            </div>

            {/* --- অ্যানিমেটেড প্রোগ্রেস বার --- */}
            <div className="w-full max-w-lg h-2 bg-gray-800 rounded-full overflow-hidden mb-12 border border-gray-700">
                <div className="h-full bg-red-600 animate-progress-bar"></div>
            </div>

            {/* --- Back to Home বাটন --- */}
            <NavLink 
                to="/services/ui-ux-design" // UI/UX হোম পেজে ফেরত যাবে
                className="relative inline-block px-10 py-4 rounded-full font-semibold text-lg bg-white text-black border border-gray-300 overflow-hidden group transition-all duration-300 transform hover:scale-105"
            >
                <span className="absolute left-0 top-0 w-full h-full bg-red-600 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Back to Home
                </span>
            </NavLink>

        </div>
    );
};

export default ComingSoonPage;