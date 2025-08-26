// src/pages/MvpServicePage.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Lightbulb, Rocket, Clock, CheckCircle, Quote, ArrowRight } from 'lucide-react';

// --- Hero Section ---
const MvpServiceHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Dedicated <span className="text-blue-600">MVP Service</span> to Launch Your Idea Faster
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    Validate your business idea with a high-quality Minimum Viable Product. Our dedicated MVP service is designed to help you test the market, gather user feedback, and secure investment without overspending.
                </p>
                <NavLink 
                    to="/contact"
                    className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
                >
                    Build Your MVP Now
                </NavLink>
            </div>
            <div className="flex justify-center">
                <img 
                    src="https://i.ibb.co/L5Bw0zV/mvp-hero.png" 
                    alt="MVP Service Launch" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- Core Focus Section ---
const CoreFocus = () => {
    const focuses = [
        { icon: <Lightbulb size={32} />, title: 'Core Functionality First', description: 'We identify and build the essential features that solve a primary problem for your target users, avoiding unnecessary complexity.' },
        { icon: <Clock size={32} />, title: 'Speed to Market', description: 'Our agile process ensures rapid development cycles, allowing you to launch your MVP and start learning from real users in weeks, not months.' },
        { icon: <Rocket size={32} />, title: 'Scalable Foundation', description: 'We build your MVP on a solid technical foundation, making it easy to scale and add more features as your business grows.' },
    ];
    return(
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Focus for Your MVP Success</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {focuses.map((item, index) => (
                        <div key={index} className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200/80">
                            <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-5">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Process Section ---
const MvpProcess = () => {
    const steps = [ "Discovery & Strategy", "Prototyping & UX/UI Design", "Core Feature Development", "Testing & Quality Assurance", "Launch & Feedback Loop" ];
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Streamlined MVP Development Process</h2>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow-sm">
                            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                            <h3 className="ml-4 text-xl font-semibold text-gray-700">{index + 1}. {step}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Testimonials Section (পুনরায় ব্যবহার করা হচ্ছে) ---
const TestimonialsSection = () => {
     const testimonials = [
        { quote: "ZAAG's MVP service was a game-changer for our startup. They helped us validate our idea quickly and efficiently, saving us valuable time and resources.", name: "Alex Johnson", role: "Founder, TechLaunch", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { quote: "The team's agile approach was perfect for our project. They delivered a high-quality MVP that allowed us to secure our first round of funding. Highly recommended!", name: "Maria Garcia", role: "CEO, Innovate Solutions", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { quote: "Working with ZAAG was a fantastic experience. They understood our business goals and built an MVP that perfectly matched our vision and user needs.", name: "Chen Wei", role: "Co-Founder, MarketFit", avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ];
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What Our Clients Say About Our MVP Service</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                         <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col text-center">
                            <Quote className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                            <blockquote className="text-gray-700 italic leading-relaxed flex-grow">"{testimonial.quote}"</blockquote>
                            <div className="mt-6">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-3 shadow-md" />
                                <cite className="font-bold text-gray-800 not-italic block">{testimonial.name}</cite>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const MvpServicePage = () => {
    return (
        <div>
            <MvpServiceHero />
            <CoreFocus />
            <MvpProcess />
            <TestimonialsSection />
        </div>
    );
};

export default MvpServicePage;