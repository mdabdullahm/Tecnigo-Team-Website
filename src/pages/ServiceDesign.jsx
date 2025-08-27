// src/pages/ServiceDesign.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Microscope, Puzzle, Heart, Quote, Gem, CheckCircle } from 'lucide-react';
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

// KeyPrinciples (KeyFeatures এর পরিবর্তিত সংস্করণ)
const PrincipleCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);
const KeyPrinciples = ({ title, subtitle, principles = [] }) => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
                <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {principles.map((principle, index) => <PrincipleCard key={index} {...principle} />)}
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
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Service Design Process</h2></div>
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
                <Puzzle className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Ready to Reimagine Your Service?</h2>
                <p className="mt-4 text-gray-600 text-lg">
                   Let's collaborate to design services that create lasting value for your customers and your business. Schedule a free consultation with our experts.
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
const ServiceDesign = () => {
    // --- সার্ভিস ডিজাইনের জন্য কাস্টমাইজড ডেটা ---
    const serviceDesignData = {
        hero: {
            title: "Strategic Service Design",
            description: "We help you design, align, and optimize your services to create exceptional end-to-end customer experiences. It's about looking at the big picture to create seamless and valuable interactions at every touchpoint.",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyPrinciples: {
            title: "The Core Principles of Our Service Design",
            subtitle: "Our approach is built on a foundation of proven strategic principles.",
            principles: [
                { icon: <Users size={28} />, title: 'Human-Centered', description: 'We always start with the needs, motivations, and desires of the people you serve.' },
                { icon: <Puzzle size={28} />, title: 'Holistic', description: 'We consider the entire ecosystem of your service, including all touchpoints, actors, and systems.' },
                { icon: <Microscope size={28} />, title: 'Co-Creative', description: 'We believe in collaborating closely with your team and customers to generate the best ideas.' },
                { icon: <CheckCircle size={28} />, title: 'Iterative', description: 'We prototype, test, and refine our solutions based on real-world feedback to ensure they are effective.' },
                { icon: <Heart size={28} />, title: 'Value-Driven', description: 'Our goal is to create services that are not only desirable for customers but also viable for your business.' },
                { icon: <Gem size={28} />, title: 'Evidence-Based', description: 'Our decisions are informed by qualitative and quantitative research, not just assumptions.' },
            ]
        },
        process: {
            steps: [
                { title: 'Exploration & Research', description: 'We dive deep into your business and your customers\' world to uncover key insights and opportunities.' },
                { title: 'Journey Mapping', description: 'Visualizing the end-to-end customer journey to identify pain points and moments that matter.' },
                { title: 'Ideation & Prototyping', description: 'Co-creating innovative solutions and building low-fidelity prototypes to test our ideas quickly.' },
                { title: 'Service Blueprinting', description: 'Mapping out the front-stage and back-stage processes required to deliver the new service experience.' },
                { title: 'Testing & Refinement', description: 'Validating our solutions with real users and stakeholders to ensure they are effective and feasible.' },
                { title: 'Implementation Support', description: 'Working alongside your team to bring the new service design to life and ensure a successful launch.' },
            ]
        },
        testimonial: {
            quote: "Tecnigo Team's service design process was an eye-opener. They helped us see our business from our customers' perspective and identified critical areas for improvement. The results have been transformative.",
            name: "Laura Evans",
            role: "Head of Customer Experience, RetailCo",
            avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    };

    return (
        <div>
            <ServiceHero {...serviceDesignData.hero} />
            <KeyPrinciples {...serviceDesignData.keyPrinciples} />
            <OurProcess {...serviceDesignData.process} />
            <Testimonial {...serviceDesignData.testimonial} />
            <CtaSection />
        </div>
    );
};

export default ServiceDesign;