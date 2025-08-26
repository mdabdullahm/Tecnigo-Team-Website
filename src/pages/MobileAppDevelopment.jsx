// src/pages/MobileAppDevelopment.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Apple, Bot, Smartphone, BrainCircuit, Wrench, Quote } from 'lucide-react';

// --- Hero Section (আগের মতোই) ---
const MobileAppHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Mobile App Development Services
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    At ZAAG, we specialize in creating cutting-edge mobile applications that engage users and drive business growth. Our team of skilled developers and designers is dedicated to delivering high-quality mobile solutions tailored to your specific needs.
                </p>
                <NavLink 
                    to="/contact"
                    className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                >
                    Get Started Now
                </NavLink>
            </div>
            <div className="flex justify-center">
                <img 
                    src="https://i.ibb.co/hZxtc7Y/mobile-app-hero.png" 
                    alt="Mobile App Development Illustration" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- Expertise Section (আগের মতোই) ---
const ExpertiseCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-center">
        <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const OurExpertise = () => {
    const expertiseAreas = [
        {
            icon: <Apple size={28} />,
            title: 'iOS App Development',
            description: 'We create powerful and intuitive iOS applications using the latest technologies, delivering exceptional user experiences.'
        },
        {
            icon: <Bot size={28} />, 
            title: 'Android App Development',
            description: 'Our skilled team crafts feature-rich and user-friendly Android applications for maximum success on the Google Play Store.'
        },
        {
            icon: <Smartphone size={28} />,
            title: 'Cross-Platform App Development',
            description: 'Reach a wider audience with our cross-platform app development solutions, saving time and resources without compromising performance.'
        },
        {
            icon: <BrainCircuit size={28} />,
            title: 'App UI/UX Design',
            description: 'Our creative designers deliver captivating app designs, focusing on user-centric principles for an intuitive and visually appealing interface.'
        },
        {
            icon: <Wrench size={28} />,
            title: 'App Maintenance & Support',
            description: 'We provide comprehensive app maintenance and support services to keep your app up-to-date, secure, and optimized.'
        },
    ];

    const topRowCount = Math.ceil(expertiseAreas.length / 2);
    const topRow = expertiseAreas.slice(0, topRowCount);
    const bottomRow = expertiseAreas.slice(topRowCount);
    
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">OUR EXPERTISE</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Transforming Ideas into Exceptional Mobile Apps
                    </h2>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topRow.map((area, index) => (
                            <ExpertiseCard key={index} {...area} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {bottomRow.map((area, index) => (
                            <ExpertiseCard key={index} {...area} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Benefits Section (আগের মতোই) ---
const BenefitItem = ({ title, description, image, reverse = false }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className={`flex justify-center ${reverse ? 'md:order-first' : ''}`}>
            <img src={image} alt={title} className="rounded-2xl shadow-lg max-w-sm w-full" />
        </div>
    </div>
);

const BenefitsSection = () => {
    const benefits = [
        {
            title: 'Expert Team',
            description: 'Our team consists of experienced and talented mobile app developers who are passionate about crafting exceptional apps.',
            image: 'https://i.ibb.co/L82hPjK/expert-team.png'
        },
        {
            title: 'Customized Solutions',
            description: 'We understand that each app is unique, and we tailor our development approach to meet your specific requirements.',
            image: 'https://i.ibb.co/r2pS03h/custom-solutions-app.png'
        },
        {
            title: 'Seamless User Experience',
            description: 'Our focus is on creating intuitive and user-friendly apps that provide a seamless and engaging experience to your target audience.',
            image: 'https://i.ibb.co/D8Gf911/seamless-ux.png'
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">BENEFITS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Unleash the Power of Mobile Innovation with ZAAG
                    </h2>
                </div>
                <div className="space-y-20">
                    {benefits.map((benefit, index) => (
                        <BenefitItem key={index} {...benefit} reverse={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Frameworks Section (আগের মতোই) ---
const FrameworksSection = () => {
    const frameworks = [
        { name: 'Apple', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
        { name: 'Object C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg' },
        { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
        { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Xamarin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ];
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Frameworks we work with
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {frameworks.map((framework) => (
                         <div key={framework.name} className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <img src={framework.logo} alt={`${framework.name} logo`} className="h-14 w-14 object-contain" />
                            <span className="font-semibold text-gray-700">{framework.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- নতুন: Hiring CTA Section ---
const HiringCta = () => (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl p-10 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200/80">
                <div className="md:order-2 flex justify-center">
                    <img src="https://i.ibb.co/dGbf8rN/hiring-cta-app.png" alt="Hire skilled mobile developers from ZAAG Systems" className="max-w-sm w-full" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Hire Skilled Mobile Developers
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Hire the best mobile developers from ZAAG Systems Limited who are creative and skilled at creating your custom App. Build stunning apps for your business!
                    </p>
                    <NavLink
                        to="/contact"
                        className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
                    >
                        Hire Resource Now
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

// --- নতুন: Testimonials Section ---
const TestimonialCard = ({ quote, name, role, avatar }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col text-center">
        <Quote className="w-12 h-12 text-blue-200 mx-auto mb-4" />
        <blockquote className="text-gray-700 italic leading-relaxed flex-grow">
            "{quote}"
        </blockquote>
        <div className="mt-6">
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full mx-auto mb-3 shadow-md" />
            <cite className="font-bold text-gray-800 not-italic block">{name}</cite>
            <span className="text-sm text-gray-500">{role}</span>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "The mobile app ZAAG developed for us exceeded all expectations. It's intuitive, fast, and our users love it. Their team is a true partner in innovation.",
            name: "Jessica Chen",
            role: "Product Manager, Innovate Inc.",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            quote: "From concept to launch, the ZAAG team was incredible. They delivered our cross-platform app on time and on budget, which was crucial for our startup's success.",
            name: "David Lee",
            role: "Founder, GoVenture",
            avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            quote: "Their expertise in iOS development is top-notch. They understood our vision perfectly and created an app that is not only beautiful but also incredibly functional.",
            name: "Sarah Kim",
            role: "Marketing Director, StyleHub",
            avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        What Our Clients Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const MobileAppDevelopment = () => {
    return (
        <div>
            <MobileAppHero />
            <OurExpertise />
            <BenefitsSection />
            <FrameworksSection />
            <HiringCta />         {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
            <TestimonialsSection /> {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
        </div>
    );
};

export default MobileAppDevelopment;