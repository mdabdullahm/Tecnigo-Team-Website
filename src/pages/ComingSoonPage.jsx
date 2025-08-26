import React from 'react';
import { NavLink } from 'react-router-dom';

const ComingSoonPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            
            {/* --- Animated "Coming Soon" Bar --- */}
            <div className="relative w-full max-w-md h-20 bg-gray-800 rounded-full overflow-hidden mb-8 border-2 border-gray-700">
                <div className="absolute left-0 top-0 h-full bg-blue-600 animate-fill-bar"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-around">
                    <span className="text-3xl font-bold tracking-widest text-white">COMING</span>
                    <span className="text-3xl font-bold tracking-widest text-white">SOON</span>
                </div>
            </div>

            {/* --- Animated "Back to Home" Button --- */}
            <NavLink 
                to="/services/ui-ux-design"
                className="relative inline-block px-10 py-4 rounded-full font-semibold text-lg bg-white text-black border border-gray-300 overflow-hidden group transition-all duration-300"
            >
                <span className="absolute left-0 top-0 w-full h-full bg-blue-600 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                    Back to Home
                </span>
            </NavLink>

        </div>
    );
};

export default ComingSoonPage;