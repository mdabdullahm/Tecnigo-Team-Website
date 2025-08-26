// src/components/uiux/MissionSection.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const MissionSection = () => {
    return (
        <section className="bg-black text-white text-center py-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    At ZaagXd, we provide outstanding design solutions that propel success and elevate brands. Our skilled team merges creativity with technology to bring your vision to life. We prioritize collaboration and quality, ensuring that every project aligns with your goals and surpasses expectations. Partner with us to confidently achieve your business objectives.
                </p>
                <NavLink 
                    to="/work"
                    className="mt-10 relative inline-block px-10 py-4 rounded-full font-semibold text-lg bg-white text-black border border-gray-300 overflow-hidden group"
                >
                    <span className="absolute left-0 top-0 w-full h-full bg-blue-600 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Discover Our Works
                    </span>
                </NavLink>
            </div>
        </section>
    );
};

export default MissionSection;