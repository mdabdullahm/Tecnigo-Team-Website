import React from 'react';
import ServicesAccordion from './ServicesAccordion';

const DesignServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* --- মূল রেসপন্সিভ গ্রিড --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column (মোবাইল ও ডেস্কটপ) */}
          <div className="lg:sticky top-28">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-12">
              We offer design
              <br />
              services for you
            </h2>
            <div className="relative">
              <img 
                src="https://i.ibb.co.com/n8498b1S/images.jpg"
                alt="Design tools and assets" 
                className="rounded-2xl w-full shadow-lg"
              />
              {/* Stats Box - এটিও রেসপন্সিভ */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-black text-white p-4 sm:p-6 rounded-2xl shadow-xl flex justify-around items-center text-center">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold">180+</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Project Done</p>
                </div>
                <div className="h-10 sm:h-12 w-px bg-gray-700"></div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold">50+</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Happy Client</p>
                </div>
                <div className="h-10 sm:h-12 w-px bg-gray-700"></div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold">10+</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Creative People</p>
                </div>
                <div className="h-10 sm:h-12 w-px bg-gray-700 hidden sm:block"></div>
                <div className="hidden sm:block">
                  <p className="text-2xl sm:text-3xl font-bold">5+</p>
                  <p className="text-xs text-gray-400">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (মোবাইল ও ডেস্কটপ) */}
          <div className="mt-16 lg:mt-0">
            <p className="text-gray-600 mb-8 leading-relaxed">
              At ZaagXD, we offer a comprehensive range of design and frontend development services, tailored to meet the unique needs of our clients. Our expertise spans across various sectors, including:
            </p>
            <ServicesAccordion />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignServicesSection;