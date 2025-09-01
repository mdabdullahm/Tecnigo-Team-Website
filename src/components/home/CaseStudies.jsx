// src/components/home/CaseStudies.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Pagination সরানো হয়েছে
import Marquee from 'react-fast-marquee';
import 'swiper/css';
import 'swiper/css/pagination';

// ক্লায়েন্ট এবং প্রজেক্টের ডেটা অপরিবর্তিত
const clientLogosRow1 = [{ name: 'Homerun', logo: 'https://i.ibb.co/7xyMtvyk/images.png' }, 
    { name: 'Rakuten Viber', logo: 'https://i.ibb.co/rGzrD9Q4/images-1.png' }, 
    { name: 'Property Finder', logo: 'https://i.ibb.co/CKMDnvQq/images-2.png' }, 
    { name: 'Medease', logo: 'https://i.ibb.co/0RR7VFzy/download.png' },];
const clientLogosRow2 = [{ name: '3asafeer', logo: 'https://i.ibb.co/kgT7GKfw/images.jpg' }, 
    { name: 'Akij Shipping', logo: 'https://i.ibb.co/kV6dR3ct/download-1.png' }, 
    { name: 'Homerun Copy', logo: 'https://i.ibb.co/rRV2DNPr/download.jpg' }, 
    { name: 'Rakuten Viber Copy', logo: 'https://i.ibb.co/nsNTQd9D/images-3.png' },];
const projects = [{ image: 'https://i.ibb.co/Sb9y9xn/download-15.jpg', name: 'Paytro' }, { image: 'https://i.ibb.co/wFncJQJz/download-14.jpg', name: 'Fleet Hub' }, { image: 'https://i.ibb.co/tMX5Fhw0/photo-1634113851708-8060787cb29b.jpg', name: 'IntelliHealth' }, { image: 'https://i.ibb.co/7tknzzmJ/istockphoto-1344939844-612x612.webp', name: 'Fuel Pro' }, { image: 'https://i.ibb.co/TxZCRvJc/images-7.jpg', name: 'Pixel Pulse' }, { image: 'https://i.ibb.co/rRV2DNPr/download.jpg', name: 'Paytro Copy' },];

const CaseStudies = () => {
    return (
        <section className="bg-white py-20 overflow-hidden">
            {/* ক্লায়েন্ট লোগো সেকশন (অপরিবর্তিত) */}
            <div className="container mx-auto px-4">
                <div className="space-y-4">
                    <Marquee gradient={true} gradientColor={[255, 255, 255]} speed={40} direction="left">
                        {[...clientLogosRow1, ...clientLogosRow1].map((client, index) => (
                            <div key={index} className="mx-12 flex items-center justify-center h-16">
                                <img src={client.logo} alt={client.name} className="max-h-12 w-auto object-contain" />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee gradient={true} gradientColor={[255, 255, 255]} speed={40} direction="right">
                        {[...clientLogosRow2, ...clientLogosRow2].map((client, index) => (
                            <div key={index} className="mx-12 flex items-center justify-center h-16">
                                <img src={client.logo} alt={client.name} className="max-h-12 w-auto object-contain" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* কেস স্টাডি স্লাইডার সেকশন */}
            {/* --- সমাধান: mt-20 কে mt-16 করা হয়েছে --- */}
            <div className="mt-16">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto' }}>
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-80 w-auto object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CaseStudies;