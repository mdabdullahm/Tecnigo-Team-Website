// src/pages/AboutPage.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import CountUp from 'react-countup';
import { ArrowUpRight, Target, Users, Lightbulb } from 'lucide-react';

// --- টিমের সদস্যদের ডেটা ---
const teamMembers = [
    {
        name: 'John Doe',
        role: 'Co-Founder & CEO',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
        linkedin: '#',
    },
    {
        name: 'Jane Smith',
        role: 'Co-Founder & CTO',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
        linkedin: '#',
    },
    {
        name: 'Alex Johnson',
        role: 'Head of Design',
        image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800',
        linkedin: '#',
    },
    {
        name: 'Emily Carter',
        role: 'Lead Project Manager',
        image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
        linkedin: '#',
    },
];

// --- Team Member Card Component ---
const TeamMemberCard = ({ name, role, image, linkedin }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 text-center">
        <div className="overflow-hidden aspect-w-1 aspect-h-1">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-500 mt-1">{role}</p>
        </div>
        <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 h-10 w-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
        >
            <FaLinkedinIn size={20} />
        </a>
    </div>
);


// --- Main AboutPage Component ---
const AboutPage = () => {
    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <section className="bg-gray-900 text-white pt-32 pb-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold">About Tecnigo Team</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                        We are a passionate team of creators, thinkers, and innovators dedicated to building the future of digital experiences.
                    </p>
                </div>
            </section>

            {/* --- Our Story Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img 
                            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Tecnigo Team working together"
                            className="rounded-2xl shadow-2xl w-full"
                        />
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Story</h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Tecnigo Team was founded with a simple mission: to help businesses thrive in the digital world through outstanding technology and design. What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We believe in the power of collaboration and transparency. Our journey is defined by the success of our clients and the lasting relationships we've built along the way.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* --- Stats Section --- */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-red-600"><CountUp end={8} duration={3} enableScrollSpy />+</p>
                            <p className="mt-2 text-gray-600">Years in Business</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-red-600"><CountUp end={150} duration={3} enableScrollSpy />+</p>
                            <p className="mt-2 text-gray-600">Projects Delivered</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-red-600"><CountUp end={50} duration={3} enableScrollSpy />+</p>
                            <p className="mt-2 text-gray-600">Expert Team Members</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-red-600"><CountUp end={98} duration={3} enableScrollSpy />%</p>
                            <p className="mt-2 text-gray-600">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Meet the Team Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet Our Leadership</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            The driving force behind our innovation and success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Our Values Section --- */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4"><Target size={32} /></div>
                            <h3 className="text-xl font-bold">Client Success</h3>
                            <p className="mt-2 text-gray-600">Our success is measured by the success of our clients.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4"><Lightbulb size={32} /></div>
                            <h3 className="text-xl font-bold">Innovation</h3>
                            <p className="mt-2 text-gray-600">We constantly explore new technologies to deliver cutting-edge solutions.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4"><Users size={32} /></div>
                            <h3 className="text-xl font-bold">Collaboration</h3>
                            <p className="mt-2 text-gray-600">We believe the best results come from working together as a team.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* --- CTA Section --- */}
            <section className="bg-white py-24">
                 <div className="container mx-auto px-4">
                    <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                            We're always looking for talented individuals to join our mission. Explore our open positions and grow with us.
                        </p>
                        <NavLink 
                            to="/career"
                            className="mt-8 inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                        >
                            See Open Positions <ArrowUpRight size={20} />
                        </NavLink>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default AboutPage;