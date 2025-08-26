// src/components/common/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#001f55] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">ZAAG</h3>
            <p className="text-blue-200 text-sm max-w-sm">
              ZAAG Systems Ltd. is a top software company in Bangladesh delivering custom software, web & mobile apps, MVPs, and IT solutions near Dhaka. 🔥
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/" className="text-blue-200 hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/projects" className="text-blue-200 hover:text-white transition-colors">Projects</NavLink></li>
              <li><NavLink to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</NavLink></li>
              <li><NavLink to="/blog" className="text-blue-200 hover:text-white transition-colors">Blog</NavLink></li>
            </ul>
          </div>
          {/* Column 3: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Webflow</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">SaaS Design</a></li>
            </ul>
          </div>
          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li>+8801345734524</li>
              <li>Dhaka, Bangladesh</li>
              <li>
                <a href="#" className="font-bold hover:text-white transition-colors">View On Map 📍</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Links and Reviews */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
                <a href="#" className="text-blue-200 hover:text-white"><FaLinkedinIn size={20} /></a>
                <a href="#" className="text-blue-200 hover:text-white"><FaFacebookF size={20} /></a>
                <a href="#" className="text-blue-200 hover:text-white"><FaTwitter size={20} /></a>
            </div>
            <div className="text-sm text-blue-200">
                <p><strong>Reviews:</strong> Clutch, Good Firms, Google</p>
            </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#001a48] py-5">
        <p className="text-center text-sm text-blue-300">
          © {new Date().getFullYear()} Zaag System Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;