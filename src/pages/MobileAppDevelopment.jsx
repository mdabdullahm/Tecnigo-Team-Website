// src/pages/MobileAppDevelopment.jsx

import React, { useContext } from 'react';
import { CheckCircle, Smartphone, Sliders, Shield, Cloud, Quote, Users, Apple, Bot } from 'lucide-react';
import { AppContext } from '../AppContext';

// --- পুনঃব্যবহারযোগ্য কম্পোনেন্টগুলো (Web Development পেজ থেকে নেওয়া) ---

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
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our App Development Lifecycle</h2></div>
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Mobile Technologies We Use</h2>
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
                <h2 className="text-3xl font-extrabold text-gray-900">Hire Dedicated App Developers</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Scale your team with our expert mobile app developers. We provide top-tier talent to help you build and launch your app successfully.
                </p>
                <button onClick={() => setIsContactPopupOpen(true)} className="mt-8 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105">
                    Inquire Now
                </button>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const MobileAppDevelopment = () => {
    // --- মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য কাস্টমাইজড ডেটা ---
    const mobileAppData = {
        hero: {
            title: "Mobile App Development Services",
            description: "We design and develop custom mobile applications for iOS and Android that delight users and drive engagement. Let us turn your idea into a successful mobile app.",
            image: "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyFeatures: {
            title: "Our Mobile App Development Services",
            subtitle: "From strategy to launch, we provide comprehensive app development solutions.",
            features: [
                { icon: <Apple size={28} />, title: 'iOS App Development', description: 'Creating seamless and high-performance applications for the Apple ecosystem using Swift and SwiftUI.' },
                { icon: <Bot size={28} />, title: 'Android App Development', description: 'Building robust and scalable apps for the vast Android market with Kotlin and Java.' },
                { icon: <Smartphone size={28} />, title: 'Cross-Platform Development', description: 'Efficiently build for both iOS and Android from a single codebase with Flutter and React Native.' },
                { icon: <Sliders size={28} />, title: 'UI/UX Design for Mobile', description: 'Designing intuitive and beautiful interfaces that provide an exceptional user experience on any device.' },
                { icon: <Shield size={28} />, title: 'App Maintenance & Security', description: 'Ensuring your application remains up-to-date, secure, and optimized for performance post-launch.' },
                { icon: <Cloud size={28} />, title: 'Backend & API Integration', description: 'Developing powerful backends and integrating third-party APIs to extend your app\'s functionality.' },
            ]
        },
        process: {
            steps: [
                { title: 'Strategy & Consultation', description: 'We align with your vision and define the app’s goals, audience, and core features.' },
                { title: 'Prototyping & Design', description: 'We create wireframes and interactive prototypes for a user-validated design.' },
                { title: 'Development', description: 'Our developers write clean, efficient code using agile methodologies for faster delivery.' },
                { title: 'Quality Assurance', description: 'We perform extensive testing to ensure your app is stable, secure, and bug-free.' },
                { title: 'Launch', description: 'We manage the entire submission process for the Apple App Store and Google Play Store.' },
                { title: 'Post-Launch Support', description: 'We offer ongoing maintenance and support to ensure your app’s continued success.' },
            ]
        },
        techStack: {
            technologies: [
                { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
                { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
                { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            ]
        },
        testimonial: {
            quote: "The mobile app Tecnigo Team developed for us has been a massive success. It's intuitive, fast, and our user engagement has skyrocketed. Their team is a true partner in innovation.",
            name: "Jane Smith",
            role: "Product Manager, MobileFirst Corp.",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    };

    return (
        <div>
            <ServiceHero {...mobileAppData.hero} />
            <KeyFeatures {...mobileAppData.keyFeatures} />
            <OurProcess {...mobileAppData.process} />
            <TechStack {...mobileAppData.techStack} />
            <Testimonial {...mobileAppData.testimonial} />
            <HiringCta />
        </div>
    );
};

export default MobileAppDevelopment;