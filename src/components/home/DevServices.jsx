// src/components/home/DevServices.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Code, AppWindow, PencilRuler, Server, ShieldCheck, Briefcase } from 'lucide-react';

// আপনার এজেন্সির প্রধান সেবাগুলো এখানে যোগ করুন
const services = [
  { 
    icon: <Code size={32} className="text-red-500" />, 
    title: 'Custom Web Development', 
    description: 'We build high-performing, scalable, and secure web applications tailored to your specific business needs.',
    path: '/services/web-development'
  },
  { 
    icon: <AppWindow size={32} className="text-red-500" />, 
    title: 'Mobile App Development', 
    description: 'Engage your users with intuitive and powerful mobile applications for both iOS and Android platforms.',
    path: '/services/mobile-app-development'
  },
  { 
    icon: <PencilRuler size={32} className="text-red-500" />, 
    title: 'UI/UX Design', 
    description: 'Our design experts create beautiful, user-centric interfaces that deliver exceptional user experiences.',
    path: '/services/ui-ux-design'
  },
  { 
    icon: <Server size={32} className="text-red-500" />, 
    title: 'Backend & API Development', 
    description: 'Power your digital products with robust, scalable, and secure server-side logic and APIs.',
    path: '/services/hire-back-end-developers'
  },
  { 
    icon: <ShieldCheck size={32} className="text-red-500" />, 
    title: 'Cyber Security Solutions', 
    description: 'Protect your digital assets and ensure business continuity with our comprehensive security services.',
    path: '/services/cyber-security'
  },
  { 
    icon: <Briefcase size={32} className="text-red-500" />, 
    title: 'MVP & Prototyping', 
    description: 'Validate your business idea quickly and efficiently by building a Minimum Viable Product with core functionalities.',
    path: '/services/mvp-development'
  },
];

// Service Card Component
const ServiceCard = ({ icon, title, description, path }) => (
  <Link to={path} className="block group h-full">
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-start h-full">
      <div className="bg-red-50 p-4 rounded-full mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-base mb-5 flex-grow">{description}</p>
      <span className="font-semibold text-red-600 group-hover:text-red-800 transition-colors mt-auto">
        Learn more →
      </span>
    </div>
  </Link>
);

const DevServices = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Core Services
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            We provide a wide range of digital services designed to help your business succeed in the modern landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevServices;