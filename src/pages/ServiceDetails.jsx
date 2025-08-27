// src/pages/ServiceDetails.jsx

import React, { useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';
import { CheckCircle, Users, Quote, Award, FileText, Search, UserCheck, Send } from 'lucide-react';

// --- পুনঃব্যবহারযোগ্য কম্পোনেন্টগুলো ---
const ServiceHero = ({ title, description, image }) => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    return (
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-32 pb-20 text-white overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left animate-fade-in-up">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h1>
                    <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">{description}</p>
                    <button onClick={() => setIsContactPopupOpen(true)} className="mt-8 inline-block bg-red-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-red-700 transition-transform duration-300 transform hover:scale-105">
                        Hire a Talent
                    </button>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={image} alt={title} className="w-full max-w-md rounded-lg shadow-2xl" />
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = ({ title, subtitle, reasons = [] }) => {
    const ReasonCard = ({ icon, title, description }) => (
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
            <div className="inline-block bg-red-50 text-red-600 p-4 rounded-full mb-5">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{title}</h2>
                    <p className="text-gray-600 mt-4 text-lg">{subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => <ReasonCard key={index} {...reason} />)}
                </div>
            </div>
        </section>
    );
};

const HiringModels = ({ models = [] }) => {
    const { setIsContactPopupOpen } = useContext(AppContext);
    const ModelCard = ({ title, description, details }) => (
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-red-500 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{description}</p>
            <div className="border-t border-gray-200 mt-auto pt-4">
                <p className="font-semibold text-gray-700">{details}</p>
            </div>
        </div>
    );
    return(
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Flexible Hiring Models</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {models.map((model, index) => <ModelCard key={index} {...model} />)}
                </div>
                <div className="text-center mt-16">
                    <button onClick={() => setIsContactPopupOpen(true)} className="bg-red-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105">
                        Get a Custom Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

const TechStack = ({ title, technologies = [] }) => {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-red-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
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
};

const Testimonial = ({ quote, name, role, avatar }) => {
    return (
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
};

// --- নতুন কম্পোনেন্ট: Explore Page-এর জন্য ---
const HiringProcess = ({ title, steps = [] }) => {
    const icons = [<FileText />, <Search />, <UserCheck />, <Send />];
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-red-500">
                            <div className="inline-block bg-red-100 text-red-600 p-4 rounded-full mb-5">
                                {React.cloneElement(icons[index], { size: 32 })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AvailableRoles = ({ title, roles = [] }) => (
    <section className="bg-white py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {roles.map((role, index) => (
                    <span key={index} className="bg-red-50 text-red-700 font-semibold px-5 py-2.5 rounded-full">
                        {role.name}
                    </span>
                ))}
            </div>
        </div>
    </section>
);


// --- সম্পূর্ণ ডেটাবেস ---
const allServicesData = {
    'hire-front-end-developers':{hero:{title:"Hire Expert Frontend Developers",description:"Build stunning, responsive, and high-performing user interfaces with our dedicated frontend developers. We bring your designs to life with pixel-perfect precision and cutting-edge technologies.",image:"https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},whyChooseUs:{title:"Why Hire Our Frontend Developers?",subtitle:"We provide top-tier talent to ensure your project's success.",reasons:[{icon:<Award size={28}/>,title:"Vetted Experts",description:"Our developers go through a rigorous vetting process to ensure they possess top-notch technical and communication skills."},{icon:<Users size={28}/>,title:"Seamless Integration",description:"Our developers integrate smoothly into your existing team and workflow, becoming a true extension of your company."},{icon:<CheckCircle size={28}/>,title:"Quality & Performance",description:"We are committed to writing clean, maintainable, and high-performing code that meets the highest standards."}]},hiringModels:{models:[{title:"Full-Time Hiring",description:"A dedicated developer working 8 hours a day exclusively for your project. Ideal for long-term projects.",details:"8 Hours/Day, 5 Days/Week"},{title:"Part-Time Hiring",description:"A flexible option for projects that require dedicated support but not a full-time commitment.",details:"4 Hours/Day, 5 Days/Week"},{title:"Hourly Hiring",description:"Perfect for small tasks, consultations, or projects with fluctuating requirements.",details:"Pay as you go"}]},techStack:{title:"Our Frontend Expertise",technologies:[{name:"React",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Vue.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},{name:"Angular",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},{name:"TypeScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"JavaScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"Tailwind CSS",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},{name:"Next.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"}]},testimonial:{quote:"The frontend developer we hired from Tecnigo Team was exceptional. They integrated seamlessly with our team and delivered outstanding results ahead of schedule. Their expertise in React was a game-changer for our project.",name:"Michael Chen",role:"CTO, Innovate Co.",avatar:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}},
    'hire-back-end-developers':{hero:{title:"Hire Expert Backend Developers",description:"Power your applications with robust, scalable, and secure server-side logic. Our dedicated backend developers are experts in building powerful APIs and managing complex databases.",image:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},whyChooseUs:{title:"Why Hire Our Backend Developers?",subtitle:"We provide the backbone for your digital products.",reasons:[{icon:<Award size={28}/>,title:"Scalable Architecture",description:"Our developers design and build systems that can grow with your business, handling increasing traffic and data."},{icon:<Users size={28}/>,title:"API & Database Experts",description:"We specialize in creating efficient RESTful and GraphQL APIs and managing both SQL and NoSQL databases."},{icon:<CheckCircle size={28}/>,title:"Security Focused",description:"We prioritize security in every line of code, protecting your application and user data from threats."}]},hiringModels:{models:[{title:"Full-Time Hiring",description:"A dedicated developer working 8 hours a day exclusively for your project. Ideal for long-term projects.",details:"8 Hours/Day, 5 Days/Week"},{title:"Part-Time Hiring",description:"A flexible option for projects that require dedicated support but not a full-time commitment.",details:"4 Hours/Day, 5 Days/Week"},{title:"Hourly Hiring",description:"Perfect for small tasks, consultations, or projects with fluctuating requirements.",details:"Pay as you go"}]},techStack:{title:"Our Backend Expertise",technologies:[{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},{name:"Python",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"PHP",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},{name:"Laravel",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"},{name:"PostgreSQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},{name:"MongoDB",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}]},testimonial:{quote:"The backend architecture developed by Tecnigo Team's developer is incredibly robust and scalable. They handled our complex data requirements with ease and delivered a high-performance API.",name:"Sarah Wilson",role:"Lead Engineer, DataCorp",avatar:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"}},
    'hire-ui-ux-developers':{hero:{title:"Hire Expert UI/UX Designers",description:"Transform your digital products with our world-class UI/UX designers. We create intuitive, engaging, and beautiful user experiences that boost user satisfaction and drive business growth.",image:"https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},whyChooseUs:{title:"Why Hire Our UI/UX Designers?",subtitle:"We design experiences that users love.",reasons:[{icon:<Award size={28}/>,title:"User-Centric Approach",description:"Our designers place your users at the center of the design process, ensuring the final product is both useful and delightful."},{icon:<Users size={28}/>,title:"Creative & Strategic",description:"We blend creative innovation with strategic thinking to create designs that are not only beautiful but also solve real business problems."},{icon:<CheckCircle size={28}/>,title:"Data-Driven Design",description:"We use research, data, and user testing to make informed design decisions that lead to measurable results."}]},hiringModels:{models:[{title:"Full-Time Hiring",description:"A dedicated designer working 8 hours a day exclusively for your project. Ideal for long-term projects.",details:"8 Hours/Day, 5 Days/Week"},{title:"Part-Time Hiring",description:"A flexible option for projects that require dedicated support but not a full-time commitment.",details:"4 Hours/Day, 5 Days/Week"},{title:"Hourly Hiring",description:"Perfect for small tasks, design consultations, or projects with fluctuating requirements.",details:"Pay as you go"}]},techStack:{title:"Design & Prototyping Tools We Master",technologies:[{name:"Figma",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},{name:"Adobe XD",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"},{name:"Sketch",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg"},{name:"InVision",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/invision/invision-original.svg"},{name:"Zeplin",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zeplin/zeplin-original.svg"},{name:"Illustrator",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"},{name:"Photoshop",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"}]},testimonial:{quote:"The UI/UX designer from Tecnigo Team was a true professional. They transformed our complex application into an intuitive and beautiful product. Our user engagement has increased significantly since the redesign.",name:"Emily Carter",role:"Head of Product, SaaSify",avatar:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800"}},
    'hire-sqa-engineers':{hero:{title:"Hire Expert SQA Engineers",description:"Ensure the quality and reliability of your software with our dedicated SQA engineers. We identify bugs, mitigate risks, and guarantee a flawless user experience for your product.",image:"https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},whyChooseUs:{title:"Why Hire Our SQA Engineers?",subtitle:"We are committed to delivering flawless software.",reasons:[{icon:<Award size={28}/>,title:"Meticulous Attention to Detail",description:"Our SQA engineers possess a keen eye for detail, ensuring even the smallest bugs are caught before they reach your users."},{icon:<Users size={28}/>,title:"Comprehensive Testing Strategies",description:"We employ a mix of manual and automated testing methodologies to ensure complete test coverage for your application."},{icon:<CheckCircle size={28}/>,title:"Proactive Risk Mitigation",description:"We don't just find bugs; we identify potential risks and work with your development team to prevent future issues."}]},hiringModels:{models:[{title:"Full-Time Hiring",description:"A dedicated SQA engineer working 8 hours a day, fully integrated with your development cycle.",details:"8 Hours/Day, 5 Days/Week"},{title:"Part-Time Hiring",description:"Ideal for smaller projects or for providing continuous quality assurance without a full-time commitment.",details:"4 Hours/Day, 5 Days/Week"},{title:"Project-Based Testing",description:"Hire our SQA team for a specific project duration to ensure a high-quality launch.",details:"Fixed Scope & Timeline"}]},techStack:{title:"Testing Tools & Technologies We Use",technologies:[{name:"Selenium",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"},{name:"Jira",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"},{name:"Cypress",logo:"https://www.svgrepo.com/show/373523/cypress.svg"},{name:"Postman",logo:"https://www.svgrepo.com/show/354202/postman-icon.svg"},{name:"JMeter",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jmeter/jmeter-original.svg"},{name:"TestRail",logo:"https://www.svgrepo.com/show/374121/testrail.svg"},{name:"Jenkins",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"}]},testimonial:{quote:"The SQA engineer we hired from Tecnigo Team was a critical addition to our project. Their thoroughness and proactive communication helped us launch a bug-free product. We couldn't have done it without them.",name:"David Chen",role:"Project Manager, TechLaunch",avatar:"https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800"}},
    'hire-mobile-app-developers':{hero:{title:"Hire Expert Mobile App Developers",description:"Build exceptional iOS, Android, and cross-platform applications with our dedicated mobile app developers. We turn your ideas into high-performance, user-friendly mobile experiences.",image:"https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},whyChooseUs:{title:"Why Hire Our Mobile App Developers?",subtitle:"We deliver mobile solutions that engage and retain users.",reasons:[{icon:<Award size={28}/>,title:"Multi-Platform Expertise",description:"Our developers are proficient in native (iOS, Android) and cross-platform (Flutter, React Native) development."},{icon:<Users size={28}/>,title:"Performance-Oriented",description:"We focus on building fast, responsive, and battery-efficient apps that provide a seamless user experience."},{icon:<CheckCircle size={28}/>,title:"Full-Cycle Development",description:"From ideation and design to launch and maintenance, our developers support you through the entire app lifecycle."}]},hiringModels:{models:[{title:"Full-Time Hiring",description:"A dedicated mobile developer working 8 hours a day, perfect for building your app from scratch.",details:"8 Hours/Day, 5 Days/Week"},{title:"Part-Time Hiring",description:"Ideal for ongoing projects, feature enhancements, or providing continuous support for your app.",details:"4 Hours/Day, 5 Days/Week"},{title:"Hourly Hiring",description:"Best for specific tasks, bug fixes, or consulting on your mobile strategy.",details:"Pay as you go"}]},techStack:{title:"Mobile Technologies We Excel In",technologies:[{name:"Swift",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"},{name:"Kotlin",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"},{name:"Flutter",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"},{name:"React Native",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"Firebase",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"},{name:"GraphQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"},{name:"Docker",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}]},testimonial:{quote:"We hired a Flutter developer from Tecnigo Team, and the experience was fantastic. They were highly skilled, proactive, and a great cultural fit for our team. Our app was launched on both platforms ahead of schedule.",name:"Jessica Miller",role:"Product Manager, GoVenture",avatar:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800"}},
    'explore-all-resources': {
        isExplorePage: true,
        hero: {
            title: "Access Top-Tier Global Tech Talent",
            description: "Build your dream team with our pre-vetted, expert developers, designers, SQA engineers, and more. We simplify the process of hiring and managing remote talent, ensuring a perfect fit for your projects.",
            image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        hiringProcess: {
            title: 'Our Simple 4-Step Hiring Process',
            steps: [
                { title: '1. Tell Us Your Needs', description: 'Share your project requirements and the skills you\'re looking for.' },
                { title: '2. Review Candidates', description: 'We provide you with a shortlist of pre-vetted candidates within 48 hours.' },
                { title: '3. Interview & Select', description: 'Conduct interviews and select the best fit for your team and project.' },
                { title: '4. Onboard & Start', description: 'We handle the paperwork, and you can start working with your new team member.' },
            ]
        },
        availableRoles: {
            title: 'Wide Range of Roles Available',
            roles: [
                { name: 'Frontend Developers' }, { name: 'Backend Developers' }, { name: 'Full-Stack Developers' },
                { name: 'Mobile App Developers' }, { name: 'UI/UX Designers' }, { name: 'SQA Engineers' },
                { name: 'DevOps Engineers' }, { name: 'Project Managers' }, { name: 'Business Analysts' },
            ]
        },
        hiringModels: {
            models: [
                { title: 'Full-Time Hiring', description: 'A dedicated expert working 8 hours a day exclusively for you.', details: '8 Hours/Day, 5 Days/Week' },
                { title: 'Part-Time Hiring', description: 'A flexible option for ongoing projects that don\'t require a full-time commitment.', details: '4 Hours/Day, 5 Days/Week' },
                { title: 'Hourly Hiring', description: 'Perfect for specific tasks, consultations, or short-term projects.', details: 'Pay as you go' },
            ]
        },
        testimonial: {
            quote: "Finding the right talent was always a challenge until we partnered with Tecnigo Team. Their process is fast, efficient, and they provided us with a top-notch developer who has become an invaluable part of our team.",
            name: "Alex Johnson",
            role: "CEO, Innovate Inc.",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    },
};

// --- মূল পেজ কম্পונেন্ট ---
const ServiceDetails = () => {
    const { serviceId } = useParams();
    // Navbar থেকে resources লিঙ্ক ক্লিক করলে serviceId হবে 'resources', ডেটা লোড করার জন্য এটিকে 'explore-all-resources' এ পরিবর্তন করতে হবে
    const currentServiceId = serviceId === 'resources' ? 'explore-all-resources' : serviceId;
    const serviceData = allServicesData[currentServiceId];

    if (!serviceData) {
        return (
            <div className="pt-32 pb-16 text-center">
                <h1 className="text-4xl font-bold">Service Not Found</h1>
                <p className="mt-4 text-lg">The service you are looking for does not exist.</p>
                <NavLink to="/" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-full">Back to Home</NavLink>
            </div>
        );
    }
    
    // 'Explore All Resources' পেজের জন্য বিশেষ লেআউট
    if (serviceData.isExplorePage) {
        return (
            <div>
                <ServiceHero {...serviceData.hero} />
                <HiringProcess {...serviceData.hiringProcess} />
                <AvailableRoles {...serviceData.availableRoles} />
                <HiringModels {...serviceData.hiringModels} />
                <Testimonial {...serviceData.testimonial} />
            </div>
        );
    }

    // অন্যান্য সব সার্ভিস পেজের জন্য ডিফল্ট লেআউট
    return (
        <div>
            <ServiceHero {...serviceData.hero} />
            <WhyChooseUs {...serviceData.whyChooseUs} />
            <TechStack title={serviceData.techStack.title} technologies={serviceData.techStack.technologies} />
            <HiringModels {...serviceData.hiringModels} />
            <Testimonial {...serviceData.testimonial} />
        </div>
    );
};

export default ServiceDetails;