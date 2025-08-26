// src/pages/Projects.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

// প্রজেক্টের ডেটা
const projectsData = [
    {
        image: 'https://cdn.dribbble.com/userupload/4156291/file/original-1913b86032717019f6a6552a92a548ed.png?resize=752x564',
        category: 'Fintech | Personal Finance Management',
        title: 'Paytro: Smarter Financial Choices for a Brighter Future',
    },
    {
        image: 'https://cdn.dribbble.com/userupload/11261313/file/original-0994f7933b49f48a90a7751f75000527.png?resize=752x564',
        category: 'Vehicle management',
        title: 'Fleet Hub: Streamlined Vehicle & Workforce Management',
    },
    {
        image: 'https://cdn.dribbble.com/userupload/3909160/file/original-c17c27189f3a693c1042125555ac912b.png?resize=752x564',
        category: 'Healthcare',
        title: 'IntelliHealth: AI-Powered Health Consultations',
    },
    {
        image: 'https://cdn.dribbble.com/userupload/7342686/file/original-d6a917548f2191b72a4d33a1f81014a6.png?resize=752x564',
        category: 'Fuel management',
        title: 'Fuel Pro: Revolutionizing Fuel Management for Efficiency',
    },
    {
        image: 'https://cdn.dribbble.com/userupload/9589312/file/original-7b8c80a2b848ccefb7f99997c63102f9.png?resize=752x564',
        category: 'Project management',
        title: 'Pixel Pulse: Elevating Digital Agency Efficiency',
    },
    {
        image: 'https://cdn.dribbble.com/users/1615584/screenshots/11385311/media/df1488c7f53676a394f7d377c8e9d3d3.png?resize=752x564',
        category: 'Healthcare',
        title: 'Transforming Health Management with X-Health Hub',
    },
];

// Project Card Component
const ProjectCard = ({ image, category, title }) => (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-64 object-cover object-top transform group-hover:scale-105 transition-transform duration-300" 
            />
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{category}</p>
            <h3 className="text-xl font-bold text-gray-800 leading-snug">{title}</h3>
        </div>
    </div>
);

const Projects = () => {
    return (
        <div>
            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-16 bg-gray-800">
                <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Team working in an office"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        See Our Impressive <span className="text-blue-400">Portfolio</span> of Work
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
                        At ZAAG Systems Limited, we’re proud of the innovative solutions we’ve delivered to our clients in various areas.
                    </p>
                    <NavLink
                        to="/contact"
                        className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Let's Discuss Your Project
                    </NavLink>
                </div>
            </section>

            {/* --- Projects Grid Section --- */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {projectsData.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                image={project.image}
                                category={project.category}
                                title={project.title}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;