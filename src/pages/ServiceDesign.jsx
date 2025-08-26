// src/pages/ServiceDesign.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Scaling, Workflow, PieChart, Recycle, ArrowRight, Quote } from 'lucide-react';

// --- Hero Section (আগের মতোই) ---
const ServiceDesignHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Transforming User Experiences through <span className="text-blue-600">Service Design</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    Unlock the full potential of your business by leveraging the power of Service Design. Our expert team combines creativity, empathy, and strategic thinking to create seamless and meaningful experiences for your customers.
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
                    src="https://i.ibb.co/N1W7MpH/service-design-hero.png" 
                    alt="Service Design Process" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- "What is Service Design?" Section (আগের মতোই) ---
const WhatIsServiceDesign = () => (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What is Service Design?</h2>
                <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-6"></div>
                <img src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team mapping a user journey" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div className="bg-blue-600 text-white p-10 rounded-2xl">
                <p className="text-lg leading-relaxed">
                    Service Design is a comprehensive and customer-centric approach that encompasses the entire service experience. It goes beyond just the visual aspects and delves into understanding customer needs, mapping out touchpoints, and aligning business processes.
                    <br/><br/>
                    By taking a holistic view, Service Design helps create exceptional and impactful services that leave a lasting impression on customers. It's all about designing experiences that resonate and meet the needs of users, ensuring their satisfaction and loyalty.
                </p>
            </div>
        </div>
    </section>
);


// --- Our Approach Section (আগের মতোই) ---
const OurApproach = () => {
    const steps = [
        { number: '1', title: 'Journey Mapping', description: 'Uncover key customer touchpoints, pain points, and opportunities through visualizing the end-to-end user journey. Gain valuable insights to optimize and enhance the customer experience.' },
        { number: '2', title: 'Service Blueprints', description: 'Create detailed visualizations of your service ecosystem, mapping out the front-stage and back-stage processes to identify areas for improvement and innovation.' },
        { number: '3', title: 'User-Centered Design', description: 'Place your customers at the heart of your service design process. Through research, empathy, and user testing, we create solutions that truly meet their needs and expectations.' },
        { number: '4', title: 'Holistic Perspective', description: 'We take a holistic view of your service, considering all touchpoints, channels, and stakeholders to create a cohesive and seamless experience.' },
        { number: '5', title: 'Prototyping and Testing', description: 'We create interactive prototypes and conduct user testing to validate design concepts, gather feedback, and iterate on solutions before implementation.' },
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Exceptional Service Design for Seamless User Experiences
                    </h2>
                    <p className="mt-4 text-gray-600">
                        We specialize in creating exceptional service design solutions that deliver seamless user experiences. Through customer insights, research, and collaborative ideation, we bring your services to life.
                    </p>
                </div>
                <div className="space-y-10">
                    {steps.map(step => (
                        <div key={step.number} className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold text-gray-800">{`${step.number}. ${step.title}`}</h3>
                            <p className="mt-3 text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Why Choose Us Section (আগের মতোই) ---
const ReasonCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="text-blue-600 mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const WhyChooseUs = () => {
    const reasons = [
        { icon: <Scaling size={32} />, title: 'Human-Centered Approach', description: 'We prioritize understanding and empathizing with your customers to create services that truly meet their needs and exceed their expectations.' },
        { icon: <Workflow size={32} />, title: 'Collaborative Process', description: 'We believe in collaboration and actively involve stakeholders and users throughout the Service Design journey.' },
        { icon: <PieChart size={32} />, title: 'Data-Driven Insights', description: 'Our Service Design approach is grounded in research and data. We leverage user insights and market trends to inform our design decisions.' },
        { icon: <Recycle size={32} />, title: 'Iterative and Agile', description: 'We follow an iterative and agile process, allowing for continuous improvement and refinement. We embrace feedback to deliver the best possible outcomes.' },
    ];
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose Our Service Design Services?</h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                    <img src="https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaborating" className="mt-8 rounded-lg shadow-md w-full" />
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- নতুন: Our Stories Section ---
const StoryCard = ({ image, category, title, link }) => (
    <a href={link} className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="overflow-hidden">
            <img src={image} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6">
            <p className="text-sm text-blue-600 font-semibold mb-2">{category}</p>
            <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">{title}</h3>
        </div>
    </a>
);

const OurStories = () => {
    const stories = [
        { image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Service Design', title: 'The Art of Customer Journey Mapping: A Practical Guide', link: '#' },
        { image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'User Experience', title: 'How Service Blueprints Can Revolutionize Your Business', link: '#' },
        { image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'Case Study', title: 'Improving Customer Satisfaction by 40% through Service Design', link: '#' },
    ];
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Stories</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => <StoryCard key={index} {...story} /> )}
                </div>
                 <div className="text-center mt-12">
                    <NavLink to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                        View All Posts <ArrowRight size={16} />
                    </NavLink>
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
        { quote: "ZAAG's service design approach completely reshaped how we interact with our customers. The results were immediate and impactful.", name: "Emily Carter", role: "Head of Customer Experience, RetailCo", avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { quote: "The journey mapping workshop was an eye-opener. We identified critical pain points we never knew existed. Their team is truly expert in this field.", name: "Michael Rodriguez", role: "COO, HealthFirst", avatar: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { quote: "Their data-driven insights and collaborative process made us feel like a true partner. We now have a clear roadmap for improving our services.", name: "Samantha Lee", role: "Founder, EduTech Start-up", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ];
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">TESTIMONIALS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} /> )}
                </div>
            </div>
        </section>
    );
};


// --- Main Page Component ---
const ServiceDesign = () => {
    return (
        <div>
            <ServiceDesignHero />
            <WhatIsServiceDesign />
            <OurApproach />
            <WhyChooseUs />
            <OurStories />          {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
            <TestimonialsSection /> {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
        </div>
    );
};

export default ServiceDesign;