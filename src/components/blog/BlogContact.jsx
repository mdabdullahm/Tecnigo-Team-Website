// src/components/blog/BlogContact.jsx

import React from 'react';

const BlogContact = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Let's start a project together
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg">
                            We are available for a friendly chat to discuss your business needs, no obligation.
                        </p>
                        <ul className="mt-8 space-y-4 text-gray-700">
                            <li className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>We will send you a short proposal with a timeline and budget.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>Expect a response within 24 hours.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>A dedicated designer will be assigned to your project.</span>
                            </li>
                        </ul>
                        <button className="mt-10 border border-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                            Schedule 20 minutes call
                        </button>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                                <input type="text" name="name" id="name" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" id="email" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" name="phone" id="phone" className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number" />
                            </div>
                             <div>
                                <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-1">Services <span className="text-red-500">*</span></label>
                                <select id="services" name="services" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white">
                                    <option>Select service</option>
                                    <option>Software Development</option>
                                    <option>Mobile App Development</option>
                                    <option>UI/UX Design</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                                <textarea name="message" id="message" rows="4" required className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Message"></textarea>
                            </div>
                            <div className="text-xs text-gray-500">
                                <p>I consent to the processing of my personal data to ZAAG Systems for Project purposes. For more information, please refer to our <a href="#" className="underline hover:text-blue-600">privacy policy</a>.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm">Hate contact forms? <br/> <a href="mailto:business@zaagsys.com" className="font-semibold text-blue-600 hover:underline">business@zaagsys.com</a></p>
                                <button type="submit" className="bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogContact;