// src/pages/MvpDevelopment.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, Recycle, Building, UserCheck, Quote, ArrowRight } from 'lucide-react';

// --- Hero Section (আগের মতোই) ---
const MvpHero = () => (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                    MVP Development Services
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                    The Lean Startup Methodology has radically transformed how new products are built. We leverage this approach in tandem with agile to deliver products that are delightful, useful, valuable and feasible from day one.
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
                    src="https://i.ibb.co/L5Bw0zV/mvp-hero.png" 
                    alt="MVP Development Cycle" 
                    className="max-w-lg w-full"
                />
            </div>
        </div>
    </section>
);

// --- Introduction Section (আগের মতোই) ---
const MvpIntro = () => (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900">
                Success of your product starts with a great MVP
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                A well-balanced MVP is the best way to explore the potential of your idea at the optimum cost and time. It has the right proportion of basic functionality and unique features to prove your product can stand out among its competitors. Using minimum viable product software, you show the investors your concept is worth looking into and can test your product on real audience before a big roll-out to the market.
            </p>
        </div>
    </section>
);

// --- Services We Provide Section (আগের মতোই) ---
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
        <div className="text-blue-600 mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const MvpServices = () => {
    const services = [
        {
            icon: <Users size={32} />,
            title: 'Customer-Centered Nature',
            description: 'Our experienced team of developers works diligently to deliver your MVP within a short timeframe, ensuring you can quickly test and iterate your product concept.'
        },
        {
            icon: <Recycle size={32} />,
            title: 'Agile & Lean Methodologies',
            description: 'We follow an agile development methodology, allowing us to adapt to changing requirements, prioritize features, and deliver incremental releases to gather valuable user feedback.'
        },
        {
            icon: <Building size={32} />,
            title: 'Business-Oriented Approach',
            description: 'Our expert designers create intuitive and user-friendly interfaces for your MVP, focusing on delivering an exceptional user experience that resonates with your target audience.'
        },
        {
            icon: <UserCheck size={32} />,
            title: 'Managed MVP Teams',
            description: 'Our MVP solutions are built with scalability in mind, ensuring that your product can grow and evolve as your business expands. We also provide flexible engagement models to suit your project needs.'
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">MVP development services we provide</h2>
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                        <img src="https://i.ibb.co/h7gBq41/mvp-side.png" alt="Abstract pyramid" className="mt-8 rounded-lg shadow-md w-full" />
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Why ZAAG Section (আগের মতোই) ---
const WhyZaag = () => {
    const points = [
        { number: '01', title: 'Agile Methodology', description: 'We use Agile throughout an MVP’s development to enhance and assure the desired outcomes. Agile ensures quicker, less stressful client outcomes.' },
        { number: '02', title: 'Dedicated Project Manager', description: 'We tackle business difficulties with the finest team and clear communication. Our remote-first, well-built procedure assigns a project manager for each project to assure quality.' },
        { number: '03', title: '80% Employee Retention Rate', description: 'Our retention rate is 80%. Investing in a great workforce has helped us accomplish more and offer exceptional outcomes to every customer.' },
        { number: '04', title: '9/10 Client Satisfaction Score', description: 'We not only write code and develop products, but our honest communication helps us satisfy customers. Our high service standards guarantee all-out customer satisfaction.' },
        { number: '05', title: '92% Senior and Middle Engineers', description: 'Our pool of tech-savvy professionals with distinctive abilities and aptitudes allows us to provide clients with senior tech talent to create world-class software.' },
        { number: '06', title: 'Risk Handling', description: 'Technical growth is risky; therefore, we’ve improved our protocols, tools, and risk-management strategies. As a result, we prioritize client satisfaction and exceed expectations.' },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">WHY ZAAG?</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                        Why ZAAG Systems for MVP Development?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {points.map(point => (
                        <div key={point.number}>
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-gray-300 font-bold text-2xl">{point.number}</span>
                                <div className="flex-grow h-px bg-gray-200"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- নতুন: Our Stories / Blog Section ---
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
        {
            image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'MVP Development',
            title: 'How to Build an MVP: A Step-by-Step Guide for Startups',
            link: '#',
        },
        {
            image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Startup Strategy',
            title: 'Top 5 Mistakes to Avoid When Launching Your First Product',
            link: '#',
        },
        {
            image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=600',
            category: 'Agile Methodology',
            title: 'Why Agile is the Perfect Fit for MVP Development Projects',
            link: '#',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Stories</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <StoryCard key={index} {...story} />
                    ))}
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
            quote: "ZAAG's MVP development service was a game-changer for our startup. They helped us validate our idea quickly and efficiently, saving us valuable time and resources.",
            name: "Alex Johnson",
            role: "Founder, TechLaunch",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            quote: "The team's agile approach was perfect for our project. They delivered a high-quality MVP that allowed us to secure our first round of funding. Highly recommended!",
            name: "Maria Garcia",
            role: "CEO, Innovate Solutions",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            quote: "Working with ZAAG was a fantastic experience. They understood our business goals and built an MVP that perfectly matched our vision and user needs.",
            name: "Chen Wei",
            role: "Co-Founder, MarketFit",
            avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <section className="bg-white py-24">
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
const MvpDevelopment = () => {
    return (
        <div>
            <MvpHero />
            <MvpIntro />
            <MvpServices />
            <WhyZaag />
            <OurStories />          {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
            <TestimonialsSection /> {/* <-- নতুন সেকশন যোগ করা হয়েছে */}
        </div>
    );
};

export default MvpDevelopment;