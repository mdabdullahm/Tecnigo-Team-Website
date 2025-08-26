// src/components/common/CalendlyPopup.jsx

import React from 'react';
import { InlineWidget } from 'react-calendly';
import { FiX } from 'react-icons/fi';

const CalendlyPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999]">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-auto max-h-[90vh] relative animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-all shadow-lg"
                >
                    <FiX size={24} />
                </button>
                <div className="h-[75vh] overflow-y-auto">
                    <InlineWidget 
                        url="https://calendly.com/zaagsys/30min" // <-- আপনার Calendly লিঙ্ক এখানে দিন
                        styles={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendlyPopup;