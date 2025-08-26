// src/components/home/Industries.jsx
import React from 'react';
import { ShoppingCart, Building2, Server, Car, Box, Landmark, HeartPulse, Gamepad, Leaf, Shirt } from 'lucide-react';

const industries = [
  { icon: <ShoppingCart size={32} />, name: 'E-commerce' },
  { icon: <Building2 size={32} />, name: 'Real Estate' },
  { icon: <Server size={32} />, name: 'Software' },
  { icon: <Car size={32} />, name: 'Automotive' },
  { icon: <Box size={32} />, name: 'AR/VR' },
  { icon: <Landmark size={32} />, name: 'Finance & Banking' },
  { icon: <HeartPulse size={32} />, name: 'Health & Fitness' },
  { icon: <Gamepad size={32} />, name: 'Gaming' },
  { icon: <Leaf size={32} />, name: 'Agriculture' },
  { icon: <Shirt size={32} />, name: 'Fashion & Apparel' },
];

const IndustryCard = ({ icon, name }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-center text-center gap-4 h-full">
    <div className="text-gray-600">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
  </div>
);

const Industries = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Industry-Focused Software Development Expertise
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            From healthcare to retail, our software development team understands your industry's challenges and delivers smart, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={index} icon={industry.icon} name={industry.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;