import React from 'react';
import { Lightbulb, PenTool, Code, Rocket, ArrowUpRight } from 'lucide-react';

const processSteps = [
  { icon: <Lightbulb size={24} />, title: 'Discover & Strategize', description: 'We begin by immersing ourselves in your brand, audience, and goals. This foundational step ensures that every decision is aligned with your objectives.' },
  { icon: <PenTool size={24} />, title: 'Ideate & Design', description: 'Our creative team transforms insights into innovative designs, focusing on seamless user experiences that drive engagement and conversions.' },
  { icon: <Code size={24} />, title: 'Develop & Deliver', description: 'We bring designs to life with precision and expertise, leveraging the latest technologies to build robust and scalable digital products.' },
  { icon: <Rocket size={24} />, title: 'Launch & Optimize', description: 'We ensure a smooth launch and provide ongoing support to optimize performance based on user feedback and analytics.' },
];

const ProvenProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Crafting Excellence Through
          <br />
          Our Proven Process
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Process Steps */}
          <div className="space-y-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team working on a project"
              className="rounded-2xl w-full shadow-lg"
            />
            <button className="absolute top-4 right-4 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white">
              <ArrowUpRight size={28} />
            </button>
            <button className="absolute bottom-8 right-1/2 translate-x-1/2 bg-black text-white px-8 py-3 rounded-full font-semibold">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;