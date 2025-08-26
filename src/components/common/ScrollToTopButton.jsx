// src/components/common/ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(progress);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const waveHeight = 100 - scrollProgress;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-black shadow-lg border-2 border-white/20 transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
        >
            <div className="relative w-full h-full overflow-hidden rounded-full">
                {/* The Wave Container */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-red-500"
                    style={{
                        height: `calc(100% + 20px)`, // Extra height for the wave shape
                        transform: `translateY(${waveHeight}%)`,
                        transition: 'transform 0.1s linear',
                    }}
                >
                    {/* SVG for the wave shape */}
                    <div className="absolute top-0 left-[-50%] w-[200%] h-5">
                        <svg viewBox="0 0 100 20" className="w-full h-full wave-animation" preserveAspectRatio="none">
                            <path d="M0,10 C15,20 35,0 50,10 C65,20 85,0 100,10 L100,20 L0,20 Z" fill="#ec4899"></path>
                        </svg>
                    </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <ChevronUp className="w-8 h-8 text-white" />
                </div>
            </div>
        </button>
    );
};

export default ScrollToTopButton;