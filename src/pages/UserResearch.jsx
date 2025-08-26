// src/pages/UserResearch.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Quote, ArrowRight } from 'lucide-react';

// --- Hero Section (আগের মতোই) ---
const UserResearchHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Unlock User Insights with Comprehensive <span className="text-blue-600">User Research</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    Our User Research service provides valuable insights for exceptional user experiences. With qualitative and quantitative research, we uncover deep user insights to drive user-centered design.
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
                    src="https://i.ibb.co/L5QyLdb/user-research-hero.png" 
                    alt="User Research Process" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- Research Methods Section (আগের মতোই) ---
const ResearchMethod = ({ title, subtitle, points, image, reverse = false }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className={reverse ? 'md:order-2' : ''}>
            <span className="text-blue-600 font-semibold uppercase tracking-wider">{title}</span>
            <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{subtitle}</h3>
            <ul className="space-y-3">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="ml-2 text-gray-700">{point}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex justify-center">
            <img src={image} alt={title} className="rounded-2xl shadow-lg max-w-md w-full" />
        </div>
    </div>
);

const ResearchMethodsSection = () => {
    const methods = [
        { title: 'Qualitative Research', subtitle: 'Discover the Why Behind User Behavior', points: ['Conduct in-depth interviews and user observations', 'Uncover user motivations, needs, and pain points', 'Gain rich qualitative data for empathy-driven design'], image: 'https://i.ibb.co/3s88Vf3/qualitative.png' },
        { title: 'Quantitative Research', subtitle: 'Uncover User Patterns and Trends', points: ['Perform surveys and gather quantitative data', 'Analyze user behavior and preferences at scale', 'Identify trends and patterns for evidence-based design decisions'], image: 'https://i.ibb.co/D88GScj/quantitative.png' },
        { title: 'Usability Testing', subtitle: 'Validate and Optimize Your Designs', points: ['Conduct usability tests to evaluate user experience', 'Identify usability issues and gather user feedback', 'Iteratively improve your designs for maximum impact'], image: 'https://i.ibb.co/hK7Jv7k/ui-ux-design.png' },
        { title: 'User Journey Mapping', subtitle: 'Visualize & Optimize the User Experience', points: ['Map out the end-to-end user journey to identify touchpoints', 'Uncover pain points and opportunities for improvement', 'Align your team around a shared understanding of the user experience'], image: 'https://i.ibb.co/hXg5mPq/journey-map.png' }
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Illuminating Insights for Exceptional Experiences
                    </h2>
                </div>
                <div className="space-y-20">
                    {methods.map((method, index) => (
                        <ResearchMethod key={index} {...method} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- CTA Section (আগের মতোই) ---
const CtaSection = () => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-10 rounded-2xl shadow-lg border">
                <div>
                    <img src="https://i.ibb.co/Y0H51M8/research-cta.png" alt="Ready to unlock user research power" className="w-full max-w-sm mx-auto" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">Ready to unlock the power of user research?</h2>
                    <p className="mt-4 text-gray-600">Contact us today to schedule a consultation and learn how our User Research service can elevate your design process.</p>
                    <NavLink to="/contact" className="mt-6 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition">
                        Contact Us Now
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

// --- নতুন: Our Stories Section ---
const StoryCard = ({ image, category, title, link }) => (
    <a href={link} className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="overflow-hidden"><img src={image} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" /></div>
        <div className="p-6">
            <p className="text-sm text-blue-600 font-semibold mb-2">{category}</p>
            <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">{title}</h3>
        </div>
    </a>
);

const OurStories = () => {
    const stories = [
        { image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'User Research', title: 'A Guide to Conducting Effective User Interviews', link: '#' },
        { image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Data Analysis', title: 'Turning Quantitative Data into Actionable Design Insights', link: '#' },
        { image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Case Study', title: 'How User Research Doubled Our Client\'s Conversion Rate', link: '#' },
    ];
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Stories</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{stories.map((story, index) => <StoryCard key={index} {...story} /> )}</div>
                <div className="text-center mt-12">
                    <NavLink to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">View All Posts <ArrowRight size={16} /></NavLink>
                </div>
            </div>
        </section>
    );
};

// --- নতুন: Testimonials Section ---
const TestimonialCard = ({ quote, name, role, avatar }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col text-center">
        <Quote className="w-12 h-12 text-blue-200 mx-auto mb-4" />
        <blockquote className="text-gray-700 italic leading-relaxed flex-grow">"{quote}"</blockquote>
        <div className="mt-6">
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full mx-auto mb-3 shadow-md" />
            <cite className="font-bold text-gray-800 not-italic block">{name}</cite>
            <span className="text-sm text-gray-500">{role}</span>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        { quote: "The user research conducted by ZAAG was incredibly thorough. The insights we gained were instrumental in shaping our product strategy.", name: "David Chen", role: "Head of Product, InnovateX", avatar: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { quote: "Their usability testing identified critical issues we had overlooked. Thanks to their detailed feedback, we were able to launch a much more user-friendly app.", name: "Sophia Nguyen", role: "UX Lead, ConnectApp", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { quote: "We were impressed by their ability to translate raw data into clear, actionable recommendations. A truly valuable partner for any team focused on user-centricity.", name: "Ben Carter", role: "Marketing Director, Healthify", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ];
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} /> )}</div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const UserResearch = () => {
    return (
        <div>
            <UserResearchHero />
            <ResearchMethodsSection />
            <CtaSection />
            <OurStories />          {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
            <TestimonialsSection /> {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
        </div>
    );
};

export default UserResearch;