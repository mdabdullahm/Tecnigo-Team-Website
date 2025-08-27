// src/pages/InteractionDesign.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MousePointerClick, Zap, Gift, Eye, Quote, Users, CheckCircle } from 'lucide-react';
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
                        Start Your Project
                    </button>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={image} alt={title} className="w-full max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

// KeyFocusAreas (KeyFeatures এর পরিবর্তিত সংস্করণ)
const FocusCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);
const KeyFocusAreas = ({ title, subtitle, areas = [] }) => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
                <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {areas.map((area, index) => <FocusCard key={index} {...area} />)}
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
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Interaction Design Process</h2></div>
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
                <Zap className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Ready to Create Engaging Interactions?</h2>
                <p className="mt-4 text-gray-600 text-lg">
                   Let's craft a digital experience that feels alive. Contact us for a free consultation and let's discuss how we can make your product more interactive and delightful.
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
const InteractionDesign = () => {
    // --- ইন্টার‍্যাকশন ডিজাইনের জন্য কাস্টমাইজড ডেটা ---
    const ixDesignData = {
        hero: {
            title: "Interaction Design (IxD) Services",
            description: "We design the conversation between your product and its users. Our interaction design services focus on creating intuitive, engaging, and meaningful experiences that make your product a joy to use.",
            image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyFocusAreas: {
            title: "Our Key Focus Areas in IxD",
            subtitle: "We go beyond aesthetics to design how your product behaves and responds.",
            areas: [
                { icon: <MousePointerClick size={28} />, title: 'Intuitive Controls & Feedback', description: 'Designing clear controls and providing immediate, meaningful feedback for every user action.' },
                { icon: <Zap size={28} />, title: 'Microinteractions & Animations', description: 'Crafting subtle animations and microinteractions that guide users and add delight to the experience.' },
                { icon: <Gift size={28} />, title: 'Affordances & Signifiers', description: 'Ensuring that users instinctively know how to interact with your product through clear visual cues.' },
                { icon: <Eye size={28} />, title: 'Visual Hierarchy', description: 'Organizing information in a clear and logical way that guides user attention to what matters most.' },
                { icon: <CheckCircle size={28} />, title: 'Accessibility (a11y)', description: 'Designing interactions that are usable by people with the widest range of abilities.' },
                { icon: <Users size={28} />, title: 'User Flow Optimization', description: 'Mapping and refining user journeys to make them as efficient and frictionless as possible.' },
            ]
        },
        process: {
            steps: [
                { title: 'Goal Analysis', description: 'We start by understanding the user\'s goals and the business objectives the interaction needs to support.' },
                { title: 'Conceptual Modeling', description: 'Defining how the system works and how users will interact with it on a conceptual level.' },
                { title: 'Prototyping & Wireframing', description: 'Creating low to high-fidelity prototypes to visualize and test the interactions early in the process.' },
                { title: 'Motion Design', description: 'Designing the animations and transitions that bring the interface to life and improve usability.' },
                { title: 'Usability Testing', description: 'Testing the prototypes with real users to gather feedback and refine the interactions.' },
                { title: 'Developer Handoff', description: 'Providing detailed documentation and assets to ensure the designed interactions are perfectly implemented.' },
            ]
        },
        testimonial: {
            quote: "The attention to detail in Tecnigo Team's interaction design is incredible. Every animation and transition feels purposeful and enhances the user experience, making our app feel truly premium.",
            name: "Tom Baker",
            role: "Founder, SaaSify",
            avatar: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    };

    return (
        <div>
            <ServiceHero {...ixDesignData.hero} />
            <KeyFocusAreas {...ixDesignData.keyFocusAreas} />
            <OurProcess {...ixDesignData.process} />
            <Testimonial {...ixDesignData.testimonial} />
            <CtaSection />
        </div>
    );
};

export default InteractionDesign;