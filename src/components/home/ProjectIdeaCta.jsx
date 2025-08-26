// src/components/home/ProjectIdeaCta.jsx
import React from 'react';

const ProjectIdeaCta = () => {
    return (
        <section className="bg-[#001f55] text-white py-24 overflow-hidden relative">
            {/* Background decorative shapes */}
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-500/10 rounded-full"></div>
            <div className="absolute -bottom-24 -right-16 w-64 h-64 bg-purple-500/10 rounded-full"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Have a Project Idea?
                    </h2>
                    <p className="mt-6 text-lg text-blue-200 leading-relaxed">
                        Schedule a call today to explore and kickstart your journey with our premium design, video, and website development services. Get a Free Consultation from the Top Software Company in Bangladesh!
                    </p>
                    
                    {/* Pulsating dots for visual effect */}
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectIdeaCta;