import React from 'react';

const LocationSection = () => {
    return (
        <section className="bg-gray-50 pb-24">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold">USA</h3>
                        <p className="mt-2 text-gray-600">Apartment 4, California City, Santa Clara, Postal Code 3716</p>
                        <p className="mt-4 font-semibold text-blue-600">+1 (408) 797 - 4001</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold">Bangladesh</h3>
                        <p className="mt-2 text-gray-600">Level 06, House 05, Road 12, Sector 1, Uttara, Dhaka 1230</p>
                        <p className="mt-4 font-semibold text-blue-600">+880 1711507877</p>
                    </div>
                </div>
                <div className="relative flex justify-center items-center">
                    {/* --- পরিবর্তিত ছবির লিঙ্ক --- */}
                    <img 
                        src="https://i.ibb.co.com/BHYwdW2p/images-3.jpg" 
                        alt="World Map" 
                        className="w-full h-auto" 
                    />
                    
                    {/* অ্যানিমেটেড ডটগুলো */}
                    <div className="absolute top-[35%] left-[15%] w-4 h-4 bg-blue-500 rounded-full animate-pulse-dot"></div>
                    <div className="absolute top-[45%] left-[65%] w-4 h-4 bg-blue-500 rounded-full animate-pulse-dot" style={{animationDelay: '0.5s'}}></div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;