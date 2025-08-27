// src/pages/ContactPage.jsx

import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Mail, Phone, MapPin, Copy, ArrowRight } from 'lucide-react';

// Form Input Component
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
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
        />
    </div>
);

// Form TextArea Component
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
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
        />
    </div>
);

const ContactPage = () => {
    const { setIsCalendlyOpen } = useContext(AppContext);
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Email copied to clipboard!');
    };

    return (
        <section className="bg-white min-h-screen pt-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Information */}
                    <div className="lg:sticky top-28 pb-16">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Let's Create Something Amazing
                            </h1>
                            <p className="mt-4 text-lg text-gray-600">
                                Have an idea? We're here to help you bring it to life. Reach out to us, and let's start the conversation.
                            </p>
                        </div>
                        
                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <Mail className="w-8 h-8 text-red-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Project Inquiries</h3>
                                    <button onClick={() => copyToClipboard('hello@tecnigoxd.agency')} className="text-gray-600 hover:text-red-600 flex items-center gap-2">
                                        hello@tecnigoxd.agency <Copy size={14}/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-8 h-8 text-red-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <a href="tel:+15551234567" className="text-gray-600 hover:text-red-600">+1 (555) 123-4567</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="w-8 h-8 text-red-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Our Studio</h3>
                                    <p className="text-gray-600">123 Design Lane, Creativity City</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                             <h3 className="text-xl font-bold text-gray-800">Schedule a Free Strategy Call</h3>
                             <p className="mt-2 text-gray-600">Book a 30-minute call to discuss your project with our design experts.</p>
                             <button 
                                onClick={() => setIsCalendlyOpen(true)}
                                className="mt-4 flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
                             >
                                Book a Free Call <ArrowRight size={16}/>
                             </button>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 mb-16">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell Us About Your Project</h2>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label="First Name" name="first_name" placeholder="John" required />
                                <FormInput label="Last Name" name="last_name" placeholder="Doe" required />
                            </div>
                            <FormInput label="Email" type="email" name="email" placeholder="you@example.com" required />
                            <FormInput label="Company Website" name="website" placeholder="https://yourcompany.com" />
                            <FormTextarea label="What can we help you with?" name="message" placeholder="Describe your project, goals, and challenges." required />

                            <div>
                                <button type="submit" className="w-full bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-transform duration-300 transform hover:scale-105">
                                    Send Inquiry
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;