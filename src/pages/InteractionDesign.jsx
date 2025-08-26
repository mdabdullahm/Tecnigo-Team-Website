// src/pages/InteractionDesign.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Users, FileText, Bot, User, Scaling, FileSearch, Quote, ArrowRight, Square, Scan, TestTube, Paintbrush } from 'lucide-react';

// --- Hero Section (আগের মতোই) ---
const InteractionDesignHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Crafting Engaging Experiences through <span className="text-blue-600">Interaction Design</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    We specialize in Interaction Design, creating captivating digital experiences. Our skilled designers combine aesthetics with functionality to design seamless interactions that engage and delight users. Let us transform your digital products into extraordinary experiences.
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
                    src="https://i.ibb.co/3m4G04f/interaction-design-hero.png" 
                    alt="Interaction Design Process" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- Key Services Section (আগের মতোই) ---
const KeyServices = () => {
    const services = [
        { icon: <Sparkles size={28} />, title: 'User Experience Design', description: 'We create intuitive and user-centered experiences through thorough research, wireframing, and prototyping.' },
        { icon: <Sparkles size={28} />, title: 'User Interface Design', description: 'Our designers craft visually appealing interfaces that enhance the user experience.' },
        { icon: <Sparkles size={28} />, title: 'Interaction Design', description: 'We focus on designing meaningful and interactive experiences for seamless user interaction.' },
        { icon: <Sparkles size={28} />, title: 'Information Architecture', description: 'We optimize all the navigation and find ability through effective information organization.' },
        { icon: <Sparkles size={28} />, title: 'Usability Testing', description: 'We conduct rigorous testing to evaluate design effectiveness and gather valuable user feedback.' },
        { icon: <Sparkles size={28} />, title: 'Design System Development', description: 'We establish consistent visual and interaction patterns for a cohesive user experience.' },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">KEY SERVICES</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Transforming Digital Experiences with Expert Interaction Design Services
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                         <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-center">
                            <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-5">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- UX Process Section (আগের মতোই) ---
const ProcessStep = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1.5">{icon}</div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);

const UxProcess = () => {
    const steps = [
        { icon: <Users className="w-8 h-8 text-blue-600" />, title: 'User Research', description: 'To deliver the best experience, we thoroughly research and evaluate your product and its users to create a strategic foundation.' },
        { icon: <FileText className="w-8 h-8 text-blue-600" />, title: 'Storyboard', description: 'You will get a storyboard that will let you understand and predict the user experience visually and explore design possibilities.' },
        { icon: <Square className="w-8 h-8 text-blue-600" />, title: 'Wireframing', description: 'This will create a layout of the design demonstrating what interface elements will exist on key parts of the product.' },
        { icon: <Scan className="w-8 h-8 text-blue-600" />, title: 'Prototyping', description: 'Prototype is a simple experimental model of the product you planned. We can create high or low fidelity prototypes.' },
        { icon: <TestTube className="w-8 h-8 text-blue-600" />, title: 'Usability Testing', description: 'Usability testing is done before the final design to ensure that the final design is user friendly.' },
        { icon: <Paintbrush className="w-8 h-8 text-blue-600" />, title: 'UI Design', description: 'Once we figure out what makes the design easy and effective for the target users, we carry on with the final interface design.' },
    ];
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our UX Process</h2>
                    <p className="mt-4 text-gray-600">Our process is proven to be successful in the field of brand building. Partners work with us for the expertise and reliability we have shown.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {steps.map((step, index) => <ProcessStep key={index} {...step} />)}
                </div>
            </div>
        </section>
    );
};

// --- Visual Design Section (আগের মতোই) ---
const VisualDesignShowcase = () => {
    const images = [ "https://i.ibb.co/dK5kRkG/visual-1.png", "https://i.ibb.co/hZ2vVf5/visual-2.png", "https://i.ibb.co/b3S0S1V/visual-3.png", "https://i.ibb.co/vBWnCZY/visual-4.png" ];
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Visual Design</h2></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">{images.map((img, index) => (<div key={index} className="rounded-2xl shadow-lg overflow-hidden border"><img src={img} alt={`Visual Design Example ${index + 1}`} className="w-full h-auto object-cover" /></div>))}</div>
                <div className="max-w-4xl mx-auto mt-12 text-center text-gray-600 leading-relaxed">
                    <p>The visual design process is all about the identity of your brand. We go through a number of various processes to ensure your brand visually has all the design elements you need for it to communicate - logo, typography, color palette, and more.</p>
                </div>
            </div>
        </section>
    );
};


// --- Why Choose Us Section (আগের মতোই) ---
const ReasonCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="text-blue-600 mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const WhyChooseUs = () => {
    const reasons = [
        { icon: <User size={32} />, title: 'Expertise and Experience', description: 'We prioritize understanding and empathizing with your customers to create services that truly meet their needs and exceed their expectations.' },
        { icon: <Scaling size={32} />, title: 'Collaborative Approach', description: 'We believe in close collaboration with our clients, involving them in every stage of the design process.' },
        { icon: <Users size={32} />, title: 'User-Centric Design', description: 'We prioritize understanding and empathizing with your customers to create services that truly meet their needs.' },
        { icon: <FileSearch size={32} />, title: 'Attention to Detail', description: 'We follow an iterative and agile process, allowing for continuous improvement and refinement to deliver the best possible outcomes.' },
    ];
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose Our Interaction Design Services?</h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                    <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Design team sketching wireframes" className="mt-8 rounded-lg shadow-md w-full" />
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => <ReasonCard key={index} {...reason} />)}
                </div>
            </div>
        </section>
    );
};

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
        { image: 'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Interaction Design', title: '5 Principles of Great Interaction Design You Need to Know', link: '#' },
        { image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'UI/UX Trends', title: 'Microinteractions: The Secret to a Delightful User Experience', link: '#' },
        { image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Design Systems', title: 'Building a Cohesive Brand with a Solid Design System', link: '#' },
    ];
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Stories</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{stories.map((story, index) => <StoryCard key={index} {...story} />)}</div>
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
        { quote: "ZAAG's interaction design team is exceptional. They created a seamless and intuitive user flow that has significantly improved our user engagement.", name: "Laura Evans", role: "Product Owner, FinTech Corp", avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { quote: "The attention to detail in their designs is incredible. Every animation and transition feels purposeful and enhances the overall experience.", name: "Tom Baker", role: "Founder, SaaSify", avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { quote: "Their collaborative approach made the entire process enjoyable. They listened to our feedback and delivered a design that truly represents our brand.", name: "Priya Sharma", role: "Marketing Head, E-Shop", avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ];
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}</div>
            </div>
        </section>
    );
};

// --- Main Page Component ---
const InteractionDesign = () => {
    return (
        <div>
            <InteractionDesignHero />
            <KeyServices />
            <UxProcess />
            <VisualDesignShowcase />
            <WhyChooseUs />
            <OurStories />          {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
            <TestimonialsSection /> {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
        </div>
    );
};

export default InteractionDesign;