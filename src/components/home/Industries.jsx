// src/components/home/Industries.jsx

import React from 'react';
import { ShoppingCart, Building2, Server, Car, Box, Landmark, HeartPulse, Gamepad, Leaf, Shirt } from 'lucide-react';

const industries = [
  { icon: <ShoppingCart size={32} />, name: 'E-commerce' },
  { icon: <Building2 size={32} />, name: 'Real Estate' },
  { icon: <HeartPulse size={32} />, name: 'Healthcare' },
  { icon: <Landmark size={32} />, name: 'Fintech' },
  { icon: <Leaf size={32} />, name: 'Agriculture' },
  { icon: <Server size={32} />, name: 'SaaS & Tech' },
  { icon: <Gamepad size={32} />, name: 'Gaming' },
  { icon: <Car size={32} />, name: 'Automotive' },
  { icon: <Shirt size={32} />, name: 'Fashion' },
  { icon: <Box size={32} />, name: 'Logistics' },
];

const IndustryCard = ({ icon, name }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center gap-4 h-full transform hover:scale-105">
    <div className="text-red-600">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
  </div>
);

const Industries = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            We Serve a Wide Range of Industries
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Our expertise spans across various sectors, enabling us to deliver tailored solutions that meet the unique challenges of your industry.
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