// src/components/service-details/HiringModels.jsx
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

const ModelCard = ({ title, description, details }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-500 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <div className="border-t border-gray-200 mt-auto pt-4">
            <p className="font-semibold text-gray-700">{details}</p>
        </div>
    </div>
);

const HiringModels = () => {
    // AppContext থেকে পপ-আপ খোলার ফাংশনটি নেওয়া হলো
    const { setIsContactPopupOpen } = useContext(AppContext);
    
    const models = [
        {
            title: 'Full-Time Hiring',
            description: 'Dedicated front-end developers working exclusively on your projects for an extended period. Ideal for long-term projects with consistent resource allocation.',
            details: 'Daily: 8 Hours | Weekly: 5 Days'
        },
        {
            title: 'Part-Time Hiring',
            description: 'Dedicated front-end developers working exclusively on your projects for an extended period. Ideal for long-term projects with consistent resource allocation.',
            details: 'Daily: 4 Hours | Weekly: 5 Days'
        },
        {
            title: 'Project Basis Hiring',
            description: 'On-demand access to talented front-end developers for short-term projects or ad hoc tasks. Ideal for small-scale projects or quick fixes.',
            details: 'Minimum 40 hours'
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">Resource Hiring Models</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Choose the Right Model for Your Resource Needs
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {models.map((model, index) => (
                        <ModelCard key={index} title={model.title} description={model.description} details={model.details} />
                    ))}
                </div>
                <div className="text-center mt-16">
                    {/* বাটনটিতে onClick ইভেন্ট যোগ করা হয়েছে */}
                    <button 
                        onClick={() => setIsContactPopupOpen(true)}
                        className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                    >
                        Hire Resource Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HiringModels;