import React from 'react';
import { ArrowUpRight, Copy } from 'lucide-react';
import ClientLogos from '../components/uiux/ClientLogos';
// --- ভুল import লাইনটি পরিবর্তন করে সঠিকটি যোগ করা হয়েছে ---
import LocationSection from '../components/uiux/LocationSection'; 

const ContactPage = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Email copied to clipboard!');
    };

    return (
        <div className="bg-white">
            {/* --- Main Contact Section --- */}
            <section className="py-24">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Text and Info */}
                    <div className="lg:sticky top-28">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
                            Let's start a project <span className="text-gray-300">to<span className='text-red-500'>g</span>ether</span>
                        </h1>
                        <ul className="mt-8 space-y-4 text-gray-600">
                            <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><span>Expect a response within 24 hours.</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><span>NDA signing available upon request.</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><span>A dedicated designer will be assigned to your project.</span></li>
                            <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✦</span><span>We'll outline a clear project roadmap for you.</span></li>
                        </ul>
                        <h3 className="mt-16 text-3xl font-bold">Book a free schedule strategy call.</h3>
                        <button className="mt-6 relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border border-gray-300 overflow-hidden group">
                           <span className="absolute left-0 top-0 w-full h-full bg-blue-600 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                           <span className="relative z-10 group-hover:text-white transition-colors duration-300">Schedule 20 minutes call</span>
                           <ArrowUpRight size={20} className="relative z-10 group-hover:text-white transition-colors duration-300"/>
                        </button>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                        <form className="space-y-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                                <input type="text" placeholder="Enter your name" required className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                    <input type="email" placeholder="Enter your email" required className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                                    <input type="tel" placeholder="Enter your phone" className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                                    <select className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                        <option>Google Search</option>
                                        <option>Social Media</option>
                                        <option>Referral</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Project budget?</label>
                                     <select className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                                        <option>$200 - $699</option>
                                        <option>$1000 - $4999</option>
                                        <option>$5000+</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">About project*</label>
                                <textarea placeholder="Describe your project" rows="4" required className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
                                <div className="text-center sm:text-left mb-4 sm:mb-0">
                                    <p className="text-sm text-gray-500">Hate contact forms?</p>
                                    <button 
                                        type="button" 
                                        onClick={() => copyToClipboard('hello@zaagxd.agency')} 
                                        className="font-semibold text-gray-800 hover:text-blue-600 flex items-center gap-2"
                                    >
                                        hello@zaagxd.agency <Copy size={16} />
                                    </button>
                                </div>
                                <button type="submit" className="relative bg-blue-600 text-white px-8 py-3 rounded-full font-semibold overflow-hidden group w-full sm:w-auto">
                                    <span className="absolute left-0 top-0 w-full h-full bg-black transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                                    <span className="relative z-10">Submit Now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            <div className="bg-gray-50 pt-12">
                <ClientLogos />
                <LocationSection />
            </div>
        </div>
    );
};

export default ContactPage;