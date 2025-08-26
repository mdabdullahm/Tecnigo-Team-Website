// src/components/home/GetInTouch.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'; // <-- নতুন ইম্পোর্ট

const GetInTouch = () => {
    return (
        <section className="relative h-[150vh] bg-white">
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height: '100vh', position: 'sticky', top: '0' }}>
                <ParallaxBannerLayer speed={-15}>
                    <img 
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Team working" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div> {/* Optional dark overlay */}
                </ParallaxBannerLayer>
                <ParallaxBannerLayer
                    speed={-50}
                    className="flex items-center justify-center text-center"
                >
                    <div>
                        <h2 className="text-7xl md:text-9xl lg:text-[18vw] font-black text-white uppercase leading-none tracking-tighter">
                            Let's Get
                        </h2>
                        <h2 className="text-7xl md:text-9xl lg:text-[18vw] font-black text-white uppercase leading-none tracking-tighter">
                            In Touch
                        </h2>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>

            {/* Content below the parallax section */}
            <div className="relative bg-white z-10 text-center py-16">
                 <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white">
                    <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
                        Let's Talk
                    </span>
                </button>
                <div className="mt-8">
                    <ChevronDown className="mx-auto text-gray-400 animate-bounce" size={32} />
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;