// src/pages/Team.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { Target, Lightbulb, Users, ArrowUpRight } from 'lucide-react';

// --- টিমের সদস্যদের ডেটা ---
const leadershipTeam = [
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

const developmentTeam = [
    { name: 'Michael Brown', role: 'Senior Frontend Developer', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800', linkedin: '#' },
    { name: 'Sarah Wilson', role: 'Senior Backend Developer', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800', linkedin: '#' },
    { name: 'David Lee', role: 'Mobile App Developer', image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800', linkedin: '#' },
    { name: 'Chris Green', role: 'DevOps Engineer', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=800', linkedin: '#' },
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


// --- Main Team Page Component ---
const Team = () => {
    return (
        <div className="bg-white">
            {/* --- Hero Section --- */}
            <section className="relative bg-gray-900 text-white pt-32 pb-20 text-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Team" className="w-full h-full object-cover opacity-30"/>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold">Meet the Innovators</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                        We are a diverse team of passionate experts, united by a shared love for technology and a commitment to delivering excellence.
                    </p>
                </div>
            </section>
            
            {/* --- Our Mission & Vision Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Mission</h2>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        "To empower businesses with innovative and reliable technology solutions, fostering growth and driving digital transformation. We are committed to building long-lasting partnerships based on trust, transparency, and mutual success."
                    </p>
                </div>
            </section>
            
            {/* --- Leadership Team Section --- */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Leadership</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            The visionaries guiding our journey to excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadershipTeam.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Our Values Section --- */}
            <section className="py-24">
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
            
            {/* --- Expert Team Section --- */}
             <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Meet Our Experts</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            A few of the talented individuals who make our work possible.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {developmentTeam.map((member, index) => (
                            <TeamMemberCard key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- CTA Section --- */}
            <section className="bg-white py-24">
                 <div className="container mx-auto px-4">
                    <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold">Want to Join Our Team?</h2>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                            We're always looking for passionate and talented individuals. Explore our open positions and start your journey with us.
                        </p>
                        <NavLink 
                            to="/career"
                            className="mt-8 inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
                        >
                            View Careers <ArrowUpRight size={20} />
                        </NavLink>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default Team;