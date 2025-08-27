// src/pages/Contact.jsx

import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Mail, Phone, MapPin, Copy } from 'lucide-react';

// Input Field Component (অপরিবর্তিত)
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

// TextArea Component (অপরিবর্তিত)
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

const Contact = () => {
    const { setIsCalendlyOpen } = useContext(AppContext);
    const [activeService, setActiveService] = useState('Software Development');

    const services = ['Software Development', 'Mobile App', 'UI/UX Design', 'Hire Staff'];
    
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Email copied to clipboard!');
    };

    return (
        <section className="bg-white min-h-screen pt-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* --- সমাধান: এই div-এ pb-16 ক্লাস যোগ করা হয়েছে --- */}
                    <div className="lg:sticky top-28 pb-16">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Get in Touch
                            </h1>
                            <p className="mt-4 text-lg text-gray-600">
                                We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                            </p>
                        </div>
                        
                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <Mail className="w-8 h-8 text-red-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                                    <button onClick={() => copyToClipboard('contact@tecnigoteam.com')} className="text-gray-600 hover:text-red-600 flex items-center gap-2">
                                        contact@tecnigoteam.com <Copy size={14}/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-8 h-8 text-red-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                                    <a href="tel:+15551234567" className="text-gray-600 hover:text-red-600">+1 (555) 123-4567</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="w-8 h-8 text-red-600" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                    <p className="text-gray-600">123 Tech Avenue, Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                             <h3 className="text-xl font-bold text-gray-800">Schedule a Meeting</h3>
                             <p className="mt-2 text-gray-600">Prefer a face-to-face (virtual) chat? Book a free 30-minute consultation call with us.</p>
                             <button 
                                onClick={() => setIsCalendlyOpen(true)}
                                className="mt-4 bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
                             >
                                Book an Appointment
                             </button>
                        </div>
                    </div>

                    {/* Right Side: Form (অপরিবর্তিত) */}
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 mb-16">
                        <form className="space-y-8">
                             <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">I'm interested in...</label>
                                <div className="flex flex-wrap gap-3">
                                    {services.map(service => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => setActiveService(service)}
                                            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                                                activeService === service 
                                                ? 'bg-red-600 text-white shadow-md' 
                                                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
                                            }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <FormInput label="Full Name" name="name" placeholder="John Doe" required />
                            <FormInput label="Email" type="email" name="email" placeholder="you@example.com" required />
                            <FormInput label="Company Name" name="company" placeholder="Your Company Inc." />
                            <FormTextarea label="Tell us about your project" name="message" placeholder="What are you looking to build?" required />

                            <div>
                                <button type="submit" className="w-full bg-gray-900 text-white font-bold px-8 py-4 rounded-full hover:bg-black transition-transform duration-300 transform hover:scale-105">
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

export default Contact;