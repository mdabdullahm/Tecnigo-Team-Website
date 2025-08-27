// src/components/home/ProvenProcess.jsx

import React, { useState, useEffect, useRef, useContext } from 'react'; // <-- useContext ইম্পোর্ট করুন
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';
import { AppContext } from '../../AppContext'; // <-- AppContext ইম্পোর্ট করুন

const processSteps = [
  {
    icon: <Lightbulb size={28} />,
    title: '1. Discovery & Strategy',
    description: 'We start by understanding your vision, goals, and target audience. This phase involves in-depth research and strategic planning to lay a solid foundation for your project.',
    image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    icon: <PenTool size={28} />,
    title: '2. Design & Prototyping',
    description: 'Our creative team crafts user-centric wireframes and visually stunning mockups. We build interactive prototypes to give you a real feel of the final product.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    icon: <Code size={28} />,
    title: '3. Development & Testing',
    description: 'Our expert developers bring the designs to life with clean, efficient code. Rigorous testing ensures your product is bug-free, secure, and performs flawlessly.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    icon: <Rocket size={28} />,
    title: '4. Launch & Optimization',
    description: 'We handle the deployment process for a smooth launch. Post-launch, we monitor performance and provide ongoing support to optimize and scale your product.',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// ProcessItem কম্পোনেন্ট অপরিবর্তিত
const ProcessItem = ({ step, setActiveIndex, index, isActive }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index, setActiveIndex]);

  return (
    <div ref={ref} className={`pl-16 relative py-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center h-16 w-16 rounded-full transition-all duration-300 ${isActive ? 'bg-red-600 text-white scale-105' : 'bg-white text-red-600 scale-100'}`}>
        {step.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed">{step.description}</p>
    </div>
  );
};

const ProvenProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setIsContactPopupOpen } = useContext(AppContext); // <-- context থেকে ফাংশনটি নিন

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Proven Process for Success</h2>
          <p className="mt-4 text-lg text-gray-600">
            We follow a structured and transparent process to ensure every project is a success, from initial idea to final launch.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Process Steps */}
          <div>
            {processSteps.map((step, index) => (
              <ProcessItem
                key={index}
                step={step}
                index={index}
                setActiveIndex={setActiveIndex}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          {/* Right Column: Sticky Image */}
          <div className="hidden lg:block sticky top-32">
            <div className="relative w-full h-[550px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              {processSteps.map((step, index) => (
                <img
                  key={index}
                  src={step.image}
                  alt={step.title}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="text-center mt-10">
              {/* --- NavLink কে button দিয়ে প্রতিস্থাপন করা হয়েছে --- */}
              <button
                onClick={() => setIsContactPopupOpen(true)} // <-- onClick ইভেন্ট যোগ করা হয়েছে
                className="bg-red-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-red-700 transition-colors duration-300"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;