// src/pages/UserResearch.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Microscope, MessageSquare, BarChart2, Quote, Gem, Search, CheckCircle } from 'lucide-react';
import { AppContext } from '../AppContext';

// --- পুনঃব্যবহারযোগ্য কম্পোনেন্টগুলো ---

// ServiceHero
const ServiceHero = ({ title, description, image }) => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20 text-white overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">{description}</p>
                    <button onClick={() => setIsContactPopupOpen(true)} className="mt-8 inline-block bg-red-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-red-700 transition-transform duration-300 transform hover:scale-105">
                        Start Your Research
                    </button>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={image} alt={title} className="w-full max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

// ResearchMethods (KeyFeatures এর পরিবর্তিত সংস্করণ)
const MethodCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);
const ResearchMethods = ({ title, subtitle, methods = [] }) => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
                <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {methods.map((method, index) => <MethodCard key={index} {...method} />)}
            </div>
        </div>
    </section>
);

// OurProcess
const ProcessStep = ({ number, title, description }) => (
    <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">{number}</div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);
const OurProcess = ({ steps = [] }) => (
    <section className="bg-white py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our User Research Process</h2></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {steps.map((step, index) => <ProcessStep key={index} number={index + 1} {...step} />)}
            </div>
        </div>
    </section>
);

// Testimonial
const Testimonial = ({ quote, name, role, avatar }) => (
    <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <Quote className="w-16 h-16 text-red-100 mx-auto mb-6" fill="currentColor"/>
            <blockquote className="text-2xl font-medium text-gray-700 italic leading-relaxed">"{quote}"</blockquote>
            <div className="mt-8">
                <img src={avatar} alt={name} className="w-20 h-20 rounded-full mx-auto mb-3 shadow-md" />
                <cite className="font-bold text-gray-800 not-italic block">{name}</cite>
                <span className="text-sm text-gray-500">{role}</span>
            </div>
        </div>
    </section>
);

// CTA Section
const CtaSection = () => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    return(
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <Search className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Ready to Uncover User Insights?</h2>
                <p className="mt-4 text-gray-600 text-lg">
                   Let's work together to understand your users and build products they'll love. Schedule a free consultation to discuss your research needs.
                </p>
                <button 
                    onClick={() => setIsContactPopupOpen(true)}
                    className="mt-8 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                    Get a Free Consultation
                </button>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const UserResearch = () => {
    // --- ইউজার রিসার্চের জন্য কাস্টমাইজড ডেটা ---
    const userResearchData = {
        hero: {
            title: "Data-Driven User Research",
            description: "Unlock deep insights into your users' behaviors, needs, and motivations. Our comprehensive user research services provide the foundation for creating products that truly resonate with your audience.",
            image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        researchMethods: {
            title: "Our User Research Methods",
            subtitle: "We employ a variety of qualitative and quantitative methods to gather actionable insights.",
            methods: [
                { icon: <MessageSquare size={28} />, title: 'User Interviews', description: 'One-on-one conversations to gain in-depth understanding of user experiences and pain points.' },
                { icon: <BarChart2 size={28} />, title: 'Surveys & Questionnaires', description: 'Gathering quantitative data from a large user base to identify trends and patterns.' },
                { icon: <Microscope size={28} />, title: 'Usability Testing', description: 'Observing real users as they interact with your product to identify usability issues and areas for improvement.' },
                { icon: <Users size={28} />, title: 'Persona Development', description: 'Creating detailed user personas to help your team empathize with your target audience.' },
                { icon: <CheckCircle size={28} />, title: 'A/B Testing', description: 'Comparing different versions of a design to determine which one performs better.' },
                { icon: <Gem size={28} />, title: 'Card Sorting', description: 'Understanding how users categorize information to create a logical and intuitive information architecture.' },
            ]
        },
        process: {
            steps: [
                { title: 'Define Research Goals', description: 'We work with you to define clear objectives and key questions for the research.' },
                { title: 'Plan & Recruit', description: 'Selecting the right research methods and recruiting appropriate participants for the study.' },
                { title: 'Conduct Research', description: 'Executing the research plan through interviews, tests, and other methods to gather data.' },
                { title: 'Analyze & Synthesize', description: 'Analyzing the collected data to identify key findings, patterns, and actionable insights.' },
                { title: 'Report & Recommend', description: 'Delivering a comprehensive report with clear findings and strategic recommendations.' },
                { title: 'Integrate into Design', description: 'Working with your design and development teams to ensure the insights are implemented effectively.' },
            ]
        },
        testimonial: {
            quote: "The user research conducted by Tecnigo Team was incredibly thorough. The insights we gained were instrumental in shaping our product strategy and led to a significant increase in user retention.",
            name: "David Chen",
            role: "Head of Product, InnovateX",
            avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    };

    return (
        <div>
            <ServiceHero {...userResearchData.hero} />
            <ResearchMethods {...userResearchData.researchMethods} />
            <OurProcess {...userResearchData.process} />
            <Testimonial {...userResearchData.testimonial} />
            <CtaSection />
        </div>
    );
};

export default UserResearch;