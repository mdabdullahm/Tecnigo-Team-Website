// src/components/home/CaseStudies.jsx
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
    { image: 'https://i.ibb.co.com/Sb9y9xn/download-15.jpg', title: 'Paytro', description: 'Paytro is more than just a personal finance app—it’s a complete financial ally for...' },
    { image: 'https://i.ibb.co.com/wFncJQJz/download-14.jpg', title: 'Fleet Hub', description: 'Fleet Hub is an intelligent, all-in-one fleet management software solution built to optimize your operations...' },
    { image: 'https://i.ibb.co.com/tMX5Fhw0/photo-1634113851708-8060787cb29b.jpg', title: 'IntelliHealth: AI-Powered...', description: 'IntelliHealth is an innovative health-tech website built to revolutionize online healthcare access...' },
    { image: 'https://i.ibb.co.com/7tknzzmJ/istockphoto-1344939844-612x612.webp', title: 'Fuel Pro', description: 'Fuel Pro is a dynamic fuel management web application developed by Zaag...' },
    { image: 'https://i.ibb.co.com/TxZCRvJc/images-7.jpg', title: 'Pixel Pulse', description: 'Pixel Pulse is a powerful and intelligent web application tailored for digital agencies...' },
    { image: 'https://i.ibb.co.com/h1RqRqCY/download-13.jpg', title: 'Paytro (Copy)', description: 'Paytro is more than just a personal finance app—it’s a complete financial ally for...' },
    { image: 'https://i.ibb.co.com/KpYZkN60/images-8.jpg', title: 'Fleet Hub (Copy)', description: 'Fleet Hub is an intelligent, all-in-one fleet management software solution built to...' },
];

const CaseStudies = () => {
  return (
    <section className="bg-[#001f55] py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Discover Our Featured Case Studies</h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
            Explore how our expertise and innovative solutions deliver impactful results...
          </p>
        </div>
      </div>
      
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5, centeredSlides: false },
          }}
          pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
          className="!overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-top rounded-t-lg transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-[#002a75] rounded-b-lg flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 min-h-[56px]">{project.title}</h3>
                  <p className="text-blue-200 text-sm line-clamp-3">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="swiper-custom-pagination text-center mt-10" />
    </section>
  );
};

export default CaseStudies;