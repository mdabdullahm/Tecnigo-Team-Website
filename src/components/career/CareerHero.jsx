// src/components/career/CareerHero.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const CareerHero = () => {
    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Background Image Grid */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
                <div className="col-span-1 row-span-2 bg-cover bg-center" style={{backgroundImage: `url('https://i.ibb.co.com/JWpJkgVj/download-4.jpg')`}}></div>
                <div className="col-span-1 row-span-1 bg-cover bg-center" style={{backgroundImage: `url('https://i.ibb.co.com/cckqcXXs/download-5.jpg')`}}></div>
                <div className="col-span-1 row-span-1 bg-cover bg-center" style={{backgroundImage: `url('https://i.ibb.co.com/99n9hzRZ/download-6.jpg')`}}></div>
                <div className="col-span-1 row-span-1 bg-cover bg-center" style={{backgroundImage: `url('https://i.ibb.co.com/dJQYJsjD/images-2.jpg')`}}></div>
                <div className="col-span-1 row-span-1 bg-cover bg-center" style={{backgroundImage: `url('https://i.ibb.co.com/KzrKG1Gp/download-7.jpg')`}}></div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Join <span className="text-blue-400">ZAAG Systems Ltd.</span> and Shape the Future!
                    </h1>
                    <p className="mt-6 text-lg text-gray-200">
                        Join ZAAG Systems Ltd and make an impact in the world of technology. Explore exciting career opportunities and unleash your potential. Join us today!
                    </p>
                    <NavLink
                        to="/contact" // You might want a specific application link later
                        className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Join Our Team
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;