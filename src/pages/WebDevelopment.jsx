// src/pages/WebDevelopment.jsx

import React, { useContext } from 'react';
// NavLink আর প্রয়োজন নেই কারণ আমরা বাটন ব্যবহার করছি
import { CheckCircle, Code, Server, Database, Cloud, Quote, Users, ShoppingCart } from 'lucide-react';
import { AppContext } from '../AppContext';

// --- Hero Section ---
const ServiceHero = ({ title, description, image }) => {
    // AppContext থেকে পপ-আপ খোলার ফাংশনটি নিন
    const { setIsContactPopupOpen } = useContext(AppContext);

    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20 text-white overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                        {description}
                    </p>
                    {/* NavLink কে button দিয়ে প্রতিস্থাপন করা হয়েছে */}
                    <button 
                        onClick={() => setIsContactPopupOpen(true)}
                        className="mt-8 inline-block bg-red-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
                    >
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


// --- Key Features Section (অপরিবর্তিত) ---
const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);
const KeyFeatures = ({ title, subtitle, features = [] }) => (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                    {title}
                </h2>
                <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
            </div>
        </div>
    </section>
);

// --- Our Process Section (অপরিবর্তিত) ---
const ProcessStep = ({ number, title, description }) => (
    <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
            {number}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    </div>
);
const OurProcess = ({ steps = [] }) => (
    <section className="bg-white py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Development Process</h2></div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {steps.map((step, index) => <ProcessStep key={index} number={index + 1} {...step} />)}
            </div>
        </div>
    </section>
);

// --- Tech Stack Section (অপরিবর্তিত) ---
const TechStack = ({ technologies = [] }) => (
    <section className="bg-gradient-to-br from-gray-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Technologies We Use</h2>
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

// --- Testimonial Section (অপরিবর্তিত) ---
const Testimonial = ({ quote, name, role, avatar }) => (
    <section className="bg-white py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <Quote className="w-16 h-16 text-red-100 mx-auto mb-6" fill="currentColor"/>
            <blockquote className="text-2xl font-medium text-gray-700 italic leading-relaxed">
                "{quote}"
            </blockquote>
            <div className="mt-8">
                <img src={avatar} alt={name} className="w-20 h-20 rounded-full mx-auto mb-3 shadow-md" />
                <cite className="font-bold text-gray-800 not-italic block">{name}</cite>
                <span className="text-sm text-gray-500">{role}</span>
            </div>
        </div>
    </section>
);

// --- Hiring CTA Section (অপরিবর্তিত, কারণ এটি আগে থেকেই পপ-আপ ব্যবহার করছিল) ---
const HiringCta = () => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    return(
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <Users className="w-16 h-16 text-red-500 mx-auto mb-6"/>
                <h2 className="text-3xl font-extrabold text-gray-900">Hire Dedicated Web Developers</h2>
                <p className="mt-4 text-gray-600 text-lg">
                    Need to augment your team? Hire our expert web developers to accelerate your projects and achieve your business goals faster.
                </p>
                <button 
                    onClick={() => setIsContactPopupOpen(true)}
                    className="mt-8 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                >
                    Inquire Now
                </button>
            </div>
        </section>
    );
};


// --- Main Page Component (অপরিবর্তিত) ---
const WebDevelopment = () => {
    // ... (webDevData অবজেক্ট অপরিবর্তিত) ...
    const webDevData = {
        hero: {
            title: "Custom Web Development Services",
            description: "We build high-performing, scalable, and secure web applications tailored to your business needs. From stunning marketing sites to complex enterprise platforms, we bring your vision to life.",
            image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        keyFeatures: {
            title: "Our Web Development Expertise",
            subtitle: "We offer end-to-end web solutions to empower your digital presence.",
            features: [
                { icon: <Code size={28} />, title: 'Frontend Development', description: 'Engaging and responsive user interfaces built with modern frameworks like React, Vue, and Angular.' },
                { icon: <Server size={28} />, title: 'Backend Development', description: 'Robust and scalable server-side applications using Node.js, Python, PHP, and more.' },
                { icon: <Database size={28} />, title: 'Database Architecture', description: 'Efficient and secure database solutions, from SQL to NoSQL, designed for performance.' },
                { icon: <ShoppingCart size={28} />, title: 'E-commerce Solutions', description: 'Custom online stores with seamless payment gateway integrations and inventory management.' },
                { icon: <Cloud size={28} />, title: 'Cloud & DevOps', description: 'Reliable deployment and infrastructure management on platforms like AWS, Azure, and Google Cloud.' },
                { icon: <CheckCircle size={28} />, title: 'CMS Development', description: 'Easy-to-manage content systems using platforms like WordPress, Strapi, or custom solutions.' },
            ]
        },
        process: {
            steps: [
                { title: 'Discovery & Planning', description: 'We start by understanding your goals to create a detailed project roadmap.' },
                { title: 'UI/UX Design', description: 'Crafting intuitive and visually appealing designs that your users will love.' },
                { title: 'Development', description: 'Bringing designs to life with clean code and agile methodologies.' },
                { title: 'Testing & QA', description: 'Rigorous testing to ensure a bug-free and high-performance application.' },
                { title: 'Deployment', description: 'A smooth launch process to get your website live.' },
                { title: 'Support & Maintenance', description: 'Ongoing support to keep your site running smoothly and securely.' },
            ]
        },
        techStack: {
            technologies: [
                { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
                { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            ]
        },
        testimonial: {
            quote: "Tecnigo Team delivered a website that not only looks fantastic but also performs flawlessly. Their team was professional, responsive, and a true partner throughout the entire process.",
            name: "John Doe",
            role: "Marketing Director, Creative Co.",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    };

    return (
        <div>
            <ServiceHero {...webDevData.hero} />
            <KeyFeatures {...webDevData.keyFeatures} />
            <OurProcess {...webDevData.process} />
            <TechStack {...webDevData.techStack} />
            <Testimonial {...webDevData.testimonial} />
            <HiringCta />
        </div>
    );
};

export default WebDevelopment;