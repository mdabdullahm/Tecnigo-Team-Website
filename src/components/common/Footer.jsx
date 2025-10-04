import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">NexCore</h3>
            <p className="text-sm max-w-sm leading-relaxed">
              Your strategic partner in crafting innovative digital solutions that drive growth and deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4 mt-6">
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-red-500 transition-colors"><FaLinkedinIn size={20} /></a>
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-red-500 transition-colors"><FaFacebookF size={20} /></a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-red-500 transition-colors"><FaTwitter size={20} /></a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-red-500 transition-colors"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><NavLink to="/" className="hover:text-red-500 transition-colors">Home</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-red-500 transition-colors">Projects</NavLink></li>
              <li><NavLink to="/services/web-development" className="hover:text-red-500 transition-colors">Services</NavLink></li>
              <li><NavLink to="/career" className="hover:text-red-500 transition-colors">Careers</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-red-500 transition-colors">Blog</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:contact@tecnigoteam.com" className="hover:text-red-500 transition-colors">contact@tecnigoteam.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-red-500 transition-colors">+1 (555) 123-4567</a></li>
              <li className="pt-2">
                <NavLink to="/contact" className="font-semibold text-red-500 hover:text-red-400 transition-colors">
                  Contact Us →
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-sm mb-4">Get the latest insights on tech and innovation delivered to your inbox.</p>
            <form>
                <div className="relative">
                    <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-gray-800 text-white px-4 py-3 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" 
                    />
                    <button 
                        type="submit" 
                        aria-label="Subscribe"
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </form>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NexCore. All Rights Reserved.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;