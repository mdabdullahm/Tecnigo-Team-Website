import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

// ক্লায়েন্টদের ডেটা
const clients = [
  {
    name: 'Momor Lisa',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Walter Rhoddy',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'James Mid',
    role: 'Project Manager',
    image: 'https://i.ibb.co.com/VpgNqZgp/images-9.jpg'
  },
];

const HeroSection = () => {
  const { setIsCalendlyOpen, setIsProfilePopupOpen } = useContext(AppContext);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        
        {/* --- নতুন ইন্টারঅ্যাক্টিভ ক্লায়েন্ট সেকশন --- */}
        <div className="relative flex justify-center items-center gap-4 mb-6">
          <div className="flex -space-x-4">
            {clients.map((client, index) => (
              <div key={index} className="relative group">
                <img 
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white" 
                  src={client.image} 
                  alt={client.name} 
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <p className="font-bold">{client.name}</p>
                  <p>{client.role}</p>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black"></div>
                </div>
              </div>
            ))}
            <div className="relative group flex items-center justify-center h-12 w-12 rounded-full ring-2 ring-white bg-gray-700 text-white text-sm font-bold">
              +99
              {/* Tooltip for +99 */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Have more +99 satisfied clients
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black"></div>
              </div>
            </div>
          </div>
          <p className="text-base font-medium text-gray-700">100+ Satisfied Clients</p>
        </div>

        {/* মূল হেডিং */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Top Software Company in <br /> Bangladesh for Brands
        </h1>

        {/* সাব-হেডিং */}
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          From strategy to execution, we help brands thrive. Partner with the Top Software Company in Bangladesh — your guide to innovation, growth, and lasting success.
        </p>
        
        {/* বাটন */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => setIsCalendlyOpen(true)}
            className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto text-base"
          >
            Book an appointment
          </button>
          <button 
            onClick={() => setIsProfilePopupOpen(true)}
            className="border-2 border-gray-300 text-gray-800 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 hover:border-gray-400 transition duration-300 w-full sm:w-auto text-base"
          >
            See Company Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;