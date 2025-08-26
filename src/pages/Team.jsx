// src/pages/Team.jsx

import React, { useRef } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper এর CSS ফাইলগুলো
import 'swiper/css';
import 'swiper/css/navigation';

// --- ডেটাবেস ---

const galleryImages = [
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg',
    'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
];

const leadersData = [
    {
        name: 'Zaber Ahmed',
        role: 'Co-Founder & Chairman',
        image: 'https://i.ibb.co/hL4gYqT/zaber-ahmed.png',
        linkedin: '#',
    },
    {
        name: 'Bahauddin Arafat',
        role: 'Co-Founder & Managing Director',
        image: 'https://i.ibb.co/GvxY2kL/bahauddin-arafat.png',
        linkedin: '#',
    },
    {
        name: 'MD. Aminul Islam Khan',
        role: 'Co-Founder & Director of Operations',
        image: 'https://i.ibb.co/6P6X22Z/aminul-islam.png',
        linkedin: '#',
    },
    {
        name: 'M Jahangir Alam',
        role: 'Director',
        image: 'https://i.ibb.co/xJ0z6z4/jahangir-alam.png',
        linkedin: '#',
    },
    {
        name: 'Kazi Abdullah Al Mamun',
        role: 'Director',
        image: 'https://i.ibb.co/fQ1T8w2/kazi-abdullah.png',
        linkedin: '#',
    },
];

const cultureImages = [
    'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
];

// --- কম্পונেন্টস ---

const LeaderCard = ({ name, role, image, linkedin }) => (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200/80 h-full">
        <div className="overflow-hidden aspect-w-1 aspect-h-1">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-500 mt-1">{role}</p>
        </div>
        <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-300 shadow-lg"
        >
            <FaLinkedinIn size={24} />
        </a>
    </div>
);

// --- মূল Team পেজ কম্পונেন্ট ---

const Team = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className="bg-white">
            {/* --- Image Gallery Section --- */}
            <section className="pt-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="grid gap-4"><div className="aspect-w-3 aspect-h-4"><img className="h-full w-full object-cover rounded-lg shadow-md" src={galleryImages[0]} alt="Team working" /></div><div className="aspect-w-3 aspect-h-2"><img className="h-full w-full object-cover rounded-lg shadow-md" src={galleryImages[1]} alt="Team meeting" /></div></div>
                        <div className="grid gap-4"><div className="aspect-w-3 aspect-h-2"><img className="h-full w-full object-cover rounded-lg shadow-md" src={galleryImages[2]} alt="Team brainstorming" /></div><div className="aspect-w-3 aspect-h-4"><img className="h-full w-full object-cover rounded-lg shadow-md" src={galleryImages[3]} alt="Team discussion" /></div></div>
                        <div className="grid gap-4"><div className="aspect-w-3 aspect-h-4"><img className="h-full w-full object-cover rounded-lg shadow-md" src={galleryImages[4]} alt="Team collaboration" /></div><div className="aspect-w-3 aspect-h-2"><img className="h-full w-full object-cover rounded-lg shadow-md" src={galleryImages[5]} alt="Team playing" /></div></div>
                    </div>
                </div>
            </section>

            {/* --- Mission Statement Section --- */}
            <section className="py-20">
                <div className="container mx-auto px-4"><div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-10 md:p-16"><span className="absolute top-6 left-6 text-3xl text-blue-300 opacity-50">+</span><span className="absolute bottom-6 right-6 text-3xl text-blue-300 opacity-50">x</span><span className="absolute top-1/2 -left-4 w-8 h-8 bg-purple-200 rounded-full opacity-50"></span><span className="absolute top-1/4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-50"></span><div className="relative text-center max-w-4xl mx-auto"><p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed">We take pride in being makers of exceptional digital experiences. Our team is composed of passionate individuals who are driven to create innovative solutions and deliver outstanding results. With expertise in various disciplines, we collaborate seamlessly to bring our clients' visions to life.</p></div></div></div>
            </section>

            {/* --- Meet The Leaders Section with Slider --- */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 md:mb-0">
                            Meet The <span className="text-blue-600">Leaders</span>
                        </h2>
                        <div className="flex gap-4">
                            <button ref={navigationPrevRef} className="h-14 w-14 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"><FiArrowLeft size={24} /></button>
                            <button ref={navigationNextRef} className="h-14 w-14 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"><FiArrowRight size={24} /></button>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        className="!pb-2" // Adding a little padding bottom for shadow visibility
                    >
                        {leadersData.map((leader, index) => (
                            <SwiperSlide key={index} className="h-auto pb-4">
                                <LeaderCard {...leader} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* --- Our Culture Section --- */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12"><h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Culture</h2></div>
                    <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16 max-w-5xl mx-auto"><p className="text-center text-gray-600 leading-relaxed text-lg">Join ZAAG Systems Ltd. and experience our vibrant team culture firsthand. We foster a collaborative and inclusive environment where innovation thrives. Our dedicated professionals are passionate about their work and strive for excellence in everything they do. At ZAAG, we embrace diversity, value each team member's contribution, and promote a healthy work-life balance. Together, we create a dynamic and supportive community that fuels our success and delivers exceptional results to our clients.</p></div>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cultureImages.map((src, index) => (
                            <div key={index} className="aspect-w-3 aspect-h-4"><img src={src} alt={`Culture image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" /></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;