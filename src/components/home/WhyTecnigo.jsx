// src/components/home/WhyTecnigo.jsx

import React, { useContext } from 'react'; // <-- useContext ইম্পোর্ট করুন
import Marquee from "react-fast-marquee";
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';
import { AppContext } from '../../AppContext'; // <-- AppContext ইম্পোর্ট করুন

// --- Feature Card Component (অপরিবর্তিত) ---
const FeatureCard = ({ icon, title, description }) => (
    <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
        <div className="relative z-10">
            <div className="bg-red-50 text-red-600 inline-block p-4 rounded-full mb-5">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
        </div>
    </div>
);

// --- Technology Marquee Component (অপরিবর্তিত) ---
const TechMarquee = () => {
    // ... (TechMarquee এর কোড অপরিবর্তিত) ...
    const technologies = [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Vue JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
        { name: 'Next JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Typescript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ];

    return (
        <div className="bg-gray-800 py-10">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white">Technologies We Master</h3>
                <p className="text-gray-400 mt-2">
                    We leverage cutting-edge technologies to build future-proof solutions.
                </p>
            </div>
            <Marquee gradient={true} gradientColor={[17, 24, 39]} speed={60} pauseOnHover={true}>
                {technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center gap-3 mx-10">
                        <img src={tech.logo} alt={`${tech.name} logo`} className="h-12 w-12" />
                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

// --- Main WhyTecnigo Component (এখানে বাটন পরিবর্তন করা হয়েছে) ---
const WhyTecnigo = () => {
    const { setIsContactPopupOpen } = useContext(AppContext); // <-- context থেকে ফাংশনটি নিন

    const features = [
        // ... (features ডেটা অপরিবর্তিত) ...
        {icon: <Award size={32} />, title: 'Results-Driven Approach', description: 'We focus on delivering measurable results. Our solutions are designed to meet your business objectives and drive growth.',},{icon: <Users size={32} />, title: 'Expert & Agile Team', description: 'Our team of seasoned professionals uses agile methodologies to deliver high-quality products efficiently and flexibly.',},{icon: <Clock size={32} />, title: 'On-Time Delivery', description: 'We respect your time. Our streamlined process and dedicated project management ensure your project is delivered on schedule.',},{icon: <ShieldCheck size={32} />, title: 'Transparent Collaboration', description: 'We believe in open communication. You get a dedicated partner and complete transparency throughout the project lifecycle.',},
    ];

    return (
        <>
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                Why Partner with <span className="text-red-600">Tecnigo Team?</span>
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                We're more than just a digital agency; we're your strategic partner in innovation. We blend creativity with technology to build solutions that not only look great but also perform exceptionally.
                            </p>
                            
                            {/* --- NavLink কে button দিয়ে প্রতিস্থাপন করা হয়েছে --- */}
                            <button
                                onClick={() => setIsContactPopupOpen(true)} // <-- onClick ইভেন্ট যোগ করা হয়েছে
                                className="mt-8 inline-block bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
                            >
                                Let's Discuss Your Project
                            </button>

                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} {...feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <TechMarquee />
        </>
    );
};

export default WhyTecnigo;