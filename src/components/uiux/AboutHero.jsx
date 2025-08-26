// src/components/uiux/AboutHero.jsx
import React from 'react';

const AboutHero = () => {
    return (
        <section className="bg-white pt-16">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Meet ZaagXd: Your Partner in Design Excellence
                </h1>
            </div>
            <div className="mt-12 flex justify-center items-center bg-black py-4">
                <img 
                    src="https://images.pexels.com/photos/7792815/pexels-photo-7792815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Designer working on a laptop"
                    className="w-full max-w-4xl rounded-lg shadow-2xl"
                />
            </div>
        </section>
    );
};

export default AboutHero;