// src/components/service-details/Frameworks.jsx

import React from 'react';

const FrameworkCard = ({ name, logo }) => (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <img src={logo} alt={`${name} logo`} className="h-14 w-14" />
        <span className="font-semibold text-gray-700">{name}</span>
    </div>
);

// মূল কম্পונেন্ট এখন props হিসেবে frameworks গ্রহণ করবে
const Frameworks = ({ frameworks = [] }) => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Frameworks we work with
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {frameworks.map((framework, index) => (
                        <FrameworkCard key={index} name={framework.name} logo={framework.logo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Frameworks;