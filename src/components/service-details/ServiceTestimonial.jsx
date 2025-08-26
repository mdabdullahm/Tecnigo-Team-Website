// src/components/service-details/ServiceTestimonial.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

// Swiper এর CSS ফাইলগুলো ইম্পোর্ট করতে হবে
import 'swiper/css';
import 'swiper/css/pagination';

// Testimonial ডেটা
const testimonialsData = [
    {
        quote: "ZAAG Systems' software development undergoes rigorous QA, ensuring top-notch quality. It's a pleasure to be a part of their journey.",
        name: 'Daniel Carter',
        role: 'QA Analyst',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 5,
    },
    {
        quote: "The front-end developers we hired through ZAAG were exceptional. They integrated seamlessly with our team and delivered outstanding results ahead of schedule.",
        name: 'Jessica Miller',
        role: 'Project Manager, TechSolutions',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 5,
    },
    {
        quote: "Their recruitment process is incredibly efficient. We found the perfect back-end engineer in less than a week. Highly recommended for staff augmentation.",
        name: 'Michael Chen',
        role: 'CTO, Innovate Co.',
        image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 5,
    }
];

const ServiceTestimonial = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ 
                        clickable: true,
                        el: '.service-testimonial-pagination' // কাস্টম পেজিনেশন ক্লাস
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {testimonialsData.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center max-w-4xl mx-auto">
                                <Quote className="w-16 h-16 text-blue-200 mx-auto mb-6 transform -scale-x-100" />
                                
                                <blockquote className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="mt-8 flex justify-center items-center flex-col">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                        className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
                                    />
                                    <cite className="font-bold text-gray-900 text-lg not-italic">{testimonial.name}</cite>
                                    <p className="text-gray-500">{testimonial.role}</p>
                                    <div className="flex justify-center mt-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* কাস্টম পেজিনেশন কন্টেইনার */}
                <div className="service-testimonial-pagination text-center mt-10" />
            </div>
        </section>
    );
};

export default ServiceTestimonial;