// src/components/home/FinalCta.jsx

import React, { useContext } from 'react'; // <-- useContext ইম্পোর্ট করুন
import { AppContext } from '../../AppContext'; // <-- AppContext ইম্পোর্ট করুন
import FallingLines from '../common/FallingLines';

const FinalCta = () => {
    const { setIsContactPopupOpen } = useContext(AppContext); // <-- context থেকে ফাংশনটি নিন

    return (
        <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
            {/* --- অ্যানিমেটেড ব্যাকগ্রাউন্ড --- */}
            <FallingLines />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* --- আইকন --- */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/50">
                            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                        Have a Project in Mind? Let's Build It Together.
                    </h2>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                        Whether you're a startup with a big idea or an established business looking to innovate, our team is ready to help you achieve your goals. Schedule a free consultation to discuss your project.
                    </p>
                    
                    {/* --- NavLink কে button দিয়ে প্রতিস্থাপন করা হয়েছে --- */}
                    <button
                        onClick={() => setIsContactPopupOpen(true)} // <-- onClick ইভেন্ট যোগ করা হয়েছে
                        className="mt-10 inline-block bg-red-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                        Get Your Free Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCta;