import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Swiper এর CSS ফাইলগুলো ইম্পোর্ট করুন
import 'swiper/css';
import 'swiper/css/effect-fade';

// ক্যারোসেলের জন্য ইমেজ
const heroImages = [
  'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const UiUxHero = () => {
  return (
    <section className="bg-white pt-16 pb-12 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight max-w-4xl mx-auto">
          Innovating User Experiences
          <br />
          with a UI / UX Design Agency
        </h1>

        {/* --- ইমেজ ক্যারোসেল --- */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            effect={'fade'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="rounded-2xl shadow-xl"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Hero image ${index + 1}`} className="w-full h-auto object-cover aspect-[16/9]" />
              </SwiperSlide>
            ))}
            
            {/* ভিডিওতে দেখানো টেক্সট এবং ডট */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 z-10">
                <div className="w-4 h-4 bg-white rounded-full mb-4"></div>
                <p className="text-4xl md:text-5xl font-bold">We are a global</p>
                <p className="text-4xl md:text-5xl font-bold">UX/UI design agency</p>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UiUxHero;