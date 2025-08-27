// src/pages/MvpDevelopment.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, Gem, Rocket, Lightbulb, Quote, Users } from 'lucide-react';
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
                        Build Your MVP
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
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our MVP Development Process</h2></div>
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
                <Gem className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Ready to Validate Your Idea?</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Let's discuss how we can build a Minimum Viable Product that tests your concept, gathers user feedback, and sets you up for success.
                </p>
                <button 
                    onClick={() => setIsContactPopupOpen(true)}
                    className="mt-8 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                    Get a Free MVP Consultation
                </button>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const MvpDevelopment = () => {
    // --- MVP ডেভেলপমেন্টের জন্য কাস্টমাইজড ডেটা ---
    const mvpData = {
        hero: {
            title: "MVP Development Services",
            description: "Turn your innovative idea into a functional product, fast. Our MVP development service helps you validate your concept, gather user feedback, and launch to the market with minimum risk and investment.",
            image: "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyFeatures: {
            title: "Our Approach to MVP Development",
            subtitle: "We focus on a lean, agile process to deliver value quickly.",
            features: [
                { icon: <Lightbulb size={28} />, title: 'Idea Validation', description: 'We help you test your core business idea with a real product in the hands of actual users.' },
                { icon: <Gem size={28} />, title: 'Core Feature Focus', description: 'We identify and build the essential features that solve a key problem for your target audience.' },
                { icon: <Rocket size={28} />, title: 'Speed to Market', description: 'Our agile process ensures rapid development cycles, allowing you to launch and learn in weeks, not months.' },
                { icon: <Users size={28} />, title: 'User Feedback Loop', description: 'An MVP is the perfect tool to gather crucial user feedback to guide future development.' },
                { icon: <CheckCircle size={28} />, title: 'Cost-Effective', description: 'Avoid overspending on unnecessary features by building only what you need to prove your concept.' },
                { icon: <Users size={28} />, title: 'Investor-Ready', description: 'A successful MVP can be a powerful tool to attract and secure investment for your startup.' },
            ]
        },
        process: {
            steps: [
                { title: 'Discovery & Strategy', description: 'We define the core problem, identify the target audience, and map out the essential features.' },
                { title: 'Prototyping & Design', description: 'Creating a simple, intuitive design and prototype that focuses on the core user journey.' },
                { title: 'Agile Development Sprints', description: 'Building the core features in short, iterative cycles for maximum flexibility and speed.' },
                { title: 'Testing & QA', description: 'Ensuring the core functionalities are stable, secure, and ready for launch.' },
                { title: 'Launch & Learn', description: 'Deploying the MVP to the market and setting up tools to gather critical user data and feedback.' },
                { title: 'Iterate & Scale', description: 'Using the insights gathered to plan the next phase of development and scale the product.' },
            ]
        },
        testimonial: {
            quote: "Tecnigo Team's MVP service was a game-changer for our startup. They helped us validate our idea quickly and efficiently, which was crucial for securing our first round of funding. Highly recommended!",
            name: "Maria Garcia",
            role: "CEO, Innovate Solutions",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    };

    return (
        <div>
            <ServiceHero {...mvpData.hero} />
            <KeyFeatures {...mvpData.keyFeatures} />
            <OurProcess {...mvpData.process} />
            <Testimonial {...mvpData.testimonial} />
            <CtaSection />
        </div>
    );
};

export default MvpDevelopment;