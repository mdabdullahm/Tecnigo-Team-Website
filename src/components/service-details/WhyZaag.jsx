// src/components/service-details/WhyZaag.jsx
import React from 'react';

const reasons = [
    { title: 'Industry Expertise', description: 'Deep industry knowledge for tailored staffing solutions.' },
    { title: 'Extensive Talent Pool', description: 'Access to top-tier professionals across various roles.' },
    { title: 'Seamless Integration', description: 'Smooth collaboration and integration with your team.' },
    { title: 'Scalable Solutions', description: 'Flexibility to scale resources based on project needs.' },
    { title: 'Client Satisfaction', description: 'Proven track record of delivering exceptional satisfaction to our clients.' },
    { title: 'Competitive Pricing', description: 'Cost-effective solutions that fit your budget.' },
];

const ReasonCard = ({ title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200/80 h-full">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const WhyZaag = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">WHY ZAAG?</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Why ZAAG Systems for Staff Augmentation?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <ReasonCard key={index} title={reason.title} description={reason.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyZaag;