// src/components/service-details/GlobalPresence.jsx

import React from 'react';

// পরিসংখ্যানের ডেটা
const statsData = [
    {
        count: '110+',
        description: 'Over 110+ skilled professionals working with us'
    },
    {
        count: '32+',
        description: 'We have served 32+ companies with our services.'
    },
    {
        count: '96%',
        description: '96% customer satisfaction and counting.'
    }
];

// স্ট্যাট কার্ড কম্পোনেন্ট
const StatCard = ({ count, description }) => (
    <div className="text-center">
        <h3 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            {count}
        </h3>
        <p className="mt-3 text-base text-gray-600 max-w-xs mx-auto">
            {description}
        </p>
    </div>
);

const GlobalPresence = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="container mx-auto px-4">
                {/* সেকশনের শিরোনাম */}
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">GLOBAL PRESENCE</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Trusted by companies around the world
                    </h2>
                </div>

                {/* --- নতুন এবং কার্যকরী ইমেজ লিঙ্ক --- */}
                <div className="my-16 flex justify-center">
                    <img 
                        src="https://i.ibb.co.com/HL3p350K/240-F-1188811442-WX8y-Wn-G2n2vk7trk-ZZz-Dh5-YMft4h-Ei-G6.jpg" 
                        alt="Dotted world map of global presence" 
                        className="max-w-4xl w-full h-auto"
                    />
                </div>

                {/* পরিসংখ্যানের কার্ডগুলো */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} count={stat.count} description={stat.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;