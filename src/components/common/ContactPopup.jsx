// src/components/common/ContactPopup.jsx
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const ContactPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [activeService, setActiveService] = useState('Hire Staff');
    const services = ['Hire Staff', 'Software Development', 'Mobile Application', 'Experience Design'];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999] p-4" 
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-5xl relative animate-fade-in-up max-h-[95vh] flex overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* --- Left Side: Image --- */}
                <div className="hidden lg:block lg:w-1/2">
                    <img 
                        src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Team discussion"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* --- Right Side: Form --- */}
                <div className="w-full lg:w-1/2 p-8 sm:p-12 overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors z-10"
                    >
                        <FiX size={24} />
                    </button>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        How can we help you?
                    </h2>
                    <p className="mt-4 text-gray-600">
                        You can reach us anytime via <a href="mailto:business@zaagsys.com" className="font-semibold text-blue-600 hover:underline">business@zaagsys.com</a>
                    </p>

                    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                        <div>
                            <div className="flex flex-wrap gap-3">
                                {services.map(service => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => setActiveService(service)}
                                        className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
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
                        
                        <div>
                            <label htmlFor="popup-name" className="block text-sm font-semibold text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                            <input type="text" id="popup-name" placeholder="Write your name" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="popup-email" className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                            <input type="email" id="popup-email" placeholder="Write your email" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="popup-phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                            <div className="flex">
                                <select className="px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none">
                                    <option>BD +880</option><option>US +1</option><option>UK +44</option>
                                </select>
                                <input type="tel" id="popup-phone" placeholder="Write your number" required className="block w-full px-4 py-3 border border-gray-300 rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="popup-message" className="block text-sm font-semibold text-gray-700 mb-2">How can we help you? <span className="text-red-500">*</span></label>
                            <textarea id="popup-message" rows="4" placeholder="Start typing here" required className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
                                Submit & Schedule Meeting
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;