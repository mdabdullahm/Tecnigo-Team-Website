// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // FiChevronDown ইম্পোর্ট করা হয়েছে
import { Code, Server, PencilRuler, TestTube2, AppWindow, Compass, Gem } from 'lucide-react';

// --- সার্ভিস ডেটা (আগের মতোই) ---
const servicesData = [
  {
    id: 'team-augmentation',
    title: 'Team Augmentation',
    description: 'Boost your workforce',
    subServices: [
      { title: 'Hire Front-End Developers', path: '/services/hire-front-end-developers', icon: <Code size={20} className="text-purple-500" /> },
      { title: 'Hire Back-end Developers', path: '/services/hire-back-end-developers', icon: <Server size={20} className="text-blue-500" /> },
      { title: 'Hire UI/UX Developers', path: '/services/hire-ui-ux-developers', icon: <PencilRuler size={20} className="text-pink-500" /> },
      { title: 'Hire SQA Engineers', path: '/services/hire-sqa-engineers', icon: <TestTube2 size={20} className="text-indigo-500" /> },
      { title: 'Hire Mobile App Developers', path: '/services/hire-mobile-app-developers', icon: <AppWindow size={20} className="text-green-500" /> },
      { title: 'Explore All Resources', path: '/services/resources', icon: <Compass size={20} className="text-teal-500" /> },
    ],
  },
  {
    id: 'end-to-end-dev',
    title: 'End to End Development',
    description: 'Complete Software Solutions',
    subServices: [
      { title: 'Web Development', path: '/services/web-development', icon: <Code size={20} className="text-purple-500" /> },
      { title: 'Mobile Application Development', path: '/services/mobile-app-development', icon: <AppWindow size={20} className="text-green-500" /> },
      { title: 'MVP Development', path: '/services/mvp-development', icon: <Gem size={20} className="text-amber-500" /> },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI UX Design',
    description: 'Enhance Digital Experiences',
    subServices: [
      { title: 'Service Design', path: '/services/service-design', icon: <PencilRuler size={20} className="text-pink-500" /> },
      { title: 'User Research', path: '/services/user-research', icon: <Compass size={20} className="text-teal-500" /> },
      { title: 'Interaction Design', path: '/services/interaction-design', icon: <Code size={20} className="text-purple-500" /> },
    ],
  },
  {
    id: 'mvp-service',
    title: 'MVP Service',
    description: 'Launch Faster with MVP',
    subServices: [
      { title: 'MVP Development', path: '/services/mvp-development-service', icon: <Gem size={20} className="text-amber-500" /> },
    ],
  },
];

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Projects', path: '/projects' },
  { title: 'Team', path: '/team' },
  { title: 'Blog', path: '/blog' },
  { title: 'Career', path: '/career' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState(servicesData[0]);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // <-- মোবাইলের জন্য নতুন state

  // সব মেনু বন্ধ করার জন্য একটি ফাংশন
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false); // <-- মোবাইল সার্ভিস মেনুও বন্ধ হবে
  };

  return (
    <header
      className="bg-white shadow-sm sticky top-0 z-50"
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <NavLink to="/" onClick={closeAllMenus} className="text-3xl font-bold text-blue-700 logo-container">
            <span data-text="Tecnigo Team">Tecnigo Team</span>
          </NavLink>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `text-gray-600 font-medium hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`}>Home</NavLink>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <button className={`text-gray-600 font-medium hover:text-blue-600 flex items-center gap-1 ${isServicesOpen ? 'text-blue-600' : ''}`}>
                Services
                <FiChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {navLinks.slice(1).map(link => (
              <NavLink key={link.title} to={link.path} className={({ isActive }) => `text-gray-600 font-medium hover:text-blue-600 ${isActive ? 'text-blue-600' : ''}`}>{link.title}</NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/contact" className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-800">Contact Us</NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- মোবাইল মেনু (সম্পূর্ণ আপডেট করা হয়েছে) --- */}
      <div className={`
        md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 overflow-y-auto
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-4 py-6 space-y-2">
          <NavLink to="/" onClick={closeAllMenus} className={({ isActive }) => `block text-lg font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md ${isActive ? 'bg-blue-50 text-blue-600' : ''}`}>Home</NavLink>

          {/* মোবাইল সার্ভিসেস অ্যাকর্ডিয়ন */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex justify-between items-center text-lg font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              <span>Services</span>
              <FiChevronDown className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isMobileServicesOpen ? 'max-h-[1000px] mt-2' : 'max-h-0'}
              `}>
              <div className="pl-4 border-l-2 border-blue-100 space-y-1">
                {servicesData.flatMap(service => service.subServices).map(sub => (
                  <NavLink
                    key={sub.path}
                    to={sub.path}
                    onClick={closeAllMenus}
                    className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 hover:text-blue-600 p-2 rounded-md"
                  >
                    {React.cloneElement(sub.icon, { size: 18 })}
                    <span className='text-base'>{sub.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map(link => (
            <NavLink
              key={link.title}
              to={link.path}
              onClick={closeAllMenus}
              className={({ isActive }) => `block text-lg font-medium text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md ${isActive ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              {link.title}
            </NavLink>
          ))}

          <div className="pt-4 mt-4 border-t border-gray-200">
            <NavLink
              to="/contact"
              onClick={closeAllMenus}
              className="w-full text-center block bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      {/* --- সার্ভিসেস মেগা মেনু (ডেস্কটপ) --- */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 transform ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
        onMouseEnter={() => setIsServicesOpen(true)}
      >
        <div className="container mx-auto py-8">
          <div className="w-[850px] mx-auto grid grid-cols-12 overflow-hidden">
            <div className="col-span-4 p-4">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className={`w-full text-left p-4 rounded-lg text-sm font-semibold transition-all ${activeService.id === service.id ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {service.title}
                  <p className="text-xs font-normal text-gray-500">{service.description}</p>
                </button>
              ))}
            </div>
            <div className="col-span-5 p-6 border-l border-r border-gray-100">
              <h3 className="font-bold mb-4 text-gray-800">{activeService.title}</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {activeService.subServices.map((sub) => (
                  <NavLink
                    to={sub.path}
                    key={sub.title}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={closeAllMenus}
                  >
                    {sub.icon}
                    <span className="text-sm font-medium text-gray-700">{sub.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="col-span-3 bg-blue-50/50 p-6 flex flex-col justify-center text-center">
              <h4 className="font-bold text-gray-800">Need different solutions?</h4>
              <p className="text-xs text-gray-500 mt-2">For teams of 300+ with advanced security...</p>
              <NavLink to="/contact" onClick={closeAllMenus} className="mt-4 w-full border border-blue-500 text-blue-600 font-semibold py-2 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition-colors">Contact Us</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;