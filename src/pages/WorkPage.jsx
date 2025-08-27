// src/pages/WorkPage.jsx

import React, { useState, useMemo, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { ArrowUpRight } from 'lucide-react';

// --- প্রজেক্টের ডেটা (এখানে আপনার সেরা প্রজেক্টগুলো যোগ করুন) ---
const allProjects = [
    {
        image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'UI/UX Design',
        title: 'Fintech Mobile Application',
        description: 'A revolutionary mobile banking app designed to simplify personal finance management.'
    },
    {
        image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Web Development',
        title: 'E-commerce Platform Redesign',
        description: 'A scalable e-commerce site that boosted client sales by over 300%.'
    },
    {
        image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Product Design',
        title: 'SaaS Analytical Dashboard',
        description: 'An intuitive dashboard providing users with powerful data visualization and insights.'
    },
    {
        image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'Web Development',
        title: 'Corporate Website for Tech Corp',
        description: 'A complete overhaul resulting in a 150% increase in user engagement.'
    },
    {
        image: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'App Development',
        title: 'Fleet Management Mobile App',
        description: 'Seamless vehicle and workforce management with real-time tracking.'
    },
    {
        image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        category: 'UI/UX Design',
        title: 'Creative Agency Portfolio',
        description: 'A visually stunning portfolio website for a leading creative agency.'
    },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'App Development', 'Product Design'];

// --- Project Card Component ---
const ProjectCard = ({ image, category, title, description }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
        <div className="overflow-hidden aspect-w-4 aspect-h-3">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500" 
            />
        </div>
        <div className="p-6">
            <p className="text-sm font-semibold text-red-600 mb-2">{category}</p>
            <h3 className="text-xl font-bold text-gray-800 leading-snug">{title}</h3>
            <p className="text-gray-500 mt-3 text-sm line-clamp-2">{description}</p>
        </div>
    </div>
);

// --- Main WorkPage Component ---
const WorkPage = () => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') return allProjects;
        return allProjects.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <section className="bg-gray-900 text-white pt-32 pb-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold">Our Work</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        We take pride in the solutions we've delivered. Explore our portfolio of projects that have driven success for our clients.
                    </p>
                </div>
            </section>

            {/* --- Projects Grid & Filters Section --- */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                                    activeCategory === category 
                                    ? 'bg-red-600 text-white shadow-md' 
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="bg-white py-24">
                 <div className="container mx-auto px-4">
                    <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                            Let's turn your idea into a reality. We'd love to hear about your project and discuss how we can help.
                        </p>
                        <button 
                            onClick={() => setIsContactPopupOpen(true)}
                            className="mt-8 inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                        >
                            Let's Talk <ArrowUpRight size={20} />
                        </button>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default WorkPage;