import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const AnimatedScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(progress);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        >
            <div className="relative w-full h-full overflow-hidden rounded-full">
                {/* ঢেউয়ের কন্টেইনার */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-blue-500"
                    style={{
                        height: `calc(100% + 25px)`, // উচ্চতা বাড়ানো হয়েছে
                        transform: `translateY(${waveHeight}%)`,
                        transition: 'transform 0.1s linear',
                    }}
                >
                    {/* ঢেউয়ের আকৃতির জন্য SVG */}
                    <div className="absolute top-0 left-[-50%] w-[200%] h-7"> {/* উচ্চতা h-5 থেকে h-7 */}
                        <svg viewBox="0 0 100 28" className="w-full h-full wave-animation" preserveAspectRatio="none"> {/* viewBox আপডেট */}
                            <path 
                                d="M0,15 C15,30 35,0 50,15 C65,30 85,0 100,15 L100,28 L0,28 Z" /* path data আপডেট */
                                fill="#0052D4" /* উজ্জ্বল নীল রঙ */
                            />
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

export default AnimatedScrollButton;