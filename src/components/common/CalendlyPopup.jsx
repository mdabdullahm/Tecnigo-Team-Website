// src/components/common/CalendlyPopup.jsx

import React from 'react';
import { InlineWidget } from 'react-calendly';
import { FiX } from 'react-icons/fi';

const CalendlyPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999] p-4"
            onClick={onClose}
        >
            {/* --- সমাধান: এখানে h-[75vh] ক্লাস যোগ করা হয়েছে --- */}
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full sm:h-[75vh] max-h-[90vh] relative animate-fade-in flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 sm:top-2 sm:right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-all shadow-lg z-10"
                >
                    <FiX size={24} />
                </button>

                <div className="flex-grow overflow-hidden rounded-lg">
                    <InlineWidget 
                        url="https://calendly.com/zaagsys/30min" // <-- আপনার Calendly লিঙ্ক
                        styles={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendlyPopup;