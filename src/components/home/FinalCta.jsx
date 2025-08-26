// src/components/home/FinalCta.jsx
import React from 'react';

const FinalCta = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Abstract Shapes */}
                    <div className="relative mb-8">
                        <div className="absolute top-0 -left-12 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-12 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-16 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 relative z-10">
                        Accelerate Your Software Development Potential with Us
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 relative z-10">
                        Zaag System delivers cutting-edge software development solutions to help you achieve your goals with speed, precision, and guaranteed results.
                    </p>
                    <a
                        href="/contact"
                        className="mt-10 inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg relative z-10"
                    >
                        Build your Dream Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;