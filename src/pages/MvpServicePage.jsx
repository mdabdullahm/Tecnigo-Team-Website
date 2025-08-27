// src/pages/MvpServicePage.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle, Gem, Rocket, Lightbulb, Quote, Users, Clock } from 'lucide-react';
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
                        Launch Your MVP
                    </button>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={image} alt={title} className="w-full max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

// KeyBenefits (KeyFeatures এর পরিবর্তিত সংস্করণ)
const BenefitCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);
const KeyBenefits = ({ title, subtitle, benefits = [] }) => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
                <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => <BenefitCard key={index} {...benefit} />)}
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
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Rapid MVP Development Process</h2></div>
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
                <Rocket className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Ready to Launch Your Idea?</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Don't let your big idea wait. Let's build a powerful MVP to test your vision and start your journey to success.
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
const MvpServicePage = () => {
    // --- ডেডিকেটেড MVP সার্ভিসের জন্য কাস্টমাইজড ডেটা ---
    const mvpServiceData = {
        hero: {
            title: "Dedicated MVP Service",
            description: "Launch your startup idea faster and smarter with our dedicated MVP (Minimum Viable Product) service. We help you build a focused, high-quality product to validate your market and attract investors.",
            image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyBenefits: {
            title: "Benefits of Our Dedicated MVP Service",
            subtitle: "We turn your vision into a market-ready product with a strategic approach.",
            benefits: [
                { icon: <Clock size={28} />, title: 'Rapid Time-to-Market', description: 'Our streamlined process allows you to launch your product in just a few weeks.' },
                { icon: <Gem size={28} />, title: 'Core Functionality Focus', description: 'We concentrate on the essential features that deliver immediate value to your users.' },
                { icon: <Lightbulb size={28} />, title: 'Market Validation', description: 'Test your business concept with real users and gather valuable feedback for future iterations.' },
                { icon: <Users size={28} />, title: 'Investor Attraction', description: 'A functional MVP is a powerful asset for demonstrating your vision and securing funding.' },
                { icon: <CheckCircle size={28} />, title: 'Risk Reduction', description: 'Minimize financial risk by investing in a core product before scaling to a full-featured solution.' },
                { icon: <Rocket size={28} />, title: 'Scalable Foundation', description: 'We build your MVP on a solid technical architecture that is ready to scale as your user base grows.' },
            ]
        },
        process: {
            steps: [
                { title: 'Workshop & Strategy', description: 'We start with an intensive workshop to define your MVP\'s scope, goals, and core features.' },
                { title: 'UI/UX Prototyping', description: 'Creating a clickable prototype to visualize the user experience and finalize the design.' },
                { title: 'Agile Development', description: 'Building the product in short, focused sprints, with regular demos and feedback sessions.' },
                { title: 'Quality Assurance', description: 'Ensuring your MVP is stable, bug-free, and ready for your first users.' },
                { title: 'Launch & Feedback Analysis', description: 'Deploying the product and analyzing user behavior to guide your next steps.' },
                { title: 'Product Roadmap Planning', description: 'Using the insights from the MVP to create a strategic roadmap for future development.' },
            ]
        },
        testimonial: {
            quote: "The dedicated MVP service from Tecnigo Team was exactly what our startup needed. They were fast, strategic, and delivered a high-quality product that helped us secure our seed funding. I can\'t recommend them enough.",
            name: "Alex Johnson",
            role: "Founder, TechLaunch",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    };

    return (
        <div>
            <ServiceHero {...mvpServiceData.hero} />
            <KeyBenefits {...mvpServiceData.keyBenefits} />
            <OurProcess {...mvpServiceData.process} />
            <Testimonial {...mvpServiceData.testimonial} />
            <CtaSection />
        </div>
    );
};

export default MvpServicePage;