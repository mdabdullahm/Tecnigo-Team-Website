// src/components/home/ProvenProcess.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, PenTool, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: <Lightbulb size={24} />,
    title: 'Discover & Strategize',
    description: 'We begin by immersing ourselves in your brand, audience, and goals. This foundational step ensures that every decision is aligned with your objectives.',
    image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    icon: <PenTool size={24} />,
    title: 'Ideate & Design',
    description: 'Our creative team transforms insights into innovative designs, focusing on seamless user experiences that drive engagement and conversions.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    icon: <Code size={24} />,
    title: 'Develop & Deliver',
    description: 'We bring designs to life with precision and expertise, leveraging the latest technologies to build robust and scalable digital products.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Launch & Optimize',
    description: 'We bring designs to life with precision and expertise. Leveraging the latest technologies, we build robust and scalable digital products.',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ProcessItem = ({ step, setActiveIndex, index, isActive }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index, setActiveIndex]);

  return (
    <div ref={ref} className={`pl-20 relative py-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-75'}`}>
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center h-14 w-14 bg-gray-100 rounded-full text-gray-700 transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}>
        {step.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
      <p className="text-gray-600 leading-relaxed">{step.description}</p>
    </div>
  );
};

const ProvenProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Proven Process to Deliver Scalable Software</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored software development services designed to drive innovation, enhance efficiency, and elevate your business success.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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
          <div className="hidden lg:block sticky top-32">
            <div className="relative w-full h-[550px] overflow-hidden rounded-3xl shadow-2xl">
              {processSteps.map((step, index) => (
                <img
                  key={index} // <-- Key is important for React to track elements
                  src={step.image}
                  alt={step.title}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/contact" className="bg-blue-900 text-white font-semibold px-10 py-4 rounded-full hover:bg-blue-800 transition-colors duration-300">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenProcess;