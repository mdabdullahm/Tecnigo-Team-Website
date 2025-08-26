import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Server, AppWindow, PencilRuler, TestTube2, Code, Briefcase, ShieldCheck, Users } from 'lucide-react';

// প্রতিটি সার্ভিসের জন্য সঠিক path যোগ করা হয়েছে
const services = [
  { 
    icon: <Search size={32} className="text-blue-500" />, 
    title: 'User Research', 
    description: 'Understand user behavior to build effective, user-centered solutions.',
    path: '/services/user-research'
  },
  { 
    icon: <Server size={32} className="text-green-500" />, 
    title: 'Back-End Service', 
    description: 'Create intuitive, visually appealing interfaces for better user experiences.',
    path: '/services/hire-back-end-developers'
  },
  { 
    icon: <AppWindow size={32} className="text-purple-500" />, 
    title: 'Mobile App Dev', 
    description: 'Build robust, scalable server-side systems powering your applications.',
    path: '/services/mobile-app-development'
  },
  { 
    icon: <PencilRuler size={32} className="text-orange-500" />, 
    title: 'UX/UI Design', 
    description: 'End-to-end web solutions tailored for performance and flexibility.',
    path: '/services/ui-ux-design'
  },
  { 
    icon: <TestTube2 size={32} className="text-red-500" />, 
    title: 'SQA', 
    description: 'Develop mobile apps aligned with your business goals and users.',
    path: '/services/hire-sqa-engineers'
  },
  { 
    icon: <Code size={32} className="text-sky-500" />, 
    title: 'Web Development', 
    description: 'Launch lean, functional products to validate ideas quickly.',
    path: '/services/web-development'
  },
  { 
    icon: <Briefcase size={32} className="text-indigo-500" />, 
    title: 'MVP Development', 
    description: 'Ensure software reliability through rigorous testing and quality control.',
    path: '/services/mvp-development'
  },
  { 
    icon: <ShieldCheck size={32} className="text-rose-500" />, 
    title: 'Cyber Security', 
    description: 'Protect your digital assets with proactive security measures.',
    path: '/services/cyber-security' // <-- Cyber Security পেজের লিঙ্ক
  },
  { 
    icon: <Users size={32} className="text-teal-500" />, 
    title: 'Team Augmentation',
    description: 'Scale your team with skilled professionals on demand.',
    path: '/services/hire-front-end-developers'
  },
];

// ServiceCard কম্পোনেন্ট Link দিয়ে র‍্যাপ করা হয়েছে
const ServiceCard = ({ icon, title, description, path }) => (
  <Link to={path} className="block h-full">
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col items-start h-full">
      <div className="bg-gray-100 p-4 rounded-full mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-base mb-5 flex-grow">{description}</p>
      <span className="font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto">
        Learn more →
      </span>
    </div>
  </Link>
);

const DevServices = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Custom Software Development Services
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Custom software development services designed to enhance efficiency, streamline operations, and drive your business forward.
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