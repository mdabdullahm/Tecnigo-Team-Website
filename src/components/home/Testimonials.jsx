// src/components/home/Testimonials.jsx

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonialsData = [
    {
        quote: "Tecnigo Team transformed our vision into a stunning reality. Their attention to detail and commitment to quality is unparalleled. We couldn't be happier with the final product.",
        name: 'Alex Johnson',
        role: 'CEO, Innovate Inc.',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 5,
    },
    {
        quote: "Working with this team was a game-changer for our business. Their agile approach and transparent communication made the entire process seamless and enjoyable. Highly recommended!",
        name: 'Sarah Chen',
        role: 'Founder, MarketBoost',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 5,
    },
    {
        quote: "Their technical expertise and problem-solving skills are top-notch. They delivered a complex project on time and within budget, exceeding all our expectations.",
        name: 'David Lee',
        role: 'CTO, Tech Solutions',
        image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 5,
    }
];

const Testimonials = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        What Our Partners Say
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We take pride in building strong, lasting relationships with our clients.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        className="!pb-16"
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100/80 text-center">
                                    <div className="flex justify-center text-red-500 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} size={24}/>)}
                                    </div>
                                    <blockquote className="text-xl md:text-2xl font-medium text-gray-700 leading-snug">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="mt-8">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name} 
                                            className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-md"
                                        />
                                        <cite className="font-bold text-gray-900 text-lg not-italic">{testimonial.name}</cite>
                                        <p className="text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    {/* Navigation Buttons */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                        <button ref={navigationPrevRef} className="h-14 w-14 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300 shadow-md">
                            <FiArrowLeft size={24} />
                        </button>
                        <button ref={navigationNextRef} className="h-14 w-14 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300 shadow-md">
                            <FiArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;