// src/pages/UiUxDesignPage.jsx

import React, { useContext } from 'react';
import { Layers, Users, PenTool, Search, Quote, Sparkles, Paintbrush } from 'lucide-react';
import { AppContext } from '../AppContext';

// --- পুনঃব্যবহারযোগ্য কম্পোনেন্টগুলো (আগের পেজগুলো থেকে নেওয়া) ---

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
                        Get a Free Consultation
                    </button>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={image} alt={title} className="w-full max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

// KeyFeatures
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);
const KeyFeatures = ({ title, subtitle, features = [] }) => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
                <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
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
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Design Process</h2></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {steps.map((step, index) => <ProcessStep key={index} number={index + 1} {...step} />)}
            </div>
        </div>
    </section>
);

// TechStack
const TechStack = ({ technologies = [] }) => (
    <section className="bg-gradient-to-br from-gray-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Design & Prototyping Tools We Use</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center gap-3" title={tech.name}>
                        <img src={tech.logo} alt={`${tech.name} logo`} className="h-14 w-14 transition-transform duration-300 hover:scale-110" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// Testimonial
const Testimonial = ({ quote, name, role, avatar }) => (
    <section className="bg-white py-24">
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

// HiringCta
const HiringCta = () => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    return(
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <Users className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Hire a World-Class Design Team</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Elevate your product with our expert UI/UX designers. We provide creative talent to help you build intuitive and beautiful user experiences.
                </p>
                <button onClick={() => setIsContactPopupOpen(true)} className="mt-8 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105">
                    Inquire Now
                </button>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const UiUxDesignPage = () => {
    // --- UI/UX ডিজাইনের জন্য কাস্টমাইজড ডেটা ---
    const uiuxData = {
        hero: {
            title: "UI/UX Design Services",
            description: "We craft beautiful, intuitive, and user-centric digital experiences that captivate your audience and drive business results. Let us transform your ideas into engaging products.",
            image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyFeatures: {
            title: "Our Core Design Services",
            subtitle: "We cover the full spectrum of product design to create impactful digital experiences.",
            features: [
                { icon: <Search size={28} />, title: 'User Research & Analysis', description: 'We start by deeply understanding your users\' needs, behaviors, and pain points to build a solid foundation.' },
                { icon: <Layers size={28} />, title: 'Wireframing & Prototyping', description: 'Creating interactive blueprints of your product to validate user flows and functionality before development.' },
                { icon: <Paintbrush size={28} />, title: 'User Interface (UI) Design', description: 'Crafting visually stunning and cohesive interfaces that reflect your brand identity and delight users.' },
                { icon: <Users size={28} />, title: 'User Experience (UX) Design', description: 'Designing the entire user journey to be logical, intuitive, and enjoyable, boosting user satisfaction.' },
                { icon: <PenTool size={28} />, title: 'Design System Creation', description: 'Building scalable and consistent design systems to streamline development and maintain brand coherence.' },
                { icon: <Sparkles size={28} />, title: 'Usability Testing', description: 'Conducting tests with real users to identify usability issues and refine the product for a flawless experience.' },
            ]
        },
        process: {
            steps: [
                { title: 'Discover', description: 'We conduct stakeholder interviews and user research to define project goals and requirements.' },
                { title: 'Define', description: 'Analyzing research findings to create user personas, journey maps, and define the core problem.' },
                { title: 'Ideate & Design', description: 'Brainstorming solutions and creating wireframes, mockups, and interactive prototypes.' },
                { title: 'Test', description: 'Gathering feedback from real users through usability testing to iterate and improve the design.' },
                { title: 'Handoff', description: 'Delivering a comprehensive design system and assets to the development team for implementation.' },
                { title: 'Iterate', description: 'Continuously improving the product based on post-launch analytics and user feedback.' },
            ]
        },
        techStack: {
            technologies: [
                { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'Adobe XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
                { name: 'Sketch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
                { name: 'InVision', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg' },
                { name: 'Zeplin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zeplin/zeplin-original.svg' },
                { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
                { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
            ]
        },
        testimonial: {
            quote: "The UI/UX design provided by Tecnigo Team completely transformed our application. User engagement is up by 40%, and we've received nothing but positive feedback. Their team is creative and incredibly professional.",
            name: "Emily Carter",
            role: "Head of Product, SaaSify",
            avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    };

    return (
        <div>
            <ServiceHero {...uiuxData.hero} />
            <KeyFeatures {...uiuxData.keyFeatures} />
            <OurProcess {...uiuxData.process} />
            <TechStack {...uiuxData.techStack} />
            <Testimonial {...uiuxData.testimonial} />
            <HiringCta />
        </div>
    );
};

export default UiUxDesignPage;