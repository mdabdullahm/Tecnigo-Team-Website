import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WorkContact = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">Let's start a project together</h2>
                    <ul className="mt-8 space-y-4 text-gray-600">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1">✦</span>
                            <span>Expect a response within 24 hours.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1">✦</span>
                            <span>A dedicated designer will be assigned to your project.</span>
                        </li>
                    </ul>
                    <h3 className="mt-12 text-3xl font-bold">Book a free schedule strategy call.</h3>
                    <button className="mt-6 relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border border-gray-300 overflow-hidden group">
                       <span className="absolute left-0 top-0 w-full h-full bg-blue-600 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                       <span className="relative z-10 group-hover:text-white transition-colors duration-300">Schedule 20 minutes call</span>
                       <ArrowUpRight size={20} className="relative z-10 group-hover:text-white transition-colors duration-300"/>
                    </button>
                </div>

                {/* Right Side Form */}
                <div className="bg-white p-8 rounded-2xl shadow-2xl border">
                    <form className="space-y-6">
                        <input type="text" placeholder="Full Name*" required className="w-full p-3 border-b focus:outline-none focus:border-blue-500" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="email" placeholder="Email*" required className="w-full p-3 border-b focus:outline-none focus:border-blue-500" />
                            <input type="tel" placeholder="Phone (optional)" className="w-full p-3 border-b focus:outline-none focus:border-blue-500" />
                        </div>
                        <textarea placeholder="About project*" rows="4" required className="w-full p-3 border-b focus:outline-none focus:border-blue-500"></textarea>
                        <div className="flex justify-between items-center">
                            <a href="mailto:hello@zaagxd.agency" className="text-sm underline">hello@zaagxd.agency</a>
                            <button type="submit" className="relative bg-blue-600 text-white px-8 py-3 rounded-full font-semibold overflow-hidden group">
                                <span className="absolute left-0 top-0 w-full h-full bg-black transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                                <span className="relative z-10">Submit Now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default WorkContact;