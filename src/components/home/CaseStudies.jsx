// src/components/home/CaseStudies.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

// এখানে আপনার সেরা প্রজেক্টগুলোর ডেটা দিন
const projects = [
    { 
        image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        title: 'Fintech Mobile App', 
        category: 'UI/UX Design',
        description: 'A revolutionary mobile banking application designed to simplify personal finance management with an intuitive user interface.',
        link: '/projects'
    },
    { 
        image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        title: 'E-commerce Platform', 
        category: 'Web Development',
        description: 'A scalable and feature-rich e-commerce website that boosted client sales by over 300% in the first quarter.',
        link: '/projects'
    },
    { 
        image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        title: 'SaaS Dashboard', 
        category: 'Product Design',
        description: 'An analytical dashboard for a SaaS product, providing users with actionable insights through powerful data visualization.',
        link: '/projects'
    },
    { 
        image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        title: 'Corporate Website Redesign', 
        category: 'Branding & Web',
        description: 'A complete overhaul of a corporate website, resulting in a 150% increase in user engagement and lead generation.',
        link: '/projects'
    },
];

const CaseStudies = () => {
  return (
    <section className="bg-gray-900 py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our Featured Case Studies</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore how we've helped businesses like yours achieve their goals through innovative design and development.
          </p>
        </div>
      </div>
      
      <div className="!px-4 md:!px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3.5, centeredSlides: false },
          }}
          pagination={{ clickable: true, el: '.case-studies-pagination' }}
          className="!overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group rounded-2xl overflow-hidden h-full flex flex-col bg-gray-800 border border-gray-700/50 shadow-lg">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm font-semibold text-red-400 mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold mb-3 min-h-[56px]">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3 mb-6 flex-grow">{project.description}</p>
                  <NavLink to={project.link} className="mt-auto flex items-center gap-2 text-red-400 font-semibold group-hover:text-white transition-colors duration-300">
                    View Case Study <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="case-studies-pagination text-center mt-12" />
    </section>
  );
};

export default CaseStudies;