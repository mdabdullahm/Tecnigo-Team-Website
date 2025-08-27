// src/components/home/HeroSection.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code, AppWindow, PencilRuler, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    // --- মূল সেকশন কন্টেইনার ---
    <section className="relative h-screen min-h-[700px] flex flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
      
      {/* --- ডেকোরেটিভ শেপ --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-white rounded-full filter blur-3xl"></div>
      </div>
      
      {/* --- সমাধান: মূল কনটেন্ট এবং নিচের সেকশন আলাদা করা হয়েছে --- */}
      <div className="w-full flex-grow flex flex-col justify-center items-center">
        {/* --- উপরের কনটেন্ট (শিরোনাম, বাটন ইত্যাদি) --- */}
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Creative Solutions, 
              <br />
              <span className="text-red-400 typing-animation">Measurable Results.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md">
              Tecnigo Team is a full-service digital agency crafting beautiful, high-performing websites and applications that drive business growth.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <NavLink 
                to="/projects"
                className="bg-red-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto text-base"
              >
                Explore Our Work
              </NavLink>
              <NavLink 
                to="/contact"
                className="border-2 border-white/80 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition duration-300 w-full sm:w-auto text-base"
              >
                Get a Free Quote
              </NavLink>
            </div>
        </div>
      </div>
      
      {/* --- হিরোর নিচের বুলেট পোর্টফোলিও সেকশন --- */}
      <div className="relative z-10 w-full p-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <NavLink to="/services/web-development" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Code className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Web Development</h3>
                  <p className="text-sm text-gray-300">Custom & Scalable Sites</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/services/mobile-app-development" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <AppWindow className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">App Development</h3>
                  <p className="text-sm text-gray-300">iOS, Android & Hybrid</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/services/ui-ux-design" className="block p-3 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <PencilRuler className="w-8 h-8 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">UI/UX Design</h3>
                  <p className="text-sm text-gray-300">Engaging User Experiences</p>
                </div>
              </div>
            </NavLink>

            <NavLink to="/services/web-development" className="flex items-center justify-center p-3 rounded-lg hover:bg-white/10 transition-colors">
               <div className="flex items-center gap-2 font-semibold">
                  View All Services <ArrowRight className="w-5 h-5" />
               </div>
            </NavLink>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;