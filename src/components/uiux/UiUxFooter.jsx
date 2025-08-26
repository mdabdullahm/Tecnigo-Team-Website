import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Link ইম্পোর্ট করা হয়েছে

const UiUxFooter = () => {
    return (
        <footer className="bg-white text-gray-800">
            {/* CTA Section */}
            <div className="bg-black text-white text-center py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold animated-heading" data-text="Want to start a project?">
                        <span>Want to start a project?</span>
                    </h2>
                    <Link 
                        to="/contact-xd"
                        className="mt-10 relative inline-block px-10 py-4 rounded-full font-semibold text-lg bg-white text-black border border-gray-300 overflow-hidden group transition-all duration-300"
                    >
                        <span className="absolute left-0 top-0 w-full h-full bg-blue-600 transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                            Let's Talk
                        </span>
                    </Link>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm h-12">
                        <div className="sparkle-line"></div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-sm">
                        <div className="lg:col-span-2 mb-8 md:mb-0">
                            <h3 className="text-2xl font-bold">Zaag<span className="text-blue-600">XD.</span></h3>
                            <p className="mt-2 text-gray-600">Crafting user friendly products aesthetically</p>
                            <p className="mt-4 text-blue-600 font-semibold">hello@zaagxd.agency</p>
                            
                            {/* --- পরিবর্তন এখানে --- */}
                            {/* button ট্যাগটিকে Link ট্যাগ দিয়ে পরিবর্তন করা হয়েছে */}
                            <Link 
                                to="/contact-xd" // <-- Contact পেজের লিঙ্ক যোগ করা হয়েছে
                                className="mt-4 inline-block bg-black text-white px-6 py-2.5 rounded-full font-semibold relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                                <span className="relative z-10">Contact Us Now</span>
                            </Link>
                        </div>
                        {/* বাকি কলামগুলো অপরিবর্তিত */}
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li><NavLink to="#" className="hover:text-black">Home</NavLink></li>
                                <li><NavLink to="#" className="hover:text-black">Work</NavLink></li>
                                <li><NavLink to="#" className="hover:text-black">Contact</NavLink></li>
                                <li><NavLink to="#" className="hover:text-black">Blog</NavLink></li>
                                <li><NavLink to="#" className="hover:text-black">About</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Services</h4>
                            <ul className="space-y-3 text-gray-600">
                               <li><NavLink to="#" className="hover:text-black">UI/UX Design</NavLink></li>
                               <li><NavLink to="#" className="hover:text-black">Logo & Branding</NavLink></li>
                               <li><NavLink to="#" className="hover:text-black">Webflow</NavLink></li>
                               <li><NavLink to="#" className="hover:text-black">SaaS Design</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <ul className="space-y-3 text-gray-600">
                               <li><a href="#" className="hover:text-black">LinkedIn</a></li>
                               <li><a href="#" className="hover:text-black">Facebook</a></li>
                               <li><a href="#" className="hover:text-black">Twitter</a></li>
                               <li><a href="#" className="hover:text-black">Instagram</a></li>
                               <li><a href="#" className="hover:text-black">Behance</a></li>
                               <li><a href="#" className="hover:text-black">Dribbble</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Reviews</h4>
                            <ul className="space-y-3 text-gray-600">
                               <li><a href="#" className="hover:text-black">Clutch</a></li>
                               <li><a href="#" className="hover:text-black">Design Rush</a></li>
                               <li><a href="#" className="hover:text-black">Good Firms</a></li>
                               <li><a href="#" className="hover:text-black">Google</a></li>
                               <li><a href="#" className="hover:text-black">Webflow</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t">
                         <h4 className="font-bold mb-4">Contact</h4>
                         <p className="text-gray-600">+880 1711507877</p>
                         <p className="text-gray-600">Level 05, House 05, Road 12, Sector 1, Uttara Dhaka, Bangladesh</p>
                         <a href="#" className="inline-flex items-center gap-2 mt-2 font-semibold text-blue-600">View On Map</a>
                    </div>
                    <div className="mt-12 border-t pt-8 text-center text-gray-500 text-sm">
                        <p>© ZaagXD 2024. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default UiUxFooter;