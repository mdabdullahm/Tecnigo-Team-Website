import React from 'react';

const projects = [
  {
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Fuel Pro',
    description: 'Fuel Pro is a robust web application that simplifies fuel management for businesses. It offers real-time tracking, spending insights, and transaction logs, enabling more efficient and cost-effective fuel usage.',
  },
  {
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'IntelliHealth',
    description: 'IntelliHealth delivers AI-powered, personalized health consultations, redefining the future of healthcare with cutting-edge technology.',
  },
  // আরও প্রজেক্ট এখানে যোগ করা যাবে
];

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Some cases of our satisfied
          <br />
          clients project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index}>
              <img src={project.image} alt={project.title} className="rounded-lg mb-6 w-full h-auto object-cover aspect-video" />
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#" className="text-lg font-semibold border-b border-gray-500 pb-1 hover:text-white hover:border-white transition">
            View all case studies +
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;