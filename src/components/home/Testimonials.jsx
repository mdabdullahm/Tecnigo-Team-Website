// src/components/home/Testimonials.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const ClutchLogo = (props) => ( <svg viewBox="0 0 133 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M16.14 3.79a14.2 14.2 0 00-14.2 14.2v6.62h6.62v-6.62a7.58 7.58 0 0115.16 0v6.62h6.62v-6.62a14.2 14.2 0 00-14.2-14.2zM45.54 3.79a14.2 14.2 0 00-14.2 14.2v6.62h6.62v-6.62a7.58 7.58 0 0115.16 0v6.62h6.62v-6.62a14.2 14.2 0 00-14.2-14.2zM74.94 3.79a14.2 14.2 0 00-14.2 14.2v6.62h21.12v-6.62a14.2 14.2 0 00-6.92-14.2zm0 13.24a7.58 7.58 0 01-7.58-7.58 7.58 7.58 0 017.58-7.58 7.58 7.58 0 017.58 7.58 7.58 7.58 0 01-7.58-7.58zM104.34 3.79a14.2 14.2 0 00-14.2 14.2v6.62h6.62V18a7.58 7.58 0 1115.16 0v6.62h6.62v-6.62a14.2 14.2 0 00-14.2-14.2zM127.14 3.79h-6.62v21.12h6.62V3.79z" fill="#000"/></svg> );
const GoodfirmsLogo = (props) => ( <svg viewBox="0 0 130 25" {...props}><text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#007bff">GoodFirms</text></svg> );
const DesignRushLogo = (props) => ( <svg viewBox="0 0 160 30" {...props}><text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#000">DESIGN<tspan fill="#00c4a4">RUSH</tspan></text></svg> );
const GoogleLogo = (props) => ( <svg viewBox="0 0 75 25" {...props}><g fill="#4285F4"><path d="M72.4 12.3c0-.8-.1-1.5-.2-2.2H37.5v4.2h19.6c-.8 2.7-3.3 4.7-6.5 4.7-3.9 0-7-3.1-7-7s3.1-7 7-7c2.2 0 3.7 1 4.6 1.9l3.3-3.2C48.5 2.2 43.5 0 37.5 0 28.1 0 21 7.1 21 15s7.1 15 16.5 15c9.2 0 16.2-6.4 16.2-16.5.1-.7 0-1.2 0-1.2z"/></g><g fill="#EA4335"><path d="M43.9 19c-3.9 0-7-3.1-7-7s3.1-7 7-7c1.9 0 3.6.7 4.9 2l-3.3 3.1c-.5-.5-1.3-.8-2-.8-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2c1.7 0 2.5-1.1 2.6-2.1h-4.7v-4.2h7.8v9.3c-1.4 1.6-3.4 2.5-5.6 2.5z"/></g><g fill="#FBBC05"><path d="M14.9 19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm0-11.5c-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2 3.1-1.4 3.1-3.2-1.4-3.2-3.1-3.2z"/></g><g fill="#34A853"><path d="M3.5 19V7.5h4.2v11.5H3.5z"/></g></svg> );

const Testimonials = () => {
    return (
        <section className="bg-[#f8f9fa] py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center md:text-left mb-6 md:mb-0">
                        Real Feedback from Our <br /> Software Development Clients
                    </h2>
                    <div className="flex gap-4">
                        <button className="h-14 w-14 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"><FiArrowLeft size={24} /></button>
                        <button className="h-14 w-14 flex items-center justify-center rounded-full border-2 border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"><FiArrowRight size={24} /></button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Image Card */}
                    <div className="w-full lg:w-1/3">
                        <img 
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800" 
                            alt="James Mid" 
                            className="rounded-3xl shadow-xl w-full h-full object-cover" 
                        />
                    </div>
                    {/* Text Card */}
                    <div className="w-full lg:w-2/3 bg-white p-10 lg:p-12 rounded-3xl shadow-xl border border-gray-200/50 flex flex-col">
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <ClutchLogo className="h-7 text-black" />
                                <span className="text-2xl font-bold text-gray-800">5.0</span>
                                <div className="flex text-orange-400 text-xl">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
                            </div>
                            <blockquote className="text-2xl font-semibold text-gray-800 leading-snug">
                                "A standout IT company in providing tailored solutions that align with client objectives and drive success."
                            </blockquote>
                        </div>
                        
                        <div className="flex-grow my-6">
                            <p className="text-gray-600 leading-relaxed text-base">
                                Zaag efforts improved efficiency metrics, reduced processing time, and increased task completion rates and cost savings. Their project management was highly effective and customer-centric. They consistently delivered items on time and maintained open and transparent communication Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, excepturi, magni hic sint nihil vitae fuga, corrupti esse eius repudiandae placeat cupiditate ex. Officiis blanditiis voluptatem adipisci fugiat sunt, assumenda odio possimus ex labore ullam aspernatur incidunt provident repellat asperiores, qui consectetur iure explicabo inventore nisi rem, sit ab. Dignissimos.
                            </p>
                        </div>

                        <cite className="mt-auto block font-semibold text-gray-800 not-italic">
                            James Mid, <span className="text-gray-500 font-normal">Project Manager, Frankfurt Rhein Main GmbH</span>
                        </cite>
                    </div>
                </div>

                {/* --- রেটিং কার্ডগুলো এখানে সঠিকভাবে যোগ করা হয়েছে --- */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100/80">
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">REVIEWED ON</p>
                        <ClutchLogo className="h-8 mx-auto mb-3 text-black" />
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex text-lg text-red-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/></div>
                            <span className="text-xl font-bold text-gray-800 ml-2">4.8</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100/80">
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">REVIEWED ON</p>
                        <GoodfirmsLogo className="h-8 mx-auto mb-3" />
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex text-lg text-red-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                            <span className="text-xl font-bold text-gray-800 ml-2">5.0</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100/80">
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">REVIEWED ON</p>
                        <DesignRushLogo className="h-8 mx-auto mb-3" />
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex text-lg text-red-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/></div>
                            <span className="text-xl font-bold text-gray-800 ml-2">4.8</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-lg border border-gray-100/80">
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">REVIEWED ON</p>
                        <GoogleLogo className="h-8 mx-auto mb-3" />
                        <div className="flex justify-center items-center gap-2">
                            <div className="flex text-lg text-red-500"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-gray-300"/></div>
                            <span className="text-xl font-bold text-gray-800 ml-2">4.9</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;