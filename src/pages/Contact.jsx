// src/pages/Contact.jsx

import React, { useState } from 'react';

// Input Field Component
const FormInput = ({ label, type = 'text', name, placeholder, required = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
    </div>
);

// TextArea Component
const FormTextarea = ({ label, name, placeholder, required = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={name}
            name={name}
            rows="5"
            placeholder={placeholder}
            required={required}
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
    </div>
);


const Contact = () => {
    const [activeService, setActiveService] = useState('Hire Staff');

    const services = ['Hire Staff', 'Software Development', 'Mobile Application', 'Experience Design'];

    return (
        <section className="bg-white min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: Image */}
                <div className="hidden lg:block h-screen sticky top-0">
                    <img 
                        src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Modern office building"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="py-16 px-6 sm:px-12 lg:px-16">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            How can we help you?
                        </h2>
                        <p className="mt-4 text-gray-600">
                            You can reach us anytime via <a href="mailto:business@zaagsys.com" className="font-semibold text-blue-600 hover:underline">business@zaagsys.com</a>
                        </p>

                        <form className="mt-12 space-y-8">
                            <div>
                                <div className="flex flex-wrap gap-4">
                                    {services.map(service => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => setActiveService(service)}
                                            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                                                activeService === service 
                                                ? 'bg-blue-600 text-white shadow-lg' 
                                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                                            }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <FormInput label="Name" name="name" placeholder="Write your name" required />
                            <FormInput label="Email" type="email" name="email" placeholder="Write your email" required />
                            
                            {/* Phone Number with Country Code */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <div className="flex">
                                    <select className="px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none">
                                        <option>BD +880</option>
                                        <option>US +1</option>
                                        <option>UK +44</option>
                                    </select>
                                    <input type="tel" id="phone" name="phone" placeholder="Write you number" required className="block w-full px-4 py-3 border border-gray-300 rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>
                            </div>

                            <FormInput label="Company" name="company" placeholder="Your company name" />
                            <FormInput label="Number of staff required" type="number" name="staff_count" placeholder="Number of stuff required" />
                            <FormTextarea label="How can we help you?" name="message" placeholder="Start typing here" required />

                            <div>
                                <button type="submit" className="w-full bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
                                    Submit & Schedule Meeting
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;