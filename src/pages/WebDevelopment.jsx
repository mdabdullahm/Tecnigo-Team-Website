// src/pages/WebDevelopment.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, MonitorSmartphone, ShoppingCart, LayoutTemplate, Quote } from 'lucide-react';

// --- Hero Section (আগের মতোই) ---
const WebDevHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    Web Development Services
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    At ZAAG, we specialize in creating dynamic and engaging websites that drive results. Our team of expert developers is dedicated to delivering tailor-made solutions that cater to your unique business needs.
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
                    src="https://i.ibb.co.com/G3CRCRBh/download-12.jpg" 
                    alt="Web Development Illustration" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- Key Services Section (আগের মতোই) ---
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full text-center">
        <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-full mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const KeyServices = () => {
    const services = [
        {
            icon: <Globe size={28} />,
            title: 'Custom Website Development',
            description: 'Our team specializes in developing tailor-made websites that perfectly align with your unique business needs.'
        },
        {
            icon: <MonitorSmartphone size={28} />,
            title: 'Responsive Web Design',
            description: 'We create visually stunning and user-friendly websites that seamlessly adapt to different screen sizes and devices.'
        },
        {
            icon: <ShoppingCart size={28} />,
            title: 'E-commerce Solutions',
            description: 'Our team specializes in developing tailor-made websites that perfectly align with your unique business needs.'
        },
        {
            icon: <LayoutTemplate size={28} />,
            title: 'Content Management Systems',
            description: 'Take charge of your website’s content effortlessly with our intuitive and flexible CMS solutions.'
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">KEY SERVICES</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Transformative Web Solutions to Empower Your Business
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Benefits Section (আগের মতোই) ---
const BenefitItem = ({ title, description, image, reverse = false }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className={reverse ? 'md:order-2' : ''}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="flex justify-center">
            <img src={image} alt={title} className="rounded-2xl shadow-lg max-w-sm w-full" />
        </div>
    </div>
);

const BenefitsSection = () => {
    const benefits = [
        {
            title: 'Customized Solutions',
            description: 'Tailored web development services that align with your unique goals and requirements, creating a website that represents your brand identity and delivers an exceptional user experience.',
            image: 'https://i.ibb.co.com/5WhTq2D0/istockphoto-2207141939-612x612.webp'
        },
        {
            title: 'Mobile-Responsive Design',
            description: 'Ensuring seamless navigation and optimal functionality across all devices, from smartphones to tablets and desktops.',
            image: 'https://i.ibb.co.com/xtpgm9kX/photo-1691073112675-9685bc6779bf.jpg'
        },
        {
            title: 'Scalability and Performance',
            description: 'Building websites that scale with your business, leveraging robust frameworks and efficient coding practices for fast load times, smooth interactions, and enhanced performance.',
            image: 'https://i.ibb.co.com/p6XpJJ42/photo-1666720125733-654896436137.jpg'
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">BENEFITS</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Empower Your Online Presence with Our Web Development Services
                    </h2>
                </div>
                <div className="space-y-20">
                    {benefits.map((benefit, index) => (
                        <BenefitItem key={index} {...benefit} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Frameworks Section (আগের মতোই) ---
const FrameworkCard = ({ name, logo }) => (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <img src={logo} alt={`${name} logo`} className="h-14 w-14 object-contain" />
        <span className="font-semibold text-gray-700">{name}</span>
    </div>
);

const FrameworksSection = () => {
    const frameworks = [
        { name: 'Javascript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Angular JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Php', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'Vue JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
        { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Codeigniter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
        { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    ];
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Powerful Frameworks for Cutting-Edge Web Development
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {frameworks.map((framework) => (
                        <FrameworkCard key={framework.name} {...framework} />
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
                    <img src="https://i.ibb.co.com/PzY1tFXx/photo-1499673610122-01c7122c5dcb.jpg" alt="Hire skilled web developers from ZAAG Systems" className="max-w-sm w-full" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Hire Skilled Web Developers
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Hire the best Web developers from ZAAG Systems Limited who are creative and skilled at creating your custom website. Build stunning websites for your business!
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
            quote: "ZAAG Systems transformed our online presence with a stunning, high-performance website. Their team was professional, responsive, and a pleasure to work with throughout the entire process.",
            name: "Rolf Schneider",
            role: "CEO, Advertising Agency",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            quote: "The custom e-commerce solution they built for us has significantly boosted our sales. Their attention to detail and understanding of our business needs was exceptional.",
            name: "Md Shakil Ahmad",
            role: "Upazila ICT Technician, Bangladesh Government",
            avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            quote: "Thanks to ZAAG's efforts, we were able to successfully run our online business. They are a reliable and highly skilled development partner we would recommend to anyone.",
            name: "Mahmudul Hasan Khan",
            role: "Retail Operations Manager, Suncity Hypermarket LLC",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
const WebDevelopment = () => {
    return (
        <div>
            <WebDevHero />
            <KeyServices />
            <BenefitsSection />
            <FrameworksSection />
            <HiringCta />         {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
            <TestimonialsSection /> {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
        </div>
    );
};

export default WebDevelopment;