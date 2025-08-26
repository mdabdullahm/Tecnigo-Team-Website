// src/components/service-details/RecruitmentProcess.jsx

import React, { useContext } from 'react';
import { FileSearch, UserSearch, MessageSquareText, FileCheck2, Handshake } from 'lucide-react';
import { AppContext } from '../../AppContext';

const processData = [
    {
        step: 1,
        title: 'Job Analysis',
        description: 'Conduct a comprehensive analysis of job requirements, ensuring a clear understanding of the necessary skills and qualifications.',
        icon: <FileSearch size={32} className="text-blue-600" />
    },
    {
        step: 2,
        title: 'Sourcing & Screening',
        description: 'Source top talent through various channels and implement a rigorous screening process to identify the most qualified candidates.',
        icon: <UserSearch size={32} className="text-blue-600" />
    },
    {
        step: 3,
        title: 'Interviews & Assessments',
        description: 'Conduct thorough interviews and assessments, evaluating candidates’ competencies and compatibility with the role and organizational culture.',
        icon: <MessageSquareText size={32} className="text-blue-600" />
    },
    {
        step: 4,
        title: 'Selection & Offer',
        description: 'Carefully select candidates who meet the criteria and extend offers based on their qualifications and fit for the position.',
        icon: <FileCheck2 size={32} className="text-blue-600" />
    },
    {
        step: 5,
        title: 'Onboarding & Integration',
        description: 'Facilitate a smooth onboarding process and provide support to ensure seamless integration into the team and organization.',
        icon: <Handshake size={32} className="text-blue-600" />
    }
];

const ProcessCard = ({ step, title, description, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500 text-center h-full flex flex-col items-center">
        <div className="bg-blue-100 p-5 rounded-full mb-6 inline-block">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{`${step}. ${title}`}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
);

const RecruitmentProcess = () => {
    // AppContext থেকে পপ-আপ খোলার ফাংশনটি নেওয়া হলো
    const { setIsContactPopupOpen } = useContext(AppContext);

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">Requirement Process</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Discover Our Effective Recruitment Process
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processData.slice(0, 3).map(item => (
                        <ProcessCard key={item.step} {...item} />
                    ))}
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
                        {processData.slice(3, 5).map(item => (
                            <ProcessCard key={item.step} {...item} />
                        ))}
                    </div>
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

export default RecruitmentProcess;