import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react'; // <-- ArrowLeft আইকন ইম্পোর্ট করুন

const UiUxNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/services/ui-ux-design' },
    { title: 'Work', path: '/work' },
    { title: 'Blog', path: '/blog-xd' },
    { title: 'About', path: '/about-xd' },
    { title: 'Contact', path: '/contact-xd' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white py-5 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <NavLink 
          to="/services/ui-ux-design" 
          className="text-2xl font-bold text-gray-800 z-50"
          onClick={closeMenu}
        >
          Zaag<span className="text-red-500">XD.</span>
        </NavLink>

        {/* --- ডেস্কটপ মেনু --- */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              end={link.path === '/services/ui-ux-design'} 
              className={({ isActive }) => 
                `relative text-gray-700 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-blue-600 after:w-full' : ''}`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
        
        {/* --- ডান পাশের বাটন গ্রুপ --- */}
        <div className="hidden md:flex items-center gap-4">
          {/* --- নতুন "Back to Main Site" বাটন --- */}
          <Link
            to="/" // <-- মূল হোমপেজের লিঙ্ক (/)
            className="flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Main Site</span>
          </Link>
          
          <Link
            to="/contact-xd"
            className="relative bg-black text-white px-6 py-2.5 rounded-full font-semibold overflow-hidden group"
          >
            <span className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
            <span className="relative z-10">Start a Project</span>
          </Link>
        </div>

        {/* --- মোবাইল মেনু বাটন --- */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- মোবাইল মেনু --- */}
        <div 
          className={`
            md:hidden fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col items-center justify-center h-full pt-20">
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className="text-3xl font-semibold text-gray-800 hover:text-blue-600"
                  onClick={closeMenu}
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/contact-xd"
              className="mt-12 bg-black text-white px-8 py-4 rounded-full font-semibold text-lg"
              onClick={closeMenu}
            >
              Start a Project
            </Link>

            {/* --- মোবাইল মেনুতে "Back to Main Site" বাটন --- */}
            <Link
              to="/"
              className="mt-8 flex items-center gap-2 text-gray-600 font-medium hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              <ArrowLeft size={16} />
              <span>Back to Main Site</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UiUxNavbar;