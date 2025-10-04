import { FiX } from 'react-icons/fi';

const CompanyProfilePopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will get back to you shortly.');
        onClose(); 
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[999]" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 m-4 relative animate-fade-in-up" 
                onClick={(e) => e.stopPropagation()} 
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <FiX size={24} />
                </button>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Please fill in your details</h2>
                <p className="text-gray-500 mb-6">We will send the company profile to your email.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            required
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                            <select className="px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 focus:outline-none">
                                <option>BD +880</option>
                                <option>US +1</option>
                                <option>UK +44</option>
                            </select>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="1712345678" 
                                required 
                                className="block w-full px-4 py-3 border border-gray-300 rounded-r-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CompanyProfilePopup;