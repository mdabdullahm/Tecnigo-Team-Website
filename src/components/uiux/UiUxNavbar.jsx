// src/components/uiux/UiUxNavbar.jsx

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', path: '/services/ui-ux-design' },
  { title: 'Work', path: '/work' },
  { title: 'Blog', path: '/blog-xd' },
  { title: 'About', path: '/about-xd' },
  { title: 'Contact', path: '/contact-xd' },
];

const UiUxNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll লক করার জন্য useEffect
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-sm py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* --- লোগো --- */}
          <NavLink to="/services/ui-ux-design" onClick={closeMenu} className="text-2xl font-bold text-gray-800 z-50">
            Tecnigo<span className="text-red-600">XD.</span>
          </NavLink>
          
          {/* --- ডেস্কটপ নেভিগেশন (মাঝখানে) --- */}
          <nav className="hidden md:flex items-center gap-2 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
          
          {/* --- ডানদিকের বাটন (ডেস্কটপ) --- */}
          <div className="hidden md:flex items-center gap-4">
              <NavLink 
                  to="/" 
                  className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 transition-colors"
              >
                  <ArrowLeft size={16} />
                  Back to Main Site
              </NavLink>
              <NavLink 
                  to="/contact-xd"
                  className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-black transition-colors"
              >
                  Start a Project
              </NavLink>
          </div>

          {/* --- মোবাইল মেনু বাটন --- */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </header>
      
      {/* --- মোবাইল মেনু --- */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                    `text-2xl font-semibold ${
                        isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                    }`
                    }
                >
                    {link.title}
                </NavLink>
                ))}
            </nav>
            <div className="mt-12 pt-8 border-t border-gray-200 w-full max-w-xs flex flex-col items-center gap-6">
                 <NavLink 
                    to="/contact-xd"
                    onClick={closeMenu}
                    className="w-full text-center bg-gray-900 text-white px-5 py-3 rounded-full font-semibold text-base hover:bg-black transition-colors"
                >
                    Start a Project
                </NavLink>
                <NavLink 
                    to="/" 
                    onClick={closeMenu}
                    className="flex items-center gap-2 text-base font-semibold text-gray-600 hover:text-red-600 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Back to Main Site
                </NavLink>
            </div>
        </div>
      </div>
    </>
  );
};

export default UiUxNavbar;